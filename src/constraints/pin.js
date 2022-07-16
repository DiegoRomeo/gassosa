import {magnitude, add, sub, scalarM} from "../math/vector.js";

// A class to represent a pin constraint.
export class Pin {

  /**
   * Create a new pin constraint.
   * @param {Vector2} point 
   * @param {Object} obj 
   * @param {number} length 
   * @param {Object} shape_config 
   */
  constructor(point, obj, length, shape_config = { type: "line", color: "black"}) {
    this.point = point;
    this.obj = obj;
    this.length = length || magnitude(sub(this.point, this.obj.position));
    this.shape_config = shape_config;
  }

  // Update the position of the constrained object.
  update() {
    let ds = sub(this.point, this.obj.position);
    let distance = magnitude(ds);
    
    let difference = this.length - distance;
    let percentage = difference / distance / 2;
    
    let offset = scalarM(ds, percentage);

    this.obj.position = sub(this.obj.position, offset);
  }
}
