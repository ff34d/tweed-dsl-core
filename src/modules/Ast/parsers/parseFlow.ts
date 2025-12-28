import { NodeType, TokenType } from "../../../main"
import type { ASTParser } from "../../../types/Ast"
import { parsePointer } from "../utils/parsePointer"

export const parseFlow: ASTParser = (ctx, L, S) => {
   const pointerToken = ctx.expect(TokenType.pointer, "Expected flow token")

   const firstId = ctx.peek(-2)
   const lastId = ctx.peek(0)

   const pointerData = parsePointer(pointerToken.value, L, S)

   return {
      type: NodeType.FLOW,
      connection: {
         ...pointerData,
         from: firstId?.value,
         to: lastId?.value
      }
   }
}
