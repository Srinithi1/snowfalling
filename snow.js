class Snow{
    constructor(x,y){
        var options ={
            'friction' : 0.5,
            'density' : 0.3
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.image=loadImage("snow4.webp");
        this.image.scale=0.5;
        World.add(world,this.body);
        
    }
    Display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
    }
}