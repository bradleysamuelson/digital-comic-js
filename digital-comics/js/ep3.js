/*
 * LineHeight Digital Comic v0.2.0
 * http://www.lineheight.co
 *
 * Copyright 2014 LineHeight
 *
 * Author: Brad Samuelson (@badsamuelson)
 */
 /*
     don't forget list:
     -set the current episode
     -set whether it's latest or first episode
     -set the next and prev links if necessary
     -input the correct number of slides
     -put in the correct twitter and facebook share links
     
 */

//first set the directory of the comics - use an absolute path
var comicDir = "digital-comics/";

//set the episode within the comic directory
var currentEpisode = "s1e3";

//set the URL for the next and previous episodes - use an absolute url
var nextEpisodeURL = "episode4.html";
var prevEpisodeURL = "episode2.html";
var thisEpisodeURL = "episode3.html";

//combines to create the URL
var currentEpisodeDir = comicDir + currentEpisode ;

//set whether this is the latest or first episode
var latestEpisode = false;
var firstEpisode = false;


//don't forget to add the correct number of screens for this episode
episode(16);

//putting together the variables for this episode
function episode(screens) {
	this.screens = screens;
	//add the ul to contain the screens
	$('.comic').append("<ul class='slides'></ul>");
	//create the markup for each screen
	for (i = 1; i <= screens; i++) {
		$('.comic ul').append("<li><img src='" + currentEpisodeDir + "/" + i + ".png'></li>");
	};
	//create the last screen - varies on whether it's the last episode or not - ADD CORRECT URLS
	if (latestEpisode) {
	  $('.comic ul').append("<li><div class='lastslidecontent'><h2>To be continued...</h2><div class='latest-subscribe'>If you'd like to be notified when the next episode is available, please subscribe to our <a href='http://feedpress.me/sectorfour' target='_blank'>RSS feed</a> or <a href='http://eepurl.com/wLIOT' target='_blank'>Email Newsletter</a>.</div></div></li>");
	} else {
    	$('.comic ul').append("<li><div class='lastslidecontent'><div class='continue'><a class='continue-btn' href='" + nextEpisodeURL + "'>Continue to the next episode.</a></div></div></li>");
	}
	$('.lastslidecontent').append("<div class='supportcontent'>If you enjoyed this comic, please consider supporting us...<ul><li>Share on <a href='https://twitter.com/home?status=Check%20out%20this%20episode%20of%20the%20comic%20Sector%20Four:%20" + thisEpisodeURL + "' target='_blank'>Twitter</a> or <a href='https://www.facebook.com/sharer/sharer.php?u=" + thisEpisodeURL + "' target='_blank'>Facebook</a></li><li>Buy it on <a href='https://www.comixology.com/Sector-Four-Season-One/digital-comic/129752' target='_blank'>Comixology</a></li><li>Tell all your friends... word of mouth goes a long way!</li></ul></div>");
	
	
	//next and previous episode buttons - pulls in URL from above - no action needed
	if (!latestEpisode || !firstEpisode) {
	    $('.comic').append("<div class='episodebuttons hidebuttons'></div>");
	}
	if (!latestEpisode) {
    	$('.episodebuttons').append("<a href='" + nextEpisodeURL + "' class='nextep'>Next Episode</a>");
	}
	if (!firstEpisode) {
    	$('.episodebuttons').append("<a href='" + prevEpisodeURL + "' class='prevep'>Previous Episode</a>");
	}
	
}

    //create the comic slideshow using Flexslider
    $(window).load(function(){
      $('.comic').addClass("comic-margin"); //adds space below the comic
      $('.comic').flexslider({
        animation: "fade",
        animationSpeed: 0,
        slideshow: false,
        animationLoop: false,
        prevText: "Next",
        nextText: "Prev",
        touch:true,
        keyboard:true,
        start: function(slider){
          $('body').removeClass('loading');
          $('.episodebuttons').css('display', 'block');
        }
      });
    });
