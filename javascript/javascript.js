let fullnameNode=document.getElementById('fullname');
let errorNode1=document.getElementById('error1');
function validate1(){
    errorNode1.textContent="";
    let fname=fullnameNode.value;
    let fullnamePattern= new RegExp("^[A-Za-z]*$");
    fullnameNode.style.border="2px red solid";
    if(fname==""){
        errorNode1.textContent="Name is required";
        return false;
    }
    else if(fname.length<5){
        errorNode1.textContent="Name must contain atleast 5 characters";
        return false;
    }
    else if(fullnamePattern.test(fname)==false){
        errorNode1.textContent="Name must have only alphabets";
        return false;
    }
    else{
        fullnameNode.style.border="2px green solid";
        return true;
    }
}


let emailNode=document.getElementById('email1');
let errorNode2=document.getElementById('error2');
function validate2(){
    errorNode2.textContent="";
    let email=emailNode.value;
    emailNode.style.border="2px red solid";
    if(email==""){
        errorNode2.textContent="Email is required";
        return false;
    }
    else if(!email.includes('@')){
        errorNode2.textContent="Please ente valid Email Id";
        return false;
    }
    else if(email.endsWith('@')){
        errorNode2.textContent="Please enter valid Email Id";
        return false;
    }
    else{
        emailNode.style.border="2px green solid";
        return true;
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
        return false;
    }
    else if(texta.length<20){
        errorNode3.textContent="Massage must contain atleast 20 characters";
        return false;
    }
    else{
        textNode.style.border="2px green solid";
        return true;
    }
}

// Submit Button JS

let nodeArray=[fullnameNode,emailNode,textNode];
function validateForm(){
    let flag1=validate1();
    let flag2=validate2();
    let flag3=validate3();
    let flagArray=[flag1,flag2,flag3];
    for(let i=0;i<flagArray.length;i++){
            if(flagArray[i]==false){
                nodeArray[i].focus();
                break;
            }
        }
    return (flag1 && flag2  && flag3)
}