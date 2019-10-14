const Employee = require('../models/employee');
const employeeController = {};

employeeController.getEmployees = async (req,res,next) => {
  const employees = await Employee.find();
  res.json(employees);
};

employeeController.createEmployee = async (req,res,next) => {
  const employee = new Employee(req.body);
  // const {name,position,office,salary} = req.body;
  // employee.name = name;
  // employee.position = position;
  // employee.office = office;
  // employee.salary = salary;
  await employee.save();
  res.json({
    status:  "Employee created successfully"
  });
};

employeeController.getEmployee = async (req,res,next) => {
  const employee = await Employee.findById(req.params.id);
  res.json(employee);
};

employeeController.editEmployee = async (req,res,next) => {
  const {id} = req.params;
  const employee = {
    name : req.body.name,
    position : req.body.position,
    office : req.body.office,
    salary : req.body.salary
  };
  await Employee.findByIdAndUpdate(id,{$set:employee},{new:true});
  res.json({
    status: 'Employee updated successfully'
  });
};

employeeController.deleteEmployee = async (req,res,next) => {
  //await Employee.findByIdAndDelete(req.params.id);
  await Employee.findByIdAndRemove(req.params.id);
  res.json({
    status: 'Employee deleted successfully'
  });
}

module.exports = employeeController;
