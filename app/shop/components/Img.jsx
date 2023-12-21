import React from "react";

const Img = ({ producto }) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img src={producto.thumbnail} alt={producto.name} className="w-96" />
      </div>
    </div>
  );
};

export default Img;
