
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
		// http://localhost:8000/api/
		url: "/api/data/data.json", // data json
		success: function(result){
			
			tulosta(result);
		},
		error: function(xhr){
			console.log("Virhe!");
		}
	});
	
	// taustavärien ja taustakuvien asetukset
	
	// tehdään booleja joiden avulla katsotaan taustan väri
	var etuSivuTausta = true;
	var ateriaSivuTausta = false;
	var lopetusSivuTausta = false;
	// määritetään halutut elementit sivulta
	var tausta = $("#sisalto");
	var taustakuva = $("#taustaKuva");
	// käytetään booleja määrittämään vielä ohjeboksin sisältö
	var ohjeOtsikko = $("#infoOtsikko");
	var ohjeTeksti = $("#infoText");
	
	// käydään vielä taustavaihto funktio läpi käynnistäessä
	taustavaihto();
	
	function taustavaihto(){
		
		// komento, jos taustojen väriä halutaan muuttaa riippuen aktiivisesta sivusta
		// $(tausta).css("background-color","#4d4d4d");
		
		// jos etusivu on aktiivisena
		if(etuSivuTausta == true){
			// vaihdetaan sivun reunoilla näkyvä kuva
			$(taustakuva).css("backgroundImage","url('../kuvat/sivuTausta1.png')")
			// vaihdetaan ohjeboksin otsikko ja sisältöteksti
			$(ohjeOtsikko).html("Ohjeet Etusivulle");
			$(ohjeOtsikko).css("background-color","#99e600");
			$(ohjeTeksti).html(" - Ainakin yksi ateria pitää olla valittuna, sekä myös nimi, puhelinnumero ja osoite tulee olla annettuna, että tilaus menee läpi <br> - 'Valitse Ateria' -painike avaa ateriavalikon valitulle viikonpäivälle <br> - Valitun aterian voi vaihtaa painamalla 'Vaihda Ateriaa' -painiketta");
			// vaihdetaan headerin taustaväriä
			$("#headeri").css("background-color","#ccff99")
		}// jos aterianvalintasivu on aktiivisena
		else if (ateriaSivuTausta == true){
			$(taustakuva).css("backgroundImage","url('../kuvat/sivuTausta2.png')")
			
			$(ohjeOtsikko).html("Ohjeet Ateriavalikon käyttöön");
			$(ohjeOtsikko).css("background-color","#ff3377");
			$(ohjeTeksti).html("- Alla olevia kategoriapalkkeja painamalla voit avata sen kategorian ateriat <br> - Aterioiden alla oleva 'Lisää Ateria' -painike lisää sen sille viikonpäivälle minkä olet valinnut");
			
			$("#headeri").css("background-color","#ff6699")
		}// jos tilausvahvistussivu on aktiivisena
		else if (lopetusSivuTausta == true){
			$(taustakuva).css("backgroundImage","url('../kuvat/sivuTausta3.png')")
			// piilotetaan vielä headeri
			$("#headeri").css("display","none");
		}
	}
	
	function tulosta(result){
		
		var ateriaMenu = result.ruokalista;
		
		// käydään läpi kaikki ruokalistan elementit
		ateriaMenu.forEach(function(result){
			
			// filtterialueen tuloste
			$("#filtteriAteria").append( "<li class='collection-item ateria'>" + 
			"<div class='col s12 ateriaKuva'>" + 
			"<img class='ateriaKuva1' src='kuvat/ateria.jpg'>" + "</div>" +
			"<div class='col s12 m7 ateriaInfo'>" +
			"<span class='ateriaNimi'>" + result.nimi + "</span>" +
			"<p class='ateriaTeksti'>" + result.ainekset + "</p>" + "</div>" +
			"<div class='col s12 m5 erikoisRuoka'> <p class='erikoisRv'>" + result.ruokavalio + "</p> </div>" +
			"<div class='col s12 m5 ateriaPohja'>" + 
			"<p class='ateriaHinta'>" + "<span class='printattavaHinta'>" + result.hinta + "</span>" + " €" + "</p>" +
			"<a class='waves-effect waves-light btn-large green ateriaValitseNappi'>lisää ateria</a>" +
			"</div>" + "</li>" + "<br><br>");
		

			// liharuokakategorian ateriat
			if(result.ruokalaji == "liharuoka"){
				$("#lihaAteriat").append( "<li class='collection-item ateria'>" + 
				"<div class='col s12 ateriaKuva'>" + 
				"<img class='ateriaKuva1' src='kuvat/ateria.jpg'>" + "</div>" +
				"<div class='col s12 m7 ateriaInfo'>" +
				"<span class='ateriaNimi'>" + result.nimi + "</span>" +
				"<p class='ateriaTeksti'>" + result.ainekset + "</p>" + "</div>" +
				"<div class='col s12 m5 erikoisRuoka'> <p class='erikoisRv'>" + result.ruokavalio + "</p> </div>" +
				"<div class='col s12 m5 ateriaPohja'>" + 
				"<p class='ateriaHinta'>" + "<span class='printattavaHinta'>" + result.hinta + "</span>" + " €" + "</p>" +
				"<a class='waves-effect waves-light btn-large green ateriaValitseNappi'>lisää ateria</a>" +
				"</div>" + "</li>"
				);
			 // kalaruokakategorian ateriat
			 }else if(result.ruokalaji == "kalaruoka"){
				$("#kalaAteriat").append( "<li class='collection-item ateria'>" + 
				"<div class='col s12 ateriaKuva'>" + 
				"<img class='ateriaKuva1' src='kuvat/ateria.jpg'>" + "</div>" +
				"<div class='col s12 m7 ateriaInfo'>" +
				"<span class='ateriaNimi'>" + result.nimi + "</span>" +
				"<p class='ateriaTeksti'>" + result.ainekset + "</p>" + "</div>" +
				"<div class='col s12 m5 erikoisRuoka'> <p class='erikoisRv'>" + result.ruokavalio + "</p> </div>" +
				"<div class='col s12 m5 ateriaPohja'>" + 
				"<p class='ateriaHinta'>" + "<span class='printattavaHinta'>" + result.hinta + "</span>" + " €" + "</p>" +
				"<a class='waves-effect waves-light btn-large green ateriaValitseNappi'>lisää ateria</a>" +
				"</div>" + "</li>"
				);
			 // kanaruokakategorian ateriat
			 }else if(result.ruokalaji == "kanaruoka"){
				$("#kanaAteriat").append( "<li class='collection-item ateria'>" + 
				"<div class='col s12 ateriaKuva'>" + 
				"<img class='ateriaKuva1' src='kuvat/ateria.jpg'>" + "</div>" +
				"<div class='col s12 m7 ateriaInfo'>" +
				"<span class='ateriaNimi'>" + result.nimi + "</span>" +
				"<p class='ateriaTeksti'>" + result.ainekset + "</p>" + "</div>" +
				"<div class='col s12 m5 erikoisRuoka'> <p class='erikoisRv'>" + result.ruokavalio + "</p> </div>" +
				"<div class='col s12 m5 ateriaPohja'>" + 
				"<p class='ateriaHinta'>" + "<span class='printattavaHinta'>" + result.hinta + "</span>" + " €" + "</p>" +
				"<a class='waves-effect waves-light btn-large green ateriaValitseNappi'>lisää ateria</a>" +
				"</div>" + "</li>"
				);
			// kasvisruokakategorian ateriat	
			}else if(result.ruokalaji == "kasvisruoka"){
				$("#kasvisAteriat").append( "<li class='collection-item ateria'>" + 
				"<div class='col s12 ateriaKuva'>" + 
				"<img class='ateriaKuva1' src='kuvat/ateria.jpg'>" + 
				"</div>" +
				"<div class='col s12 m7 ateriaInfo'>" +
				"<span class='ateriaNimi'>" + result.nimi + "</span>" +
				"<p class='ateriaTeksti'>" + result.ainekset + "</p>" + 
				"</div>" +
				"<div class='col s12 m5 erikoisRuoka'> <p class='erikoisRv'>" + result.ruokavalio + 
				"</p> </div>" +
				"<div class='col s12 m5 ateriaPohja'>" + 
				"<p class='ateriaHinta'>" + "<span class='printattavaHinta'>" + result.hinta + "</span>" + " €" + "</p>" +
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
		// hypätään sivun ylälaitaan
		$(window).scrollTop(0);
		// määritetään mikä sivu on aktiivisena
		etuSivuTausta = true;
		ateriaSivuTausta = false;
		lopetusSivuTausta = false;
		// taustavaihto funktio
		taustavaihto();
		
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
		// hypätään sivun ylälaitaan
		$(window).scrollTop(0);
		// määritetään, että aterianvalintasivu on aktiivisena
		etuSivuTausta = false;
		ateriaSivuTausta = true;
		lopetusSivuTausta = false;
		// taustavaihto funktio
		taustavaihto();
		
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
		
		$(window).scrollTop(0);
		etuSivuTausta = false;
		ateriaSivuTausta = true;
		lopetusSivuTausta = false;
		taustavaihto();
		
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
		
		$(window).scrollTop(0);
		etuSivuTausta = false;
		ateriaSivuTausta = true;
		lopetusSivuTausta = false;
		taustavaihto();
		
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
		
		$(window).scrollTop(0);
		etuSivuTausta = false;
		ateriaSivuTausta = true;
		lopetusSivuTausta = false;
		taustavaihto();
		
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
		
		$(window).scrollTop(0);
		etuSivuTausta = false;
		ateriaSivuTausta = true;
		lopetusSivuTausta = false;
		taustavaihto();
		
	});
	
// ATERIAN VALINTA

	var maNimi = "";
	var tiNimi = "";
	var keNimi = "";
	var toNimi = "";
	var peNimi = "";

	// alustetaan varit joihin tulee aterioiden hinnat, mistä katsotaan sitten aterioiden yhteishinta
	var maHinta = 0;
	var tiHinta = 0;
	var keHinta = 0;
	var toHinta = 0;
	var peHinta = 0;
	
	// annetaan totuusarvo jonka avulla katsotaan onko ainakin yksi ateria valittu
	var ateriaOnValittu = false;

	$(document).on("click", ".ateriaValitseNappi",function(){
		// haetaan parentin parentti, joka on (luokkanimi) ateria
		var tieto = $(this).parent().parent();
		// haetaan halutun aterian nimi
		var ruokaNimi = tieto.children(".ateriaInfo").children(".ateriaNimi").get(0);
		// haetaan halutun aterian hinta
		var ruokaHinta = $(this).parent();
		ruokaHinta = ruokaHinta.children(".ateriaHinta").children(".printattavaHinta").get(0);
		
		// alustetaan yhteishinta
		var yhteisHinta = 0;
		// alustetaan aterian nimen teksti
		var ateriaNimiTeksti = ""; 
		
		// katsotaan mikä viikonpäivä on valittu
		if (maValittu == true){
			
			// valitaan mihin tulostetaan nimi ja tyhjennetään sen olemassa oleva teksti
			valittuRuoka = $("#ma").children(".korttiSisalto").children(".valittuAteria");
			// tyhjennetään alkuperäinen teksti
			valittuRuoka.html("");		
			// annetaan arvoksi aterian nimi muunnettuna tekstiksi
			ateriaNimiTeksti = $(ruokaNimi).text();
			// katsotaan onko aterian nimen pituus yli 30 merkkiä
			if(ateriaNimiTeksti.length > 30){ // jos on yli 30 merkkiä
				// pienennetään tulostuksen fonttikokoa
				$(ruokaNimi).clone().appendTo(valittuRuoka).css("font-size","15px");
			// katsotaan onko ruudun leveys 670px - 600px välillä
			}else if(ateriaNimiTeksti.length > 20 && $(document).width() < 670 && $(document).width() > 600){
				// pienennetään tulostuksen fonttikokoa
				$(ruokaNimi).clone().appendTo(valittuRuoka).css("font-size","15px");
			}else{ // jos teksti on alle 30 merkkiä
				// kloonataan aterian nimi ja tulostetaan se haluttuun kohtaan normaalisti
				$(ruokaNimi).clone().appendTo(valittuRuoka).css("font-size","24px");
			}
			
			// valitaan mihin tulostetaan hinta ja tyhjennetään sen olemassa oleva teksti
			valittuHinta = $("#ma").children(".korttiSisalto").children(".hinta");
			valittuHinta.html("");
			// kloonataan aterian hinta ja tulostetaan se haluttuun kohtaan
			$(ruokaHinta).clone().appendTo(valittuHinta).css("font-size","22px");
			// lisätään loppuun vielä euron merkki
			$(valittuHinta).append(" €");
			
			// annetaan varille arvoksi valitun aterian nimi
			maNimi = $(ruokaNimi);
			
			//annetaan vareille arvoksi valitun aterian hinta tekstinä
			maHinta = $(ruokaHinta).text();
			// parsitaan parseFloatilla tekstistä numeroita
			maHinta = parseFloat(maHinta);
			// vaihdetaan ateriakortin väriä materializen classeilla
			$("#korttiMa").removeClass("pink lighten-1").addClass("light-green accent-2");
			// muutetaan arvo todeksi
			ateriaOnValittu = true;
			// napin teksti vaihtuu
			$("#maNappi").html("Vaihda ateriaa").css("font-size","14px");
			// napin väri vaihtuu
			$("#maNappi").removeClass("cyan").addClass("orange darken-2");
			
			
		} else if(tiValittu == true){
			
			valittuRuoka = $("#ti").children(".korttiSisalto").children(".valittuAteria");
			valittuRuoka.html("");		
			ateriaNimiTeksti = $(ruokaNimi).text();
			if(ateriaNimiTeksti.length > 30){
				$(ruokaNimi).clone().appendTo(valittuRuoka).css("font-size","15px");
			}else if(ateriaNimiTeksti.length > 20 && $(document).width() < 670 && $(document).width() > 600){
				$(ruokaNimi).clone().appendTo(valittuRuoka).css("font-size","15px");
			}else{
				$(ruokaNimi).clone().appendTo(valittuRuoka).css("font-size","24px");
			}
			
			valittuHinta = $("#ti").children(".korttiSisalto").children(".hinta");
			valittuHinta.html("");	
			$(ruokaHinta).clone().appendTo(valittuHinta).css("font-size","22px");
			$(valittuHinta).append(" €");
			
			tiNimi = $(ruokaNimi);
			tiHinta = $(ruokaHinta).text();
			tiHinta = parseFloat(tiHinta);
			$("#korttiTi").removeClass("pink lighten-1").addClass("light-green accent-2");
			ateriaOnValittu = true;
			$("#tiNappi").html("Vaihda ateriaa").css("font-size","14px");
			$("#tiNappi").removeClass("cyan").addClass("orange darken-2");
			
		} else if(keValittu == true){
			
			valittuRuoka = $("#ke").children(".korttiSisalto").children(".valittuAteria");
			valittuRuoka.html("");		
			ateriaNimiTeksti = $(ruokaNimi).text();
			if(ateriaNimiTeksti.length > 30){
				$(ruokaNimi).clone().appendTo(valittuRuoka).css("font-size","15px");
			}else if(ateriaNimiTeksti.length > 20 && $(document).width() < 670 && $(document).width() > 600){
				$(ruokaNimi).clone().appendTo(valittuRuoka).css("font-size","15px");
			}else{
				$(ruokaNimi).clone().appendTo(valittuRuoka).css("font-size","24px");
			}
			
			valittuHinta = $("#ke").children(".korttiSisalto").children(".hinta");
			valittuHinta.html("");	
			$(ruokaHinta).clone().appendTo(valittuHinta).css("font-size","22px");	
			$(valittuHinta).append(" €");
			
			keNimi = $(ruokaNimi);
			keHinta = $(ruokaHinta).text();
			keHinta = parseFloat(keHinta);
			$("#korttiKe").removeClass("pink lighten-1").addClass("light-green accent-2");
			ateriaOnValittu = true;
			$("#keNappi").html("Vaihda ateriaa").css("font-size","14px");
			$("#keNappi").removeClass("cyan").addClass("orange darken-2");
			
		} else if(toValittu == true){
			
			valittuRuoka = $("#to").children(".korttiSisalto").children(".valittuAteria");
			valittuRuoka.html("");		
			ateriaNimiTeksti = $(ruokaNimi).text();
			if(ateriaNimiTeksti.length > 30){
				$(ruokaNimi).clone().appendTo(valittuRuoka).css("font-size","15px");
			}else if(ateriaNimiTeksti.length > 20 && $(document).width() < 670 && $(document).width() > 600){
				$(ruokaNimi).clone().appendTo(valittuRuoka).css("font-size","15px");
			}else{
				$(ruokaNimi).clone().appendTo(valittuRuoka).css("font-size","24px");
			}
			
			valittuHinta = $("#to").children(".korttiSisalto").children(".hinta");
			valittuHinta.html("");	
			$(ruokaHinta).clone().appendTo(valittuHinta).css("font-size","22px");
			$(valittuHinta).append(" €");
			
			toNimi = $(ruokaNimi);
			toHinta = $(ruokaHinta).text();
			toHinta = parseFloat(toHinta);
			$("#korttiTo").removeClass("pink lighten-1").addClass("light-green accent-2");
			ateriaOnValittu = true;
			$("#toNappi").html("Vaihda ateriaa").css("font-size","14px");
			$("#toNappi").removeClass("cyan").addClass("orange darken-2");
			
		} else if(peValittu == true){
			
			valittuRuoka = $("#pe").children(".korttiSisalto").children(".valittuAteria");
			valittuRuoka.html("");		
			ateriaNimiTeksti = $(ruokaNimi).text();
			if(ateriaNimiTeksti.length > 30){
				$(ruokaNimi).clone().appendTo(valittuRuoka).css("font-size","15px");
			}else if(ateriaNimiTeksti.length > 20 && $(document).width() < 670 && $(document).width() > 600){
				$(ruokaNimi).clone().appendTo(valittuRuoka).css("font-size","15px");
			}else{
				$(ruokaNimi).clone().appendTo(valittuRuoka).css("font-size","24px");
			}
			
			valittuHinta = $("#pe").children(".korttiSisalto").children(".hinta");
			valittuHinta.html("");	
			$(ruokaHinta).clone().appendTo(valittuHinta).css("font-size","22px");
			$(valittuHinta).append(" €");
			
			peNimi = $(ruokaNimi);
			peHinta = $(ruokaHinta).text();
			peHinta = parseFloat(peHinta);
			$("#korttiPe").removeClass("pink lighten-1").addClass("light-green accent-2");
			ateriaOnValittu = true;
			$("#peNappi").html("Vaihda ateriaa").css("font-size","14px");
			$("#peNappi").removeClass("cyan").addClass("orange darken-2");
			
		}
		// lasketaan viikonpäivien ateriat yhteen tehden tekstistä numeroita parseFloatin avulla
		yhteisHinta = maHinta + tiHinta + keHinta + toHinta + peHinta;
		
		yhteisHinta = parseFloat(yhteisHinta).toFixed(2);
		// tulostetaan kohdalleen
		$("#yhteisHinta").html(yhteisHinta + " €");
		
		// siirrytään takaisin etusivulle
		$("#ateriaValikko").css("display", "none");
		$("#loppuSivu").css("display", "none"); 
		$("#etuSivu").css("display", "block");
		
		// hypätään vielä lopuksi sivun ylälaitaan takaisin
		$(window).scrollTop(0);
		etuSivuTausta = true;
		ateriaSivuTausta = false;
		lopetusSivuTausta = false;
		// taustanvaihto funktio
		taustavaihto();
		
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
		
		if(ateriaOnValittu == false){ // jos yhtäkään ateriaa ei ole valittu
			// virheviesti
			alert("Valitse ateria")
			
			} else if(eNimi == "" && sNimi == "" && puh == "" && katu == ""){ // jos yksikin tekstikenttä on tyhjä
			// virheviesti
			alert("Täytä kaikki tietokentät");
			}
			else{ // jos mitään ei ole pielessä
			
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
			
			// tilauksen aterioiden tietojen tulostus
			
			// ma
			// aterian nimi
			var nimiMa = tulostus.children().eq(6).children().eq(2);
			$(nimiMa).html($(maNimi).css("font-size","15px"));
			// aterian hinta
			var hintaMa = tulostus.children().eq(6).children().eq(3);
			$(hintaMa).html(maHinta.toFixed(2) + " €");
			
			// ti
			var nimiTi = tulostus.children().eq(7).children().eq(2);
			$(nimiTi).html($(tiNimi).css("font-size","15px"));
			var hintaTi = tulostus.children().eq(7).children().eq(3);
			$(hintaTi).html(tiHinta.toFixed(2) + " €");
			// ke
			var nimiKe = tulostus.children().eq(8).children().eq(2);
			$(nimiKe).html($(keNimi).css("font-size","15px"));
			var hintaKe = tulostus.children().eq(8).children().eq(3);
			$(hintaKe).html(keHinta.toFixed(2) + " €");
			// to
			var nimiTo = tulostus.children().eq(9).children().eq(2);
			$(nimiTo).html($(toNimi).css("font-size","15px"));
			var hintaTo = tulostus.children().eq(9).children().eq(3);
			$(hintaTo).html(toHinta.toFixed(2) + " €");
			// pe
			var nimiPe = tulostus.children().eq(10).children().eq(2);
			$(nimiPe).html($(peNimi).css("font-size","15px"));
			var hintaPe = tulostus.children().eq(10).children().eq(3);
			$(hintaPe).html(peHinta.toFixed(2) + " €");
			
			// avataan lopetussivu
			$("#ateriaValikko").css("display", "none");
			$("#etuSivu").css("display", "none");
			$("#loppuSivu").css("display", "block");
			
			// hypätään sivun ylälaitaan
			$(window).scrollTop(0);
			
			etuSivuTausta = false;
			ateriaSivuTausta = false;
			lopetusSivuTausta = true;
			// taustanvaihto funktio
			taustavaihto();
			
		}
			
	});

//************************************************************************************
//TESTAUS

	// näytä kaikki napin painallus
	$("#kaikkiNappi").click(function(){ // näytetään kaikki sivut
		$("#ateriaValikko").css("display", "block");
		$("#etuSivu").css("display", "block");
		$("#loppuSivu").css("display", "block");
		taustavaihto();
	});
	
	// ateriavalikkonapin painallus
	$("#ateriaNappi").click(function(){ // näytetään ateriavalikkosivu
		$("#ateriaValikko").css("display", "block");
		$("#etuSivu").css("display", "none");
		$("#loppuSivu").css("display", "none"); 
		taustavaihto();
	});
	// loppuSIvunapin painallus
	$("#loppuNappi").click(function(){ // näytetään loppuSivu
		$("#ateriaValikko").css("display", "none");
		$("#etuSivu").css("display", "none");
		$("#loppuSivu").css("display", "block");
		taustavaihto();
	});
	// etusivunapin painallus
    $("#etusivuNappi").click(function(){ // näytetään etusivu
		$("#ateriaValikko").css("display", "none");
		$("#loppuSivu").css("display", "none"); 
		$("#etuSivu").css("display", "block");
		taustavaihto();
	});
	
	
});