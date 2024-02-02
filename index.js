const mainDiv=document.getElementById('main')
fetchData('https://dummyjson.com/products')
async function fetchData(url)
{
 try
 {
  const res= await fetch(url)
  const data= await res.json()
  displayData(data.products)
 }
 catch(err)
  {
      console.log("My Error"+err)
  }
}


function displayData(data)
{
      data.forEach((pro)=> 
      {
        
        const subDiv=document.createElement('div')
        subDiv.classList.add("subDiv")
        
        const img=document.createElement("img")
        img.classList.add("proimg")
        img.src=pro.thumbnail
        img.alt=pro.title
        
        const productLink = document.createElement('a')
        productLink.classList.add("productLink")
        productLink.href = `./product.html?pro=${encodeURIComponent(JSON.stringify(pro))} `;
        productLink.target="_blank"
        const title=document.createElement('h1')
        title.classList.add('title')
        title.textContent=pro.title
        productLink.appendChild(title)
        
        const category=document.createElement('h3')
        category.classList.add('category')
        category.textContent=pro.category
        
        const price=document.createElement('h2')
        price.classList.add('price')
        price.textContent=pro.price 
       
        
        const btn=document.createElement('button')
        btn.textContent="Add To Cart"
        btn.classList.add('btn')
        btn.setAttribute("data-products",JSON.stringify(pro))
        btn.addEventListener('click',cartUpadate)

        subDiv.append(img,productLink,category,price,btn)
        mainDiv.appendChild(subDiv)

      })
}

let arr=[];
const cartCount=document.getElementById("Count")
const cartPrice=document.getElementById("Price")
export function cartUpadate()
{ 
   arr.push(JSON.parse(event.target.getAttribute("data-products")))
   cartCount.textContent=arr.length
}
const cart_button = document.getElementById("cart-btn")
cart_button.addEventListener('click', moveToCheckout)
export function moveToCheckout()
{
    console.log(arr)
    console.log(localStorage.setItem('cartDetail', JSON.stringify(arr)))
    window.location.href="./cartDetails.html"
}