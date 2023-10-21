import React from "react";
import Cards from "./Cards";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div className="bg-dark">
      <Carousel />
      <div className="container-fluid">
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-1">
          <Cards
            id={1}
            image={
              "https://m.media-amazon.com/images/I/81A3penuVOL._AC_UY327_FMwebp_QL65_.jpg"
            }
            title="Intel Core i9-12900K Desktop Processor16 (8P+8E) Cores up to 5.2 GHz Unlocked LGA1700 600 Series Chipset 125W"
            price={46999}
            ratings={4}
          />
          <Cards
            id={2}
            image={
              "https://m.media-amazon.com/images/I/81rkaPIoglL._SL1500_.jpg"
            }
            title="
      Cosmic Byte CB-GK-06 Galactic Wired Gaming Keyboard with Aluminium Body, 7 Color RGB Backlit with Effects, Anti-Ghosting (Black/Silver)"
            price={1399}
            ratings={5}
          />
          <Cards
            id={3}
            image={
              "https://m.media-amazon.com/images/I/81HK954c4LL._SX679_.jpg"
            }
            title="Acer Nitro Vg270 S 27 Inch (68.58 Cm) Full Hd IPS Gaming, 165Hz Refresh Rate HDR 10 AMD Radeon Free Sync (2XHdmi 1 X Dp Ports)(Black)"
            price={15999}
            ratings={4}
          />
          <Cards
            id={4}
            image={
              "https://m.media-amazon.com/images/I/61MoK1iMIDL._SX679_.jpg"
            }
            title="Zotac Gaming GeForce RTX 4090 24GB GDDR6X 384-bit 21 Gbps pci_e_x4 Gaming Graphics Card, IceStorm 3.0 Advanced Cooling Spectra 2.0 RGB Lighting"
            price={172000}
            ratings={3}
          />
          <Cards
          id = {5}
            // id={"price_1N6xXjSHgvSf9YWJvYILJpLE"} // this ID is used for stripe but now it is not required
            image={
              "https://m.media-amazon.com/images/I/81dqVCIh4DS._AC_UL480_FMwebp_QL65_.jpg"
            }
            title="HEERRAV RETAIL Multi-Functional Ergonomic Gaming Chair, Premium Leatherette Chair, Adjustable Neck & Lumbar Pillow, 4D Adjustable Armrests."
            price={14999}
            ratings={4}
          />
          <Cards
            id={"price_1N6xdTSHgvSf9YWJwhK3jIVw"}
            image={
              "https://m.media-amazon.com/images/I/61eWHqJJX2L._AC_UY327_FMwebp_QL65_.jpg"
            }
            title="G.SKILL Trident Z Neo 32GB (2 * 16GB) DDR4 3600MHz CL18-22-22-42 1.35V Desktop Memory RAM - F4-3600C18D-32GTZN"
            price={13831}
            ratings={5}
          />
          <Cards
            id={"price_1N6xfhSHgvSf9YWJwynnCHx3"}
            image={
              "https://m.media-amazon.com/images/I/51XaTRLDaIL._AC_UY327_FMwebp_QL65_.jpg"
            }
            title="ASUS ROG Ryujin II 360 All-in-one Liquid CPU Cooler with 3.5 LCD, Embedded Pump Fan and 3X Noctua iPPC 2000 PWM 120mm Radiator Fans, Black."
            price={32000}
            ratings={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
