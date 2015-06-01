Game = {
  // Initialize and start our game
  	start: function() {
	    // Start crafty and set a background color so that we can see it's working
	    Crafty.init(stageWidth, stageHeight); // 
	    Crafty.background('grey');

	    /*~~~~~~~~~~~~ ENTITIES  ~~~~~~~~~~~~*/ 

		/*----------- Paper ----------------*/
		var paperEntity = Crafty.e("Paper");
		paperEntity.attach(paperEntity.titel);	
			
		/*------------ Headlines ----------------*/
		drawHeadlines(6);
		
		/*------------ Koppen ---------------*/ 

		function drawHeadlines(numberOfHeadlines){
			Crafty("Headline").each(function(){ 
				this.destroy();
			})
			for (var i = 0; i < numberOfHeadlines; i++){											// Deze loop checkt het aantal koppen in de array
				b = i;
				var kop = Crafty.e("Headline").text(telegraafTitels1[i]).attr({		
					x: 40, 
					y: 100 + (b * 100),
					w: 180,
					h: 40,
				})
			};
		}
	}
}