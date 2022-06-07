var $input_quantidade = document.querySelector("#qtd");
var $output_total = document.querySelector("#total");
$input_quantidade.oninput = function ()
{
    var preco = 470.00;
    var quantidade = $input_quantidade.value;
    var total = quantidade * preco;
    total = "R$ " + total.toFixed(2);
    total = total.replace(".", ",");
    $output_total.value = total;
}

