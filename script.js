const form =document.getElementById("form");
const username =document.getElementById("username");
const email =document.getElementById("email");
const phone =document.getElementById("phone");
const password =document.getElementById("password");
const cpassword=document.getElementById("pass");
const button =document.getElementById("button");

//add event
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    validate();
})
const sendData =(successrate,count)=>{
    if(successrate === count){
        alert('Registration Successfull');
        swal("Welcome! ","Registration Successfull",
            "success");
    }
}

const successMsg = () =>{
    let formcon = document.getElementsByClassName('form-control');
    var count = formcon.length -1;//5-1=4 i.e count = 4
    for(var i=0;i<formcon.length;i++){ // for(var i=0;i<5;i++)
        if(formcon[i].className === "form-control success"){
            var successrate =0+i;// successrate = 4 after completing loop ok 
            console.log(successrate);
            sendData(successrate,count);//then here it becomes sendData(4,4);
        } else{
            return false;
        }
    }
}

//email validation
const isEmail =(emailval) => {
    var atsymbol = emailval.indexOf("@");
    if(atsymbol < 1) return false;
    var dot = emailval.lastIndexOf('.');//it check last one dot 
    if(dot <= atsymbol +2) return false; //it shouldnot be sadan@s.ubedi it must be sadan@su.bedi
    if(dot === emailval.length - 1) return false ;// here dot shouldnot be at last (sadan.)
    return true; 
}


//define validate function
const validate = ()=>{
    //trim function cut the whitespace from front and back both
    const usernameval =username.value.trim();
    const emailval =email.value.trim();
    const phoneval =phone.value.trim();
    const passwordval =password.value.trim();
    const cpasswordval =cpassword.value.trim();

    //validate username
    if(usernameval === ""){
        setErrorMsg(username,'username cannot be blank');
    } else if(usernameval.length <= 2){
        setErrorMsg(username,'username min 3 char');
    } else{
        setSuccessMsg(username);
    }
    //validate email
    if(emailval === ""){
        setErrorMsg(email,'email cannot be blank');
    } else if(!isEmail(emailval)){
        setErrorMsg(email,'Not a valid Email');
    } else{
        setSuccessMsg(email);
    }
     //validate phone number
    if(phoneval === ""){
        setErrorMsg(phone,'phone number cannot be blank');
    } else if(phoneval.length != 10){
        setErrorMsg(phone,'Not a valid phone number');
    } else{
        setSuccessMsg(phone);
    }

     //validate password
    if(passwordval === ""){
        setErrorMsg(password,'password cannot be blank');
    } else if(passwordval.length <= 5 || !passwordval.includes('@')){
        setErrorMsg(password,'Minimum 6 character and use of @');
    } else{
        setSuccessMsg(password);
    }

     //validate password confirm
    if(cpasswordval === ""){
        setErrorMsg(cpassword,'confirm password cannot be blank');
    } else if(cpasswordval !== passwordval){
        setErrorMsg(cpassword,'not matching password ');
    } else{
        setSuccessMsg(cpassword);
    }

    successMsg();
}

function setErrorMsg(input,errormsgs){
    const formcontrol =input.parentElement;
    console.log(formcontrol);
    const small = formcontrol.querySelector("small");
    formcontrol.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input,successmsgs){
    const formcontrol =input.parentElement;
    console.log(formcontrol);
    formcontrol.className = "form-control success";
    
}