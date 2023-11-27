import { Graphics, Sprite, Texture } from 'pixi.js'
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

class ObjectActor implements Actor {
  appearance: Graphics
  constructor(options?: ActorOptions) {
    this.appearance = new Graphics().beginFill(0x650A5A).lineStyle(2, 0xFEEB77, 1)
    .drawRect(0, 0, 100, 100).endFill();
    this.appearance.position = { x: options?.x || 0, y: options?.y || 0 }
  }
}

export class ObjectActorIcon implements Actor {
  appearance: Sprite
  constructor({
    width,
    height,
    x,
    y,
    icon
  }: IconActorOptions) {    
    const icontexture = Texture.from(icon);
    const iconBox = new Sprite(icontexture as any);
    iconBox.width = width
    iconBox.height = height
    iconBox.x = x
    iconBox.y = y

    this.appearance = iconBox
  }
}

export const createObjectActor = (options?: ActorOptions) => {
  return new ObjectActor(options)
}