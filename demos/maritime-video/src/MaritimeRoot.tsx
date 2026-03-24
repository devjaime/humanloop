import { Composition } from "remotion";
import { MaritimeVideo } from "./MaritimeVideo";

const FPS = 30;
const SCENE_DURATION = 90;

export const MaritimeVideoRoot = () => (
  <Composition
    id="MaritimeVideo"
    component={MaritimeVideo}
    durationInFrames={SCENE_DURATION * 5 + 30}
    fps={FPS}
    width={1920}
    height={1080}
  />
);
