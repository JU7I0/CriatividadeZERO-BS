let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let apelido = document.querySelector("#apelido");
let mapa = document.querySelector("#mapa");
let nomeOk = false;
let emailOk = false;
let apelidoOk = false;

function validaNome() {
    let txtNome = document.querySelector("#txtNome");
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido";
        txtNome.style.color = "#f00";
        nomeOk = false;
    } else {
        txtNome.innerHTML = "Nome válido";
        txtNome.style.color = "#537A5A";
        nomeOk = true;
    }
}



function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail");
    if (email.value.indexOf("@") === -1) {
        txtEmail.innerHTML = "Email inválido";
        txtEmail.style.color = "#f00";
        emailOk = false;
    } else {
        txtEmail.innerHTML = "Email válido";
        txtEmail.style.color = "#537A5A";
        emailOk = true;
    }
}

function validaApelido() {
    let txtAssunto = document.querySelector("#txtApelido" );

    if (apelido.value.length > 15) {
        txtApelido.innerHTML = "Apelido muito grande. Digite no máximo 15 caracteres";
        txtApelido.style.color = "#f00";
        txtApelido.style.display = "block";
        apelidoOk = false;
    } else {
        txtApelido.style.display = "none";
        apelidoOk = true;
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!");
    } else if (nomeOk == true && emailOk == true) {
        alert("Obrigado por assinar nossa NEWSLATTER!!!");
    }else {
        alert("Preencha o formulário corretamente!")
    }
}

anime({
    targets: ".row svg",
    translateY: 10,
    autoplay: true,
    loop: true,
    easing: "easeInOutSine",
    direction: "alternate",
});

anime({
    targets: "#zero",
    translateX: 10,
    autoplay: true,
    loop: true,
    easing: "easeInOutSine",
    direction: "alternate",
    scale: [{ value: 1 }, { value: 1.4 }, { value: 1, delay: 250 }],
    rotateY: { value: "+=180", delay: 200 },
});
