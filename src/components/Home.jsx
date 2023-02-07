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
        </div>
      </div>
    </div>
  );
};

export default Home;
