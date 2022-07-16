import {Renderer2D} from "../render/renderer.js";
import {Clock} from "./clock.js";
import {PhysicsWorld} from "./world.js";

// A class to represent a physics engine.
export class Engine {
  
  /**
   * Creates a new physics engine.
   * @param {string} frame_id 
   * @param  {...any} options 
   */
  constructor(frame_id, ...options) {
    this.world = new PhysicsWorld();

    // Simulation frame
    this.frame = document.getElementById(frame_id);
    this.context = this.frame.getContext('2d');

    // Visual
    this.FRAME_WIDTH = this.frame.width;
    this.FRAME_HEIGHT = this.frame.height;
  }

  start() {
    this.#setup();
    this.#update();
  }

  #setup() {
    this.clock = new Clock();
  }

  #update() {
    let dt = this.clock.getTicks()/1000;
    this.world.step(dt);

    // Positive values are down (negatives up)
    this.context.clearRect(0, 0, this.FRAME_WIDTH, this.FRAME_HEIGHT);

    Renderer2D.renderRigidBodies(this.context, this.world.rigid_bodies);
    Renderer2D.renderDistanceConstraints(this.context, this.world.distance_constraints)
    Renderer2D.renderPins(this.context, this.world.pins);
    
    requestAnimationFrame(() => this.#update());
  }
  
}
