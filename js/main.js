	$('button').on('click', function(){
		var id = $(this).attr("id");
		console.log(id);
		if(id == 'home'){
			$.ajax({
			url: 'http://theoldnewbie.github.io/ajax_test_edc/home.html',
			success: function(data){
				alert('Home');

				$('.main-content').html(data);
			}
		});
		}else if(id == 'books'){
			$.ajax({
			url: 'http://theoldnewbie.github.io/ajax_test_edc/books.html',
			success: function(data){
				alert('Books');

				$('.main-content').html(data);
			}
		});
		}else if(id == 'authors'){
			$.ajax({
			url: 'http://theoldnewbie.github.io/ajax_test_edc/authors.html',
			success: function(data){
				alert('Authors');

				$('.main-content').html(data);
			}
		});
		}
	})
