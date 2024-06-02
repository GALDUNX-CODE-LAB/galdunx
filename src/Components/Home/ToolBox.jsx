import React from "react";

function ToolBox({ title, src, alt, description }) {
  return (
    <div className="bg-gray-50 group text-black py-8 px-4 rounded-2xl hover:bg-pry hover:bg-opacity-70 duration-300 transform">
      <div className="flex justify-between">
        <h4 className="text-xl font-semibold">{title}</h4>
        <div>
          <img src={src} alt={alt} className="w-full max-w-14" />
        </div>
      </div>
      <p className="mt-4 text-gray-700 group-hover:text-gray-100">
        {description}
      </p>
    </div>
  );
}

export default ToolBox;
