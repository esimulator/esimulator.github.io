/* Game Properties */
var leftBarNewsArray = [];
var score = 0;
var lastID = "id_0";
var activeScene = 0;
var date = new Date();

var ranks = [
    new Rank("rank1.png", 0, "Recruit", "You can do more!"),
    new Rank("rank2.png", 500, "Warrior", "You can do more!"),
    new Rank("rank3.png", 1000, "Master", "Keep it coming!"),
    new Rank("rank4.png", 2000, "Beast", "Thats's a good point!"),
    new Rank("rank5.png", 3000, "Champion", "Very interesting!"),
    new Rank("rank6.png", 3645, "Legend", "That's a real work of art!!")
];

var quotes = [
    new Quote("The global e-sports market is valued at 1.384 billion as of 2022. It is forecasted that this number will rise to 1.866 billion by 2025.", ""),
    new Quote("The e-sports audience size worldwide is 532.1 million.", ""),
    new Quote("Dota 2 is the leading e-sports game based on the prize pool.", ""),
    new Quote("Currently, there are 8.04 million active streamers on Twitch.", ""),
    new Quote("N0tail (Johan Sundstein) is the highest-earning e-sports player in the world.", ""),
    new Quote("More than 60% of e-sports fans are aged between 16 and 35.", ""),
    new Quote("The average age of an e-sports fan is 26.", ""),
    new Quote("Twitch has 2,512,345 concurrent viewers on average as of September 2022.", ""),
    new Quote("Twitch viewers viewed over 1.46 trillion minutes of videos on the streaming site in 2021.", ""),
    new Quote("The top-earning e-sports teams easily make over $90 million in a year.", ""),
    new Quote("Team Liquid (Europe) is the leading professional eSports team worldwide by total prize money won.", ""),
    new Quote("Scarlett (Sasha Hostyn) has earned $423.94 thousand to date and is the highest-earning female esports player in the world.", "")
];

var sceneArray = [
    new Scene(
        new Date(2022, 12 - 1, 9),
        [],
        [],
        storyBegin1
    ),
    
    new Scene(
        new Date(2023, 1 - 1, 9),
        ["dotaSkill"],
        ["dotaProject"],
        storySeptember92023
    ),
    
    new Scene(
        new Date(2023, 2 - 1, 19),
        ["starcraftSkill", "tourSkill"],
        ["starcraftProject"],
        storyOctober192024
    ),
    
    new Scene(
        new Date(2023, 3 - 1, 12),
        ["lolSkill"],
        ["lolProject"],
        storyNovember122025
    ),
    
    new Scene(
        new Date(2023, 4 - 1, 17),
        ["csSkill"],
        ["csProject"],
        storyMarch172026
    ),
    
    new Scene(
        new Date(2023, 5 - 1, 10),
        ["fortniteSkill"],
        ["fortniteProject"],
        storyNovember102027
    ),
    
    new Scene(
        new Date(2023, 6 - 1, 7),
        ["heartSkill"],
        ["heartProject"],
        storyJuly72028
    ),
    
    new Scene(
        new Date(2023, 7 - 1, 20),
        [],
        [],
        storyAugust202029
    ),
    
];

var projectsArray = [
    new Project("dotaProject", "dota.jpeg", "Dota 2 Match", "Powered by Intel, Predator Gaming, and Planet 9, the 2022 Dota Rampage League makes its grand in-person return in Japan. This year’s event will witness teams from 12 countries showcase their expertise in Dota 2. The prize pool for both tournaments is $40,000. Winners also get to bring home product packages from Acer, such as the APAC Predator League Shield and Predator gaming products.", 350, 3, "hide", ["dotaSkill"]),
    
    new Project("starcraftProject", "starcraft.jpeg", "Starcraft 2 Tournament", "BlessHack 2022: Atlanta brings two days’ worth of competitions, expos, and musical performances. Bring your own computer and join fellow players in StarCraft II.", 210, 2, "hide", ["starcraftSkill", "tourSkill"]),
    
    new Project("fortniteProject", "fort.png", "Fortnite Championship", "Amsterdam sets the stage for the grand Fortnite World Tour Final. 24 players from 16 regions across the globe will fight their way to win the Championship title and their share of the $100,000 prize pool. Qualifier matches will determine the first 21 players to take their slots in the Global finals. A last chance qualifier between 3rd place winners in North America, Western European Union, and Japan regional matches will take the remaining 3 slots in the finals.", 190, 2, "hide", ["fortniteSkill"]),
    
    new Project("csProject", "csgo.jpeg", "CS:GO Tournament", "The Guard Masters Espoo 2022 will bless the gaming community with its first Official ESL Pro Tour Affiliate Event for Counter Strike: Global Offensive (CS:GO). The event’s winner earns the opportunity to compete in the Play-In Stage of the IEM Katowice, a highly anticipated ESL event in Poland.<br><br>The tournament shall be split into Group and Playoffs stages, where the winner shall receive the IEM Katowice invite and prize money worth $40,000.", 200, 2, "hide", ["csSkill", "tourSkill"]),
    
    new Project("lolProject", "lol.jpeg", "League Of Legends Championship", "The GameForce in Brussels, Belgium, will host the Pro-Am Finals, the culmination of the Elite Series: League of Legends. With an €8,000 prize pool, 16 teams from the Elite Series and Benelux Regional League are invited to the Pro-Am Finals. The last two teams standing will fight to the victory for the coveted Pro-Am Champion title.", 310, 1, "hide", ["lolSkill"]),
    
    new Project("heartProject", "heart.jpeg", "Hearthstone Local Championship", "Watch the best teams around the globe take strategy to the next level at the Hearthstone World Championship! The Hearthstone World Championship will feature 16 players; four Grandmasters, four Chinese Gold Series, and eight Masters Tours winners go all out to win their share of the $50,000 prize pool. <br><br>The last four players standing will advance to single eliminations, from which a sole victor will rise to claim the Hearthstone World Champion title.", 430, 1, "hide", ["heartSkill", "tourSkill"])
];

var skillsArray = [
    new Skill("starcraftSkill", "starcraft.png", "Starcraft 2", 320, "hide", [
        new Question("1", "Which of the following units does NOT deal bonus damage against 'light' units?", "starcraft1.jpeg", 4, "Reaper", ["Oracle", "Adept", "Ghost", "Reaper"]),
        
        new Question("2", "Which of the following units has the highest supply cost?", "starcraft2.jpeg", 2, "Brood Lord", ["Liberator", "Brood Lord", "Oracle", "These are all the same supply cost."]),
        
        new Question("3", "Which of the following has the highest vitality (life + shields)?", "starcraft3.jpeg", 4, "Starport", ["Planetary Fortress", "Nexus", "Hatchery", "Starport"]),
        
        new Question("4", "Which race does NOT own a structure that takes up a 1x1 grid space?", "starcraft4.jpeg", 4, "All races have a 1x1 structure", ["Terran", "Zerg", "Protoss", "All races have a 1x1 structure"]),
        
        new Question("5", "Which of the following units does NOT have the 'psionic' tag?", "starcraft5.jpeg", 4, "Phoenix", ["Queen", "Mothership", "Warp Prism", "Phoenix"])
    ]),
    
    new Skill("dotaSkill", "dota.png", "DOTA 2", 300, "hide", [
        new Question("1", "When does the first night start?", "dota1.jpeg", 2, "At minute 5:00", ["At minute 4:00", "At minute 5:00", "At minute 6:00", "At minute 10:00"]),
        
        new Question("2", "Once placed, Observer Ward will last for how long?", "dota2.jpeg", 2, "6 minutes", ["8 minutes", "6 minutes", "5 minutes", "7 minutes"]),
        
        new Question("3", "How many heroes are currently playable in Dota 2?", "dota3.jpeg", 3, "123", ["118", "122", "123", "126"]),
        
        new Question("4", "Which Strength Hero has the highest Strength gain per level?", "dota4.jpeg", 1, "Centaur", ["Centaur", "Treant", "Doom", "Pudge"]),
        
        new Question("5", "Once you activate a Haste rune, your movement speed is set to...", "dota5.jpeg", 1, "550 MS", ["550 MS", "522 MS", "322 MS", "650 MS"])
    ]),
    
    new Skill("lolSkill", "lol.png", "League Of Legends", 170, "hide", [
        new Question("1", "At which game time does Baron Na'shor spawn?", "lol1.jpeg", 3, "20:00", ["15:00", "18:00", "20:00", "25:00"]),
        
        new Question("2", "Which of these dragons is responsible for granting increased magic resistance to the team when slain?", "lol2.jpeg", 1, "Mountain Drake", ["Mountain Drake", "Hextech Drake", "Infernal Drake", "Ocean Drake"]),
        
        new Question("3", "Which was the FIRST champion designed by Riot?", "lol3.jpeg", 4, "Singed", ["Sion", "Teemo", "Master Yi", "Singed"]),
        
        new Question("4", "How much gold do you start with in a Summoner's Rift match?", "lol4.jpeg", 3, "500", ["300", "400", "500", "600"]),
        
        new Question("5", "Which of these items no longer exists in the game?", "lol5.jpeg", 2, "Catalyst of Aeons", ["Bloodthirster", "Catalyst of Aeons", "The Collector", "Luden's Tempest"])
    ]),
    
    new Skill("csSkill", "csgo.png", "Counter-Strike", 120, "hide", [
        new Question("1", "How much people maximum per team in a competitive match?", "csgo1.jpeg", 2, "5", ["10", "5", "3", "4"]),
        
        new Question("2", "Which one of these maps is NOT a hostage rescue map?", "csgo2.jpeg", 3, "Vertigo", ["Militia", "Assault", "Vertigo", "Italy"]),
        
        new Question("3", "How much does the Dual Berettas cost?", "csgo3.jpeg", 4, "$400", ["$600", "$300", "$500", "$400"]),
        
        new Question("4", "What is it called when you walk slower because you were hit with a bullet?", "csgo4.jpeg", 3, "Tagging", ["Hitmarker", "Kill Feed", "Tagging", "Aimpuch"]),
        
        new Question("5", "When was Global Offensive released?", "csgo5.png", 2, "21 August 2012", ["21 August 2013", "21 August 2012", "25 August 2012", "19 August 2012"])
    ]),
    
    new Skill("fortniteSkill", "fort.png", "Fortnite", 290, "hide", [
        new Question("1", "What was the skin players received for reaching level 70 in Season 2?", "fort1.jpeg", 2, "Black Knight", ["Dark Prince", "Black Knight", "Dark King", "Black King"]),
        
        new Question("2", "Which of these locations is in the snow biome?", "fort2.png", 3, "Happy Hamlet", ["Loot Lake", "Snobby Shores", "Happy Hamlet", "Lonely Lodge"]),
        
        new Question("3", "What location replaced Wailing Woods?", "fort3.jpeg", 2, "Sunny Steps", ["Mega Mall", "Sunny Steps", "Junk Junction", "Lazy Lagoon"]),
        
        new Question("4", "How many Storm Flips can you carry in one slot at a time?", "fort4.jpeg", 2, "1", ["6", "1", "8", "2"]),
        
        new Question("5", "What does a player receive when they win their first Solo, Duos, or Squad game?", "fort5.jpeg", 2, "Umbrella", ["Special Pickaxe", "Umbrella", "Cape", "Contrails"]),
    ]),
    
    new Skill("heartSkill", "heart.png", "Hearthstone", 330, "hide", [
        new Question("1", "Using mind blast with a prophet velen and a malygos on the board does how much damage?", "heart1.jpeg", 3, "20", ["10", "15", "20", "25"]),
        
        new Question("2", "How many mana is frozen champion?", "heart2.jpeg", 3, "5", ["0", "2", "5", "10"]),
        
        new Question("3", "Will of mukla is identical to which card?", "heart3.jpeg", 1, "Healing touch", ["Healing touch", "Mark of the wild", "Mark of nature", "Savage roar"]),
        
        new Question("4", "If you use alexstrasza on opponent with 23hp, malygos on board, and eye for an eye, how much damage do you take?", "heart4.jpeg", 2, "0", ["13", "0", "16", "8"]),
        
        new Question("5", "How many inventions does Gelbin Mekkatorque have?", "heart5.jpeg", 4, "4", ["1", "2", "3", "4"]),
    ]),
    
    new Skill("tourSkill", "tour.png", "Tournaments", 300, "hide", [
        new Question("1", "When was the first eSports tournament?", "tour1.png", 3, "By most accounts, the first official eSports tournament took place on October 19, 1972, when Stanford University held the Intergalactic Spacewar Olympics for the game, Spacewar. Bruce Baumgart went home with the Free For All championship title and the top prize: a year's subscription to Rolling Stone magazine.", ["2002", "1982", "1972", "1992"]),
            
        new Question("2", "What was the top prize in the first League of Legends World Championship?", "tour2.jpeg", 2, "The first League of Legends World Championship was held in 2011 in Sweden. The event featured a $100,000 prize pool with the first place winners Fnatic taking home the top prize of $50,000. By the following year, the grand prize had jumped to $1 million.", ["$5,000", "$50,000", "$10,000", "$100,000"]),
            
        new Question("3", "What was the first college to offer eSports scholarships?", "tour3.jpeg", 4, "In 2014, Robert Morris University added eSports to its athletic program and began recruiting students to compete in League of Legends, offering qualified gamers scholarships of up to 50% tuition and 50% room and board. By 2019, there were over 115 colleges and universities offering eSports scholarships.", ["Bellevue University", "Georgia Southern University", "Texas Wesleyan University", "Robert Morris University"]),
            
        new Question("4", "How many unique viewers watched the 2019 League of Legends World Championship?", "tour4.jpeg", 4, "The 2019 League of Legends World Championship had over 100 million unique viewers, matching, for the first time, viewership of the Super Bowl (100.7 million).", ["50 Million", "10 Million", "1 Million", "100 Million"]),
            
        new Question("5", "How old was the youngest gamer to earn $1 million in eSports winnings?", "tour5.jpeg", 1, "Thiago Lapp, a.k.a. 'kinG', was just 13 years 106 days old when he crossed over the million dollar mark at the first Fortnite World Cup, on 28 July 2019.", ["13 years old", "14 years old", "12 years old", "15 years old"])
    ])
];








