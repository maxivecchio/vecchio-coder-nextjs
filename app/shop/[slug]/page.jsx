import React from "react";

const page = ({ params }) => {
  return (
    <div className="mt-16">
      <div>{params.slug}</div>
    </div>
  );
};

export default page;

