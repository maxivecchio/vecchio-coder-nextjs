import React from "react";

const Description = ({ producto }) => {
  return (
    <div className="container pb-16">
      <h3 className="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
        Product details
      </h3>
      <div className="w-3/5 pt-6">
        <div className="text-gray-600">
          <p>{producto.description}</p>
        </div>

        <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
          <tbody>
            <tr>
              <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                Material
              </th>
              <th className="py-2 px-4 border border-gray-300 ">
                {producto.material}
              </th>
            </tr>
            <tr>
              <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                Weight
              </th>
              <th className="py-2 px-4 border border-gray-300 ">
                {producto.weight}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Description;
