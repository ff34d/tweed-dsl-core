import type { BaseNode, ProgramNode } from "./SemanticModel"
import type { TLexical } from "./Syntax"
import type { Token, TokenType } from "./Token"

export interface IAST {
   parse(): ProgramNode[]
   current(): Token | null
   peek(offset?: number): Token | null
   consume(): Token | null
   eof(): boolean
   expect(type: TokenType, err: string): Token
}

export interface IASTConstructor {
   tokens: Token[]
   lexical: TLexical
}

export type ASTParser = (ctx: IAST, L: TLexical) => BaseNode
