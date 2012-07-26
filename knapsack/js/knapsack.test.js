(function() {
	test('verifica quantidade de objetos', function() {		
		equal(input.bag.length, 8, 'quantidade de objetos');
	});

	test('consegue por na mochila', function() {
		deepEqual([100], poeNaMochila([{peso:4, valor:100}]));
	});

	test('se passar um item que nao cabe na mochila', function() {
		deepEqual([], poeNaMochila([{peso:11, valor:10}]));
	});

	test('se a soma do peso dos itens cabe na mochila', function() {
		deepEqual( poeNaMochila([
				{peso:4, valor:100},
				{peso:3, valor:75}
			]), [100,75]);
	});

	test('se a soma do peso de dois itens nao cabe na mochila', function() {
		deepEqual(poeNaMochila([
				{peso:4, valor:100},
				{peso:11, valor:75}
			]), [100]);
	});	

	test('se a soma do peso de dois itens nao cabe na mochila', function() {
		deepEqual(poeNaMochila([
				{peso:6, valor:75},
				{peso:5, valor:100}
			]), [100]);
	});

	test('se a soma do peso de tres itens nao cabe na mochila', function() {
		deepEqual(poeNaMochila([
				{peso:4, valor:75},
				{peso:5, valor:100},
				{peso:3, valor:120}
			]), [120,100]);
	});

	test('se a soma do peso de tres itens nao cabe na mochila', function() {
		deepEqual(poeNaMochila([
				{peso:9, valor:140},
				{peso:5, valor:100},
				{peso:3, valor:120}
			]), [120,100]);
	});

}());