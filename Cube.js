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
    // textureWrap(REPEAT)
    beginShape()
    vertex(-r, -r, -r, -r, -r)
    vertex(r, -r, -r, -r, -r)
    vertex(r, -r, r, r, r)
    vertex(-r, -r, r, r, r)
    endShape(CLOSE)
    pop()

    //DOWN
    push()
    // fill(this.config.getColor('d'));
    beginShape()
    vertex(-r, r, -r)
    vertex(r, r, -r)
    vertex(r, r, r)
    vertex(-r, r, r)
    endShape(CLOSE)
    pop()

    //BACK
    push()
    // fill(this.config.getColor('b'));
    // texture(this.config.getColor('b'))
    // textureMode(NORMAL)
    beginShape()
    vertex(-r, -r, -r)
    vertex(r, -r, -r)
    vertex(r, r, -r)
    vertex(-r, r, -r)
    endShape(CLOSE)
    pop()

    //FRONT
    push()
    // fill(this.config.getColor('f'));
    beginShape()
    vertex(-r, -r, r)
    vertex(r, -r, r)
    vertex(r, r, r)
    vertex(-r, r, r)
    endShape(CLOSE)
    pop()

    //LEFT
    push()
    // fill(this.config.getColor('l'));
    beginShape()
    vertex(-r, -r, -r)
    vertex(-r, r, -r)
    vertex(-r, r, r)
    vertex(-r, -r, r)
    endShape(CLOSE)
    pop()

    //RIGHT
    push()
    // fill(this.config.getColor('r'));
    beginShape()
    vertex(r, -r, -r)
    vertex(r, r, -r)
    vertex(r, r, r)
    vertex(r, -r, r)
    endShape(CLOSE)
    pop()

    pop()
  }
}
