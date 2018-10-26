1.Identify what aspects of the work have been correctly implemented and what have not.
	In this assignment I used javascript to load a google maps page centered around
	south station. My program locates all red line T-stations using their coordinates
	to put marker on the map. I use a poly line to trace the path between them all.
	i then locate the curent location of the user and draw a polyline from them
	to the nearest T-stop. Using JSON, I parse the mbta data for each T-stop and then 
	collect the attributes I want to show in a window box by concatenating a string 
	and then creating a infowindow for that T-station marker. 
	The most recent times I have been trying this the mbta data had not been loading 
	but i think it is becuas the API is being overused becuase my progrma was woking 
	before and I didn'y change anything about the JSON stuff.

2.Identify anyone with whom you have collaborated or discussed the assignment.
	I got help from the TA's from this assigment as well as referenced the google
	maps platform explanation of the different attributes their API can do. I used 
	examples of how to use polylines and make new markers to help me write my code.
	I got the Haversine function from stackoverflow from this link:
	https://stackoverflow.com/questions/14560999/using-the-haversine-formula-in-javascript
	I also referenced this page:
	https://developers.google.com/maps/documentation/javascript/tutorial

3.Say approximately how many hours you have spent completing the assignment
	I spent about 8 hours completing this assignment.