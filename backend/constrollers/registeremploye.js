import Employee from "../models/employe.js";

export const registeremploye = async (req, res) => {
  try {
    const employee = new Employee({ ...req.body, verified: false });
    res.status(200).send({employee });
    await employee.save();
  } catch (e) {
    console.log("error creating employee");
  }
};

  export const getAllEmployees = async (req,res) => {
  try {
    const employees = await Employee.find({verified: false}).sort({updatedAt: -1});
    res.status(200).send({ employee: employees });
  } catch (error) {
    console.error("Error getting employees:", error.message);
  }
};


export const getAllverifiedEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({ verified: true }).sort({updatedAt: -1});
    res.status(200).send({ employees });
  } catch (error) {
    console.error("Error getting employees:", error.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
};


export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const { verified } = req.body;
    
    const updatedEmployee = await Employee.findByIdAndUpdate(
      id,
      { verified },
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).send({ error: "Employee not found" });
    }

    res.status(200).send({ employee: updatedEmployee });
  } catch (error) {
    console.error("Error updating employee:", error.message);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
