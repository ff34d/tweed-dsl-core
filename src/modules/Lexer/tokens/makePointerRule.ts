import type { TLexical } from "../../../types/Syntax"
import { TokenType, type TokenRule } from "../../../types/Token"
import { readUntil } from "../../../utils/readUntil"

export function makePointerRule(L: TLexical): TokenRule {
   return {
      name: TokenType.pointer,
      match(input, i) {
         if (input[i] && !L.POINTER.test(input[i])) return null
         const end = readUntil(input, i + 1, (c) => !L.POINTER.test(c))

         return {
            end: end,
            value: input.slice(i, end)
         }
      }
   }
}
