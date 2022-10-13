import React, { useState } from "react";
import BuyNowBtn from "../../Components/BuyNowBtn";

const TopBanner = () => {
  const [color, setColor] = useState("White");
  const [image, setImage] = useState({
    image: "https://i.ibb.co/vYjTGg5/blue1.png",
    name: "Front Side",
    id: "blue1",
    color: "Blue",
  });
  const [images, setImages] = useState([{
    image: "https://i.ibb.co/vYjTGg5/blue1.png",
    name: "Front Side",
    id: "blue1",
    color: "Blue",
  },
  {
    image: "https://i.ibb.co/QmbJ6dK/blue2.png",
    name: "Back Side",
    id: "blue2",
    color: "Blue",
  },
  {
    image: "https://i.ibb.co/9ym6kGL/blue3.png",
    name: "Foldable Position",
    id: "blue3",
    color: "Blue",
  },
  {
    image: "https://i.ibb.co/HX2fKSV/blue4.png",
    name: "Angle Position",
    id: "blue4",
    color: "Blue",
  },])

  const headphones = [
    {
      image: "https://i.ibb.co/PW013sT/black1.png",
      name: "Front Side",
      id: "black1",
      color: "Black",
    },
    {
      image: "https://i.ibb.co/6rwsqwk/black2.png",
      name: "Back Side",
      id: "black2",
      color: "Black",
    },
    {
      image: "https://i.ibb.co/5ndhh1J/black3.png",
      name: "Foldable Position",
      id: "black3",
      color: "Black",
    },
    {
      image: "https://i.ibb.co/DQfBp5Q/black4.png",
      name: "Angle Position",
      id: "black4",
      color: "Black",
    },

    {
      image: "https://i.ibb.co/vmc57QV/white1.png",
      name: "Front Side",
      id: "white1",
      color: "White",
    },
    {
      image: "https://i.ibb.co/WHFY9zB/white2.png",
      name: "Back Side",
      id: "white2",
      color: "White",
    },
    {
      image: "https://i.ibb.co/DkHrysd/white3.png",
      name: "Foldable Position",
      id: "white3",
      color: "White",
    },
    {
      image: "https://i.ibb.co/Kmw6QHK/white4.png",
      name: "Angle Position",
      id: "white4",
      color: "White",
    },
    {
      image: "https://i.ibb.co/vYjTGg5/blue1.png",
      name: "Front Side",
      id: "blue1",
      color: "Blue",
    },
    {
      image: "https://i.ibb.co/QmbJ6dK/blue2.png",
      name: "Back Side",
      id: "blue2",
      color: "Blue",
    },
    {
      image: "https://i.ibb.co/9ym6kGL/blue3.png",
      name: "Foldable Position",
      id: "blue3",
      color: "Blue",
    },
    {
      image: "https://i.ibb.co/HX2fKSV/blue4.png",
      name: "Angle Position",
      id: "blue4",
      color: "Blue",
    },
    {
      image: "https://i.ibb.co/LYJTTXb/red1.png",
      name: "Front Side",
      id: "red1",
      color: "Red",
    },
    {
      image: "https://i.ibb.co/jgFKJFR/red2.png",
      name: "Back Side",
      id: "red2",
      color: "Red",
    },
    {
      image: "https://i.ibb.co/qk0WdyZ/red3.png",
      name: "Foldable Position",
      id: "red3",
      color: "Red",
    },
    {
      image: "https://i.ibb.co/TbMfJwS/red4.png",
      name: "Angle Position",
      id: "red4",
      color: "Red",
    },
    {
      image: "https://i.ibb.co/4JRmjss/gray1.png",
      name: "Front Side",
      id: "gray1",
      color: "Gray",
    },
    {
      image: "https://i.ibb.co/gWSBtt6/gray2.png",
      name: "Back Side",
      id: "gray2",
      color: "Gray",
    },
    {
      image: "https://i.ibb.co/xJFT0kC/gray3.png",
      name: "Foldable Position",
      id: "gray3",
      color: "Gray",
    },
    {
      image: "https://i.ibb.co/3dPvFvv/gray4.png",
      name: "Angle Position",
      id: "gray4",
      color: "Gray",
    },
  ];

  const colorHandler = (value) => {
    const filteredImage = headphones.filter((image) => image.color === value)[0];
    const filteredImages = headphones.filter(img => img.color === value)
    setImage(filteredImage);
    setImages(filteredImages)
    setColor(value)
    
  };

  const imageHandler = (value) => {
    const filteredImages = headphones.filter(img => img.id === value)[0]
    setImage(filteredImages)
  }


  return (
    <main className="my-6 d-flex justify-center items-center">
      <section className="md:flex flex-row items-center justify-center sm:px-20 px-6 mx-auto">
        <div className="basis-2/3 py-10 flex flex-row">
          <div className="basis-1/5 space-y-6 py-10 m-auto">
            
                  <div className="bg-black border-[0.5px] border-white rounded-full h-8 w-8">
                    <button title="Black"
                      onClick={() => colorHandler("Black")}
                      className="text-white w-full h-full"
                    >
                      B
                    </button>
                  </div>
                  <div className="bg-white border-[0.5px] border-black rounded-full h-8 w-8">
                    <button title="White"
                      onClick={() => colorHandler("White")}
                      className="text-black w-full h-full"
                    >
                      W
                    </button>
                  </div>
                  <div className="bg-[#051836] border-[0.5px] border-white rounded-full h-8 w-8">
                    <button title="Blue"
                      onClick={() => colorHandler("Blue")}
                      className="text-white w-full h-full"
                    >
                      B
                    </button>
                  </div>
                  <div className="bg-red-700 border-[0.5px] border-white rounded-full h-8 w-8">
                    <button title="Red"
                      onClick={() => colorHandler("Red")}
                      className="text-white w-full h-full"
                    >
                      R
                    </button>
                  </div>
                  <div className="bg-gray-700 border-[0.5px] border-white rounded-full h-8 w-8">
                    <button title="Gray"
                      onClick={() => colorHandler("Gray")}
                      className="text-white w-full h-full"
                    >
                      G
                    </button>
                  </div>
                
          </div>
          <div className="basis-4/5 my-auto">
            <div>
              <img src={image.image} alt="" />
            </div>
            <div className="flex flex-row sm:w-1/2 space-x-4 mx-auto">
                {
                    images.map(image => <div className="basis-1/4 border-2 border-slate-500 hover:cursor-pointer">
                    <img src={image.image} onMouseEnter={() => imageHandler(`${image.id}`)} alt="" />
                </div>)
                }
                
            </div>
          </div>
        </div>
        <div className="basis-1/3 space-y-6 py-10">
          <h1 className="text-3xl font-bold text-gray-200">
            Beats Studio3 Wireless Over-Ear Headphones -
            {image.color}
          </h1>
          <p className="text-white text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
            quisquam vel dolor perspiciatis similique. Maxime excepturi
            doloremque aliquam sunt aliquid! 
          </p>
          <BuyNowBtn />
        </div>
      </section>
    </main>
  );
};

export default TopBanner;
