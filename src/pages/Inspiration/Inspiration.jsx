import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import apiClient from '../../api';
import './inspiration.css'; // CSS dosyasını içe aktardık

function App() {
  const [cardsData, setCardsData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get('/inspiration');
        setCardsData(response);
        setFilteredData(response);

        // Kategorileri belirle (tekrar edenleri kaldır)
        const uniqueCategories = ['All', ...new Set(response.map(item => item.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };

    fetchData();
  }, []);

  // Filtreleme fonksiyonu
  const filterByCategory = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredData(cardsData);
    } else {
      setFilteredData(cardsData.filter(item => item.category === category));
    }
  };

  const handleViewMore = (id) => {
    console.log(id);
    
    navigate(`/inspirationDetails/${id}`);
  };

  return (
    <div className="container mt-5">
      {/* Başlık ve Filtreler */}
      <h2 className="page-title">Inspiration</h2>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => filterByCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Kartlar */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredData.map((card) => (
          <div className="col mb-4" key={card.id}>
            <div className="h-100 card-container">
              {/* Büyük Resim */}
              <div className="image-container">
                <img
                  src={card.images[0]}
                  className="card-img-top"
                  alt="Large"
                />
                <button className="view-more-btn" onClick={() => handleViewMore(card.id)}>
                  View More
                </button>
              </div>

              {/* Küçük Resimler */}
              <div className="row g-2">
                {card.images.slice(1).map((image, index) => (
                  <div className="col-4" key={index}>
                    <img
                      src={image}
                      className="card-img-bottom"
                      alt={`Small ${index + 1}`}
                    />
                  </div>
                ))}
              </div>

              {/* Kart Gövdesi */}
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
