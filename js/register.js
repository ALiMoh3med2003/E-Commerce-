var first=document.getElementById('first-name')
var last=document.getElementById('last-name')
var email=document.getElementById('email')
var password=document.getElementById('password')
var submit=document.getElementById('submit')

submit.addEventListener("click", function(e){
    e.preventDefault()
    if(first.value ==="" || last.value ==="" || email.value ==="" || password.value ===""){
        alert("please fill data")
    }else{
        localStorage.setItem('first',first.value.trim());
        localStorage.setItem('last',last.value.trim());
        localStorage.setItem('email',email.value.trim());
        localStorage.setItem('password',password.value.trim());
        setTimeout(()=>{
                window.location ="login.html"
            },1500 )
    }
})