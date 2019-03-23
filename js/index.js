new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: false,
  navigation: true,
  navigationPosition: 'right'
});


var roundLogEl = document.querySelector('.age');

anime({
  targets: roundLogEl,
  innerHTML: [0, 18],
  easing: 'linear',
  round: 1 // Will round the animated value to 1 decimal
});

$(".section *").hide().slideDown(500);
