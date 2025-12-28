import { type ASTParser, type IAST, type IASTConstructor } from "../../types/Ast"
import { NodeType, type ProgramNode } from "../../types/SemanticModel"
import type { TLexical, TSyntaxChars } from "../../types/Syntax"
import { TokenType, type Token } from "../../types/Token"
import { parseComment } from "./parsers/parseComment"
import { parseDirective } from "./parsers/parseDirective"
import { parseEntity } from "./parsers/parseEntity"
import { parseFlow } from "./parsers/parseFlow"

export class AST implements IAST {
   readonly #TOKEN_PARSERS: Record<string, ASTParser>
   readonly #L: TLexical
   readonly #S: TSyntaxChars

   #tokens: Token[] = []

   #i = 0

   constructor(props: IASTConstructor) {
      this.#L = Object.freeze(props.lexical)
      this.#S = Object.freeze(props.syntax)

      this.#TOKEN_PARSERS = {
         [TokenType.comment]: parseComment,
         [TokenType.directive]: parseDirective,
         [TokenType.word]: parseEntity,
         [TokenType.pointer]: parseFlow
      }
   }

   public parse(tokens: Token[]): ProgramNode[] {
      this.#tokens = tokens
      const programs: ProgramNode[] = []

      while (!this.eof()) {
         const t = this.current()
         if (!t) break

         if (t.type !== TokenType.comment) {
            this.consume()
            continue
         }

         const program = parseComment(this, this.#L, this.#S)
         if (program.type === NodeType.PROGRAM) {
            this.consume()
            programs.push(program as ProgramNode)
            this.#walker(program as ProgramNode)
         }
      }

      return programs
   }

   #walker(program: ProgramNode) {
      while (!this.eof()) {
         const t = this.current()
         if (!t) break

         const parser = this.#TOKEN_PARSERS?.[t.type]
         if (!parser) {
            this.consume()
            continue
         }

         const node = parser(this, this.#L, this.#S)
         if (node.type === NodeType.PROGRAM) break
         if (node.type === NodeType.FLOW) {
            program.flows.push(node)
            continue
         }

         program.nodes.push(node)
      }
   }

   public current(): Token | null {
      return this.#tokens[this.#i] ?? null
   }

   public consume(): Token | null {
      const t = this.current()
      if (t) this.#i++
      return t
   }

   public expect(type: TokenType, err: string): Token {
      const t = this.current()
      if (!t || t.type !== type) throw new Error(err)
      this.consume()
      return t
   }

   public peek(offset = 1): Token | null {
      return this.#tokens[this.#i + offset] ?? null
   }

   public eof(): boolean {
      return this.#i >= this.#tokens.length
   }
}
