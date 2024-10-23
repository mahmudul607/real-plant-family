


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

