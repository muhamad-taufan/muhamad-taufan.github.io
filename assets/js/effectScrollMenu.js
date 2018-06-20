var scrollAwal=0;
$(window).scroll(function(event)
	{
		var st = $(this).scrollTop();
		var sl = $(this).scrollLeft();
		if(st > scrollAwal)
			{
				$("#navMen").fadeIn();
				//add class navBar-fixed-top for change position to fixed
				$("#navMen").addClass('navbar-fixed-top');
				//add class navbar-inverse 
				$("#navMen").addClass('navbar-inverse');
				$('.abs').removeClass('abs').addClass('fi');
			}
		else
			{
				$("#navMen").fadeIn();
				//add class navBar-fixed-top for change position to fixed
				$("#navMen").addClass('navbar-fixed-top');
				//add class navbar-inverse 
				$("#navMen").addClass('navbar-inverse');
				$('.abs').removeClass('abs').addClass('fi');
			
			
			}	
			
		scrollAwal=st;
var st= parseInt(st);		
	if (st > 0)
	{

	}

	else
	{
				
		//$("#navMen").removeClass('navbar-fixed-top');
		$("#navMen").removeClass('navbar-inverse');
		$('.fi').removeClass('fi').addClass('abs');
	}
	console.log(st);
	});
	

	
$(document).ready(function(){
    $("a").click(function(){
      var $this = $(this)
		$('.zzZ').removeClass('activedS');
		$this.addClass('activedS');
    });
});	
	
	
	
	
	var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('activedS');
      sections.removeClass('activedS');
      
      $(this).addClass('activedS');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('activedS');
    }
  });
});


