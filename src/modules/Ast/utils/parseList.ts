import type { NodeList } from "../../../types/SemanticModel"
import type { TLexical, TSyntaxChars } from "../../../types/Syntax"

export function parseList(s: string, L: TLexical, S: TSyntaxChars): NodeList {
   return s.split(L.SEPARATOR).map((v) => v.replaceAll(S.STRING_QUOTE, "").trim())
}
