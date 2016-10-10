// all possible words to guess
// I decided to keep this as a global variable and pass it in to the game init function
// so you could reuse the code to play with different dictionaries, and different html files
// just in case you're not as big of a Game of Thrones geek as I am :)
var gameOfThronesDictionary = [
	{
		word: "Jaime",
		category: "Person"
	},
	
	{
		word: "Cersei",
		category: "Person"
	},
	
	{
		word: "Tyrion",
		category: "Person"
	},
	
	{
		word: "Blackfish",
		category: "Person"
	},
	
	{
		word: "Sansa",
		category: "Person"
	},
	
	{
		word: "Arya",
		category: "Person"
	},
	
	{
		word: "Craster",
		category: "Person"
	},
	
	{
		word: "Podrick",
		category: "Person"
	},
	
	{
		word: "Grenn",
		category: "Person"
	},
	
	{
		word: "Brienne",
		category: "Person"
	},
	
	{
		word: "Renly",
		category: "Person"
	},
	
	{
		word: "Stannis",
		category: "Person"
	},
	
	{
		word: "Theon",
		category: "Person"
	},
	
	{
		word: "Ramsay",
		category: "Person"
	},
	
	{
		word: "Hotpie",
		category: "Person"
	},
	
	{
		word: "Gendry",
		category: "Person"
	},
	
	{
		word: "Thoros",
		category: "Person"
	},
	
	{
		word: "Belwas",
		category: "Person"
	},
	
	{
		word: "Barristan",
		category: "Person"
	},
	
	{
		word: "Hizdar",
		category: "Person"
	},
	
	{
		word: "Summer",
		category: "Character"
	},
	
	{
		word: "Shaggydog",
		category: "Character"
	},
	
	{
		word: "Ghost",
		category: "Character"
	},
	
	{
		word: "Nymeria",
		category: "Character"
	},
	
	{
		word: "Lady",
		category: "Character"
	},
	
	{
		word: "Drogon",
		category: "Character"
	},
	
	{
		word: "Viserion",
		category: "Character"
	},
	
	{
		word: "Rhaegal",
		category: "Character"
	},
	
	{
		word: "Wunwun",
		category: "Character"
	},
	
	{
		word: "Ice",
		category: "Thing"
	},
	
	{
		word: "Others",
		category: "Nation or House"
	},
	
	{
		word: "Dothraki",
		category: "Nation or House"
	},
	
	{
		word: "Valyria",
		category: "Nation or House"
	},
	
	{
		word: "Targaryen",
		category: "Nation or House"
	},
	
	{
		word: "Stark",
		category: "Nation or House"
	},
	
	{
		word: "Manderly",
		category: "Nation or House"
	},
	
	{
		word: "Karstark",
		category: "Nation or House"
	},
	
	{
		word: "Tyrell",
		category: "Nation or House"
	},
	
	{
		word: "Martell",
		category: "Nation or House"
	},
	
	{
		word: "Arryn",
		category: "Nation or House"
	},
	
	{
		word: "Frey",
		category: "Nation or House"
	},
	
	{
		word: "Bolton",
		category: "Nation or House"
	},
	
	{
		word: "Reyne",
		category: "Nation or House"
	},
	
	{
		word: "Direwolf",
		category: "Thing"
	},
	
	{
		word: "Lannister",
		category: "Nation or House"
	},
	
	{
		word: "Riverrun",
		category: "Place"
	},
	
	{
		word: "Winterfell",
		category: "Place"
	},
	
	{
		word: "Dreadfort",
		category: "Place"
	},
	
	{
		word: "Mereen",
		category: "Place"
	},
	
	{
		word: "Sunspear",
		category: "Place"
	},
	
	{
		word: "Highgarden",
		category: "Place"
	},
	
	{
		word: "Dorne",
		category: "Place"
	},
	
	{
		word: "Astapor",
		category: "Place"
	},
	
	{
		word: "Braavos",
		category: "Place"
	},
	
	{
		word: "Naath",
		category: "Place"
	},
	
	{
		word: "Asshai",
		category: "Place"
	},
	
	{
		word: "Frostfangs",
		category: "Place"
	},
	
	{
		word: "Hardhome",
		category: "Place"
	},
	
	{
		word: "Skagos",
		category: "Place"
	},
	
	{
		word: "Lys",
		category: "Place"
	},
	
	{
		word: "Tyrosh",
		category: "Place"
	},
	
	{
		word: "Qarth",
		category: "Place"
	},
	
	{
		word: "Starfall",
		category: "Place"
	},
	
	{
		word: "Pyke",
		category: "Place"
	},
	
	{
		word: "Clegane",
		category: "Nation or House"
	},
	
	{
		word: "Tarth",
		category: "Nation or House"
	},
	
	{
		word: "Wildfire",
		category: "Thing"
	},
	
	{
		word: "Stoneheart",
		category: "Person"
	},
	
	{
		word: "Hodor",
		category: "Person"
	},
	
	{
		word: "Coldhands",
		category: "Person"
	},
	
	{
		word: "Mormont",
		category: "Nation or House"
	},
	
	{
		word: "Heartsbane",
		category: "Thing"
	},
	
	{
		word: "Oathkeeper",
		category: "Thing"
	},
	
	{
		word: "Dawn",
		category: "Thing"
	},
	
	{
		word: "Dragonstone",
		category: "Place"
	},
	
	{
		word: "Longclaw",
		category: "Thing"
	}
];