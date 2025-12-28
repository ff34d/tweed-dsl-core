import { AST, Lexer, Lexical, SemanticAnalyzer, SyntaxChars, type IR } from "../../main"
import type { IAST } from "../../types/Ast"
import type { IDslApi } from "../../types/DslApi"
import type { ILexer } from "../../types/Lexer"
import type { ISemanticAnalyzer } from "../../types/SemanticAnalyzer"

export class DslApi implements IDslApi {
   readonly #LEXER: ILexer
   readonly #AST: IAST
   readonly #SEMANTIC_ANALYZER: ISemanticAnalyzer

   constructor() {
      this.#LEXER = new Lexer({ lexical: Lexical, syntaxChars: SyntaxChars })
      this.#AST = new AST({ lexical: Lexical, syntax: SyntaxChars })
      this.#SEMANTIC_ANALYZER = new SemanticAnalyzer()
   }

   read(s: string): IR {
      const lexerResult = this.#LEXER.tokenize(s)
      const astResult = this.#AST.parse(lexerResult)

      const analyzeResult = this.#SEMANTIC_ANALYZER.analyze(astResult)
      if (!analyzeResult) throw new Error("Analyze ast error")

      return astResult
   }
}
