class Cube {
  constructor(x, y, z, len) {
    this.pos = createVector(x, y, z) // represent the position of a single cube
    this.len = len // length of cube
    this.config = new Config()
  }

  show() {
    stroke(0)
    strokeWeight(8)

    const r = this.len / 2

    push()

    translate(this.pos.x, this.pos.y, this.pos.z)

    //UP
    push()
    // fill(this.config.getColor('u'));
    texture(this.config.getColor('u'))
    textureMode(NORMAL)
    textureWrap(REPEAT)
    beginShape()
    vertex(-r, -r, -r, 0, 0)
    vertex(r, -r, -r, 1, 0)
    vertex(r, -r, r, 0, 1)
    vertex(-r, -r, r, 1, 1)
    endShape(CLOSE)
    pop()

    //DOWN
    push()
    // fill(this.config.getColor('d'));
    texture(this.config.getColor('d'))
    textureMode(NORMAL)
    textureWrap(REPEAT)
    beginShape()
    vertex(-r, r, -r, 0, 0)
    vertex(r, r, -r, 1, 0)
    vertex(r, r, r, 0, 1)
    vertex(-r, r, r, 1, 1)
    endShape(CLOSE)
    pop()

    //BACK
    push()
    // fill(this.config.getColor('b'));
    texture(this.config.getColor('b'))
    textureMode(NORMAL)
    textureWrap(REPEAT)
    beginShape()
    vertex(-r, -r, -r, 0, 0)
    vertex(r, -r, -r, 1, 0)
    vertex(r, r, -r, 0, 1)
    vertex(-r, r, -r, 1, 1)
    endShape(CLOSE)
    pop()

    //FRONT
    push()
    // fill(this.config.getColor('f'));
    texture(this.config.getColor('f'))
    textureMode(NORMAL)
    textureWrap(REPEAT)
    beginShape()
    vertex(-r, -r, r, 0, 0)
    vertex(r, -r, r, 1, 0)
    vertex(r, r, r, 0, 1)
    vertex(-r, r, r, 1, 1)
    endShape(CLOSE)
    pop()

    //LEFT
    push()
    // fill(this.config.getColor('l'));
    texture(this.config.getColor('l'))
    textureMode(NORMAL)
    textureWrap(REPEAT)
    beginShape()
    vertex(-r, -r, -r, 0, 0)
    vertex(-r, r, -r, 1, 0)
    vertex(-r, r, r, 0, 1)
    vertex(-r, -r, r, 1, 1)
    endShape(CLOSE)
    pop()

    //RIGHT
    push()
    // fill(this.config.getColor('r'));
    texture(this.config.getColor('r'))
    textureMode(NORMAL)
    textureWrap(REPEAT)
    beginShape()
    vertex(r, -r, -r, 0, 0)
    vertex(r, r, -r, 1, 0)
    vertex(r, r, r, 0, 1)
    vertex(r, -r, r, 1, 1)
    endShape(CLOSE)
    pop()

    pop()
  }
}
