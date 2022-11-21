function startLoading() {
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 20);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("demo").innerHTML = width * 1 + '%';
            if (width == 100) {
                $(".divDiasSelecionados").removeClass("invisivel");
                $(".divInputData").removeClass("invisivel");
                $(".divDataSelecionadaTexto").removeClass("invisivel");
                $(".loading").addClass("invisivel");
                $(".collapsible").click();
                $(".collapsible").click();
            }
        }
    }
}