import { ApiResponse } from "apisauce"
import { Api } from "./api"
import { GetUserQuestionsResult } from "./api.types"
import { getGeneralApiProblem } from "./api-problem"

export class QuestionsApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async getQuestions(id: string): Promise<GetUserQuestionsResult> {
    try {
      // make the api call
      const response: ApiResponse<any> = await this.api.apisauce.get(
        `https://api.stackexchange.com/2.2/users/${id}/questions?order=desc&sort=activity&site=stackoverflow`,
      )

      // the typical ways to die when calling an api
      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      const questions = response.data.items

      return { kind: "ok", questions }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
