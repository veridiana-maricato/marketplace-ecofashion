// var loginButton = document.querySelector('#loginButton')
// var loginDiv = document.querySelector(".login-div")


// loginButton.addEventListener('mouseenter', removeHidden);
// loginDiv.addEventListener('mouseleave', addHidden);

// function removeHidden(){
//     document.querySelector('#hidden').classList.remove('hidden')
// }
// function addHidden(){
//     document.querySelector('#hidden').classList.add('hidden')
// }


// LOGIN / SINGIN
    var login = document.querySelector('#login_title_btn')
    var singin = document.querySelector('#singin_title_btn')

       
    login.addEventListener('click', singinHidden)
    singin.addEventListener('click', loginHidden)


function singinHidden(){
    document.querySelector('.singin').classList.add('hidden')
    document.querySelector('.login').classList.remove('hidden')
    
    document.querySelector('.singin_title').classList.remove('current_title')
    document.querySelector('.singin_title').classList.add('not_current_title')

    document.querySelector('.login_title').classList.remove('not_current_title')
    document.querySelector('.login_title').classList.add('current_title')
}

function loginHidden(){
    document.querySelector('.login').classList.add('hidden')
    document.querySelector('.singin').classList.remove('hidden')

    document.querySelector('.singin_title').classList.remove('not_current_title')
    document.querySelector('.singin_title').classList.add('current_title')

    document.querySelector('.login_title').classList.add('not_current_title')
    document.querySelector('.login_title').classList.remove('current_title')
    
    }