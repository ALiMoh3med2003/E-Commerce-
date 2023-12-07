let ProductsBox=document.querySelector('.products-box');
let items=JSON.parse(localStorage.getItem('items'));
let totalPrice=document.getElementById('totalPrice');
let favBox=document.querySelector('.swiper-wrapper')
let favItems=JSON.parse(localStorage.getItem('favourite')) 

function drawProducts(){
    ProductsBox.innerHTML=''
    for(let i in items){
        ProductsBox.innerHTML+=`
        <div class="draw-elemants">
            <img src="${items[i].img}" alt="product1" height="150px">
                <div class="ele-content">
                        <p>Product : ${items[i].name}</p>
                        <p>Category: ${items[i].category} </p>
                        <p>Price: ${items[i].price}</p>
                    <div class="plus">
                        <span>${items[i].count}</span>
                        <a href="#" class="positive"><i class="fas fa-plus text-success" onclick="positiveBtn(${items[i].id})"></i></a>
                        <a href="#" class="negative"><i class="fas fa-minus text-danger" onclick="negativeBtn(${items[i].id})"></i></a>
                    </div>
                    <button class="btn btn-danger" onclick="removeItems(${items[i].id})">Remove</button>

                </div> 
        </div>
        `
    }
}
drawProducts()
function positiveBtn(id){
    elemants=items.find((x)=>{
       return x.id==id
    })
    elemants.count++;
    localStorage.setItem('items',JSON.stringify(items))
    drawProducts()
    TotalPrice()
}
function negativeBtn(id){
    elemants=items.find((x)=>{
       return x.id==id
    })
       if(elemants.count !=1){
                elemants.count--;
                localStorage.setItem('items',JSON.stringify(items))
                drawProducts()
                TotalPrice()
            }else{
                let index= items.indexOf(elemants)
                items.splice(index,1)
                localStorage.setItem('items',JSON.stringify(items))
                drawProducts()
                TotalPrice()
      }
    }
function TotalPrice(){
    let sum=0;
    let prices=items.map((item)=>{
        let price=item.price.split(' ')
        return parseInt(price[0]) ;    
    })
    for(let i in items){
        sum += prices[0] * parseInt(items[i].count) 
    }
    totalPrice.innerHTML=sum+' $';
}
 TotalPrice()
 function removeItems(id){
   var index= items.findIndex((x)=>{
    return x.id==id
 })
 items.splice(index,1)
 localStorage.setItem('items',JSON.stringify(items))
 console.log(items);
 drawProducts()
TotalPrice()
}
function drawFav(){
    favBox.innerHTML='';
    for(let i in favItems){
        favBox.innerHTML+=`
        <div class="swiper-slide">
        <div class="swiper-img">
              <img src="${favItems[i].img}" alt="${favItems[i].name}" height="300px" width="300px">
        </div>
        <div class="card-body">
            <div class="card-text">
                <p>Product : ${favItems[i].name}</p> 
                <p>Category : ${favItems[i].category}</p>
            </div>
                <a href="#" ><i class="fas fa-heart" style="font-size: 2rem;" onclick='removeFavourite(${favItems[i].id})'  style="backgound-color: red;"></i></a>
        </div> 
    </div>
        `
    }
}
drawFav()
function removeFavourite(id){    
    addEventListener('click',(e)=> e.preventDefault())
    let index =favItems.findIndex((x)=>{
      return  x.id==id
    })
    favItems.splice(index,1)
    localStorage.setItem('favourite',JSON.stringify(favItems))
    location.reload()
    drawFav()
}
