/*
*
* Framework JS
*
*/

(function($) {
	$(function() {
		// Dropdown Navigation 
		$('nav ul li a:not(:only-child)').click(function(e) {
			$(this).siblings('.nav-dropdown').toggle();
			$('.nav-dropdown').not($(this).siblings()).hide();
			e.stopPropagation();
		});
		$('html').click(function() {
			$('.nav-dropdown').hide();
		});
		$('#nav-toggle').click(function() {
			$('nav ul').slideToggle();
		});
		$('#nav-toggle').on('click', function() {
			this.classList.toggle('active');
		});
		// Smooth anchor scrolling
		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
				document.querySelector(this.getAttribute('href')).scrollIntoView({
					behavior: 'smooth'
				});
			});
		});
		// Popins
		function modal(str) {
			if (str == "show") {
				$('.popin').show();
			} else if (str == "hide") {
				$('.popin').hide();
			}
		}
		$("#myModal").click(function() {
			$(".popin").toggle();
		});
		$(document).keyup(function(e) {
			if (e.keyCode == 27) { 
				$('.popin').hide();
			}
		});
		$(".popin-close").click(function() {
			$('.popin').toggle();
		});
		// $("#myModal").modal("show");
		// $("#myModal").modal("hide");
		// Tabs 
		$('ul.tab-list li').click(function(){
			var tab_id = $(this).attr('data-target');
			$('ul.tab-list li').removeClass('active');
			$('.tab-pane').removeClass('active');
			$(this).addClass('active');
			$("#"+tab_id).addClass('active');
		});
		// Tooltip
		var attr = $(this).attr('title');
		if (typeof attr !== typeof undefined && attr !== false) {
		    $('.tooltip').show();
		}
}); 
})(jQuery);