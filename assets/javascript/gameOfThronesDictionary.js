// all possible words to guess
// I decided to keep this as a global variable and pass it in to the game init function
// so you could reuse the code to play with different dictionaries, and different html files
// just in case you're not as big of a Game of Thrones geek as I am :)
var gameOfThronesDictionary = [
	{
		word: "Jaime",
		category: "Person",
		image: "https://s-media-cache-ak0.pinimg.com/originals/77/ee/c5/77eec5ed97be24a6b1bf27a285f665e6.jpg"
	},
	
	{
		word: "Cersei",
		category: "Person",
		image: "http://cdn.inquisitr.com/wp-content/uploads/2016/06/HBos-Game-of-Thrones-Season-6-Episode-10-The-Winds-of-Winter-Cersei-Lannister-sits-on-the-iron-throne-670x499.jpg"
	},
	
	{
		word: "Tyrion",
		category: "Person",
		image: "http://vignette1.wikia.nocookie.net/gameofthrones/images/6/61/The_children_Tyrion_with_Bow_S4.png/revision/latest?cb=20140616190514"
	},
	
	{
		word: "Blackfish",
		category: "Person",
		image: "https://metrouk2.files.wordpress.com/2016/05/tumblr_mlb447fprt1r9pspzo1_1280_zps47607f8c.jpg?quality=80&strip=all"
	},
	
	{
		word: "Sansa",
		category: "Person",
		image: "http://fullhdpictures.com/wp-content/uploads/2015/10/Game-of-Thrones-Sansa-Stark-Sophie-Turner.jpg"
	},
	
	{
		word: "Arya",
		category: "Person",
		image: "http://screenrant.com/wp-content/uploads/Arya-Stark-Maisie-Williams-Game-of-Thrones.jpg"
	},
	
	{
		word: "Craster",
		category: "Person",
		image: "http://www.royalgazette.com/storyimage/RG/20151130/ISLAND04/151139991/EP/1/1/EP-151139991.jpg&Logo=/images/rglogo1.gif&LogoXPos=5&LogoYPos=5&maxw=630&maxh=350"
	},
	
	{
		word: "Podrick",
		category: "Person",
		image: "http://0.media.dorkly.cvcdn.com/83/70/97758a8775a1e3741c72dd9819211b01-the-10-most-shocking-moments-in-game-of-thrones-this-season.jpg"
	},
	
	{
		word: "Grenn",
		category: "Person",
		image: "https://s-media-cache-ak0.pinimg.com/originals/70/8d/ce/708dcedbd11fa8644e35cf3ecb32aba1.jpg"
	},
	
	{
		word: "Brienne",
		category: "Person",
		image: "http://assets2.ignimgs.com/2014/04/04/brienne-game-of-thrones-1280ajpg-e322cc_1280w.jpg"
	},
	
	{
		word: "Renly",
		category: "Person",
		image: "http://flavorwire.files.wordpress.com/2012/04/renly-baratheon-1024.jpg"
	},
	
	{
		word: "Stannis",
		category: "Person",
		image: "http://s.newsweek.com/sites/www.newsweek.com/files/2016/03/17/stannis-baratheon-game-thrones.jpg"
	},
	
	{
		word: "Theon",
		category: "Person",
		image: "http://winteriscoming.net/wp-content/uploads/2015/08/Theon.jpg"
	},
	
	{
		word: "Ramsay",
		category: "Person",
		image: "http://screenrant.com/wp-content/uploads/Ramsay-Bolton-Faceoff-Against-Jon-Snow.jpg"
	},
	
	{
		word: "Hotpie",
		category: "Person",
		image: "https://queerty-prodweb.s3.amazonaws.com/wp/docs/2013/12/hot-pie-game-of-thrones.jpg"
	},
	
	{
		word: "Gendry",
		category: "Person",
		image: "http://static2.hypable.com/wp-content/uploads/2012/04/Game-of-Thrones21.png"
	},
	
	{
		word: "Thoros",
		category: "Person",
		image: "http://images6.fanpop.com/image/photos/33900000/Game-of-Thrones-game-of-thrones-33974743-500-244.jpg"
	},
	
	{
		word: "Belwas",
		category: "Person",
		image: "http://1.media.dorkly.cvcdn.com/83/24/893bfc039e61e086431c383b14aaa65c.jpg"
	},
	
	{
		word: "Barristan",
		category: "Person",
		image: "http://raleighco.com/wp-content/uploads/2015/05/image-686x385.jpg"
	},
	
	{
		word: "Hizdahr",
		category: "Person",
		image: "http://66.media.tumblr.com/3cc4d94bb7b63fc5ce798841b8b69da7/tumblr_n4czss5RxF1qis07wo4_1280.jpg"
	},
	
	{
		word: "Summer",
		category: "Character",
		image: "http://highlighthollywood.com/wp-content/uploads/2016/06/Summer-game-of-thrones-direwolves-30801103-1366-768.jpg"
	},
	
	{
		word: "Shaggydog",
		category: "Character",
		image: "http://media.comicbook.com/2016/05/shaggydog-1x10-182395.jpg"
	},
	
	{
		word: "Ghost",
		category: "Character",
		image: "http://vignette3.wikia.nocookie.net/gotascent/images/4/4d/Ghost.jpg/revision/latest?cb=20141007203733"
	},
	
	{
		word: "Nymeria",
		category: "Character",
		image: "http://www.gifwave.com/media/101359_tv-love-hbo-game-of-thrones-wolf_200s.gif"
	},
	
	{
		word: "Lady",
		category: "Character",
		image: "http://images5.fanpop.com/image/photos/30400000/Lady-Sansa-direwolf-game-of-thrones-lady-30440059-800-450.png"
	},
	
	{
		word: "Drogon",
		category: "Character",
		image: "http://vignette4.wikia.nocookie.net/gameofthrones/images/1/16/DrogonHD.jpg/revision/latest?cb=20140404211220"
	},
	
	{
		word: "Viserion",
		category: "Character",
		image: "https://i.ytimg.com/vi/IzoHaRqUZKg/maxresdefault.jpg"
	},
	
	{
		word: "Rhaegal",
		category: "Character",
		image: "http://vignette2.wikia.nocookie.net/gameofthrones/images/b/bd/Rhaegal.png/revision/latest?cb=20130630202131"
	},
	
	{
		word: "Rhaegar",
		category: "Character",
		image: "http://www.nerdcoremovement.com/wp-content/uploads/2015/05/Rhaegar-Targaryen-Game-of-Thrones-938x535.png"
	},
	
	{
		word: "Ice",
		category: "Thing",
		image: "http://i54.tinypic.com/10fb3b5.jpg"
	},
	
	{
		word: "Others",
		category: "Nation or House",
		image: "http://vignette2.wikia.nocookie.net/gameofthrones/images/c/c7/White_Walker_2x10.jpg/revision/latest?cb=20150307215545"
	},
	
	{
		word: "Dothraki",
		category: "Nation or House",
		image: "http://vignette2.wikia.nocookie.net/gameofthrones/images/b/b7/Flatlands.jpg/revision/latest?cb=20110326230544"
	},
	
	{
		word: "Valyria",
		category: "Nation or House",
		image: "http://vignette4.wikia.nocookie.net/gameofthrones/images/c/cc/Valyria.png/revision/latest?cb=20130416011006"
	},
	
	{
		word: "Targaryen",
		category: "Nation or House",
		image: "http://sweatypistol.com/wp-content/uploads/2015/04/Targaryen-Game-of-Thrones-Fan-Art.jpg"
	},
	
	{
		word: "Stark",
		category: "Nation or House",
		image: "http://cdn.pcwallart.com/images/game-of-thrones-wallpaper-stark-wallpaper-2.jpg"
	},
	
	{
		word: "Manderly",
		category: "Nation or House",
		image: "http://awoiaf.westeros.org/images/thumb/a/ad/Jake_Murray_manderlys_scheme.jpg/450px-Jake_Murray_manderlys_scheme.jpg"
	},
	
	{
		word: "Karstark",
		category: "Nation or House",
		image: "https://i.ytimg.com/vi/pU83upcPWRQ/maxresdefault.jpg"
	},
	
	{
		word: "Tyrell",
		category: "Nation or House",
		image: "http://i.lv3.hbo.com/assets/images/series/game-of-thrones/character/s5/olenna-tyrell-1920.jpg"
	},
	
	{
		word: "Martell",
		category: "Nation or House",
		image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQs_GjIN5MHcqiyocLJ6HflcOIdeAwgAm3LJ3Bsbs9e1uHNNS213w"
	},
	
	{
		word: "Arryn",
		category: "Nation or House",
		image: "http://vignette1.wikia.nocookie.net/hieloyfuego/images/c/cb/Jon_Arryn.JPG/revision/latest?cb=20120120150003"
	},
	
	{
		word: "Frey",
		category: "Nation or House",
		image: "http://winteriscoming.net/wp-content/uploads/2014/09/walderfrey2.jpg"
	},
	
	{
		word: "Bolton",
		category: "Nation or House",
		image: "http://winteriscoming.net/wp-content/uploads/2014/05/Red_wedding_roose_robb.png"
	},
	
	{
		word: "Reyne",
		category: "Nation or House",
		image: "https://lh4.googleusercontent.com/-HoaDNZ26k0c/UbHX0AhWwgI/AAAAAAAAAks/1utV7tSIzW8/w506-h750/GOT_Houses-Reyne_Lannister2.jpg"
	},
	
	{
		word: "Direwolf",
		category: "Thing",
		image: "http://sf.co.ua/13/06/wallpaper-2853292.jpg"
	},
	
	{
		word: "Lannister",
		category: "Nation or House",
		image: "http://www.youwall.com/wallpapers/201406/game-of-thrones---lannisters-wallpaper.jpg"
	},
	
	{
		word: "Riverrun",
		category: "Place",
		image: "http://vignette2.wikia.nocookie.net/gameofthrones/images/0/0c/Riverrun.png/revision/latest?cb=20150407004747"
	},
	
	{
		word: "Winterfell",
		category: "Place",
		image: "http://vignette2.wikia.nocookie.net/gameofthrones/images/b/b4/Winterfell_ravens.jpg/revision/latest?cb=20110606235917"
	},
	
	{
		word: "Dreadfort",
		category: "Place",
		image: "http://vignette2.wikia.nocookie.net/gameofthrones/images/2/2e/The-Dreadfort-402.jpg/revision/latest?cb=20150328213033"
	},
	
	{
		word: "Mereen",
		category: "Place",
		image: "https://s-media-cache-ak0.pinimg.com/originals/58/16/0d/58160d296393ea18c2f3e9f25d45e351.jpg"
	},
	
	{
		word: "Sunspear",
		category: "Place",
		image: "http://66.media.tumblr.com/c1c137843345f8bcca62f414c78f4437/tumblr_nhzvln4yoa1sh566ao1_1280.jpg"
	},
	
	{
		word: "Highgarden",
		category: "Place",
		image: "http://awoiaf.westeros.org/images/7/7e/Zippo514_Highgarden.jpg"
	},
	
	{
		word: "Dorne",
		category: "Place",
		image: "http://3g28wn33sno63ljjq514qr87.wpengine.netdna-cdn.com/wp-content/uploads/2016/01/Dorne_Season_5.png"
	},
	
	{
		word: "Astapor",
		category: "Place",
		image: "http://vignette2.wikia.nocookie.net/gameofthrones/images/b/b3/Walk_of_Punishment.png/revision/latest?cb=20130416090232"
	},
	
	{
		word: "Braavos",
		category: "Place",
		image: "http://winteriscoming.net/wp-content/uploads/2014/11/Titan-810x456.jpg"
	},
	
	{
		word: "Oldtown",
		category: "Place",
		image: "http://vignette4.wikia.nocookie.net/gameofthrones/images/7/7a/Oldtown6x10.png/revision/latest?cb=20160628182515"
	},
	
	{
		word: "Asshai",
		category: "Place",
		image: "https://i.ytimg.com/vi/NB8EFXkhE30/maxresdefault.jpg"
	},
	
	{
		word: "Frostfangs",
		category: "Place",
		image: "http://vignette3.wikia.nocookie.net/gameofthrones/images/b/b8/Ranging_206.jpg/revision/latest?cb=20120430080948"
	},
	
	{
		word: "Hardhome",
		category: "Place",
		image: "http://geeklyinc.com/wp-content/uploads/2015/06/Hardhome-arrives.jpg"
	},
	
	{
		word: "Skagos",
		category: "Place",
		image: "https://krassenka.files.wordpress.com/2012/04/skagos.jpg"
	},
	
	{
		word: "harrenhal",
		category: "Place",
		image: "http://66.media.tumblr.com/tumblr_m2ws2fZG001qis07wo1_1280.jpg"
	},
	
	{
		word: "Pentos",
		category: "Place",
		image: "http://uploads.worldofanno.de/images/1404/addon/artworks/Anno-1404-Venedig-Artwork-02.jpg"
	},
	
	{
		word: "Qarth",
		category: "Place",
		image: "https://s-media-cache-ak0.pinimg.com/736x/d8/5f/35/d85f35d31fbe5ea7197d8707df66c76a.jpg"
	},
	
	{
		word: "Starfall",
		category: "Place",
		image: "http://i58.tinypic.com/1zv6140.jpg"
	},
	
	{
		word: "Pyke",
		category: "Place",
		image: "http://vignette2.wikia.nocookie.net/gotrp/images/e/ea/Pyke-castle-game-of-thrones.jpg/revision/latest?cb=20140321235824"
	},
	
	{
		word: "Clegane",
		category: "Nation or House",
		image: "http://static4.techinsider.io/image/56f03eb252bcd029008b7c26-1090/cleganebowl%20the%20hound%20ertac%20altinoz%20deviantart%20.jpg"
	},
	
	{
		word: "Tarth",
		category: "Nation or House",
		image: "http://www.zicasso.com/sites/default/files/styles/original_scaled_down/public/photos/tour/croatia_dubrovnik_lokrum_island_and_nature_park.jpg"
	},
	
	{
		word: "Wildfire",
		category: "Thing",
		image: "http://vignette1.wikia.nocookie.net/gameofthrones/images/4/41/Wildfire_explosion.jpg/revision/latest?cb=20150328212702"
	},
	
	{
		word: "Stoneheart",
		category: "Person",
		image: "http://www.ew.com/sites/default/files/styles/tout_image_612x380/public/i/2014/06/12/LADY-STONEHEART_612x380_0.jpg?itok=oMjdUoQA"
	},
	
	{
		word: "Hodor",
		category: "Person",
		image: "https://hodor.us/images/hodorold.jpg"
	},
	
	{
		word: "Coldhands",
		category: "Person",
		image: "http://screenrant.com/wp-content/uploads/Colhands-Game-of-Thrones.jpg"
	},
	
	{
		word: "Mormont",
		category: "Nation or House",
		image: "http://vignette3.wikia.nocookie.net/gameofthrones/images/c/c4/JeorMormont_S2Promo.jpg/revision/latest?cb=20120323184206"
	},
	
	{
		word: "Heartsbane",
		category: "Thing",
		image: "https://www.ablogofthrones.com/wp-content/uploads/2016/07/Heartsbane-1920x1063.jpg"
	},
	
	{
		word: "Oathkeeper",
		category: "Thing",
		image: "https://heavyeditorial.files.wordpress.com/2016/06/screen-shot-2016-06-13-at-4-37-08-am.jpg?quality=65&strip=all&w=609"
	},
	
	{
		word: "Dawn",
		category: "Thing",
		image: "https://www.nerdist.com/wp-content/uploads/2014/03/Sword_of_the_Morning_Kali_Ciesemier_Game_of_Thrones_Winter_is_Coming_Ltd.jpg"
	},
	
	{
		word: "Dragonstone",
		category: "Place",
		image: "http://vignette4.wikia.nocookie.net/gameofthrones/images/f/fb/Dragonstone_(day).jpg/revision/latest?cb=20130501013126"
	},
	
	{
		word: "Longclaw",
		category: "Thing",
		image: "http://www.valyriansteel.com/shop/images/uploads/Longclaw%207.jpg"
	}
];