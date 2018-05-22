// Total animation time (in seconds) to transition states
var day_night_cycle_time = 15;

// Time the animation stops before playing in reverse
var animation_delay = day_night_cycle_time / 4;

// Easing
var animation_ease = Linear.easeNone;

// Timeline Setups
var animation_toNight = new TimelineMax({
	repeat: -1,
	yoyo: true,
	repeatDelay: animation_delay
});

var animation_water = new TimelineMax({
	repeat: -1, 
	yoyo: true
});

var animation_cloud = new TimelineMax({
	repeat: -1, 
	yoyo: true
});

var animation_stars = new TimelineMax({
	repeat: -1, 
	yoyo: true
});

var animation_snowTop = new TimelineMax({
	repeat: -1,
	repeatDelay: 0
});

var animation_snowBottom = new TimelineMax({
	repeat: -1,
	repeatDelay: 0
});

// Water Animation
animation_water
	.to("#water", 2, {y: 12, morphSVG:"#water-2", ease: animation_ease}, 0 , 0)
;

// Cloud Animation
animation_cloud
	.to("#cloud", 3, { x: -2, y: 1, scale: 0.95, rotation: 1, ease: animation_ease}, 0, 0)
;

// Stars Animation
animation_stars
	.to("#star-one", 0.5, {opacity: 0.5, ease: animation_ease}, 0, 0)
	.to("#star-two", 0.5, {opacity: 0.5, ease: animation_ease}, 1, 0)
	.to("#star-three", 0.5, {opacity: 0.5, ease: animation_ease}, .5, 0)
	.to("#star-four", 0.5, {opacity: 0.5, ease: animation_ease}, 1.5, 0)
;

// Snow Animation
animation_snowTop
	.to("#snow-top-layer", 7, {attr: {transform: "translate(24 -108)"}, ease: animation_ease}, 0, 0)
;

animation_snowBottom
	.to("#snow-bottom-layer", 15, {attr: {transform: "translate(13 140)"}, ease: animation_ease}, 0, 0)
;

// Night Time Animation
animation_toNight
	
	// Animate the Background Graident
	.staggerTo('#daytime-gradient stop', day_night_cycle_time, {
		cycle:{
			stopColor: ['#060414','#416584']
		},
		ease: animation_ease,
	}, 0 , 0)

	// Animate the Night Time Overlay
	.to('#nighttime-overlay', day_night_cycle_time, {opacity: 1, ease: animation_ease}, 0 , 0)

	// Animate the Sun
	.to('#sun', day_night_cycle_time / 1.25, {scale: 0.9, attr:{cx:"753", cy:"697"}, ease:animation_ease}, 0, 0)

	// Animate the Moon
	.to('#moon', day_night_cycle_time / 2, {scale: 0.9, attr:{cx:"174.5", cy:"202.5"}, ease:animation_ease}, 0 , 0)
	.to('#moon', day_night_cycle_time / 2, {scale: 0.9, attr:{cx:"410.5", cy:"114.5"}, ease:animation_ease}, day_night_cycle_time / 2, 0)

	// Animate the Stars
	.to('#stars', day_night_cycle_time/2, {opacity: 1}, day_night_cycle_time/2, 0)
	.from("#stars", day_night_cycle_time - (day_night_cycle_time / 4), {y: 150, rotation: -15, ease: animation_ease}, day_night_cycle_time / 4, 0)

;

// Console Log Animation Durations
console.log( '\n' + 
	'animation_toNight duration: ' + animation_toNight.duration().toFixed(2) + ', \n' + 
	'animation_toNight repeat delay: ' + animation_delay + ', \n' +
	'animation_water duration: ' + animation_water.duration().toFixed(2) + ', \n' + 
	'animation_cloud duration: ' + animation_cloud.duration().toFixed(2) + ', \n' + 
	'animation_stars duration: ' + animation_stars.duration().toFixed(2) + ', \n' +
	'animation_snowTop duration: ' + animation_snowTop.duration().toFixed(2) + ', \n' +
	'animation_snowBottom duration: ' + animation_snowBottom.duration().toFixed(2) + '\n'
);