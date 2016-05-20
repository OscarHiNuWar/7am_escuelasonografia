
$( document ).ready(function(){
  var mapa = new GMaps({
  div: '#mapa', 
  lat: 18.4620174,
  lng: -69.9555771,
        zoom: 18
        
});

mapa.addMarker({
  lat: 18.4620174,
  lng: -69.9555771,
  title: 'Escuela de Sonografia de Santo Domingo.',
  
});


$("#contenedor-body").mouseleave(function(){	
			
			$(".muestra-oferta").css("display","block");	
			
			});



$(".mas").click(function(){
			var div = $(this).attr("name");
			
			//alert(div);
			$(".content-light-art").addClass("mostrar");
			$(".content-cerrar").addClass("mostrar");
			$(".content-"+div+"-art").removeClass("ocultar");
			$("body").css("overflow","hidden");			


			
			$(".muestra-oferta").mouseleave(function(){	
			
			$(".content-light-art").addClass("mostrar");
			$(".content-"+div+"-art").addClass("ocultar");
			$(".content-content").css("width","583px");
            $(".content-content").css("padding-bottom", "2%");
			$(".content-cerrar").addClass("mostrar");
			$(".content-formulario-art").removeClass("ocultar");
			$("body").css("overflow","hidden");	
			
			});
			
		
		$(".content-cerrar").click(function(){
			//alert(div);
			//$(".content-light-art").addClass("mostrar");
			//$(this).removeClass("mostrar");
			$(".content-light-art").removeClass("mostrar");
			$(".content-"+div+"-art").addClass("ocultar");
			$("body").css("overflow","auto");			
		});
		
		});
		
			
		
		$(".muestra-oferta").mouseleave(function(){
			
			$(".content-light-art").addClass("mostrar");
			$(".content-content").css("width","583px");
            $(".content-content").css("padding-bottom", "2%");
			$(".content-cerrar").addClass("mostrar");
			$(".content-formulario-art").removeClass("ocultar");
			$("body").css("overflow","hidden");		
				
		
		
		$(".content-cerrar").click(function(){
			
			//alert(div);
			//$(".content-light-art").addClass("mostrar");
			//$(this).removeClass("mostrar");
			$(".content-light-art").removeClass("mostrar");
			$(".content-content").css("width","60%");
            $(".content-content").css("padding-bottom", "0%");
			$(".content-formulario-art").addClass("ocultar");
			$("body").css("overflow","auto");
			$(".muestra-oferta").css("display","none");		
			
				
			
				
		});
		
		});
		
		
		
		
		
});//Document Ready Fin
