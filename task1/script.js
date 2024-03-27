let input = document.getElementById('inputBOX');
let buttons = document.querySelectorAll('button');


let string=" ";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML =='='){
            string=eval(string);
            input.value=string;
        }
        else if(target.innerHTML =='Ac'){
            string="";
            input.value= string;
        }
        else if(target.innerHTML=='DEL'){
           string=string.substring(0,string.length-1);
            input.value= string;
        }
        else{
            string+= target.innerHTML;
            input.value = string;

        }
    })
})
    



