import type { TLexical } from "./Syntax.types"
import type { Token, TokenType } from "./Token.types"

export interface IAST {
   parse(): ASTProgramNode[]
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

export type ASTParser = (ctx: IAST, L: TLexical) => ASTNode

// --- Nodes ---

export type ASTList = string[]
export type ASTConfig = Record<string, string>

export interface ASTNode {
   type: ASTNodeType
}

export enum ASTNodeType {
   PROGRAM = "program",
   DIRECTIVE = "directive",
   ENTITY = "entity",
   COMMENT = "comment"
}

export interface ASTProgramNode extends ASTNode {
   schemeType: string
   name: string
   label: string
   nodes: ASTNode[]
}

export interface ASTEntityNode extends ASTNode {
   name: string
   id: string
   label?: string
   config?: ASTConfig
}

export interface ASTDirectiveNode extends ASTNode {
   name: string
   id: string
   list: ASTList
}

export interface ASTCommentNode extends ASTNode {
   value: string
}
