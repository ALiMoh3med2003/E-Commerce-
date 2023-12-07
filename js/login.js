var email=document.getElementById('email')
var password=document.getElementById('password')
var submit=document.getElementById('submit')

getemail=localStorage.getItem('email')
getpassword=localStorage.getItem('password')

submit.addEventListener("click",function(e){
    e.preventDefault()
    if(email.value ==="" || password.value ==="" ){
        alert("please fill data")
    }else{
        if(email.value.trim() === getemail && password.value.trim()=== getpassword){
            setTimeout( () =>{
                window.location = "index.html"
            } , 1500 )
            localStorage.setItem('Login' , true)
        }else{
            alert(" field your data")
        }
    }
}) 