// A class to represent a 2D vector.
export class Vector2 {

  /**
   * Create a new 2D vector.
   * @param {number} x The x-axis vector component.
   * @param {number} y The y-axis vector component.
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

/**
 * Get the magnitude of a 2D vector.
 * @param {Vector2} vector A 2D vector.
 * @returns {number} The magnitude of the given vector.
 */
export function magnitude(vector) {
  return (vector.x**2 + vector.y**2)**0.5;
}

/**
 * Get the sum of two 2D vectors.
 * @param {Vector2} vector The first vector.
 * @param {Vector2} other The second vector.
 * @returns {Vector2} The result vector.
 */
export function add(vector, other) {
  return new Vector2(
    vector.x + other.x, 
    vector.y + other.y
  );
}

/**
 * Get the difference between two 2D vectors.
 * @param {Vector2} vector The first vector.
 * @param {Vector2} other The second vector.
 * @returns {Vector2} The result vector.
 */
export function sub(vector, other) {
  return new Vector2(
    vector.x - other.x,
    vector.y - other.y
  );
}

/**
 * Get the result of the scalar multiplication between a 2D vector and a scalar quantity.
 * @param {Vector2} vector The vector operand.
 * @param {number} scalar The scalar operand.
 * @returns {Vector2} The result vector.
 */
export function scalarM(vector, scalar) {
  return new Vector2(
    vector.x * scalar,
    vector.y * scalar
  );
}

/**
 * Get the result of the dot product between a two 2D vectors.
 * @param {Vector2} vector The first vector.
 * @param {Vector2} other The second vector.
 * @returns {Vector2} The result vector.
 */
export function dot(vector, other) {
  return vector.x * other.x + vector.y * other.y;
}
