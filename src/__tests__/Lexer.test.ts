import { Lexer, Lexical, SyntaxChars } from "../main"
import { InputText, InputTextStackError } from "../mocks/inputText"
import { LexerResult } from "../mocks/lexerResult"
import type { ILexer } from "../types/Lexer"

describe("Lexer", () => {
   let lexer: ILexer

   beforeAll(() => {
      lexer = new Lexer({
         syntaxChars: SyntaxChars,
         lexical: Lexical
      })
   })

   it("Create AST", () => {
      const ast = lexer.tokenize(InputText)
      expect(JSON.stringify(ast)).toEqual(JSON.stringify(LexerResult))
   })

   it("Throw unknown char", () => {
      expect(() => lexer.tokenize(InputTextStackError)).toThrow(/Lexer stuck/)
   })
})
