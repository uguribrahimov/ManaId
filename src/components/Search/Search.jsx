import React, { useState, useEffect } from "react";
import { Input, Dropdown, Menu, Row, Col } from "antd";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../Store/SearchSlice"; // Redux'tan cartItems'ı almak için
import { fetchCartItems } from "../../Store/SearchSlice"; // API'den cartItems'ı çekmek için

const SearchInput = ({ placeholder = "Search...", onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  

  // Redux'tan cartItems'ı almak
  const cartItems = useSelector(selectCartItems);
  console.log(
    cartItems
  );
  
  const dispatch = useDispatch();

  // Cart verilerini çekmek için useEffect kullanıyoruz
  useEffect(() => {
    dispatch(fetchCartItems()); // Redux'tan fetchCartItems'i tetikleyerek API'den veriyi alıyoruz
  }, [dispatch]);

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchText(query);

    // onSearch fonksiyonunu tetikleyelim
    if (onSearch) {
      onSearch(query);
    }

    // Arama metni boş değilse, cartItems üzerinde filtreleme yapalım
    if (query) {
      const results = cartItems.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) // name alanına göre filtreleme
      );
      setFilteredResults(results);
    } else {
      setFilteredResults([]); // Arama boşsa sonuçları sıfırlıyoruz
    }
  };

  // Dropdown menüsünü oluşturuyoruz
  const menu = (
    <Menu>
      {filteredResults.length > 0 ? (
        filteredResults.map((item, index) => (
          <Menu.Item key={index}>
            <Row gutter={8}>
              <Col xs={6} sm={6} md={6} lg={6} xl={4}>
                {/* Ürün görselini büyütmek */}
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{ 
                    width: "60px", 
                    height: "60px", 
                    objectFit: "cover", 
                    borderRadius: "5px" 
                  }} 
                />
              </Col>
              <Col xs={18} sm={18} md={18} lg={18} xl={20}>
                {/* Ürün adı ve kategori */}
                <div style={{ fontWeight: "bold", fontSize: "14px" }}>{item.name}</div>
                <div style={{ color: "#888", fontSize: "12px" }}>{item.category}</div>
                {/* Ürün fiyatı */}
                <div style={{ color: "#333", fontSize: "14px", marginTop: "5px" }}>
                  {item.price}
                </div>
              </Col>
            </Row>
          </Menu.Item>
        ))
      ) : (
        <Menu.Item>No results found</Menu.Item>
      )}
    </Menu>
  );

  return (
    <div className="position-relative w-100" style={{ maxWidth: "100%" }}>
      <Input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder={placeholder}
        className="form-control px-4 py-2"
        style={{
          borderRadius: "20px", 
          paddingRight: "40px", 
          width: "100%", 
          maxWidth: "100%", 
          boxSizing: "border-box"
        }}
      />
      <FaSearch
        style={{
          position: "absolute",
          right: "15px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#555",
          cursor: "pointer",
        }}
      />
      <Dropdown
        overlay={menu}
        visible={filteredResults.length > 0 && searchText.length > 0}
        placement="bottomLeft"
        trigger={['focus', 'click']}
        style={{ width: '100%' }}
      >
        <div />
      </Dropdown>
    </div>
  );
};

export default SearchInput;
