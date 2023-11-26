import { Panel } from '../gui'
import {
  ScrollBox
} from '@pixi/ui'
import { Texture, Sprite } from 'pixi.js'
import stackItemBackImg from '../assets/BackTile_01.png'
import scopeItemBackImg from '../assets/platformPack_tile021.png'

let _pixelSizeX = 1
let _pixelSizeY = 1

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
    const box = new Sprite(boxtexture);
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
      const box = new Sprite(boxtexture);
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


export const createObjectInfoPanel = ({
  width,
  height,
  pixelSizeX,
  pixelSizeY,
}: {
  pixelSizeX: number
  pixelSizeY: number
  width: number
  height: number
}) => {
  _pixelSizeX = pixelSizeX
  _pixelSizeY = pixelSizeY

  const objectPanel = new Panel({
    width,
    height,
    bgColor: '#F1E5CC'
  })

  objectPanel.addChild(createStack({
    boxSize: _pixelSizeX * STACK_BOX_SIZE,
    width: _pixelSizeX * STACK_BOX_SIZE,
    height
  }))

  objectPanel.addChild(createScopePanel({
    width: width * 0.2,
    height
  }))

  objectPanel.addChild(createCodePanel({
    width: width * 0.8 - _pixelSizeX * STACK_BOX_SIZE,
    height,
    x: width * 0.2 + _pixelSizeX * STACK_BOX_SIZE
  }))

  return objectPanel
}