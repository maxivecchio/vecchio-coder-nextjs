"use client"
import React, { useState } from "react";

export default function SlideBar() {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeChange = (size) => {
    setSelectedSize(size);;
  };

  return (
    <div className="col-span-1 bg-white px-4 pb-6 shadow-[0_35px_60px_15px_rgba(0,0,0,0.1)] rounded overflow-hiddenb hidden md:block">
      <div className="divide-y divide-gray-200 space-y-5">
        <div>
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
            Categories
          </h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cat-1"
                id="cat-1"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="cat-1"
                className="text-gray-600 ml-3 cusror-pointer"
              >
                Trajes para Hombres
              </label>
              <div className="ml-auto text-gray-600 text-sm">(3)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cat-2"
                id="cat-2"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="cat-2"
                className="text-gray-600 ml-3 cusror-pointer"
              >
                Vestidos Formales para Mujeres
              </label>
              <div className="ml-auto text-gray-600 text-sm">(3)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cat-3"
                id="cat-3"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="cat-3"
                className="text-gray-600 ml-3 cusror-pointer"
              >
                Accesorios para Trajes
              </label>
              <div className="ml-auto text-gray-600 text-sm">(3)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cat-4"
                id="cat-4"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="cat-4"
                className="text-gray-600 ml-3 cusror-pointer"
              >
                Ropa Formal para Mujeres
              </label>
              <div className="ml-auto text-gray-600 text-sm">(3)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cat-4"
                id="cat-4"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="cat-4"
                className="text-gray-600 ml-3 cusror-pointer"
              >
                Ropa de Ceremonia
              </label>
              <div className="ml-auto text-gray-600 text-sm">(3)</div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="cat-4"
                id="cat-4"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
              />
              <label
                htmlFor="cat-4"
                className="text-gray-600 ml-3 cusror-pointer"
              >
                Ropa Formal para Niños
              </label>
              <div className="ml-auto text-gray-600 text-sm">(3)</div>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
            Price
          </h3>
          <div className="mt-4 flex items-center">
            <input
              type="text"
              name="min"
              id="min"
              className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
              placeholder="min"
            />
            <span className="mx-3 text-gray-500">-</span>
            <input
              type="text"
              name="max"
              id="max"
              className="w-full border-gray-300 focus:border-primary rounded focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
              placeholder="max"
            />
          </div>
        </div>

        <div className="pt-4">
          <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
            size
          </h3>
          <div className="flex items-center gap-2">
            <div className="size-selector">
              <input type="radio" name="size" id="size-xs" className="hidden" />
              <label
                onClick={() => handleSizeChange("XS")}
                htmlFor="size-xs"
                className={`text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 ${
                  selectedSize === "XS" ? "bg-secondary text-white" : ""
                }`}
              >
                XS
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-sm" className="hidden" />
              <label
                onClick={() => handleSizeChange("S")}
                htmlFor="size-xs"
                className={`text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 ${
                  selectedSize === "S" ? "bg-secondary text-white" : ""
                }`}
              >
                S
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-sm" className="hidden" />
              <label
                onClick={() => handleSizeChange("M")}
                htmlFor="size-xs"
                className={`text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 ${
                  selectedSize === "M" ? "bg-secondary text-white" : ""
                }`}
              >
                M
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-sm" className="hidden" />
              <label
                onClick={() => handleSizeChange("L")}
                htmlFor="size-xs"
                className={`text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 ${
                  selectedSize === "L" ? "bg-secondary text-white" : ""
                }`}
              >
                L
              </label>
            </div>
            <div className="size-selector">
              <input type="radio" name="size" id="size-sm" className="hidden" />
              <label
                onClick={() => handleSizeChange("XL")}
                htmlFor="size-xs"
                className={`text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600 ${
                  selectedSize === "XL" ? "bg-secondary text-white" : ""
                }`}
              >
                XL
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
