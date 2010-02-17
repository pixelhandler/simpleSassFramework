/* load at end of page */

$(document).ready(function() { 
	
	// son of suckerfish IE fix for li:hover support
	var sfHover = (function() {
		var sfEls = $("#topnav > #menu li");
		return jQuery.each(sfEls, function(i, n) {
			$(n).mouseover(function(n){ $(n).addClass('sfHover'); }).mouseout(function(){ $(n).removeClass('sfHover'); });
		});
	})();
	if (window.attachEvent) { window.attachEvent("onload", sfHover); }

}); // end doc ready



