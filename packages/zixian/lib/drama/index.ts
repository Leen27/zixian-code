import * as Theatre from '@theatre/core'

class Drama<T> {
  private _project: Theatre.IProject | null = null
  constructor(
    state: any) {
    this._project = Theatre.getProject('drama', {
      state,
    })
  }

  play(sheetName: string, objectName: string, data: T, handleValueChange: (data: T) => void) {
    if (!this._project) return

    const sheet = this._project.sheet(sheetName)
    const obj = sheet.object(objectName, data as T & Theatre.UnknownShorthandCompoundProps)

    // animations
    handleValueChange && obj.onValuesChange(handleValueChange as Parameters<Theatre.ISheetObject["onValuesChange"]>[0])

    // wait for project to be ready
    this._project.ready.then(() => {
      sheet.sequence.play({ iterationCount: Infinity })
    })
  }
}

export function createDrama<T>(state: any) {
  return new Drama<T>(state)
}
