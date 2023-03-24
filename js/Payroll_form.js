let isUpdate=false;
let employeepayrollobj={};
window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new EmployeePayrollData()).name = name.value;
            textError.textContent = "";
        }
        catch (e) {
            textError.textContent = e;
        }
    });
        const salary = document.querySelector('#salary');
        setTextValue('.salary-output', salary.value)
        salary.addEventListener('input', function () {
            output.textContent = salary.value;
        });
        checkForUpdate();    
    });
    const checkForUpdate = () => {
        const employeePayrollJson=localStorage.getItem('editEmp');
    isUpdate= employeePayrollJson ? true : false;
    if(!isUpdate) return;
    employeepayrollobj=JSON.parse(employeePayrollJson);
    setForm();
    }
    const setForm = () => {
    setValue('#name',employeepayrollobj._name);
    setSelectedValue('[name=profile]',employeepayrollobj._profilePic);
    setSelectedValue('[name=gender]',employeepayrollobj._gender);
    setSelectedValue('[name=department]',employeepayrollobj._department);
    setValue('#salary',employeepayrollobj._salary);
    setTextValue('.salary-output',employeepayrollobj._salary);
    setValue('#notes',employeepayrollobj._note);
    let date=stringifyDate(employeepayrollobj._startdate).split(" ");
    setValue('#day',date[0]);
    setValue('#month',date[1]);
    setValue('#year',date[2]);
    }
    const setSelectedValue=(propertyValue,value)=>{
        let allItems=document.querySelector(propertyValue);
        allItems.forEach(item => {
            if (Array.isArray(value)) {
                if (value.includes(item.value)) {
                    item.checked=true;
                }
            }
                else(item.checked === value)
                    item.checked=true;        
        });
    }
