import {Engine} from "../../src/core/engine.js";
import {Pin} from "../../src/constraints/pin.js";
import {RigidBody} from "../../src/bodies/rigid-body.js";

window.onload = function() {
  var engine = new Engine("simulation");
  
  var w1 = new RigidBody({x:100, y:300}, {x:0, y:0}, {x:0, y:0}, 10);
  var pin = new Pin({x:640, y:0}, w1);

  engine.world.add(w1, pin);

  engine.start();
}
