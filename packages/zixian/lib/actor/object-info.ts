import { Panel } from '../gui'
import {
  ScrollBox
} from '@pixi/ui'
import { Texture, Sprite } from 'pixi.js'
import stackItemBackImg from '../assets/BackTile_01.png'
import scopeItemBackImg from '../assets/platformPack_tile021.png'
import { ObjectActorIcon, IconActorOptions } from './object'

let _pixelSizeX = 1
// let _pixelSizeY = 1

const STACK_BOX_SIZE = 50

function createStack({
  boxSize = _pixelSizeX * STACK_BOX_SIZE,
  width,
  height
}: {
  boxSize: number
  width: number
  height: number
}) {
  // Create a new texture
  const boxtexture = Texture.from(stackItemBackImg);
  const createBox = () => {
    const box = new Sprite(boxtexture as any);
    box.width = boxSize
    box.height = boxSize
    return box
  }
  const contextStack = new ScrollBox({
    background: 0XFFFFFF,
    width,
    height,
    items: [
      createBox(),
      createBox(),
      createBox(),
      createBox(),
      createBox(),
      createBox(),
      createBox(),
      createBox(),
      createBox(),
      createBox(),
      createBox(),
      createBox(),
    ],
  });

  return contextStack
}

function createScopeItems(itemsAmount: number): any[]
{
    const items = [];
    const boxtexture = Texture.from(scopeItemBackImg);
    const boxSize = STACK_BOX_SIZE
    const createBox = () => {
      const box = new Sprite(boxtexture as any);
      box.width = boxSize
      box.height = boxSize
      return box
    }

    for (let i = 0; i < itemsAmount; i++)
    {
        const box = createBox()
        items.push(box);
    }

    return items;
}

function createScopePanel({
  width,
  height
}: {
  width: number,
  height: number
}) {
  const items = createScopeItems(10)

  const scopePanel = new ScrollBox({
    background: '#aaa',
    width,
    height,
    items,
  });

  scopePanel.x = _pixelSizeX * STACK_BOX_SIZE
  return scopePanel
}

function createCodePanel({
  x,
  width,
  height
}: {
  x: number
  width: number,
  height: number
}) {
  const panel = new Panel({
    width,
    height,
  });

  panel.x = x
  return panel
}

class ObjectInfoPanel extends Panel{
  stack
  scope
  code
  private BOX_SIZE = _pixelSizeX * STACK_BOX_SIZE

  constructor({
    width,
    height
  }: {
    width: number
    height: number
  }) {
    super({
      width,
      height,
      x: 0,
      y: 0,
      bgColor: '#F1E5CC'
    })
  
    this.stack = createStack({
      boxSize: this.BOX_SIZE,
      width: this.BOX_SIZE,
      height
    })

    this.addChild(this.stack)

    this.scope = createScopePanel({
      width: width * 0.2,
      height
    })

    this.addChild(this.scope)

    this.code = createCodePanel({
      width: width * 0.8 - this.BOX_SIZE,
      height,
      x: width * 0.2 + this.BOX_SIZE
    })

    this.addChild(this.code)
  }

  addStack(config: IconActorOptions) {
    const icon = new ObjectActorIcon({
      ...config,
      width: this.BOX_SIZE,
      height: this.BOX_SIZE,
      x: 0,
      y: (this.stack.items.length - 1) * this.BOX_SIZE
    })
    this.stack.addItem(icon)
  }
}

export const createObjectInfoPanel = ({
  width,
  height,
  pixelSizeX,
  // pixelSizeY,
}: {
  pixelSizeX: number
  // pixelSizeY: number
  width: number
  height: number
}) => {
  _pixelSizeX = pixelSizeX
  // _pixelSizeY = pixelSizeY

  const panel = new ObjectInfoPanel({
    width,
    height,
  })

  return panel
}