$(document).ready(function () {
	$("p").hide();

	$("#btn-resumo").click(function (e) {
		e.preventDefault();
		$("p").toggle(1000);
        $(this).empty();
        let status = $(this).attr('data-status')
		if (status == '1') {
			$(this).append("Esconder Resumo");
			$(this).attr('data-status', '2');
		} else {
			$(this).append("Ver Resumo");
            $(this).attr('data-status', '1');
		}
	});
});
