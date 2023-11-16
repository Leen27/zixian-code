import * as PIXI from "pixi.js";

class Zixian {
  _domContainer: HTMLElement
  _render: PIXI.Application
  constructor(dom: HTMLElement) {
    this._createRender(dom)
  }

  _createRender(dom: HTMLElement) {
    const app = new PIXI.Application({ background: "#1099bb", resizeTo: dom });
    dom.appendChild(app.view as any);
    const container = new PIXI.Container();
    app.stage.addChild(container);
    this._render = app
  }
}

export const createPlayer = (domId: string | HTMLElement) => {
  const dom: HTMLElement | null = typeof domId == 'string' ? document.body.querySelector(domId) : domId;
  if (!dom) return;
  return new Zixian(dom)
};

export const zixian = () => {}