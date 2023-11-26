import { Application, IApplicationOptions } from "pixi.js";

export type RenderConfig = {
  background: string
}

export class Renderer extends Application {
  _dom: HTMLElement | null = null

  constructor(dom: HTMLElement, config?: RenderConfig) {
    const {
      background = "#1099bb"
    } = config || {}

    super({ background, resizeTo: dom } as IApplicationOptions)
    this._dom = dom
    
    dom.appendChild(this.view as any);
  }
}