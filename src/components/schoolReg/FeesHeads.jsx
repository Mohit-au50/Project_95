import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const FeesHeads = () => {
  const [feeHeadName, setFeeHeadName] = useState("");
  const [feeHeadCode, setFeeHeadCode] = useState("");
  const [feeData, setFeeData] = useState([]);

  const handleAdd = () => {
    if (feeHeadName.trim() !== "" && feeHeadCode.trim() !== "") {
      const newData = {
        id: Date.now(),
        feeHeadName,
        feeHeadCode,
      };

      setFeeData([...feeData, newData]);
      setFeeHeadName("");
      setFeeHeadCode("");
    } else {
      alert("Please enter Fee Head Name and Fee Head Code");
    }
  };

  const handleDelete = (id) => {
    const updatedData = feeData.filter((data) => data.id !== id);
    setFeeData(updatedData);
  };

  const handleEdit = (id) => {
    console.log("Edit data with ID:", id);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between space-x-4 border-2 rounded-lg p-4">
        <div className="w-full flex items-center space-x-4">
          <label className="block text-sm font-medium whitespace-nowrap">
            Fee Head Name <sup className="text-xl text-red-700">&#8902;</sup>
          </label>
          <input
            type="text"
            value={feeHeadName}
            placeholder="Enter Fee Head Name"
            onChange={(e) => setFeeHeadName(e.target.value)}
            className="w-full px-3 py-2 border-2 outline-none rounded"
          />
        </div>
        <div className="w-full flex items-center space-x-4">
          <label className="block text-sm font-medium whitespace-nowrap">
            Fee Head Code <sup className="text-xl text-red-700">&#8902;</sup>
          </label>
          <input
            type="text"
            value={feeHeadCode}
            placeholder="Enter Fee Head Code"
            onChange={(e) => setFeeHeadCode(e.target.value)}
            className="w-full px-3 py-2 border-2 outline-none rounded"
          />
        </div>
        <button
          onClick={handleAdd}
          className="py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Add
        </button>
      </div>

      {feeData.length > 0 && (
        <div className="border-2 rounded-lg p-4 mt-4">
          <div className="flex items-center justify-around font-medium text-gray-400">
            <p>S No.</p>
            <p>FEE HEAD NAME</p>
            <p>FEE HEAD CODE</p>
            <p>ACTION</p>
          </div>

          <div>
            {feeData.map((data, index) => (
              <div
                key={data.id}
                className="flex items-baseline justify-around space-x-16 py-2.5"
              >
                <p>{index + 1}.</p>
                <p>{data.feeHeadName}</p>
                <p>{data.feeHeadCode}</p>
                <div className="flex space-x-4">
                  <TrashIcon
                    onClick={() => handleDelete(data.id)}
                    className="w-5 h-5 fill-red-500"
                  />
                  <PencilSquareIcon
                    onClick={() => handleEdit(data.id)}
                    className="w-5 h-5 fill-green-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FeesHeads;
