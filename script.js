let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#elem",
      pin: true,   // pin the trigger element while active
      start: "top top", // when the top of the trigger hits the top of the viewport
      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
    }
  });

  tl.to('#circ1', {
      left:'42%'
  })
  .to('#circ2', {
    left:'47%'
}, 0)
.to('#circ3', {
    left:'52%'
}, 0)
.to('#circ4', {
    left:'57%'
}, 0)