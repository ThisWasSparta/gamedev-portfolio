<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        My name is <strong>Floris Kuiper</strong>, a junior dev with a passion for making/playing games.<br/>
        I like listening to music, creating pixel art and of course, playing games.<br/>
		I've worked with Unity for about 4 years now for both coursework and personal projects. Work on <router-link to="/game-projects">Cave of Sorts</router-link> is underway!
      </div>

      <div style="margin-top: 20px;">Here you'll find the  <router-link to="/game-projects">games</router-link> I've worked on, <router-link to="/other-projects">art I've made</router-link>, as well as my <router-link to="/resume">resume</router-link>.</div>

      <div style="margin-top: 40px;">I'm currently looking for a job! If you're looking for a creative, driven developer to support your efforts, do get in touch. You can reach me at <a href="mailto:floris245@gmail.com">floris245@gmail.com</a> or <router-link to="/contact">through here</router-link>.</div>
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