import {add, scalarM} from "../../../math/vector.js";

// A class to represent a gravity generator.
export class GravityGenerator {

  /**
   * Create a gravity generator.
   * @param {Vector2} force The 2D vector to which the gravity will be set.
   */
  constructor(force) {
    this.gravity = force;
  }

  /**
   * Update the force acting on the given rigid body.
   * @param {RigidBody} rigid_body The rigid body.
   */
  updateForce(rigid_body) {
    rigid_body.force = add(scalarM(this.gravity, rigid_body.mass), rigid_body.force);
  }
}
