(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// OMA JQUERY
$(document).ready(function(){
	
	// kategoriapalkin toiminto
	$("#ateriaPalkki").collapsible();

//************************************************************************************
//TESTAUS

	// näytä kaikki napin painallus
	$("#kaikkiNappi").click(function(){ // näytetään kaikki sivut
		$("#ateriaValikko").css("display", "block");
		$("#etuSivu").css("display", "block");
	});
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
