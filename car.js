AFRAME.registerComponent('car', {
    schema: {
        clickCounter: {type: 'number', default: 0}
    },
    update: function(){
        window.addEventListener("click", e => {
            this.data.clickCounter = this.data.clickCounter + 1

            if(this.data.clickCounter === 0){
                const rotation = {x: 0, y: 20, z: 0}
                this.el.setAttribute('rotation', rotation)
            } else if(this.data.clickCounter === 2){
                const rotation = {x: 0, y: 100, z: 0}
            } else {
            const cameraEl = document.querySelector("#camera");
            const position = { x: 0, y: 50, z: 250 };
            cameraEl.setAttribute("position", position);
            this.data.clickCounter = 0;
            }
        })
    }
})
