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
    var login = document.getElementById('login_title_btn')
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

 // SAIBA MAIS / MENOS

 var saibaMais = document.getElementById('btnSaibaMais')
 var saibaMenos = document.getElementById('btnSaibaMenos')
 var textoSaibaMais = document.getElementById('textoSaibaMais')

//  saibaMais.addEventListener('click', exibirTexto)
//  saibaMenos.addEventListener('click', esconderTexto)

 function exibirTexto(){
    document.querySelector('.continuacao-texto').classList.remove('hidden')    
    document.querySelector('#btnSaibaMenos').classList.remove('hidden')    
    document.querySelector('#btnSaibaMais').classList.add('hidden')    
 }

 function esconderTexto(){
    document.querySelector('.continuacao-texto').classList.add('hidden')    
    document.querySelector('#btnSaibaMenos').classList.add('hidden')    
    document.querySelector('#btnSaibaMais').classList.remove('hidden')  
 }

 //escolher tamanho da peca e quantidade

 var btnAdicionar = document.getElementById('btnAdicionarCompra')
 var btnFinalizar = document.getElementById('btnFinalizarCompra')
 var escolheTamanho = document.getElementById('escolheTamanho') 

 function habilitaBotaoAdicionar(){
    if(escolheTamanho.value !== "valor0"){
        btnAdicionar.disabled = false
        btnFinalizar.disabled = false
    } else{
        btnAdicionar.disabled = true
        btnFinalizar.disabled = true
    }
 }
 habilitaBotaoAdicionar()

 //localStorage

