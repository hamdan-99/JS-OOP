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
