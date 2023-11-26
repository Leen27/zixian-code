import { Graphics } from 'pixi.js'
import type { GUI } from '../gui/gui'

export class Actor extends Graphics {
  constructor() {
    super()
  }
}

export function createActor(gui: GUI, actor: Actor) {
  return gui.addChild(actor)
}