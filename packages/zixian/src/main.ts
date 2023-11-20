import './style.css'
import { createZixian } from '../lib/main.ts'
import * as core from '@theatre/core'
import studio from '@theatre/studio'

(() => {
  const appDom = document.querySelector<HTMLDivElement>('#app')!

  if(!appDom) return
  const stage = createZixian(appDom)
  const node = stage?.renderer?.addNode()

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

  nodeObj.onValuesChange(({ position }) => {
    if (!node) return
    node.x = position.x
    node.y = position.y
  })
})()
