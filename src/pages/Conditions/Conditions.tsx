import React, { useState, useMemo, useEffect } from "react";
import {
  Card,
  Input,
  Pagination,
  Row,
  Col,
  Empty,
  Button,
  Modal,
  Tooltip,
  Select,
  Space,
  Skeleton,
} from "antd";
import {
  StarOutlined,
  StarFilled,
  FacebookOutlined,
  TwitterOutlined,
  SendOutlined,
} from "@ant-design/icons";
import skinConditions from "../../services/apiConditions";
import {useSelector} from "react-redux";
import "./Conditions.css";
import type {RootState} from "../../app/store";

interface SkinCondition {
  id: number;
  name: string;
  description: string;
  symptoms: string;
  treatment: string;
  image: string;
}

const { Option } = Select;
const PAGE_SIZE = 12;

const Conditions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [favorites, setFavorites] = useState<number[]>(() => {
    try {
      const stored = localStorage.getItem("favorites");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [rarityFilter, setRarityFilter] = useState<"all" | "common" | "rare">("all");
  const [selectedCondition, setSelectedCondition] = useState<SkinCondition | null>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  // @ts-ignore
  const { isAuthenticated,  } = useSelector((state: RootState) => state.auth);


  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites])

  const rarityMap = useMemo<Record<number, "rare" | "common">>(() => {
    const map: Record<number, "rare" | "common"> = {};
    skinConditions.forEach((cond) => {
      map[cond.id] = Math.random() < 0.5 ? "rare" : "common";
    });
    return map;
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const filteredData = useMemo(() => {
    let base = skinConditions;
    if (showFavoritesOnly) base = base.filter((c) => favorites.includes(c.id));
    if (rarityFilter !== "all") base = base.filter((c) => rarityMap[c.id] === rarityFilter);
    if (searchTerm.trim()) {
      const lower = searchTerm.toLowerCase();
      base = base.filter((c) => c.name.toLowerCase().includes(lower));
    }
    return base;
  }, [searchTerm, favorites, showFavoritesOnly, rarityFilter, rarityMap]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredData.slice(start, start + PAGE_SIZE);
  }, [filteredData, currentPage]);

  const openModal = (cond: SkinCondition) => {
    setSelectedCondition(null);
    setTimeout(() => {
      setSelectedCondition(cond);
      setImgLoaded(false);
    }, 0);
  };

  const closeModal = () => {
    setSelectedCondition(null);
  };

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="conditions-container">
      <div className="header-row">
        <h1>Skin Conditions</h1>
        <Space>
          {isAuthenticated && ( <Button
            type={showFavoritesOnly ? "primary" : "default"}
            icon={<StarFilled />}
            onClick={() => {
              setShowFavoritesOnly((v) => !v);
              setCurrentPage(1);
            }}
          >
            {showFavoritesOnly ? "Show All" : "Favorites"}
          </Button>)}
          <Select
            value={rarityFilter}
            onChange={(v) => {
              setRarityFilter(v);
              setCurrentPage(1);
            }}
            style={{ width: 120 }}
          >
            <Option value="all">All</Option>
            <Option value="common">Common</Option>
            <Option value="rare">Rare</Option>
          </Select>
        </Space>
      </div>

      <Input
        placeholder="Search by condition name..."
        allowClear
        size="large"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
        style={{ marginBottom: 24 }}
      />

      <Row gutter={[16, 16]}>
        {paginatedData.length ? (
          paginatedData.map((cond) => (
            <Col key={cond.id} xs={24} sm={12} md={8} lg={6} xl={6}>
              <Card
                className="condition-card"
                hoverable
                onClick={() => openModal(cond)}
              >
                <div className="card-header-row">
                  <Tooltip
                    title={favorites.includes(cond.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    {isAuthenticated &&( favorites.includes(cond.id) ? (<StarFilled
                        className="favorite-icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(cond.id);
                        }}
                      />
                    ) : (
                      <StarOutlined
                        className="favorite-icon"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(cond.id);
                        }}
                      />
                    ))}
                  </Tooltip>
                  <span className={`rarity-badge ${rarityMap[cond.id]}`}>
                    {rarityMap[cond.id][0].toUpperCase() + rarityMap[cond.id].slice(1)}
                  </span>
                </div>

                <div className="card-title-wrapper">
                  <span>{cond.name}</span>
                </div>
                <p className="card-snippet">
                  {cond.description.length > 100
                    ? cond.description.slice(0, 100) + "..."
                    : cond.description}
                </p>
                <div className="card-footer">
                  <Button
                    type="primary"
                    className="details-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(cond);
                    }}
                  >
                    Details
                  </Button>
                </div>
              </Card>
            </Col>
          ))
        ) : (
          <Empty description="No matches found" style={{ width: "100%" }} />
        )}
      </Row>

      <div className="pagination-wrapper">
        {filteredData.length > PAGE_SIZE && (
          <Pagination
            current={currentPage}
            pageSize={PAGE_SIZE}
            total={filteredData.length}
            onChange={onPageChange}
            showSizeChanger={false}
          />
        )}
      </div>

      <Modal
        title={selectedCondition?.name}
        open={!!selectedCondition}
        onCancel={closeModal}
        footer={[
          <Button key="close" onClick={closeModal}>
            Close
          </Button>,
        ]}
        maskStyle={{ backgroundColor: "rgba(230, 244, 255, 0.8)" }}
      >
        {selectedCondition && (
          <>
            <div style={{ marginBottom: 16, textAlign: "center" }}>
              {!imgLoaded && <Skeleton.Image style={{ width: 250, height: 250 }} active />}
              <img
                src={selectedCondition.image}
                alt={selectedCondition.name}
                className="modal-image"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  display: imgLoaded ? "block" : "none",
                  borderRadius: 8,
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                  margin: "0 auto",
                }}
                onLoad={() => setImgLoaded(true)}
              />
            </div>

            <p>
              <strong>Description:</strong> {selectedCondition.description}
            </p>
            <p>
              <strong>Symptoms:</strong> {selectedCondition.symptoms}
            </p>
            <p>
              <strong>Treatment:</strong> {selectedCondition.treatment}
            </p>
            <div className="share-section">
              <Button
                type="text"
                icon={<FacebookOutlined />}
                onClick={() => {
                  const text = `${selectedCondition.name}: ${selectedCondition.description}`;
                  const url = encodeURIComponent(window.location.href);
                  window.open(
                    `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodeURIComponent(
                      text
                    )}`,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Facebook
              </Button>
              <Button
                type="text"
                icon={<TwitterOutlined />}
                onClick={() => {
                  const text = `${selectedCondition.name}: ${selectedCondition.description}`;
                  const url = encodeURIComponent(window.location.href);
                  window.open(
                    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                      text
                    )}&url=${url}`,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Twitter
              </Button>
              <Button
                type="text"
                icon={<SendOutlined />}
                onClick={() => {
                  const text = `${selectedCondition.name}: ${selectedCondition.description}`;
                  const url = encodeURIComponent(window.location.href);
                  window.open(
                    `https://t.me/share/url?url=${url}&text=${encodeURIComponent(text)}`,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Telegram
              </Button>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Conditions;
