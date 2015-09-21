$(function() {
	$.ajax({
		url: 'http://theoldnewbie.github.io/ajax_test_edc/new_index.html',
		success: function(){
			alert('Load was performed.')
		}
	});
});