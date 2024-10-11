import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

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

gsap
  .timeline()
  .from('#Poster', { opacity: 0, duration: 5, ease: 'back' })
  .from('#Top_Spider_Web', { opacity: 0, duration: 5, ease: 'back' }, '<')
  .from('#Film_Grain', { opacity: 0 }, '<')
  .from('#Moon', { opacity: 0, y: 20, duration: 3, ease: 'ease.in' }, '<+1')
  .from('#Grass', { opacity: 0, y: 10, duration: 2, ease: 'expo.in' }, '<')
  .from('#Bottom_Spider_Web', { opacity: 0, duration: 2 }, '<')
  .from('#Trick_or_Treat_Banner', { opacity: 0, y: -40, duration: 5, ease: 'back' }, '<')
  .from('#Cat', { opacity: 0, rotate: -360, y: -40, duration: 5, ease: 'ease.in' }, '<')
  .from('#Halloween', { opacity: 0, y: -10, duration: 5, ease: 'back' }, '<2')
  .from('#Party', { opacity: 0, y: -5, duration: 5, ease: 'back' }, '<2')
  .from('#Left_Pumpkin', { x: -20, y: 4, opacity: 0, duration: 2, ease: 'back' }, '<')
  .from('#Right_Pumpkin', { x: 20, y: 4, opacity: 0, duration: 2, ease: 'back' }, '<')
  .from('#Middle_Pumpkin', { x: 0, y: 10, opacity: 0, duration: 2, ease: 'back' }, '<')
  .from('#Free_Entry', { rotate: 0, opacity: 0, x: -10, y: 20, ease: 'back' }, '<2')
  .from('#This_Weekend', { rotate: 0, opacity: 0, x: 10, y: 20, ease: 'back' }, '<')
  .from('#Spider', { rotate: 0, y: -44, duration: 5, ease: 'ease.in' }, '<')
  .to('#Spider', { x: -18, y: -4, repeat: -1, yoyo: true, duration: 5, ease: 'elastic.inOut' })
  .fromTo('#Cat', { y: -2, scale: 0.99 }, { y: 0, scale: 1, repeat: -1, yoyo: true, ease: 'back.inOut' }, '<2.5')
  .to(
    '.pumpkins',
    {
      scale: 1.1,
      rotate: 5,
      duration: 5,
      repeat: -1,
      yoyo: true,
      stagger: {
        // wrap advanced options in an object
        each: 1,
        from: 'end',
        grid: 'auto',
        ease: 'power2.inOut',
      },
      ease: 'back.inOut',
    },
    '<',
  )
  .from('#Free_Entry', { scale: 1.1, ease: 'back', duration: 5, repeat: -1, yoyo: true }, '<')
  .from('#This_Weekend', { scale: 1.1, ease: 'back', duration: 5, repeat: -1, yoyo: true }, '<')
