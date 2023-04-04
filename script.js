const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon");


pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password=>{
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show","bx-hide");
        })
    })
})

function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }
    var email = document.forms['myForm']["femail"].value;
    if (email.length==0){
        seterror("email", "*Please Enter Your Email");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "*Please Enter Your Name");
        returnval = false;
    }
   
    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6){

        // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }
    if (password.length == 0){

        seterror("pass", "*Please Enter Your Password!");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }
    if (cpassword.length == 0){

        seterror("cpass", "*Please Enter Your Confirm Password!");
        returnval = false;
    }

    

    return returnval;
}