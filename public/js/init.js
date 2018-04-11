
// Materializen oma sidenav koodi
(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space
  
// OMA JQUERY
$(document).ready(function(){
	
	// Materialize komponenttien koodit
	
	// kategoriapalkin toiminto
	$("#ateriaPalkki").collapsible();
	
	// infomodaalin käyttöön tarvittava koodi
    $('.modal').modal();
	
	// omaa koodia
	
	$.ajax({
		method: "GET", //haetaan
		url: "http://localhost:8000/api/", // data json
		success: function(result){
			
			tulosta(result);
		},
		error: function(xhr){
			console.log("Virhe!");
		}
	});
	
	function tulosta(result){
		
		var ateriaMenu = result.ruokalista;
		
		// käydään läpi kaikki ruokalistan elementit
		ateriaMenu.forEach(function(result){
			// liharuokakategorian ateriat
			if(result.ruokalaji == "liharuoka"){
				$("#lihaAteriat").append( "<li class='collection-item ateria'>" + 
				"<div class='col s12 ateriaKuva'>" + 
				"<img class='ateriaKuva1' src='kuvat/safka2.png'>" + "</div>" +
				"<div class='col s12 m7'>" +
				"<span class='ateriaNimi'>" + result.nimi + "</span>" +
				"<p class='ateriaTeksti'>" + result.ainekset + "</p>" + "</div>" +
				"<div class='col s12 m5 erikoisRuoka'> <p class='erikoisRv'>" + result.ruokavalio + "</p> </div>" +
				"<div class='col s12 m5 ateriaPohja'>" + 
				"<p class='ateriaHinta'>" + result.hinta + " €" + "</p>" +
				"<a class='ateriaNappi waves-effect waves-light btn-large green'>lisää ateria</a>" +
				"</div>" + "</li>"
				);
			 // kalaruokakategorian ateriat
			 }else if(result.ruokalaji == "kalaruoka"){
				$("#kalaAteriat").append( "<li class='collection-item ateria'>" + 
				"<div class='col s12 ateriaKuva'>" + 
				"<img class='ateriaKuva1' src='kuvat/safka2.png'>" + "</div>" +
				"<div class='col s12 m7'>" +
				"<span class='ateriaNimi'>" + result.nimi + "</span>" +
				"<p class='ateriaTeksti'>" + result.ainekset + "</p>" + "</div>" +
				"<div class='col s12 m5 erikoisRuoka'> <p class='erikoisRv'>" + result.ruokavalio + "</p> </div>" +
				"<div class='col s12 m5 ateriaPohja'>" + 
				"<p class='ateriaHinta'>" + result.hinta + " €" + "</p>" +
				"<a class='ateriaNappi waves-effect waves-light btn-large green'>lisää ateria</a>" +
				"</div>" + "</li>"
				);
			 // kanaruokakategorian ateriat
			 }else if(result.ruokalaji == "kanaruoka"){
				$("#kanaAteriat").append( "<li class='collection-item ateria'>" + 
				"<div class='col s12 ateriaKuva'>" + 
				"<img class='ateriaKuva1' src='kuvat/safka2.png'>" + "</div>" +
				"<div class='col s12 m7'>" +
				"<span class='ateriaNimi'>" + result.nimi + "</span>" +
				"<p class='ateriaTeksti'>" + result.ainekset + "</p>" + "</div>" +
				"<div class='col s12 m5 erikoisRuoka'> <p class='erikoisRv'>" + result.ruokavalio + "</p> </div>" +
				"<div class='col s12 m5 ateriaPohja'>" + 
				"<p class='ateriaHinta'>" + result.hinta + " €" + "</p>" +
				"<a class='ateriaNappi waves-effect waves-light btn-large green'>lisää ateria</a>" +
				"</div>" + "</li>"
				);
			// kasvisruokakategorian ateriat	
			}else if(result.ruokalaji == "kasvisruoka"){
				$("#kasvisAteriat").append( "<li class='collection-item ateria'>" + 
				"<div class='col s12 ateriaKuva'>" + 
				"<img class='ateriaKuva1' src='kuvat/safka2.png'>" + "</div>" +
				"<div class='col s12 m7'>" +
				"<span class='ateriaNimi'>" + result.nimi + "</span>" +
				"<p class='ateriaTeksti'>" + result.ainekset + "</p>" + "</div>" +
				"<div class='col s12 m5 erikoisRuoka'> <p class='erikoisRv'>" + result.ruokavalio + "</p> </div>" +
				"<div class='col s12 m5 ateriaPohja'>" + 
				"<p class='ateriaHinta'>" + result.hinta + " €" + "</p>" +
				"<a class='ateriaNappi waves-effect waves-light btn-large green'>lisää ateria</a>" +
				"</div>" + "</li>"
				);
			}
		});
		
	}
	
	// etusivunapin painallus
    $("#etusivuNappi").click(function(){ // näytetään etusivu
		$("#ateriaValikko").css("display", "none");
		$("#loppuSivu").css("display", "none"); 
		$("#etuSivu").css("display", "block");
	});

//************************************************************************************
//TESTAUS

	// näytä kaikki napin painallus
	$("#kaikkiNappi").click(function(){ // näytetään kaikki sivut
		$("#ateriaValikko").css("display", "block");
		$("#etuSivu").css("display", "block");
		$("#loppuSivu").css("display", "block");
	});
	
	// ateriavalikkonapin painallus
	$("#ateriaNappi").click(function(){ // näytetään ateriavalikkosivu
		$("#ateriaValikko").css("display", "block");
		$("#etuSivu").css("display", "none");
		$("#loppuSivu").css("display", "none"); 
	});
	// loppuSIvunapin painallus
	$("#loppuNappi").click(function(){ // näytetään loppuSivu
		$("#ateriaValikko").css("display", "none");
		$("#etuSivu").css("display", "none");
		$("#loppuSivu").css("display", "block"); 
	});
	
	// takaisinnapin painallus
    $("#takaisinNappi").click(function(){ // näytetään etusivu
		$("#ateriaValikko").css("display", "none");
		$("#loppuSivu").css("display", "none"); 
		$("#etuSivu").css("display", "block");
	});
});