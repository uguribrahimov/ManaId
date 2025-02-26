import React from 'react';

const DotComponent = ({ area, handleAreaClick, isSelected, handleMoreInfoClick }) => {
  return (
    <div>
      <div
        className="dot"
        style={{
          top: `${area.top}%`,
          left: `${area.left}%`,
        }}
        onClick={() => handleAreaClick(area.title)}
      />
      {isSelected && (
        <div className="area-details p-1 bg-white shadow" style={{ top: `${area.top - 40}%`, left: `${area.left + 10}%`, width: "150px" }}>
          <img src={area.image} alt={area.title} className="w-100 h-auto mb-1" />
          <h5 className="mb-1">{area.title}</h5>
          <p className="mb-1">Price: {area.price}</p>
          <button className="btn btn-dark" onClick={() => handleMoreInfoClick(area.id)}>More Info</button>
        </div>
      )}
    </div>
  );
};

export default DotComponent;
