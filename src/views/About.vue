<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        My name is <strong>Floris Kuiper</strong>, a junior dev with a passion for making/playing games.<br/>
        I like listening to music, creating pixel art and of course, playing games.<br/>
		I've worked with Unity for about 4 years now for both coursework and personal projects. I have however started shifting my focus to Godot to diversify my skill set.
      </div>

      <div style="margin-top: 20px;">Here you'll find the  <router-link to="/game-projects">games</router-link> I've worked on, <router-link to="/other-projects">art I've made</router-link>, as well as my <router-link to="/resume">resume</router-link>.</div>

      <div style="margin-top: 40px;">Currently I'm currently working as a <a href="https://www.servicenow.com/" target="_blank">ServiceNow</a> developer trainee at <a href="https://www.experis.nl/nl/over-ons" target="_blank">Experis</a>. While I'm not actively looking for a job I'm always open to making new connections. You can reach me at <a href="mailto:floris245@gmail.com">floris245@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="A picture of yours truly." /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
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
    padding: 10px;
    padding-left: 80px;
  }
}

</style>