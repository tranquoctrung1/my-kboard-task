
$(document).ready(function()
{
	$('.infor').hide()
	$('.log-out').hide()
	$('.fas.fa-user').on('click',function()
	{
		$('.infor').slideToggle(500)
		$('.log-out').slideToggle(500)
	})

	$('.test').hide()
	$('.play').on('click',function()
	{
		$(this).toggleClass('active').parents('.show').nextAll().slideToggle(1000)
	})


	$('input').on('focus',function(){

		$(this).nextAll('label').addClass('active')
	})
	
	$('input').on('blur',function () {
		var e =  $(this).val();
		(e.length > 0) ? false : $(this).nextAll('label').removeClass('active')
		
	  })
})
