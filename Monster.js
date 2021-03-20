class Monster{

    constructor(x,y){

        var options={
            friction:0,
            density:0.5

        }

        this.body = Bodies.circle(x,y,40,options);
        this.radius = 40;
        World.add(world,this.body);
        this.image = loadImage("monster.png");

    }

    display(){

        var pos = this.body.position;

        fill(255);
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius*5,this.radius*2.5);
       //circle(pos.x,pos.y,this.radius);


    }
}