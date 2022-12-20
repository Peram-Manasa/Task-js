fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
.then((data)=>
{
    console.log(data);
    let x='';
    data.map((a,i)=>{
        x+=
        `<tr>
           <td>${i+1}</td>
           <td>${a.name}</td>
           <td>${a.address.city}</td>
           <td>${a.company.name}</td>
           <td>${a.phone}</td>
           <td>${a.email}</td>
          </tr> `;
});
document.getElementById('tableinfo').innerHTML=x;
})
// fetch()
// .then((res1)=>res1.json())
// .then((data2)=>
// {
//   console.log(data2);
//   let c='';
//   data.map((b,j)=>{
//    c+=
//    `<tr>

//    <td>${c.thumbnailUrl}</td>
//     </tr>`
//   });
//   document.getElementById('tableinfp').innerHTML=x2;
// })
function showList(data)
{

}