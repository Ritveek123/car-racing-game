let body = document.body
let stroke = 0;
function setStroke(x){
    stroke = x;
}
function createRect(name, w, h, x, y, display, color) {
    let square = document.createElement("div")
    square.style.backgroundColor = color
    square.style.position = "absolute"
    square.style.left = x + "px"
    square.style.top = y + "px"
    square.style.width = w + "px"
    square.style.height = h + "px"
    square.className = name
    display.appendChild(square)
    return square
}
function drawLine(name, x1, y1, x2, y2, display, color) {
    let dist = Math.sqrt(((x1 - x2)*(x1 - x2)) + ((y1 - y2)*(y1 - y2)));
    let xMid = (x1+x2)/2;
    let yMid = (y1+y2)/2;
    let slopeinRad = Math.atan2(y1 - y2, x1 - x2)
    let slopeindeg = (slopeinRad * 180) / Math.PI;
    let square = document.createElement("div")
    square.style.backgroundColor = color
    square.style.position = "absolute"
    square.style.left = (xMid - (dist/2)) + "px"
    square.style.top = yMid + "px"
    square.style.width = dist + "px"
    square.style.height = stroke + "px"
    square.style.transform = "rotate("+slopeindeg+"deg)"
    square.className = name
    display.appendChild(square)
    return square
}
function createBall(name, r, x, y, display, color) {
    let square = document.createElement("div")
    square.style.backgroundColor = color
    square.style.position = "absolute"
    square.style.left = x + "px"
    square.style.top = y + "px"
    square.style.width = r + "px"
    square.style.borderRadius = "40px"
    square.style.height = r + "px"
    square.className = name
    display.appendChild(square)
    return square
}
function loadImage(name, img, x, y, w, h, display) {
    let image = document.createElement("img")
    image.src = img
    image.style.position = "absolute"
    image.style.left = x + "px"
    image.style.top = y + "px"
    image.style.width = w + "px"
    image.style.height = h + "px"
    image.className = name
    display.appendChild(image)
    return image
}
function createCanvas(name, w, h, display) {
    let canvas = document.createElement("div")
    canvas.style.width = w + "px"
    canvas.style.height = h + "px"
    canvas.className = name
    display.appendChild(canvas)
    return canvas
}
function setBackground(target, color) {
    target.style.backgroundColor = color
}
function addText(name, text, x = 8, y = 8, display) {
    let txt = document.createElement("div")
    txt.style.position = "absolute"
    txt.style.left = x + "px"
    txt.style.top = y + "px"
    txt.append(text)
    txt.className = name
    display.appendChild(txt)
    return txt
}
function setText(tar, txt) {
    let text = document.querySelector("." + tar)
    text.replaceChildren(txt)
}
function loop(func, tick) {
    setInterval(function () {
        func()
    }, tick)
}
function setX(target, x){
    target.style.left = x + "px"
}
function setY(target, y){
    target.style.top = y + "px"
}
function replaceImage(name, image){
    let i = document.querySelector("."+name)
    i.src = image;
}
function playSound(path){
    let audio = new Audio(path);
    audio.play()
}
function setTextColor(text, color) {
    text.style.color = color

}
class Controller {
    constructor(){
        this.state = [false, false, false, false];
    }
    controller(){
        let key = this.state;
        window.addEventListener("keydown", function (ev) {
            if (ev.key == "w") {
                key[0] = true;
            } else if (ev.key == "s") {
                key[1] = true;
            } else if (ev.key == "a"){
                key[2] = true;
            } else if (ev.key == "d"){
                key[3] = true;
            }
        })
        window.addEventListener("keyup", function (ev) {
            if (ev.key == "w") {
                key[0] = false;
            } else if (ev.key == "s") {
                key[1] = false;
            } else if (ev.key == "a"){
                key[2] = false;
            } else if (ev.key == "d"){
                key[3] = false;
            }
        })
        this.state = key;
    }
}
class Random{
    constructor (){
        this.digits = 10
        this.seed = 8767876876
    }
    nextInt(){
        let n = (this.seed * this.seed).toString();
        while (n.length < this.digits * 2){
            n = "0"+this.digits;
        }
        let start = Math.floor(this.digits/2);
        let end = this.digits + start;
        this.seed = parseInt(n.substring(start, end));
        return this.seed;
    }
    nextFloat(){
        return this.nextInt()/9999999999;
    }
    random(x){
        let rand = Math.floor(Math.random() * x)
        return rand
    }
    setSeed(x){
        this.seed = x;
    }
}
class Color{
    red(){
        return "red"
    }
    green(){
        return "green"
    }
    blue(){
        return "blue"
    }
    grey(){
        return "grey"
    }
    lightgrey(){
        return "lightgrey"
    }
    white(){
        return "white"
    }
    black(){
        return "black"
    }
    lightblue(){
        return "lightblue"
    }
    darkblue(){
        return "darkblue"
    }
    darkgrey(){
        return "darkgrey"
    }
}