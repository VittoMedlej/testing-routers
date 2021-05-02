import data from "./data.js";


const HomeScreen = {
    render : () => {
        const { products } = data
        const array = products
        let mapped = array.map(prod => {

            return `  <div class="product"> 
            <div style='display:none'>${prod.id}</div>
            <a class="image h4" >
                <img src="${prod.image}" >
            </a>
            <div class="info">
                <h4 class="h4 linkz"> <a " class="aa">${prod.name}</a></h4>
                <p class="brand">${prod.category}</p>
                <div class="rating">
                    <div class="stars">
                        <i class="fas fa-star star"></i>
                        <i class="fas fa-star star"></i>
                        <i class="fas fa-star star"></i>
                        <i class="fas fa-star star"></i>
                        <i class="fas fa-star-half-alt star"></i>
                    </div>
                    
                    <h4 class="price">$${prod.price}</h4>
                    <button class='kabste'>ADD TO CART</>
               </div>
           </div>
           </div>`
           
           }).join('');
       
       return     mapped +  ` <buttom class='kabste kabe'>Retrun</button> `
   }
}
export {HomeScreen}


