import { registerRoot } from "remotion";
import { Composition } from "remotion";
import React from "react";
import { Scene1 } from "./MaritimeScene1";
import { Scene2 } from "./MaritimeScene2";
import { Scene3 } from "./MaritimeScene3";
import { Scene4 } from "./MaritimeScene4";
import { Scene5 } from "./MaritimeScene5";

const FPS = 30;
const SCENE_DURATION = 90;

const MaritimeVideo = () => (
  <>
    <Sequence from={0} durationInFrames={SCENE_DURATION}><Scene1 /></Sequence>
    <Sequence from={SCENE_DURATION} durationInFrames={SCENE_DURATION}><Scene2 /></Sequence>
    <Sequence from={SCENE_DURATION * 2} durationInFrames={SCENE_DURATION}><Scene3 /></Sequence>
    <Sequence from={SCENE_DURATION * 3} durationInFrames={SCENE_DURATION}><Scene4 /></Sequence>
    <Sequence from={SCENE_DURATION * 4} durationInFrames={SCENE_DURATION + 30}><Scene5 /></Sequence>
  </>
);

const Root = () => (
  <Composition
    id="MaritimeVideo"
    component={MaritimeVideo}
    durationInFrames={SCENE_DURATION * 5 + 30}
    fps={FPS}
    width={1920}
    height={1080}
  />
);

registerRoot(Root);
