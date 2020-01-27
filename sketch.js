// Your code will go here
// open up your console - if everything loaded properly you should see 0.3.0
console.log('ml5 version:', ml5.version);
let currentNote = 'C'
let notes = []
let n =[]
fileName = 'notes.json'
const knnClassifier = ml5.KNNClassifier();

function setup(){
    createCanvas(400, 400)
}

function draw(){
    background(200)
    drawNotes();
    
}

function drawNotes() {
    for(note of notes) {
        ellipse(note.x,note.y,30,30)
        textAlign(CENTER, CENTER);
        text(note.note,note.x,note.y )
    }
}

function loadingFinished() {
    console.log(n);
    console.log(n.length)
    notes = Object.values(n);
    console.log(notes)

}

function loadValues() {
    console.log('loading')
    n=loadJSON(fileName, loadingFinished)

}

function writeValues() {
    console.log('saving')
    saveJSON(notes, fileName);
    
}

function classify() {
 console.log('classify')

}

function keyPressed(key) {
    keyValue =  key.key.toUpperCase()

    switch(keyValue) {
        case 'S':
            writeValues()
            break;
        case 'L':
            loadValues()
            break;
        case 'K':
            classify()
            break;
        default: 
            currentNote = keyValue
            console.log(`Switching to${currentNote}`)
    }
}

function mousePressed() {
    let x = mouseX;
    let y = mouseY;
    
    newNote = {
        x: x,
        y: y,
        note: currentNote
    }

    notes.push(newNote)
    console.log(notes)
  }