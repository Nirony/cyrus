import { Instance, SnapshotOut, types } from "mobx-state-tree"

export enum themeMode {
  dark ='DARK',
  light = 'LIGHT'
}
export const GlobalStoreModel = types
  .model("GlobalStore")
  .props({
    theme: themeMode.light,
  })
  .actions((self) => ({
    setThemeMode: (newTheme: themeMode) => {
      self.theme = newTheme
    },
  }))

type GlobalStoreType = Instance<typeof GlobalStoreModel>
export interface GlobalStore extends GlobalStoreType {}
type GlobalStoreSnapshotType = SnapshotOut<typeof GlobalStoreModel>
export interface GlobalStoreSnapshot extends GlobalStoreSnapshotType {}
export const createGlobalStoreDefaultModel = () => types.optional(GlobalStoreModel, {})
