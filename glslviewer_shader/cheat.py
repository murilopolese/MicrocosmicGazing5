def template_shader():
    return """
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
varying vec2 v_texcoord;

float map(float x, float in_min, float in_max, float out_min, float out_max) {
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

float circle(vec2 samplePosition, float radius){
    return length(samplePosition) - radius;
}
vec2 translate(vec2 samplePosition, vec2 offset){
    return samplePosition - offset;
}

{defines}

void main(void) {
    vec4 color = vec4(vec3(0.0), 1.0);
    vec2 pixel = 1.0/u_resolution.xy;
    vec2 st = gl_FragCoord.xy * pixel;
    vec2 uv = v_texcoord;
    vec2 circlePosition;
    float sceneDistance;
    {drawings}
    gl_FragColor = color;
}

"""

def template_define(n):
    ret = ""
    for i in range(0, n):
        ret += """
uniform vec3 u_pos_{i};
""".format(i=i)
    return ret

def template_draw(n):
    ret = ""
    for i in range(0, n):
        ret += """
circlePosition = translate(uv, u_pos_{i}.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);
""".format(i=i)
    return ret


N = 500
defines = template_define(N)
draws = template_draw(N)
template = template_shader()
template = template.replace("{defines}", defines)
template = template.replace("{drawings}", draws)
print(template)
