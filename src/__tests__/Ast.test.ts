import { AST } from "../modules/Ast/Ast.controller"
import { Lexical } from "../types/Syntax.types"
import { lexerParsed } from "../mocks/lexerParsed"
import { astParsed } from "../mocks/astParsed"

describe("AST", () => {
   it("Parse after lexer", () => {
      const result = new AST({ lexical: Lexical, tokens: lexerParsed }).parse()

      expect(result.length).toEqual(2)
      expect(JSON.stringify(result)).toEqual(JSON.stringify(astParsed))
   })
})
