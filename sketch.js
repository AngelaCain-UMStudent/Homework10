var headX = 200;
var headY = 150;
var headDirection = 1;

var eye1X = 170;
var eye2X = 230;
var eye1Y = 50;
var eye2Y = 50;
var eyeDirection = 3;

var pupil1X = 170;
var pupil2X = 230;
var pupil1Y = 20;
var pupil2Y = 20;
var eyeDirection = 3;

var brow1X = 150;
var brow2X = 225;
var brow1Y = 175;
var brow2Y = 250;
var browDirection = 1

var size = 18;
var count = 2;
var sizeDirection = 1;
var x = 500;
var y = 600;



function setup()
{
    createCanvas(750, 800);
}

function draw()
{
    
    ///
    background(240);
    textSize(size)
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Coffee Coffee Javascript",10,15);


     
     // head
    fill(217, 204, 145);
    ellipse(headX, 150, headY, 175);
    if (headX <= x)
    {headX++

     headDirection += 3}


   
    // eyes
    strokeWeight(2);
    fill(255); // white
    ellipse(eye1X, 143, eye1Y, 40); // eye shapes
    ellipse(eye2X, 143, eye2Y, 40);
    fill(58, 71, 133); // eye color
    ellipse(pupil1X, 143, pupil1Y, 22); // left pupil
    ellipse(pupil2X, 143, pupil2Y, 22); // right pupil

    //Movement
    if (eye1X <= x || eye2X <= x)
    { eye1X += 5

      eye2X += 5

      eyeDirection -= 1
    }
    if (pupil1X < x || pupil2X < x)
    {pupil1X += 2

     pupil2X += 2
     
    }
    if (pupil1Y < y || pupil2Y < y)
    {pupil1X++

     pupil2X++}
    
    
    // nose
    fill(178, 179, 123)
    arc(198, 175, 25, 15, 270, 90);


    
    // mouth
    fill(179, 127, 123);
    arc(200, 192, 50, 50, 0, 160);

    // eyebrows
    strokeWeight(3);
    fill(64, 42, 24);
    line(brow1X, 115, brow1Y, 115);
    line(brow2X, 115, brow2Y, 115);
    if (brow1X < x)
    {brow1X += 3}

    //fun background shapes
    strokeWeight(2);
    fill(130, 184, 140);
    triangle(30, 64, 56, 26, 87, 78);
    triangle(330, 364, 356, 326, 387, 378);



    fill(24, 64, 63);
    strokeWeight(4)
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }


    text("Angela Cain", 100, 350);

   
    



}