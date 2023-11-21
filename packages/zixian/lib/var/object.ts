import { Graphics } from 'pixi.js';

class ObjectVar {
  constructor(options?: {
    position: {
      x: number,
      y: number
    }
  }) {
    const graphics = new Graphics()
    graphics.beginFill(0x650A5A).lineStyle(2, 0xFEEB77, 1)
    .drawRect(0, 0, 100, 100).endFill();
    graphics.position = options?.position || { x: 0, y: 0 }
    
    return graphics
  }
}

export const createObjectVar = (options) => {
  return new ObjectVar(options)
}