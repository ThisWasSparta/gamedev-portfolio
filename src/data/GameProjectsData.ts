import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-1", "Top Down Roguelike", "img/projects/characterswapgame.png", 
    `
    <div class="paragraph">
     This project is something I've been working on whenever inspiration struck/time allowed the last couple years.
    </div>
	
	<div class="paragraph">
    WIP entry, not much to see here... yet!~
    </div>
    `, "#23bd69", true),
    new ProjectData("project-2", "Butterfly Shimai", "img/projects/ButterflyShimaiTeaser.jpg", `
    <div class="paragraph">
        <strong>Butterfly Shimai</strong> is a game I worked on during my internship at Wanted5Games, available for play on most modern browsers. The objective is to clear the grid by uniting wings of a similar type.
        <br/>This was the game I had by far the most involvement in during my time at Wanted5Games. I was tasked with programming various gameplay systems like the way the butterflies merge together when matched or the powerups.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/w_GnFibjxHU?si=8SbThr5_kO9yHCxZ" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph">
    <div class="notice">
        Playable in the browser (WebGL) on <a href="https://www.crazygames.com/game/butterfly-shimai" target="_blank">crazygames.com</a>. (Do let me know if this link ever breaks.)
    </div>
    </div>
    `, "#5a78af"),
    new ProjectData("project-3", "Garden Bloom", "img/projects/garden-bloom-game.webp", `
    <div class="paragraph">
        <strong>Garden Bloom</strong> is another game I worked on during my time at Wanted5Games. This one is a typical match 3 game where you're tasked with restoring your grandpa's old garden to its former glory.
        <br/>My contributions for this game were small but numerous. Things like refactoring UI code, implementing animations requested by the design lead and fixing bugs were among my tasks.
    </div>
	
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/4.png" alt="Screenshot of game" />
        <img class="pc-screenshot" src="img/projects/2.png" alt="Screenshot of game" />
        <img class="pc-screenshot" src="img/projects/1.png" alt="Screenshot of game" />
        <img class="pc-screenshot" src="img/projects/3.png" alt="Screenshot of game" />
    </div>
	
    <div class="paragraph">
        <div class="notice">
        Playable in the browser (WebGL) on <a href="https://www.crazygames.com/game/garden-bloom" target="_blank">crazygames.com</a>. (Do let me know if this link ever breaks.)
        </div>
    </div>
    `, "#383838"),
    new ProjectData("project-4", "Crowd Surfer Smasher", "img/projects/crowdgame.png", `
    <div class="paragraph">
    This is a simple high score based game I made in a little week long self-imposed game jam. 
    <br/>You play as a bouncer at a concert and your job is to grab any fence jumpers and chuck them back into the crowd. Bouncing them into one another gets you more points.
    If they reach the band they will take them out. When there's no band members left standing you lose.
    </div>
	
    <div class="paragraph center">
        <iframe class="youtube" src="https://youtube.com/embed/Lq4OoRs4a3Y" frameborder="0" allowfullscreen></iframe>
    </div>
    `, "#e80fb7"),
    new ProjectData("project-5", "Level Generation System", "img/projects/generated-map.png", `
    <div class="paragraph">
        This is a system I created for generating levels using various algorithms during the gameplay engineering semester at the HvA. It works by letting users "construct" templates for generating levels by adding layers, each representing a specific operation.
        <br/>For more details on my process building this system check out this blog post I wrote about it for the HvA's website.
        <br/><a href="https://summit-2223-sem2.game-lab.nl/2023/04/11/level-generation-system-for-topdown-2d-games/" target="_blank">hva-game-lab.nl/level-generation-system-for-topdown-2d-games/</a>
    </div>

    `, "#e48246")
];