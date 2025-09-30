/*  função para obter categorias */

function getCategorias() {
    let dados = JSON.parse( sessionStorage.getItem('midias') );
    let categorias = [];

    //Criar o vetor categorias sem repetições
    for (let i = 0; i<dados.length; i++){
        if (!categorias.includes(dados[i].categoria))
            categorias.push(dados[i].categoria);    
    }
    return categorias;
}

/* Função para obter filmes/séries por categoria */
function getTitulos(categoria){
    let dados = JSON.parse( sessionStorage.getItem('midias') );
    return dados.filter( titulo => titulo.categoria == categoria);
}

/* função para montar a estrutura de dados da index */
function mostrarTitulos(){
    //pegando a div onde os dados de categorias serão inseridos
    let container = document.getElementById('container');
    
    //Obtendo as categorias
    let categorias = getCategorias();

    //Limpar o container e inserir as categorias
    container.innerHTML = '';
    let html = '';  

    for(let c=0; c<categorias.length; c++){
        //Inserindo as divs de categorias
        html += `<div class="categoria">${categorias[c]}</div>`;

        //Obtendo todos os títulos da categoria atual
        let titulos = getTitulos(categorias[c]);

        //Inserindo div Lista
        html += `<div class="lista">`;

        for(let t=0; t<titulos.length; t++)
            html += 
            `<img class="item" 
                src="img/${titulos[t].imagem}" 
                id="t${titulos[t].id}"
                onmouseenter="mostrarVideo(event, true)"
                onmouseleave="mostrarVideo(event, false)"
            />

            <div class="preview"
                 id="tp${titulos[t].id}"
                 data-video="${titulos[t].trailer}"
            > 
                <iframe frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                >
                </iframe>
            </div>
            `;
        

        html += '</div>'; //Fechamento da div class lista
    }

    //Atualizando o container
    container.innerHTML = html;

    /* Chamando a função para montar categorias e títulos */

}
mostrarTitulos();