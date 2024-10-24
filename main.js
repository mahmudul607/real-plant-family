


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


    // video modal function 

    document.addEventListener("DOMContentLoaded", function() {
        let vModal = document.getElementById('videoModal');
        let vBtn = document.getElementById('vModalBtn');
        let closeBtn = document.getElementsByClassName('closevModal')[0];
        let iframe = document.querySelector('iframe');
    
        vBtn.onclick = function() {
            vModal.style.display = 'block';
            console.log('Open Modal');
            iframe.src = iframe.src;
        };
    
        closeBtn.onclick = function() {
            vModal.style.display = 'none';
            iframe.src = '';
        };
    
        window.onclick = function(e) {
            if (e.target == vModal) {
                vModal.style.display = 'none';
                iframe.src = '';
            }
        };
    });
    

