//your JS code here. If required.
const cs= document.getElementById("colorSelect");
const btn= document.querySelector("input");
const selectedOption=cs.options[cs.selectedIndex];
let options=documnet.getElementByTagName("option");

function removeBtn() {
	if(selectedOption){
		let optionValue = colorSelect.value;
		for(let option of options){
			if(option.value==optionValue)
				cs.removeChild(selectedOption);
		}
		
	}
}

btn.addEventListener("click",removeBtn);
