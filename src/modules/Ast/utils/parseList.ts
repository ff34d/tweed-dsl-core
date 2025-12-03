import type { ASTList } from "../../../types/Ast.types"
import type { TLexical } from "../../../types/Syntax.types"

export function parseList(s: string, L: TLexical): ASTList {
   return s.split(L.SEPARATOR).map((v) => v.trim())
}
