stageWidth = 1200;
stageHeight = 780;
buttonWidth = 220;
buttonHeight = 80;
buttonTop = 70;

var red = "rgb(255, 134, 134)";
var green = "rgb(179, 255, 155)";
var level = 0;
var mood = 0;
var influenceOnMood = 0;
var sensation = 0;
var oplage = 55000;
var profit = 46500;
var headlinesInPaper = 0;

/* Title, invloed op mood lezers, invloed op cijfers krant  */

var titles = [
	["Burger zucht onder crisis",-6,6],
	["Overschot bij overheid in eerste kwartaal",6,-2],
	["Weer reeks plofkraken",-8,7],
	["Meer marokkanen met VWO diploma",10,-5],
	["Verkrachter vrijgesproken door fout OM",-9,7],
	["Nederlandse economie duurzamer dan gedacht",8,-1],
	["Files met 40% toegenomen",-5,3],
	["Bejaarden structureel verwaarloosd",-6,5],
	["Handel tweedehands autos goed voor economie",4,0],
	["Verdeeldheid Europa weer gegroeid",-2,7],
	["Top-inkomens in de zorg exorbitant",-5,6],
	["Defensie ziet mogelijkheden samenwerking Duitsland",7,1],
	["Rijksoverheid kijkt niet naar effectiviteit beleid",-6,6],
	["Ziekenhuizen een stuk viezer dan gedacht",-7,6],
	["Werkloosheid groeit",-5,6],
	["Olifantje geboren in Artis",7,0],
	["Zeldame fossielen gevonden in Drenthe",7,-3],
	["ING diep in de rode cijfers",-6,7],
	["De Nederlandse bank neemt te weinig maatregelen",-6,-3],
	["Klimaat verandert sneller dan gedacht",-6,3],
	["Eerste zomerse dag!",5,0],
	["Ziekenhuisrobot kan 60% werk uit handen nemen",6,2],
	["Daling fijnstof randstad door electrische autos",6,3],
	["Diversiteit fauna in Nederland fors gedaald",-5,-1],
	["Aantal mensen met burnout fors gestegen",-6,4],
	["Kwaliteit basisscholen ver onder de maat",-8,5],
	["Nederlander eet niet gevarieerd",-5,3],
	["Aantal werkloze jongeren groeit",-8,7],
	["Traditionele media in grote problemen",10,10],
	["Huur blijft stijgen",-8,6],
	["Kleine banken in financieel zwaar weer",-8,6],
	["Jongere interesseert zich nauwelijks voor politiek",-8,6],
	["Verwachte opkomst verkiezingen laag",-4,4],
	["Openbare wegen slechter geworden",-4,3],
	["Openbare voorzieningen dorpen gesaneerd",-5,6],
	["Alcohol consumptie per hoofd weer gestegen",-6,5],
	["Aantal Nederlanders met obesitas gestegen",-7,3],
	["Nederlanders pakken vaker de fiets",5,3],
	["Aantal rokers dit jaar niet afgenomen",-5,1],
	["Minder verkeersdoden dan vorig jaar",5,1],
	["Meer schoolverlaters HBO",-4,3],
	["Veel nederlanders hebben finacien niet op orde",-6,5],
	["Maatregelen europese banken niet goed genoeg",-8,7],
	["Arbeids omstandigheden Nederland erg goed",5,-2],
	["Weer wolf gesignaleerd in Limburg",5,-2],
	["Nederlandse kust wordt steeds schoner",6,-4],
	["Nederlandse autos wordt steeds schoner",4,-3],
	["Nederland erg aantrekkelijk voor start-ups",6,-2],
	["Nederlander voelt zicht steeds veiliger",5,-5],
	["Hypotheek krijgen wordt steeds moeilijker",-5,4],
];
