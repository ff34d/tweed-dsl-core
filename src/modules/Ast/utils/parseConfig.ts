import type { ASTConfig } from "../../../types/Ast.types"
import type { TLexical } from "../../../types/Syntax.types"

export function parseConfig(s: string, L: TLexical): ASTConfig {
   const rows = s.split(L.SEPARATOR).map((v) => v.trim())
   const map: ASTConfig = {}

   for (const r of rows) {
      const struct = r.split(L.ASSIGN).map((v) => v.trim())
      if (!struct[0] || !struct[1]) throw new Error(`Config parse failed at ${r}`)
      map[struct[0]] = struct[1].replaceAll('"', "")
   }

   return map
}
