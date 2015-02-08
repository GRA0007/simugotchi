var menu = 0;

var icon = 0; //Icon selected (1-9) 0=Nothing selected
var iconMenuLevel = 1; //Menu level; 1=no app open, 2=app main open, 3 onwards=level of app menu

$.fn.animateRotate = function(angle, duration, easing, complete) {
  var args = $.speed(duration, easing, complete);
  var step = args.step;
  return this.each(function(i, e) {
    args.complete = $.proxy(args.complete, e);
    args.step = function(now) {
      $.style(e, 'transform', 'rotate(' + now + 'deg)');
      if (step) return step.apply(e, arguments);
    };

    $({deg: 0}).animate({deg: angle}, args);
  });
};
$.fn.animateRotatel = function(angle, duration, easing, complete) {
  var args = $.speed(duration, easing, complete);
  var step = args.step;
  return this.each(function(i, e) {
    args.complete = $.proxy(args.complete, e);
    args.step = function(now) {
      $.style(e, 'transform', 'rotate(' + now + 'deg)');
      if (step) return step.apply(e, arguments);
    };

    $({deg: 180}).animate({deg: angle}, args);
  });
};

function buttonA() {
	if (iconMenuLevel == 1) {
		if (icon < 9) {
			icon = icon + 1;
		} else if (icon == 9) {
			icon = 0;
		}
	}
}
function buttonB() {
	if (iconMenuLevel == 1) {
		if (icon > 0) {
			alert('Open app number ' + icon + '.');
		}
	}
}
function buttonC() {
	if (iconMenuLevel == 1) {
		if (icon > 0) {
			icon = 0
		}
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
		$('#menu-toggle').animate({"border-top-left-radius": "5px"},0);
		$('#menu-toggle').animate({"border-top-right-radius": "5px"},0);
		$('#menu-toggle').animate({top: "0px"});
		$('#menu-image').animateRotatel(0, 250, "linear");
		menu = 0;
	} else if (menu == 0) {
		$('#menu-buttons').slideDown();
		$('#menu-toggle').animate({"border-top-left-radius": "0px"},0);
		$('#menu-toggle').animate({"border-top-right-radius": "0px"},0);
		$('#menu-toggle').animate({top: "395px"});
		$('#menu-image').animateRotate(180, 250, "linear");
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
