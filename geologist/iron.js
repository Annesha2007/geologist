class Iron{
    constractor(x,y) {
        var options = {
      'density':0.8,
      'friction': 3,
      'restitution':30
       }
    this.body = Bodies.rectangle (x,y, 50,50, options);
    this.width= 80;
    this.hight= 50;

    World.add(world, this.body);
   }
   display(){
       var pos = this.body.position;
       var angle = this.body.angle;
       Push();
       Translate(pose.x,posy);
       rotate(angle);
       rectmode(CENTER);

       var pos = this.body.position;
       var angle = this.body.angle;
       push();
       Translate(pose.x, pos.y);
       rotate(angle);
       rectMode(CENTER);
       
       FileList("brown");
       rect(0, 0,this.width, this.hight);
       Pop();
   }
}
