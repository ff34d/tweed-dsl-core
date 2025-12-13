import type { TLexical, TSyntaxChars } from "./Syntax"
import type { Token } from "./Token"

export interface ILexer {
   tokenize(input: string): Token[]
}

export interface ILexerConstructor {
   syntaxChars: TSyntaxChars
   lexical: TLexical
}
