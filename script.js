var image1 = document.getElementById("box1")
var image2 = document.getElementById("box2")
var image3 = document.getElementById("box3")
var image4 = document.getElementById("box4")
var image5 = document.getElementById("box5")
var image6 = document.getElementById("box6")
var left1 = document.getElementById("left1")
var left2 = document.getElementById("left2")
var left3 = document.getElementById("left3")
var right1 = document.getElementById("right1")
var right2 = document.getElementById("right2")
var right3 = document.getElementById("right3")
var bigbox = document.getElementById("bigbox")
var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var left = [ "images/pathfinder1.png", "images/bloodhound.png", "images/bangalore.png", "images/wraith.png", "images/gibraltar.png", "images/lifeline.png", "images/octane.png", "images/wattson.png", "images/mirage.png", "images/crypto.png", "images/caustic.png" ]
var right = [ "images/wraith.png", "images/gibraltar.png", "images/lifeline.png", "images/pathfinder1.png", "images/bloodhound.png", "images/bangalore.png", "images/octane.png", "images/wattson.png", "images/mirage.png", "images/crypto.png", "images/caustic.png", ]
var m1 = 0
var m2 = 1
var m3 = 2
var c1 = 0
var c2 = 1
var o1 = 0
var o2 = 1
var o3 = 2
var img
var img2
var img3
var img4
var img5
var img6

function cycleLeft () {
	m1++;
	console.log(m1)
	image1.src =  left[m1%11]
	if (image1.src === image2.src || image1.src === image2.src || image1.src === image3.src || image2.src === image1.src || image2.src === image3.src || image3.src === image1.src ||image3.src === image2.src) {
		console.log("Swap!")
		img = Math.floor(Math.random() * 11)
		img2 = Math.floor(Math.random() * 11)
		img3 = Math.floor(Math.random() * 11)
		image2.src = left[img]
		image3.src = left[img2]
	}
}

function cycleLeft2 () {
	m2++
	console.log(m2)
	image2.src =  left[m2%11]
	if (image1.src === image2.src || image1.src === image2.src || image1.src === image3.src || image2.src === image1.src || image2.src === image3.src || image3.src === image1.src ||image3.src === image2.src) {
		console.log("Swap!")
		img = Math.floor(Math.random() * 11)
		img2 = Math.floor(Math.random() * 11)
		img3 = Math.floor(Math.random() * 11)
		image1.src = left[img2]
		image3.src = left[img]
	}
	
}

function cycleLeft3 () {
	m3++
	console.log(m3)
	image3.src =  left[m3%11]
	if (image1.src === image2.src || image1.src === image2.src || image1.src === image3.src || image2.src === image1.src || image2.src === image3.src || image3.src === image1.src ||image3.src === image2.src) {
		console.log("Swap!")
		img = Math.floor(Math.random() * 11)
		img2 = Math.floor(Math.random() * 11)
		img3 = Math.floor(Math.random() * 11)
		image3.src = left[img]
		image2.src = left[img3]
	}
}

function cycleRight () {
	o1++
	console.log(o1)
	image4.src =  right[o1%11]
	if (image4.src === image5.src || image4.src === image5.src || image4.src === image6.src || image5.src === image4.src || image5.src === image6.src || image6.src === image4.src ||image6.src === image5.src) {
		img4 = Math.floor(Math.random() * 11)
		img5 = Math.floor(Math.random() * 11)
		img6 = Math.floor(Math.random() * 11)
		image5.src = right[img6]
		image6.src = right[img4]
	}
}

function cycleRight2 () {
	o2++
	console.log(o2)
	image5.src =  right[o2%11]
	if (image4.src === image5.src || image4.src === image5.src || image4.src === image6.src || image5.src === image4.src || image5.src === image6.src || image6.src === image4.src ||image6.src === image5.src) {
		img4 = Math.floor(Math.random() * 11)
		img5 = Math.floor(Math.random() * 11)
		img6 = Math.floor(Math.random() * 11)
		image4.src = right[img5]
		image6.src = right[img4]
	}
}

function cycleRight3 () {
	o3++
	console.log(o3)
	image6.src =  right[o3%11]
	if (image4.src === image5.src || image4.src === image5.src || image4.src === image6.src || image5.src === image4.src || image5.src === image6.src || image6.src === image4.src ||image6.src === image5.src) {
		img4 = Math.floor(Math.random() * 11)
		img5 = Math.floor(Math.random() * 11)
		img6 = Math.floor(Math.random() * 11)
		image6.src = right[img4]
		image5.src = right[img6]
	}
}

function lockInLeft () {
	left1.classList.remove("hover")
	left2.classList.remove("hover")
	left3.classList.remove("hover")
	left1.removeAttribute("onclick")
	left2.removeAttribute("onclick")
	left3.removeAttribute("onclick")
	button1.classList.remove("align-text")
	button1.classList.add("align-text3")
	button1.classList.add("no-cursor")
	button1.removeAttribute("onclick")
}

function lockInRight () {
	right1.classList.remove("hover")
	right2.classList.remove("hover")
	right3.classList.remove("hover")
	right1.removeAttribute("onclick")
	right2.removeAttribute("onclick")
	right3.removeAttribute("onclick")
	button2.classList.remove("align-text")
	button2.classList.add("align-text3")
	button2.classList.add("no-cursor")
	button2.removeAttribute("onclick")
}

function alertUser () {
	setTimeout(function(){ alert("Choose your team by clicking the images on the left or right side of the screen! When you're finished composing both teams, lock in with the appropriately named LOCK IN buttons, then press the BATTLE button in order to see which side wins!"); }, 1000);
}

function resetPage () {
	location.reload()
}

function randomSelection () {
	var rng = Math.floor(Math.random() * (2))
	console.log(rng)
	if (rng === 0) {
		left1.classList.remove("orange")
		left2.classList.remove("blue")
		left3.classList.remove("green")
		
		left1.classList.add("gray")
		left2.classList.add("darkgray")
		left3.classList.add("gray")
		
		right1.classList.remove("orange")
		right2.classList.remove("blue")
		right3.classList.remove("green")
		
		right1.classList.add("brightgreen")
		right2.classList.add("green")
		right3.classList.add("brightgreen")
		
		bigbox.classList.remove("align-text2")
		bigbox.classList.add("align-text3")
		bigbox.classList.add("no-cursor")
		bigbox.removeAttribute("onclick")
	}
	
	else if (rng === 1) {
		left1.classList.remove("orange")
		left2.classList.remove("blue")
		left3.classList.remove("green")
		
		left1.classList.add("brightgreen")
		left2.classList.add("green")
		left3.classList.add("brightgreen")
		
		right1.classList.remove("orange")
		right2.classList.remove("blue")
		right3.classList.remove("green")
		
		right1.classList.add("gray")
		right2.classList.add("darkgray")
		right3.classList.add("gray")
		
		bigbox.classList.remove("align-text2")
		bigbox.classList.add("align-text3")
		bigbox.classList.add("no-cursor")
		bigbox.removeAttribute("onclick")
	}
}