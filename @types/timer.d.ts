import { ComponentClass } from 'react'

export interface TimerProps {
  startTime: number,
  endTime: number,
  onTimeup?(): void,
  onTick?(): void
}

declare const Timer: ComponentClass<TimerProps>

export default Timer
