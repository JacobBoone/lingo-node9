var counter = 0;
$(function(){

	$('#translate-form').on('submit', function(e){
		e.preventDefault();
		console.log('test');

		var fromLang = 	$('[name=from]').val()
		var toLang = $('[name=to]').val()
		var word = $('[name=text]').val()
		var current = $(this)

		console.log(fromLang, toLang, word)		

		$.post('/transubmit', {fromLang: fromLang, toLang: toLang, word: word}, function(data){
			console.log('data', data)

			if(data.translation !== word) {
			// $('body').append(data.translation)
			current.find('.answer').text(data.translation)
			} 
			else {
				$('body').append('Sorry, Dude.  No such word.')
			}
		})


	})



	$('#quiz-form').on('submit', function(e){
		e.preventDefault();
		console.log('test');

		//$('ol').append('<li>')


			 
		$.post('/quizsubmit', function(data){
			for(var i=0; i<data.length; i++){
				var word=data[i];
			$('ol').append('<li class="bob"><span class="randomWord">' + word + '</span><br><textarea class="subWord"></textarea><br><button type="submit" class="answer">Submit Answer</button><div class="output"></div>');
			}


		}
		)
	});
	$('ol').on('click', '.answer', function(e) {
		e.preventDefault();
		
		var from = 'eng'
		var textArea = $(this).siblings('.subWord').val()
		var selectedLang = 	$('[name=lang]').val()
		var word = $(this).siblings('.randomWord').text()
		console.log('done')
		var current = $(this)
		if(textArea.toLowerCase()=== word.toLowerCase()){
			current.siblings('.output').text(textArea + ' is incorrect!')
			return
		}
		
		$.post('/answerTranslate', {from: from, selectedLang: selectedLang, textArea: textArea, word: word}, function(data) {
			console.log('data', data);
			// current.siblings('.output').text(data.translation)

			if(data.translation.toLowerCase() === word){
				current.siblings('.output').text(textArea + ' is correct!')

			}
			else{
				current.siblings('.output').text(textArea + ' is incorrect!')
				counter++
			}


			if(counter ===3){
				// window.location.href = 'http://www.google.com'
				alert("You missed too many dumbass, start over!")
					window.location.reload();
				

			}
		})

	});
})

