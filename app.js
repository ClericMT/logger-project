// 8=>
//Determines which timer to start
body.addEventListener('click', event => {
    z = event.target;
    switch(z){
        case firstTimer:
            firstClass.toggleSwitch(z)
            break;
        case secondTimer:
            secondClass.toggleSwitch(z)
            break;
        case thirdTimer:
            thirdClass.toggleSwitch(z)
            break;
    }
});

//Timers
class Time {
    constructor(project){
        this._project = project;
        this._time = null;
        this._active = false;
    }
    //Determines if start/stop clock
    toggleSwitch(z){
        (!this._active) ? this.setTime(z) : this._active = false;
    }
    //Updates time every second when active
    setTime(z){
        this._active = true;
        let x = this._time; 
        let intTime = setInterval(() => {(this._active == true) ? this.updateText(z,x++):clearInterval(intTime)}, 1000);
    }
    updateText(z,x){
        (z.innerHTML = `${this._project}: ${x}`);
        this._time = x

    }
    
}

const firstClass = new Time('Project 1')
const secondClass = new Time('Project 2')
const thirdClass = new Time('Project 3')