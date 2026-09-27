console.log("log -> incio.js")
try {
    const form = document.querySelector("#formStorage");
    const inputs = form.querySelectorAll("input");


    function carregarDados(inputs) {
        if (localStorage.getItem("dados") !== null) {
            const dados = JSON.parse(localStorage.getItem("dados"));

            console.log(dados);

            inputs.forEach(inp => {
                inp.value = dados[inp.id];
            });
        }
    }

    carregarDados(inputs);

} catch (error) {
    console.log("[ERRO] -> ", error);
}