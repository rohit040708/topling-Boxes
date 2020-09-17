class Box {
    constructor(x,y,w,h){
    var option={
        restitution:0.8
    }
    this.Body=Bodies.rectangle(x,y,w,h,option);
    this.w=w;
    this.h=h;
    World.add(world,this.Body);
}
display(){
    fill("blue");
    var angle= this.Body.angle;
    rectMode(CENTER);
    push();
    translate(this.Body.position.x,this.Body.position.y);
    rotate(angle);
    
    rect(0,0,this.w,this.h);
    pop();
}

}