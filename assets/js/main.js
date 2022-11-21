function counter() {
    const proximoAno = new Date().getFullYear() + 1;
    var newYear = new Date(`Jan 1, ${proximoAno} 00:00:00`);

    var e = (new Date).getTime(),
        n = newYear - e, t = 36e5;
    r = o(Math.floor(n / 864e5), 1);
    e = o(Math.floor(n % 864e5 / t), 2);
    t = o(Math.floor(n % t / 6e4), 2);
    n = o(Math.floor(n % 6e4 / 1e3), 2);



    function o(e, n) {
        return e.toString().padStart(n, "0")
    }
    document.getElementById("day").innerHTML = r;
    document.getElementById("hour").innerHTML = e;
    document.getElementById("minute").innerHTML = t;
    document.getElementById("second").innerHTML = n;


}
setInterval(() => { counter() }, 1e3);

var dataSelecionada = document.querySelector(".dataSelecionada");
var mesAtual = new Date().getMonth() + 1;
if (mesAtual < 10) {
    mesAtual = `0${new Date().getMonth() + 1}`;
}

var dataOntem = `${new Date().getFullYear()}-${mesAtual}-${new Date().getDate()}`;
var anoSelecionado= " ";
var mesSelecionado = " ";
var diaSelecionado = " ";
dataSelecionada.min = dataOntem;
function calcularDataSelecionada() {
    var data = `${dataSelecionada.value}`;

    console.log(data);

    if (data == "" || data.length > 10) {
        console.log(data);
        // erroInput
        $(".inputData").addClass("erroInput");
    } else {
        $(".divDataSelecionadaTexto").addClass("invisivel");
        $(".divDiasSelecionados").addClass("invisivel");
        $(".inputData").removeClass("erroInput");
        $(".divInputData").addClass("invisivel");


        anoSelecionado = data.substr(0, 4);
        mesSelecionado = data.substr(5, 2);
        diaSelecionado = data.substr(8, 2);
        var mesSelecionadoTextoDataSelecionada = "";
        var diaSelecionadoTextoDataSelecionada = diaSelecionado;

        if (diaSelecionado < 10) {
            diaSelecionado = data.substr(9, 1);
        }

        if (mesSelecionado == 1) {
            mesSelecionado = "January";
            mesSelecionadoTextoDataSelecionada = "01";
        } else if (mesSelecionado == 2) {
            mesSelecionado = "February";
            mesSelecionadoTextoDataSelecionada = "02";
        } else if (mesSelecionado == 3) {
            mesSelecionado = "March";
            mesSelecionadoTextoDataSelecionada = "03";
        } else if (mesSelecionado == 4) {
            mesSelecionado = "April";
            mesSelecionadoTextoDataSelecionada = "04";
        } else if (mesSelecionado == 5) {
            mesSelecionado = "May";
            mesSelecionadoTextoDataSelecionada = "05";
        } else if (mesSelecionado == 6) {
            mesSelecionado = "June";
            mesSelecionadoTextoDataSelecionada = "06";
        } else if (mesSelecionado == 7) {
            mesSelecionado = "July";
            mesSelecionadoTextoDataSelecionada = "07";
        } else if (mesSelecionado == 8) {
            mesSelecionado = "August";
            mesSelecionadoTextoDataSelecionada = "08";
        } else if (mesSelecionado == 9) {
            mesSelecionado = "September";
            mesSelecionadoTextoDataSelecionada = "09";
        } else if (mesSelecionado == 10) {
            mesSelecionado = "October";
            mesSelecionadoTextoDataSelecionada = "10";
        } else if (mesSelecionado == 11) {
            mesSelecionado = "November";
            mesSelecionadoTextoDataSelecionada = "11";
        } else if (mesSelecionado == 12) {
            mesSelecionado = "December";
            mesSelecionadoTextoDataSelecionada = "12";
        }

        function counter2() {
            var newYear2 = new Date(`${mesSelecionado} ${diaSelecionado}, ${anoSelecionado} 00:00:00`);

            var e = (new Date).getTime(),
                n = newYear2 - e, t = 36e5;
            r = o(Math.floor(n / 864e5), 1);
            e = o(Math.floor(n % 864e5 / t), 2);
            t = o(Math.floor(n % t / 6e4), 2);
            n = o(Math.floor(n % 6e4 / 1e3), 2);


            function o(e, n) {
                return e.toString().padStart(n, "0")
            }
            document.getElementById("dia").innerHTML = r;
            document.getElementById("horas").innerHTML = e;
            document.getElementById("minutos").innerHTML = t;
            document.getElementById("segundos").innerHTML = n;

            console.log(newYear2);
            // console.log(diaSelecionado);
            // console.log(mesSelecionado);
            // console.log(anoSelecionado);
        }

        setInterval(() => { counter2() }, 1e3);

        $(".textoDataSelecionada").text(`Última ata selecionada - ${diaSelecionadoTextoDataSelecionada}/${mesSelecionadoTextoDataSelecionada}/${anoSelecionado}`);

        $(".divConteudoCollapsible").addClass("adicionandoCssLoading");

        $(".loading").removeClass("invisivel");
        startLoading();


        dataSelecionada.value = "";

    }
}


function abrirCollapsible() {
    $(".inputData").removeClass("erroInput");
    $(".inputData").val("");
}