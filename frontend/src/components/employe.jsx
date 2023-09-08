import React, { useEffect } from "react";
import axios from "axios";
function employe({ data, updated, setUpdated }) {


  const updateEmployees = async () => {
    try {
      const response = await axios.post(
        `/api/v1/test/update-employes/${data._id}`,
        { verified: true }
      );
      // onEmployeUpdated(data)
      setUpdated(!updated)
      console.log(response);
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
              onClick={updateEmployees}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Verify
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default employe;
