import type { TLexical } from "../../../types/Syntax.types"
import { TokenType, type TokenRule } from "../../../types/Token.types"

export function makeWordRule(L: TLexical): TokenRule {
   return {
      name: TokenType.word,
      match(input, i) {
         if (input[i] && !L.WORD.test(input[i])) return null
         let end = i + 1

         while (
            end < input.length &&
            input[end] &&
            /[a-zA-Z0-9_-]/.test(input[end] as string)
         ) {
            end++
         }

         return {
            end: end,
            value: input.slice(i, end)
         }
      }
   }
}
