$(function(){

	$('#translate-form').on('submit', function(e){
		e.preventDefault();
		console.log('test');

		var fromLang = 	$('[name=from]').val()
		var toLang = $('[name=to]').val()
		var word = $('[name=text]').val()

		console.log(fromLang, toLang, word)		

		$.post('/transubmit', {fromLang: fromLang, toLang: toLang, word: word}, function(data){
			console.log('data', data)

			$('body').append(data.translation)

		})


	})






})

