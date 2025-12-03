import { Lexer } from "../modules/Lexer/Lexer.controller"
import { type ILexer } from "../types/Lexer.types"
import { Lexical, SyntaxChars } from "../types/Syntax.types"
import { dslCode, dslCodeLexerStuckError } from "../mocks/dslCodes"
import { lexerParsed } from "../mocks/lexerParsed"

describe("Lexer", () => {
   let lexer: ILexer

   beforeAll(() => {
      lexer = new Lexer({
         syntaxChars: SyntaxChars,
         lexical: Lexical
      })
   })

   it("Create AST", () => {
      const ast = lexer.tokenize(dslCode)
      expect(JSON.stringify(ast)).toEqual(JSON.stringify(lexerParsed))
   })

   it("Throw unknown char", () => {
      expect(() => lexer.tokenize(dslCodeLexerStuckError)).toThrow(/Lexer stuck/)
   })
})
