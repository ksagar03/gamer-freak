import CurrencyFormat from "react-currency-format";

import React from "react";

const Currency = ({ price_value }) => {
  return (
    <div>
      <CurrencyFormat
        renderText={(price_value) => <strong>{price_value}</strong>}
        decimalScale={2}
        value={price_value}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  );
};

export default Currency;
