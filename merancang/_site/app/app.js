$('.navbar-nav a').click(function(){
	$('.navbar-toggle').click()
})

$(document).each('[type=checkbox]', function(){
	if ($(this).is(':checked')){
		$(this).addClass('tebal')
	}
})