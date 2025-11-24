import type { TLexical, TSyntaxChars } from "./Syntax.types"
import type { Token } from "./Token.types"

export interface ILexer {
   tokenize(input: string): Token[]
}

export interface ILexerConstructor {
   syntaxChars: TSyntaxChars
   lexical: TLexical
}
