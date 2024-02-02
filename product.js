import { cartUpadate,moveToCheckout } from "./index.js"
const products= document.getElementById('products')
const params = new URLSearchParams(document.location.search)
const item = JSON.parse(params.get('pro'))
const div3 = document.createElement('div')
div3.classList.add("AllImagesDiv") 
let img
let img_arr=[]
function display ()
{

    const div1 = document.createElement('div')
    div1.classList.add("ImageDiv")
    const div2 = document.createElement("div")
    div2.classList.add("TextDiv")
    img = document.createElement('img')
    img.src = item.thumbnail
    img.classList.add("proImg")
    div1.appendChild(img)
    const title = document.createElement('h2')
    title.textContent=item.title
    const price = document.createElement('p')
    price.textContent= item.price
    const button = document.createElement('button')
    button.classList.add('proButton')
    button.textContent = "addToCart"
    button.setAttribute("data-products",JSON.stringify(item))
    button.addEventListener('click',cartUpadate)
    const img1=getImages(item)
    div2.append(title, price, button,div3)
    products.append(div1,div2)
   
}
display()
document.getElementById("cart-btn").addEventListener('click',moveToCheckout)
function getImages(item)
 {
  for(let i of item.images)
  {
    const img_link=document.createElement('button')
    img_link.classList.add("img_Link")   
    const img1=document.createElement('img')
    img1.classList.add('btn_img')
    img1.src=i;
    img_link.setAttribute("img_c",img_arr)
    img_link.addEventListener('click',()=>
    {    
        img.src=i
    })
    img_link.appendChild(img1)
    div3.appendChild(img_link)
  }
 }
 