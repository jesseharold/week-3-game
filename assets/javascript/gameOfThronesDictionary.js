// all possible words to guess
// I decided to keep this as a global variable and pass it in to the game init function
// so you could reuse the code to play with different dictionaries, and different html files
// just in case you're not as big of a Game of Thrones geek as I am :)
var gameOfThronesDictionary = [
	{
		word: "Jaime",
		category: "Person",
		image: ""
	},
	
	{
		word: "Cersei",
		category: "Person",
		image: ""
	},
	
	{
		word: "Tyrion",
		category: "Person",
		image: ""
	},
	
	{
		word: "Blackfish",
		category: "Person",
		image: ""
	},
	
	{
		word: "Sansa",
		category: "Person",
		image: ""
	},
	
	{
		word: "Arya",
		category: "Person",
		image: ""
	},
	
	{
		word: "Craster",
		category: "Person",
		image: ""
	},
	
	{
		word: "Podrick",
		category: "Person",
		image: ""
	},
	
	{
		word: "Grenn",
		category: "Person",
		image: ""
	},
	
	{
		word: "Brienne",
		category: "Person",
		image: ""
	},
	
	{
		word: "Renly",
		category: "Person",
		image: ""
	},
	
	{
		word: "Stannis",
		category: "Person",
		image: ""
	},
	
	{
		word: "Theon",
		category: "Person",
		image: ""
	},
	
	{
		word: "Ramsay",
		category: "Person",
		image: ""
	},
	
	{
		word: "Hotpie",
		category: "Person",
		image: ""
	},
	
	{
		word: "Gendry",
		category: "Person",
		image: ""
	},
	
	{
		word: "Thoros",
		category: "Person",
		image: ""
	},
	
	{
		word: "Belwas",
		category: "Person",
		image: ""
	},
	
	{
		word: "Barristan",
		category: "Person",
		image: ""
	},
	
	{
		word: "Hizdar",
		category: "Person",
		image: ""
	},
	
	{
		word: "Summer",
		category: "Character",
		image: ""
	},
	
	{
		word: "Shaggydog",
		category: "Character",
		image: ""
	},
	
	{
		word: "Ghost",
		category: "Character",
		image: ""
	},
	
	{
		word: "Nymeria",
		category: "Character",
		image: ""
	},
	
	{
		word: "Lady",
		category: "Character",
		image: ""
	},
	
	{
		word: "Drogon",
		category: "Character",
		image: ""
	},
	
	{
		word: "Viserion",
		category: "Character",
		image: ""
	},
	
	{
		word: "Rhaegal",
		category: "Character",
		image: ""
	},
	
	{
		word: "Wunwun",
		category: "Character",
		image: ""
	},
	
	{
		word: "Ice",
		category: "Thing",
		image: ""
	},
	
	{
		word: "Others",
		category: "Nation or House",
		image: ""
	},
	
	{
		word: "Dothraki",
		category: "Nation or House",
		image: ""
	},
	
	{
		word: "Valyria",
		category: "Nation or House",
		image: ""
	},
	
	{
		word: "Targaryen",
		category: "Nation or House",
		image: ""
	},
	
	{
		word: "Stark",
		category: "Nation or House",
		image: ""
	},
	
	{
		word: "Manderly",
		category: "Nation or House",
		image: ""
	},
	
	{
		word: "Karstark",
		category: "Nation or House",
		image: ""
	},
	
	{
		word: "Tyrell",
		category: "Nation or House",
		image: ""
	},
	
	{
		word: "Martell",
		category: "Nation or House",
		image: ""
	},
	
	{
		word: "Arryn",
		category: "Nation or House",
		image: ""
	},
	
	{
		word: "Frey",
		category: "Nation or House",
		image: ""
	},
	
	{
		word: "Bolton",
		category: "Nation or House",
		image: ""
	},
	
	{
		word: "Reyne",
		category: "Nation or House",
		image: ""
	},
	
	{
		word: "Direwolf",
		category: "Thing",
		image: ""
	},
	
	{
		word: "Lannister",
		category: "Nation or House",
		image: ""
	},
	
	{
		word: "Riverrun",
		category: "Place",
		image: ""
	},
	
	{
		word: "Winterfell",
		category: "Place",
		image: ""
	},
	
	{
		word: "Dreadfort",
		category: "Place",
		image: ""
	},
	
	{
		word: "Mereen",
		category: "Place",
		image: ""
	},
	
	{
		word: "Sunspear",
		category: "Place",
		image: ""
	},
	
	{
		word: "Highgarden",
		category: "Place",
		image: ""
	},
	
	{
		word: "Dorne",
		category: "Place",
		image: ""
	},
	
	{
		word: "Astapor",
		category: "Place",
		image: ""
	},
	
	{
		word: "Braavos",
		category: "Place",
		image: ""
	},
	
	{
		word: "Naath",
		category: "Place",
		image: ""
	},
	
	{
		word: "Asshai",
		category: "Place",
		image: ""
	},
	
	{
		word: "Frostfangs",
		category: "Place",
		image: ""
	},
	
	{
		word: "Hardhome",
		category: "Place",
		image: ""
	},
	
	{
		word: "Skagos",
		category: "Place",
		image: ""
	},
	
	{
		word: "Lys",
		category: "Place",
		image: ""
	},
	
	{
		word: "Tyrosh",
		category: "Place",
		image: ""
	},
	
	{
		word: "Qarth",
		category: "Place",
		image: ""
	},
	
	{
		word: "Starfall",
		category: "Place",
		image: ""
	},
	
	{
		word: "Pyke",
		category: "Place",
		image: ""
	},
	
	{
		word: "Clegane",
		category: "Nation or House",
		image: ""
	},
	
	{
		word: "Tarth",
		category: "Nation or House",
		image: ""
	},
	
	{
		word: "Wildfire",
		category: "Thing",
		image: ""
	},
	
	{
		word: "Stoneheart",
		category: "Person",
		image: ""
	},
	
	{
		word: "Hodor",
		category: "Person",
		image: ""
	},
	
	{
		word: "Coldhands",
		category: "Person",
		image: ""
	},
	
	{
		word: "Mormont",
		category: "Nation or House",
		image: ""
	},
	
	{
		word: "Heartsbane",
		category: "Thing",
		image: ""
	},
	
	{
		word: "Oathkeeper",
		category: "Thing",
		image: ""
	},
	
	{
		word: "Dawn",
		category: "Thing",
		image: ""
	},
	
	{
		word: "Dragonstone",
		category: "Place",
		image: ""
	},
	
	{
		word: "Longclaw",
		category: "Thing",
		image: ""
	}
];