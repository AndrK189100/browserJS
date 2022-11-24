const checkBoxes = Array.from(document.body.querySelectorAll('.interest__check'));

checkBoxes.forEach (element => {
    element.addEventListener('change',deep);
})



function deep() {
        if (!this.closest('.interests_active')) {
            Array.from(this.closest('.interest').querySelectorAll('.interest__check')).forEach( element => {
                element.checked = this.checked;
            })
        }
    }

