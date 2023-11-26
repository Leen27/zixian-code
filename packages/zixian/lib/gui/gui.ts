import { Container } from 'pixi.js'
import type { Renderer } from '../renderer'

export class GUI extends Container<any> {
  renderer: Renderer

  constructor(renderer: Renderer) {
    if (!renderer) throw new Error('renderer is missing')
    super()

    this.renderer = renderer
    this.init()
  }

  init() {
    this.renderer.stage.addChild(this as any)
    const { width, height } = this.getContainerSize()
    this.width = width
    this.height = height
  }

  getContainerSize() {
    return {
      width: this.renderer._dom?.clientWidth || 0,
      height: this.renderer._dom?.clientHeight || 0
    }
  }
}

export function createGUI(renderer: Renderer) {
  return new GUI(renderer)
}