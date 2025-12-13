import { astParsed } from "../mocks/astParsed"
import { lexerParsed } from "../mocks/lexerParsed"
import { AST } from "../modules/Ast/Ast"
import { Lexical } from "../types/Syntax"

describe("AST", () => {
   it("Parse after lexer", () => {
      const result = new AST({ lexical: Lexical, tokens: lexerParsed }).parse()

      expect(result.length).toEqual(2)
      expect(JSON.stringify(result)).toEqual(JSON.stringify(astParsed))
   })
})
