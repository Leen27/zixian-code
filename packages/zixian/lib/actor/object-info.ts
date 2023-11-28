import { Panel } from '../gui'
import {
  ScrollBox, ScrollBoxOptions
} from '@pixi/ui'
import { Texture, Sprite, Container, DisplayObject } from 'pixi.js'
import stackItemBackImg from '../assets/BackTile_01.png'
import scopeItemBackImg from '../assets/platformPack_tile021.png'
import emoji from '../assets/intelligent-emoji.png'
import { ObjectActorIcon } from './object'

const boxtexture2 = Texture.from(stackItemBackImg);
const boxtexture = Texture.from(scopeItemBackImg);
const emojitexture = Texture.from(emoji)

let _pixelSizeX = 1
// let _pixelSizeY = 1

const STACK_BOX_SIZE = 50

class Stack extends ScrollBox {
  constructor(params: ScrollBoxOptions) {
    super(params)
  }

  createBox() {
    const box = new Sprite(boxtexture2 as any);
    box.width = this.width
    box.height = this.width
    return box
  }

  addItem<T extends Container<DisplayObject>[]>(...items: T): T[0] {
      const container = new Container()
      container.addChild(this.createBox())
      items[0].width = this.width
      items[0].height = this.width
      items[0].x = 0
      items[0].y = 0

      container.addChild(...items)
      
      super.addItem(container)
      return items[0]
  }
}

function createStack({
  width,
  height
}: {
  boxSize: number
  width: number
  height: number
}) {
  const contextStack = new Stack({
    background: 0XFFFFFF,
    width,
    height,
    items: [],
  });

  return contextStack
}

function createScopeItems(itemsAmount: number): any[]
{
    const items = [];
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

    const container = new Container()
    const d1 = new Sprite(boxtexture2)
    d1.width = 70
    d1.height = 70
    const d2 = new Sprite(emojitexture) 
    d2.width = 70
    d2.height = 70
    container.addChild(d1)
    container.addChild(d2)
    items.push(container)

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

  addStack(config: { icon: string }) {
    const icon = new ObjectActorIcon({
      ...config,
      width: this.BOX_SIZE,
      height: this.BOX_SIZE,
      x: 0,
      y: (this.stack.items.length - 1) * this.BOX_SIZE,
    })
    this.stack.addItem(icon.appearance)
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