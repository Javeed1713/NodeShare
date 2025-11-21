document.addEventListener('DOMContentLoaded', function() {

    const switchSignin = document.querySelector(".switch-signin");
    const switchSignup = document.querySelector(".switch-signup");
    const usernameWrapper = document.getElementById("username-wrapper")
    const signinButton = document.querySelector(".signin-btn")
    const signupButton = document.querySelector(".signup-btn")
    const loginButton = document.getElementsByClassName("login-btn")

    switchSignup.addEventListener('click', function() {
        switchSignin.style.cssText = " background-color: #1f1f1f; color: #b3b3b3;"
        switchSignup.style.cssText = "background-color: #0f1319; color:white;"

        usernameWrapper.style.display = "flex";
        signinButton.style.display = "none";
        signupButton.style.display = "flex";
    })

    switchSignin.addEventListener('click', function() {
        switchSignup.style.cssText = " background-color: #1f1f1f; color: #b3b3b3;"
        switchSignin.style.cssText = "background-color: #0f1319; color:white"

        usernameWrapper.style.display = "none";
        signinButton.style.display = "flex";
        signupButton.style.display = "none";
    })


    

})

