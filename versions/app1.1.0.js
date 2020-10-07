// 8=>
// version 1.1.0
// added local storage functionality and a data reset function

//Manually change timer values or reset data ()
function reset(id,val){
    window.localStorage.setItem(id,val)
}

//Loads local storage data
let data01 = window.localStorage.getItem('Project 1')
let data02 = window.localStorage.getItem('Project 2')
let data03 = window.localStorage.getItem('Project 3')

firstTimer.innerHTML = (`Project 1: ${data01}`)
secondTimer.innerHTML = (`Project 2: ${data02}`)
thirdTimer.innerHTML = (`Project 3: ${data03}`)

//Determines which timer to start
body.addEventListener('click', event => {
    z = event.target;
    console.log(z)
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
    constructor(project,time){
        this._project = project;
        this._time = time;
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
        window.localStorage.setItem(this._project,x)
    }
    
}

const firstClass = new Time('Project 1',data01)
const secondClass = new Time('Project 2',data02)
const thirdClass = new Time('Project 3',data03)

////reset example: sets first timer to 0
//reset('Project 1', 0)