$(document).ready(function(){
	// $('.gallery-slider').slick();

	//Convert address tags to google map links - Michael Jasper 2012
	$('address').each(function () {
		var link = "<a href='http://maps.google.com/maps?q=" + encodeURIComponent( $(this).text() ) + "' target='_blank'>" + $(this).text() + "</a>";
		$(this).html(link);
	});
	
    $("map-address").each(function(){                         
        var embed ="<iframe width='425' height='350' frameborder='0' scrolling='no'  marginheight='0' marginwidth='0' src='https://maps.google.com/maps?&amp;q="+ encodeURIComponent( $(this).text() ) +"&amp;output=embed'></iframe>";
        $(this).html(embed);             
    });
})
