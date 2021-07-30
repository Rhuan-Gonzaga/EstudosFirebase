// Importando o meu banco de dados estudos com firebase
var firebaseConfig = {
    apiKey: "AIzaSyACa_Nt1scPyLplrhXj2A2eaeWtZSb80_g",
    authDomain: "colegio-4835d.firebaseapp.com",
    databaseURL: "https://colegio-4835d-default-rtdb.firebaseio.com",
    projectId: "colegio-4835d",
    storageBucket: "colegio-4835d.appspot.com",
    messagingSenderId: "557322724743",
    appId: "1:557322724743:web:a78381648d7e6839819f22",
    measurementId: "G-02KZGNSQWE"
};


  // Inicializando Firebase
firebase.initializeApp(firebaseConfig);
const autenticacao = firebase.auth();
const usuario = autenticacao.currentUser;

//Dados do HTML
const textoEmail = document.getElementById("email");
const textoSenha = document.getElementById("senha");
const entrar = document.getElementById("entrar");
const criar = document.getElementById("criar");
const sair = document.getElementById("sair");
const tela = document.getElementById("quadrado");
const novo = document.getElementById("novo");


entrar.addEventListener("click", f =>{

    //Criando uma conta de autenticação firebase
     const email = textoEmail.value;
     const senha = textoSenha.value;

    autenticacao.signInWithEmailAndPassword(email, senha).then(()=>{
        logado();
        alert("VOCÊ ESTÁ LOGADO!!");
     }).catch(()=>{
         alert("USUARIO NÃO EXISTE, CLIQUE NO BOTÃO DE INSCREVA-SE");
     })

     
})

function logado(){
    sair.style.display = "flex";
    tela.style.display = "none";
}


criar.addEventListener("click",f =>{
    
    //Criando um novo usuario
    const email = textoEmail.value;
    const senha = textoSenha.value;

    autenticacao.createUserWithEmailAndPassword(email,senha).then(()=>{
        alert("NOVO USUARIO CRIADO");
    }).catch(()=>{
        novo.innerText = "Para criar um novo usuario é só digitar um novo email e uma nova senha(minimo 6 caracteres) e depois clicar no botão INSCREVA-SE"
        alert("ERRO AO CRIAR UM NOVO USUARIO")
    })
})


sair.addEventListener("click",f =>{
    
    //Deslogando o usuario no firebase
    autenticacao.signOut().then(() => {
        tela.style.display = "inline"
        sair.style.display = "none";
        texto.style.display = "none"
      }).catch((error) => {
        console.log(error);
      });
})


