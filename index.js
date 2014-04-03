var glm = require('gl-matrix')
var vec3 = glm.vec3
var mat3 = glm.mat3
var mat4 = glm.mat4

module.exports = noclip

function noclip(position) {
  if (!(this instanceof noclip)) return new noclip(position)

  this.position = position || vec3.create()
  this.rotationX = this.rotationY = this.rotationZ = 0.0
  this.cameraVector = vec3.create()
}

noclip.prototype.view = function(output) {
  if (!output) output = mat4.create()

  mat4.rotateX(output, output, this.rotationX)
  mat4.rotateY(output, output, this.rotationY)
  mat4.rotateZ(output, output, this.rotationZ)

  this.cameraVector[0] = output[2]
  this.cameraVector[1] = output[6]
  this.cameraVector[2] = output[10]

  mat4.translate(output
    , output
    , this.position
  )

  return output
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
