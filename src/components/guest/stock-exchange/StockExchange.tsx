import React from "react";

const StockExchange: React.FC = () => {
  return (
    <>
      <div className="scraped-data">
        {/* Embed the PSE website in an iframe */}
        <iframe
          title="PSEi Website"
          src="https://frames.pse.com.ph/"
          width="100%"
          height="500"
        ></iframe>
      </div>
    </>
  );
};

export default StockExchange;
