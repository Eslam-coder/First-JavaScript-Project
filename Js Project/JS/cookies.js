var formlogin = document.getElementById("loginform")

var pass = document.getElementById("password")


////////////////////////////////////////////////////////////
/////COOOKIES:-
function setCookie(name, value, expDays) {
    debugger
    var d = new Date();
    d.setTime(d.getTime() + (expDays * 24 * 60 * 60 * 1000))

    var expires = "expires=" + d.toGMTString()
    document.cookie = name + "=" + value + ";" + expires + ";path=/"
}

function getCookie(name) {
    debugger
    var cname = name + "=";
    console.log(document.cookie)
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) == 0) {
            //Substring(start(numbers) , finish(numbers)) 
            console.log(c.substring(cname.length, c.length));
            return c.substring(cname.length, c.length)
        }

    }
    return "";

}

function deleteCookie(name) {
    var d = new Date();
    d.setTime(d.getTime() - (60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = name + "=;" + expires + ";path=/";

}

function checkCookie() {
    var email = document.getElementById("txtemail")
    var emailCookie = getCookie("email");
    if (emailCookie != "" && emailCookie == email.value) {
        alert("welcome again " + " " + emailCookie)
            //Take me to HomePage :
        document.getElementById('loginform').action = '../HTML/PROJ (Home Page).html'
    } else {
        //user = prompt("enter your name:", "")
        if (email.value != "" && email.value != null) {
            setCookie("email", email.value, 30);
            alert("ليس لديك حساب سيتم تحويلك لصفحة تسجيل الدخول")
            document.getElementById('loginform').action = ' ../HTML/PROJ (FormValidation).html'
                // console.log(user)
        }
        
    }

}

