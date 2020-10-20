
function czyWypelnione(pole) {
	console.log('czyWypelnione name=' + pole.name + ' id=' + pole.id);
	if(pole.value == "") {
		document.getElementById('i'+pole.id).innerHTML= "Puste pole";
		return false;
	}
	else {
		document.getElementById('i'+pole.id).innerHTML= "";
		return true;
	}
}

function czyEmail(pole) {
	console.log('czyEmail name=' + pole.name + ' id=' + pole.id);
	var wzorzec = /^.+@.+\..{2,4}$/;

	if(czyWypelnione(pole)) {
		if(!wzorzec.test(pole.value)) {
			document.getElementById('i'+pole.id).innerHTML= "Email nie jest poprawny";
			console.log('Email Niepoprawny');
			return false;
		}
		else {
			document.getElementById('i'+pole.id).innerHTML= "";
			console.log('Email Poprawny');
			return true;
		}
	} else {
		return false;
	}
}

function czyNumber(pole) {
	console.log('czyNumber name=' + pole.name + ' id=' + pole.id);
	if(czyWypelnione(pole)) {
		if(isNaN(pole.value)) {
			document.getElementById('i'+pole.id).innerHTML= "Pole nie jest numeryczne";
			return false;
		}
		else {
			document.getElementById('i'+pole.id).innerHTML= "";
			return true;
		}
	} else {
		return false;
	}
}

function sprawdz() {
	var pustePola = true;
	if( 
		czyWypelnione(this.name) && 
		czyEmail(this.email) &&
		czyNumber(this.ilosc) &&
		czyWypelnione(this.message)
		) 
	{
		return true;
	} else {
		return false;
	}

}

function form() {
	var send = document.getElementById('contactform');
	send.onsubmit = sprawdz;

}

window.onload = form;







