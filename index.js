const service1 =document.querySelector('.text5');
fetch(' http://localhost:3000/service')
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        
    });
})
