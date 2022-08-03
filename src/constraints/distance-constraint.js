import {magnitude, add, sub, scalarM} from "../math/vector.js";

export class DistanceConstraint {

  /**
   * Creates a nww distance constraint.
   * @param {Object} objA 
   * @param {Object} objB 
   * @param {number} stiffness 
   * @param {number} length 
   */
  constructor(objA, objB, stiffness = 1, length = 0, shape_config = { type: "line", color: "black"}) {
    this.objA = objA;
    this.objB = objB;
    this.stiffness = stiffness;
    this.length = length || magnitude(sub(objB.position, objA.position));
    this.shape_config = shape_config;
  }

  /**
   * Updates the constraint and its objects positions using the verlet method.
   */
  update() {
    let ds = sub(this.objB.position, this.objA.position);
    let distance = magnitude(ds);
    
    let difference = this.length - distance;
    let percentage = difference / distance / 2;
    
    let offset = scalarM(ds, percentage * this.stiffness);

    this.objA.position = sub(this.objA.position, scalarM(offset, this.objA.mass / (this.objA.mass + this.objB.mass)));
    this.objB.position = add(this.objB.position, scalarM(offset, this.objB.mass / (this.objA.mass + this.objB.mass)));
  }
}
