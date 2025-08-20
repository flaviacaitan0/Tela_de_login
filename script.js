// Pega o formulário pelo ID
document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); // impede de recarregar a página

    // Pega os valores digitados
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Verifica se os campos estão vazios
    if(email === "" || password === ""){
        alert("⚠️ Preencha todos os campos!");
        return;
    }

    // Verifica se o e-mail tem "@"
    if(!email.includes("@")){
        alert("⚠️ Digite um e-mail válido!");
        return;
    }

    // Exemplo de "login válido"
    if(email === "admin@teste.com" && password === "12345"){
        alert("✅ Login realizado com sucesso!");
        // Aqui você poderia redirecionar para outra página:
        // window.location.href = "dashboard.html";
    } else {
        alert("❌ E-mail ou senha incorretos!");
    }
});
