function volume_sphere() {
    //Write your code here
	let radius = document.getElementById("radius").value;
	let vol = 0
	if (!(radius < 0)) {
		vol = (4/3)*(Math.PI)*(Math.pow(radius, 3));
	} else {
		vol = "NaN"
	}
	let volume = document.getElementById("volume").value;
	volume = vol;
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
