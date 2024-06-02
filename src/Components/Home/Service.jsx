import React from "react";

const Service = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-pry h-16 w-16 flex items-center justify-center rounded-full">
        {icon}
      </div>
      <h4 className="font-semibold text-xl">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default Service;
