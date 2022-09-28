// Copyright 2022 Rene Pohland.
// SPDX-License-Identifier: Apache-2.0

export default class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(v) {
    this.x += v.x;
    this.y += v.y;
  }

  subtract(v) {
    this.x -= v.x;
    this.y -= v.y;
  }

  multiply(v) {
    this.x *= v.x;
    this.y *= v.y;
  }
}
