let fnameNode=document.getElementById('fullname');
let errorNode1=document.getElementById('error1');
function validate1(){
    errorNode1.textContent="";
    let fname=fnameNode.value;
    let fnamePattern= new RegExp("^[A-Za-z]*$");
    fnameNode.style.border="2px red solid";
    if(fname==""){
        errorNode1.textContent="Name is required";
    }
    else if(fname.length<5){
        errorNode1.textContent="Name must contain atleast 5 characters";
    }
    else if(fnamePattern.test(fname)==false){
        errorNode1.textContent="Name must have only alphabets";
    }
    else{
        fnameNode.style.border="2px green solid";
    }
}


let eNode=document.getElementById('email1');
let errorNode4=document.getElementById('error2');
function validate2(){
    errorNode2.textContent="";
    let email=eNode.value;
    eNode.style.border="2px red solid";
    if(email==""){
        errorNode2.textContent="Email is required";
    }
    else if(!email.includes('@')){
        errorNode2.textContent="Please enter valid Email Id";
    }
    else if(email.endsWith('@')){
        errorNode2.textContent="Please enter valid Email Id";
    }
    else{
        eNode.style.border="2px green solid";
    }
}

let textNode=document.getElementById('massage');
let errorNode3=document.getElementById('error3');
function validate3(){
    errorNode3.textContent="";
    let texta=textNode.value;
    textNode.style.border="2px red solid";
    if(texta==""){
        errorNode3.textContent="Massage is required";
    }
    else if(texta.length<20){
        errorNode3.textContent="Massage must contain atleast 20 characters";
    }
    else{
        textNode.style.border="2px green solid";
    }
}