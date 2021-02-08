var positionX=400;
var positionY = 350;
var database;
var balloon;


function preload(){
    bgImg = loadImage("bgImg.jpg");
    balloonAnimation = loadAnimation("sprites/ball1.png","sprites/ball2.png","sprites/ball3.png");
    
}



function setup(){
    database = firebase.database();
    
    //creating ballon
    balloon=createSprite(400,350,30,30);
    balloon.addAnimation("ball",balloonAnimation);
    balloon.scale = 0.3;
    //positionX = 50;
    //positionY = 350;

    }

function draw(){
    createCanvas(800,400);
    background(bgImg);
    

    var dbrefX = database.ref('x');
    dbrefX.on("value",(data)=>{
        positionX  = data.val();
    });
    var dbrefY = database.ref('y');
    dbrefY.on("value",(data)=>{
        positionY = data.val();
    })

    balloon.x = positionX;
    balloon.y = positionY;
    

    Movement();
    fill("red");
    textSize(15);
    text("Use Arrows to Move!!",50,50);
    drawSprites();
}

function Movement(){
    if(keyDown(RIGHT_ARROW)){
        writePosition(5,0);
    }
    if(keyDown(LEFT_ARROW)){
        writePosition(-5,0);
    }
    if(keyDown(UP_ARROW)){
        writePosition(0,-5);
        balloon.scale-=0.002;
    }
    if(keyDown(DOWN_ARROW)){
        writePosition(0,5);
        balloon.scale+=0.002;
    }
}

