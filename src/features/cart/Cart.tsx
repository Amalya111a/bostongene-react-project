// src/components/Cart.tsx
import React, { useEffect, useState } from 'react';
import { List, Button, Typography, message, Spin, Image, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../app/store';
import { fetchCart, deleteCartItem, addToCart, CartItem } from '../../features/cart/cartSlice';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
const { Text } = Typography;
// const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
// const proxyUrl = 'https://corsproxy.io/?';
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbwW6n9WalkI6wq7DQjRVpzIJ82sUrEIUm1UkhIE6JG7Eos5Iv-cgxJJZN4iSaeg4yUI/exec';

interface CartProps {
  userId: string;
  // remove visible and onClose props as no drawer here now
}

const Cart: React.FC<CartProps> = ({ userId }) => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const products = useSelector((state: RootState) => state.products.products);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchCart(userId))
      .unwrap()
      .catch(() => message.error('Failed to load cart'))
      .finally(() => setLoading(false));
  }, [userId, dispatch]);

  const handleDelete = async (productId: string) => {
    try {
      const res = await axios.post(GOOGLE_SHEET_URL, {
        action: 'delete',
        userId: userId,
        productId: productId,
      });

      const data = res.data;
      if (data.success) {
        message.success('Item removed from cart');
        dispatch(fetchCart(userId));
      } else {
        message.error(data.message || 'Could not remove item');
      }
    } catch {
      message.error('Error removing item');
    }
  };

  const handleChangeQuantity = async (item: CartItem, delta: number) => {
    const newQuantity = item.quantity + delta;
    if (newQuantity < 0) return;
    if (newQuantity === 0) {
      await handleDelete(item.productId);
      return;
    }
    try {
      await dispatch(addToCart({
        userId: item.userId,
        productId: item.productId,
        quantity: delta,
      })).unwrap();

      await dispatch(fetchCart(userId)).unwrap();
    } catch {
      message.error('Failed to update quantity');
    }
  };

  const enrichedCartItems = cartItems.map(item => {
    const product = products.find(p => p.id === Number(item.productId));
    return {
      ...item,
      name: product?.title || 'Unknown product',
      image: product?.image || 'https://via.placeholder.com/60',
    };
  });

  if (loading) return <Spin tip="Loading..." />;

  if (enrichedCartItems.length === 0) return <Text>Your cart is empty.</Text>;

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={enrichedCartItems}
        renderItem={(item: CartItem & { name: string; image: string }) => (
          <List.Item
            key={item.productId}
            actions={[
              // <Button
              //   icon={<DeleteOutlined />}
              //   danger
              //   onClick={() => handleDelete(item.productId.toString())}
              //   key="delete"
              // />,
            ]}
          >
            <List.Item.Meta
              avatar={<Image src={item.image} width={60} height={60} style={{ borderRadius: 8 }} />}
              title={<Text strong>{item.name}</Text>}
              // description={
              //   <Space align="center">
              //     <Button
              //       icon={<MinusOutlined />}
              //       size="small"
              //       onClick={() => handleChangeQuantity(item, -1)}
              //       disabled={item.quantity <= 0}
              //     />
              //     <Text>Quantity: {item.quantity}</Text>
              //     <Button
              //       icon={<PlusOutlined />}
              //       size="small"
              //       onClick={() => handleChangeQuantity(item, 1)}
              //     />
              //   </Space>
              // }
            />
          </List.Item>
        )}
      />
      {/* <Button
        type="primary"
        block
        style={{ marginTop: 20 }}
        onClick={() => message.success('Checkout coming soon!')}
      >
        Checkout
      </Button> */}
    </>
  );
};

export default Cart;