window.input = {};

input.bag = [
	{peso:4, valor:100},
	{peso:3, valor:75},
	{peso:1, valor:250},
	{peso:5, valor:20},
	{peso:6, valor:90},
	{peso:7, valor:21},
	{peso:2, valor:50},
	{peso:8, valor:22}
];

var maxbag = 10;
var output = [75, 250, 100, 50];

function poeNaMochila(items) {

	var result = [];
	var pesoParcial = 0;

	var i = 0;

     items.sort(function(item1, item2){
     	return item2.valor - item1.valor;
     });

	while (i < items.length) {
		if(pesoParcial+items[i].peso < maxbag) {
			pesoParcial = pesoParcial + items[i].peso;
			result.push(items[i].valor);
		};
		i++;
	}

	var result2 = poeNaMochila(items.shift());

	if (result2.)

	return result;
}

