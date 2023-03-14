//Day46_uc2//
window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('.text-error');
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
    const output = document.querySelector('.salary-output');
    output.textContent = salary.value;
    salary.addEventListener('input', function () {
        output.textContent = salary.value;
    });

});

/* D46 uc3*/
const save = () => {
    try {
        let employeePayrollData = createEmployeePayroll();
        createAndUpdateStorage(employeePayrollData);
    } catch (e) {
        return;
    }
}
const createEmployeePayroll = () => {
    employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');

    } catch (e) {
        setTextValue('.text-error', e);
        throw e;
    }

    employeePayrollData.profilePic = getSelectedvalues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedvalues('[name=gender]').pop();
    employeePayrollData.department = getSelectedvalues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#note');
    let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year');
    employeePayrollData.startdate = new Date(date);
    alert(employeePayrollData.toString());//pop window once
    return employeePayrollData;//pop window twice
}
const getSelectedvalues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if (item.checked)
            selItems.push(item.value);
    });
    return selItems;
}

const getInputValueById = (id) => {
    let value = document.querySelector(id).value;
    return value;
}
const getInputElementValue = (id) => {
    let value = getInputValueById(id).value;
    return value;
}
// Day46 uc04
function createAndUpdateStorage(employeePayrollData) {
    let employeePayrolllist = JSON.parse(localStorage.getItem("EmployeePayrolllist"));
    if (employeePayrolllist != undefined) {
        employeePayrolllist.push(employeePayrollData);
    }
    else {
        employeePayrolllist = [employeePayrollData];
    }
    alert(employeePayrolllist.toString());
    localStorage.setItem("EmployeePayrolllist", JSON.stringify(employeePayrolllist));
}
// uc05 custom type-reset
const resetForm = () => {
    setValue('#name', '');
    unsetSelectedValues('[name=profile]');
    unsetSelectedValues('[name=gender]');
    unsetSelectedValues('[name=department]');
    setValue('#salary', '');
    setValue('#note', '');
    setValue('#day', '1');
    setValue('#month', 'january');
    setValue('#year', '2022');
}
const unsetSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    allItems.forEach(item => {
        item.checked = false;
    });
};
const setTextValue = (id, value) => {
    const element = document.querySelector(id);
    element.textContent = value;
}
const setValue=(id,value)=>{
    const element=document.querySelector(id);
    element.value=value;
}
