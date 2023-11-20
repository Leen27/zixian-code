import * as PIXI from 'pixi.js'
import type { Renderer } from './main'

export class GUI {
  renderer: Renderer
  _stagePanel: PIXI.Container | null = null
  _behind: PIXI.Container | null = null

  constructor(renderer: Renderer) {
    if (!renderer) throw new Error('renderer is missing')
    this.renderer = renderer
    this.init()
  }

  init() {
    this.createStage()
  }

  createPanel() {
    const panel = new PIXI.Container()
    const wrap = new PIXI.Graphics()
    const { width, height } = this.getContainerSize()
    wrap.beginFill(0x000);
    wrap.drawRect(0, 0, width, height);
    wrap.endFill();
    panel.mask = wrap

    return panel
  }

  createStage() {
    this._stagePanel = this.createPanel()
    this.renderer._app?.stage.addChild(this._stagePanel)
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