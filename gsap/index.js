let text = document.querySelector('.text');
let button = document.querySelector('button')
console.log(text)

gsap.to('.text', {
    opacity: 1,
    y:-10,
    duration:1,
    ease: "power3.out"
})

 gsap.to('button', {
    opacity: 1,
    duration: .5,
    delay:.8
    })

gsap.to('button', {
    scale: 1.1,
    repeat: -1,
    duration: .6,
    yoyo: true
})
