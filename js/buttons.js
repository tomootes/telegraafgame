$( document ).ready(function() {
    console.log( "ready!" );
    $('#myDiv').click(function(){
    	$('.modal' ).hide();
    	$('#modal-blanket' ).hide();
	});
    $('#myDiv').click(function(){
    	$('.modal' ).hide();
    	$('#modal-blanket' ).hide();
	});

	if(mood < -80){
		console.log("yes")
		$('.modal').html('<h1>BUMMER!</h1><p>Jouw winstzucht heeft je lezers te pessimistisch gemaakt!</p><div class="button modal-button" id="restart" >Ok, begrepen</div>');
		$('#modal-blanket').show();
		$('.modal').show();
	}
	if(profit > 99999 ){
		console.log("yes")
		$('.modal').html('<h1>GEFELICITEERD!</h1><p>Het is je gelukt genoeg winst te maken zonder je lezers al te pessimistisch te maken.</p><div class="button modal-button" id="restart" >Ok, begrepen</div>');
		$('#modal-blanket').show();
		$('.modal').show();
	}
	$('#restart').click(function(){
    	Crafty.init();
	});
});
