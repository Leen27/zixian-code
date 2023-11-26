import { createGUI } from './gui'
import type { GUI } from './gui'
import type { RenderConfig } from './renderer'
import { Renderer } from './renderer'

export * from './gui'
export * from './actor'
export * from './drama'
export * from './renderer'

export class Zixian {
  _domContainer: HTMLElement | null = null
  renderer: Renderer | null = null
  gui: GUI

  constructor(dom: HTMLElement, config?: RenderConfig) {
    this.renderer = new Renderer(dom, config) 
    this.gui = createGUI(this.renderer)
  }
}

export const createZixian = (domId: string | HTMLElement, config?: RenderConfig) => {
  const dom: HTMLElement | null = typeof domId == 'string' ? document.body.querySelector(domId) : domId;
  if (!dom) return;
  return new Zixian(dom, config)
};

export const zixian = () => {}