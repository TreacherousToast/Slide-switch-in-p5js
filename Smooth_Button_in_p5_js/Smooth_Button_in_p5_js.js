var buttonX = 25;
var i = 0;
var shade = 255;
var shadingSpeed = 24;
var on = false;
var clicked = false;

function setup()
{
  createCanvas(75,50);
}
function draw()
{
  background(255);
  fill(shade,shade,255);
  rect(25,17,30,16,4);
  fill(255);
  ellipse(buttonX,25,25,25);
  if (clicked == true && on == false) // these two if statements are very inneficient and could probably be condensed further, 
  {//                                    but I'm scared of breaking the program if I mess with them
    shade-=shadingSpeed;
    i+=shadingSpeed;
    buttonX = i/8+25;
    if (i >= 255)
    {
      on = true;
      clicked = false;
    }
  }
  else if (clicked == true && on == true)
  {
    shade+=shadingSpeed;
    i-=shadingSpeed;
    buttonX = i/8+25;
    if (i <= 0)
    {
      on = false;
      clicked = false;
    }
  }
}
function mouseClicked()
{
  clicked = true;
}