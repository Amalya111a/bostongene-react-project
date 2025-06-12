
// src/components/Cart.tsx
import React, { useEffect, useState } from 'react';
import { Drawer, List, Button, Typography, message, Spin, Image, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../app/store';
import { fetchCart, deleteCartItem, addToCart, CartItem } from '../../features/cart/cartSlice';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
const { Text } = Typography;
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbwW6n9WalkI6wq7DQjRVpzIJ82sUrEIUm1UkhIE6JG7Eos5Iv-cgxJJZN4iSaeg4yUI/exec';

interface CartProps {
  userId: string;
  visible: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ userId, visible, onClose }) => {
  const dispatch =
useDispatch<AppDispatch>();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const products = useSelector((state: RootState) => state.products.products); // products array from redux
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (visible) {
      setLoading(true);
      dispatch(fetchCart(userId))
        .unwrap()
        .catch(() => message.error('Failed to load cart'))
        .finally(() => setLoading(false));
    }
  }, [visible, userId, dispatch]);


  const handleDelete = async (productId: string) => {
    console.log("Deleting product: ", productId);
    try {
      const res = await axios.post(proxyUrl + GOOGLE_SHEET_URL, {
        action: 'delete',       // ✅ This tells the backend to delete
        userId: userId,         // ✅ same userId as in the sheet
        productId: productId,   // ✅ match productId as in the sheet
      });

      const data = res.data; // Axios parses JSON automatically
      console.log("Delete response:", data);

      if (data.success) {
        message.success('Item removed from cart');
        dispatch(fetchCart(userId)); // refresh the cart
      } else {
        message.error(data.message || 'Could not remove item');
      }
    } catch (error) {
      console.error('Delete error:', error);
      message.error('Error removing item');
    }
  };
  const handleChangeQuantity = async (item: CartItem, delta: number) => {
    const newQuantity = item.quantity + delta;

    // Allow quantity 0 to remove item
    if (newQuantity < 0) return;

    if (newQuantity === 0) {
      await handleDelete(item.productId);
      return;
    }

    try {
      await dispatch(addToCart({
        userId: item.userId,
        productId: item.productId,
        quantity: delta, // send delta
      })).unwrap();

      await dispatch(fetchCart(userId)).unwrap(); // Refresh cart after quantity change
    } catch {
      message.error('Failed to update quantity');
    }
  };

  // Map cart items with product info
  const enrichedCartItems = cartItems.map(item => {
    // Note: productId is string, product.id is number, convert for comparison
    const product = products.find(p => p.id === Number(item.productId));
    return {
      ...item,
      name: product?.title || 'Unknown product',
      image: product?.image || 'https://via.placeholder.com/60',
    };
  });

  return (
    <Drawer
      title="Your Shopping Cart"
      placement="right"
      onClose={onClose}
      open={visible}
      width={400}
      bodyStyle={{ padding: 20 }}
    >
      {loading ? (
        <Spin tip="Loading..." />
      ) : enrichedCartItems.length === 0 ? (
        <Text>Your cart is empty.</Text>
      ) : (
        <>
          <List
            itemLayout="horizontal"
            dataSource={enrichedCartItems}
            renderItem={(item: CartItem & { name: string; image: string }) => (
              <List.Item
                key={item.productId} // Add unique key
                actions={[
                  <Button
                    icon={<DeleteOutlined />}
                    danger
                    onClick={ () =>
                        {                 console.log("Delete button clicked for:", item.productId);
                          handleDelete(item.productId.toString());

                        }
                    }

                    key="delete"
                  />,
                ]}
              >
                <List.Item.Meta
                  avatar={<Image src={item.image} width={60} height={60} style={{ borderRadius: 8 }} />}
                  title={<Text strong>{item.name}</Text>}
                  description={
                    <Space align="center">
                      <Button
                        icon={<MinusOutlined />}
                        size="small"
                        onClick={() => handleChangeQuantity(item, -1)}
                        disabled={item.quantity <= 0} // allow decrement until 0
                      />
                      <Text>Quantity: {item.quantity}</Text>
                      <Button
                        icon={<PlusOutlined />}
                        size="small"
                        onClick={() => handleChangeQuantity(item, 1)}
                      />
                    </Space>
                  }
                />
              </List.Item>
            )}
          />
          <Button
            type="primary"
            block
            style={{ marginTop: 20 }}
            onClick={() => message.success('Checkout coming soon!')}
          >
            Checkout
          </Button>
        </>
      )}
    </Drawer>
  );
};

export default Cart;
