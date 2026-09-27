console.log("log -> projetos.js")
try {
    const projetos = [
        {
            nome: "Projeto Alimentação",
            descricao: "Arrecadação e distribuição de alimentos para famílias em situação de vulnerabilidade, ajudando a garantir refeições e mais segurança alimentar para quem precisa"
        },
        {
            nome: "Projeto Educação",
            descricao: "Oferecemos aulas de reforço e atividades educativas para crianças e adolescentes, buscando apoiar o aprendizado e incentivar o desenvolvimento pessoal e escolar."
        },
        {
            nome: "Projeto Voluntariado",
            descricao: "Reunimos pessoas que desejam contribuir com seu tempo, conhecimento e habilidades para ajudar nas ações e projetos desenvolvidos pela ONG."
        },
        {
            nome: "Faça uma doação",
            descricao: "Sua contribuição ajuda a manter nossos projetos e permite que mais pessoas tenham acesso às ações e serviços oferecidos pela ONG. Toda ajuda faz a diferença."
        }
    ];
    const template = [];
    projetos.forEach(p => {

        template.push(
            "<div>" +
            "<h4>" + p.nome + "</h4>" +
            "<p>" + p.descricao + "</p>" +
            "</div>"
        );

    })


    const section = document.querySelector('#projetos');

    function apresentarDados(template) {

        template.forEach(t => {
            section.innerHTML += t;
        })

    }

    apresentarDados(template);
} catch (error) {
    console.error();
}

// eu nao sei como corrigir isso, mas como o conteudo é chamado via ajax, quando
// chamo projetos e crio o script dele, na primeira vez da tudo certo, mas se eu
// navegar pelo site e voltar ele da erro, porque ele tenta criar o script de novo.
// Eu garanti que a função limpasse o html para evitar isso, mas parece que o script,
// de alguma forma ainda continua existindo mesmo depois de limpar todo o conteudo da pagina.
// aparentemente o apagar o html não desfaz as varaiveis js declaradas, talvez seja isso.
// joguei em um try catch e resolveu kkkkkkk. Bom na verdade deve ser o cache me zuando.
// alguma outra coisa que eu mudei na funcao de carregar o js deve ter resolvido, talvez até jogar 
// a função de carregarJsProjetos no ajax.
