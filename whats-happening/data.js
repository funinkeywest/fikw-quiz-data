/* =====================================================================
   WHAT'S HAPPENING WHILE I'M THERE? — DATA
   Edit this block to change recommendations. The weekly update task
   rewrites EVENTS and UPDATED; everything else is Michele's to curate.
   ===================================================================== */

var UPDATED = "2026-11-24";

/* Areas: kw = Key West, lower = Lower Keys (Stock Island to Big Pine),
   middle = Middle Keys (Marathon), upper = Upper Keys (Key Largo, Islamorada) */

/* ---------- Bookable experiences (FareHarbor affiliate links) ----------
   fh: [company shortname, item id]  -> builds a marketplace link with ref=funinkw
   link: a custom booking link (used when not in the marketplace)
   t: tags used for matching
   pick: true = Michele has been on it / a Travel Partner
   post: slug of Michele's review on funinkeywest.com                     */
var EXPERIENCES = [
  /* --- Key West sunset --- */
  {id:"danger-ww", n:"Wind & Wine Sunset Sail", op:"Danger Charters", a:"kw", fh:["dangercharters",3994], t:["sunset","romantic","sail","adults"], pick:true, post:"danger-charters", b:"Michele's romantic pick: a relaxed sail with wine and cheese, no huge crowds."},
  {id:"fury-commotion", n:"Commotion on the Ocean: Live Music Sunset Sail", op:"Fury Water Adventures", a:"kw", fh:["furycat",2570], t:["sunset","party","music","friends","celebrate"], pick:true, post:"fury", b:"Michele's party pick: live music, drinks and a happy crowd as the sun goes down."},
  {id:"fury-champagne", n:"Champagne Sunset Cruise", op:"Fury Water Adventures", a:"kw", fh:["furycat",2571], t:["sunset","family","easy"], pick:true, post:"fury", b:"A big, stable catamaran and a glass of bubbly. Easy for every age."},
  {id:"chl-sunset", n:"Champagne Sunset Sail on Schooner America 2.0", op:"Classic Harbor Line", a:"kw", fh:["sail-keywest",26520], t:["sunset","romantic","sail","classic"], pick:true, post:"classic-harbor-line", b:"A gorgeous 1850s-style schooner under full sail. Pure postcard."},
  {id:"chl-fullmoon", n:"Full Moon Sail on Schooner America 2.0", op:"Classic Harbor Line", a:"kw", fh:["sail-keywest",26523], t:["sunset","romantic","sail","fullmoon"], pick:true, post:"classic-harbor-line", b:"Only runs around the full moon. If one lands in your trip, grab it."},
  {id:"tikis-kw", n:"Sunset Cruise on a Floating Tiki Bar", op:"Cruisin' Tikis Key West", a:"kw", fh:["cruisintikiskeywest",72344], t:["sunset","party","private","friends","celebrate","quirky"], pick:true, post:"cruisin-tikis", b:"A round, thatched-roof tiki boat for just your group. Bring your own drinks."},
  {id:"salty-sunset", n:"Evening Sunset Trip (pups welcome)", op:"Salty Paws Key West", a:"kw", fh:["saltypawskeywest",384470], t:["sunset","private","romantic","dogs","splurge"], pick:true, post:"salty-paws-charters-key-west", b:"A small private boat, a laid-back captain and the boat dogs. Michele's best-kept secret."},
  {id:"sebago-cat", n:"Catamaran Champagne Sunset Sail", op:"Sebago Watersports", a:"kw", fh:["keywestsebago",64485], t:["sunset","sail","family","easy"], b:"A classic catamaran sunset sail with champagne. Reliable and fun."},
  {id:"brightwild-sunset", n:"Key West Sunset Cruise", op:"Brightwild Adventures", a:"kw", fh:["brightwild-adventures",443635], t:["sunset","small","romantic"], b:"A small-group boat with a stellar reputation (4.9 stars, 1,000+ reviews)."},
  {id:"kwp-tiki", n:"Sunset Cruise on a Tiki Boat", op:"Key West Promotions", a:"kw", fh:["keywestpromotions",263983], t:["sunset","party","friends"], b:"Tiki-boat sunset with a party vibe."},
  {id:"lighthouse-sunset", n:"Key West Lighthouse Sunset Experience", op:"Key West Art & Historical Society", a:"kw", fh:["kwahs",432466], t:["sunset","land","history","romantic","hidden"], b:"Climb the 1848 lighthouse for sunset over Old Town. Most visitors never know you can."},

  /* --- Key West on the water --- */
  {id:"fury-h2o", n:"Ultimate Adventure H2.O (snorkel, parasail, kayak, more)", op:"Fury Water Adventures", a:"kw", fh:["furycat",2567], t:["snorkel","jetski","family","friends","thrill","allday"], pick:true, post:"fury", b:"A day on Fury's private island-style platform: parasail, snorkel, kayak, lunch."},
  {id:"fury-glass", n:"Glass Bottom Boat Reef Eco Tour", op:"Fury Water Adventures", a:"kw", fh:["furycat",2564], t:["reef","family","dry","easy"], pick:true, post:"the-best-key-west-glass-bottom-boat-tours", b:"See the reef without getting wet. Perfect for little ones and non-swimmers."},
  {id:"fury-dolphin", n:"Dolphin Watch & Snorkel Combo", op:"Fury Water Adventures", a:"kw", fh:["furycat",2568], t:["dolphins","snorkel","family"], pick:true, post:"fury", b:"Wild dolphins in the backcountry, then a snorkel stop."},
  {id:"fury-reggae", n:"Rum & Reggae Snorkel and Sunset Sail", op:"Fury Water Adventures", a:"kw", fh:["furycat",2581], t:["snorkel","sunset","party","friends"], pick:true, post:"fury", b:"Snorkel the reef, then stay out for sunset with rum punch and reggae."},
  {id:"sebago-snorkel", n:"Key West Afternoon Snorkel", op:"Sebago Watersports", a:"kw", fh:["keywestsebago",64475], t:["snorkel","family"], b:"The most-reviewed snorkel trip in Key West (8,000+ reviews)."},
  {id:"sebago-mimosa", n:"Mimosa Morning Snorkel Sail", op:"Sebago Watersports", a:"kw", fh:["keywestsebago",64477], t:["snorkel","sail","morning","adults"], b:"Calm morning water, a sail out to the reef and mimosas on the way home."},
  {id:"safari-dolphin", n:"Dolphin Watching & Snorkeling Tour", op:"Dolphin Safari", a:"kw", fh:["safaricharters",56506], t:["dolphins","snorkel","family","small"], b:"Small boat, wild dolphins, 4.9 stars."},
  {id:"snuba", n:"SNUBA: Go Beyond Snorkeling", op:"Snuba of Key West", a:"kw", fh:["snuba-keywest",488795], t:["snorkel","dive","thrill"], b:"Breathe underwater from a raft-mounted air line. No certification needed."},
  {id:"southpoint", n:"Afternoon 2-Tank Reef Dive", op:"Southpoint Divers", a:"kw", fh:["southpointdiverskw",22879], t:["dive"], b:"For certified divers: two reef sites in one afternoon."},
  {id:"brightwild-sandbar", n:"Key West Sandbar Adventure", op:"Brightwild Adventures", a:"kw", fh:["brightwild-adventures",475963], t:["sandbar","friends","family"], b:"Wade in turquoise water out at the sandbar. 4.9 stars."},
  {id:"coastal-sandbar", n:"Famous Sandbar Trip", op:"Key West Coastal Charters", a:"kw", fh:["keywestcoastalcharters",445498], t:["sandbar","private","friends","splurge"], b:"Private sandbar day for your group, 5-star reviews."},
  {id:"salty-sandbar", n:"Local Sandbar Trip (pups welcome)", op:"Salty Paws Key West", a:"kw", fh:["saltypawskeywest",384456], t:["sandbar","private","dogs","splurge"], pick:true, post:"salty-paws-charters-key-west", b:"Michele's favorite way to spend a lazy day on the water."},
  {id:"fury-sandbar", n:"Island Adventure Sandbar Tour", op:"Fury Water Adventures", a:"kw", fh:["furycat",2575], t:["sandbar","family"], pick:true, post:"fury", b:"Sandbar wading, shelling and backcountry views."},
  {id:"lazydog-kayak", n:"2 Hour Kayak Eco Tour", op:"Lazy Dog", a:"kw", fh:["lazydog",3871], t:["kayak","nature","family"], b:"Paddle the mangroves with a naturalist. Great for first-timers."},
  {id:"lazydog-yoga", n:"PaddleYoga Class", op:"Lazy Dog", a:"kw", fh:["lazydog",3876], t:["kayak","wellness","hidden"], b:"Yoga on a paddleboard. Yes, you might fall in. That's the fun."},
  {id:"splash-lagoon", n:"Luminous Lagoon Night Kayak", op:"Key West Jet Ski Adventures / Splash", a:"kw", fh:["adventuresonwater",536906], t:["kayak","night","hidden","romantic"], b:"A guided night paddle with lit-up kayaks. Something most visitors never do."},
  {id:"sunset-jetski", n:"Jet Ski Tour Around the Island", op:"Sunset Watersports", a:"kw", fh:["sunsetwatersportskeywest",263753], t:["jetski","thrill","friends"], b:"Ride all the way around Key West. 24,000+ reviews."},
  {id:"sunset-parasail", n:"Parasailing in Downtown Key West", op:"Sunset Watersports", a:"kw", fh:["sunsetwatersportskeywest",263756], t:["jetski","thrill","family"], b:"Float high over the harbor. Leaves right from downtown."},
  {id:"fly-island", n:"Key West Island Air Tour", op:"Fly-KeyWest", a:"kw", fh:["fly-keywest",249359], t:["air","hidden","splurge","romantic"], b:"See the reef, the sandbars and Old Town from a small plane."},
  {id:"finz-tortugas", n:"Dry Tortugas Public Charter", op:"Finz Dive Charters", a:"kw", fh:["finzdivecenter",443592], t:["tortugas","snorkel","allday"], b:"A small-boat alternative to the ferry: Fort Jefferson, snorkeling and fewer people."},
  {id:"laidback-tortugas", n:"Dry Tortugas Public Trip", op:"Laid Back Key West", a:"kw", fh:["laidbackkeywest",618226], t:["tortugas","allday","small"], b:"Small-group trip to Fort Jefferson. 5-star reviews."},
  {id:"goodtimes-tortugas", n:"12hr Private Dry Tortugas Day Trip", op:"Good Times Key West", a:"kw", fh:["goodtimeskeywest",399618], t:["tortugas","private","splurge","allday"], b:"Your own boat to the Dry Tortugas. A once-in-a-lifetime day."},
  {id:"cowboy-shared", n:"Shared Fishing Charter (half day)", op:"Cowboy/Cowgirl Sportfishing", a:"kw", fh:["keywestfishing-charters2",467409], t:["fishing"], b:"Join a shared boat and fish for your dinner. Many restaurants will cook your catch."},
  {id:"cowboy-private", n:"Private Offshore Fishing Charter", op:"Cowboy/Cowgirl Sportfishing", a:"kw", fh:["keywestfishing-charters2",464690], t:["fishing","private","splurge"], b:"A 36-foot sportfisher for your group."},
  {id:"makeitso", n:"Private Half-Day Charter", op:"Make It So Charters", a:"kw", fh:["makeitsocharters",48300], t:["private","sandbar","snorkel","splurge","romantic"], pick:true, post:"make-it-so-charters", b:"Michele's Travel Partner for a private day built around what you love."},

  /* --- Key West on land --- */
  {id:"kwft-southernmost", n:"Southernmost Food Tour", op:"Key West Food Tours", a:"kw", fh:["keywestfoodtours",89521], t:["foodtour","firsttime"], pick:true, post:"key-west-food-tours-2", b:"Michele's first-ever food tour and still a favorite. Come hungry."},
  {id:"kwft-cocktail", n:"Craft Cocktail Crawl", op:"Key West Food Tours", a:"kw", fh:["keywestfoodtours",89529], t:["cocktails","foodtour","friends","adults"], pick:true, post:"key-west-food-tours-2", b:"Cocktails with a story at every stop."},
  {id:"kwft-seaport", n:"Historic Seaport Food Tour", op:"Key West Food Tours", a:"kw", fh:["keywestfoodtours",89528], t:["foodtour","seafood"], pick:true, post:"the-seafood-tour-key-west", b:"Seafood and stories along the harbor."},
  {id:"kwft-hemingway", n:"Insider's Hemingway Experience", op:"Key West Food Tours", a:"kw", fh:["keywestfoodtours",177339], t:["foodtour","history","cocktails","adults"], pick:true, post:"key-west-food-tours-2", b:"Papa's haunts, Papa's drinks and the stories behind them."},
  {id:"donut-tour", n:"Southernmost Sweet Treats Tour", op:"Underground Donut Tour", a:"kw", fh:["undergrounddonutour",624612], t:["foodtour","sweets","family"], b:"A dessert crawl. 5 stars from 1,400+ reviews."},
  {id:"tt-pie", n:"Key Lime Pie Tour: Historic Seaport Stroll", op:"Tart Tales with Kim Stamps", a:"kw", fh:["tarttales",529202], t:["foodtour","sweets","pie","hidden","family"], pick:true, post:"kim-stamps-key-west", b:"From finance degrees to key lime pie: Kim walks you through the Seaport, one slice and one story at a time."},
  {id:"tt-iwitness", n:"iWITNESS True Crime Tour", op:"Tart Tales with Kim Stamps", a:"kw", fh:["tarttales",669356], t:["history","quirky","hidden","night","ghost"], pick:true, post:"kim-stamps-key-west", b:"Key West's wildest true-crime stories, told on the streets where they happened."},
  {id:"tt-prohibition", n:"Sloppy Joe's Prohibition Tour", op:"Tart Tales with Kim Stamps", a:"kw", fh:["tarttales",771430], t:["history","cocktails","hidden","adults"], pick:true, post:"kim-stamps-key-west", b:"New! Rumrunners, speakeasies and Hemingway's bar during Prohibition."},
  {id:"hemingway-food", n:"Hemingway Food & Walking Tour", op:"Hemingway in Key West Tours", a:"kw", fh:["hemingwayinkeywesttours",287631], t:["foodtour","history"], b:"Walk in Hemingway's footsteps with tastings along the way."},
  {id:"buffett-tour", n:"Jimmy Buffett Tour", op:"Hemingway in Key West Tours", a:"kw", fh:["hemingwayinkeywesttours",310401], t:["history","music","hidden"], b:"Margaritaville before it was a brand. A must for Parrotheads."},
  {id:"lloyds", n:"Lloyd's Tropical Bike Tour", op:"Lloyd's Tropical Bike Tour", a:"kw", fh:["lloydstropicalbiketour",26345], t:["bike","nature","history","hidden"], pick:true, post:"lloyds-tropical-bike-tour", b:"Lloyd shows you hidden lanes, tropical fruit and island life. A local legend."},
  {id:"keylime-bike", n:"Guided Bike Tour of Old Town", op:"Key Lime Bike Tours", a:"kw", fh:["keylimebiketours",407103], t:["bike","history","firsttime"], b:"Old Town's highlights on two wheels. 4.9 stars."},
  {id:"kwwt", n:"Key West Walking Tours", op:"Florida Keys Ventures", a:"kw", link:"https://fareharbor.com/embeds/book/floridakeysventures/?sheet=213697&asn=funinkw&full-items=yes&flow=247840", t:["history","firsttime","walk"], pick:true, post:"key-west-walking-tours", b:"Walk Old Town with a storyteller. Michele's Travel Partner."},
  {id:"bahama-village", n:"Historic Bahama Village & Hemingway Heritage Walk", op:"Florida Keys Ventures", a:"kw", fh:["floridakeysventures",203230], t:["history","walk","hidden"], b:"The neighborhood many visitors walk right past."},
  {id:"pedicab", n:"Conch Republic Tiki Pedicab Experience", op:"Kokomo Cabs", a:"kw", fh:["floridakeysventures",217057], t:["history","quirky","easy"], b:"A tour by tiki pedicab. Delightfully Key West."},
  {id:"utk-welcome", n:"Private Welcome to Key West Walking Tour", op:"Up the Keys", a:"kw", fh:["upthekeys",236621], t:["history","private","firsttime"], pick:true, post:"up-the-keys-tours", b:"A personal orientation from a Travel Partner Michele trusts."},
  {id:"utk-tiki", n:"Florida Keys Tiki Bar Crawl", op:"Up the Keys", a:"road", fh:["upthekeys",109118], t:["cocktails","daytrip","friends","hidden"], pick:true, post:"up-the-keys-tours", b:"The best tiki bars up the chain, and someone else drives."},
  {id:"utk-daytrip", n:"Key Largo/Islamorada to Key West Private Day Tour", op:"Up the Keys", a:"upper", fh:["upthekeys",383593], t:["daytrip","private","history"], pick:true, post:"up-the-keys-tours", b:"Staying up the Keys? See Key West in a day without the drive stress."},
  {id:"robert", n:"Robert the Doll After Dark", op:"Sloan's Key West Ghost Tours", a:"kw", fh:["robertthedollexperience",256633], t:["ghost","night","quirky"], pick:true, post:"robert-the-doll-experience-in-key-west-civil-war-fort", b:"Meet the island's most famous (cursed) doll inside a Civil War fort."},
  {id:"firehouse", n:"America's Most Haunted Firehouse", op:"Sloan's Key West Ghost Tours", a:"kw", fh:["robertthedollexperience",608429], t:["ghost","night","hidden"], b:"An investigation inside a genuinely spooky old firehouse."},
  {id:"ufo", n:"Captain Heather's Key West UFO Tour", op:"Sloan's Key West Ghost Tours", a:"kw", fh:["robertthedollexperience",517182], t:["quirky","hidden","night"], b:"Key West has UFO stories. Of course it does."},
  {id:"ghosthunt", n:"The Original Ghost Hunt", op:"Haunted Key West", a:"kw", fh:["keywestghosthunt",11364], t:["ghost","night","walk"], pick:true, post:"haunted-key-west", b:"The original Key West ghost tour. Michele's Travel Partner."},
  {id:"haunted-crawl", n:"Bone Island Haunted Pub Crawl", op:"Key West Promotions", a:"kw", fh:["keywestpromotions",203673], t:["ghost","pubcrawl","night","adults"], b:"Ghost stories and a drink at every stop."},
  {id:"pubcrawl", n:"Original Key West Pub Crawl", op:"Key West Promotions", a:"kw", fh:["keywestpromotions",203633], t:["pubcrawl","night","friends","celebrate","adults"], post:"key-west-pub-crawls", b:"Skip the lines and meet people. Great for groups."},
  {id:"diva", n:"Diva Royale Drag Queen Show", op:"Diva Royale", a:"kw", fh:["divaroyale",357898], t:["drag","night","celebrate","lgbtq"], b:"A drag brunch-and-show favorite for birthdays and bachelorettes."},
  {id:"scavenger", n:"Bachelor/ette Private Scavenger Hunt", op:"Southernmost Scavenger Hunt", a:"kw", fh:["keywesthunt",167087], t:["celebrate","friends","quirky"], b:"Silly, competitive and perfect for a party."},
  {id:"lighthouse", n:"Key West Lighthouse & Keeper's Quarters", op:"Key West Art & Historical Society", a:"kw", fh:["kwahs",432437], t:["history","museum","family"], b:"88 steps to the best view on the island."},
  {id:"martello", n:"Fort East Martello Museum", op:"Key West Art & Historical Society", a:"kw", fh:["kwahs",432448], t:["history","museum","ghost","hidden"], b:"A Civil War fort, folk art, and Robert the Doll's home base."},
  {id:"tw-museum", n:"Tennessee Williams Museum", op:"Key West Art & Historical Society", a:"kw", fh:["kwahs",432452], t:["history","museum","theater","hidden"], b:"Pairs beautifully with a night at the theater."},

  /* --- Key West tours & attractions through Michele's Trusted Tours page (funinkeywest.com/conch) --- */
  {id:"trolley", n:"Old Town Trolley Tour", op:"Historic Tours of America", a:"kw", link:"https://funinkeywest.com/conch", t:["history","firsttime","family","easy"], b:"Hop on and off all day. The easiest way to get your bearings on day one."},
  {id:"conchtrain", n:"Conch Tour Train", op:"Historic Tours of America", a:"kw", link:"https://funinkeywest.com/conch", t:["history","firsttime","family","easy","classic"], post:"conch-train-tours", b:"An island classic since 1958. Sit back and let the stories roll."},
  {id:"conchlights", n:"Conch Tour Train Holiday Lights", op:"Historic Tours of America", a:"kw", link:"https://funinkeywest.com/conch", m:[11,12,1], t:["family","night","history","easy"], b:"Old Town's holiday lights from the train. Seasonal and magical."},
  {id:"gng", n:"Ghosts & Gravestones", op:"Historic Tours of America", a:"kw", link:"https://funinkeywest.com/conch", t:["ghost","night","family"], b:"A spooky trolley tour that ends inside a haunted mansion."},
  {id:"truman", n:"Harry S. Truman Little White House", op:"Truman Little White House", a:"kw", link:"https://funinkeywest.com/conch", t:["history","museum"], post:"truman-white-house", b:"Where a president ran the country in flip-flops."},
  {id:"aquarium", n:"Key West Aquarium", op:"Historic Tours of America", a:"kw", link:"https://funinkeywest.com/conch", t:["family","museum","nature","dry"], post:"key-west-aquarium-history", b:"Touch tanks, shark feedings and a wild history. Great on a hot or rainy afternoon."},
  {id:"shipwreck", n:"Key West Shipwreck Treasure Museum", op:"Historic Tours of America", a:"kw", link:"https://funinkeywest.com/conch", t:["history","museum","family"], b:"The wreckers who made Key West rich, and the lookout tower to prove it."},
  {id:"butterfly", n:"Key West Butterfly & Nature Conservatory", op:"Key West Butterfly Conservatory", a:"kw", link:"https://funinkeywest.com/conch", t:["nature","family","romantic","hidden"], post:"the-key-west-butterfly-nature-conservatory-a-magical-place", b:"Walk through a tropical forest full of butterflies and flamingos."},
  {id:"cookingshow", n:"Key West Cooking Show: Dinner and a Show", op:"Key West Cooking Show", a:"kw", link:"https://funinkeywest.com/conch", t:["cookingshow","special","family","foodtour"], pick:true, b:"A chef-storyteller cooks a multi-course island meal in a retro 1950s kitchen. Upstairs at 291 Front St. Closed Sundays."},
  {id:"cocktail-history", n:"Cocktail Class: Key West History Through Craft Cocktails", op:"Key West Cooking Show", a:"kw", link:"https://funinkeywest.com/conch", t:["cocktails","history","hidden","adults"], b:"Shake five cocktails and learn the island story behind each one."},
  {id:"rum-class", n:"Cocktail Class: Rum Revelations", op:"Key West Cooking Show", a:"kw", link:"https://funinkeywest.com/conch", t:["cocktails","rum","adults","friends"], b:"Mix, shake and sip your way through premium rums."},
  {id:"pie-class", n:"Key Lime Pie Quick-Class", op:"Key West Cooking Show", a:"kw", link:"https://funinkeywest.com/conch", t:["pie","sweets","family","easy"], b:"Thirty minutes to the real-deal key lime pie. You'll want the recipe."},
  {id:"partyboat", n:"Gulfstream Party Boat Fishing (half day)", op:"Gulfstream", a:"kw", link:"https://funinkeywest.com/conch", t:["fishing","family","easy"], b:"An affordable, family-friendly way to try deep-sea fishing."},

  /* --- Lower Keys --- */
  {id:"clear-sugarloaf", n:"Clear Kayak Tour of Sugarloaf Key", op:"Get Up and Go Kayaking", a:"lower", fh:["getupandgokayaking-thekeys",208079], t:["kayak","nature","family","hidden"], b:"See-through kayaks over the mangroves. 5 stars, 1,300+ reviews."},
  {id:"snuba-looe", n:"SNUBA Looe Key Diving & Sandbar Charter", op:"Snuba of Key West", a:"lower", fh:["snuba-keywest",579434], t:["snorkel","dive","sandbar"], b:"Looe Key is one of the prettiest reefs in the Keys."},
  {id:"everwater", n:"Private Shelling & Snorkeling Tour", op:"Everwater Charters", a:"lower", fh:["everwatercharters",536610], t:["snorkel","private","nature","hidden"], b:"Quiet backcountry islands and shelling."},

  /* --- Middle Keys --- */
  {id:"mermaid-sandbar", n:"Marathon Sandbar Adventure", op:"Marathon Mermaid", a:"middle", fh:["marathonmermaid",182246], t:["sandbar","private","friends","family"], b:"5 stars from 4,000+ reviews. The Middle Keys favorite."},
  {id:"mermaid-sunset", n:"Seven Mile Bridge Sunset Cruise", op:"Marathon Mermaid", a:"middle", fh:["marathonmermaid",182251], t:["sunset","private","romantic"], b:"Sunset framed by the Seven Mile Bridge."},
  {id:"mermaid-sombrero", n:"Sombrero Lighthouse Reef Snorkel", op:"Marathon Mermaid", a:"middle", fh:["marathonmermaid",290499], t:["snorkel","private"], b:"Snorkel the reef under Sombrero Lighthouse."},
  {id:"fury-marathon", n:"Marathon Snorkel Adventure", op:"Fury Water Adventures", a:"middle", fh:["furycat",760907], t:["snorkel","family"], pick:true, post:"things-to-do-in-marathon", b:"Fury now runs trips out of Marathon too."},
  {id:"sky-bridge", n:"Seven Mile Bridge Air Tour", op:"Sky Tours", a:"middle", fh:["skytoursmiami",740794], t:["air","splurge","hidden","romantic"], b:"Fly over the Seven Mile Bridge in a small plane."},
  {id:"lagoon", n:"Rhum Runner at The Lagoon, Grassy Key", op:"The Lagoon", a:"middle", fh:["ridethelagoon",443004], t:["thrill","family","hidden"], b:"Ropes, ziplines and water fun on Grassy Key."},
  {id:"clear-marathon", n:"Clear Kayak Eco-Tour", op:"I Can See Clear Kayaking", a:"middle", fh:["clearkayaking",756162], t:["kayak","nature","family"], b:"Clear kayaks over seagrass and mangroves."},

  /* --- Upper Keys --- */
  {id:"gbb-night", n:"Glass Bottom Boat Sunset into Night Reef Tour", op:"Glass Bottom Boats of Islamorada", a:"upper", fh:["glassbottomboatsofislamorada",477653], t:["reef","sunset","night","dry","hidden","family"], b:"Watch the reef wake up at night through the glass."},
  {id:"clear-isla", n:"Clear Kayak SUNSET Tour", op:"I Can See Clear Kayaking", a:"upper", fh:["clearkayaking",372193], t:["kayak","sunset","romantic","nature"], b:"Paddle into an Islamorada sunset in a see-through kayak."},
  {id:"fkft-golf", n:"Golf Cart Islamorada Food Tour", op:"Florida Keys Food Tour", a:"upper", fh:["flkeysfoodtour",444073], t:["foodtour","quirky"], b:"Eat your way through Islamorada by golf cart."},
  {id:"tarpon-history", n:"Tasting Florida Keys History", op:"Hungry Tarpon", a:"upper", fh:["hungrytarpon",654800], t:["foodtour","history","hidden"], b:"Food and stories at Robbie's, home of the tarpon feeding."},
  {id:"spray-sandbar", n:"Islamorada Sandbar Experience", op:"Spray Watersports", a:"upper", fh:["spraywatersports",709137], t:["sandbar","friends","party"], b:"The famous Islamorada sandbar. 5 stars."},
  {id:"isla-private", n:"Islamorada Sandbar Private Charter", op:"Islamorada Private Charters", a:"upper", fh:["islamoradaprivatecharters",339943], t:["sandbar","private","splurge"], b:"Your own captain for a sandbar day."},
  {id:"paddle-manatee", n:"Mangroves & Manatees Guided Eco-Tour", op:"PADDLE! the Florida Keys", a:"upper", fh:["paddlethefloridakeys",64150], t:["kayak","nature","family"], b:"Paddleboard or kayak with a naturalist. 1,500 reviews, 4.9 stars."},
  {id:"bird-center", n:"Wild Bird Center Sanctuary Tour", op:"Florida Keys Wild Bird Center", a:"upper", fh:["floridakeyswildbirdcenter",659623], t:["nature","family","hidden"], b:"Pelicans, owls and herons up close at a rescue sanctuary."},
  {id:"tikis-kl", n:"Sunset Cruise on a Floating Tiki Bar", op:"Cruisin' Tikis Key Largo", a:"upper", fh:["cruisintikiskeylargo",153817], t:["sunset","party","private","friends"], pick:true, post:"cruisin-tikis", b:"The Key Largo tiki boat. 5 stars, 1,800 reviews."},
  {id:"stewys", n:"Private Sunset Cruise", op:"Stewy's Boat Charters", a:"upper", fh:["captainstewys",355953], t:["sunset","private","romantic","dolphins"], b:"Small private boat, dolphin sightings likely."},
  {id:"kl-princess", n:"Glass-Bottom Boat Cruise", op:"Key Largo Princess", a:"upper", fh:["keylargoprincess",26236], t:["reef","dry","family"], b:"John Pennekamp's reef through the glass."},
  {id:"kl-snorkel", n:"Two Site Snorkel & Scuba Adventure", op:"Key Largo Dive Center", a:"upper", fh:["keylargodivecenter",349784], t:["snorkel","dive"], b:"Key Largo is the dive capital. Start here."},
  {id:"dolphin-life", n:"Dolphin Life Day Pass", op:"Dolphin Life", a:"upper", fh:["dpmmr",661809], t:["dolphins","family"], b:"A full day with marine mammals in Key Largo."},

  /* --- Event-only bookings (shown only when the date falls in a trip) --- */
  {id:"chl-parade", ev:true, n:"Lighted Boat Parade aboard America 2.0", op:"Classic Harbor Line", a:"kw", fh:["sail-keywest",26529], t:[], b:""},
  {id:"chl-xmaseve", ev:true, n:"Christmas Eve Sunset Sail", op:"Classic Harbor Line", a:"kw", fh:["sail-keywest",426894], t:[], b:""},
  {id:"chl-xmas", ev:true, n:"Christmas Brunch Sail", op:"Classic Harbor Line", a:"kw", fh:["sail-keywest",121441], t:[], b:""},
  {id:"chl-nye", ev:true, n:"New Year's Eve Champagne Sunset Sail", op:"Classic Harbor Line", a:"kw", fh:["sail-keywest",426904], t:[], b:""},
  {id:"chl-nyd", ev:true, n:"New Year's Day Champagne Sunset Sail", op:"Classic Harbor Line", a:"kw", fh:["sail-keywest",555004], t:[], b:""},
  {id:"chl-valentine", ev:true, n:"Valentine's Day Champagne Sunset Sail", op:"Classic Harbor Line", a:"kw", fh:["sail-keywest",26522], t:[], b:""}
];

/* ---------- Michele's picks that aren't bookable tours ----------
   c: category; a: area; t: tags; post: slug on funinkeywest.com     */
var PICKS = [
  {n:"Red Shoe Island Bistro", c:"dinner", a:"kw", where:"411 Petronia St", t:["special","romantic","lgbtq"], b:"Hands down, the best dinner in Key West. Order the yellowtail snapper and the lavender cheesecake. Dinner Mon–Sat; reserve ahead.", book:"Reserve on OpenTable"},
  {n:"Bar 1", c:"happyhour", a:"kw", where:"291 Front St, upstairs", t:["happyhour","cocktails","pie"], b:"A great happy hour, creative cocktails and, in Michele's opinion, the best slice of key lime pie on the island. Closed Sundays."},
  {n:"Key West First Legal Rum Distillery", c:"drinks", a:"kw", where:"105 Simonton St", t:["cocktails","rum","history","hidden"], post:"key-west-first-legal-rum-distillery-the-experience", b:"The best piña colada on the island, made with rum distilled on site in a former Coca-Cola plant. Take the free tour."},
  {n:"Doing Work Coffee", c:"coffee", a:"kw", where:"335 Duval St, Suite C", t:["coffee"], b:"The southernmost coffee roaster in the US. Go early and ask about the beans."},
  {n:"Wicked Lick", c:"sweets", a:"kw", where:"335 Duval St", t:["sweets","family"], b:"Small-batch ice cream made to order with liquid nitrogen. Coffee in the morning, ice cream after dinner."},
  {n:"Kaya Island Eats", c:"dinner", a:"kw", where:"618 Duval St (Key West EmPOURium)", t:["cheap","music","pie"], b:"Come hungry; the key lime pie is amazing. Fridays the Fabulous Spectrelles sing from 7 to 8."},
  {n:"The Green Parrot", c:"drinks", a:"kw", where:"601 Whitehead St", t:["music","dive","local"], post:"green-parrot-key-west-florida", b:"The best dive bar in Key West, with live music most nights. A locals' institution."},
  {n:"Schooner Wharf Bar", c:"happyhour", a:"kw", where:"202 William St", t:["happyhour","music","local","waterfront"], post:"schooners-wharf", b:"A last little piece of old Key West, right on the harbor."},
  {n:"Half Shell Raw Bar", c:"happyhour", a:"kw", where:"231 Margaret St", t:["happyhour","seafood","waterfront"], post:"half-shell-raw-bar-my-new-favorite-happy-hour", b:"Oysters and cold drinks on the water at the Historic Seaport."},
  {n:"Alonzo's Oyster Bar", c:"happyhour", a:"kw", where:"Historic Seaport", t:["happyhour","seafood"], post:"alonzos-key-west", b:"One of Michele's longtime favorite happy hours."},
  {n:"Louie's Backyard Afterdeck", c:"drinks", a:"kw", where:"700 Waddell Ave", t:["sunset","romantic","waterfront","special"], post:"louies-backyard-a-slice-of-key-west-paradise", b:"Drinks on the water with the island's prettiest view. Worth a special night."},
  {n:"The Chart Room", c:"drinks", a:"kw", where:"Pier House, 1 Duval St", t:["hidden","local","cocktails"], post:"chart-room", b:"A tiny, legendary bar with free hot dogs and big stories."},
  {n:"Hogfish Bar & Grill", c:"dinner", a:"lower", where:"Stock Island", t:["cheap","local","seafood","waterfront"], post:"3-ways-hogfish-key-west-keeps-old-key-west-alive-and-well", b:"Old Key West on a working waterfront. Get the hogfish sandwich."},
  {n:"Geiger Key Marina", c:"dinner", a:"lower", where:"Geiger Key", t:["cheap","local","hidden","waterfront"], post:"geiger-key", b:"An old Florida fish camp. Sunday barbecue is a local tradition."},
  {n:"Cuban Coffee Queen", c:"coffee", a:"kw", where:"284 Margaret St", t:["coffee","cheap","cuban"], post:"cuban-coffee-queen", b:"Café con leche and a Cuban mix before a day on the water."},
  {n:"Sandy's Cafe", c:"coffee", a:"kw", where:"1026 White St", t:["coffee","cheap","cuban","local"], post:"sandys-key-west", b:"A walk-up window for Cuban coffee and a famous Cuban mix."},
  {n:"El Siboney", c:"dinner", a:"kw", where:"900 Catherine St", t:["cheap","cuban","family"], post:"el-siboney", b:"Big plates of family-style Cuban food."},
  {n:"Kermit's Key West Key Lime Shoppe", c:"sweets", a:"kw", where:"200 Elizabeth St", t:["pie","sweets","family"], post:"kermits-key-west-key-lime-shoppe", b:"Pie on a stick, chocolate-dipped and frozen."},
  {n:"Hobo's Cafe", c:"dinner", a:"upper", where:"Key Largo", t:["cheap","family"], post:"hobos-cafe", b:"The classic first stop on the drive down."},
  {n:"Robbie's of Islamorada", c:"hidden", a:"upper", where:"Islamorada", t:["family","nature","hidden"], b:"Feed the giant tarpon off the dock. Kids (and grown-ups) love it."},
  {n:"Seven Mile Bridge & Pigeon Key", c:"hidden", a:"middle", where:"Marathon", t:["history","nature","hidden"], post:"things-to-do-in-marathon", b:"Walk or bike the Old Seven Mile Bridge out toward historic Pigeon Key."},
  {n:"Bahia Honda State Park", c:"hidden", a:"lower", where:"Big Pine area", t:["beach","nature"], post:"best-beach-in-key-west", b:"Often called the prettiest beach in the Keys."},
  {n:"USCGC Ingham", c:"hidden", a:"kw", where:"Truman Waterfront", t:["history","sunset","hidden"], post:"uscgc-ingham-great-place-to-visit-and-enjoy-sunset", b:"A WWII cutter that doubles as a quiet sunset spot."},
  {n:"Fort Zachary Taylor", c:"hidden", a:"kw", where:"End of Southard St", t:["beach","history","snorkel","family"], post:"fort-zachary-taylor-2", b:"Beach, snorkeling off the rocks and a Civil War fort, all in one stop."}
];

/* Michele's guides to link by interest */
var GUIDES = {
  happyhour:["best-happy-hours-in-key-west","The best happy hours in Key West"],
  cocktails:["key-west-bars-and-the-must-try-cocktails","A cocktail crawl through Key West"],
  rum:["best-rum-bars-in-key-west","Rum 101 and the go-to rum spots"],
  pie:["best-key-lime-pie-in-key-west","The best key lime pie in Key West"],
  coffee:["best-cuban-coffee-in-key-west","The best Cuban coffee in Key West"],
  cheap:["where-the-locals-eat-in-key-west","Where the locals eat"],
  special:["best-dinner-in-key-west","The best dinner in Key West"],
  breakfast:["best-breakfast-in-key-west","31 best breakfast spots"],
  music:["best-live-music-in-key-west","The best live music in Key West"],
  sunsetland:["best-sunset-in-key-west","The best places to watch sunset"],
  family:["key-west-kid-activities","Kid-friendly activities in Key West"],
  free:["free-things-to-do-in-key-west","Top free things to do"],
  unusual:["unusual-things-to-do-in-key-west","25 unusual things to do"],
  couples:["things-for-couples-to-do-in-key-west","25 romantic things for couples"],
  snorkel:["best-place-to-snorkel-in-key-west","The best snorkeling in Key West"],
  upper:["things-to-do-in-key-largo-at-night","The best things to do in Key Largo"],
  islamorada:["best-snorkeling-in-islamorada","17 best snorkeling spots in Islamorada"],
  middle:["things-to-do-in-marathon","Things to do in Marathon"],
  dogs:["dog-friendly-beaches-in-the-keys","Dog-friendly beaches and activities"],
  festivals:["florida-keys-festivals","Florida Keys festivals and events"],
  ghost:["key-west-ghost-tours-2","The best Key West ghost tours"],
  waterfront:["best-waterfront-restaurants-in-key-west","Best waterfront restaurants"]
};

/* ---------- Dated events ----------
   s/e: start/end (YYYY-MM-DD); a: area; c: festival|theater|music|food|art|holiday|sports|tours
   tix: true = buy tickets ahead; src: where the date was confirmed      */
var EVENTS = [
  {s:"2026-12-03", e:"2026-12-17", n:"It's a Wonderful Life: A Live Radio Play", a:"kw", c:"theater", v:"Waterfront Playhouse, Mallory Square", b:"A 1940s radio studio on stage, with live sound effects and a jazz trio.", url:"https://waterfrontplayhouse.org", tix:true, src:"keysweekly.com"},
  {s:"2026-12-05", n:"Key West Holiday Parade", a:"kw", c:"holiday", time:"7 pm", v:"Duval Street", b:"Old Town lights up for the island-style holiday parade.", src:"keywesttourist.com"},
  {s:"2026-12-08", e:"2027-01-02", n:"Shooting Star", a:"kw", c:"theater", v:"Red Barn Theatre, 319 Duval St (rear)", b:"Key West favorites Dave Bootle and Lauren Thompson star in the holiday mainstage show.", url:"https://redbarntheatre.com", tix:true, src:"keysweekly.com"},
  {s:"2026-12-11", n:"Holiday Concert & Bazaar", a:"kw", c:"holiday", time:"5–8 pm", v:"Key West Museum of Art & History (Custom House)", b:"Music and holiday shopping on the museum's sweeping porch.", url:"https://www.kwahs.org", src:"kwahs.org"},
  {s:"2026-12-12", n:"Schooner Wharf Lighted Boat Parade", a:"kw", c:"holiday", time:"6 pm", v:"Historic Seaport", b:"Decorated boats parade through a dark harbor. Free, and one of the best nights of December. Bad weather pushes it to Sunday.", book:"chl-parade", src:"keysweekly.com"},
  {s:"2026-12-13", n:"Key West Triathlon", a:"kw", c:"sports", v:"Higgs Beach", b:"Swim, bike and run along the shoreline. Fun to cheer on, too.", src:"keywesttourist.com"},
  {s:"2026-12-29", e:"2026-12-30", n:"Key West Home Tours (December)", a:"kw", c:"tours", time:"1–4 pm", v:"Old Town", b:"Peek inside four private historic homes plus the Oldest House, with docents at each.", url:"https://www.oirf.org/home-tours", tix:true, src:"oirf.org"},
  {s:"2026-12-31", n:"New Year's Eve in Key West", a:"kw", c:"holiday", v:"Duval Street", b:"Key West rings in the new year with its famous midnight 'drops' up and down Duval. Book dinner early.", src:"keysweekly.com"},
  {s:"2026-12-24", n:"Christmas Eve Sunset Sail", a:"kw", c:"holiday", v:"Schooner America 2.0, Historic Seaport", b:"Toast Christmas Eve under sail.", book:"chl-xmaseve", src:"FareHarbor"},
  {s:"2026-12-25", n:"Christmas Day on the Water", a:"kw", c:"holiday", v:"Schooner America 2.0, Historic Seaport", b:"A Christmas brunch sail or a Christmas Day sunset sail. A lovely way to spend the holiday.", book:"chl-xmas", src:"FareHarbor"},
  {s:"2026-12-31", n:"New Year's Eve on the Harbor", a:"kw", c:"holiday", v:"Historic Seaport", b:"A champagne sunset sail, then the Dockside Bash on the schooner, or a tiki-boat party at Schooner Wharf.", book:"chl-nye", src:"FareHarbor"},
  {s:"2027-01-01", n:"New Year's Day Champagne Sunset Sail", a:"kw", c:"holiday", v:"Schooner America 2.0", b:"Start the year the Key West way.", book:"chl-nyd", src:"FareHarbor"},
  {s:"2027-01-05", e:"2027-01-09", n:"Christine Mild: For the Love of Country", a:"kw", c:"theater", v:"Red Barn Theatre", b:"Only a handful of shows, and hers sell out year after year.", url:"https://redbarntheatre.com", tix:true, src:"keysweekly.com"},
  {s:"2027-01-07", e:"2027-01-10", n:"Key West Literary Seminar", a:"kw", c:"festival", v:"Around town", b:"Four days of celebrated authors, readings and receptions.", url:"https://www.kwls.org/seminar/", tix:true, src:"kwls.org"},
  {s:"2027-01-07", e:"2027-01-09", n:"Blanche & Beyond", a:"kw", c:"theater", v:"Waterfront Playhouse", b:"Tennessee Williams at the height of his career, in the town he called home.", url:"https://waterfrontplayhouse.org", tix:true, src:"Michele's January guide"},
  {s:"2027-01-02", n:"Keller Williams", a:"kw", c:"music", time:"8 pm", v:"Key West Theater, 512 Eaton St", url:"https://thekeywesttheater.com", tix:true, src:"Michele's January guide"},
  {s:"2027-01-12", n:"Jim Messina", a:"kw", c:"music", time:"8 pm", v:"Key West Theater", url:"https://thekeywesttheater.com", tix:true, src:"Michele's January guide"},
  {s:"2027-01-15", e:"2027-01-17", n:"Key West Half Marathon & Runfest", a:"kw", c:"sports", v:"Island-wide", b:"13.1 miles at sea level. Expect road closures on race morning.", src:"keysweekly.com"},
  {s:"2027-01-19", e:"2027-02-20", n:"Dracula: A Comedy of Terrors", a:"kw", c:"theater", v:"Red Barn Theatre", b:"Billed as the funniest, campiest night of theater in Key West.", url:"https://redbarntheatre.com", tix:true, src:"keysweekly.com"},
  {s:"2027-01-20", n:"Yacht Rock Revue", a:"kw", c:"music", time:"7:30 pm", v:"Coffee Butler Amphitheater", tix:true, src:"Michele's January guide"},
  {s:"2027-01-22", e:"2027-01-23", n:"Key West Home Tours (January)", a:"kw", c:"tours", time:"1–4 pm", v:"Old Town", b:"Four private historic homes plus the Oldest House. Proceeds help preserve Old Town.", url:"https://www.oirf.org/home-tours", tix:true, src:"oirf.org"},
  {s:"2027-01-25", n:"The Jayhawks", a:"kw", c:"music", time:"8 pm", v:"Key West Theater", url:"https://thekeywesttheater.com", tix:true, src:"Michele's January guide"},
  {s:"2027-01-26", e:"2027-01-30", n:"Mile 0 Fest (10th anniversary)", a:"kw", c:"music", v:"Truman Waterfront & venues island-wide", b:"Five days of Red Dirt, Americana and Texas country. Badges go fast.", url:"https://mile0fest.com", tix:true, src:"ticketnews.com"},
  {s:"2027-01-27", e:"2027-01-31", n:"Key West Food & Wine Festival", a:"kw", c:"food", v:"Around town", b:"Wine strolls down Duval, chef dinners and tastings. Every event is ticketed, 21+, and most sell out.", url:"https://keywestfoodandwinefestival.com", tix:true, src:"keysweekly.com"},
  {s:"2027-02-12", e:"2027-02-13", n:"Key West Home Tours (February)", a:"kw", c:"tours", time:"1–4 pm", v:"Old Town", url:"https://www.oirf.org/home-tours", tix:true, src:"oirf.org"},
  {s:"2027-02-13", e:"2027-02-14", n:"Florida Keys Seafood Festival", a:"kw", c:"food", v:"Truman Waterfront Park", b:"Stone crab, Key West pink shrimp, lobster and live music, all supporting local fishermen.", src:"floridarambler.com"},
  {s:"2027-02-14", n:"Valentine's Day Champagne Sunset Sail", a:"kw", c:"holiday", v:"Schooner America 2.0", b:"The most romantic sunset of the year, under sail.", book:"chl-valentine", src:"FareHarbor"},
  {s:"2027-02-20", e:"2027-02-21", n:"Key West Art & Craft Festival", a:"kw", c:"art", v:"Truman Waterfront Park", b:"Key West's biggest outdoor art show. Free.", src:"festivalnet.com"},
  {s:"2027-02-20", e:"2027-02-21", n:"Gigantic Nautical Flea Market", a:"upper", c:"festival", v:"Founders Park, Islamorada", b:"Treasure hunting, boat gear and island finds.", src:"keysweekly.com"},
  {s:"2027-03-02", e:"2027-03-20", n:"Liberation", a:"kw", c:"theater", v:"Red Barn Theatre", b:"Bess Wohl's Pulitzer and Tony winner, in Key West's most intimate playhouse.", url:"https://redbarntheatre.com", tix:true, src:"visitfloridakeys.com"},
  {s:"2027-03-12", e:"2027-03-13", n:"Key West Home Tours (March)", a:"kw", c:"tours", time:"1–4 pm", v:"Old Town", url:"https://www.oirf.org/home-tours", tix:true, src:"oirf.org"},
  {s:"2027-03-13", e:"2027-03-14", n:"Marathon Seafood Festival", a:"middle", c:"food", v:"Marathon", b:"The Middle Keys fishing fleet cooks its own catch. Family-friendly with a kids' zone.", src:"keysweekly.com"},
  {s:"2027-03-30", e:"2027-04-24", n:"Short Attention Span Theatre", a:"kw", c:"theater", v:"Red Barn Theatre", b:"Short, punchy, funny plays. A perennial favorite.", url:"https://redbarntheatre.com", tix:true, src:"visitfloridakeys.com"},
  {s:"2027-04-28", e:"2027-05-02", n:"Key West Songwriters Festival", a:"kw", c:"music", v:"Venues all over Old Town", b:"Five days of mostly free shows from the people who wrote the hits. Dates expected; confirm when announced.", url:"https://keywestsongwritersfestival.com", tent:true, src:"marquesa.com"}
];

/* ---------- Things that happen every week (or month) ----------
   d: days of week (0=Sun); nth: [week-of-month, weekday]; m: months active (1-12), blank = all year */
var WEEKLY = [
  {n:"Sunset Celebration at Mallory Square", a:"kw", d:[0,1,2,3,4,5,6], time:"Sunset", b:"Street performers, food carts and the whole island watching the sun go down.", t:["sunset","free","family"]},
  {n:"Drag at 801 Bourbon", a:"kw", d:[0,1,2,3,4,5,6], time:"9 & 11 pm", b:"The world-famous 801 Girls, upstairs. More comedy than glamour. Bring tip money.", t:["drag","night","lgbtq"]},
  {n:"Glow Hours at Hugh's View", a:"kw", d:[1,2], time:"At sunset", b:"The rooftop of The Studios of Key West, 533 Eaton St: free admission, cash bar, live music and views from the Atlantic to the Gulf.", t:["sunset","free","music","hidden"]},
  {n:"Monday Night Jazz Jam", a:"kw", d:[1], time:"8:30–11:30 pm", b:"Pianist Larry Smith hosts at historic American Legion Post 168, 803 Emma St, where James Brown and B.B. King once played.", t:["music","hidden","local"]},
  {n:"Trivia Night at the Key West Cooking Show", a:"kw", d:[1], time:"6–8:30 pm", b:"Food, fun and friendly competition, upstairs at 291 Front St.", t:["night","friends"]},
  {n:"Key West Farmers Market", a:"kw", d:[4], time:"1–6 pm", b:"Local food, makers, live music and harbor breezes at Truman Waterfront Park.", t:["market","free","family","local"]},
  {n:"The Fabulous Spectrelles at Kaya", a:"kw", d:[5], time:"7–8 pm", b:"So much fun! At Kaya Island Eats inside the Key West EmPOURium, 618 Duval. Confirm on their Facebook.", t:["music","night","hidden"]},
  {n:"First Friday on Fleming", a:"kw", nth:[1,5], time:"6–9 pm", b:"A monthly block party of island art and community on Fleming Street.", t:["art","free","local"]},
  {n:"Morada Way Art Walk", a:"upper", nth:[3,4], time:"6–9 pm", b:"Islamorada's arts district opens up on the third Thursday of each month.", t:["art","free","local"]}
];

/* Seasons and what's fresh */
var SEASONS = [
  {n:"Stone crab season", from:"10-15", to:"05-01", b:"Order the claws with mustard sauce. They're only in season now."},
  {n:"Spiny lobster season", from:"08-06", to:"03-31", b:"Fresh Florida lobster is on menus all over the Keys."}
];

/* Average daily high (°F) by month in Key West */
var HIGHS = [75,76,79,82,86,89,90,90,89,85,80,77];
