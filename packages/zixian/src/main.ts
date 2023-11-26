import './style.css'
import { createZixian, createObjectActor, createObjectInfoPanel } from '../lib/main.ts'
import * as core from '@theatre/core'
import studio from '@theatre/studio'

(() => {
  const appDom = document.querySelector<HTMLDivElement>('#app')!
  
  if(!appDom) return

  appDom.style.overflow = 'hidden'
  const zx = createZixian(appDom)

  const pixelSizeX = appDom.clientWidth / 1000
  const pixelSizeY = appDom.clientHeight / 1000

  const windowData = {
    width: appDom.clientWidth,
    height: appDom.clientHeight,
  }
  const objectPanel = createObjectInfoPanel({
    pixelSizeX,
    width: windowData.width * 0.8,
    height: windowData.height * 0.8
  })
  zx?.gui.addChild(objectPanel)

  studio.initialize()

  const stageProject = {
    project: null,
    sheets: {}
  } as {
    project: core.IProject | null,
    sheets: Record<string, core.ISheet>
  }
  stageProject.project = core.getProject('stage')
  stageProject.sheets['Sheet 1'] = stageProject.project.sheet('Sheet 1') as any
  const nodeObj = stageProject.sheets['Sheet 1'].object('Node', {
    position: {
      x: 0,
      y: 0
    }
  })
  // nodeObj.onValuesChange(({ position }) => {
  //   if (!node) return
  //   node.x = position.x
  //   node.y = position.y
  // })

})()
