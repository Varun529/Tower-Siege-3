class Block {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':0.3
      }
      this.body = Bodies.rectangle(x, y, 30, 40, options);
      this.width = 30;
      this.height = 40;
      //this.Visibility=255;
      World.add(world, this.body);
    }

    score(){
      if(this.body.speed>3){
        score++;
      }
    }

    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
     /* if(this.body.speed < 3){
        this.Visibility=255;
       }
       else{
        
         World.remove(world, this.body);
         fill("black");
         this.Visibility=0;
         push();
         this.Visibility = this.Visibility - 5;
         tint(255,this.Visibility);
         pop();
       }
       */
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(0, 0, 30, 40);
      pop();
    }
  };
  