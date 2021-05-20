class Snow
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,		
			restitution:0.8,
			friction:1
			}
			this.r=r
			this.x = x
			this.y = y
			this.image = loadImage("snow4.webp");
			this.body = Bodies.circle(this.x, this.y, this.r-20/2, options);
World.add(world,this.body);
		}
changePosition(){
	if(this.body.position.y > height){
	Matter.Body.setPosition(this.body,{x:random(0,1400),y:random(0,50)});
	}
	}
	display(){
		
var pos = this.body.position;

push();
translate(pos.x,pos.y);

imageMode(CENTER)
rectMode(CENTER)
image(this.image,0,0,this.r,this.r)
pop()
	}
}