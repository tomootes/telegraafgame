/*~~~~~~~~~~~ Classes ~~~~~~~~~~~~~~~~*/
		Crafty.sprite("images/angry_2.png", {angry_2:[0,0,70,70]});
		Crafty.sprite("images/angry_1.png", {angry_1:[0,0,70,70]});
		Crafty.sprite("images/happy_1.png", {happy_1:[0,0,70,70]});
		Crafty.sprite("images/happy_2.png", {happy_2:[0,0,70,70]});

		/* --------- KRANT Class ----- 800 115 ;*/
		Crafty.c("MoodImage", {
			init: function() {
				this.addComponent("2D, DOM, Image, Color");
				this.x = 980;
				this.y = 370;
				this.w = 40; // width
				this.h = 54; // height
				this.color("#FFF");
				if(mood > 25){
					console.log("mood: 1");
					this.addComponent("happy_2");
				} else if( mood <= 25 && mood >= 0){
					console.log("mood: 2");
					this.addComponent("happy_1");
				} else if( mood < 0 && mood >= -25){
					console.log("mood: 3");
					this.addComponent("angry_1");
				} else{
					console.log("mood: 4");
					this.addComponent("angry_2");
				}
			},
		});

		/* --------- KRANT Class ----- 800 115 ;*/
		Crafty.c("Paper", {
			init: function() {
				this.addComponent("2D, DOM, Color, Collision, Text");
				this.x = 300;
				this.y = 100;
				this.w = 400; // width
				this.h = 540; // height
				this.color("#FFF");
				this.text("Sleep hier 2 titels heen");
				this.bind("Click", function(e) {
					// do something when the mouse is clicked on an Entity
				});
				this.titel = Crafty.e("2D, DOM, Color, Text, Image").attr({
					x: 300,
					y: 100,
					w: 200,
					h: 60,
				}).image("images/telegraafHeader.png");
			},
		});

		Crafty.c("Submitbutton", {
			init: function() {
				this.addComponent("2D, DOM, Color, Text, Mouse");
				this.x = 400;
				this.y = 660;
				this.w = buttonWidth; // width
				this.h = buttonHeight; // height
				this.color("#FFF");
				this.bind('Click', function() {
					if( headlinesInPaper > 1){
						level = level + 1;
	    		 		drawHeadlines(4);
	    		 		oplage = oplage + (355 * sensation);
	    		 		console.log("Sensatie: " + sensation * 0.1)
	    		 		profit = 10 * ((oplage * 0.22) - 8000);
	    		 		sensation = 0;
	    		 		influenceOnMood = 0;
	    		 		headlinesInPaper = 0;
	    		 		Crafty.e("InfluenceOnMood").update;
	    		 		Crafty.e("Moodvalue").update;
	    		 		Crafty.e("Sensation").update;
						Crafty.e("Winst").update;
						Crafty.e("MoodImage").update;
						Crafty.e("Oplage").update;
						if( mood < -50){
							console.log("yes")
							$('.modal').html('<h1>BUMMER!</h1><p>Jouw winstzucht heeft je lezers te pessimistisch gemaakt!</p><a href="http://tomoot.es/seriousgames" class="button modal-button" id="restart" >Ok, begrepen</a>');
							$('#modal-blanket').show();
							$('.modal').show();
						}
						if( profit > 99999 ){
							console.log("yes")
							$('.modal').html('<h1>GEFELICITEERD!</h1><p>Het is je gelukt je winst-target te halen zonder je lezers al te pessimistisch te maken.</p><a href="http://tomoot.es/seriousgames" class="button modal-button" id="restart" >Ok, begrepen</a>');
							$('#modal-blanket').show();
							$('.modal').show();
						}
					}else{
						alert("Je hebt niet genoeg koppen gekozen");
					}
				});
				this.text('Publiceer');
				this.textFont({ size: '28px' });
			},
		});

		Crafty.c("EditionBackground", {
			init: function() {
				this.addComponent("2D, DOM, Color, Text");
				this.x = 720;
				this.y = 50;
				this.w = buttonWidth + 40; // width
				this.h = 235; // height
				this.color("rgba(255, 255, 255, 0.5)");
              	this.text("Informatie huidige editie:");
       			this.textFont({ size: '28px' });
			},
		});

		Crafty.c("InfluenceOnMood", {
			init: function() {
				this.addComponent("2D, DOM, Color, Text");
				this.x = 740;
				this.y = 100;
				this.w = buttonWidth; // width
				this.h = buttonHeight; // height
				this.color("white");
              	this.text("Invloed humeur: " + influenceOnMood);
       			this.textFont({ size: '28px' });
       			if(influenceOnMood == 0){
					console.log("influence == 0")
					this.color("white");
				} else if( influenceOnMood < 0){
					this.color(red);
				} else{
					this.color(green);
				}
			},
			update: function(emotionFactor){
				console.log("is being updated");
				this.text("Invloed op humeur: " + influenceOnMood);
			},
		});

		Crafty.c("Sensation", {
			init: function() {
				this.addComponent("2D, DOM, Color, Text");
				this.x = 740;
				this.y = 200;
				this.w = buttonWidth; // width
				this.h = buttonHeight; // height
				this.color("#FFF");
              	this.text("Sensatie-factor: " + sensation);
       			this.textFont({ size: '28px' });
       			if(sensation == 0){
					this.color("white");
				} else if( sensation < 0){
					this.color(red);
				} else{
					this.color(green);
				}
			},
			update: function(emotionFactor){
				
			},
		});

		Crafty.c("EditionBackgroundManagement", {
			init: function() {
				this.addComponent("2D, DOM, Color, Text");
				this.x = 720;
				this.y = 320;
				this.w = buttonWidth + 40; // width
				this.h = 335; // height
				this.color("rgba(255, 255, 255, 0.5)");
              	this.text("Mangement-informatie:");
       			this.textFont({ size: '28px' });
			},
		});

		Crafty.c("Moodvalue", {
			init: function() {
				this.addComponent("2D, DOM, Color, Text, Image");
				this.image = "images/happy_1.png";
				this.x = 740;
				this.y = 300 + buttonTop;
				this.w = buttonWidth; // width
				this.h = buttonHeight; // height
				this.color("#FFF");
              	this.text("Humeur lezer: "  + mood);
       			this.textFont({ size: '28px' });
       			if ( mood == 0){
       				this.color("white");
       			} else if(mood > 25){
					this.color("rgb(111, 240, 70)");
				} else if( mood <= 25 && mood >= 0){
					this.color(green);
				} else if( mood < 0 && mood >= -25){
					this.color(red);
				} else{
					this.color("rgb(255, 36, 36)");
				}
			},
			update: function(emotionFactor){
				this.text("Humeur lezer: " + mood);
			},
		});

		Crafty.c("Oplage", {
			init: function() {
				this.addComponent("2D, DOM, Color, Text");
				this.x = 740; 
				this.y = 400 + buttonTop; 
				this.w = buttonWidth; // width
				this.h = buttonHeight; // height
				this.color("#FFF");
              	this.text("Bereik: " + Math.round(oplage));
       			this.textFont({ size: '28px' });
       			if( oplage < 55000){
					this.color(red);
				} else if( oplage == 55000 ){
					this.color("white");
				} else{
					this.color(green);
				}
			},
			update: function(sensation){
				this.text("Oplage: " + Math.round(oplage));
			},
		});

		Crafty.c("Winst", {
			init: function() {
				this.addComponent("2D, DOM, Color, Text");
				this.x = 740;
				this.y = 500 + buttonTop;
				this.w = buttonWidth; // width
				this.h = 80; // height
              	this.text("Winst: &euro;" + Math.round(profit));
       			this.textFont({ size: '28px' });
       			if( profit == 46500 ){
					this.color("white");
				} else if( profit < 46500 ){
					this.color(red);
				} else{
					this.color(green);
				}
			},
			update: function(emotionFactor){
				this.text("Winst: &euro;" + Math.round(profit));
			},
		});

		
		/* --------- Krantenkop Class ----- */
		Crafty.c("Headline", {
			_emotionFactor: 0,
			_sensation: 0,
			_inPaper: false, 
			init: function() {
				var inPaper = false;
				this.addComponent("2D, DOM, Text, Collision, Draggable");
				this.x = 80;
				this.y = 40;
				this.w = 180;
				this.h = 150;
				this.css({
					fontSize: '28px'
				});
				this.collision()
				this.onHit("Paper", function() {
					if (inPaper == false) {
						Crafty.e("InfluenceOnMood").update();
						console.log(mood)
						console.log(inPaper)
						this.x = 125
						this.color 
						mood = mood + (this._emotionFactor * 2);
						sensation = sensation + this._sensation
						influenceOnMood = influenceOnMood + (this._emotionFactor * 2);
						console.log("sensation:" + sensation)
						inPaper = true
						headlinesInPaper = headlinesInPaper + 1;
						console.log("Aantal koppen in krant:" + headlinesInPaper)
						this.css({
							'box-shadow': 'none',
						});
						this.w = 200;
						Crafty.e("Sensation").update(influenceOnMood);
						Crafty.e("InfluenceOnMood").update;
					}
				},
				function(){
					this.css({
							'box-shadow': 'rgba(180, 180, 180, 0.388235) 9px 9px 0px'
					});
					headlinesInPaper = headlinesInPaper - 1;
					mood = mood - this._emotionFactor;
					sensation = sensation - this._sensation;
					influenceOnMood = influenceOnMood - (this._emotionFactor * 2);
					inPaper = false;
					this.w = 180;
					Crafty.e("Sensation").update;
					Crafty.e("InfluenceOnMood").update();
				});
			},
			sensationFactor: function(emotionFactor, sensationFactor){
				console.log("sensationFactor: " + sensationFactor);
				this._sensation = sensationFactor;
				this._emotionFactor = emotionFactor;
				console.log(this.sensation)
				console.log(this.emotionFactor)
			},
		}); 
		
		/* --------- Lezer CLASS ----- */
		Crafty.c("Lezer", {
			init: function() {
				this.addComponent("2D, Canvas, Color");
				this.x = 300;
				this.y = 100;
				this.w = 400; // width
				this.h = 540; // height
				this.color("#FFF");
			},
		}); 

		
