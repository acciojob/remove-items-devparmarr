
let colorSelect = document.getElementById('colorSelect');

function removeColor() {
    let optionValue = colorSelect.value;
    let options = document.getElementsByTagName('option');


    for (let option of options) {
        if (option.value === optionValue) {
            option.remove();
        }
    }
}