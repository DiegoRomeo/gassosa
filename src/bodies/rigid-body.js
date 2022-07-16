import {add, scalarM, sub} from "../math/vector.js";

// A class to represent a rigid body.
export class RigidBody {

  /**
   * Create a new rigid body.
   * @param {Vector2} position 
   * @param {Vector2} velocity 
   * @param {Vector2} force 
   * @param {number} mass 
   * @param {Object} shape_config 
   */
  constructor(position, velocity, force, mass, shape_config = { type: "circle", radius: 20, color:"black" }) {
    this.position = position;
    this.velocity = velocity;
    this.force = force;
    this.mass = mass;
    // Calculated using the initial velocity of the body.
    this.old_position = sub(this.position, this.velocity);
 
    this.shape_config = shape_config;
  }

  update(dt) {
    /**
     * Euler method:
     *
     * this.velocity = add(scalarM(this.force, dt/this.mass), this.velocity);
     * this.position = add(scalarM(this.velocity, dt), this.position);
     *
     * this.force.x = 0;
     * this.force.y = 0;
     */

    this.velocity = sub(this.position, this.old_position);
    this.old_position = this.position;
    this.position = add(add(this.position, this.velocity), scalarM(this.force, dt**2 / this.mass));

    this.force.x = 0;
    this.force.y = 0;
  }
}
