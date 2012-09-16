// Firm's favorite song list

var firmFavoriteSongs = new Array(
{
	songName:		"Gravity",
	artist: 		"John Mayer",
	album: 			"Continuum",
	trackNo: 		4,
	year: 			2006,
	trackLength: 	{minute:4,second:6},
	artwork: 		"continuum.jpg",
	fileType: 		"AAC audio file",
	fileSizeMb: 	4.9,
	bitRateKbps: 	256
},
{
	songName:		"The Reeling",
	artist: 		"Passion Pit",
	album: 			"Manners",
	trackNo: 		4,
	year: 			2009,
	trackLength: 	{minute:4,second:48},
	artwork: 		"manners.jpg",
	fileType: 		"Matched AAC audio file",
	fileSizeMb: 	10,
	bitRateKbps: 	256
},
{
	songName:		"Two Moons",
	artist: 		"Toe",
	album: 			"For Long Tomorrow",
	trackNo: 		6,
	year: 			2009,
	trackLength: 	{minute:4,second:7},
	artwork: 		"forlongtomorrow.jpg",
	fileType: 		"Matched AAC audio file",
	fileSizeMb: 	10,
	bitRateKbps: 	256
},
{
	songName:		"Eighteen",
	artist: 		"We Were Evergreen",
	album: 			"EP",
	trackNo: 		2,
	year: 			2009,
	trackLength: 	{minute:2,second:56},
	artwork: 		"WWEEP.jpg",
	fileType: 		"Matched AAC audio file",
	fileSizeMb: 	6.4,
	bitRateKbps: 	256
},
{
	songName:		"Charlie Brown",
	artist: 		"Coldplay",
	album: 			"Mylo Xyloto",
	trackNo: 		4,
	year: 			2011,
	trackLength: 	{minute:4,second:45},
	artwork: 		"myloxyloto.jpg",
	fileType: 		"Matched AAC audio file",
	fileSizeMb: 	9.7,
	bitRateKbps: 	256
},
{
	songName:		"In Your Atmosphere",
	artist: 		"John Mayer",
	album: 			"Where The Light Is",
	trackNo: 		3,
	year: 			2008,
	trackLength: 	{minute:5,second:46},
	artwork: 		"where_the_light_is.jpg",
	fileType: 		"Matched AAC audio file",
	fileSizeMb: 	11.5,
	bitRateKbps: 	256
});

//track no. for "Two Moons"
firmFavoriteSongs[2].trackNo;
//"In Your Atmosphere" track length in seconds
(firmFavoriteSongs[5].trackLength.minute * 60) + (firmFavoriteSongs[5].trackLength.second);
//"The Reeling" release year
firmFavoriteSongs[1].year;



