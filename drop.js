class Drops{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.drops = Bodies.rectangle(x,y,width,height);
        this.image = loadImage("raindrop.png");
        this.width = width;
        this.height = height;
        World.add(world,this.drops);
    }
    display(){
        this.position = this.drops.position;
        push();
        translate(position.x, position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}
