import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate kullanıyoruz
import apiClient from "../../api"; // Axios API istemcisi
import styles from "./HomePage3.module.css"; // CSS module'ü import ediyoruz

const HomePage3 = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate(); // useNavigate hook'u

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await apiClient.get("/categories");
        setCategories(response); // response.data kullanılıyor
      } catch (error) {
        console.error("Veri çekme hatası:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate(`/InspirationDetails/${categoryId}`); // Dinamik kategori sayfasına yönlendirme
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Furniture Categories</h1>
        <p className={styles.headerDescription}>
          We provide excessive benefits for members who subscribe <br />
          every month with mana id, because.
        </p>
      </header>

      <div className={styles.categoryList}>
        {categories.map((category, index) => (
          <div
            key={index}
            className={styles.categoryCard}
            onClick={() => handleCategoryClick(category.id)} // Kategoriye tıklayınca yönlendir
          >
            <img
              src={category.image}
              alt={category.title}
              className={styles.categoryCardImage}
            />
            <div className={styles.categoryCardInfo}>
              <h3 className={styles.categoryCardTitle}>{category.title}</h3>
              <p className={styles.categoryCardDescription}>{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage3;
