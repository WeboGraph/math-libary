// Copyright 2022 Rene Pohland.
// SPDX-License-Identifier: Apache-2.0

export default class Vector {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  /**
   * Set the given values to the Vector itself.
   *
   * @param {*} { x, y, z }
   * @memberof Vector
   */
  set({ x, y, z }) {
    if (Number.isNumber(x)) this.x = x;
    if (Number.isNumber(y)) this.y = y;
    if (Number.isNumber(z)) this.z = z;
  }

  /**
   * Creates a copy of the vector.
   *
   * @returns Vector
   * @memberof Vector
   */
  copy() {
    return new Vector(this.x, this.y, this.z);
  }

  //* Math operations

  /**
   * Adds a given vector to the vector.
   *
   * @param {Vector} v
   * @memberof Vector
   */
  add(v) {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
  }

  /**
   * Subtract a given vector from the vector.
   *
   * @param {Vector} v
   * @memberof Vector
   */
  subtract(v) {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
  }

  /**
   * Multiplies the vector with the given one.
   *
   * @param {*} v
   * @memberof Vector
   */
  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
  }
}
