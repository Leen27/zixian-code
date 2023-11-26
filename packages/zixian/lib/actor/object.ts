import { Sprite, Texture } from 'pixi.js'
import { Actor } from './actor'

export type ActorOptions = {
  width: number
  height: number
  x: number
  y: number
}

export type IconActorOptions = ActorOptions &{
  icon: string
}

class ObjectActor extends Actor {
  constructor(options?: ActorOptions) {
    super()
    this.beginFill(0x650A5A).lineStyle(2, 0xFEEB77, 1)
    .drawRect(0, 0, 100, 100).endFill();
    this.position = { x: options?.x || 0, y: options?.y || 0 }
  }
}

export class ObjectActorIcon extends Actor {
  constructor({
    width,
    height,
    x,
    y,
    icon
  }: IconActorOptions) {
    super()
    
    const icontexture = Texture.from(icon);
    const iconBox = new Sprite(icontexture);
    iconBox.width = width
    iconBox.height = height
    iconBox.x = x
    iconBox.y = y
  }
}

export const createObjectActor = (options?: ActorOptions) => {
  return new ObjectActor(options)
}