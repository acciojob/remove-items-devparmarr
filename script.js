//your JS code here. If required.
const cs= document.getElementById("colorSelect");
const btn= document.querySelector("input");
const selectedOption=cs.options[cs.selectedIndex];


function removeBtn() {
	if(selectedOption){
		cs.removeChild(selectedOption);
	}
}

btn.addEventListener("click",removeBtn);
