import './style.css'
import { createZixian } from '../lib/main.ts'
import * as core from '@theatre/core'
import studio from '@theatre/studio'

(() => {
  const appDom = document.querySelector<HTMLDivElement>('#app')!
  const stageDom = document.createElement('div')
  stageDom.setAttribute('id', 'stage')
  const behindSceneDom = document.createElement('div')
  behindSceneDom.setAttribute('id', 'beind-scene')
  appDom.appendChild(stageDom)
  appDom.appendChild(behindSceneDom)
  
  if(!appDom) return
  const stage = createZixian(stageDom)
  const node = stage?.renderer?.addNode()
  const behindScene = createZixian(behindSceneDom, {
    background: 'white'
  })

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
  
  const behindProject = {
    project: null,
    sheets: []
  } as any
  stageProject.project = core.getProject('behind')

})()
