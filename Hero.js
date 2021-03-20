class Hero{

    constructor(x,y){

        var options={
            frictionAir:0.01,
            density:1.2
        }

        this.body = Bodies.circle(x,y,40,options);
        this.radius = 40;
        World.add(world,this.body);
        this.image = loadImage("superhero.png");

    }

    display(){

        var pos = this.body.position;

        fill(255);
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius*12,this.radius*5);
       //circle(pos.x,pos.y,this.radius);


    }
}