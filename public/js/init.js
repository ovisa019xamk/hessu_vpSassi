
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
			
			// filtterialueen tuloste
			$("#filtteriAteria").append( "<li class='collection-item ateria'>" + 
			"<div class='col s12 ateriaKuva'>" + 
			"<img class='ateriaKuva1' src='kuvat/safka2.png'>" + "</div>" +
			"<div class='col s12 m7 ateriaInfo'>" +
			"<span class='ateriaNimi'>" + result.nimi + "</span>" +
			"<p class='ateriaTeksti'>" + result.ainekset + "</p>" + "</div>" +
			"<div class='col s12 m5 erikoisRuoka'> <p class='erikoisRv'>" + result.ruokavalio + "</p> </div>" +
			"<div class='col s12 m5 ateriaPohja'>" + 
			"<p class='ateriaHinta'>" + result.hinta + " €" + "</p>" +
			"<a class='waves-effect waves-light btn-large green ateriaValitseNappi'>lisää ateria</a>" +
			"</div>" + "</li>" + "<br><br>");
		

			// liharuokakategorian ateriat
			if(result.ruokalaji == "liharuoka"){
				$("#lihaAteriat").append( "<li class='collection-item ateria'>" + 
				"<div class='col s12 ateriaKuva'>" + 
				"<img class='ateriaKuva1' src='kuvat/safka2.png'>" + "</div>" +
				"<div class='col s12 m7 ateriaInfo'>" +
				"<span class='ateriaNimi'>" + result.nimi + "</span>" +
				"<p class='ateriaTeksti'>" + result.ainekset + "</p>" + "</div>" +
				"<div class='col s12 m5 erikoisRuoka'> <p class='erikoisRv'>" + result.ruokavalio + "</p> </div>" +
				"<div class='col s12 m5 ateriaPohja'>" + 
				"<p class='ateriaHinta'>" + result.hinta + " €" + "</p>" +
				"<a class='waves-effect waves-light btn-large green ateriaValitseNappi'>lisää ateria</a>" +
				"</div>" + "</li>"
				);
			 // kalaruokakategorian ateriat
			 }else if(result.ruokalaji == "kalaruoka"){
				$("#kalaAteriat").append( "<li class='collection-item ateria'>" + 
				"<div class='col s12 ateriaKuva'>" + 
				"<img class='ateriaKuva1' src='kuvat/safka2.png'>" + "</div>" +
				"<div class='col s12 m7 ateriaInfo'>" +
				"<span class='ateriaNimi'>" + result.nimi + "</span>" +
				"<p class='ateriaTeksti'>" + result.ainekset + "</p>" + "</div>" +
				"<div class='col s12 m5 erikoisRuoka'> <p class='erikoisRv'>" + result.ruokavalio + "</p> </div>" +
				"<div class='col s12 m5 ateriaPohja'>" + 
				"<p class='ateriaHinta'>" + result.hinta + " €" + "</p>" +
				"<a class='waves-effect waves-light btn-large green ateriaValitseNappi'>lisää ateria</a>" +
				"</div>" + "</li>"
				);
			 // kanaruokakategorian ateriat
			 }else if(result.ruokalaji == "kanaruoka"){
				$("#kanaAteriat").append( "<li class='collection-item ateria'>" + 
				"<div class='col s12 ateriaKuva'>" + 
				"<img class='ateriaKuva1' src='kuvat/safka2.png'>" + "</div>" +
				"<div class='col s12 m7 ateriaInfo'>" +
				"<span class='ateriaNimi'>" + result.nimi + "</span>" +
				"<p class='ateriaTeksti'>" + result.ainekset + "</p>" + "</div>" +
				"<div class='col s12 m5 erikoisRuoka'> <p class='erikoisRv'>" + result.ruokavalio + "</p> </div>" +
				"<div class='col s12 m5 ateriaPohja'>" + 
				"<p class='ateriaHinta'>" + result.hinta + " €" + "</p>" +
				"<a class='waves-effect waves-light btn-large green ateriaValitseNappi'>lisää ateria</a>" +
				"</div>" + "</li>"
				);
			// kasvisruokakategorian ateriat	
			}else if(result.ruokalaji == "kasvisruoka"){
				$("#kasvisAteriat").append( "<li class='collection-item ateria'>" + 
				"<div class='col s12 ateriaKuva'>" + 
				"<img class='ateriaKuva1' src='kuvat/safka2.png'>" + 
				"</div>" +
				"<div class='col s12 m7 ateriaInfo'>" +
				"<span class='ateriaNimi'>" + result.nimi + "</span>" +
				"<p class='ateriaTeksti'>" + result.ainekset + "</p>" + 
				"</div>" +
				"<div class='col s12 m5 erikoisRuoka'> <p class='erikoisRv'>" + result.ruokavalio + 
				"</p> </div>" +
				"<div class='col s12 m5 ateriaPohja'>" + 
				"<p class='ateriaHinta'>" + result.hinta + " €" + "</p>" +
				"<a class='waves-effect waves-light btn-large green ateriaValitseNappi'>lisää ateria</a>" +
				"</div>" + "</li>"
				);
			}
		});
		// varille arvoksi ateriahakukentän teksti
		var haku = $("#ateriaHaku").val();
			
		$("#ateriaHaku").on("keyup", function() {
			var value = $(this).val().toLowerCase();
			$("#filtteriAteria li").filter(function() {
			  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
			});
		  });
	}
	
	// takaisinnapin painallus
    $("#takaisinNappi").click(function(){ // näytetään etusivu
		$("#ateriaValikko").css("display", "none");
		$("#loppuSivu").css("display", "none"); 
		$("#etuSivu").css("display", "block");
	});
	
// VIIKONPÄIVÄ NAPIT

	// boolit, joilla katsotaan mikä viikonpäivä on valittu
	var maValittu = false;
	var tiValittu = false;
	var keValittu = false;
	var toValittu = false;
	var peValittu = false;

	//maanantai
	$("#maNappi").click(function(){
		// näytetään ateriavalikkosivu
		$("#ateriaValikko").css("display", "block");
		$("#etuSivu").css("display", "none");
		$("#loppuSivu").css("display", "none"); 
		// printataan viikonpäivän nimi sivun ylälaitaan
		$("#ruokavalikkoOtsikko").html("Maanantai");
		// pistetään oikea bool todeksi ja kaikki muut epätodeksi
		maValittu = true;
		tiValittu = false;
		keValittu = false;
		toValittu = false;
		peValittu = false;
		// napin teksti
		$("#maNappi").html("Vaihda ateriaa").css("font-size","14px");
	});
	
	//tiistai
	$("#tiNappi").click(function(){
		$("#ateriaValikko").css("display", "block");
		$("#etuSivu").css("display", "none");
		$("#loppuSivu").css("display", "none"); 
		
		$("#ruokavalikkoOtsikko").html("Tiistai");
		maValittu = false;
		tiValittu = true;
		keValittu = false;
		toValittu = false;
		peValittu = false;
	});
	
	//keskiviikko
	$("#keNappi").click(function(){
		$("#ateriaValikko").css("display", "block");
		$("#etuSivu").css("display", "none");
		$("#loppuSivu").css("display", "none"); 
		
		$("#ruokavalikkoOtsikko").html("Keskiviikko");
		maValittu = false;
		tiValittu = false;
		keValittu = true;
		toValittu = false;
		peValittu = false;
	});
	
	//torstai
	$("#toNappi").click(function(){
		$("#ateriaValikko").css("display", "block");
		$("#etuSivu").css("display", "none");
		$("#loppuSivu").css("display", "none"); 
		
		$("#ruokavalikkoOtsikko").html("Torstai");
		maValittu = false;
		tiValittu = false;
		keValittu = false;
		toValittu = true;
		peValittu = false;
	});
	
	//perjantai
	$("#peNappi").click(function(){
		$("#ateriaValikko").css("display", "block");
		$("#etuSivu").css("display", "none");
		$("#loppuSivu").css("display", "none"); 
		
		$("#ruokavalikkoOtsikko").html("Perjantai");
		maValittu = false;
		tiValittu = false;
		keValittu = false;
		toValittu = false;
		peValittu = true;
	});
	
// ATERIAN VALINTA

	$(document).on("click", ".ateriaValitseNappi",function(){
		// haetaan parentin parentti, joka on (luokkanimi) ateria
		var tieto = $(this).parent().parent();
		// haetaan halutun aterian nimi
		var ruokaNimi = tieto.children(".ateriaInfo").children(".ateriaNimi").get(0);
		//haetaan halutun aterian hinta
		var ruokaHinta = $(this).parent();
		ruokaHinta = ruokaHinta.children(".ateriaHinta").get(0);
		
		// katsotaan mikä viikonpäivä on valittu
		if (maValittu == true){
			
			// valitaan mihin tulostetaan nimi ja tyhjennetään sen olemassa oleva teksti
			valittuRuoka = $("#ma").children(".korttiSisalto").children(".valittuAteria");
			valittuRuoka.html("");
			// kloonataan aterian nimi ja tulostetaan se haluttuun kohtaan
			$(ruokaNimi).clone().appendTo(valittuRuoka).css("font-size","24px");
			
			// valitaan mihin tulostetaan hinta ja tyhjennetään sen olemassa oleva teksti
			valittuHinta = $("#ma").children(".korttiSisalto").children(".hinta");
			valittuHinta.html("");
			// kloonataan aterian hinta ja tulostetaan se haluttuun kohtaan
			$(ruokaHinta).clone().appendTo(valittuHinta).css("font-size","22px");
			
		} else if(tiValittu == true){
			
			valittuRuoka = $("#ti").children(".korttiSisalto").children(".valittuAteria");
			valittuRuoka.html("");		
			$(ruokaNimi).clone().appendTo(valittuRuoka).css("font-size","24px");
			
			valittuHinta = $("#ti").children(".korttiSisalto").children(".hinta");
			valittuHinta.html("");	
			$(ruokaHinta).clone().appendTo(valittuHinta).css("font-size","22px");	
			
		} else if(keValittu == true){
			
			valittuRuoka = $("#ke").children(".korttiSisalto").children(".valittuAteria");
			valittuRuoka.html("");		
			$(ruokaNimi).clone().appendTo(valittuRuoka).css("font-size","24px");
			
			valittuHinta = $("#ke").children(".korttiSisalto").children(".hinta");
			valittuHinta.html("");	
			$(ruokaHinta).clone().appendTo(valittuHinta).css("font-size","22px");		
			
		} else if(toValittu == true){
			
			valittuRuoka = $("#to").children(".korttiSisalto").children(".valittuAteria");
			valittuRuoka.html("");		
			$(ruokaNimi).clone().appendTo(valittuRuoka).css("font-size","24px");
			
			valittuHinta = $("#to").children(".korttiSisalto").children(".hinta");
			valittuHinta.html("");	
			$(ruokaHinta).clone().appendTo(valittuHinta).css("font-size","22px");
			
		} else if(peValittu == true){
			
			valittuRuoka = $("#pe").children(".korttiSisalto").children(".valittuAteria");
			valittuRuoka.html("");		
			$(ruokaNimi).clone().appendTo(valittuRuoka).css("font-size","24px");
			
			valittuHinta = $("#pe").children(".korttiSisalto").children(".hinta");
			valittuHinta.html("");	
			$(ruokaHinta).clone().appendTo(valittuHinta).css("font-size","22px");
			
		}
		
		// siirrytään takaisin etusivulle
		$("#ateriaValikko").css("display", "none");
		$("#loppuSivu").css("display", "none"); 
		$("#etuSivu").css("display", "block");
	});
	
	
// TILAUS
	$("#tilausPainike").click(function(){
		
		event.preventDefault(); //estää formin lähetyksen
		event.stopPropagation(); //estää tapahtuman bubblingin parenteille
		
		// vareille arvoksi tilaustietokenttien tiedot
		var eNimi = $("#eNimi").val();
		var sNimi = $("#sNimi").val();
		var puh = $("#puh").val();
		var katu = $("#katu").val();
		
		var yhteisHinta = $("#yhteisHinta");
		
		if(eNimi != "" && sNimi != "" && puh != "" && katu != ""){
			// varille arvoksi lopetussivun table body
			var tulostus = $("#tulostus");
			
			// kokonimen määritys ja tulostus
			var kokoNimi = tulostus.children().eq(0).children().eq(1);
			$(kokoNimi).html(eNimi + " " + sNimi);
			
			// puhelinnumeron määritys ja tulostus
			var puhNumero = tulostus.children().eq(1).children().eq(1);
			$(puhNumero).html(puh);
			
			// osoitteen määritys ja tulostus
			var tilausOsoite = tulostus.children().eq(2).children().eq(1);
			$(tilausOsoite).html(katu);
			
			// tilauksen yhteishinnan tulostus
			var kokoHinta = tulostus.children().eq(3).children().eq(1);
			$(kokoHinta).html(yhteisHinta);
			
			// avataan lopetussivu
			$("#ateriaValikko").css("display", "none");
			$("#etuSivu").css("display", "none");
			$("#loppuSivu").css("display", "block");
		
		}else{
			console.log("jotain puuttuu");
		}
			
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
	// etusivunapin painallus
    $("#etusivuNappi").click(function(){ // näytetään etusivu
		$("#ateriaValikko").css("display", "none");
		$("#loppuSivu").css("display", "none"); 
		$("#etuSivu").css("display", "block");
	});
	
	
});