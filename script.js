  
    
   document.querySelector("#qtdpg").addEventListener("input", calcOrcam)
   document.querySelector("#js").addEventListener("input", calcOrcam)
   document.querySelector("#radionao").addEventListener("input", calcOrcam)
   document.querySelector("#radio").addEventListener("input", calcOrcam)
   document.querySelector("#range").addEventListener("input", calcOrcam)
   
    
    function calcOrcam (){     
        
        var preco = Number(document.querySelector("#qtdpg").value) * 100
        var js = document.querySelector("#js").checked
        var rdo_lay = document.querySelector("#radio").checked
        var rng = document.querySelector("#range").value
       
        if(js) preco += 200 
        if(rdo_lay) preco+= 300
        preco *= (1 + (1 - (rng*0.1)))  
        document.querySelector("#prazo").innerHTML = `Prazo de ${rng} semanas `
        document.querySelector("#total").innerHTML =`R$ ${Math.round(preco).toFixed(2)}`
    
    }

