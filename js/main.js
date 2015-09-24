

	$('button').on('click', function(){
		$.ajax({
		url: 'http://theoldnewbie.github.io/ajax_test_edc/home.html',
		success: function(data){
			alert('Load was performed.');

			$('.main-content').html(data);
		}
	});
	})
	
