document.getElementById('email').addEventListener("click",function(){
    if(email=" "){
        document.getElementById("eErr").style.display="block";
    }

    else{
        document.getElementById("eErr").style.display="none";

    }
})
document.getElementById('pwd').addEventListener("click",function(){
    if(pwd=" "){
        document.getElementById("pErr").style.display="block";
    }

    else{
        document.getElementById("pErr").style.display="none";

    }})

