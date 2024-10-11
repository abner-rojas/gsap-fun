import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


//GSAP DOCS
// https://gsap.com/docs/v3/

// Available Selectors

// #Poster
// #Grass
// #Moon

// #Left_Pumpkin
// #Right_Pumpkin
// #Middle_Pumpkin
// .pumpkins

// #Trick_or_Treat_Banner
// #Free_Entry
// #This_Weekend
// #Halloween
// #Party

// #Cat
// #Spider
// #Bottom_Spider_Web
// #Top_Spider_Web
// #Film_Grain


//Create Timeline

// gsap.timeline()
//     .from('#Poster', { opacity: 0, duration: 5, ease: 'back' }