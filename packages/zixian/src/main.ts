import './style.css'
import { createZixian, createObjectActor, Panel } from '../lib/main.ts'
import * as core from '@theatre/core'
import studio from '@theatre/studio'

(() => {
  const appDom = document.querySelector<HTMLDivElement>('#app')!
  
  if(!appDom) return
  const zx = createZixian(appDom)

  const objectPanel = new Panel({
    width: appDom.clientWidth * 0.8,
    height: appDom.clientHeight * 0.8,
    x: appDom.clientWidth * 0.1,
    y: appDom.clientHeight * 0.1,
    bgColor: 0x123
  })

  const objectActor = createObjectActor({
    position: {
      x: appDom.clientWidth * 0.1,
      y: appDom.clientHeight * 0.1
    }
  })
  objectPanel.addChild(objectActor)

  zx?.gui.addChild(objectPanel)

  // studio.initialize()

  // const stageProject = {
  //   project: null,
  //   sheets: {}
  // } as {
  //   project: core.IProject | null,
  //   sheets: Record<string, core.ISheet>
  // }
  // stageProject.project = core.getProject('stage')
  // stageProject.sheets['Sheet 1'] = stageProject.project.sheet('Sheet 1') as any
  // const nodeObj = stageProject.sheets['Sheet 1'].object('Node', {
  //   position: {
  //     x: 0,
  //     y: 0
  //   }
  // })
  // nodeObj.onValuesChange(({ position }) => {
  //   if (!node) return
  //   node.x = position.x
  //   node.y = position.y
  // })

})()
