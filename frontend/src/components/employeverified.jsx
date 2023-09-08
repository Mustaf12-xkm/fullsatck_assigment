import React, { useEffect, useState } from "react";
import Verifiedlist from "./verifiedlist";
import axios from 'axios';
function employeverified({verifedEmployees, updated, setUpdated}) {
 

  return (
    <div className='w-[90%] mx-auto'>
      <h2 className="text-lg font-bold mb-4 text-center">verified Employees </h2>
      {verifedEmployees.length > 0 && verifedEmployees.map((employee) => (
        <Verifiedlist key={employee._id} data={employee}   updated={updated} setUpdated={setUpdated}/>
        ))}
    </div>
  );
}

export default employeverified;
