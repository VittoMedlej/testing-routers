
import { HomeScreen } from "./HomeScreen.js";
import Error404 from "./screens/Error404.js";
import ProductScreen from "./screens/ProductScreen.js";
import { parseRequestUrl } from "./utils.js";
const ed = document.querySelector('.ed');
const doc = document.querySelector('#content');
const main = document.getElementById('main');

const rend = () => {
    doc.textContent = `PICK WHAT YOU WANNA BUY`;
    main.innerHTML = Error404.render();
   
    const img = document.querySelectorAll('.one');
    img.forEach(e=> {
        e.addEventListener('click',e => {
router()

const btn = document.querySelector('.kabe');
btn.addEventListener('click' ,() =>{

    rend();
})
        });
    });
};


const router = () => {
    doc.textContent = `EXPLORE OUR PRODUCTS`
    main.innerHTML = HomeScreen.render();
   
}
document.addEventListener('DOMContentLoaded' ,rend)



// btn.addEventListener('click' ,rend)