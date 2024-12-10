document.getElementById("btn").addEventListener("click", function() {

    
    let valor01 = document.getElementById("valor01");
    let valor02 = document.getElementById("valor02");
    let valor03 = document.getElementById("valor03");
    


    let display = document.getElementById("display");

    let valorFinal  = parseFloat(valor01.value) / parseFloat(valor02.value);
    let Nome = String(valor03.value);

    if (valorFinal <= 0.7){
        
        display.innerHTML = ` 
        <h2> olá , ${Nome}. O Etanol e mais vantajoso para abastecer. <h2>
      
 `;}

   

    else if (valorFinal > 0,7) {
        display.innerHTML = ` 
        <h2> olá , ${Nome}. A Gasolina e mais vantajosa para abastecer.  <h2>
        `;
       
    }
    

   

  
})