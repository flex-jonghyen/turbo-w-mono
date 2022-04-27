declare module "emoji-mart" {
  import { MutableRefObject } from "react";

  type PickerProps = {
    data: Record<string, unknown>;
    ref: MutableRefObject;
  };

  export class Picker {
    constructor(props: PickerProps) {}
  }
}
