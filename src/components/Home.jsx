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
            image={
              "https://m.media-amazon.com/images/I/61ROx1hBZyL._SX679_.jpg"
            }
            title="Lenovo Legion M200 RGB Gaming Wired USB Mouse, Ambidextrous, 5-Buttons, Upto 2400 DPI with 4 Levels DPI Switch, 7-Colour RGB Backlight (GX30P93886)"
            price={1113}
          />
          <Cards
            image={
              "https://m.media-amazon.com/images/I/81rkaPIoglL._SL1500_.jpg"
            }
            title="
      Cosmic Byte CB-GK-06 Galactic Wired Gaming Keyboard with Aluminium Body, 7 Color RGB Backlit with Effects, Anti-Ghosting (Black/Silver)"
            price={1399}
          />
          <Cards
            image={
              "https://m.media-amazon.com/images/I/81HK954c4LL._SX679_.jpg"
            }
            title="Acer Nitro Vg270 S 27 Inch (68.58 Cm) LCD Monitor with LED Backlight Full Hd IPS Gaming I 0.5 Ms Response Time I 165Hz Refresh Rate I HDR 10 I AMD Radeon Free Sync I (2 X Hdmi 1 X Dp Ports) (Black)"
            price={15999}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
