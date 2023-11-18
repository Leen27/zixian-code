import './style.css'
import { setupCounter } from './counter.ts'
import { createPlayer } from '../lib/main.ts'
import * as core from '@theatre/core'
import studio from '@theatre/studio'

(() => {
  const appDom = document.querySelector<HTMLDivElement>('#app')!

  studio.initialize()
  const project = core.getProject('HTML Animation Tutorial')
  const sheet = project.sheet('Sheet 1')
  const obj = sheet.object('Heading 1', {
    y: 0, // you can use just a simple default value
    opacity: core.types.number(1, { range: [0, 1] }), // or use a type constructor to customize
  })
  
  if(!appDom) return
  const zixian = createPlayer(appDom)
  
  zixian?.renderer?.addNode()
  setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
})()

