import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { withEnvironment } from "../extensions/with-environment"
import { UserQuestionModel } from "./userQuestions"
import { QuestionsApi } from "../../services/api/user-questions-api"

/**
 * Example store containing Rick and Morty characters
 */
export const UserQuestionsModel = types
  .model("QuestionsStore")
  .props({
    questions: types.optional(types.frozen<UserQuestionModel[]>(), []),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    saveQuestions: (questions: UserQuestionModel[]) => {
      self.questions = questions
    },
  }))
  .actions((self) => ({
    getQuestions: async (id: string) => {
      const questionsApi = new QuestionsApi(self.environment.api)
      const result = await questionsApi.getQuestions(id)
      console.tron.log(result)
      if (result.kind === "ok") {
        self.saveQuestions(result.questions)
      } else {
        __DEV__ && console.tron.log(result.kind)
      }
    },
  }))

type QuestionsStoreType = Instance<typeof UserQuestionsModel>
export interface QuestionsStore extends QuestionsStoreType {}
type QuestionsStoreSnapshotType = SnapshotOut<typeof UserQuestionsModel>
export interface QuestionsStoreSnapshot extends QuestionsStoreSnapshotType {}
export const createCharacterStoreDefaultModel = () => types.optional(UserQuestionsModel, {})
