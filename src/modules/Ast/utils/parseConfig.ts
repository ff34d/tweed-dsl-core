import type { NodeConfig } from "../../../types/SemanticModel"
import type { TLexical, TSyntaxChars } from "../../../types/Syntax"
import { readUntil } from "../../../utils/readUntil"
import { parseList } from "./parseList"

export function parseConfig(s: string, L: TLexical, S: TSyntaxChars): NodeConfig {
   const map: NodeConfig = {}
   let i = 0

   while (i < s.length) {
      if (!s[i + 1]) break

      const propertyEndIndex = readUntil(s, i, (c) => {
         if (c === S.COMMENT) throw new Error(`Parse config stuck at ${s[i]}, ${i}`)
         return c === S.ASSIGN
      })
      if (propertyEndIndex === -1) throw new Error(`Parse config stuck at ${s[i]}, ${i}`)

      const property = s.slice(i, propertyEndIndex).replaceAll(",", "").trim()

      i = propertyEndIndex + 1

      const propertyValueEndIndex = readUntil(s, i, (c) => {
         return L.SEPARATOR.test(c) || c === S.LIST_OPEN
      })

      if (propertyValueEndIndex === -1) throw new Error("q")

      if (s[propertyValueEndIndex]! === S.LIST_OPEN) {
         const list = s.slice(propertyValueEndIndex).match(L.LIST)
         if (list === null)
            throw new Error(
               `Parse config stuck at ${s[propertyValueEndIndex]}, ${propertyValueEndIndex}`
            )
         const parsedList = parseList(list[0].slice(1, -1), L, S)
         map[property] = parsedList
         i = propertyValueEndIndex + list[0].length + 1
         continue
      }

      const propertyValue = s
         .slice(i, propertyValueEndIndex)
         .replaceAll(S.STRING_QUOTE, "")
         .trim()
      map[property] = propertyValue
      i = propertyValueEndIndex + 1
   }

   return map
}
