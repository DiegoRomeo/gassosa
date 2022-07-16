import {RigidBody} from "../bodies/rigid-body.js";
import {DistanceConstraint} from "../constraints/distance-constraint.js";
import {Pin} from "../constraints/pin.js";
import {ForceRegistry} from "../physics/forces/force-registry.js";
import {GravityGenerator} from "../physics/forces/generators/gravity-generator.js";

// A class to represent a physics world.
export class PhysicsWorld {

  /**
   * Create a physics world.
   */
  constructor() {
    this.rigid_bodies = new Array();
    this.distance_constraints = new Array();
    this.pins = new Array();

    this.force_registry = new ForceRegistry();
    this.gravity = new GravityGenerator({ x: 0, y: 9.81 });
  }

  /**
   * Add a new entity to the world.
   * @param {Object} new_entity The new entity to be added.
   * @returns 
   */
  add(new_entity) {
    if (new_entity instanceof RigidBody) {
      this.rigid_bodies.push(new_entity);
      this.force_registry.add(this.gravity, new_entity);
      return;
    }
    if (new_entity instanceof DistanceConstraint) {
      this.distance_constraints.push(new_entity);
      return;
    }
    if (new_entity instanceof Pin) {
      this.pins.push(new_entity);
    }
  }

  /**
   * Update all the objects in the world.
   * @param {number} dt The timestep.
   */
  step(dt) {
    this.force_registry.registry.map((registration) => registration.force_generator.updateForce(registration.rigid_body));
    this.distance_constraints.map((dist_constraint) => dist_constraint.update());
    this.pins.map((pin) => pin.update());
    this.rigid_bodies.map((rigid_body) => rigid_body.update(dt));
  }
}
