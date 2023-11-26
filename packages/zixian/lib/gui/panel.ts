import { Container, Graphics } from 'pixi.js'

type Options = {
  width: number
  height: number
  x: number
  y: number
  bgColor: string | number
  zIndex: number
}
export class Panel extends Container<any> {
  constructor(options?: Partial<Options>) {
    super()
    const { x = 0, y = 0, width = 200, height = 300, bgColor = 0x000, zIndex = 999 } = options || {}

    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.zIndex = zIndex

    const bg = new Graphics()
    bg
      .beginFill(bgColor as number)
      .drawRect(0, 0, width, height)
      .endFill();
    
    this.addChild(bg)
  }
}

export function createPanel(options?: Partial<Options>) {
  return new Panel(options)
}