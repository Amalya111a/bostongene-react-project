import React, { useState } from 'react';
import { Card, Modal } from 'antd';

interface Clinic {
  id: number;
  name: string;
  address: string;
  phone?: string;
  image?: string;
  hoverImage?: string;
  email?: string;
  website?: string;
  description?: string;
}

const ClinicCard: React.FC<{ clinic: Clinic }> = ({ clinic }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <>
      <Card
        className="clinic-card"
        hoverable
        onClick={openModal}
        bordered={false}
        cover={
          clinic.image ? (
            <img
              alt={clinic.name}
              src={hovered && clinic.hoverImage ? clinic.hoverImage : clinic.image}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/fallback.jpg';
              }}
              className="clinic-image"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
          ) : null
        }
      >
        <Card.Meta
          title={clinic.name}
          description={
            <>
              <p>{clinic.address}</p>
              {clinic.phone && <p>📞 <a href={`tel:${clinic.phone}`}>{clinic.phone}</a></p>}
            </>
          }
        />
      </Card>

      <Modal
        open={modalVisible}
        onCancel={closeModal}
        footer={null}
        title={clinic.name}
        bodyStyle={{ borderRadius: '16px' }}
        centered
        width={600}
      >
        {clinic.image && (
          <img
            src={clinic.image}
            alt={clinic.name}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/fallback.jpg';
            }}
            className="modal-image"
          />
        )}
        <p><strong>Address:</strong> {clinic.address}</p>
        {clinic.phone && <p><strong>Phone:</strong> <a href={`tel:${clinic.phone}`}>{clinic.phone}</a></p>}
        {clinic.email && <p><strong>Email:</strong> <a href={`mailto:${clinic.email}`}>{clinic.email}</a></p>}
        {clinic.website && (
          <p><strong>Website:</strong> <a href={clinic.website} target="_blank" rel="noopener noreferrer">{clinic.website}</a></p>
        )}
        <p><strong>About:</strong> {clinic.description || 'text1'}</p>
      </Modal>
    </>
  );
};

export default ClinicCard;
