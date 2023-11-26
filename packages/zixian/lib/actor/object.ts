import { Actor } from './actor'

type Options = {
  position: {
    x: number,
    y: number
  }
}

class ObjectActor extends Actor {
  constructor(options?: Options) {
    super()
    this.beginFill(0x650A5A).lineStyle(2, 0xFEEB77, 1)
    .drawRect(0, 0, 100, 100).endFill();
    this.position = options?.position || { x: 0, y: 0 }
  }
}

export const createObjectActor = (options?: Options) => {
  return new ObjectActor(options)
}