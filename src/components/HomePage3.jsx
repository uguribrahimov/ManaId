import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage3 = () => {
  const categories = [
    {
      title: "Sofas",
      description: "Comfortable and stylish sofas for your living room.",
      image: "../../src/assets/imgHomePage4-1.png",
    },
    {
      title: "Beds",
      description: "Get a good night's sleep with our premium beds.",
      image: "../../src/assets/imgHomePage4-2.png",
    },
    {
      title: "Tables",
      description: "Elegant tables for every home and office.",
      image: "../../src/assets/imgHomePage4-3.png",
    },
    {
      title: "Chairs",
      description: "Comfortable chairs for every room in your house.",
      image: "../../src/assets/imgHomePage4-4.png",
    },
  ];

  return (
    <div className="d-flex flex-column align-items-center p-3 bg-light" style={{ minHeight: "100vh" }}>
      <header className="text-center mb-4 p-3">
        <h1 className="display-4 fw-bold mb-2">Furniture Categories</h1>
        <p className="text-muted">
          We provide excessive benefits for members who subscribe <br />
          every month with mana id, because.
        </p>
      </header>

      <div className="w-100">
        <div className="d-flex gap-3 mb-3">
          <div className="card bg-white text-white position-relative" style={{ flex: "0 0 60%", borderRadius: "10px", overflow: "hidden", height: "250px", transition: "transform 0.3s ease" }}>
            <img
              src={categories[0].image}
              alt={categories[0].title}
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
            <div className="position-absolute bottom-0 left-0 right-0 p-3" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
              <h3 className="h5 fw-bold">{categories[0].title}</h3>
              <p className="mb-0">{categories[0].description}</p>
            </div>
          </div>
          <div className="card bg-white text-white position-relative" style={{ flex: "0 0 40%", borderRadius: "10px", overflow: "hidden", height: "250px", transition: "transform 0.3s ease" }}>
            <img
              src={categories[1].image}
              alt={categories[1].title}
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
            <div className="position-absolute bottom-0 left-0 right-0 p-3" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
              <h3 className="h5 fw-bold">{categories[1].title}</h3>
              <p className="mb-0">{categories[1].description}</p>
            </div>
          </div>
        </div>
        <div className="d-flex gap-3">
          <div className="card bg-white text-white position-relative" style={{ flex: "0 0 40%", borderRadius: "10px", overflow: "hidden", height: "250px", transition: "transform 0.3s ease" }}>
            <img
              src={categories[2].image}
              alt={categories[2].title}
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
            <div className="position-absolute bottom-0 left-0 right-0 p-3" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
              <h3 className="h5 fw-bold">{categories[2].title}</h3>
              <p className="mb-0">{categories[2].description}</p>
            </div>
          </div>
          <div className="card bg-white text-white position-relative" style={{ flex: "0 0 60%", borderRadius: "10px", overflow: "hidden", height: "250px", transition: "transform 0.3s ease" }}>
            <img
              src={categories[3].image}
              alt={categories[3].title}
              className="w-100 h-100"
              style={{ objectFit: "cover" }}
            />
            <div className="position-absolute bottom-0 left-0 right-0 p-3" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
              <h3 className="h5 fw-bold">{categories[3].title}</h3>
              <p className="mb-0">{categories[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage3;
