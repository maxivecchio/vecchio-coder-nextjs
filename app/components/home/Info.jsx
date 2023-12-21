import React from "react";
import { LiaTruckLoadingSolid } from "react-icons/lia";

const Info = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 bg-gray-100 dark:bg-gray-800 w-full py-20 justify-center">

      <div className="flex items-center border border-foreground p-10 rounded-md space-x-10">
        <LiaTruckLoadingSolid className="text-5xl" />
        <div>
          <h3>ENVÍOS A TODO EL PAÍS</h3>
          <p>Comprá y recibilo en la puerta de tu casa.</p>
        </div>
      </div>

      <div className="flex items-center border border-foreground p-10 rounded-md space-x-10">
        <LiaTruckLoadingSolid className="text-5xl" />
        <div>
          <h3>DESCUENTOS EXCLUSIVOS</h3>
          <p>Pagá en efectivo y accedé a beneficios.</p>
        </div>
      </div>

      <div className="flex items-center border border-foreground p-10 rounded-md space-x-10">
        <LiaTruckLoadingSolid className="text-5xl" />
        <div>
          <h3>TARJETAS DE CRÉDITO</h3>
          <p>Trabajamos con todas las Tarjetas.</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
