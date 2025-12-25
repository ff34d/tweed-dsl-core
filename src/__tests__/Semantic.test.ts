import { AstResult } from "../mocks/astResult"
import { SemanticAnalyzer } from "../modules/SemanticAnalyzer/SemanticAnalyzer"

describe("Semantic", () => {
   it("Analyze", () => {
      const result = new SemanticAnalyzer().analyze(AstResult)
      expect(result).toBeTruthy()
   })
})
