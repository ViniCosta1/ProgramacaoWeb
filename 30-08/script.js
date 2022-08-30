var inputBtn = document.getElementById("cep");
inputBtn.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("btn-enter").click();
    }
});

function consultaCEP() {
    $(".barra-progresso").show();
    var cep = document.getElementById("cep").value;

    $.ajax({
        url: "https://viacep.com.br/ws/" + cep + "/json/",
        type: "GET",
        success: function (response) {
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP: " + cep);
            $(".cep").show();
            $(".barra-progresso").hide();
        },
    });
}

$(function () {
    $(".cep").hide();
    $(".barra-progresso").hide();
});
