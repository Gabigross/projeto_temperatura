document.querySelector("#aperte").onclick = ()=>{

    escala = document.querySelector("#escala").value;
    input2 = document.querySelector("#input2").value;
    console.log(escala);
    console.log(input2);

    escala2 = document.querySelector("#escala2").value;
    console.log(escala2);

    
    let f2 = document.querySelector("#escala2").value;
    let c2 = document.querySelector("#escala2").value;
    let r2 = document.querySelector("#escala2").value;
    let k2 = document.querySelector("#escala2").value;
    console.log(f2);
    console.log(c2);
    console.log(r2);
    console.log(k2);

    let c = document.querySelector("#escala").value;
    let celsius = document.querySelector("#input2").value;
    let fahrenheit = document.querySelector("#input2").value;
    let rankine = document.querySelector("#input2").value;
    let kelvin = document.querySelector("#input2").value;
    console.log(celsius);
   
    let resCels;
    let resFahr;
    let resKelv;
    let resRank;


    
    
    
    if( escala == "c" && escala2 == "f2"){
        
        resFahr= (celsius * 1.8 + (32));
        console.log(resFahr);
    
        document.getElementById("input3").value=resFahr;
    }  
    else if( escala == "c" && escala2 == "r2"){
       
        resRank = ((celsius) * 9 / 5) + (491.67);
        console.log(resRank);

        document.getElementById("input3").value=resRank;
    }
    else if( escala == "c" && escala2 == "k2"){
        
        resKelv = Number(celsius) + (273.15);
        console.log(resKelv);
       
        document.getElementById("input3").value=resKelv;
    }

    //fahrenheit para outras temperaturas...
    else if( escala == "f" && escala2 == "c2"){
       
        resCels= (Number(fahrenheit) - 32) / 1.8;
        console.log(resCels);

        document.getElementById("input3").value=resCels;
    }
    else if( escala == "f" && escala2 == "r2"){
       
        resRank= Number(fahrenheit) + 459.67;
        console.log(resRank);

        document.getElementById("input3").value=resRank;
    }
    else if ( escala == "f" && escala2 == "k2"){
       
        resKelv= (Number(fahrenheit) + 459.67) * 5 / 9;
        console.log(resKelv);

        document.getElementById("input3").value=resKelv;
    }

    // Kelvin para outras temperaturas..

    else if( escala == "k" && escala2 == "c2"){
       
        resCels= Number(kelvin) - 273.15;
        console.log(resCels);

        document.getElementById("input3").value=resCels;
    }
    else if( escala == "k" && escala2 == "f2"){
        
        resFahr=(Number(kelvin)-273) * 1.8 + (32);
        console.log(resFahr);

        document.getElementById("input3").value=resFahr;
    }
    else if( escala == "k" && escala2 == "r2"){

        resRank= kelvin * 1.8;
        console.log(resRank);

        document.getElementById("input3").value=resRank;
    }

    // Rankine para outras temperaturas..

    else if( escala == "r" && escala2 == "c2"){

        resCels=(Number(rankine) - (491.67)) *( 5 / 9 );
        console.log(resCels);

        document.getElementById("input3").value=resCels;

    }
    else if( escala == "r" && escala2 == "f2"){

        resFahr= rankine - 459.67;
        console.log(resFahr);

        document.getElementById("input3").value=resFahr;
    }
    else if( escala == "r" && escala2 == "k2"){

        resKelv= rankine / 1.8;
        console.log(resKelv);

        document.getElementById("input3").value=resKelv;
    }
    }
    
      

    
    
   