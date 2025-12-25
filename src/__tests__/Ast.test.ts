import { AST, Lexical, SyntaxChars } from "../main"
import { AstResult } from "../mocks/astResult"
import { LexerResult } from "../mocks/lexerResult"

describe("AST", () => {
   it("Parse after lexer", () => {
      const result = new AST({
         lexical: Lexical,
         syntax: SyntaxChars,
         tokens: LexerResult
      }).parse()

      expect(result.length).toEqual(2)
      expect(JSON.stringify(result)).toEqual(JSON.stringify(AstResult))
   })
})
