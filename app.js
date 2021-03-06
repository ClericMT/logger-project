// 8=>
// version 1.1.1
// Embedded text within svgs
// Need to minimalise code and switch circles off feature
// Need to change timer to hh:mm:ss
// Timer start is slow?


//Modules not working in browser
import Colors from './colors';
console.log(Colors.test)


firstTimer.innerHTML = 'Project 1'
secondTimer.innerHTML = 'Project 2'
thirdTimer.innerHTML = 'Project 3'

//Reset timer
function reset(id,val){
    window.localStorage.setItem(id,val)
}

//Loads local storage data
let data01 = window.localStorage.getItem('Project 1')
let data02 = window.localStorage.getItem('Project 2')
let data03 = window.localStorage.getItem('Project 3')

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
            circle03.src = "./svg/circle02.svg"
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
        z.innerHTML = x;
        this._time = x
        window.localStorage.setItem(this._project,x)
    }
    
}

const firstClass = new Time('Project 1',data01)
const secondClass = new Time('Project 2',data02)
const thirdClass = new Time('Project 3',data03)

////reset example: sets first timer to 0
//reset('Project 1', 0)