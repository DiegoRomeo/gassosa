// A class to represent a clock.
export class Clock {

  /**
   * Creates a new clock object.
   */
  constructor() {
    this.init_time = Date.now(); 
  }

  /**
   * Get the number of millisecons since last getTicks() call or object initialization.
   * @returns {number} The time passed since last getTicks() call in milliseconds.
   */
  getTicks() {
    if (!this.p_time) {
      this.p_time = Date.now();
      return this.p_time - this.init_time;
    }
    else {
      let axl_time = this.p_time;
      this.p_time = Date.now();
      return this.p_time - axl_time;
    }
  }

}
