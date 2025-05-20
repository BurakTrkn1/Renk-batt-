let squarecount = 0;
let squarewidth = "";
let squareheight = "";
let pound = 0
let right = 3
let count = 0

let prom = prompt("zorluk seçiniz z: Zor o: Orta k: Kolay")
console.log(prom)
if (prom === "k") {
    squarewidth = "130px";
    squareheight = "130px";
    squarecount = 36;
}
if (prom === "o") {
    squarewidth = "100px";
    squareheight = "100px";
    squarecount = 64;
}
if (prom === "z") {
    squarewidth = "75px";
    squareheight = "75px";
    squarecount = 100;
}


const container = document.createElement("div")
container.id = "box"
container.style.width = "900px"
container.style.height = "900px"
container.style.border = "2px solid"
container.style.backgroundColor = "blue"
container.style.display = "flex"
container.style.flexDirection = "row"
container.style.flexWrap = "wrap"
container.style.alignItems = "center"
container.style.position = "relative"
container.style.left = "15rem"
container.style.bottom = "9rem"

document.getElementById("home").appendChild(container)

for (let i = 1; i <= squarecount; i++) {
    const element = document.createElement("div")
    element.id = "element-" + i;
    element.style.width = squarewidth;
    element.style.height = squareheight;
    element.style.backgroundColor = "black";
    element.style.borderRadius = "10px";
    element.style.margin = "5px";
    element.style.cursor = "pointer"
    if (Math.random() < 0.1) {
        element.dataset.color = "red"
    }
    else {
        element.dataset.color = "black"
    }
    console.log("squarecount", squarecount)
    document.getElementById("right").innerHTML = `${right}`
    element.addEventListener("click", function (event) {
        pound = pound + 50
        document.getElementById("pound").innerHTML = pound
        event.target.style.backgroundColor = "white"
        count++;
        event.target.style.pointerEvents = "none";
        event.target.style.cursor = "default";
        const hiddencolor = event.target.dataset.color
        console.log(hiddencolor)

        if (hiddencolor === "red") {
            event.target.style.backgroundColor = "red"
            pound = pound - 50;
            right = right - 1
            if (right == 0) {
                alert("Kaybettiniz")
                window.location.reload()
            }
            document.getElementById("right").innerHTML = `${right}`

        }
        console.log(container)
        if (count == squarecount) {
            alert("Tebrikler Kazandınız")
            window.location.reload()
        }

    });

    container.appendChild(element);


}


