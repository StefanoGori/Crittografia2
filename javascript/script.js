function crittografa(){
    var alfabeto ="abcdefghijklmnopqrstuvwxyz";
    var frase=document.getElementById("frase").value;
    frase=frase.replaceAll(" ","");

    var testocifrato="";
    var testodecifrato="";
    var chiavi = document.getElementById("chiavi").value;
    const array=chiavi.split("/");
    var k=0;
    
    for(var i=0; i<frase.length;i++){
        var pos= alfabeto.indexOf(frase[i]);
        testocifrato +=alfabeto[(pos + parseInt(array[k])) % 26];
        k=(k+1) % array.length;
    }
    document.getElementById("testocifrato").innerHTML=testocifrato;
    document.getElementById("divTestoC").style.display='block';
    
    k=0;
    
    for(var i=0; i<testocifrato.length;i++){
        var pos= alfabeto.indexOf(testocifrato[i]);
        testodecifrato +=alfabeto[(pos - parseInt(array[k])+ 26 ) % 26];
        console.log((pos - parseInt(array[ichiave])+ 26 ) % 26);
        k=(k+1) % array.length;
        
    }
    
    document.getElementById("testodecifrato").innerHTML=testodecifrato;
    document.getElementById("divTestoD").style.display='block';
    }