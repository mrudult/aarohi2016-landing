$(function(){
	
	var note = $('#note'),
		ts = new Date(2016, 1, 27);
	

		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message="Something awesome is coming!!"
			
			note.html(message);
		}
	});
	
});
