//Javascript By Nurhaman you can email me nurhaman@wilayahilmu.com:
//JS by Nurhaman - nurhaman@wilayahilmu.com/nurhaman1@gmail.com:
//Date created 1/22/2016 - www.nurhaman.com - www.wilayahilmu.com:
//© Copyright 2015- 2016 Nurhaman.com. All rights reserved.:
 
 // Perintah scroll halaman:
 $(document).ready(function(){
	$("#about").click(function(){
	  $('.hal2').goTo();
	}); 
	$("#blog").click(function(){
	  $('.hal3').goTo();
	}); 
	$("#porto").click(function(){
	  $('.hal4').goTo();
	}); 
	$("#serv").click(function(){
	  $('.hal5').goTo();
	}); 
	$(".arrow-up").click(function(){
	  $('.hal1').goTo();
	}); 
  
	var curent_scroll = 0;
	$(window).scroll(function(){

	if ($(window).width() > 800) {
		if(document.body.scrollTop > 528){
			$("#header-top").removeClass("navbar-bg-off"); 
			
		}else{
			$("#header-top").addClass("navbar-bg-off");
		}	
	}
	});	
});  
        
