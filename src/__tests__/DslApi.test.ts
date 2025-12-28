import { DslApi } from "../main"
import { dslApiText } from "../mocks/inputText"
import type { IDslApi } from "../types/DslApi"

describe("DslApi", () => {
   let dslApi: IDslApi

   beforeAll(() => {
      dslApi = new DslApi()
   })

   it("Read", () => {
      const result = dslApi.read(dslApiText)
      expect(result?.[0]?.nodes?.length).toBeTruthy()
      expect(result?.[0]?.flows?.length).toBeTruthy()
   })
})
