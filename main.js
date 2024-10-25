


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

