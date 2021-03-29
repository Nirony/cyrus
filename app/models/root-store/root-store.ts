import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { CharacterStoreModel } from "../character-store/character-store"
import { GlobalStoreModel } from "../global-store/global-store"
import { UserQuestionsModel } from "../userQuerstions/userQuestions-store"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  globalStore: types.optional(GlobalStoreModel, {} as any),
  userQuestionsStore: types.optional(UserQuestionsModel, {} as any),
  characterStore: types.optional(CharacterStoreModel, {} as any),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
