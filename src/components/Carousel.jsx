import React, { useEffect } from "react";
import { getData } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImport from "react-slick";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Category from "./Category";
import { Link } from "react-router-dom";

const Slider = SliderImport.default || SliderImport;

const Carousel = () => {
  const { data, fetchAllProducts } = getData();
  console.log(data);
  useEffect(() => {
    fetchAllProducts();
  }, []);

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onClick={onClick}
        className={`arrow ${className}`}
        style={{ zIndex: 3 }}
      >
        <ChevronLeft
          className="arrows"
          strokeWidth={0.8}
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            color: "white",
            position: "absolute",
            padding: "2px",
            top: window.innerWidth < 768 ? "50%" : "0",
            transform: window.innerWidth < 768 ? "translateY(100%)" : "0",
            left: window.innerWidth < 768 ? "10px" : "50px",
          }}
          // onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#555")}
        />
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <ChevronRight
          className="arrows"
          strokeWidth={0.8}
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            color: "white",
            position: "absolute",
            padding: "2px",
            top: window.innerWidth < 768 ? "50%" : "0",
            transform: window.innerWidth < 768 ? "translateY(100%)" : "0",
            right: window.innerWidth < 768 ? "10px" : "50px",
          }}
          // onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#555")}
        />
      </div>
    );
  };

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow to="next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
  };
  return (
    <div>
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-[#131921] via-[#232f3e] to-[#37475a] -z-10
              "
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center h-[600px] my-10 md:my-0 items-center px-4 md:px-4">
                {/* LEFT */}
                <div className="space-y-4 md:space-y-6 space-x-0 md:space-x-50 text-center md:text-left">
                  <h3 className="text-red-600 font-bold font-sans text-sm md:text-md">
                    Curating timeless elegance through the finest in beauty and
                    fashion.
                  </h3>

                  <h1 className="text-2xl md:text-4xl font-bold uppercase line-clamp-3 md:w-[500px] text-white">
                    {item.name}
                  </h1>

                  <p className="text-sm md:text-base md:w-[500px] line-clamp-3 text-gray-400 pr-0 md:pr-7">
                    {item.description}
                  </p>

                  <Link to={"/products"}>
                    <button
                      className="bg-gradient-to-r from-yellow-400 to-yellow-900
        hover:bg-gradient-to-r hover:from-yellow-900 hover:to-yellow-400
        transition-all duration-300
        text-white
        px-3 py-1.5 md:px-4 md:py-2
        text-sm md:text-base
        rounded-md
        w-[110px] md:w-auto
        mx-auto md:mx-0
        block cursor-pointer"
                    >
                      Shop Now
                    </button>
                  </Link>
                </div>

                {/* RIGHT */}
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[250px] h-[250px] md:w-110 md:h-110 rounded-full object-contain bg-white p-2 hover:scale-105 transition-all shadow-2xl shadow-yellow-200"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <Category />
    </div>
  );
};

export default Carousel;
