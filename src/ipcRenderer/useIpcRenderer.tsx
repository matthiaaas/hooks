import { useEffect } from "react"
import { ipcRenderer } from "electron"

/**
 * `useIpcRenderer` a hook that responds to ipcMain events
 * (way of communicating between Electron's main process and the renderer)
 *
 * @param handler - The EventEmitter channel to respond to
 * @param callback - A callback function
 * @param dependencies - Optional React state deps on which the callback relies on
 */
const useIpcRenderer = (
  handler: string,
  callback: (...args: any[]) => void,
  dependencies?: any[]
) => {
  useEffect(() => {
    ipcRenderer.addListener(handler, callback)
    return () => ipcRenderer.removeListener(handler, callback)
  }, dependencies || [])
}

export default useIpcRenderer
