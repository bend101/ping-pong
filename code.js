function Ball()
{
	this.x = 200+Math.random()*100;
	this.y = 200+Math.random()*100;
	this.speedy = 2+Math.random()*5;
	this.speedx = 2+Math.random()*5;
	this.listOfImages= ["ball 1.png", "ball 2.png", "ball 3.png"];
	this.imageIndex=0;

	this.element = document.createElement("img");
	this.element.src="ball 1.png";
	this.element.style.position="absolute";
	document.body.appendChild(this.element);


	this.onTimer=function(){


		this.x = this.x + this.speedx;
		this.y = this.y + this.speedy;
		if (this.x > document.body.clientWidth)
		{
			this.speedx = -this.speedx;
		}
		if (this.x < bat.element.clientWidth)
		{
			if (this.y > bat.y && this.y < bat.y + bat.element.clientHeight)
			{
				this.speedx = -this.speedx;
			}
			else
			{
				alert("end of game");
				clearInterval(this.timer);
			}
		}

		if (this.y > document.body.clientHeight || this.y < 0)
		{
			this.speedy = -this.speedy;
		}

		this.element.style.left = this.x + "px";
		this.element.style.top = this.y + "px";

	};
	this.spinTimer=function(){

		this.imageIndex++;
		if (this.imageIndex===3)
		{
			this.imageIndex = 0;
		}

		this.element.src= this.listOfImages[this.imageIndex];
		console.log(this.imageIndex);

	};
	this.timer = setInterval(this.onTimer.bind(this), 15);
	this.newTimer= setInterval(this.spinTimer.bind(this), 500);
}

function Bat()
{
	this.y = 300;
	this.timer = null;
	this.event = null;
	this.element = document.getElementById("bat");
	this.element.style.top = this.y + "px";
	this.direction=null;
}

var ball = new Ball();
//for (i=0; i<9; i++)
//{
//	new Ball();
//}
var bat = new Bat();


document.body.addEventListener("keydown", onKeyDown);
document.body.addEventListener("keyup", onKeyUp);
document.body.addEventListener("touchstart", onTouch);
document.body.addEventListener("touchend", endTouch);


function moveBat()
{

	if (bat.direction == "Up")
	{
		bat.y = bat.y - 15;
	}
	if (bat.direction == "Down")
	{
		bat.y = bat.y + 15;
	}
	bat.element.style.top = bat.y + "px";
}
function onKeyDown(event)
{
	if (event.repeat === false)
	{
		if (event.key==="Up"){
			bat.direction="Up";
			moveBat();
			bat.timer = setInterval(moveBat, 50);
		}
		else if (event.key==="Down"){
			bat.direction="Down";
			moveBat();
			bat.timer = setInterval(moveBat, 50);
		}
	}

}

function onKeyUp(event)
{
	clearInterval(bat.timer);
}

function onTouch(event)
{
	var y=event.touches.item(0).clientY;
	if ((y<bat.element.clientHeight/2+bat.element.offsetTop))
	{

		bat.direction="Up";
		moveBat();
		bat.timer = setInterval(moveBat, 50);
	}
	else
	{

		bat.direction="Down";
		moveBat();
		bat.timer = setInterval(moveBat, 50);
	}
}
function endTouch(event)
{
	clearInterval(bat.timer);
}