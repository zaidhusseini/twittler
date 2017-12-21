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


	var homeFeed = [];

	function createFeed(tweets){
	 // Parses through passed in array of Tweet Objects and Displays Tweets on screen
	 // updates homeFeed to include list of tweets to display

	}

	function clearFeed(){
	//resets value of homeFeed
	  homeFeed = [];

	}

	function displayFeed(){
    //use jQuery to add 1) User Name 2) Tweet 3) Time Stamp to page elements and display .text() for each
    //temporarily use console.log to display/test

	}



}



