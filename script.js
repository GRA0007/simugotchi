var menu = 0;

var icon = 0; //Icon selected (1-9) 0=Nothing selected

function buttonA() {
	if (icon < 9) {
		icon = icon + 1;
	} else if (icon == 9) {
		icon = 0;
	}
}
function buttonB() {
	if (icon > 0) {
		alert('Open app number ' + icon + '.');
	}
}
function buttonC() {
	if (icon > 0) {
		icon = 0
	}
}

function highlightIcons() {
	window.setInterval(function() {
		if (icon == 0) {
			$('#screen #g4075').css('opacity', '0.2');
			$('#screen #g4543').css('opacity', '0.2');
			$('#screen #g4440').css('opacity', '0.2');
			$('#screen #g4404').css('opacity', '0.2');
			$('#screen #g4378').css('opacity', '0.2');
			$('#screen #g4341').css('opacity', '0.2');
			$('#screen #g4269').css('opacity', '0.2');
			$('#screen #g4163').css('opacity', '0.2');
			$('#screen #g5096').css('opacity', '0.2');
		} else if (icon == 1) {
			$('#screen #g4075').css('opacity', '1');
			$('#screen #g4543').css('opacity', '0.2');
			$('#screen #g4440').css('opacity', '0.2');
			$('#screen #g4404').css('opacity', '0.2');
			$('#screen #g4378').css('opacity', '0.2');
			$('#screen #g4341').css('opacity', '0.2');
			$('#screen #g4269').css('opacity', '0.2');
			$('#screen #g4163').css('opacity', '0.2');
			$('#screen #g5096').css('opacity', '0.2');
		} else if (icon == 2) {
			$('#screen #g4075').css('opacity', '0.2');
			$('#screen #g4543').css('opacity', '0.2');
			$('#screen #g4440').css('opacity', '0.2');
			$('#screen #g4404').css('opacity', '0.2');
			$('#screen #g4378').css('opacity', '0.2');
			$('#screen #g4341').css('opacity', '0.2');
			$('#screen #g4269').css('opacity', '0.2');
			$('#screen #g4163').css('opacity', '0.2');
			$('#screen #g5096').css('opacity', '1');
		} else if (icon == 3) {
			$('#screen #g4075').css('opacity', '0.2');
			$('#screen #g4543').css('opacity', '0.2');
			$('#screen #g4440').css('opacity', '0.2');
			$('#screen #g4404').css('opacity', '0.2');
			$('#screen #g4378').css('opacity', '0.2');
			$('#screen #g4341').css('opacity', '0.2');
			$('#screen #g4269').css('opacity', '0.2');
			$('#screen #g4163').css('opacity', '1');
			$('#screen #g5096').css('opacity', '0.2');
		} else if (icon == 4) {
			$('#screen #g4075').css('opacity', '0.2');
			$('#screen #g4543').css('opacity', '0.2');
			$('#screen #g4440').css('opacity', '0.2');
			$('#screen #g4404').css('opacity', '0.2');
			$('#screen #g4378').css('opacity', '0.2');
			$('#screen #g4341').css('opacity', '0.2');
			$('#screen #g4269').css('opacity', '1');
			$('#screen #g4163').css('opacity', '0.2');
			$('#screen #g5096').css('opacity', '0.2');
		} else if (icon == 5) {
			$('#screen #g4075').css('opacity', '0.2');
			$('#screen #g4543').css('opacity', '0.2');
			$('#screen #g4440').css('opacity', '0.2');
			$('#screen #g4404').css('opacity', '0.2');
			$('#screen #g4378').css('opacity', '0.2');
			$('#screen #g4341').css('opacity', '1');
			$('#screen #g4269').css('opacity', '0.2');
			$('#screen #g4163').css('opacity', '0.2');
			$('#screen #g5096').css('opacity', '0.2');
		} else if (icon == 6) {
			$('#screen #g4075').css('opacity', '0.2');
			$('#screen #g4543').css('opacity', '0.2');
			$('#screen #g4440').css('opacity', '0.2');
			$('#screen #g4404').css('opacity', '0.2');
			$('#screen #g4378').css('opacity', '1');
			$('#screen #g4341').css('opacity', '0.2');
			$('#screen #g4269').css('opacity', '0.2');
			$('#screen #g4163').css('opacity', '0.2');
			$('#screen #g5096').css('opacity', '0.2');
		} else if (icon == 7) {
			$('#screen #g4075').css('opacity', '0.2');
			$('#screen #g4543').css('opacity', '0.2');
			$('#screen #g4440').css('opacity', '0.2');
			$('#screen #g4404').css('opacity', '1');
			$('#screen #g4378').css('opacity', '0.2');
			$('#screen #g4341').css('opacity', '0.2');
			$('#screen #g4269').css('opacity', '0.2');
			$('#screen #g4163').css('opacity', '0.2');
			$('#screen #g5096').css('opacity', '0.2');
		} else if (icon == 8) {
			$('#screen #g4075').css('opacity', '0.2');
			$('#screen #g4543').css('opacity', '0.2');
			$('#screen #g4440').css('opacity', '1');
			$('#screen #g4404').css('opacity', '0.2');
			$('#screen #g4378').css('opacity', '0.2');
			$('#screen #g4341').css('opacity', '0.2');
			$('#screen #g4269').css('opacity', '0.2');
			$('#screen #g4163').css('opacity', '0.2');
			$('#screen #g5096').css('opacity', '0.2');
		} else if (icon == 9) {
			$('#screen #g4075').css('opacity', '0.2');
			$('#screen #g4543').css('opacity', '1');
			$('#screen #g4440').css('opacity', '0.2');
			$('#screen #g4404').css('opacity', '0.2');
			$('#screen #g4378').css('opacity', '0.2');
			$('#screen #g4341').css('opacity', '0.2');
			$('#screen #g4269').css('opacity', '0.2');
			$('#screen #g4163').css('opacity', '0.2');
			$('#screen #g5096').css('opacity', '0.2');
		}
	}, 50);
}

function menuToggle() {
	if (menu == 1) {
		$('#menu-buttons').slideUp();
		$('#menu-toggle').css("background-image", "url('menuOpen.svg')");
		$('#menu-toggle').animate({"border-top-left-radius": "5px"},0);
		$('#menu-toggle').animate({"border-top-right-radius": "5px"},0);
		$('#menu-toggle').animate({top: "0px"});
		menu = 0;
	} else if (menu == 0) {
		$('#menu-buttons').slideDown();
		$('#menu-toggle').css("background-image", "url('menuClose.svg')");
		$('#menu-toggle').animate({"border-top-left-radius": "0px"},0);
		$('#menu-toggle').animate({"border-top-right-radius": "0px"},0);
		$('#menu-toggle').animate({top: "390px"});
		menu = 1;
	}
}

$(document).ready(function() {
	highlightIcons();
	$('#menu-toggle').click(function() {
		menuToggle();
	});
	$('#path4188-4').click(function() {
		buttonA();
	});
	$('#path4188').click(function() {
		buttonB();
	});
	$('#path4188-8').click(function() {
		buttonC();
	});
});

function version() {
	alert("Sorry! Only version 4 supported right now!");
}
function pause() {
	alert("Coming soon!");
}
function save() {
	alert("Coming soon!");
}
function reset() {
	alert("Coming soon!");
}
function options() {
	alert("Coming soon!");
}
function sound() {
	alert("Coming soon!");
}
