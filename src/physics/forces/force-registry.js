import {ForceRegistration} from "./force-registration.js";

// A class to represent a force registry.
export class ForceRegistry {

  /**
   * Create a force registry.
   */
  constructor() {
    this.registry = new Array();
  }

  /**
   * Add a new force registration to the registry. 
   * @param {ForceGenerator} force_generator The force generator.
   * @param {RigidBody} rigid_body The rigid body.
   */
  add(force_generator, rigid_body) {
    let force_registration = new ForceRegistration(force_generator, rigid_body);
    this.registry.push(force_registration);
  }

  /**
   * Remove a force registration from the registry.
   * @param {ForceRegistration} registration The registration to be removed from the registry.
   */
  remove(registration) {
    let index = this.registry.indexOf(registration);
    this.registry.splice(index, 1);
  }
}
