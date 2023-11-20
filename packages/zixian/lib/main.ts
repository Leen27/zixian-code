import * as PIXI from "pixi.js";
import * as Theatre from '@theatre/core'
import { createGUI } from './gui'
import type { GUI } from './gui'

export class Zixian {
  _domContainer: HTMLElement | null = null
  renderer: Renderer | null = null
  constructor(dom: HTMLElement, config?: RenderConfig) {
    this.renderer = new Renderer(dom, config) 
  }
}

type RenderConfig = {
  background: string
}

export class Renderer {
  _app: PIXI.Application | null = null
  _dom: HTMLElement | null = null
  gui: GUI

  constructor(dom: HTMLElement, config?: RenderConfig) {
    this._dom = dom

    const {
      background = "#1099bb"
    } = config || {}

    const app = new PIXI.Application({ background, resizeTo: dom });
    dom.appendChild(app.view as any);
    const container = new PIXI.Container();
    app.stage.addChild(container);
    this._app = app

    this.gui = createGUI(this)
  }

  addNode(options?: {
    position: {
      x: number,
      y: number
    }
  }) {
    const graphics = new PIXI.Graphics()
    graphics.lineStyle(2, 0xFEEB77, 1);
    graphics.beginFill(0x650A5A);
    graphics.drawRect(0, 0, 100, 100);
    graphics.endFill();
    this.gui._stagePanel?.addChild(graphics)
    graphics.position = options?.position || { x: 0, y: 0 }
    return graphics
  }
}

export function createNode(renderer: Renderer) {
  return renderer.addNode()
}

class Drama<T> {
  private _project: Theatre.IProject | null = null
  constructor(
    state: any) {
    this._project = Theatre.getProject('drama', {
      state,
    })
  }

  play(sheetName: string, objectName: string, data: T, handleValueChange: (data: T) => void) {
    console.log('play')
    if (!this._project) return
    console.log( this._project)

    const sheet = this._project.sheet(sheetName)
    const obj = sheet.object(objectName, data as T & Theatre.UnknownShorthandCompoundProps)

    console.log(sheet, obj)
    // animations
    handleValueChange && obj.onValuesChange(handleValueChange as Parameters<Theatre.ISheetObject["onValuesChange"]>[0])

    // wait for project to be ready
    this._project.ready.then(() => {
      sheet.sequence.play({ iterationCount: Infinity })
    })
  }
}

export function createDrama<T>(state: any) {
  return new Drama<T>(state)
}

export const createZixian = (domId: string | HTMLElement, config?: RenderConfig) => {
  const dom: HTMLElement | null = typeof domId == 'string' ? document.body.querySelector(domId) : domId;
  if (!dom) return;
  return new Zixian(dom, config)
};

export const zixian = () => {}