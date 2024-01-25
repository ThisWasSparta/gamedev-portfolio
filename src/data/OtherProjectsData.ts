import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-6", "3D modeling + low res texturing", "img/projects/car.png", `
    <div class="paragraph">
      Combining my knowledge in pixel art with 3D modeling, I created this futuristic looking car.

        <div class="paragraph center">
          <img class="pc-screenshot" src="img/projects/car-front-side.png" alt="Car's front" />
          <img class="pc-screenshot" src="img/projects/car-back-side.png" alt="Car's back" />
          <img class="pc-screenshot" src="img/projects/car-side-ortho.png" alt="Car's side, orthographic camera" /> 
          <img class="pc-screenshot" src="img/projects/car-top-ortho.png" alt="Car from above, orthographic camera" /> 
        </div>
    `, "#c10606", false, true),
	new ProjectData("project-9", "Humanoid Character", "img/projects/nicholas.png",`
	<div class="paragraph">
	This was my first attempt at creating a humanoid character from scratch. Proper topology for a model like this is paramount if you want it to look good when animating. I swiftly learned that there's a lot of things to know and keep in mind.\n
	I started with the face, slowly working my way down from there to the character's torso, shoulders, arms and hands.
		<div class="paragraph center">
			  <img class="pc-screenshot" src="img/projects/shoulder-topology.png" alt="Car's front" />
			  <img class="pc-screenshot" src="img/projects/face-topology.png" alt="Car's back" />
			</div>
		</div>
	`),
    new ProjectData("project-7", "2D Animation", "img/projects/knight.gif", `
    <div class="paragraph">
                Here's some examples of 2D animations I've made in Aseprite, primarily for the top down game discussed in the games section.
    </div>

    <div class="paragraph center">
		<img class="pc-screenshot" src="img/projects/knight.gif" />
		<img class="pc-screenshot" src="img/projects/rogue.gif" />
		<img class="pc-screenshot" src="img/projects/wizard.gif" /> 
	</div>`, "#1ca1e2"),
    new ProjectData("project-8", "Various Graphics", "img/projects/charactercollage-export.png", `
    <div class="paragraph">
                Here's some samples of the spritework I've created in the years I've been learning game development.
            </div>
				<div class="paragraph center">
				  <img class="large-image-collage" src="img/projects/charactercollage-export.png" alt="Collage of characters. Some original, some not." />
				</div><div class="paragraph center">
				  <img class="large-image-collage" src="img/projects/collageitems-export.png" alt="Collage of item sprites" />
				</div><div class="paragraph center">
				  <img class="large-image-collage" src="img/projects/collagetileset-export.png" alt="Collage of tileset graphics" /> 
			</div>`),
];