/* Criando timer para atrasar a exibição do preview */
let timer;

function mostrarVideo(event, mostrar) {
    //Pegando a div onde o evento foi originado
    const divAtual = event.currentTarget;

    //Pegar o id da div (ignorar a letra 't' e pegando o número)
    let id = divAtual.id.slice(1);

    //Obtendo o id da div de preview correspondente
    let prevId = `tp${id}`;

    //Exibindo a div de preview
    let preview = document.getElementById(prevId)

    //Acessando o valor da propriedade 'data-video' da div
    const videoId = preview.dataset.video;

    //Se não encontrar a div, ou se não tiver trailer, sai sem fazer nada
    if ( (!preview) || (videoId.length <= 4) ) return;

    if (mostrar) {  //Mostra trailer
        //Começa a contar 2 segundos para mostrar o trailer
        timer = setTimeout( 
             function(){
                const embedURL = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

              if (embedURL){
                //Atualizar o Iframe com a URL correta
                preview.querySelector('iframe').src = embedURL;
                preview.style.display = 'block'; //Tornando Vísivel
              }  
             } ,800)
    }
    else {          //Esconde o trailer
        //Cancela o timer e esconde a preview
        clearTimeout(timer);
        timer = null;
        preview.style.display = 'none'; //Tornando Invísivel
    }

} 

/* Função para mostrar o trailer 
function mostrarVideo(event, mostrar){
    //Obtendo o evento
    let evento = window.event;

    //Obtendo o id do elemento que disparou o evento
    let id = evento.target.id;

    //Obtendo o número do id (removendo a letra t)
    let numero = id.substring(1);

    //Obtendo a div do preview
    let preview = document.getElementById('tp' + numero);

    //Obtendo o iframe dentro da div preview
    let iframe = preview.children[0];

    //Verificando se é para mostrar ou esconder o preview
    if(evento.type == 'mouseenter'){
        //Obtendo o link do vídeo
        let video = preview.getAttribute('data-video');

        //Atribuindo o link ao iframe (com autoplay)
        timer = setTimeout( () => {
            iframe.setAttribute('src', 'https://www.youtube.com/embed/' + '' + video + '?autoplay=1&mute=1');
            preview.style.display = 'block';
        }, 1000); //Atraso de 1 segundo
    }
    else{
        //Removendo o link do iframe
        clearTimeout(timer); //Cancelar a exibição se o mouse sair antes do tempo
        iframe.setAttribute('src', '');
        preview.style.display = 'none';
    }
}   */