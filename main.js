document.addEventListener("DOMContentLoaded", function() {
    const filterBtns = document.querySelectorAll('.switch-button');
    const resultContainer = document.getElementById('filtered-products');
   

    // to remove previous filters swtitch active class
    
    for( let filterBtn of filterBtns){
       
        filterBtn.addEventListener("click", ()=>{
            
            filterBtns.forEach(btn => btn.classList.remove("active-switch"));

            filterBtn.classList.add("active-switch");
            resultContainer.className = "grid";

               if(filterBtn.value == 0){
                
                
                resultContainer.classList.add("grid-cols-1")
            }
            else if(filterBtn.value == 2){
                
                
                resultContainer.classList.add("grid-cols-2")
                console.log(filterBtn, "two")
            }
            else if(filterBtn.value == 3){
                
           
                resultContainer.classList.add("grid-cols-3")
            }
            else if(filterBtn.value == 4){
               
               
                resultContainer.classList.add("grid-cols-4")
            }
            else if(filterBtn.value == 5){
                
                resultContainer.classList.add("grid-cols-5")
            }
            else if(filterBtn.value == 6){
              
                resultContainer.classList.add("grid-cols-6")
            }else{
                filterBtn.classList.remove("active-switch");
            }
          

        });
    }
   
});



$(document).ready(function () {
    // Initialize header carousel (show 1 slide)
    $('.header-carousel').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,


    });

    // Initialize home carousel (show 4 slides on large screens)
    $('.showcas-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1 // 1 item for small screens
            },
            600: {
                items: 2 // 2 items for medium screens
            },
            1000: {
                items: 4 // 4 items for large screens
            }
        },


    });
});

AOS.init({
    duration: 800, // Animation duration
    once: false, // Allow animations to repeat
});


document.addEventListener("DOMContentLoaded", ()=>{
    function dropdownToggler(){
        const dropdown =document.getElementById("myDropdown");
        dropdown.classList.toggle('show')
        console.log("dropdownTogg");
    }
    
    const targetTogglerBtn = document.getElementsByClassName("dropdown_button");
    for(let btn of targetTogglerBtn){
        btn.addEventListener("click", (event)=>{
            dropdownToggler();
            event.stopPropagation();
        });
    }
    window.onclick = (event) =>{
        
        let dropdowns = document.getElementById('myDropdown');
        if(!event.target.matches('dropdown_button')&& dropdowns.classList.contains('show')){
           
           
             
                
                    dropdowns.classList.remove('show');
                    console.log("dropdown remove show");
                }
               
            
    
        }
       
    })

    document.addEventListener('DOMContentLoaded', () => {
      


        const searchModalOpenBtn = document.getElementById('openSearchModal');
        const searchInputField = document.getElementById('searchInput');
        const searchModal = document.getElementById('staticBackdropSearch');
    
        searchModalOpenBtn.addEventListener('click', () => {
            searchModal.classList.add('show');
        });
    
        searchInputField.addEventListener('keydown', (e) => {
            console.log('Key pressed:', e.key);
            if (e.key === 'Enter') {
                e.preventDefault();
                console.log('Redirecting to productsFilter.html');
                searchModal.classList.remove('show');
                window.location.assign('./productsFilter.html');
            }
        });

      
    });

    
    
   
   
    


    // change bg color for navbar after scroll

    window.addEventListener('scroll', function(){

        const navbar = document.querySelector('header .navbar');
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const targetHeight = windowHeight * 0.5;

        if(scrollPosition > targetHeight){
            navbar.classList.add('scrolled');
        }
        else{
            navbar.classList.remove('scrolled');
        }
    });

    // layout switching functionality

    
       


 

