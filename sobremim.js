var sobremim = function(){
    $(".cima").on('click', function(){
        $("#perfil").hide();
        $("#cursos").hide();
        $("#sobremim").show();
    })
}
var perfil = function(){
    $(".cima").on('click', function(){
        $("#sobremim").hide();
        $("#cursos").hide();
        $("#perfil").show();
    })
}
var cursos = function(){
    $(".cima").on('click', function(){
        $("#sobremim").hide();
        $("#perfil").hide();
        $("#cursos").show();
    })
}