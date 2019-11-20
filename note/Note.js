let notesArr = []

class Note  {
    constructor(title = "", content = "", bg = "white", pinned = false) {
        this.title = title;
        this.content = content;
        this.bg = bg;
        this.setToUp = setToUp;
        this.createdDate = Date().toISOString();
        this.pinned = pinned;
    }
}

// zapisanie do local Storage

localStorage.setItem('notes', JSON.stringify(notesArr))


// odczyt z local storage 

notesArr = JSON.parse(localStorage.getItem('notes'));
