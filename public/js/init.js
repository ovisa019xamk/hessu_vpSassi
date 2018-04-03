(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// OMA JQUREY
$(document).ready(function(){
	
	// kategoriapalkin toiminto
	$("#ateriaPalkki").collapsible();
		
	// etusivunapin painallus
    $("#etusivuNappi").click(function(){
		$("#ateriaValikko").css("display", "none"); // piilotetaan ateriavalikko
		$("#etuSivu").css("display", "block"); // näytetään etusivu
	});
	// ateriavalikkonapin painallus
	$("#ateriaNappi").click(function(){
		$("#ateriaValikko").css("display", "block"); // näytetään ateriavalikko
		$("#etuSivu").css("display", "none"); // piilotetaan etusivu
	});
});
