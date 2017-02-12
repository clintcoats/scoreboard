/*
* @Author: satellite
* @Date:   2017-01-24 02:48:00
* @Last Modified by:   satellite
* @Last Modified time: 2017-02-08 23:19:38
*/

var a = 0;
var b = 0;
var e;
var totalgames;
var p1wincounter;
var p2wincounter;
var playerthatstartedwithserve = 0;
var nowserving = 0;

function p1add1() {
	++document.getElementById('p1currentscore').value;
	a = document.getElementById('p1currentscore').value;
	totalgames = document.getElementById('getnumberofgames').value;
	console.log('a = ' + a);
	console.log('b = ' + b);
	console.log('p1 game counter = ' + p1wincounter);
	console.log('p2 game counter = ' + p2wincounter);
	console.log('# of games value = ' + totalgames);
	servestatus();
	currentleader();
	e = document.getElementById('currentgamecount').value;
	console.log('e = ' + e);
	if ((a == 21) && (e == 1)) {
		document.getElementById('p1g1').value = a; 
		document.getElementById('p2g1').value = b;
		++p1wincounter;
		++document.getElementById('currentgamecount').value;
		document.getElementById('p1g1').style.backgroundColor = 'lime';
		document.getElementById('p2g1').style.backgroundColor = 'red';
		document.getElementById('p1currentscore').value = 0;
		document.getElementById('p2currentscore').value = 0;
		a = 0;
		b = 0;
		document.getElementById('p1currentscore').style.color = 'navy';
		document.getElementById('p2currentscore').style.color = 'navy';

			if (totalgames == 1) {
				var person1 = document.getElementById('getplayer1name').value;
				alert(person1 + '' + "IS THE SHIZZLE MY NIZZLE!!!");
				p1wincounter = 0;
				p2wincounter = 0;
				document.getElementById('currentgamecount').value = 1;
			}	
	} 

	if ((a == 21) && (e == 2)) {
		document.getElementById('p1g2').value = a; 
		document.getElementById('p2g2').value = b;
		++p1wincounter;
		++document.getElementById('currentgamecount').value;
		document.getElementById('p1g2').style.backgroundColor = 'lime';
		document.getElementById('p2g2').style.backgroundColor = 'red';
		document.getElementById('p1currentscore').value = 0;
		document.getElementById('p2currentscore').value = 0;
		a = 0;
		b = 0;
		document.getElementById('p1currentscore').style.color = 'navy';
		document.getElementById('p2currentscore').style.color = 'navy';
	} 

	if ((a == 21) && (e == 3)) {
		document.getElementById('p1g3').value = a; 
		document.getElementById('p2g3').value = b;
		++p1wincounter;
		++document.getElementById('currentgamecount').value;
		document.getElementById('p1g3').style.backgroundColor = 'lime';
		document.getElementById('p2g3').style.backgroundColor = 'red';
		document.getElementById('p1currentscore').value = 0;
		document.getElementById('p2currentscore').value = 0;
		a = 0;
		b = 0;
		document.getElementById('p1currentscore').style.color = 'navy';
		document.getElementById('p2currentscore').style.color = 'navy';
	} 

	if ((a == 21) && (e == 4)) {
		document.getElementById('p1g4').value = a; 
		document.getElementById('p2g4').value = b;
		++p1wincounter;
		++document.getElementById('currentgamecount').value;
		document.getElementById('p1g4').style.backgroundColor = 'lime';
		document.getElementById('p2g4').style.backgroundColor = 'red';
		document.getElementById('p1currentscore').value = 0;
		document.getElementById('p2currentscore').value = 0;
		a = 0;
		b = 0;
		document.getElementById('p1currentscore').style.color = 'navy';
		document.getElementById('p2currentscore').style.color = 'navy';
	} 

	if ((a == 21) && (e == 5)) {
		document.getElementById('p1g5').value = a; 
		document.getElementById('p2g5').value = b;
		++p1wincounter;
		++document.getElementById('currentgamecount').value;
		document.getElementById('p1g5').style.backgroundColor = 'lime';
		document.getElementById('p2g5').style.backgroundColor = 'red';
		document.getElementById('p1currentscore').value = 0;
		document.getElementById('p2currentscore').value = 0;
		a = 0;
		b = 0;
		document.getElementById('p1currentscore').style.color = 'navy';
		document.getElementById('p2currentscore').style.color = 'navy';
	} 

	if ((a == 21) && (e == 6)) {
		document.getElementById('p1g6').value = a; 
		document.getElementById('p2g6').value = b;
		++p1wincounter;
		++document.getElementById('currentgamecount').value;
		document.getElementById('p1g6').style.backgroundColor = 'lime';
		document.getElementById('p2g6').style.backgroundColor = 'red';
		document.getElementById('p1currentscore').value = 0;
		document.getElementById('p2currentscore').value = 0;
		a = 0;
		b = 0;
		document.getElementById('p1currentscore').style.color = 'navy';
		document.getElementById('p2currentscore').style.color = 'navy';
	} 

	if ((a == 21) && (e == 7)) {
		document.getElementById('p1g7').value = a; 
		document.getElementById('p2g7').value = b;
		++p1wincounter;
		++document.getElementById('currentgamecount').value;
		document.getElementById('p1g7').style.backgroundColor = 'lime';
		document.getElementById('p2g7').style.backgroundColor = 'red';
		document.getElementById('p1currentscore').value = 0;
		document.getElementById('p2currentscore').value = 0;
		a = 0;
		b = 0;
		document.getElementById('p1currentscore').style.color = 'navy';
		document.getElementById('p2currentscore').style.color = 'navy';
	} 
}

function p1minus1() {
	--document.getElementById('p1currentscore').value;
}

function p2add1() {
	++document.getElementById('p2currentscore').value;
	b = document.getElementById('p2currentscore').value;
	totalgames = document.getElementById('getnumberofgames').value;
	console.log('a = ' + a);
	console.log('b = ' + b);
	servestatus();
	currentleader();
	e = document.getElementById('currentgamecount').value;
	console.log('e = ' + e);
	if ((b == 21) && (e == 1)) {
		document.getElementById('p2g1').value = b; 
		document.getElementById('p1g1').value = a;
		++p2wincounter;
		++document.getElementById('currentgamecount').value;
		document.getElementById('p2g1').style.backgroundColor = 'lime';
		document.getElementById('p1g1').style.backgroundColor = 'red';
		document.getElementById('p1currentscore').value = 0;
		document.getElementById('p2currentscore').value = 0;
		a = 0;
		b = 0;
		document.getElementById('p1currentscore').style.color = 'navy';
		document.getElementById('p2currentscore').style.color = 'navy';

			if (totalgames == 1) {
				var person2 = document.getElementById('getplayer2name').value;
				alert(person2 + '' + "IS THE SHIZZLE MY NIZZLE!!!");
				p1wincounter = 0;
				p2wincounter = 0;
				document.getElementById('currentgamecount').value = 1;
			}	
	} 

	if ((b == 21) && (e == 2)) {
		document.getElementById('p2g2').value = b; 
		document.getElementById('p1g2').value = a;
		++p2wincounter;
		++document.getElementById('currentgamecount').value;
		document.getElementById('p2g2').style.backgroundColor = 'lime';
		document.getElementById('p1g2').style.backgroundColor = 'red';
		document.getElementById('p1currentscore').value = 0;
		document.getElementById('p2currentscore').value = 0;
		a = 0;
		b = 0;
		document.getElementById('p1currentscore').style.color = 'navy';
		document.getElementById('p2currentscore').style.color = 'navy';
	} 

	if ((b == 21) && (e == 3)) {
		document.getElementById('p2g3').value = b; 
		document.getElementById('p1g3').value = a;
		++p2wincounter;
		++document.getElementById('currentgamecount').value;
		document.getElementById('p2g3').style.backgroundColor = 'lime';
		document.getElementById('p1g3').style.backgroundColor = 'red';
		document.getElementById('p1currentscore').value = 0;
		document.getElementById('p2currentscore').value = 0;
		a = 0;
		b = 0;
		document.getElementById('p1currentscore').style.color = 'navy';
		document.getElementById('p2currentscore').style.color = 'navy';
	} 

	if ((b == 21) && (e == 4)) {
		document.getElementById('p2g4').value = b; 
		document.getElementById('p1g4').value = a;
		++p2wincounter;
		++document.getElementById('currentgamecount').value;
		document.getElementById('p2g4').style.backgroundColor = 'lime';
		document.getElementById('p1g4').style.backgroundColor = 'red';
		document.getElementById('p1currentscore').value = 0;
		document.getElementById('p2currentscore').value = 0;
		a = 0;
		b = 0;
		document.getElementById('p1currentscore').style.color = 'navy';
		document.getElementById('p2currentscore').style.color = 'navy';
	} 

	if ((b == 21) && (e == 5)) {
		document.getElementById('p2g5').value = b; 
		document.getElementById('p1g5').value = a;
		++p2wincounter;
		++document.getElementById('currentgamecount').value;
		document.getElementById('p2g5').style.backgroundColor = 'lime';
		document.getElementById('p1g5').style.backgroundColor = 'red';
		document.getElementById('p1currentscore').value = 0;
		document.getElementById('p2currentscore').value = 0;
		a = 0;
		b = 0;
		document.getElementById('p1currentscore').style.color = 'navy';
		document.getElementById('p2currentscore').style.color = 'navy';
	} 

	if ((b == 21) && (e == 6)) {
		document.getElementById('p2g6').value = b; 
		document.getElementById('p1g6').value = a;
		++p2wincounter;
		++document.getElementById('currentgamecount').value;
		document.getElementById('p2g6').style.backgroundColor = 'lime';
		document.getElementById('p1g6').style.backgroundColor = 'red';
		document.getElementById('p1currentscore').value = 0;
		document.getElementById('p2currentscore').value = 0;
		a = 0;
		b = 0;
		document.getElementById('p1currentscore').style.color = 'navy';
		document.getElementById('p2currentscore').style.color = 'navy';
	} 

	if ((b == 21) && (e == 7)) {
		document.getElementById('p2g7').value = b; 
		document.getElementById('p1g7').value = a;
		++p2wincounter;
		++document.getElementById('currentgamecount').value;
		document.getElementById('p2g7').style.backgroundColor = 'lime';
		document.getElementById('p1g7').style.backgroundColor = 'red';
		document.getElementById('p1currentscore').value = 0;
		document.getElementById('p2currentscore').value = 0;
		a = 0;
		b = 0;
		document.getElementById('p1currentscore').style.color = 'navy';
		document.getElementById('p2currentscore').style.color = 'navy';
	} 
}

function p2minus1() {
	--document.getElementById('p2currentscore').value;
}

function currentleader() {
	console.log('ruinning currentleader function');
	c = (a/10);
	d = (b/10);
	console.log('c' + c);
	console.log('d' + d);

	if ((c > d) || (d < c)){
		document.getElementById('p1currentscore').style.color = 'lime';
		document.getElementById('p2currentscore').style.color = 'red';
	}

	if ((c < d) || (d > c)) {
		document.getElementById('p1currentscore').style.color = 'red';
		document.getElementById('p2currentscore').style.color = 'lime';
	}

	if (c == d) {
		document.getElementById('p1currentscore').style.color = 'navy';
		document.getElementById('p2currentscore').style.color = 'navy';
	}

	// if ((c == 2.1) || 

}

function servestatus () {
	var p1scorenow;
	var p2scorenow;
	var totalscorenow;
	var startingserve;
	startingserve = document.getElementById('getfirsttoserve').value;
	p1scorenow = document.getElementById('p1currentscore').value;
	p2scorenow = document.getElementById('p2currentscore').value;
	totalscorenow = (p1scorenow + p2scorenow);
	totalscorenow = (totalscorenow % 5);
	p1scorenow = (p1scorenow / 10);
	p2scorenow = (p2scorenow / 10);
	console.log('totalscorenow = ' + totalscorenow);
	console.log('startingserve = ' + startingserve);
	console.log('nowserving = ' + nowserving);
	console.log('playerthatstartedwithserve = ' + playerthatstartedwithserve);

	if (((totalscorenow == 0) && (playerthatstartedwithserve == 0)) && ((p1scorenow > 0) || (p2scorenow > 0))){
		if (startingserve == 1) {
			document.getElementById('p1servestatus').innerHTML = '';
			document.getElementById('p2servestatus').innerHTML = "<img src='img/serve.png'>";
			document.getElementById('getfirsttoserve').value = 0;
			playerthatstartedwithserve = 1;
			nowserving = 2;
			return;
		}

		if (startingserve == 2) {
			document.getElementById('p2servestatus').innerHTML = '';
			document.getElementById('p1servestatus').innerHTML = "<img src='img/serve.png'>";
			document.getElementById('getfirsttoserve').value = 0;
			playerthatstartedwithserve = 2;
			nowserving = 1;
			return;
		}
	}
		
	if (((totalscorenow == 0) && playerthatstartedwithserve != 0) && ((p1scorenow > 0) || (p2scorenow > 0))) {
		if ((playerthatstartedwithserve != 0) && (nowserving == 2)) {
			document.getElementById('p2servestatus').innerHTML = '';
			document.getElementById('p1servestatus').innerHTML = "<img src='img/serve.png'>";
			nowserving = 1;
			return;
		}
		if ((playerthatstartedwithserve != 0) && (nowserving == 1)) {
			document.getElementById('p1servestatus').innerHTML = '';
			document.getElementById('p2servestatus').innerHTML = "<img src='img/serve.png'>";
			nowserving = 2;
			return;
		}
	}
}

function currentgamewinner() {

}

function currentsetwinner() {

}


function settingswindow() {

    // var player1 = prompt("Player 1 name", "Player 1");
    // var player2 = prompt("Player 2 name", "Player 2");
    // var totalpoints = prompt("Number of points to win 1 game?" , "11, 21");
    // var totalsets = prompt("Number of desired", "1, 3, 5, 7");
    // var startingserve = prompt("Which player will serve first?", "1 or 2");
    // console.log('player 1 = ' + player1);

    var player1 = document.getElementById('getplayer1name').value;
    var player2 = document.getElementById('getplayer2name').value;
    var totalpoints = document.getElementById('gethowmanypoints').value;
    var totalgames = document.getElementById('getnumberofgames').value;
    var startingserve = document.getElementById('getfirsttoserve').value;

    closeNav();
    
    if (player1 != null) {
        document.getElementById('p1name').value = player1;
        document.getElementById('p1matchname').value = player1;
    }
    
    if ((player1 == "Clint") || (player1 == "clint")) {
    	document.getElementById('p1currentscore').style.backgroundColor = 'black';
    	document.getElementById('p1currentscore').style.backgroundImage = "url('img/clint.jpg')";
    }
    if (((player1 == "Ang") || (player1 == "ang")) || ((player1 == "Angie") || (player1 == "angie"))) {
    	document.getElementById('p1currentscore').style.backgroundColor = 'black';
    	document.getElementById('p1currentscore').style.backgroundImage = "url('img/ang.jpg')";
    }

    if (((player1 == "Key") || (player1 == "key")) || ((player1 == "Keyianna") || (player1 == "keyianna"))) {
    	document.getElementById('p1currentscore').style.backgroundColor = 'black';
    	document.getElementById('p1currentscore').style.backgroundImage = "url('img/key.jpg')";
    }

    if (((player1 == "Siah") || (player1 == "siah")) || ((player1 == "Issiah") || (player1 == "issiah"))) {
    	document.getElementById('p1currentscore').style.backgroundColor = 'black';
    	document.getElementById('p1currentscore').style.backgroundImage = "url('img/siah.jpg')";
    }

    if (((player1 == "Cam") || (player1 == "cam")) || ((player1 == "Cameren") || (player1 == "cameren"))) {
    	document.getElementById('p1currentscore').style.backgroundColor = 'black';
    	document.getElementById('p1currentscore').style.backgroundImage = "url('img/cam.jpg')";
    }

    if (((player1 == "Eli") || (player1 == "eli")) || ((player1 == "Elijah") || (player1 == "elijah"))) {
    	document.getElementById('p1currentscore').style.backgroundColor = 'black';
    	document.getElementById('p1currentscore').style.backgroundImage = "url('img/eli.png')";
    }

    if (((player1 == "Sis") || (player1 == "sis")) || ((player1 == "Gabrielle") || (player1 == "gabrielle"))) {
    	document.getElementById('p1currentscore').style.backgroundColor = 'black';
    	document.getElementById('p1currentscore').style.backgroundImage = "url('img/sis1.jpg')";
    }

    if (player2 != null) {
        document.getElementById('p2name').value = player2;
        document.getElementById('p2matchname').value = player2;
    }

    if (((player2 == "Ang") || (player2 == "ang")) || ((player2 == "Angie") || (player2 == "angie"))) {
    	document.getElementById('p2currentscore').style.backgroundColor = 'black';
    	document.getElementById('p2currentscore').style.backgroundImage = "url('img/ang.jpg')";
    }
    if ((player2 == "Clint") || (player2 == "clint")) {
    	document.getElementById('p2currentscore').style.backgroundColor = 'black';
    	document.getElementById('p2currentscore').style.backgroundImage = "url('img/clint.jpg')";
    }

    if (((player2 == "Key") || (player2 == "key")) || ((player2 == "Keyianna") || (player2 == "keyianna"))) {
    	document.getElementById('p2currentscore').style.backgroundColor = 'black';
    	document.getElementById('p2currentscore').style.backgroundImage = "url('img/key.jpg')";
    }

    if (((player2 == "Siah") || (player2 == "siah")) || ((player2 == "Issiah") || (player2 == "issiah"))) {
    	document.getElementById('p2currentscore').style.backgroundColor = 'black';
    	document.getElementById('p2currentscore').style.backgroundImage = "url('img/siah.jpg')";
    }

    if (((player2 == "Cam") || (player2 == "cam")) || ((player2 == "Cameren") || (player2 == "cameren"))) {
    	document.getElementById('p2currentscore').style.backgroundColor = 'black';
    	document.getElementById('p2currentscore').style.backgroundImage = "url('img/cam.jpg')";
    }

    if (((player2 == "Eli") || (player2 == "eli")) || ((player2 == "Elijah") || (player2 == "elijah"))) {
    	document.getElementById('p2currentscore').style.backgroundColor = 'black';
    	document.getElementById('p2currentscore').style.backgroundImage = "url('img/eli.png')";
    }

    if (((player2 == "Sis") || (player2 == "sis")) || ((player2 == "Gabrielle") || (player2 == "gabrielle"))) {
    	document.getElementById('p2currentscore').style.backgroundColor = 'black';
    	document.getElementById('p2currentscore').style.backgroundImage = "url('img/sis1.jpg')";
    }

    if (totalgames != null) {
    	if (totalgames == 5) {
    		document.getElementById('game6').style.color = 'black';
    		document.getElementById('p1g6').style.color = 'black';
    		document.getElementById('p1g6').disabled = true;
    		document.getElementById('p1g6').style.backgroundColor = 'black';

    		document.getElementById('p2g6').style.color = 'black';
    		document.getElementById('p2g6').disabled = true;
    		document.getElementById('p2g6').style.backgroundColor = 'black';

    		document.getElementById('game7').style.color = 'black';
    		document.getElementById('p1g7').style.color = 'black';
    		document.getElementById('p1g7').disabled = true;
    		document.getElementById('p1g7').style.backgroundColor = 'black';

    		document.getElementById('p2g7').style.color = 'black';
    		document.getElementById('p2g7').disabled = true;
    		document.getElementById('p2g7').style.backgroundColor = 'black';
    	}	

    	if (totalgames == 3) {
    		document.getElementById('game4').style.color = 'black';
    		document.getElementById('p1g4').style.color = 'black';
    		document.getElementById('p1g4').disabled = true;
    		document.getElementById('p1g4').style.backgroundColor = 'black';

    		document.getElementById('p2g4').style.color = 'black';
    		document.getElementById('p2g4').disabled = true;
    		document.getElementById('p2g4').style.backgroundColor = 'black';

    		document.getElementById('game5').style.color = 'black';
    		document.getElementById('p1g5').style.color = 'black';
    		document.getElementById('p1g5').disabled = true;
    		document.getElementById('p1g5').style.backgroundColor = 'black';

    		document.getElementById('p2g5').style.color = 'black';
    		document.getElementById('p2g5').disabled = true;
    		document.getElementById('p2g5').style.backgroundColor = 'black';

    		document.getElementById('game6').style.color = 'black';
    		document.getElementById('p1g6').style.color = 'black';
    		document.getElementById('p1g6').disabled = true;
    		document.getElementById('p1g6').style.backgroundColor = 'black';

    		document.getElementById('p2g6').style.color = 'black';
    		document.getElementById('p2g6').disabled = true;
    		document.getElementById('p2g6').style.backgroundColor = 'black';

    		document.getElementById('game7').style.color = 'black';
    		document.getElementById('p1g7').style.color = 'black';
    		document.getElementById('p1g7').disabled = true;
    		document.getElementById('p1g7').style.backgroundColor = 'black';

    		document.getElementById('p2g7').style.color = 'black';
    		document.getElementById('p2g7').disabled = true;
    		document.getElementById('p2g7').style.backgroundColor = 'black';

    	}

    	if (totalgames == 1) {
    		document.getElementById('game2').style.color = 'black';
    		document.getElementById('p1g2').style.color = 'black';
    		document.getElementById('p1g2').disabled = true;
    		document.getElementById('p1g2').style.backgroundColor = 'black';

    		document.getElementById('p2g2').style.color = 'black';
    		document.getElementById('p2g2').disabled = true;
    		document.getElementById('p2g2').style.backgroundColor = 'black';

    		document.getElementById('game3').style.color = 'black';
    		document.getElementById('p1g3').style.color = 'black';
    		document.getElementById('p1g3').disabled = true;
    		document.getElementById('p1g3').style.backgroundColor = 'black';

    		document.getElementById('p2g3').style.color = 'black';
    		document.getElementById('p2g3').disabled = true;
    		document.getElementById('p2g3').style.backgroundColor = 'black';

    		document.getElementById('game4').style.color = 'black';
    		document.getElementById('p1g4').style.color = 'black';
    		document.getElementById('p1g4').disabled = true;
    		document.getElementById('p1g4').style.backgroundColor = 'black';

    		document.getElementById('p2g4').style.color = 'black';
    		document.getElementById('p2g4').disabled = true;
    		document.getElementById('p2g4').style.backgroundColor = 'black';

    		document.getElementById('game5').style.color = 'black';
    		document.getElementById('p1g5').style.color = 'black';
    		document.getElementById('p1g5').disabled = true;
    		document.getElementById('p1g5').style.backgroundColor = 'black';

    		document.getElementById('p2g5').style.color = 'black';
    		document.getElementById('p2g5').disabled = true;
    		document.getElementById('p2g5').style.backgroundColor = 'black';

    		document.getElementById('game6').style.color = 'black';
    		document.getElementById('p1g6').style.color = 'black';
    		document.getElementById('p1g6').disabled = true;
    		document.getElementById('p1g6').style.backgroundColor = 'black';

    		document.getElementById('p2g6').style.color = 'black';
    		document.getElementById('p2g6').disabled = true;
    		document.getElementById('p2g6').style.backgroundColor = 'black';

    		document.getElementById('game7').style.color = 'black';
    		document.getElementById('p1g7').style.color = 'black';
    		document.getElementById('p1g7').disabled = true;
    		document.getElementById('p1g7').style.backgroundColor = 'black';

    		document.getElementById('p2g7').style.color = 'black';
    		document.getElementById('p2g7').disabled = true;
    		document.getElementById('p2g7').style.backgroundColor = 'black';
    	}
	}	

    if (startingserve != null) {
    	if (startingserve == 1) {
    			document.getElementById('p1servestatus').innerHTML = "<img src='img/serve.png'>";
    			document.getElementById('p2servestatus').innerHTML = '';
    	}

    	if (startingserve == 2) {
    			document.getElementById('p1servestatus').innerHTML = '';
    			document.getElementById('p2servestatus').innerHTML = "<img src='img/serve.png'>"
    	}
    }
}
  


