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
    constructor(btnRec, btnPlay) {
        this.soundArray = [];
        this.recordStartTime = 0;
        this.startRecord = false;
        this.btnRec = document
            .querySelector(`${btnRec}`);
        document
            .querySelector(btnPlay)
            .addEventListener('click', this.playRecord);

        this.btnRec.addEventListener('click', this.startRecording);
        document.body.addEventListener('keypress', this.recordAudio);
    }

    recordAudio = (e) => {
        if (this.startRecord) {
            this.soundArray.push({
                code: e.code,
                time: Date.now(),
            })
        }
        this.playSound(e.code);
    };

    startRecording = () => {
        this.startRecord = !this.startRecord;
        if (this.startRecord) {
            this.soundArray.splice(0);
            this.recordStartTime = Date.now();
        }
        this.btnRec.innerHTML = `${this.startRecord ?  'Stop' : 'Start'}`;
    };

    playRecord = () => {
        this.startRecord = false;
        this.btnRec.innerHTML = 'Start';
        this.soundArray
            .forEach(el => {
                setTimeout(this.playSound, el.time - this.recordStartTime, el.code);
            })
    }

    playSound = (code) => {
        switch (code) {
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
    }
}



const sound = new Sounds('#live1rec', '#live1play');
const sound2 = new Sounds('#live2rec', '#live2play');
const sound3 = new Sounds('#live3rec', '#live3play');
const sound4 = new Sounds('#live4rec', '#live4play');