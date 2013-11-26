(function($) {
		
        $.fn.ITSBootstrapCookie = function( options ) {

				//set body value;
				var body = $(this);

                // Establish our default defaults
                var defaults = $.extend({
						textMessage: 'This site uses cookies to help you get a better user experience. We do not store personal stuff.',
						buttonAccept: "Accept Cookies",
						buttonDecline:"Decline Cookies",
						openSlideTime: 500,
						openSlideTimeout: 500,
						dissmissSlideTime: 500,
						dissmissSlideTimeout: 0,
						btnAcceptClass: 'btn-success',
						btnDeclineClass: 'btn-danger',
						defaultCookieLifetime: 365,
						reloadOnAccept: true,
						onAccept: function(){},
						onDecline: function(){}
                }, options);
                
                
                //set currently fetched cookie
	            $.showCookieBar = function () {
					//prepend the cookbie to the top
					$(body).append( '<div id="itsbootstrapcookie">'+
									'  	<div class="row">'+
									'  		<div class="col-lg-12 col-md-12 text-center hidden-sm hidden-xs">'+
									'		  	'+defaults.textMessage+
									'	  		<button class="'+defaults.btnAcceptClass+' btn-sm btn ibc-accept">'+defaults.buttonAccept+'</button>'+
									'	  		<button class="'+defaults.btnDeclineClass+' btn-sm btn ibc-decline">'+defaults.buttonDecline+'</button>'+
									'  		</div>'+
									'		<div class="col-lg-12 col-md-12 text-center hidden-lg hidden-md hidden-xs">'+
									'			<div class="row">'+
									'			  	'+defaults.textMessage+
									'		  	</div>'+
									'			<button class="'+defaults.btnAcceptClass+' btn-sm btn ibc-accept">'+defaults.buttonAccept+'</button>'+
									'			<button class="'+defaults.btnDeclineClass+' btn-sm btn ibc-decline">'+defaults.buttonDecline+'</button>'+
									'		</div>'+
									'		<div class="col-lg-12 col-md-12 text-center hidden-lg hidden-md hidden-sm">'+
									'		  	'+defaults.textMessage+
									'			<button class="'+defaults.btnAcceptClass+' btn-sm btn btn-block ibc-accept">'+defaults.buttonAccept+'</button>'+
									'			<button class="'+defaults.btnDeclineClass+' btn-sm btn btn-block ibc-decline">'+defaults.buttonDecline+'</button>'+
									'		</div>'+
									'	</div>'+
									'</div>');
					//get the cookiebar
					cookieBar			= $("#itsbootstrapcookie");
					//get an (maybe not even existing) static navbar
					staticNavBar		= $(".navbar-static-top");
					//get the height for the cookiebar
					cookieBarHeight		= $('#itsbootstrapcookie').outerHeight();

					//set a timeout according to: openSlideTimeout
					setTimeout(function(){
						//slidedown the cookiebar
						$(cookieBar).slideDown(defaults.openSlideTime).fadeIn();	 	 
						
						//slidedown the static navbar
						$(staticNavBar).animate({
						marginTop: cookieBarHeight,
						}, defaults.openSlideTime);
						
						//slidedown the body
						$(body).animate({
						marginTop: cookieBarHeight,
						}, defaults.openSlideTime);
					}, defaults.openSlideTimeout);
					
					//when clicked on either the decline or accept button 
					$(body).on("click",".ibc-accept, .ibc-decline",function(){
						if ($(this).hasClass('ibc-accept')) {
							//remove any previous cookies
							$.removeCookie("ibc");
							//set new cookie to be accepted
							$.cookie("ibc", "true", { expires: defaults.defaultCookieLifetime, path: "/"});
							
							//if a function for onAccept is set, throw the function
							if ( $.isFunction( defaults.onAccept ) ) {
						        defaults.onAccept.call( this );
						    }
							
							if (defaults.reloadOnAccept){
								location.reload();								
							}
							
							

						} else if ($(this).hasClass('ibc-decline')) {
							//remove any previous cookies
							$.removeCookie("ibc");
							$.cookie("ibc", "false", { expires: defaults.defaultCookieLifetime, path: "/" });

							//if a function for onDecline is set, throw the function
							if ( $.isFunction( defaults.onDecline ) ) {
						        defaults.onDecline.call( this );
						    }

						}
					
						setTimeout(function(){
							//slidedown the cookiebar
							$(cookieBar).slideUp(defaults.dissmissSlideTime).fadeOut();	 	 
						
							//slidedown the static navbar
							$(staticNavBar).animate({
							  marginTop: 0,
							  }, defaults.dissmissSlideTime);
						
							//slidedown the body
							$(body).animate({
						 	  marginTop: 0,
							  }, defaults.dissmissSlideTime);
						}, defaults.dissmissSlideTimeout);
					});
					
	            }
	            
				//when the document has been loaded, lets check if there already has been a cookie decline
				$(document).ready(function(){
					//if cookie is empty
					if ($.cookie("ibc") != "false" && $.cookie("ibc") != "true") {
						//show cookiebar
						$.showCookieBar();
					}
				});
				
				//check wether the user has accepted cookies
	            $.userAcceptedCookies = function () {
					if ($.cookie("ibc") == "true") {
						return true;
					} else {
						//if anything else, he didnt accept or did not click OK yet.
						return false;						
					}
	            }
	            
				//check wether the user has accepted cookies
	            $.userDeclinedCookies = function () {
					if ($.cookie("ibc") == "false") {
						return true;
					} else {
						//if anything else, he didnt accept or did not click OK yet.
						return false;						
					}
	            }
        };

}(jQuery));