$(document).ready(function () {
    $(".btn").click(function (e) {
        e.preventDefault();
        var cep = document.getElementById("CEP").value;
        console.log(cep);
        $.ajax({
            type: "GET",
            dataType: 'JSON',
            async: true,
            url: `https://viacep.com.br/ws/${cep}/json/`,
            success: function (data) {
                $("#logradouro").val(data.logradouro);
                $("#bairro").val(data.bairro);
                $("#complemento").val(data.complemento);
                $("#localidade").val(data.localidade);
                $("#UF").val(data.uf);

                if (data.complemento == "") {
                    $("#complemento").val("SEM COMPLEMENTO");
                }
            }
        });
    });
});
