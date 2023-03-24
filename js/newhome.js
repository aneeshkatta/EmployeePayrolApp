let employeePayrolllist;
window.addEventListener('DOMContentLoaded', (event) => {
    employeePayrolllist = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent=employeePayrolllist.length;
    createInnerHtml();
     localStorage.removeItem('editEmp');
});
