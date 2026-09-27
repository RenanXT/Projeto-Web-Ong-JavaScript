console.log("log -> cadastro.js")
try {

    const form = document.querySelector("#formID");
    const inputs = form.querySelectorAll("input");
    const alertaSenha = document.querySelector("#alertSenha");

    const btn = document.querySelector("#btnCadastro");

    btn.addEventListener('click', () => {
        enviaDados(inputs);
    })

    inputs.forEach(inp => {


        // chama a funcao de verificar o input a cada entrada no teclado

        switch (inp.id) {
            case "Senha":
                validarSenha(inp, alertaSenha);
                break;
            case "CPF":
                inp.addEventListener('blur', () => {
                    if (inp.value.length == 11) {
                        validarCPF(inp);
                    }
                })
                break;

            case "Telefone":
                inp.addEventListener('blur', () => {
                    if (!inp.value.includes("(")) {
                        validarTelefone(inp);
                    }
                })
                break;
        }

    });

    function validarSenha(inp, alertaSenha) {

        inp.addEventListener('input', () => {
            console.log('foi')
            console.log('clicou', inp)
            if (inp.value.length < 6) {
                inp.classList.add("border", "border-danger");
                alertaSenha.classList.remove('d-none');
            }
            else {
                inp.classList.remove("border", "border-danger");
                alertaSenha.classList.add('d-none')
            }
        })

    }

    function validarCPF(inp) {

        let parte1 = inp.value.substring(0, 3);
        let parte2 = inp.value.substring(3, 6);
        let parte3 = inp.value.substring(6, 9);
        let parte4 = inp.value.substring(9, 11);

        inp.value = parte1 + "." + parte2 + "." + parte3 + "-" + parte4;

    }
    function validarTelefone(inp) {
        let parte1 = inp.value.substring(0, 2);
        let parte2 = inp.value.substring(2, 7);
        let parte3 = inp.value.substring(7, 11);

        inp.value = "(" + parte1 + ") " + parte2 + "-" + parte3;
    }

    function enviaDados(inputs) {

        let dados = {};
        inputs.forEach(inp => {
            dados[inp.id] = inp.value;
        });
        console.log(dados);
        localStorage.setItem("dados", JSON.stringify(dados));
    }

} catch (error) {
    console.log("[ERRO] -> ", error)
}