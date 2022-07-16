export class Renderer2D {

  /**
   * Cannot instantiate Renderer2D. 
   */
  constructor() {
    throw new Error("Cannot instantiate Renderer2D");
  }

  /**
   * Draw a line in the given 2D canvas rendering context.
   * @param {CanvasRenderingContext2D} context The 2D canvas rendering context.
   * @param {Vector2} pointA The starting point of the line.
   * @param {Vector2} pointB The ending point of the line.
   * @param {string} color The color of the line.
   */
  static drawLine(context, pointA, pointB, color) {
    context.strokeStyle = color;

    context.beginPath();
    context.moveTo(pointA.x, pointA.y);
    context.lineTo(pointB.x, pointB.y);
    context.stroke();
  }

  /**
   * Draw a circle in the given 2D canvas rendering context.
   * @param {CanvasRenderingContext2D} context The 2D canvas rendering context.
   * @param {Vector2} position The position of the circle.
   * @param {Vector2} radius The radius of the circle.
   * @param {string} color The color of the circle.
   */
  static drawCircle(context, position, radius, color) {
    context.fillStyle = color;

    context.beginPath();
    context.arc(position.x, position.y, radius, 0, 2 * Math.PI);
    context.fill();
  }

  /**
   * Draw a rectangle in the given 2D canvas rendering context.
   * @param {CanvasRenderingContext2D} context The 2D canvas rendering context.
   * @param {Vector2} position The position of the rectangle.
   * @param {Vector2} size The size of the rectangle.
   * @param {string} color The color of the rectangle.
   */
  static drawRectangle(context, position, size, color) {
    context.fillStyle = color;

    context.beginPath();
    context.rect(position.x, position.y, size.x, size.y);
    context.fill();
  }

  /**
   * Render all the given rigid bodies.
   * @param {CanvasRenderingContext2D} context The 2D canvas rendering context.
   * @param {Array} rigid_bodies The rigid bodies to be rendered.
   */
  static renderRigidBodies(context, rigid_bodies) {    
    // All the possible shapes for a rigid body.
    let shapes = {
      'circle': (ctx, pos, rad, color) => Renderer2D.drawCircle(ctx, pos, rad, color),
      'rectangle': (ctx, pos, size, color) => Renderer2D.drawRectangle(ctx, pos, size, color),
    };

    for (let rigid_body of rigid_bodies) {
      try {
        shapes[rigid_body.shape_config.type](context, rigid_body.position, rigid_body.shape_config.radius, rigid_body.shape_config.color);
      }
      catch(error) {
        throw new Error("Invalid body.shape_config.type");
      }
    }
  }

  /**
   * Render all the given pins.
   * @param {CanvasRenderingContext2D} context The 2D canvas rendering context.
   * @param {*} pins The pins to be rendered.
   */
  static renderPins(context, pins) {
    for (let pin of pins) {
      Renderer2D.drawLine(context, pin.point, pin.obj.position, pin.shape_config.color)
    }
  }

  /**
   * Render all the given distance constraints.
   * @param {CanvasRenderingContext2D} context The 2D canvas rendering context.
   * @param {Array} distance_constraints The distance constraints to be rendered.
   */
  static renderDistanceConstraints(context, distance_constraints) {
    for (let dist_constraint of distance_constraints) {
      Renderer2D.drawLine(context, dist_constraint.objA.position, dist_constraint.objB.position, dist_constraint.shape_config.color);
    }
  }
}

// TODO: substitute all the for loops with the map function.
