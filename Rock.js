class Rock extends BaseClass {
  constructor(x,y){
    super(x,y,90,90);
    this.image = loadImage("sprites/rock.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
  }
}
