attribute vec3 position;
attribute vec3 normal;

uniform mat4 projection;
uniform mat4 model;
uniform mat4 view;

varying vec3 pos;
varying vec3 norm;

void main() {
  pos = position;
  norm = normal;
  gl_Position = projection * view * model * vec4(position, 1.0);
}
