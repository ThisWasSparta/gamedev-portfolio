<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Floris Kuiper</strong>, a junior dev with a passion for anything video game related.
      <br />I recently graduated from the HvA(AUAS) in Amsterdam! I work primarily in Unity, C# being my favourite language of all, but I'm starting to shift towards Godot. I've also worked in PlayCanvas, Android Studio and I'm always eager to learn a new platform or language.
      <br />
      <br />Besides programming I also create <router-link to="/other-projects">my own art assets</router-link> in Aseprite or Blender, to really make the games I create feel like they're my own.
      <br />
      <br />I'm currently looking for a job. If my skills could be of any use to you, by all means, feel free to 
      <router-link to="/contact">contact me</router-link>!
      <br />
    </div>
    <div class="photo" style="margin-top: -15px;">
      <img src="img/resume-photo.png" alt="Picture of yours truly." />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Developer Intern - Wanted5Games, Haarlem, The Netherlands</h3>
      <h4>2022-2023</h4>

      <div>Worked with a team of devs, artists and a designer on various HTML5 games in PlayCanvas.
      <br /> <a href="http://wanted5games.com" target="_blank">https://wanted5games.com</a>
      </div>

      <div class="tech-stack">PlayCanvas, Javascript, HTML5</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Software</h3>
        <SkillRate name="Unity" :rate="4" />
        <SkillRate name="Aseprite" :rate="4" />
        <SkillRate name="Blender" :rate="3" />
		<SkillRate name="PlayCanvas" :rate="2" />
        <SkillRate name="Godot" :rate="1" />
        <SkillRate name="Android Studio" :rate="1" />
        <SkillRate name="Audacity" :rate="1" />
      </div>

      <div class="skill-set">
        <h3>Languages</h3>
        <SkillRate name="C#" :rate="4" />
        <SkillRate name="Java" :rate="3" />
        <SkillRate name="JavaScript" :rate="3" />
        <SkillRate name="GDScript" :rate="2" />
        <SkillRate name="Kotlin" :rate="2" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>HBO ICT - Game Dev @ Applied University of Amsterdam 2019 - 2024</h3>
      <h4>Bachelor degree, graduated in August of 2024.</h4>
      <div>Worked on projects in groups of 4-5, did exams, the usual.</div>

      <h2>Languages</h2>

      <h3>Dutch</h3>
      <div>My mother tongue.</div>

      <h3>English</h3>
      <div>Fluent, with a slight british accent from all the british television I watched growing up.</div>


      <h2>Besides this, my hobbies include...</h2>
      <div>
        <h3>Video Games</h3>
        <div>Kind of speaks for itself. Some of my favourite titles ever include PAYDAY 2, Terraria, Dragon Quest XI, Skyrim and Slay the Spire.
        <br/>Currently I play a lot of Lethal Company and Helldivers 2 with friends, keeping up with Honkai: Star Rail and playing Splatoon 3 on Switch.
        </div>

        <h3>Music</h3>
        <div>Power metal, black metal, death metal, I'll listen to any kind of metal. Blind Guardian, Slayer, Misery Index and Beast in Black are among my all-time favs.
		<br/>Currently listening a lot to Orbit Culture. Any recommendations are more than welcome.
		</div>

		<h3>YouTube</h3>
        <div>Watching others play games or discuss wide ranges of topics is my favourite way to spend a lazy afternoon, longform content being my favourite kind.
		</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>