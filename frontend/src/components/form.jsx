import React, { useState } from "react";
import axios from "axios";
import { useRef } from "react";

function form({updated, setUpdated}) {
  const [name, setName] = useState("");

const handlesubmit = async(e) => {
  e.preventDefault();


    try {
    if(name===''){
      return
    }
      const response = await axios.post('/api/v1/test/', { name });
      console.log('Employee added:', response.data);
      // inputRef.target.value = '';
      setUpdated(!updated)
      setName("")
    } catch (error) {
      console.error('Error adding employee:', error.message);
    }

};
  return (
    <div className="container mx-auto py-8 w-[50%]">
      <form onSubmit={handlesubmit} className="mb-4">
        <div className="flex items-center">
          <input
          // ref={inputRef}
            onChange={e => setName(e.target.value)}
            type="text"
            value={name}
            placeholder="Enter name"
            className="shadow appearance-none border rounded w-full py-2 px-3 mr-4"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default form;
