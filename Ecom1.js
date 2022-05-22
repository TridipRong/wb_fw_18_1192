var productData=JSON.parse(localStorage.getItem("Products")) || [];

function data(productName,productCatergory,productImg,productPrice,productGender,productSold){
  this.catergory=productCatergory;
  this.img=productImg;
  this.price=productPrice;
  this.productname=productName;
  this.gender=productGender;
  this.sold=productSold;
}

document.querySelector("#form").addEventListener("submit",subbtn)
function subbtn(){
event.preventDefault();
//form data
document.querySelector("#form")
var img=form.image.value;
var name=form.name.value;
var category=form.category.value;
var price=form.price.value;
var gender=form.gender.value;

var sold=form.sold.value;

var database=new data(name,category,img,price,gender,sold)

productData.push(database);
//store in localStorage
console.log(productData)
localStorage.setItem("Products",JSON.stringify(productData));
}