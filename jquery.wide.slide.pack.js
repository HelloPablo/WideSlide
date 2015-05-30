/**
 * Author:        Pablo de la Pena (@hellopablo)
 * Version:       1.0.0
 * Dated:         16th November 2010
 * Dependency:    jQuery 1.2.6
 * Documentation: http://hellopablo.github.io/wide-slide/
 * License:       MIT
 **/
(function($){$.fn.wideSlide=function(options){var settings=$.extend({},$.fn.wideSlide.defaults,options);return this.each(function(){var vars={currentSlide:-1,totalSlides:0,kids:Array(),paused:false,started:false};var slider=$(this);var kids=slider.children("div");kids.each(function(){var child=$(this);child.attr('id','wideSlide_'+vars.totalSlides);child.addClass('wideSlide');vars.kids[vars.totalSlides]=child;vars.totalSlides++;});if(settings.pauseOnHover){slider.hover(function(){if(vars.started==false)
return false;vars.paused=true;slider.find('.wideSlidePause').fadeIn('fast',function(){$(this).fadeOut('slow')});},function(){if(vars.started==false)
return false;vars.paused=false;slider.find('.wideSlidePlay').fadeIn('fast',function(){$(this).fadeOut('slow')});});}
if(settings.pauseOnHover){var pauseMarkup='<div class="wideSlideNotice wideSlidePause"></div>';var playMarkup='<div class="wideSlideNotice wideSlidePlay"><div>';slider.append(pauseMarkup).append(playMarkup);}
setTimeout(function(){vars.started=true;wideSlideRun(vars,settings,true);setInterval(function(){wideSlideRun(vars,settings,false);},settings.pauseTime);},2000);});};function wideSlideRun(vars,settings,override_pause){if(vars.paused&&!override_pause)
return false;vars.currentSlide++;if(vars.currentSlide>=vars.totalSlides){vars.currentSlide=0;}
$.each(vars.kids,function(){$(this).css('z-index',1);if(!$(this).hasClass('no_hide')){$(this).css('display','none');}
$(this).removeClass('no_hide');});vars.kids[vars.currentSlide].css('z-index',2);if(settings.effect=='random'){var rand=Math.floor(Math.random()*2);}
if(rand==0||settings.effect=='fade'){vars.kids[vars.currentSlide].fadeIn(settings.transitionSpeed);}else if(rand==1||settings.effect=='slideDown'){vars.kids[vars.currentSlide].slideDown(settings.transitionSpeed);}
vars.kids[vars.currentSlide].addClass('no_hide');};$.fn.wideSlide.defaults={pauseTime:5000,pauseOnHover:true,effect:'fade',transitionSpeed:600};})(jQuery);