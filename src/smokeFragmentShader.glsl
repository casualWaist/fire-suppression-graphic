uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultiplier;
uniform float uAlphaA;
uniform float uAlphaB;
uniform float uTime;
uniform float uYPos;

varying float vElevation;
varying float vYPos;
varying float vYColor;

void main()
{
    float mixStrength = (vElevation + uColorOffset) * uColorMultiplier;
    float y = uAlphaA + vec3(viewMatrix).x * (uYPos + 2.0) * 0.125 + vYPos;
    vec4 color = mix(vec4(uDepthColor, y), vec4(uSurfaceColor, uAlphaB), mixStrength);
    color.xyz *= (vYColor + 2.0) * 0.25;
    gl_FragColor = color;
}
