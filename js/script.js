const userName=document.getElementById('user-name');
const cartBox=document.querySelector('.cart-box')
const loginBox=document.querySelector('.login')
const row =document.querySelector('.row')
const favouriteItems=document.getElementById('favouriteItems');
const cart=document.querySelector('.cart')
const cartList=document.querySelector('#favouriteItems');
const number=document.getElementById('number')
const select=document.querySelector('.custom-select')
const search=document.querySelector('.search')
const logoutBox=document.querySelector('.logout-box')
const logout=document.querySelector('.logout')
const userNameBox=document.querySelector('.userName')

logout.addEventListener("click",()=>{
    localStorage.removeItem("Login")
    window.location ="login.html"
})
function Products(name,price,category,img,id){
    this.name=name;
    this.price=price;
    this.category=category;
    this.img=img;
    this.id=id;
    this.count=1;
    product.push(this);
}

let product=[]
let product0 =new products('MacBook Pro','110 $','labtop','./images/MacBook Pro.png',0);
let product1 =new products('Alienware X17','123 $','labtop','./images/Alienware-X17.jpg',1);
let product2 =new products('Razer Blade 15','110 $','labtop','./images/Razer-Blade-15.jpg',2);
let product3 =new products('Acer Swift 3 AMD Ryzen 7','154 $','labtop','./images/Acer-Swift-3---AMD-Ryzen-7.png',3);
let product4 =new products('realme i9','110 $','phone','./images/realme_.jpg',4);
let product5 =new products('V 29','65 $','phone','./images/vivo.png',5);
let product6 =new products('Galaxy Z Fold 4',' 110 $','phone','./images/galaxy-z-fold4.jpg',6);
let product7 =new products('i phone 15 pro','145 $','phone','./images/i phone 15 pro max.png',7);
let product8 =new products('Apple AirPods Pro','85 $','phone accessories','./images/Apple AirPods Pro.jpg',8);
let product9 =new products('Realme Buds T100','65 $','phone accessories','./images/Realme Buds T100 .jpg',9);
let product10 =new products('AirPods M10','178 $','phone accessories','./images/AirPods M10..jpg',10);
let product11 =new products('Smart Watch FT50','138 $','phone accessories','./images/Smart Watch FT50.jpg',11);

function draw(){
for( let i = 0; i < product.length ; i++ ){
    row.innerHTML+=`
    <div class="product card col-lg-4 col-md-6 col-sm-12 mt-1 mb-1" style="width: 18rem;">
        <img src="${product[i].img}" class="card-img-top" alt="product-1">
            <div class="card-body">
                <h5 class="productName card-title">Product : ${product[i].name}</h5>
                <h5 class="card-text">Price :  ${product[i].price}</h5>
                 <h5>Category : ${product[i].category}</h5>
                    <div class="d-flex" style="justify-content: space-between;"> 
                        <button class="btn btn-primary" id="${product[i].id}" onclick='addItems(this.id)'>Add to cart</button>
                        <button class="btn btn-danger" id="${product[i].id}0000" onclick='removeItems(this.id)'>Remove from cart</button>
                        <a href="#" style="margin-left: auto; display: inline-block;" ><i class="fas fa-heart" style="font-size: 1.5rem;" id="${product[i].id}00000" onclick='addFavourite(this.id)'></i></a>
                    </div> 
            </div>
    </div>
    `
}
}
draw();

let userProducts=[]
function addItems(id){
   let addItem= document.getElementById(id)
   let removeItem= document.getElementById(id+'0000')
    if(localStorage.getItem('first')  && localStorage.getItem('Login')){
        addItem.style.display='none';
        removeItem.style.display='block';
        userProducts.push(product[id])
        localStorage.setItem('items',JSON.stringify(userProducts));
        cartDraw()
        number.innerHTML=userProducts.length
    }else{
        setTimeout(()=>{
              window.location="register.html"
        },1500)
     
    }
}
function removeItems(id){
    let removeItem= document.getElementById(id)
    let addItem= document.getElementById(id/10000);
    addItem.style.display='block';
    removeItem.style.display='none';
    let id2=id/10000
    var ele= userProducts.findIndex((x)=>{
        return x.id==id2
    })
    userProducts.splice(ele,1)
        if(userProducts.length==0){
            cart.style.display='none';
        }
    localStorage.setItem('items',JSON.stringify(userProducts));
    cartDraw()
    number.innerHTML=userProducts.length
} 
function cartDraw(){
    number.innerHTML=userProducts.length
    if(userProducts.length != 0){
            if(userProducts.length !=0){
                cartList.innerHTML=''
                        for(let i=0;i<userProducts.length;i++){
                        cartList.innerHTML+=`
                        <li>
                            <span style="margin-right: 20px;">${userProducts[i].name}</span>
                           <div class="plus">
                                <span style="margin-right: 0px;">${userProducts[i].count}</span>
                                <a href="#" class="pluss"><i class="fas fa-plus text-success" onclick="plusBtn(${userProducts[i].id})"></i></a>
                                <a href="#" class="minus"><i class="fas fa-minus text-danger" onclick="minusBtn(${userProducts[i].id})"></i></a>
                            </div>
                        </li>`
                        }
            }else{
                cart.style.display='none';
            }
    }else if(localStorage.getItem('items')){
        userProducts=JSON.parse(localStorage.getItem('items'))
        if(userProducts.length!=0){
            cartDraw()
        }
        let buttons=userProducts.map((arr)=>{
            return arr.id;
        })
        buttons.forEach(ele => {
            document.getElementById(ele).style.display='none'
            document.getElementById(ele+'0000').style.display='block'
        });
    }
}
cartDraw()
function cartBtn(){
    const arrow=document.querySelector('#arrow');
    if(cart.style.display=='none'){
        cart.style.display='block'
        arrow.classList='fas fa-caret-up arrow'
    }else{
        cart.style.display='none'
        arrow.classList='fas fa-caret-down arrow'
    }
}
let favourite=[];
function addFavourite(id){
    const ele=document.getElementById(id)
    mainId=id/100000;
if(localStorage.getItem("first") && localStorage.getItem("Login")){
    if(ele.style.color=='red'){
        ele.style.color="rgb(185, 184, 184)";
        favourite.splice(favourite.findIndex(()=>{
            return favourite.id==id;
        }),1)
        localStorage.setItem("favourite",JSON.stringify(favourite));
    }else{
        ele.style.color='red'
        favourite.push(product[id/100000]) 
        localStorage.setItem("favourite",JSON.stringify(favourite));
    }
}else{
    setTimeout(()=>{
        window.location="register.html"
    },1500)
}
    addEventListener('click',(e)=> e.preventDefault())

}  //Favourite
    if(localStorage.getItem('favourite')){
        let fav= JSON.parse(localStorage.getItem('favourite')) 
        
        for(let i =0;i<fav.length;i++){
            let x=document.getElementById(fav[i].id+"00000")
            x.style.color='red'
        }
    } //Favourite
    search.addEventListener('keyup',()=>{
        row.innerHTML=''

if(search.value){
 if(select.value==='Search by Name'){
     for(let i=0;i<product.length;i++){
         if(product[i].name.toLowerCase().includes(search.value)){
             row.innerHTML+=`
             <div class="card col-lg-4 col-md-6 col-sm-12 mt-1 mb-1" style="width: 18rem;">
                 <img src="${product[i].img}" class="card-img-top" alt="product-1">
                     <div class="card-body">
                         <h5 class="card-title">Product : ${product[i].name}</h5>
                         <h5 class="card-text">Price :  ${product[i].price}</h5>
                         <h5>Category : ${product[i].category}</h5>
                             <div class="d-flex" style="justify-content: space-between;"> 
                                 <button class="btn btn-primary" id="${product[i].id}" onclick='addItems(this.id)'>Add to cart</button>
                                 <button class="btn btn-danger" id="${product[i].id}0000" onclick='removeItems(this.id)'>Remove from cart</button>
                                 <a href="#" style="margin-left: auto; display: inline-block;" ><i class="fas fa-heart" style="font-size: 1.5rem;" id="${product[i].id}00000" onclick='addFavourite(this.id)'></i></a>
                             </div> 
                     </div>
            </div> `
         }
     }
}else{
    for(let i =0;i<product.length;i++){
        if(product[i].category.toLowerCase().includes(search.value)){
            row.innerHTML+=`
            <div class="card col-lg-4 col-md-6 col-sm-12 mt-1 mb-1" style="width: 18rem;">
                <img src="${product[i].img}" class="card-img-top" alt="product-1">
                    <div class="card-body">
                        <h5 class="card-title">Product : ${product[i].name}</h5>
                        <h5 class="card-text">Price :  ${product[i].price}</h5>
                        <h5>Category : ${product[i].category}</h5>
                            <div class="d-flex" style="justify-content: space-between;"> 
                                <button class="btn btn-primary" id="${product[i].id}" onclick='addItems(this.id)'>Add to cart</button>
                                <button class="btn btn-danger" id="${product[i].id}0000" onclick='removeItems(this.id)'>Remove from cart</button>
                                <a href="#" style="margin-left: auto; display: inline-block;" ><i class="fas fa-heart" style="font-size: 1.5rem;" id="${product[i].id}00000" onclick='addFavourite(this.id)'></i></a>
                            </div> 
                    </div>
            </div>`
        }
    }
}
}else{
     draw()
    }
})
    if(localStorage.getItem('first') && localStorage.getItem('Login')){
        userName.innerHTML=`${localStorage.getItem('first')}`
        cartBox.style.display='block';
        loginBox.style.display='none';
        logoutBox.style.display='block';
    }else{
        loginBox.style.display='block';
        cartBox.style.display='none';
        logoutBox.style.display='none'
        userNameBox.style.display='none'
    }

   function viewProduct(){
    window.location = "products.html"
   }
   function plusBtn(id){
    ele=userProducts.find((x)=>{
       return x.id==id
    })
    ele.count++;
    localStorage.setItem('items',JSON.stringify(userProducts))
    cartDraw()
}

function minusBtn(id){
    const btnDanger=document.getElementById(id+"0000")
    const btnprimary=document.getElementById(id)

    ele=userProducts.find((x)=>{
       return x.id==id
    })
        if(userProducts.length!=1){
            if(ele.count !=1){
                ele.count--;
                localStorage.setItem('items',JSON.stringify(userProducts))
                cartDraw() 
            }else{
                let index= userProducts.indexOf(ele)
                userProducts.splice(index,1)
                localStorage.setItem('items',JSON.stringify(userProducts))
                btnDanger.style.display='none'
                btnprimary.style.display='block'
                draw() 
                cartDraw() 
            }
        }else{
            let index= userProducts.indexOf(ele)
            userProducts.splice(index,1)
            localStorage.setItem('items',JSON.stringify(userProducts))
            cart.style.display='none';
            btnDanger.style.display='none'
            btnprimary.style.display='block'
            number.innerHTML=0
            cartDraw() 
            draw()
        }
}
