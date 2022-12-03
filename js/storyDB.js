// 1
var storyBegin1 = [
    new Story(
        "id_1", 
        "Over the next 8 months, you must earn the maximum number of score points. <span class='spacer'></span>You can earn them by participation in the events, learning new games and making the right decisions as you esportsman and streamer carrier.", 
        [
            new Button("Let's Go!", "goToNextScene")
        ]
    )
];

// 2
var storySeptember92023 = [
    new Story(
        "id_plato", 
        "In Workshop you can find available events. If you have all necessary skills you will be able to start a project. <span class='spacer'></span>If some skill is missing, go to the Academy where you can replenish knowledge and then comeback to Workshop to start a cool project. <span class='spacer'></span>If this month you realized your full potential, then click Continue and go to the next month.", 
        [
            new Button("Workshop", "pr"),
            new Button("Academy", "ac"),
            new Button("Continue", "goToNextScene")
        ]
    )
];

// 3
var storyOctober192024 = [
    new Story(
        "id_1", 
        "You've created your Twitch channel and scheduled your first stream. But you need to attract the first viewers. How are we going to do it?", 
        [
            new Button("Partner video with another streamer", "id_2", 50),
            new Button("Advertising among friends", "id_2", 50),
            new Button("Cheat viewers", "id_3"),
        ]
    ),
    new Story(
        "id_2", 
        "The method worked and you got your first subscribers.", 
        [
            new Button("Continue", "id_plato")
        ]
    ),
    new Story(
        "id_3", 
        "It seems that this did not give any result. Only bots were watching you.", 
        [
            new Button("Continue", "id_plato")
        ]
    ),
    new Story(
        "id_plato", 
        "In Workshop you can find available events. If you have all necessary skills you will be able to start a project. <span class='spacer'></span>If some skill is missing, go to the Academy where you can replenish knowledge and then comeback to Workshop to start a cool project. <span class='spacer'></span>If this month you realized your full potential, then click Continue and go to the next month.", 
        [
            new Button("Workshop", "pr"),
            new Button("Academy", "ac"),
            new Button("Continue", "goToNextScene")
        ]
    )
];

// 4
var storyNovember122025 = [
    new Story(
        "id_1", 
        "You were offered an advertisement for some dubious brand. You doubt. But money is needed for new equipment.", 
        [
            new Button("Accept the offer", "id_2"),
            new Button("Refuse the offer", "id_3", 70)
        ]
    ),
    new Story(
        "id_2", 
        "You updated your equipment, but some subscribers unfollowed you and you received a lot of angry comments.", 
        [
            new Button("Continue", "id_plato")
        ]
    ),
    new Story(
        "id_3", 
        "You have retained your conscience and reputation with subscribers, but until you get a normal ad, you will have to stream for some time on old equipment.", 
        [
            new Button("Continue", "id_plato")
        ]
    ),
    new Story(
        "id_plato", 
        "In Workshop you can find available events. If you have all necessary skills you will be able to start a project. <span class='spacer'></span>If some skill is missing, go to the Academy where you can replenish knowledge and then comeback to Workshop to start a cool project. <span class='spacer'></span>If this month you realized your full potential, then click Continue and go to the next month.", 
        [
            new Button("Workshop", "pr"),
            new Button("Academy", "ac"),
            new Button("Continue", "goToNextScene")
        ]
    )
];

// 5
var storyMarch172026 = [
    new Story(
        "id_1", 
        "You were laughed at and criticized by another streamer.", 
        [
            new Button("Record response video", "id_3", 85),
            new Button("Ignore", "id_2", 15)
        ]
    ),
    new Story(
        "id_2", 
        "A real war unfolded between you, it brought a lot of stress, but your subscriber counter also increased noticeably.", 
        [
            new Button("Continue", "id_plato")
        ]
    ),
    new Story(
        "id_3", 
        "The tactic of ignoring worked, you didn't lose anything, but you didn't gain anything either.", 
        [
            new Button("Continue", "id_plato")
        ]
    ),
    new Story(
        "id_plato", 
        "In Workshop you can find available events. If you have all necessary skills you will be able to start a project. <span class='spacer'></span>If some skill is missing, go to the Academy where you can replenish knowledge and then comeback to Workshop to start a cool project. <span class='spacer'></span>If this month you realized your full potential, then click Continue and go to the next month.", 
        [
            new Button("Workshop", "pr"),
            new Button("Academy", "ac"),
            new Button("Continue", "goToNextScene")
        ]
    )
];

// 6
var storyNovember102027 = [
    new Story(
        "id_1", 
        "During the stream you donated a very large amount of money.", 
        [
            new Button("Scream with joy", "id_2", 50),
            new Button("Cry with happiness", "id_2", 50),
            new Button("Calmly thank", "id_2", 50),
        ]
    ),
    new Story(
        "id_2", 
        "The audience appreciated your reaction, that's what they expected from you.", 
        [
            new Button("Continue", "id_plato")
        ]
    ),
    new Story(
        "id_plato", 
        "In Workshop you can find available events. If you have all necessary skills you will be able to start a project. <span class='spacer'></span>If some skill is missing, go to the Academy where you can replenish knowledge and then comeback to Workshop to start a cool project. <span class='spacer'></span>If this month you realized your full potential, then click Continue and go to the next month.", 
        [
            new Button("Workshop", "pr"),
            new Button("Academy", "ac"),
            new Button("Continue", "goToNextScene")
        ]
    )
];

// 7
var storyJuly72028 = [
    new Story(
        "id_1", 
        "You were invited to the stream by a famous streamer. Right during the stream, you lost the Internet.", 
        [
            new Button("I'm visiting a friend and streaming at his house", "id_2", 50),
            new Button("Ask to reschedule the stream to another day", "id_3"),
            new Button("Continue streaming from phone", "id_2", 50)
        ]
    ),
    new Story(
        "id_2", 
        "You managed to get out of the situation and save the stream.", 
        [
            new Button("Continue", "id_plato")
        ]
    ),
    new Story(
        "id_3", 
        "You have been informed that they cannot yet tell you the exact date for the stream. Looks like you missed your opportunity.", 
        [
            new Button("Continue", "id_plato")
        ]
    ),
    new Story(
        "id_plato", 
        "In Workshop you can find available events. If you have all necessary skills you will be able to start a project. <span class='spacer'></span>If some skill is missing, go to the Academy where you can replenish knowledge and then comeback to Workshop to start a cool project. <span class='spacer'></span>If this month you realized your full potential, then click Continue and go to the next month.", 
        [
            new Button("Workshop", "pr"),
            new Button("Academy", "ac"),
            new Button("Continue", "goToNextScene")
        ]
    )
];

// 8
var storyAugust202029 = [
    new Story(
        "id_1", 
        "Time is coming to an end.<span class='spacer'></span>Next month you will know the result of your labors.", 
        [
            new Button("Continue", "getRank")
        ]
    )
];
