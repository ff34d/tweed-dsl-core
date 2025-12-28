import { type ASTParser } from "../../../types/Ast"
import { NodeType } from "../../../types/SemanticModel"
import { TokenType } from "../../../types/Token"
import { parseList } from "../utils/parseList"

export const parseDirective: ASTParser = (ctx, L, S) => {
   const dirToken = ctx.expect(TokenType.directive, "Expected directive token")
   const id = ctx.expect(TokenType.id, "Directive does not have id")
   const list = ctx.expect(TokenType.list, "Directive does not have list")

   return {
      type: NodeType.DIRECTIVE,
      name: dirToken.value,
      id: id.value,
      list: parseList(list.value, L, S)
   }
}
