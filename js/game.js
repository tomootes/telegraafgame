function getRandomArbitary(min, max) {
	return Math.floor((Math.random() * titles.length) + 0);
}

function drawHeadlines(numberOfHeadlines){
	Crafty("Headline").each(function(){ 
		this.destroy();
	})
	console.log(titles.length)
	for (var i = 0; i < numberOfHeadlines; i++){			// Deze loop checkt het aantal koppen in de array
		var b = getRandomArbitary(0 , titles.length);
		console.log(b);
		console.log(titles[b]);
		var kop = Crafty.e("Headline").text(titles[b][0]).attr({		
			x: 20, 
			y: 20 + (i * 180),
		})
		.sensationFactor(titles[b][1], titles[b][2])
	};
}

Game = {

  // Initialize and start our game
  	start: function() {
	    // Start crafty and set a background color so that we can see it's working
	    Crafty.init(stageWidth, stageHeight); // 
	    Crafty.background('grey');

	    /*~~~~~~~~~~~~ ENTITIES  ~~~~~~~~~~~~*/ 

	    var achtergrondEditie = Crafty.e("EditionBackground");
	    var invloedHumeur = Crafty.e("InfluenceOnMood");
	   	var sensatie = Crafty.e("Sensation");
	    
	    var achtergrondManagement = Crafty.e("EditionBackgroundManagement");
	    var moodImage = Crafty.e("MoodImage");
	    var humeur = Crafty.e("Moodvalue");
	    var oplage = Crafty.e("Oplage");
	    var profit = Crafty.e("Winst");

	    var submitbutton = Crafty.e("Submitbutton");

		/*----------- Paper ----------------*/
		var paperEntity = Crafty.e("Paper");
		paperEntity.attach(paperEntity.titel);	
			
		/*------------ Drawing the headlines ----------------*/
		drawHeadlines(4);
		
		/*------------ Creating the buttons ----------------*/

		/*------------ Koppen ---------------*/ 
		
	}
}

