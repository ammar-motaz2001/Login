var userName=document.getElementById("username")
var userEmail=document.getElementById("email")
var userPassword=document.getElementById("password")
var dangerpara=document.getElementById("para-1")
var loginName=document.getElementById("login")
var loginPassword=document.getElementById("password-login")
var dangerEmail=document.getElementById("para")
var fields=document.getElementById("para-5")
var loginfield=document.getElementById("para-6")
var loginsuc=document.getElementById("para-7")
var user=[]
if(localStorage.getItem("users")!=null){
    user=JSON.parse(localStorage.getItem("users"))
}
function userRegister(){
    if(allInputsValid()==true && isExist()==false){
        var person={
            Name:userName.value,
            email:userEmail.value,
            password:userPassword.value
        }
        user.push(person)
        localStorage.setItem("users",JSON.stringify(user))
        dangerEmail.classList.remove("d-none")
        fields.classList.add("d-none")
        
    }else{
        fields.classList.remove("d-none")
        dangerEmail.classList.add("d-none")
    }
    


}
function allInputsValid(){
    if(validationName()==true&&validationEmail()==true && validaionPassword()==true &&isEmpty()==true){
        return true
    }
}
function validationName(){
    var regex=/^[A-Z][a-z]{3,14}$/
    var test=userName.value
    if(regex.test(test)==true){
        userName.classList.add("is-valid")
        userName.classList.remove("is-invalid")
        return true
    }else{
        userName.classList.remove("is-valid")
        userName.classList.add("is-invalid")
        return false
    }
}
function validationEmail(){
    var regexTwo=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    var testTwo=userEmail.value
    if(regexTwo.test(testTwo)==true){
        userEmail.classList.add("is-valid")
        userEmail.classList.remove("is-invalid")
        return true
    }else{
        userEmail.classList.add("is-invalid")
        userEmail.classList.remove("is-valid")
        return false
    }
}
function validaionPassword() {
    var regexThree = /^\d{6}$/
    var testThree = userPassword.value;
    if(regexThree.test(testThree) === true) {
        userPassword.classList.add("is-valid");
        userPassword.classList.remove("is-invalid");
        return true;
    } else {
        userPassword.classList.remove("is-valid");
        userPassword.classList.add("is-invalid");
        return false;
    }
}

function isEmpty() {
    if(userName.value === '' && userEmail.value === '' && userPassword.value === '') {
        dangerpara.classList.remove("d-none");
        return false;
    }
    return true;
}
function isExist(){
    for(var x=0;x<user.length;x++){
        if(user[x].Name==userName.value && user[x].email==userEmail.value&&user[x].password==userPassword.value){
            return true
        }
    }
    return false
}


var nameUser=JSON.parse(localStorage.getItem("name"))
function login(){
    for(var i=0;i<user.length;i++){
        if(user[i].email==loginName.value && user[i].password==loginPassword.value){
            nameUser=user[i].Name
            localStorage.setItem("name",JSON.stringify(nameUser))
            window.location.href='home.html'
            loginsuc.classList.remove("d-none")
            loginfield.classList.add("d-none")
            return true
            
            
        }
        loginfield.classList.remove("d-none")
    
    }
}
function displayName(){
    var welcome=document.getElementById("header")
    welcome.innerText=`Hello ${nameUser}`
}