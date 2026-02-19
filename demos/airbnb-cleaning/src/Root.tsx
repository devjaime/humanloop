import { Composition } from "remotion";
import { Scene1Checkout } from "./Scene1";
import { Scene2LicensePlate } from "./Scene2";
import { Scene3Verification } from "./Scene3";
import { Scene4TeamNotification } from "./Scene4";
import { Scene5Completion } from "./Scene5";

export const FRAME_RATE = 30;
export const DURATION_PER_SCENE = 60; // 2 seconds at 30fps

export const Root = () => {
  return (
    <>
      <Composition
        id="airbnb-cleaning"
        component={Scene1Checkout}
        durationInFrames={DURATION_PER_SCENE}
        fps={FRAME_RATE}
        width={1280}
        height={720}
      />
      <Composition
        id="license-plate"
        component={Scene2LicensePlate}
        durationInFrames={DURATION_PER_SCENE}
        fps={FRAME_RATE}
        width={1280}
        height={720}
      />
      <Composition
        id="verification"
        component={Scene3Verification}
        durationInFrames={DURATION_PER_SCENE}
        fps={FRAME_RATE}
        width={1280}
        height={720}
      />
      <Composition
        id="team-notification"
        component={Scene4TeamNotification}
        durationInFrames={DURATION_PER_SCENE}
        fps={FRAME_RATE}
        width={1280}
        height={720}
      />
      <Composition
        id="completion"
        component={Scene5Completion}
        durationInFrames={DURATION_PER_SCENE}
        fps={FRAME_RATE}
        width={1280}
        height={720}
      />
    </>
  );
};
