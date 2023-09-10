import React from "react";
import axios from "axios";
function verifiedlist({ data, updated, setUpdated }) {
  const removeEmployees = async () => {
    try {
      const response = await axios.post(
        `/api/v1/test/update-employes/${data._id}`,
        { verified: false }
      );
  
      setUpdated(!updated);

    } catch (error) {
      console.error("Error updating employees:", error.message);
    }
  };
  return (
    <div>
      <ul className="bg-white rounded-lg shadow divide-y divide-gray-200 ">
        <li className="py-4 px-6 flex items-center justify-between my-2">
          <span className="text-lg">
            {data.name}
          </span>
          <div>
            <button
              onClick={removeEmployees}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Remove
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default verifiedlist;
