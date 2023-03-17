
var myGallows=[]

const myGameArea = {
    canvas: document.querySelector("canvas"),
    start: function() {
        this.canvas.width = 700
        this.canvas.height = 498
        this.context = this.canvas.getContext("2d")
        },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
    clearScore: function() {
        this.context.clearRect(0, 0, this.canvas.width, 50)
    },
}
myGameArea.start()
function component (width, height, img, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = img;
    this.update = function() {
        ctx = myGameArea.context;
        this.image.addEventListener("load", () => {
                ctx.drawImage(this.image, this.x,this.y, this.width, this.height);
            },
            false
        )
    }
}


//drawing a gallows
const drawingGallows = (countT) =>{
   

    switch (countT){
        case 1:
            myGallows.push(new component(500, 120, "./img/01.png", 50,380))
            break
        case 2:
            myGallows.push(new component(160, 100, "./img/02.png", 220,400))

            break
        case 3:
            myGallows.push(new component(70, 290, "./img/03.png", 130,100))

            break
        case 4:
            myGallows.push(new component(90, 90, "./img/04.png", 170,100))

            break
        case 5:
            myGallows.push(new component(230, 20, "./img/05.png", 120,90))

            break
        case 6:
            myGallows.push(new component(40, 130, "./img/06.png", 280,90))
            break
        case 7:
            myGallows.push(new component(60, 80, "./img/07.png", 272,146))

            break
        case 8:
            myGallows.push(new component(80, 180, "./img/08.png", 245,190))
            break
        
        default:
            console.log("nejde count" + countT)
            break
        
    }
    
    myGameArea.clearScore();
    cntFalse(countT)
    
    for (i=0;i<myGallows.length; i++){
        myGallows[i].update();

    }
   
}

const cntFalse = (countt) =>{
    ctx = myGameArea.context
    ctx.font = "18px Arial"
    ctx.fillStyle = "white";
    ctx.fillText("počet chyb: "+countt+"/(8)", 10, 20)
}

