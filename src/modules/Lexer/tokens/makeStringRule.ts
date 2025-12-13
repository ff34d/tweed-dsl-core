import type { TSyntaxChars } from "../../../types/Syntax"
import { TokenType, type TokenRule } from "../../../types/Token"
import { readUntil } from "../../../utils/readUntil"

export function makeStringRule(S: TSyntaxChars): TokenRule {
   return {
      name: TokenType.string,
      match(input, i) {
         if (S.STRING_QUOTE !== input[i]) return null

         const end = readUntil(input, i + 1, (c) => c === S.STRING_QUOTE)
         if (end >= input.length) throw new Error(`Unclosed string at ${i}`)

         return {
            end: end + 1,
            value: input.slice(i + 1, end)
         }
      }
   }
}
