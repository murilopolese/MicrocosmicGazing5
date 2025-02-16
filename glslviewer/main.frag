
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


uniform vec3 u_pos_0;

uniform vec3 u_pos_1;

uniform vec3 u_pos_2;

uniform vec3 u_pos_3;

uniform vec3 u_pos_4;

uniform vec3 u_pos_5;

uniform vec3 u_pos_6;

uniform vec3 u_pos_7;

uniform vec3 u_pos_8;

uniform vec3 u_pos_9;

uniform vec3 u_pos_10;

uniform vec3 u_pos_11;

uniform vec3 u_pos_12;

uniform vec3 u_pos_13;

uniform vec3 u_pos_14;

uniform vec3 u_pos_15;

uniform vec3 u_pos_16;

uniform vec3 u_pos_17;

uniform vec3 u_pos_18;

uniform vec3 u_pos_19;

uniform vec3 u_pos_20;

uniform vec3 u_pos_21;

uniform vec3 u_pos_22;

uniform vec3 u_pos_23;

uniform vec3 u_pos_24;

uniform vec3 u_pos_25;

uniform vec3 u_pos_26;

uniform vec3 u_pos_27;

uniform vec3 u_pos_28;

uniform vec3 u_pos_29;

uniform vec3 u_pos_30;

uniform vec3 u_pos_31;

uniform vec3 u_pos_32;

uniform vec3 u_pos_33;

uniform vec3 u_pos_34;

uniform vec3 u_pos_35;

uniform vec3 u_pos_36;

uniform vec3 u_pos_37;

uniform vec3 u_pos_38;

uniform vec3 u_pos_39;

uniform vec3 u_pos_40;

uniform vec3 u_pos_41;

uniform vec3 u_pos_42;

uniform vec3 u_pos_43;

uniform vec3 u_pos_44;

uniform vec3 u_pos_45;

uniform vec3 u_pos_46;

uniform vec3 u_pos_47;

uniform vec3 u_pos_48;

uniform vec3 u_pos_49;

uniform vec3 u_pos_50;

uniform vec3 u_pos_51;

uniform vec3 u_pos_52;

uniform vec3 u_pos_53;

uniform vec3 u_pos_54;

uniform vec3 u_pos_55;

uniform vec3 u_pos_56;

uniform vec3 u_pos_57;

uniform vec3 u_pos_58;

uniform vec3 u_pos_59;

uniform vec3 u_pos_60;

uniform vec3 u_pos_61;

uniform vec3 u_pos_62;

uniform vec3 u_pos_63;

uniform vec3 u_pos_64;

uniform vec3 u_pos_65;

uniform vec3 u_pos_66;

uniform vec3 u_pos_67;

uniform vec3 u_pos_68;

uniform vec3 u_pos_69;

uniform vec3 u_pos_70;

uniform vec3 u_pos_71;

uniform vec3 u_pos_72;

uniform vec3 u_pos_73;

uniform vec3 u_pos_74;

uniform vec3 u_pos_75;

uniform vec3 u_pos_76;

uniform vec3 u_pos_77;

uniform vec3 u_pos_78;

uniform vec3 u_pos_79;

uniform vec3 u_pos_80;

uniform vec3 u_pos_81;

uniform vec3 u_pos_82;

uniform vec3 u_pos_83;

uniform vec3 u_pos_84;

uniform vec3 u_pos_85;

uniform vec3 u_pos_86;

uniform vec3 u_pos_87;

uniform vec3 u_pos_88;

uniform vec3 u_pos_89;

uniform vec3 u_pos_90;

uniform vec3 u_pos_91;

uniform vec3 u_pos_92;

uniform vec3 u_pos_93;

uniform vec3 u_pos_94;

uniform vec3 u_pos_95;

uniform vec3 u_pos_96;

uniform vec3 u_pos_97;

uniform vec3 u_pos_98;

uniform vec3 u_pos_99;

uniform vec3 u_pos_100;

uniform vec3 u_pos_101;

uniform vec3 u_pos_102;

uniform vec3 u_pos_103;

uniform vec3 u_pos_104;

uniform vec3 u_pos_105;

uniform vec3 u_pos_106;

uniform vec3 u_pos_107;

uniform vec3 u_pos_108;

uniform vec3 u_pos_109;

uniform vec3 u_pos_110;

uniform vec3 u_pos_111;

uniform vec3 u_pos_112;

uniform vec3 u_pos_113;

uniform vec3 u_pos_114;

uniform vec3 u_pos_115;

uniform vec3 u_pos_116;

uniform vec3 u_pos_117;

uniform vec3 u_pos_118;

uniform vec3 u_pos_119;

uniform vec3 u_pos_120;

uniform vec3 u_pos_121;

uniform vec3 u_pos_122;

uniform vec3 u_pos_123;

uniform vec3 u_pos_124;

uniform vec3 u_pos_125;

uniform vec3 u_pos_126;

uniform vec3 u_pos_127;

uniform vec3 u_pos_128;

uniform vec3 u_pos_129;

uniform vec3 u_pos_130;

uniform vec3 u_pos_131;

uniform vec3 u_pos_132;

uniform vec3 u_pos_133;

uniform vec3 u_pos_134;

uniform vec3 u_pos_135;

uniform vec3 u_pos_136;

uniform vec3 u_pos_137;

uniform vec3 u_pos_138;

uniform vec3 u_pos_139;

uniform vec3 u_pos_140;

uniform vec3 u_pos_141;

uniform vec3 u_pos_142;

uniform vec3 u_pos_143;

uniform vec3 u_pos_144;

uniform vec3 u_pos_145;

uniform vec3 u_pos_146;

uniform vec3 u_pos_147;

uniform vec3 u_pos_148;

uniform vec3 u_pos_149;

uniform vec3 u_pos_150;

uniform vec3 u_pos_151;

uniform vec3 u_pos_152;

uniform vec3 u_pos_153;

uniform vec3 u_pos_154;

uniform vec3 u_pos_155;

uniform vec3 u_pos_156;

uniform vec3 u_pos_157;

uniform vec3 u_pos_158;

uniform vec3 u_pos_159;

uniform vec3 u_pos_160;

uniform vec3 u_pos_161;

uniform vec3 u_pos_162;

uniform vec3 u_pos_163;

uniform vec3 u_pos_164;

uniform vec3 u_pos_165;

uniform vec3 u_pos_166;

uniform vec3 u_pos_167;

uniform vec3 u_pos_168;

uniform vec3 u_pos_169;

uniform vec3 u_pos_170;

uniform vec3 u_pos_171;

uniform vec3 u_pos_172;

uniform vec3 u_pos_173;

uniform vec3 u_pos_174;

uniform vec3 u_pos_175;

uniform vec3 u_pos_176;

uniform vec3 u_pos_177;

uniform vec3 u_pos_178;

uniform vec3 u_pos_179;

uniform vec3 u_pos_180;

uniform vec3 u_pos_181;

uniform vec3 u_pos_182;

uniform vec3 u_pos_183;

uniform vec3 u_pos_184;

uniform vec3 u_pos_185;

uniform vec3 u_pos_186;

uniform vec3 u_pos_187;

uniform vec3 u_pos_188;

uniform vec3 u_pos_189;

uniform vec3 u_pos_190;

uniform vec3 u_pos_191;

uniform vec3 u_pos_192;

uniform vec3 u_pos_193;

uniform vec3 u_pos_194;

uniform vec3 u_pos_195;

uniform vec3 u_pos_196;

uniform vec3 u_pos_197;

uniform vec3 u_pos_198;

uniform vec3 u_pos_199;

uniform vec3 u_pos_200;

uniform vec3 u_pos_201;

uniform vec3 u_pos_202;

uniform vec3 u_pos_203;

uniform vec3 u_pos_204;

uniform vec3 u_pos_205;

uniform vec3 u_pos_206;

uniform vec3 u_pos_207;

uniform vec3 u_pos_208;

uniform vec3 u_pos_209;

uniform vec3 u_pos_210;

uniform vec3 u_pos_211;

uniform vec3 u_pos_212;

uniform vec3 u_pos_213;

uniform vec3 u_pos_214;

uniform vec3 u_pos_215;

uniform vec3 u_pos_216;

uniform vec3 u_pos_217;

uniform vec3 u_pos_218;

uniform vec3 u_pos_219;

uniform vec3 u_pos_220;

uniform vec3 u_pos_221;

uniform vec3 u_pos_222;

uniform vec3 u_pos_223;

uniform vec3 u_pos_224;

uniform vec3 u_pos_225;

uniform vec3 u_pos_226;

uniform vec3 u_pos_227;

uniform vec3 u_pos_228;

uniform vec3 u_pos_229;

uniform vec3 u_pos_230;

uniform vec3 u_pos_231;

uniform vec3 u_pos_232;

uniform vec3 u_pos_233;

uniform vec3 u_pos_234;

uniform vec3 u_pos_235;

uniform vec3 u_pos_236;

uniform vec3 u_pos_237;

uniform vec3 u_pos_238;

uniform vec3 u_pos_239;

uniform vec3 u_pos_240;

uniform vec3 u_pos_241;

uniform vec3 u_pos_242;

uniform vec3 u_pos_243;

uniform vec3 u_pos_244;

uniform vec3 u_pos_245;

uniform vec3 u_pos_246;

uniform vec3 u_pos_247;

uniform vec3 u_pos_248;

uniform vec3 u_pos_249;

uniform vec3 u_pos_250;

uniform vec3 u_pos_251;

uniform vec3 u_pos_252;

uniform vec3 u_pos_253;

uniform vec3 u_pos_254;

uniform vec3 u_pos_255;

uniform vec3 u_pos_256;

uniform vec3 u_pos_257;

uniform vec3 u_pos_258;

uniform vec3 u_pos_259;

uniform vec3 u_pos_260;

uniform vec3 u_pos_261;

uniform vec3 u_pos_262;

uniform vec3 u_pos_263;

uniform vec3 u_pos_264;

uniform vec3 u_pos_265;

uniform vec3 u_pos_266;

uniform vec3 u_pos_267;

uniform vec3 u_pos_268;

uniform vec3 u_pos_269;

uniform vec3 u_pos_270;

uniform vec3 u_pos_271;

uniform vec3 u_pos_272;

uniform vec3 u_pos_273;

uniform vec3 u_pos_274;

uniform vec3 u_pos_275;

uniform vec3 u_pos_276;

uniform vec3 u_pos_277;

uniform vec3 u_pos_278;

uniform vec3 u_pos_279;

uniform vec3 u_pos_280;

uniform vec3 u_pos_281;

uniform vec3 u_pos_282;

uniform vec3 u_pos_283;

uniform vec3 u_pos_284;

uniform vec3 u_pos_285;

uniform vec3 u_pos_286;

uniform vec3 u_pos_287;

uniform vec3 u_pos_288;

uniform vec3 u_pos_289;

uniform vec3 u_pos_290;

uniform vec3 u_pos_291;

uniform vec3 u_pos_292;

uniform vec3 u_pos_293;

uniform vec3 u_pos_294;

uniform vec3 u_pos_295;

uniform vec3 u_pos_296;

uniform vec3 u_pos_297;

uniform vec3 u_pos_298;

uniform vec3 u_pos_299;

uniform vec3 u_pos_300;

uniform vec3 u_pos_301;

uniform vec3 u_pos_302;

uniform vec3 u_pos_303;

uniform vec3 u_pos_304;

uniform vec3 u_pos_305;

uniform vec3 u_pos_306;

uniform vec3 u_pos_307;

uniform vec3 u_pos_308;

uniform vec3 u_pos_309;

uniform vec3 u_pos_310;

uniform vec3 u_pos_311;

uniform vec3 u_pos_312;

uniform vec3 u_pos_313;

uniform vec3 u_pos_314;

uniform vec3 u_pos_315;

uniform vec3 u_pos_316;

uniform vec3 u_pos_317;

uniform vec3 u_pos_318;

uniform vec3 u_pos_319;

uniform vec3 u_pos_320;

uniform vec3 u_pos_321;

uniform vec3 u_pos_322;

uniform vec3 u_pos_323;

uniform vec3 u_pos_324;

uniform vec3 u_pos_325;

uniform vec3 u_pos_326;

uniform vec3 u_pos_327;

uniform vec3 u_pos_328;

uniform vec3 u_pos_329;

uniform vec3 u_pos_330;

uniform vec3 u_pos_331;

uniform vec3 u_pos_332;

uniform vec3 u_pos_333;

uniform vec3 u_pos_334;

uniform vec3 u_pos_335;

uniform vec3 u_pos_336;

uniform vec3 u_pos_337;

uniform vec3 u_pos_338;

uniform vec3 u_pos_339;

uniform vec3 u_pos_340;

uniform vec3 u_pos_341;

uniform vec3 u_pos_342;

uniform vec3 u_pos_343;

uniform vec3 u_pos_344;

uniform vec3 u_pos_345;

uniform vec3 u_pos_346;

uniform vec3 u_pos_347;

uniform vec3 u_pos_348;

uniform vec3 u_pos_349;

uniform vec3 u_pos_350;

uniform vec3 u_pos_351;

uniform vec3 u_pos_352;

uniform vec3 u_pos_353;

uniform vec3 u_pos_354;

uniform vec3 u_pos_355;

uniform vec3 u_pos_356;

uniform vec3 u_pos_357;

uniform vec3 u_pos_358;

uniform vec3 u_pos_359;

uniform vec3 u_pos_360;

uniform vec3 u_pos_361;

uniform vec3 u_pos_362;

uniform vec3 u_pos_363;

uniform vec3 u_pos_364;

uniform vec3 u_pos_365;

uniform vec3 u_pos_366;

uniform vec3 u_pos_367;

uniform vec3 u_pos_368;

uniform vec3 u_pos_369;

uniform vec3 u_pos_370;

uniform vec3 u_pos_371;

uniform vec3 u_pos_372;

uniform vec3 u_pos_373;

uniform vec3 u_pos_374;

uniform vec3 u_pos_375;

uniform vec3 u_pos_376;

uniform vec3 u_pos_377;

uniform vec3 u_pos_378;

uniform vec3 u_pos_379;

uniform vec3 u_pos_380;

uniform vec3 u_pos_381;

uniform vec3 u_pos_382;

uniform vec3 u_pos_383;

uniform vec3 u_pos_384;

uniform vec3 u_pos_385;

uniform vec3 u_pos_386;

uniform vec3 u_pos_387;

uniform vec3 u_pos_388;

uniform vec3 u_pos_389;

uniform vec3 u_pos_390;

uniform vec3 u_pos_391;

uniform vec3 u_pos_392;

uniform vec3 u_pos_393;

uniform vec3 u_pos_394;

uniform vec3 u_pos_395;

uniform vec3 u_pos_396;

uniform vec3 u_pos_397;

uniform vec3 u_pos_398;

uniform vec3 u_pos_399;

uniform vec3 u_pos_400;

uniform vec3 u_pos_401;

uniform vec3 u_pos_402;

uniform vec3 u_pos_403;

uniform vec3 u_pos_404;

uniform vec3 u_pos_405;

uniform vec3 u_pos_406;

uniform vec3 u_pos_407;

uniform vec3 u_pos_408;

uniform vec3 u_pos_409;

uniform vec3 u_pos_410;

uniform vec3 u_pos_411;

uniform vec3 u_pos_412;

uniform vec3 u_pos_413;

uniform vec3 u_pos_414;

uniform vec3 u_pos_415;

uniform vec3 u_pos_416;

uniform vec3 u_pos_417;

uniform vec3 u_pos_418;

uniform vec3 u_pos_419;

uniform vec3 u_pos_420;

uniform vec3 u_pos_421;

uniform vec3 u_pos_422;

uniform vec3 u_pos_423;

uniform vec3 u_pos_424;

uniform vec3 u_pos_425;

uniform vec3 u_pos_426;

uniform vec3 u_pos_427;

uniform vec3 u_pos_428;

uniform vec3 u_pos_429;

uniform vec3 u_pos_430;

uniform vec3 u_pos_431;

uniform vec3 u_pos_432;

uniform vec3 u_pos_433;

uniform vec3 u_pos_434;

uniform vec3 u_pos_435;

uniform vec3 u_pos_436;

uniform vec3 u_pos_437;

uniform vec3 u_pos_438;

uniform vec3 u_pos_439;

uniform vec3 u_pos_440;

uniform vec3 u_pos_441;

uniform vec3 u_pos_442;

uniform vec3 u_pos_443;

uniform vec3 u_pos_444;

uniform vec3 u_pos_445;

uniform vec3 u_pos_446;

uniform vec3 u_pos_447;

uniform vec3 u_pos_448;

uniform vec3 u_pos_449;

uniform vec3 u_pos_450;

uniform vec3 u_pos_451;

uniform vec3 u_pos_452;

uniform vec3 u_pos_453;

uniform vec3 u_pos_454;

uniform vec3 u_pos_455;

uniform vec3 u_pos_456;

uniform vec3 u_pos_457;

uniform vec3 u_pos_458;

uniform vec3 u_pos_459;

uniform vec3 u_pos_460;

uniform vec3 u_pos_461;

uniform vec3 u_pos_462;

uniform vec3 u_pos_463;

uniform vec3 u_pos_464;

uniform vec3 u_pos_465;

uniform vec3 u_pos_466;

uniform vec3 u_pos_467;

uniform vec3 u_pos_468;

uniform vec3 u_pos_469;

uniform vec3 u_pos_470;

uniform vec3 u_pos_471;

uniform vec3 u_pos_472;

uniform vec3 u_pos_473;

uniform vec3 u_pos_474;

uniform vec3 u_pos_475;

uniform vec3 u_pos_476;

uniform vec3 u_pos_477;

uniform vec3 u_pos_478;

uniform vec3 u_pos_479;

uniform vec3 u_pos_480;

uniform vec3 u_pos_481;

uniform vec3 u_pos_482;

uniform vec3 u_pos_483;

uniform vec3 u_pos_484;

uniform vec3 u_pos_485;

uniform vec3 u_pos_486;

uniform vec3 u_pos_487;

uniform vec3 u_pos_488;

uniform vec3 u_pos_489;

uniform vec3 u_pos_490;

uniform vec3 u_pos_491;

uniform vec3 u_pos_492;

uniform vec3 u_pos_493;

uniform vec3 u_pos_494;

uniform vec3 u_pos_495;

uniform vec3 u_pos_496;

uniform vec3 u_pos_497;

uniform vec3 u_pos_498;

uniform vec3 u_pos_499;


void main(void) {
    vec4 color = vec4(vec3(0.0), 1.0);
    vec2 pixel = 1.0/u_resolution.xy;
    vec2 st = gl_FragCoord.xy * pixel;
    vec2 uv = v_texcoord;
    vec2 circlePosition;
    float sceneDistance;
    
circlePosition = translate(uv, u_pos_0.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_1.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_2.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_3.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_4.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_5.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_6.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_7.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_8.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_9.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_10.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_11.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_12.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_13.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_14.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_15.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_16.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_17.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_18.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_19.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_20.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_21.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_22.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_23.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_24.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_25.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_26.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_27.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_28.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_29.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_30.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_31.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_32.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_33.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_34.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_35.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_36.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_37.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_38.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_39.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_40.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_41.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_42.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_43.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_44.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_45.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_46.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_47.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_48.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_49.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_50.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_51.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_52.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_53.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_54.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_55.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_56.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_57.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_58.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_59.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_60.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_61.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_62.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_63.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_64.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_65.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_66.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_67.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_68.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_69.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_70.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_71.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_72.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_73.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_74.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_75.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_76.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_77.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_78.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_79.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_80.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_81.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_82.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_83.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_84.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_85.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_86.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_87.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_88.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_89.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_90.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_91.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_92.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_93.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_94.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_95.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_96.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_97.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_98.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_99.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_100.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_101.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_102.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_103.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_104.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_105.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_106.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_107.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_108.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_109.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_110.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_111.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_112.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_113.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_114.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_115.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_116.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_117.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_118.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_119.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_120.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_121.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_122.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_123.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_124.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_125.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_126.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_127.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_128.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_129.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_130.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_131.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_132.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_133.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_134.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_135.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_136.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_137.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_138.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_139.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_140.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_141.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_142.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_143.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_144.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_145.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_146.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_147.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_148.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_149.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_150.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_151.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_152.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_153.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_154.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_155.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_156.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_157.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_158.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_159.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_160.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_161.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_162.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_163.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_164.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_165.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_166.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_167.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_168.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_169.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_170.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_171.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_172.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_173.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_174.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_175.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_176.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_177.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_178.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_179.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_180.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_181.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_182.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_183.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_184.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_185.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_186.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_187.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_188.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_189.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_190.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_191.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_192.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_193.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_194.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_195.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_196.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_197.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_198.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_199.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_200.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_201.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_202.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_203.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_204.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_205.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_206.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_207.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_208.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_209.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_210.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_211.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_212.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_213.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_214.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_215.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_216.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_217.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_218.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_219.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_220.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_221.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_222.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_223.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_224.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_225.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_226.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_227.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_228.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_229.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_230.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_231.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_232.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_233.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_234.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_235.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_236.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_237.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_238.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_239.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_240.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_241.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_242.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_243.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_244.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_245.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_246.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_247.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_248.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_249.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_250.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_251.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_252.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_253.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_254.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_255.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_256.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_257.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_258.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_259.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_260.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_261.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_262.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_263.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_264.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_265.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_266.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_267.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_268.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_269.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_270.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_271.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_272.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_273.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_274.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_275.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_276.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_277.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_278.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_279.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_280.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_281.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_282.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_283.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_284.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_285.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_286.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_287.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_288.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_289.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_290.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_291.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_292.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_293.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_294.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_295.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_296.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_297.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_298.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_299.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_300.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_301.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_302.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_303.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_304.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_305.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_306.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_307.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_308.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_309.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_310.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_311.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_312.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_313.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_314.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_315.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_316.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_317.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_318.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_319.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_320.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_321.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_322.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_323.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_324.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_325.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_326.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_327.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_328.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_329.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_330.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_331.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_332.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_333.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_334.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_335.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_336.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_337.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_338.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_339.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_340.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_341.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_342.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_343.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_344.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_345.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_346.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_347.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_348.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_349.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_350.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_351.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_352.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_353.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_354.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_355.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_356.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_357.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_358.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_359.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_360.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_361.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_362.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_363.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_364.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_365.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_366.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_367.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_368.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_369.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_370.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_371.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_372.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_373.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_374.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_375.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_376.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_377.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_378.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_379.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_380.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_381.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_382.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_383.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_384.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_385.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_386.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_387.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_388.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_389.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_390.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_391.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_392.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_393.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_394.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_395.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_396.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_397.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_398.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_399.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_400.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_401.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_402.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_403.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_404.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_405.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_406.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_407.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_408.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_409.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_410.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_411.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_412.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_413.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_414.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_415.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_416.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_417.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_418.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_419.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_420.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_421.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_422.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_423.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_424.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_425.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_426.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_427.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_428.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_429.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_430.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_431.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_432.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_433.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_434.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_435.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_436.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_437.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_438.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_439.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_440.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_441.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_442.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_443.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_444.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_445.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_446.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_447.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_448.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_449.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_450.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_451.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_452.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_453.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_454.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_455.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_456.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_457.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_458.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_459.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_460.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_461.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_462.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_463.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_464.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_465.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_466.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_467.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_468.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_469.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_470.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_471.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_472.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_473.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_474.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_475.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_476.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_477.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_478.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_479.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_480.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_481.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_482.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_483.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_484.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_485.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_486.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_487.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_488.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_489.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_490.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_491.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_492.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_493.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_494.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_495.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_496.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_497.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_498.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

circlePosition = translate(uv, u_pos_499.xy/vec2(1280, 720));
sceneDistance = circle(circlePosition, 0.0);
color.r += 1.0 - smoothstep(0.005, 0.0051, sceneDistance);

    gl_FragColor = color;
}


