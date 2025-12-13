import type { TLexical } from "../../../types/Syntax"
import { TokenType, type TokenRule } from "../../../types/Token"
import { readUntil } from "../../../utils/readUntil"

export function makeWordRule(L: TLexical): TokenRule {
   return {
      name: TokenType.word,
      match(input, i) {
         if (input[i] && !L.WORD.test(input[i])) return null
         const end = readUntil(input, i + 1, (c) => !/[a-zA-Z0-9_-]/.test(c))

         return {
            end: end,
            value: input.slice(i, end)
         }
      }
   }
}
