window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});
// //ES6 feature
// const createInnerHtml=()=>{
//  const innerHtml=`
//  <!-- uc3 -->
//  <tr>
//      <th></th>
//      <th>Name</th>
//      <th>Gender</th>
//      <th>Department</th>
//      <th>Salary</th>
//      <th>Start Date</th>
//      <th>Actions</th>
//  </tr>   

//  <tr>
//      <td><img class="profile" alt="" src="../assets/assets/profile-images/Ellipse -2.png"></td>
//      <td> Narayan Mahadevan</td>
//      <td>Male</td>
//      <td>
//          <div>HR</div>
//          <div>Finance</div>
//      </td>
//      <td>300000</td>
//      <td>1 nov 2020</td>
//      <td>
//          <img id="1" onclick="remove(this)" alt="delete" src="../assets/assets/icons/delete-black-18dp.svg">
//          <img id="1" onclick="update(this)" alt="edit" src="../assets/assets/icons/create-black-18dp.svg">
//      </td>
//  </tr>
//  `;
//  document.querySelector('#table-display').innerHTML=innerHtml;
// }
//ES6 feature
// const createInnerHtml=()=>{
//     const headerHtml="<tr><th></th><th>Name</th><th>Gender</th><th>Department</th>"+"<th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
//     const innerHtml=` ${headerHtml}
//     <tr>
//         <td><img class="profile" alt="" src="../assets/assets/profile-images/Ellipse -2.png"></td>
//         <td> Narayan Mahadevan</td>
//         <td>Male</td>
//         <td>
//             <div>HR</div>
//             <div>Finance</div>
//         </td>
//         <td>300000</td>
//         <td>1 nov 2020</td>
//         <td>
//             <img id="1" onclick="remove(this)" alt="delete" src="../assets/assets/icons/delete-black-18dp.svg">
//             <img id="1" onclick="update(this)" alt="edit" src="../assets/assets/icons/create-black-18dp.svg">
//         </td>
//     </tr>
//     `;
//     document.querySelector('#table-display').innerHTML=innerHtml;
//    }

//uc05 json object for one employee display using json object
// const createInnerHtml = () => {
//     const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th>" + "<th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
//     let employeePayrollData = createEmployeePayrollJSON()[0];
//     const innerHtml = ` ${headerHtml}
//         <tr>
//             <td><img class="profile" alt="" src="${employeePayrollData._profilePic}"></td>
//             <td> ${employeePayrollData._name}</td>
//             <td>${employeePayrollData._gender}</td>
//             <td>
//                 <div>${employeePayrollData._department[0]}</div>
//                 <div>${employeePayrollData._department[1]}</div>
//             </td>
//             <td>${employeePayrollData._salary}</td>
//             <td>${employeePayrollData._startdate}</td>
//             <td>
//                 <img name="${employeePayrollData._id}" onclick="remove(this)" alt="delete" src="../assets/assets/icons/delete-black-18dp.svg">
//                 <img name="${employeePayrollData._id}" onclick="update(this)" alt="edit" src="../assets/assets/icons/create-black-18dp.svg">
//             </td>
//         </tr>
//         `;
//     document.querySelector('#table-display').innerHTML = innerHtml;
// }

//uc05 json object for multiple employee display using json object
const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th>" + "<th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
   
    let innerHtml = ` ${headerHtml}`;
     let employeePayrolllist = createEmployeePayrollJSON();
    for (const employeePayrollData of employeePayrolllist)
    {innerHtml = ` ${innerHtml}
   
        <tr>
            <td><img class="profile" alt="" src="${employeePayrollData._profilePic}"></td>
            <td> ${employeePayrollData._name}</td>
            <td>${employeePayrollData._gender}</td>
            <td>
                <div>${employeePayrollData._department[0]}</div>
                <div>${employeePayrollData._department[1]}</div>
            </td>
            <td>${employeePayrollData._salary}</td>
            <td>${employeePayrollData._startdate}</td>
            <td>
                <img name="${employeePayrollData._id}" onclick="remove(this)" alt="delete" src="../assets/assets/icons/delete-black-18dp.svg">
                <img name="${employeePayrollData._id}" onclick="update(this)" alt="edit" src="../assets/assets/icons/create-black-18dp.svg">
            </td>
        </tr>
        `;}
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
    let employeePayrolllistLocal =
        [
            {
                "_name": 'Anish',
                "_gender": 'male',
                "_department": ['sales', 'Finance'],
                "_salary": '500000',
                "_note": '',
                "_startdate": '29 oct 2019',
                "_id": new Date().getTime(),
                "_profilePic": '../assets/assets/profile-images/Ellipse -2.png'
            },
            {
                "_name": 'vinay',
                "_gender": 'male',
                "_department": ['sales', 'Finance'],
                "_salary": '500000',
                "_note": '',
                "_startdate": '29 oct 2019',
                "_id": new Date().getTime()+1,
                "_profilePic": '../assets/assets/profile-images/Ellipse -2.png'
            },
            {
                "_name": 'Raju',
                "_gender": 'male',
                "_department": ['sales', 'Finance'],
                "_salary": '500000',
                "_note": '',
                "_startdate": '29 oct 2019',
                "_id": new Date().getTime(),
                "_profilePic": '../assets/assets/profile-images/Ellipse -2.png'
            },
            {
                "_name": 'mahesh',
                "_gender": 'male',
                "_department": ['sales', 'Finance'],
                "_salary": '500000',
                "_note": '',
                "_startdate": '29 oct 2019',
                "_id": new Date().getTime()+1,
                "_profilePic": '../assets/assets/profile-images/Ellipse -2.png'
            }
        ];
    return employeePayrolllistLocal;
}
const getDeptHtml=(deptList)=>{
    for (const dept of deptList) {
        deptHtml=`${deptHtml}<div class='dept-label>${dept}</div>`
    }
    return deptHtml;
}