
let employeePayrolllist;
window.addEventListener('DOMContentLoaded', (event) => {
    employeePayrolllist = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent=employeePayrolllist.length;
    createInnerHtml();
     localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage=()=>{
    return localStorage.getItem('EmployeePayrolllist')? JSON.parse(localStorage.getItem('EmployeePayrolllist')):[];
};

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";
    if (employeePayrolllist.length == 0) {return;}
    let innerHtml = ` ${headerHtml}`;
    for (const employeePayrollData of employeePayrolllist) 
    {
        innerHtml = ` ${innerHtml} 
        <tr>
            <td><img class="profile" src="${employeePayrollData._profilePic}" alt="" ></td>
            <td>${employeePayrollData._name}</td>
            <td>${employeePayrollData._gender}</td>
            <td>${getDeptHtml(employeePayrollData._department)}</td>
            <td>${employeePayrollData._salary}</td>
            <td>${stringifyDate(employeePayrollData._startdate)}</td>
            <td>
                <img id="${employeePayrollData._id}"  onclick="remove(this)" src="../assets/assets/icons/delete-black-18dp.svg"  alt="delete" >
                <img id="${employeePayrollData._id}"  onclick="update(this)" src="../assets/assets/icons/create-black-18dp.svg" alt="edit">
            </td>
        </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML=innerHtml;
}

const getDeptHtml=(deptList)=>{
    let deptHtml='';
    for (const dept of deptList) {
        deptHtml=`${deptHtml}<div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

const remove=(node)=>{
    let employeePayrollData= employeePayrolllist.find(empData=>empData._id==node._id);
if(!employeePayrollData) return;
const index=employeePayrolllist.map(empData=>empData._id).indexOf(employeePayrollData._id);
employeePayrolllist.splice(index,1);
localStorage.setItem("EmployeePayrolllist",JSON.stringify(employeePayrolllist));
document.querySelector(".emp-count").textContent=employeePayrolllist.length;
createInnerHtml();
}


