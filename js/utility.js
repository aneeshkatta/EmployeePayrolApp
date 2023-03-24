const stringifyDate=(date)=>{
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const newDate = !date ? 'undefined': new Date(Date.parse(date)).toLocaleDateString('en-GB', options);
    return newDate;
}
let site_Properties={
    home_page:"../html/EmployeeHomePage.html",
    add_emp_payrollpage:"../html/Employee.html"
};

const update=(node)=>{
    let employeePayrollData=employeePayrolllist.find(empData._id==node._id)
    if(!employeePayrollData) {return;}
    localStorage.setItem('editEmp',JSON.stringify(employeePayrollData));
    window.location.replace(site_Properties.add_emp_payrollpage);
}