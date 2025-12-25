import type { NodeList } from "../../../types/SemanticModel"
import type { TLexical } from "../../../types/Syntax"

export function parseList(s: string, L: TLexical): NodeList {
   return s
      .split(L.SEPARATOR)
      .map((v) => v.replaceAll(new RegExp(L.STRING_QUOTE, "g"), "").trim())
}
