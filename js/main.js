

	$('button').on('click', function(){
		var id = jQuery.data(id);
		if(id = 'b1'){
			$.ajax({
			url: 'http://theoldnewbie.github.io/ajax_test_edc/home.html',
			success: function(data){
				alert('Home');

				$('.main-content').html(data);
			}
		});
		}else if(id = 'b2'){
			$.ajax({
			url: 'http://theoldnewbie.github.io/ajax_test_edc/books.html',
			success: function(data){
				alert('Books');

				$('.main-content').html(data);
			}
		});
		}else if(id = 'b3'){
			$.ajax({
			url: 'http://theoldnewbie.github.io/ajax_test_edc/authors.html',
			success: function(data){
				alert('Authors');

				$('.main-content').html(data);
			}
		});
		}
	})

	

// $(button).click(function() {
//     var id = jQuery.data(id);
//     function send()
//     {
//        $.ajax({
//                 type: "POST",
//                 url: "/change.php",
//                 data: "b"+id,
                
//                 success: function(html) {
//                         $(".r"+id).empty();
//                         $(".r"+id).append(html);
//                 }
//         });
 
//     }
 
// });