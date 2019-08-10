$(".top-left-bg").fadeIn();
$(".bottom-right-bg").fadeIn();
$("#name").slideDown();

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});

var typed = new Typed('#typed', {
	strings: ["Software Engineer", "Student @ <span class='red-text'> ???? </span>", "Open Source Evangelist"],
	typeSpeed: 40,
  backSpeed: 40,
  backDelay: 1000,
  startDelay: 1000,
    loop: true,
});
