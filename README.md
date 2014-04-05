# basic-camera [![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

A very basic camera for use in WebGL projects. Borrows a lot from
[mikolalysenko](https://github.com/mikolalysenko)'s
[orbit-camera](https://github.com/mikolalysenko/orbit-camera) module.

[![basic-camera](https://nodei.co/npm/basic-camera.png?mini=true)](https://nodei.co/npm/basic-camera)

## Usage ##

### `camera = require('basic-camera')([pos])` ###

Creates a new camera: optionally, you can pass in `pos` to set the initial
position.

### `camera.position` ###

A [gl-matrix](https://github.com/toji/gl-matrix) `vec3` representing the
position of the camera. It's array-like, so you can just set the `[0]`, `[1]`
and `[2]` indices to change the position.

### `camera.rotateX(radians)` ###

Rotates the camera along the x-axis by `radians`.

### `camera.rotateY(radians)` ###

Rotates the camera along the y-axis by `radians`.

### `camera.rotateZ(radians)` ###

Rotates the camera along the z-axis by `radians`.

### `camera.getCameraVector(v)` ###

Sets a `vec3` to a vector corresponding to the camera's direction.

### `camera.view([output])` ###

Returns a new [gl-matrix](https://github.com/toji/gl-matrix) `mat4`, which you
can then safely pass onto something like
[gl-shader](http://github.com/mikolalysenko/gl-shader) to handle the camera.
