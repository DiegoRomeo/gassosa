import {Engine} from "./core/engine.js";
import {Pin} from "./constraints/pin.js";
import {RigidBody} from "./bodies/rigid-body.js";
import {DistanceConstraint} from "./constraints/distance-constraint.js";

window.onload = function() {
  var engine = new Engine("simulation");
  
  var w1 = new RigidBody({x:100, y:300}, {x:0, y:0}, {x:0, y:0}, 10);
  var pin = new Pin({x:640, y:0}, w1);

  var w2 = new RigidBody({x:200, y:300}, {x:0,y:0}, {x:0, y:0}, 10);
  var dist_constr = new DistanceConstraint(w1, w2);

  engine.world.add(w1, w2, pin, dist_constr);

  engine.start();
}
