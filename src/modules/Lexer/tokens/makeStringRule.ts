import type { TSyntaxChars } from "../../../types/Syntax.types"
import { TokenType, type TokenRule } from "../../../types/Token.types"

export function makeStringRule(S: TSyntaxChars): TokenRule {
   return {
      name: TokenType.string,
      match(input, i) {
         if (S.STRING_QUOTE !== input[i]) return null
         let end = i + 1

         while (end < input.length && input[end] !== S.STRING_QUOTE) end++
         if (end >= input.length) throw new Error(`Unclosed string at ${i}`)

         return {
            end: end + 1,
            value: input.slice(i + 1, end)
         }
      }
   }
}
