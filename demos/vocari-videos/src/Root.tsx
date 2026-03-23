import { Composition, Sequence } from "remotion";
import { Scene1 as V1S1, Scene2 as V1S2, Scene3 as V1S3, Scene4 as V1S4 } from "./Video1Colegios";
import { Scene1 as V2S1, Scene2 as V2S2, Scene3 as V2S3, Scene4 as V2S4, Scene5 as V2S5 } from "./Video2Compra";
import { Scene1 as V3S1, Scene2 as V3S2, Scene3 as V3S3, Scene4 as V3S4, Scene5 as V3S5, Scene6 as V3S6 } from "./Video3Orientacion";
import {
  Scene1 as V4S1,
  Scene2 as V4S2,
  Scene3 as V4S3,
  Scene4 as V4S4,
  Scene5 as V4S5,
  Scene6 as V4S6,
  Scene7 as V4S7,
} from "./Video4AsistenciaIA";

const FPS = 30;
const WIDTH = 1920;
const HEIGHT = 1080;
const SCENE_DURATION = 90;

const Video1Colegios = () => (
  <>
    <Sequence from={0} durationInFrames={SCENE_DURATION}><V1S1 /></Sequence>
    <Sequence from={SCENE_DURATION} durationInFrames={SCENE_DURATION}><V1S2 /></Sequence>
    <Sequence from={SCENE_DURATION * 2} durationInFrames={SCENE_DURATION}><V1S3 /></Sequence>
    <Sequence from={SCENE_DURATION * 3} durationInFrames={SCENE_DURATION}><V1S4 /></Sequence>
  </>
);

const Video2Compra = () => (
  <>
    <Sequence from={0} durationInFrames={SCENE_DURATION}><V2S1 /></Sequence>
    <Sequence from={SCENE_DURATION} durationInFrames={SCENE_DURATION}><V2S2 /></Sequence>
    <Sequence from={SCENE_DURATION * 2} durationInFrames={SCENE_DURATION}><V2S3 /></Sequence>
    <Sequence from={SCENE_DURATION * 3} durationInFrames={SCENE_DURATION}><V2S4 /></Sequence>
    <Sequence from={SCENE_DURATION * 4} durationInFrames={SCENE_DURATION}><V2S5 /></Sequence>
  </>
);

const Video3Orientacion = () => (
  <>
    <Sequence from={0} durationInFrames={SCENE_DURATION}><V3S1 /></Sequence>
    <Sequence from={SCENE_DURATION} durationInFrames={SCENE_DURATION}><V3S2 /></Sequence>
    <Sequence from={SCENE_DURATION * 2} durationInFrames={SCENE_DURATION}><V3S3 /></Sequence>
    <Sequence from={SCENE_DURATION * 3} durationInFrames={SCENE_DURATION}><V3S4 /></Sequence>
    <Sequence from={SCENE_DURATION * 4} durationInFrames={SCENE_DURATION}><V3S5 /></Sequence>
    <Sequence from={SCENE_DURATION * 5} durationInFrames={SCENE_DURATION}><V3S6 /></Sequence>
  </>
);

const Video4AsistenciaIA = () => (
  <>
    <Sequence from={0} durationInFrames={SCENE_DURATION}><V4S1 /></Sequence>
    <Sequence from={SCENE_DURATION} durationInFrames={SCENE_DURATION}><V4S2 /></Sequence>
    <Sequence from={SCENE_DURATION * 2} durationInFrames={SCENE_DURATION}><V4S3 /></Sequence>
    <Sequence from={SCENE_DURATION * 3} durationInFrames={SCENE_DURATION}><V4S4 /></Sequence>
    <Sequence from={SCENE_DURATION * 4} durationInFrames={SCENE_DURATION}><V4S5 /></Sequence>
    <Sequence from={SCENE_DURATION * 5} durationInFrames={SCENE_DURATION}><V4S6 /></Sequence>
    <Sequence from={SCENE_DURATION * 6} durationInFrames={SCENE_DURATION}><V4S7 /></Sequence>
  </>
);

export const Root = () => {
  return (
    <>
      <Composition
        id="Video1Colegios"
        component={Video1Colegios}
        durationInFrames={SCENE_DURATION * 4}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Composition
        id="Video2Compra"
        component={Video2Compra}
        durationInFrames={SCENE_DURATION * 5}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Composition
        id="Video3Orientacion"
        component={Video3Orientacion}
        durationInFrames={SCENE_DURATION * 6}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
      <Composition
        id="Video4AsistenciaIA"
        component={Video4AsistenciaIA}
        durationInFrames={SCENE_DURATION * 7}
        fps={FPS}
        width={WIDTH}
        height={HEIGHT}
      />
    </>
  );
};
