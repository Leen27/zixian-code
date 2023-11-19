import * as PIXI from "pixi.js";

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

  constructor(dom: HTMLElement, config?: RenderConfig) {
    const {
      background = "#1099bb"
    } = config || {}

    const app = new PIXI.Application({ background, resizeTo: dom });
    dom.appendChild(app.view as any);
    const container = new PIXI.Container();
    app.stage.addChild(container);
    this._app = app
  }

  addNode() {
    const graphics = new PIXI.Graphics()

    // Rectangle + line style 1
    graphics.lineStyle(2, 0xFEEB77, 1);
    graphics.beginFill(0x650A5A);
    graphics.drawRect(200, 50, 100, 100);
    graphics.endFill();

    this._app?.stage.addChild(graphics)
  }
}

export const createPlayer = (domId: string | HTMLElement, config?: RenderConfig) => {
  const dom: HTMLElement | null = typeof domId == 'string' ? document.body.querySelector(domId) : domId;
  if (!dom) return;
  return new Zixian(dom, config)
};

export const zixian = () => {}