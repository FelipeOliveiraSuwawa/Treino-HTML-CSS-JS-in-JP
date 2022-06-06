
const inputs = document.querySelectorAll('.input')

     
    function handleChange(){
        const spanzinho = document.querySelector('.spanzinho').classList;
        spanzinho.add(".span-active")
    }
 inputs.forEach((input)=> input.addEventListener('focus',handleChange()))

  


    
    