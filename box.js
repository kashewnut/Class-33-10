class Box{
    constructor(x,y,width,height)
{ 
    var ball_options ={
        restitution: 2.0,
        friction:1.8,
        density:3.3
    
    }

    
    this.body = Bodies.rectangle(x,y,width,height,ball_options);
   this.width = width;
   this.height = height;
    World.add(world,this.body);

}
display(){
    var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);

    rectMode(CENTER);
fill("green");
rect(0,0,this.width,this.height);
pop();
}

}