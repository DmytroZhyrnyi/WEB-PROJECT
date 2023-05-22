gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})


	gsap.fromTo('.hero-section', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero-section',
			start: 'center',
			end: '1200',
			scrub: true
		}
	})

	gsap.fromTo('.gallery__left .gallery__item', { x: -50, opacity: 1 }, {
		opacity: 1, x: 0,
		scrollTrigger: {
			rtigger: '.gallery__item',
			scrub: true
		}
	})

	gsap.fromTo('.gallery__right .gallery__item', { x: 50, opacity: 1 }, {
		opacity: 1, x: 0,
		scrollTrigger: {
			rtigger: '.gallery__item',
			scrub: true
		}
	})

}

