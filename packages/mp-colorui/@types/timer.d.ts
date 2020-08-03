import { ComponentClass } from "react";
import { BaseComponent } from "./baseType";

export interface TimerProps extends BaseComponent {
  startTime: number;
  endTime: number;
  onTimeup?(): void;
  onTick?(): void;
}

declare const Timer: ComponentClass<TimerProps>;

export default Timer;
