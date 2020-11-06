class DustbinPiece {
    constructor(x,y,width,height) {
        var something_options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,something_options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("orange");
        rect(pos.x, pos.y, this.width, this.height);
      }
}