import React from "react";

function Skeleton() {
  return (
    <div className="max-w-sm w-full mx-auto">
      <div className="bg-white shadow-md rounded-md p-4">
        <div className="animate-pulse flex flex-col space-y-4">
          <div className="bg-gray-200 h-40 rounded"></div>
          <div className="space-y-6">
            <div className="h-2 bg-gray-200 rounded"></div>
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-2">
                <div className="h-2 bg-gray-200 rounded col-span-2"></div>
                <div className="h-2 bg-gray-200 rounded"></div>
              </div>
              <div className="h-2 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skeleton;
