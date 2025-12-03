import ProjectData from '@/data/ProjectData.ts'

export default [
	new ProjectData("project-7", "Cave of Sorts", "img/projects/caveofsorts-title-full.png", `
	<div class="paragraph">
		<strong>Cave of Sorts</strong> is the culmination of 5 years of studying, a mobile puzzler game I made all by myself, art and everything. Summarized neatly as "Towers of hanoi crossed with Tetris".
		<br/>
		<br/>In it, you catch wind about an ancient treasure buried deep in a cave of some sort (haha), said to be guarded by a fierce dragon and decide to investigate. But oh no, the cave is cursed! As soon as you step inside, a large boulder comes down from the ceiling, blocking your way out.
		<br/>Luckily for you, however, the dragon is not that fierce at all. His name is Smog and his flame has long since been extinguished. Now he remains in this cave to guard the treasure left to him by his late master.
		<br/>There is still hope, however. Should his treasure be sorted by colour, it might just weaken the curse enough for you to make your escape.
		<br/>
		<br/>(There'll be some screenshots here when I figure out how to get portrait images to play nice, bear with me 🐻)
		<br/>
		<br/>The game was initially set to release after my graduation. After delays both within and outside of my control, I'm aiming to have the game publically playable before the end of the year. No promises :^)
	</div>
	`, "#e48246", true),
    new ProjectData("project-2", "Butterfly Shimai", "img/projects/ButterflyShimaiTeaser.jpg", `
    <div class="paragraph">
        <strong>Butterfly Shimai</strong> is a game I worked on during my internship at Wanted5Games, <a href="https://www.crazygames.com/game/garden-bloom" target="_blank">available for play</a> on most modern browsers. The objective is to clear the grid by uniting wings of a similar type.
        <br/>This was the game I had by far the most involvement in during my time at Wanted5Games. I was tasked with working on systems like: 
		<br/>- Matching the butterfly wings
		<br/>- Playing animations 
		<br/>- Logic for starting/ending levels
		<br/>- Collecting/using powerups
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/w_GnFibjxHU?si=8SbThr5_kO9yHCxZ" frameborder="0" allowfullscreen></iframe>
    </div>
	
	<div class="paragraph">
	(Video courtesy of RoundGames on YouTube).
	</div>
	
	<div class="paragraph">
	Given the choice between Garden Bloom and this one, Shimai wins quite easily. It turned out beautifully and I'm proud of having contributed to it. The artists at Wanted5Games knocked this one out of the park.
	</div>

    <div class="paragraph">
    <div class="notice">
        Playable in the browser (WebGL) on <a href="https://www.crazygames.com/game/butterfly-shimai" target="_blank">crazygames.com</a>. (Do let me know if this link ever breaks, yeah? Cheers.)
    </div>
    </div>
    `, "#5a78af"),
    new ProjectData("project-3", "Garden Bloom", "img/projects/garden-bloom-game.webp", `
    <div class="paragraph">
        <strong>Garden Bloom</strong> is another game I worked on during my time at Wanted5Games, <a href="https://www.crazygames.com/game/garden-bloom" target="_blank">available for play</a> on most modern browsers. This one is a typical match 3 game where you're tasked with restoring your grandpa's old garden to its former glory.
        <br/>My contributions for this game were numerous. Things like:
		<br/> - Refactoring UI code (I rewrote the entire "You Win!" screen)
		<br/> - Implementing animations requested by the design lead
		<br/> - Fixing bugs
    </div>
	
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/4.png" alt="Screenshot of game" />
        <img class="pc-screenshot" src="img/projects/2.png" alt="Screenshot of game" />
        <img class="pc-screenshot" src="img/projects/1.png" alt="Screenshot of game" />
        <img class="pc-screenshot" src="img/projects/3.png" alt="Screenshot of game" />
    </div>
	
	<div class="paragraph">
	Perhaps a fun anecdote from working on this project; PlayCanvas as an engine looks a lot like Unity, but projects inside of it can be edited by multiple people at the same time. Not unlike how multiple people can work together on the same document in Google Docs. I remember seeing the art team flying around the Garden scene, represented by a bunch of faceless camera objects, busy trying to make it look nice, while I was working on a UI task within the same scene.
	<br/>
	There was something sort of profound about that sense of working on something together as a team, seeing it slowly come together.
	</div>
	
    <div class="paragraph">
        <div class="notice">
        Playable in the browser (WebGL) on <a href="https://www.crazygames.com/game/garden-bloom" target="_blank">crazygames.com</a>. (Do let me know if this link ever breaks, yeah? Cheers.)
        </div>
    </div>
    `, "#383838"),
	new ProjectData("project-1", "Top Down Roguelike", "img/projects/characterswapgame.png", 
    `
    <div class="paragraph">
    Not so much a game, but more of a testing ground for making pixel art and dabbling with various programming concepts, something I'd been working on whenever inspiration struck.
	<br/>As a result it's quite hard to demo in a cohesive way, so some screenshots will have to suffice.
    </div>
	
	<div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/roguelike-game1.png" alt="Screenshot of game" />
        <img class="pc-screenshot" src="img/projects/roguelike-game2.png" alt="Screenshot of game" />
        <img class="pc-screenshot" src="img/projects/roguelike-game3.png" alt="Screenshot of game" />
        <img class="pc-screenshot" src="img/projects/roguelike-game4.png" alt="Screenshot of game" />
    </div>
	
	<div class="paragraph">
	What quickly became clear to me when working on this project is that you can't just start working on something without a clear vision and expect something good to pop out the other end.
	<br/>
	<br/>I'd been playing various roguelike games around the time I started this project, which ended up being the vague direction for it. I doodled a little wizard, knight, rogue and archer, because that's what you expect in a dungeon crawler, right? Turns out that when your game consists of a bunch of half-remembered genre conventions you don't end up with a compellingly designed game. Who knew?
	<br/>
	<br/>I do still genuinely adore these six-or-so little characters I drew, however. I'll think of a good way to use them in future, I'm sure.
	</div>
    `, "#23bd69"),
	new ProjectData("project-5", "Level Generation System", "img/projects/generated-map.png", `
    <div class="paragraph">
        This is a system I created for generating levels using various algorithms during the gameplay engineering semester at the HvA. It works by letting users "construct" templates for generating levels by adding layers, each representing a specific operation.
		<br/>
		<br/>This was perhaps the most fun I've had in a regular semester during my time at the HvA. Everyone was tasked with picking a subject that interested them in game development and pitching a project for it. Seeing it all come together, everyone picking something that they had genuine passion for was really neat to see.
		<br/>
	</div>
	
	<img class="full-img" src="img/projects/pcg-old.png" alt="Old version of pcg system showing off the general idea." />
	<div class="paragraph">
	This is what it looked like early on, with the panel on the left adding "layers" and the right panel adjusting what those layers do.
	</div>
	
	<img class="full-img" src="img/projects/pcg-layersystem.png" alt="Old version of pcg system showing off the general idea." />
	<div class="paragraph">
	Later on I expanded on this system by letting users create "recipes" for the generation system.
	</div>
	
	<div class="paragraph">	
        For a detailed write-up on the process of building this system check out this blog post I wrote about it for the HvA's website. Everyone else's projects are on there as well.
        <br/><a href="https://summit-2223-sem2.game-lab.nl/2023/04/11/level-generation-system-for-topdown-2d-games/" target="_blank">hva-game-lab.nl/level-generation-system-for-topdown-2d-games/</a>
		<br/>(Website is sometimes offline. If it doesn't load please try again later. It's sadly outside of my control.)
    </div>
    `, "#e48246"),
	new ProjectData("project-6", "Galaxy Conqueror", "img/projects/GalaxyConqueror.png", 
	`
	<div class="paragraph">
	Ah, humble beginnings. This was the first game I'd ever written code for. Written in Java, and running inside of a program named Processing, it was my first year's project at the HvA. I worked on it alongside 5 others, 4 of which dropped out of college before the year was over. As to be expected of a first ever game, it's pretty generic and poorly designed, but it's fun to look back on all the same.
	</div>
    <div class="paragraph center">
	    <iframe class="youtube" src="https://www.youtube.com/embed/nXIjUFOitkM" frameborder="0" allowfullscreen></iframe>
	</div>
	<div class="paragraph">
	There's three enemy types, the small fast one, the big strong one with a shield and the inbetweeney one. And if that wasn't mindblowingly original enough, you get three weapons, each of which is more effective against certain types of enemies. Except the laser, its good against all three. :^)
	</div>
	`, "#5a78af"),
    new ProjectData("project-4", "Crowd Surfer Smasher", "img/projects/crowdgame.png", `
    <div class="paragraph">
    This is a simple high score based game I made in a little week long self-imposed game jam. 
    <br/>You play as a bouncer at a concert and your job is to grab any fence jumpers and chuck them back into the crowd. Bouncing them into one another gets you more points.
    If they reach the band they will take them out. When there's no band members left standing you lose.
    </div>
	
    <div class="paragraph center">
        <iframe class="youtube" src="https://youtube.com/embed/Lq4OoRs4a3Y" frameborder="0" allowfullscreen></iframe>
    </div>
	
	<div class="paragraph">
	This one turned out to be a lot of fun to play, even in this most basic form. Throw direction/speed is based on the velocity of the player object, which makes throwing accurately quite an involved process. (It also makes throwing jumpers slowly completely busted, but hey ho.)
	<br/>With some sound effects, better graphics... better animations... Hmmm. Easier said than done, methinks.
	</div>
	
    `, "#e80fb7")
    
	/*new ProjectData("project-9", "Municipality AR", "img/projects/arbijlmer.png", 
    `
    <div class="paragraph">
     This application was made in 
    </div>
	
	<div class="paragraph">
    WIP entry, not much to see here... yet!~
    </div>
    `, "#23bd69", true),*/
];