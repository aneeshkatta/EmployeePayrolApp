window.addEventListener('DOMContentLoaded',(event)=>{
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
const createInnerHtml=()=>{
    const headerHtml="<tr><th></th><th>Name</th><th>Gender</th><th>Department</th>"+"<th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
    const innerHtml=` ${headerHtml}
    <tr>
        <td><img class="profile" alt="" src="../assets/assets/profile-images/Ellipse -2.png"></td>
        <td> Narayan Mahadevan</td>
        <td>Male</td>
        <td>
            <div>HR</div>
            <div>Finance</div>
        </td>
        <td>300000</td>
        <td>1 nov 2020</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="../assets/assets/icons/delete-black-18dp.svg">
            <img id="1" onclick="update(this)" alt="edit" src="../assets/assets/icons/create-black-18dp.svg">
        </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML=innerHtml;
   }