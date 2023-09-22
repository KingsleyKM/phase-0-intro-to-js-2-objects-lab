// Write your solution in this file!
// const  employee = { name: value3,streetAdress:value2}

const employee = {
    name : "kings",
    streetAddress : "moi"
};
function updateEmployeeWithKeyAndValue(employee , key , value){
    const newObj = {...employee}
    newObj[key] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
   employee.streetAddress = "12 Broadway"
   return employee
}
function deleteFromEmployeeByKey(){
    const {name, ...rest} = employee
    return rest
}
function destructivelyDeleteFromEmployeeByKey(name){
    delete employee.name
    return employee
}