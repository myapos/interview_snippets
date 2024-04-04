// https://www.greatfrontend.com/questions/javascript/turtle
export default class Turtle {
  constructor() {
    this.curPosition = [0, 0];
    // up     right    down     left
    this.directions = ["north", "east", "south", "west"];
    this.curDirIdx = 0;
  }

  _getDirection() {
    return this.directions[this.curDirIdx];
  }

  /**
   * @param {number} distance Distance to move forward while facing the current direction.
   * @return {Turtle}
   */
  forward(distance) {
    const direction = this._getDirection();
    let [x, y] = this.position();

    switch (direction) {
      case "north":
        y += distance;
        break;
      case "east":
        x -= distance;
        break;
      case "south":
        y -= distance;
        break;
      case "west":
        x += distance;
        break;
      default:
        console.log("Not right direction");
    }

    this.setPosition([x, y]);
    return this;
  }

  /**
   * @param {number} distance Distance to move backward while facing the current direction.
   * @return {Turtle}
   */
  backward(distance) {
    const direction = this._getDirection();
    let [x, y] = this.position();

    switch (direction) {
      case "north":
        y -= distance;
        break;
      case "east":
        x += distance;
        break;
      case "south":
        y += distance;
        break;
      case "west":
        x -= distance;
        break;
      default:
        console.log("Not right direction");
    }

    this.setPosition([x, y]);
    return this;
  }

  /**
   * Turns the turtle left.
   * @return {Turtle}
   */
  left() {
    this.curDirIdx =
      this.curDirIdx === this.directions.length - 1 ? 0 : ++this.curDirIdx;
    return this;
  }

  /**
   * Turns the turtle right.
   * @return {Turtle}
   */
  right() {
    this.curDirIdx =
      this.curDirIdx === 0 ? this.directions.length - 1 : --this.curDirIdx;
    return this;
  }

  setPosition(position) {
    this.curPosition = [...position];
    return this;
  }
  /**
   * @return {[number, number]} Coordinates [x, y]
   */
  position() {
    return [this.curPosition[0], this.curPosition[1]];
  }
}
