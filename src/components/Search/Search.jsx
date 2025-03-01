import React, { useState, useEffect } from "react";
import { Input, Dropdown, Menu, Row, Col } from "antd";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, fetchCartItems } from "../../Store/SearchSlice"; 
import { useNavigate } from "react-router-dom";
import styles from "./Search.module.css"; 

const SearchInput = ({ placeholder = "Search...", onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCartItems()); 
  }, [dispatch]);

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchText(query);

    if (onSearch) {
      onSearch(query);
    }

    if (query) {
      const results = cartItems.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) 
      );
      setFilteredResults(results);
      setDropdownVisible(true);
    } else {
      setFilteredResults([]); 
      setDropdownVisible(false);
    }
  };

  const handleItemClick = (id) => {
    navigate(`/cartDetails/${id}`);
    setDropdownVisible(false);
  };

  const menu = (
    <Menu style={{ maxHeight: "250px", overflowY: "auto" }}>
      {filteredResults.length > 0 ? (
        filteredResults.map((item) => (
          <Menu.Item key={item.id} onClick={() => handleItemClick(item.id)}>
            <Row gutter={8} align="middle">
              <Col xs={6}>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  style={{ 
                    width: "50px", 
                    height: "50px", 
                    objectFit: "cover", 
                    borderRadius: "5px" 
                  }} 
                />
              </Col>
              <Col xs={18}>
                <div style={{ fontWeight: "bold", fontSize: "14px" }}>{item.name}</div>
                <div style={{ color: "#888", fontSize: "12px" }}>{item.category}</div>
                <div style={{ color: "#333", fontSize: "14px", marginTop: "5px" }}>{item.price}</div>
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
    <div className={styles.searchContainer}>
      <Dropdown
        overlay={menu}
        open={dropdownVisible && filteredResults.length > 0 && searchText.length > 0} 
        placement="bottomLeft"
        trigger={["click"]}
      >
        <div className={styles.inputWrapper}>
          <Input
            type="text"
            value={searchText}
            onChange={handleChange}
            placeholder={placeholder}
            className={styles.searchInput}
          />
          <FaSearch className={styles.searchIcon} />
        </div>
      </Dropdown>
    </div>
  );
};

export default SearchInput;
