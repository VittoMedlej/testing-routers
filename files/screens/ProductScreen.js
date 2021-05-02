
const ProductScreen = {
render : () => {
        return  `
        <div class="infoa">
            <nav class="navbar">
                <i class="fas fa-bars"></i>
            <div class="logo"> <a href="#">VitoZon</a> </div>
            <ul class="links">
                 <li><a href="" class="link">sign in</a></li>
                 <li><a href="" class="link">cart</a></li>
             </ul>
         </nav>

         <div style='padding:100px 30px'>
         <button class='kabste'>Return to page </button>
         
        
         
         </div> 
     </div>
         
         
      `
     },
     kab : () => {
         let kabste = document.querySelector('.kabste')
     
         return kabste
     }
 }
export default ProductScreen;