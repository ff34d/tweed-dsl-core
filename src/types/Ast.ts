import type { BaseNode, ProgramNode } from "./SemanticModel"
import type { TLexical, TSyntaxChars } from "./Syntax"
import type { Token, TokenType } from "./Token"

export interface IAST {
   parse(tokens: Token[]): ProgramNode[]
   current(): Token | null
   peek(offset?: number): Token | null
   consume(): Token | null
   eof(): boolean
   expect(type: TokenType, err: string): Token
}

export interface IASTConstructor {
   syntax: TSyntaxChars
   lexical: TLexical
}

export type ASTParser = (ctx: IAST, L: TLexical, S: TSyntaxChars) => BaseNode
