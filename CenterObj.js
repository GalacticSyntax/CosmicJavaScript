function CenterObj(height, width) {
var h1 = window.innerHeight
|| document.documentElement.clientWidth
|| document.body.clientWidth;
var w1 = window.innerWidth
|| document.documentElement.clientHeight
|| document.body.clientHeight;
var h2 = h1/2 - height/2;
var w2 = w1/2 - width/2;
return {
	h: h2,
	w: w2
	};
};
