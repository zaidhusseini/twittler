/*Twittler front end JS implementation

* Objectives *

1) Show the user new tweets somehow. (You can show them automatically as they're created, or create a button that displays new tweets.)
2) Display the timestamps of when the tweets were created. This timestamp should reflect the actual time the tweets were created, and should not just be hardcoded.
3) Design your interface so that you want to look at and use the product you're making.
4) Allow the user to click on a username to see that user's timeline.

* Vars Available (users, streams) *

* users is an array of strings -- all the usernames that you're following.
* streams is an object with two properties, users and home.
* streams.home is an array of all tweets from all the users you're following.
* streams.users is an object with properties for each user. streams.users.shawndrost has all of shawndrost's tweets.

Sample: 
- streams = 

{ home : [{message: 'my tweet', user: 'zaid', created_at: Date()}. {message: 'another tweet', user: 'jon', created_at: Date()}]
  users : {zaid: [ {tweetObj}.{tweetObj},{tweetObj} ] , Jon: [ {tweetObj} ], Sammy: [ {tweetObj} ] }
}

* Outline *

1) Create a 'feed/timeline' of tweets
  - Tweets displayed from most recent to oldest
  - Tweets should include 1) User Name 2) Tweet 3) Time Stamp
  - Tweets should be updated every X ms to display the next batch of tweets
2) Clicking on user name should update feed to display selected user tweets
3) Clean Up HTML & CSS to make presentable and aesthetically pleasing

* Approach *

1) Store 'feed' object of tweets and exctacted from streams.home (with name, tweet and time stamp) and display them
2) Refresh 'feed' object of user tweets every x ms by Displaying it again
3) When user name clicked, clear 'feed' object with selected users tweets (with name, tweet & time)
4) clicking on 'home' reloads index file and fills 'feed' object back up with main user tweets

*/

'use strict';

$(document).ready(twittler); //load in jQuery once document has been downloaded

function twittler(){

  function createFeed(tweets){
   // Parses through passed in array of Tweet Objects and stores them in homeFeed
   // updates homeFeed to include list of tweets to display
    homeFeed = tweets.slice();
    clearFeed();	
    orderFeed();
  }

  function clearFeed(){
  //resets value of homeFeed
    $('div').remove();
  }

  function orderFeed(){
  //orders feed chronologically 
    homeFeed.sort(function(a, b) {
      return b.created_at - a.created_at;
    });
  }


  function addTweetToDOM(tweet){
      
      var $tweet = $('<div></div>').text(tweet.message+' ').addClass('tweet');

		  var userName = tweet.user;
		  var $userName = $('<a href="#" class=\'user\'>').text('@'+userName+': ').attr('data-username',userName);

		  var date = tweet.created_at.toLocaleString();
		  var $date = $('<em class=\'date\'>').text('('+date+')');

		  $tweet.appendTo($body.find('.tweet-feed'));
		  $userName.prependTo($tweet);
		  $date.appendTo($tweet);

  }

  function displayHomeFeed(){
  //use jQuery to display 1) User Name 2) Tweet 3) Time Stamp to page elements and display .text() for each
  //temporarily use console.log to display/test
    createFeed(streams.home);
		var index = streams.home.length - 1;

		while(index >= 0){
		  addTweetToDOM(streams.home[index]);
		  index -= 1;
		}

    $('.user').on('click', function(){
    	clearInterval(homeIntervalID);
      clickedUser = $(this).data('username');
	    $('body').find('.user-header').text('@'+clickedUser+' Feed');
	    displayUserFeed();
      userIntervalID = setInterval(displayUserFeed,100);
    });


  }

	function displayUserFeed(){
  //use jQuery to display 1) User Name 2) Tweet 3) Time Stamp to page elements and display .text() for each
  //temporarily use console.log to display/test
    
    createFeed(streams.users[clickedUser]);	
		var index = streams.users[clickedUser].length - 1;

		while(index >= 0){
		  addTweetToDOM(streams.users[clickedUser][index]);
		  index -= 1;
		}
    
  }


  var homeFeed = [];
  var $body = $('body');
  var clickedUser = '';
 

  displayHomeFeed();
  var homeIntervalID = setInterval(displayHomeFeed,1500);
  var userIntervalID;

	 $('.logo').on('click', function(){
	      clearInterval(userIntervalID);
	      clearInterval(homeIntervalID);
	      $('body').find('.user-header').text("Home Feed");
	      displayHomeFeed();
	      homeIntervalID = setInterval(displayHomeFeed,1500);
		});
}




