import React, { useEffect, useState } from "react";
import axios from "axios";
import Employe from "./employe";
const EmployeList = ({unVerfiedEmployees, setUnVerfiedEmployees,  updated,setUpdated}) => {


  



  return (
    <div className="w-[50%] mx-auto">
      <h2 className="text-lg font-bold mb-4 text-center">
        Waiting Interview List List
      </h2>
      <ul>
        {unVerfiedEmployees.length > 0 && unVerfiedEmployees.map(employee =>
          <Employe
            key={employee._id}
            data={employee}
            updated={updated} setUpdated={setUpdated}
            // onEmployeUpdated = { updatePost }
          />
        )}
      </ul>
    </div>
  );
};

export default EmployeList;
