import React from "react";

let Dashboard= ()=>{
    return (
        <div>
        <button className="btn btn-success" style={{width:'10%',margin:"10px"}}>ADD PRODUCT</button>


            <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Category</th>
      <th scope="col">Price</th>
      <th scope="col">Description</th>
      <th scope="col">Image</th>
      <th scope="col">Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>
        <button className="btn btn-primary m-1 w-50" >DELETE</button>
        <br />
        <button className="btn btn-danger m-1 w-50" >UPDATE</button>
        <br />
        <button className="btn btn-info m-1 w-50" >VIEW</button>
        </td>
    </tr>

    
  </tbody>
</table>

        </div>
    )
}

export default Dashboard;