# ITSBootstrapCookie

## Overview

**ITSBootstrapCookie**, is a simple but effective tool to comply to the European Union Cookie law. Yes, we all know it affects the user experience but what the heck. It's a law

## Requirements

### jQuery (duh)
You can find jquery at <http://www.jquery.com>

### Bootstrap (duh)
You gotta get yourself a lil' Bootstrap 3.0. This plugin isn't compatible with Bootstrap < 2.x. But you're complying to a new law so you gotta be updated. Don't you? Get it at <http://www.getbootstrap.com>

### jQuery Cookie
You can find jQuery cookie at
<https://github.com/carhartl/jquery-cookie> and pay Klaus Hartl a little respect for building this incredible cookie plugin.

## Integration
To Integrate ITSBootstrapCookie: use the following lines:

On top:

	<link href="assets/css/bt.itsbootstrapcookie.css" rel="stylesheet">

Somewhere near the bottom (AFTER jquery and jquery.cookie):

	<!-- leave this out if you already have jquery included -->
    <script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
	<!-- leave this out if you already have bootstrap included -->
    <script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.js"></script>
	<!-- leave this out if you already have jquery.cookie included -->
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.3.1/jquery.cookie.min.js"></script>
    <script src="assets/js/bs.itsbootstrapcookie.min.js"></script>    


## Compatibility
This plugin is compatible with Bootstrap 3.x and jQuery > 1.6. It works with static and non-static topnav bars.

## Basic usage
To ask the user wether they accept the cookies or not, you should use the following code:
    
    $(document).ready(function(){
		$('body').ITSBootstrapCookie();	
    })
    

What? That's it? Yep, thats it.

But you want to check if a user has accepted the cookie? Ofcourse we built a neat lil check for it aswell. Don't be scared. This one is a bit more complex

	//check if the user accepted the cookies
    if ($.userAcceptedCookies()) {
    	//do your magic with good UX
	    alert("You accepted cookies, hurray!";
    } else {
    	//the cookie isn't set. This could mean two things
	    if ($.userDeclinedCookies()) {
	    	//the user didn't accept the cookies, the UX goes out the window
		    alert('You declined da cookies. User experience: It\'s Goneeee...');
	    } else {
	    	//the user didn't accept or declined the cookie requrest
	    }
    }
    
Nah, it wasn't that hard was it? Well we could spice a couple of things up. Because you want to know where this may come in handy don't you? Well the most important thing for most people is Google Analytics. This is basically the only thing small sites want to store (without login system or whatever). So let's try this cookie thing on Analytics, shall we?

	<!-- Example to only load Analytics when cookies are accepted -->
	<!-- We assume you got bootstrap and jquery already setted up -->
	
	<!-- Setup jQuery Cookie -->
    <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.3.1/jquery.cookie.min.js"></script>

	<!-- Init ITSBootstrapCookie stylesheet -->
	<link href="assets/css/bt.itsbootstrapcookie.css" rel="stylesheet">

	<!-- Init ITSBootstrapCookie Javascript -->
    <script src="assets/js/bs.itsbootstrapcookie.min.js"></script
    
    <!-- Init the ITS Bootstrap function -->
    <script type="text/javascript">
	   $('body').ITSBootstrapCookie({
		   textMessage: "Please accept the cookies so we can track your visits.",
		   onAccept: function() {
			  <!--  Insert your analytics code, which looks something like this: -->
			  
			  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
			  ga('create', 'UA-12837719-1', 'www.its-vision.nl');
			  ga('send', 'pageview');
			  
			  <!-- end of analytics code -->
		   }
	   });
    </script>
    
Wow, wasn't that easy? Now you completely and officially not a "criminal" any more!

##Advanced usage
Ofcourse there are programmers that need extensive customization. For everyone is a place. Below is an extensive list of switches and options. Well explained in the comments:

	$('body').ITSBootstrapCookie({
		//the big text that's displayed
		textMessage: 'This site uses cookies to help you get a better user experience. We do not store personal stuff.',
		//the text on the accept button
		buttonAccept: "Accept Cookies",
		//the accept button class
		btnAcceptClass: 'btn-success',
		//the text on the decline button
		buttonDecline:"Decline Cookies",
		//the decline button class
		btnDeclineClass: 'btn-danger',
		//How long the slide down will take
		openSlideTime: 500,
		//How long it takes to start sliding after document.ready
		openSlideTimeout: 500,
		//How long the slide up will take
		dissmissSlideTime: 500,
		//How long it takes to start sliding after dissmiss click
		dissmissSlideTimeout: 0,
		//The cookie lifetime for the tracking time.
		defaultCookieLifetime: 365,
		//if the page should be reloaded when cookies are accepted
		reloadOnAccept: true,
		//the onAccept handler
		onAccept: function(){
			alert("Hurray, you accepted the cookies!");
		},
		//onDecline handler
		onDecline: function(){
			alert("You declined the cookies, we can\'t help...");
		}
		
    });


## That's it
I would just love to type more about this neat lil' plugin, but this is just all there is to it. Feel free to contribute and suggest stuff.

## Holy crap, that's easy!?
Yep it is, it was written because we needed an easy solution for a couple of websites. 

## Where can i pay?
You don't need to pay for this, but it's on GitHub so you probably knew that :-) 

However if you want to `donate`: Click the button below:

[![image](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=info%40its%2dvision%2enl&lc=NL&item_name=ITS%2dVision&item_number=ITSBootstrapCookie&no_note=0&currency_code=EUR&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHostedGuest)




