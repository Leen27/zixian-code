import './style.css'
import { setupCounter } from './counter.ts'
import { createPlayer } from '../lib/main.ts'
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
  const stage = createPlayer(stageDom)
  stage?.renderer?.addNode()
  const behindScene = createPlayer(behindSceneDom, {
    background: 'white'
  })

  studio.initialize()
  const stageProject = {
    project: null,
    sheets: []
  } as any

  stageProject.project = core.getProject('stage')
  stageProject.sheets.push(stageProject.project.sheet('Sheet 1').object('Ref', {
    y: 0, // you can use just a simple default value
    opacity: core.types.number(1, { range: [0, 1] }), // or use a type constructor to customize
  }))  
})()

