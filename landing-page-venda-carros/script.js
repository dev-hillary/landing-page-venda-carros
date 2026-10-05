const botaoTema = document.getElementById("botaoTema");


botaoTema.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {

        botaoTema.textContent = "☀️ Modo Claro";

    } else {

        botaoTema.textContent = "🌙 Dark Mode";

    }

});


const botoesInteresse = document.querySelectorAll(".botao-interesse");


botoesInteresse.forEach((botao) => {

    botao.addEventListener("click", () => {

        alert(
            "Obrigado pelo interesse! Entre em contato com a loja para mais informações."
        );

    });

});