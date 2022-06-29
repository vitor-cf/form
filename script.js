const evento = document.getElementById('send')
const enviarFormulario =() => {
    let nome = document.getElementById('nome').value; 
    let email = document.getElementById('email').value; 
    let mensage = document.getElementById('mensagem').value;
    let numero = 5571982246892; 

var win= window.open(`https://wa.me/${numero}?text=Hola%20mi%20nombre%20es%20${nome}%20${email}, Assunto:%20${mensage}`,'_blank');
} 
evento.addEventListener('click', enviarFormulario)
    