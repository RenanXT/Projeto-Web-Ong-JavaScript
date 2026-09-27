try {
    const tag_a = document.querySelectorAll('nav a');
    const main = document.querySelector('#mainID');

    // chamada da função para apresentar o conteudo inicial na tela
    carregarHTML('inicio.html', main);

    // chamada da função em caso generico
    tag_a.forEach(a => {
        a.addEventListener('click', (event) => {
            event.preventDefault();
            carregarHTML(event.currentTarget.href, main);
        })
    })

    function carregarHTML(event, main) {
        const href = event;

        fetch(`${href}`)
            .then(response => response.text())
            .then(html => {
                main.innerHTML = "";
                main.innerHTML = html;

                carregarJsProjetos(href);
            });

    }

    function carregarJsProjetos(href) {
        let link = href;
        link.split("/").pop();

        // caso o href direcione para projetos.html eu troco o valor para .js
        // gerenciando a varaivel com metodos de array  

        link = link.split("/").pop();
        link = link.replace(".html", ".js");
        console.log(link)

        // crio um elemento para adicionar o script do projetos.js

        const script = document.createElement('script');
        script.src = '../public/js/' + link;
        main.appendChild(script);
    }
    // tive que fazer essa gambiarra porque o navegador não tava interpretando 
    // o script como tag JavaScript, então não carregava e não adiantava eu colocar 
    // no index.html, porque eu preciso dos dados da view dos projetos pra mexer nesse .js
    // gambiarras, basicamente!!

} catch (error) {
    console.log("[ERRO] -> " ,error)
}