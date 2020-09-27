class Plinko{
    constructor(x,y,radius){
        var options={
            isStatic:true,
            density:1.0
        }
        this.body=Bodies.circle(x,y,radius,radius,options);
        this.x=x;
        this.y=y;
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius);
        pop()
    }
}