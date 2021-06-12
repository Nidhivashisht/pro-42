var spacebg,spacecraft1,spacecraft2,spacecraft3,spacecraft4,iss;

function Preload(){
    spacebg=loadImage("spacebg.jpg");
    spacecraft1=loadImage("spacecraft1.png");
    spacecraft2=loadImage("spacecraft2.png");
    spacecraft3=loadImage("spacecraft3.png");
    spacecraft4=loadImage("spacecraft4.png");
    iss=loadImage("iss.png");
}

function Setup(){
    createCanvas(1000,500);

    iss=createSprite(500,130,30,30);
    iss.setAnimation("iss");

}

function draw(){


spacecraft1.visible=false;
spacecraft2.visible=false;
spacecraft3.visible=false;
spacecraft4.visible=false;


    background(spacebg);

    if(keyDown("left")){

        spacecraft3.visible=true;
    }

    if(keyDown("right")){
        spacecraft4.visible=true;
    }

    if(keyDown("down")){
        spacecraft2.visible=true;
    }

    if (keyDown("up")){
        spacecraft1.visible=true;
        spacecraft1.velocityY=2;
    }

    drawSprites();
}