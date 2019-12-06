// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function() {
      console.log("Draw");
    }
  };
}
const circle = createCircle();
circle.draw(1);

// constructor Function
function Circle(radius){
  console.log('this',this)
  this.radius = radius,
  this.draw = function(){
    console.log('draw');
  }
}
const another = new Circle(1);
