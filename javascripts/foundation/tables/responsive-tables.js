$(document).ready(function(){function n(n){n.wrap("<div class='table-wrapper' />");var i=n.clone();i.find("td:not(:first-child), th:not(:first-child)").css("display","none"),i.removeClass("responsive"),n.closest(".table-wrapper").append(i),i.wrap("<div class='pinned' />"),n.wrap("<div class='scrollable' />"),e(n,i)}function i(n){n.closest(".table-wrapper").find(".pinned").remove(),n.unwrap(),n.unwrap()}function e(n,i){var e=n.find("tr"),t=i.find("tr"),o=[];e.each(function(n){var i=$(this),e=i.find("th, td");e.each(function(){var i=$(this).outerHeight(!0);o[n]=o[n]||0,i>o[n]&&(o[n]=i)})}),t.each(function(n){$(this).height(o[n])})}var t=!1,o=function(){return $(window).width()<767&&!t?(t=!0,$("table.responsive").each(function(i,e){n($(e))}),!0):(t&&$(window).width()>767&&(t=!1,$("table.responsive").each(function(n,e){i($(e))})),void 0)};$(window).load(o),$(window).on("redraw",function(){t=!1,o()}),$(window).on("resize",o)});