var SliderContent = document.getElementById("box");
var images = ['imgorg1', 'imgorg2', 'imgorg3', 'imgorg4', 'imgorg5'];
var i = images.length;
//Function to move next images
function nextimg() {
    if (i < images.length) {
        i = i + 1;

    } else {
        i = 1;

    }
    SliderContent.innerHTML = "<img src=../Photo/" + images[i - 1] + ".jpg>";
    // SliderContent.appendChild("<img src=" + images[i - 1] + ".jpg/>");

}

//Function to move previous images
function previmg() {
    if (i < images.length + 1 && i > 1) {
        i = i - 1;
    } else {
        i = 5;
    }
    SliderContent.innerHTML = "<img src=../Photo/" + images[i] + ".jpg>";
}
//////////To Images By Keyboard
function prev() {
    if (i < images.length + 1 && i > 1) {
        i = i - 1;
    } else {
        i = 5;
    }
    SliderContent.innerHTML = "<img src=../Photo/" + images[i] + ".jpg>";
}

function next() {
    if (i < images.length) {
        i = i + 1;

    } else {
        i = 1;

    }
    SliderContent.innerHTML = "<img src=../Photo/" + images[i - 1] + ".jpg>";
    // SliderContent.appendChild("<img src=" + images[i - 1] + ".jpg/>");

}

//script for auto imageslider
setInterval(nextimg, 3000);
///////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//Script For FormValidation:-
const form = document.getElementById('form')
const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('Email')
const age = document.getElementById('age')
    //const genderMale = document.getElementById('r1')
    //const genderFemale = document.getElementById('r2')
const country = document.getElementById('select')
const address = document.getElementById('txtaddress')
const password = document.getElementById('password')
const passwordcheck = document.getElementById('passwordcheck')
const errorRadio = document.getElementById('errorRadio')
    //var radio = document.querySelectorAll("input[type=radio]");
var radio1 = document.getElementById("r1");
var radio2 = document.getElementById("r2");



form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkinputs();
})


function checkinputs() {
    //trim() : use to remove space before typing 
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const ageValue = age.value.trim();
    //const genderMaleValue = genderMale.value;
    //const genderFemaleValue = genderFemale.value;
    const countryValue = country.value.trim();
    const addressValue = address.value.trim();
    const passwordValue = password.value.trim();
    const passwordcheckValue = passwordcheck.value.trim();
    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



    if (firstnameValue === '') {
        //show error
        setErrorFor(firstname, "FirstName can't be blank")
            //setError()

    } else if (firstnameValue.length < 3) {
        setErrorFor(firstname, "FirstName should no be less than 3 characters")

    }
    //REgExepression (Match) to prevent write numbers 
    else if (!firstnameValue.match(letters)) {
        setErrorFor(firstname, "FirstName should no be contain numbers")
        return false;

    } else {
        //show success
        setSuccessFor(firstname)
            //span.innerText = "success";

    }
    if (lastnameValue === '') {
        setErrorFor(lastname, "LastName can't be blank")
    } else if (lastnameValue.length < 3) {
        setErrorFor(lastname, "LastName should no be less than 3 characters")
    }
    //REgExepression (Match) to prevent write numbers 
    else if (!(lastnameValue.match(letters))) {
        setErrorFor(lastname, "LastName should no be contain numbers")
        return false
    } else {
        setSuccessFor(lastname)
    }
    if (emailValue === "") {
        setErrorFor(email, "Email can't be blank")
    } else {
        setSuccessFor(email)
    }
    if (ageValue == '') {
        setErrorFor(age, "Age can't be blank")
    } else if (ageValue < 18 || ageValue > 60) {
        setErrorFor(age, "Age range should no be from 18-60 ")
    }
    //regEx for age to prevent writing letters 
    else if (!(ageValue.match(numbers))) {
        setErrorFor(age, "Age should no be contain letters")
        return false;
    } else {
        setSuccessFor(age)
    }

    if (countryValue == '') {
        setErrorFor(country, "Country can't be blank")
    } else {
        setSuccessFor(country)
    }
    if (addressValue == '') {

        document.getElementById("errorAddress").innerHTML = "Address can't be blank"
    }

    if (passwordValue == "") {
        setErrorFor(password, "Password can't be blank")
    } else {
        setSuccessFor(password)
    }
    if (passwordcheckValue == '') {
        setErrorFor(passwordcheck, "PasswordCheck can't be blank")
    } else if (passwordcheckValue != passwordValue) {
        setErrorFor(passwordcheck, "PasswordCheck doesn't match with Password")
    } else {
        setSuccessFor(passwordcheck)
    }
    /*if (radio[0].checked && !radio[1].checked) {
        errorRadio.innerHTML += "Choose"
    }*/
    if (!radio1.checked && !radio2.checked) {
        errorRadio.innerHTML = "Choose Gender"
        console.log("none")
    }
    if (firstnameValue != '' && lastnameValue != '' && emailValue != "" && ageValue != '' && countryValue != '' && addressValue != '' && passwordcheckValue == passwordValue && (radio1.checked || radio2.checked)) {
        win = open("PROJ (ThanksFormValidation).html", "", "width=1500,height=1500");
    }


}

function setErrorFor(input, message) {
    //const small = document.getElementById("small")
    const formcontrol = input.parentElement; //.form-control
    const small = formcontrol.querySelector('small');
    small.innerText = message;
    //add error message
    formcontrol.className = 'form-control error'


}

function setSuccessFor(input) {
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success'
        // const small = document.getElementById("small")
        // small.innerText = "FirstName: "

}

function setErrorForr(textarea, messagee) {
    const formcont = textarea.parentElement();
    formcont.className = "form-control error"
    const small = formcont.small;

}
/////////////////////////////////////////////////////////////////////////
var win;

/*function finish() {
    if (firstnameValue != '' && lastnameValue != '' && emailValue != "" && ageValue != '' && countryValue != '' && addressValue != '' && passwordcheckValue != '') {
        win = open("cookie.html", "", "width=150,height=150");
    }

}*/