const clapSound = document.getElementById('clap');
const boomSound = document.getElementById('boom');
const hihatSound = document.getElementById('hihat');
const kickSound = document.getElementById('kick');
const openhatSound = document.getElementById('openhat');
const rideSound = document.getElementById('ride');
const snareSound = document.getElementById('snare');
const tinkSound = document.getElementById('tink');
const tomSound = document.getElementById('tom');

class Sounds {
    constructor(btnRec, btnPlay, startRecord = false) {
        this.soundArray = [];
        this.btnRec = document
            .querySelector(`${btnRec}`);
        this.btnPlay = document
            .querySelector(`${btnPlay}`);
        startRecord ?
            this.btnRec.addEventListener("click", this.startRecordSound) :
            this.btnRec = null;
        startRecord ?
            this.btnPlay.addEventListener("click", this.startPlaySound) :
            this.btnPlay = null;
        startRecord ?
            this.recordStartTime = Date.now() :
            this.recordStartTime = 0
        document
            .body
            .addEventListener("keypress", this.playSound);

        this.startRecord = startRecord;
    }

    startRecordSound = () => {
        this.startRecord = true;
    };


    playSound = (e, code, play = false) => {

        const keyCode = play ? code : e.code;

        switch (keyCode) {
            case 'KeyQ':
                clapSound.currentTime = 0;
                clapSound.play();
                break;
            case 'KeyW':
                boomSound.currentTime = 0;
                boomSound.play();
                break;
            case "KeyE":
                hihatSound.currentTime = 0;
                hihatSound.play();
                break;
            case "KeyR":
                kickSound.currentTime = 0;
                kickSound.play();
                break;
            case "KeyT":
                openhatSound.currentTime = 0;
                openhatSound.play();
                break;
            case "KeyY":
                rideSound.currentTime = 0;
                rideSound.play();
                break;
            case "KeyU":
                snareSound.currentTime = 0;
                snareSound.play();
                break;
            case "KeyI":
                tinkSound.currentTime = 0;
                tinkSound.play();
                break;
            case "KeyO":
                tomSound.currentTime = 0;
                tomSound.play();
                break
        }

        this.startRecord ? this.recordSound(e.code) : null
    };

    recordSound = (code) => {
        this.soundArray.push({
            code: code,
            startTime: Date.now()
        });
        console.log(this.soundArray)
    }

    startPlaySound = () => {
        this.startRecord = false;
        this.btnRec.innerHTML = "start";
        this.soundArray
            .forEach(sound => setTimeout( () => {
                this.playSound(null, sound.code, true)
            }, sound.startTime - this.recordStartTime))
    }
}

const defaultSound = new Sounds();

const buttons  = document.querySelectorAll(".rec-btn");
buttons.forEach(btn => btn.addEventListener("click", makeRecorder));
function makeRecorder() {
    this.innerHTML = "recording"
    const playBtn = this.getAttribute("data-play");
    const recBtn = this.getAttribute("id");
    const sound = new Sounds(`#${recBtn}`, `#${playBtn}`, true);
}
