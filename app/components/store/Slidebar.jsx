import React from "react";
import StoreAccordion from "@/app/components/store/StoreAccordion";

const Slidebar = () => {
  
  return (
    <div className="bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <div>
        <aside className="flex flex-col w-80 p-4 py-8 overflow-y-auto">
          <h1 className="text-2xl border-b dark:border-gray-700">Filtros</h1>
          <div className="flex flex-col left-0 justify-between flex-1 mt-6">
            <nav className="flex-1 space-y-3">
              <StoreAccordion />
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Slidebar;
