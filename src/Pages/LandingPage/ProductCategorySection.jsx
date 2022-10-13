import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MoreBtn from "../../Components/MoreBtn";

const ProductCategorySection = () => {
  const productCatgory = [
    {
      image: "https://i.ibb.co/jbT6vq4/image1.png",
      name: "Airpods Pro",
    },
    {
      image: "https://i.ibb.co/HPJqbjZ/image2.png",
      name: "Airpods Max",
    },
    {
      image: "https://i.ibb.co/kK75Yw6/image3.png",
      name: "Beats Studio Buds",
    },
    {
      image: "https://i.ibb.co/sJH4tzJ/image4.png",
      name: "Beats Flex",
    },
    {
      image: "https://i.ibb.co/8YyVjFD/image5.png",
      name: "Powerbeats Pro",
    },
    {
      image: "https://i.ibb.co/cvqNLm6/image6.png",
      name: "Beats Fit Pro ",
    },
  ];
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <main>
      <section>
        <div className="p-12">
          <Slider {...settings}>
            {productCatgory.map((prd) => (
              <div className="space-y-3 h-2/3 sm:p-12 group">
                <div className="h-2/3">
                  <img src={prd.image} alt="" className="group-hover:-translate-y-4 transition duration-500"/>
                </div>
                <div>
                  <h3 className="text-3xl font-semibold text-white">
                    {prd.name}
                  </h3>
                </div>
                <hr />
                <div>
                  <p className="text-lg text-gray-400">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Esse eligendi vitae .
                  </p>
                </div>
                <div>
                  <MoreBtn />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </main>
  );
};

export default ProductCategorySection;
