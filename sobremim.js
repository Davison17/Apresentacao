const go = (elem) => {  // ok
    window.scroll({       // ok
      top: document.querySelector( elem ) // Ele captura a distância do topo do scroll para o local onde ele vai ser rolado
        .offsetTop,       // 2
      left: 0, // mesma coisa do top; SETINHA DE BAIXO
      behavior: 'smooth'// 3
     });
  }











