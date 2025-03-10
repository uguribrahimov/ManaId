import React, { useEffect, useState } from "react";
import { Card, Button, Input } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./HomePage4.module.css";
import { useNavigate } from "react-router-dom";
import apiClient from "../../api"; 

const { Search } = Input;

const HomePage4 = () => {
  const [furnitureData, setFurnitureData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [activeFilter, setActiveFilter] = useState("ALL");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("/furnitureData");
        setFurnitureData(response);
        setFilteredData(response);
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (value) => {
    const filtered = furnitureData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === "ALL") {
      setFilteredData(furnitureData);
    } else {
      setFilteredData(furnitureData.filter((item) => item.category === category));
    }
  };

  const handleDetailsClick = (id) => {
    navigate(`/cartDetails/${id}`);
  };

  return (
    <div className={`container py-4 ${styles.furniturePage}`}>
      <header className={`${styles.header}`}>
        <div className={styles.headerLeft}>
          <h1 className={`${styles.logo}`}>Mana Mebelləri</h1>
          <div className={`${styles.filterButtons}`}>
            {["ALL", "Suvenir", "Stul", "Kreslo", "Güzgü", "Yataq"].map((category) => (
              <Button
                key={category}
                type="button"
                className={`btn ${activeFilter === category ? 'btn-dark' : 'btn-outline-dark'} ${styles.filterButton}`}
                onClick={() => handleFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        <div className={styles.headerRight}>
          <Search
            placeholder="Mebel axtar"
            allowClear
            onSearch={handleSearch}
            className={styles.searchInput}
          />
        </div>
      </header>

      <div className="row g-4">
        {filteredData.map((item) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={item.id}>
            <Card
              cover={<img alt={item.name} src={item.image} className="card-img-top" />}
              className={`card ${styles.furnitureCard}`}
            >
              <div className={`card-body ${styles.cardContent}`}>
                <div className={`d-flex flex-column align-items-start ${styles.cardHeader}`}>
                  <span className={`card-title ${styles.cardName}`}>{item.name}</span>
                  <span className={`card-text ${styles.cardPrice}`}>{item.price}</span>
                </div>
                <div className={`d-flex justify-content-between align-items-center ${styles.cardFooter}`}>
                  <span className={`badge ${styles.cardCategory}`}>{item.category}</span>
                  <Button 
                    className={`btn ${styles.detailsButton}`} 
                    onClick={() => handleDetailsClick(item.id)} 
                  >
                    See Details
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage4;