
//Day46_uc2//
window.addEventListener('DOMContentLoaded',(event)=>
{
    const name=document.querySelector('#name');
    const textError = document.querySelector('.text-error');
    name.addEventListener('input',function()
    {
        if(name.value.length==0)
        {
            textError.textContent="";
            return;
        }
        try
        {
            (new EmployeePayrollData()).name=name.value;
            textError.textContent="";
        }
        catch(e)
        {
            textError.textContent=e;
        }
    });
    const startDate=document.querySelector('#startDate');
    const DatetextError = document.querySelector('.text-error');
    name.addEventListener('input',function()
    {
        if(startDate.value.length==0)
        {
            DatetextError.textContent="";
            return;
        }
        try
        {
            (new EmployeePayrollData()).name=startDate.value;
            DatetextError.textContent="";
        }
        catch(e)
        {
            DatetextError.textContent=e;
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
        let employeePayrollData = new createEmployeePayroll();//
        // CreateAndUpdateStorage(employeePayrollData);

    } catch (e) {
        return;
    }
}
const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');

    } catch (e) {
        SetTextValue('.textError', e);
        throw e;
    }

    employeePayrollData.Profilepic = getSelectedvalues('[name=Profilepic]'.pop());
    // employeePayrollData.name=getSelectedvalues('[name=name]'.pop());
    employeePayrollData.gender = getSelectedvalues('[name=gender]'.pop());
    employeePayrollData.salary = getInputValueById('#salary');

    let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year');
    employeePayrollData.startDate = new Date(date);
    employeePayrollData.notes = getInputValueById('#notes');
    employeePayrollData.Department = getSelectedvalues('[name=Department]');

    alert(employeePayrollData.toString());
    return employeePayrollData;
}
const getSelectedvalues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let selItems = [];
    allItems.forEach(item => {
        if (item.checked) {
            selItems.push(item.value);
        }
    });
    return selItems;
}

const getInputValueById = id => {
    let value = document.querySelector(id).value;
    return value;
}
const getInputValueByValue = id => {
    let value = getInputValueById(id).value;
    return value;
}
