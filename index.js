var glm = require('gl-matrix')
var vec3 = glm.vec3
var mat3 = glm.mat3
var mat4 = glm.mat4
var quat = glm.quat

var scratch0 = new Float32Array(16)
var scratch1 = new Float32Array(16)

module.exports = noclip

function noclip(position) {
  if (!(this instanceof noclip)) return new noclip(position)

  this.position = position || vec3.create()
  this.rotation = quat.create()
}

noclip.prototype.view = function(output) {
  if (!output) output = mat4.create()
  scratch1[0] =
  scratch1[1] =
  scratch1[2] = 0

  mat4.fromRotationTranslation(output
    , quat.conjugate(scratch0, this.rotation)
    , scratch1
  )
  mat4.translate(output
    , output
    , this.position
  )

  return output
}

noclip.prototype.rotateX   = function(angle) {
  quat.rotateX(this.rotation, this.rotation, angle)
  return this
}

noclip.prototype.rotateY   = function(angle) {
  quat.rotateY(this.rotation, this.rotation, angle)
  return this
}

noclip.prototype.rotateZ   = function(angle) {
  quat.rotateZ(this.rotation, this.rotation, angle)
  return this
}
