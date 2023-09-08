import React, { useEffect, useState } from "react";
import Form from "./components/form";
import EmployeList from "./components/employelist";
import Employeverified from "./components/employeverified";
import axios from "axios";
function App() {
  const [unVerfiedEmployees, setUnVerfiedEmployees] = useState([]);
  const [verifedEmployees, setVerifedEmployees] = useState([]);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    const fetchUnverifedEmployees = async () => {
      try {
        const { data } = await axios.get("/api/v1/test/get-employes");

        setUnVerfiedEmployees(data.employee);
      } catch (error) {
        console.error("Error fetching employees:", error.message);
      }
    };

    fetchUnverifedEmployees();
  }, [updated]);

  useEffect(() => {
    const fetchVerifiedEmployees = async () => {
      try {
        const { data } = await axios.get("/api/v1/test/get-verified-employes");
        // console.log(response.data)
        setVerifedEmployees(data.employees);
      } catch (error) {
        console.error("Error fetching employees:", error.message);
      }
    };

    fetchVerifiedEmployees();
  }, [updated]);

  return (
    <div>
      <Form updated={updated} setUpdated={setUpdated}/>
      <EmployeList
        unVerfiedEmployees={unVerfiedEmployees}
        setUnVerfiedEmployees={setUnVerfiedEmployees}
       
        updated={updated}
        setUpdated={setUpdated}
      />
      <Employeverified
        verifedEmployees={verifedEmployees}
        setVerifedEmployees={setVerifedEmployees}
        updated={updated}
        setUpdated={setUpdated}
      />
    </div>
  );
}

export default App;
