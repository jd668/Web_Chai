let form= document.getElementById('login').addEventListener("submit",function(event){
    event.preventDefault();
    let username=document.getElementById('username').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    
    // let userData=JSON.parse(localStorage.getItem("userDetails")) ?? [];
    let userData={
        'name':username,
        'email':email,
        'password':password,
    }
    localStorage.setItem("userDetails",JSON.stringify(userData))

})
// localStorage.setItem("name",JSON.stringify())