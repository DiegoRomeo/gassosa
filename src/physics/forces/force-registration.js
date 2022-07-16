// A class to represent a force registration.
export class ForceRegistration {

  /**
   * Create a force registration using the given force generator and rigid_body.
   * @param {ForceGenerator} force_generator The force generator.
   * @param {RigidBody} rigid_body The rigid body.
   */
  constructor(force_generator, rigid_body) {
    this.force_generator = force_generator;
    this.rigid_body = rigid_body;
  }
}
