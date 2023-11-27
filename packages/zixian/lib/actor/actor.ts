import { Container, Graphics, Sprite } from 'pixi.js'
import type { GUI } from '../gui/gui'

export interface Actor {
  appearance: Graphics | Container | Sprite
}

export function createActor(gui: GUI, actor: Actor) {
  return gui.addChild(actor.appearance)
}