var glm = require('gl-matrix')
var vec3 = glm.vec3
var mat4 = glm.mat4

module.exports = noclip

var scratch0 = mat4.create()

function noclip(position) {
  if (!(this instanceof noclip)) return new noclip(position)

  this.position = position || vec3.create()
  this.rotationX = this.rotationY = this.rotationZ = 0.0
}

noclip.prototype.view = function(output) {
  if (!output) output = mat4.create()

  mat4.identity(scratch0)
  mat4.rotateX(scratch0, scratch0, this.rotationX)
  mat4.rotateY(scratch0, scratch0, this.rotationY)
  mat4.rotateZ(scratch0, scratch0, this.rotationZ)

  mat4.translate(output
    , scratch0
    , this.position
  )

  return output
}

noclip.prototype.getCameraVector = function(v) {
  v[0] = scratch0[2]
  v[1] = scratch0[6]
  v[2] = scratch0[10]
  return v
}

noclip.prototype.rotateX   = function(angle) {
  this.rotationX += angle
  return this
}

noclip.prototype.rotateY   = function(angle) {
  this.rotationY += angle
  return this
}

noclip.prototype.rotateZ   = function(angle) {
  this.rotationZ += angle
  return this
}
