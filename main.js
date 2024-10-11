import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// What is a tween?
gsap.to("#ufo1", { x: "60vw" });
// gsap.to('#ufo1', { x: '60vw', duration: 1, repeat: 3, yoyo: true, ease: 'back.inOut' })
// gsap.to('#ufo2', { x: '60vw', scale: 2, color: '#fff', rotation: 360, duration: 7 })
// gsap.to('.ufos1', { x: '60vw', filter: 'hue-rotate(180deg)', rotation: 360, duration: 6 })
// gsap.to('.ufos2', { x: '60vw', filter: 'hue-rotate(180deg)', rotation: 360, duration: 5, stagger: 1, repeat: -1 })
// gsap.to(".ufos2", {
//   x: "60vw",
//   filter: "hue-rotate(180deg)",
//   rotation: 360,
//   duration: 5,
//   stagger: {
//     // wrap advanced options in an object
//     each: 1,
//     from: "start"
//   },
//   repeat: -1,
//   yoyo: true
// });
//from center, edges, start, end, random

//from and fromTo
// gsap.from('#ufo3', { x: '60vw', duration: 1 })
// gsap.fromTo('#ufo4', { x: 0, y: 0, scale: 0.2, opacity: 0 }, { x: '50vw', y: 0, scale: 1.4, opacity: 1, duration: 1 })

//Tween Control

// let tween1 = gsap.fromTo('#ufo5', { x: 0, y: 0 }, { x: '50vw', y: 0, opacity: 1, duration: 5 })

// document.getElementById('play').onclick = () => tween1.play()
// document.getElementById('pause').onclick = () => tween1.pause()
// document.getElementById('reverse').onclick = () => tween1.reverse()
// document.getElementById('restart').onclick = () => tween1.restart()

//Timelines
// gsap.from('.poster #bg', { opacity: 0, duration: 5, ease: 'back' })
// gsap.from('.poster svg', { y: -550, duration: 5, repeat: -1, yoyo: true, ease: 'back.inOut', delay: 2 })
// gsap.fromTo('.poster #beam', { color: '#ffffff00' }, { color: '#F5F503E6', stagger: 0.1, repeat: -1, yoyo: true, duration: 1, ease: 'back.inOut', delay: 2 })
// gsap.fromTo('.poster .lights', { color: '#ff0000' }, { color: '#00ff00', stagger: 0.1, repeat: -1, yoyo: true, duration: 0.3, ease: 'back.inOut', delay: 2 })
// gsap.from('.poster #cow', { y: 300, duration: 5, repeat: -1, yoyo: true, ease: 'back.inOut', delay: 3 })
// gsap.fromTo('.poster #saucer', { color: '#fff' }, { color: '#222', stagger: 0.1, repeat: -1, yoyo: true, duration: 1, ease: 'back.inOut', delay: 2 })
// gsap.from('.poster h1', { y: 30, opacity: 0, duration: 2, ease: 'back', delay: 8 })

// gsap.timeline()
//     .from('.poster #bg', { opacity: 0, duration: 5, ease: 'back' })
//     .from('.poster svg', { y: -550, duration: 5, repeat: -1, yoyo: true, ease: 'back.inOut' })
//     .fromTo('.poster #beam', { color: '#ffffff10' }, { color: '#F5F503E6', stagger: 0.1, repeat: -1, yoyo: true, duration: 1, ease: 'back.inOut' }, '<' )
//     .from('.poster #cow', { y: 300, duration: 5, repeat: -1, yoyo: true, ease: 'back.inOut' }, '<' )
//     .fromTo('.poster .lights', { color: '#ff0000' }, { color: '#00ff00', stagger: 0.1, repeat: -1, yoyo: true, duration: 0.3, ease: 'back.inOut' })
//     .fromTo('.poster #saucer', { color: '#fff' }, { color: '#222', stagger: 0.1, repeat: -1, yoyo: true, duration: 1, ease: 'back.inOut' })
//     .from('.poster h1', { y: 30, opacity: 0, duration: 2, ease: 'back' })

// Simple Navigation

// const items = document.querySelectorAll('.item')
// gsap.defaults({ duration: 0.3 })

// items.forEach(function (item, index) {
//   const tl = gsap
//     .timeline({ paused: true })
//     .to(item.querySelector('.text'), {
//       color: 'white',
//       x: 10,
//       scale: 1.2,
//       transformOrigin: 'left center',
//     })
//     .to(item.querySelector('.dot'), { backgroundColor: '#F93', scale: 1.5 }, 0)

//   item.addEventListener('mouseenter', () => tl.play())
//   item.addEventListener('mouseleave', () => tl.reverse())
// })

//Scroll Trigger Basics

// Space Invader
// gsap.to('.space-invader', {
//   duration: 2,
//   x: '50vw',
//   rotation: -360,
//   ease: 'linear',
//   scrollTrigger: {
//     trigger: '#scrollTriggerContainer1',
//     markers: true,
//     start: 'top 50%', //when top of the space in passes 75% viewport height
//     end: 'bottom 50%', //when bottom of the space in passes 25% viewport height
//     // onEnter: ({ progress, direction, isActive }) => console.log(progress, direction, isActive),
//     // onEnter: () => document.getElementById('main').classList.add('bg-red-500'),
//     // onEnterBack: () => document.getElementById('main').classList.add('bg-indigo-500'),
//     // onLeave: () => document.getElementById('main').classList.remove('bg-red-500'),
//     // onLeaveBack: () => document.getElementById('main').classList.remove('bg-indigo-500'),

//     //events: onEnter onLeave onEnterBack onLeaveBack
//     // toggleActions: 'restart complete reverse reset',
//     //options: play, pause, resume, reset, restart, complete, reverse,none
//     // pin: true,
//     scrub: 1,
//   },
// })

// Red car
// let width = window.innerWidth
// let speed = 200 //pixels per second
// let endX = width - 50

// let circumference = document.querySelector('#wheel1').getBBox().width * Math.PI
// let rotation = (endX / circumference) * 360
// let duration = endX / speed
// let ease = 'sine.inOut'

// let tl = gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: '#carWrapper',
//       start: 'top 50%',
//       end: 'bottom 50%',
//       markers: true,
//       scrub: 1,
//       //   pin: true,
//     },
//   })
//   .to('#car', { duration: duration, x: endX, ease: ease })
//   .to('#wheel1, #wheel2', { duration: duration, rotation: rotation, transformOrigin: '50% 50%', ease: ease }, 0)

// Staggered Animation
// const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)");

// const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

// gsap.set(photos, { yPercent: 101 });

// ScrollTrigger.create({
//   trigger: "#gallery",
//   start: "top top",
//   end: "bottom bottom",
//   pin: "#rightColumn"
// });

// details.forEach((detail, index) => {
//   let headline = detail.querySelector(".headline");
//   ScrollTrigger.create({
//     trigger: headline,
//     start: "top 80%",
//     end: "top 50%",
//     animation: gsap.to(photos[index], { yPercent: 0 }),
//     scrub: true
//     // markers: true,
//   });
// });