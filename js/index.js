$(".top-left-bg").fadeIn();
$(".bottom-right-bg").fadeIn();
$("#name").slideDown();

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true
});

var typed = new Typed('#typed', {
	strings: ["SWE Intern @ <span class='red-text'> AzRy LLC </span>", "Student @ <span class='red-text'> BTU </span>", "Open Source Evangelist"],
	typeSpeed: 40,
  backSpeed: 40,
  backDelay: 1000,
  startDelay: 1000,
    loop: true,
});
