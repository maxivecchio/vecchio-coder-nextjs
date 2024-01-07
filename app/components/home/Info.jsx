import React from "react";
import { LiaTruckLoadingSolid } from "react-icons/lia";

const Info = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 bg-gray-100 dark:bg-gray-800 w-full py-20 justify-center">
      <div className="flex items-center border border-foreground p-10 rounded-md space-x-10">
        <LiaTruckLoadingSolid className="text-5xl" />
        <div>
          <h3>SHIPPING NATIONWIDE</h3>
          <p>Shop and receive it at your doorstep.</p>
        </div>
      </div>

      <div className="flex items-center border border-foreground p-10 rounded-md space-x-10">
        <LiaTruckLoadingSolid className="text-5xl" />
        <div>
          <h3>EXCLUSIVE DISCOUNTS</h3>
          <p>Pay in cash and access benefits.</p>
        </div>
      </div>

      <div className="flex items-center border border-foreground p-10 rounded-md space-x-10">
        <LiaTruckLoadingSolid className="text-5xl" />
        <div>
          <h3>CREDIT CARDS</h3>
          <p>We work with all credit cards.</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
