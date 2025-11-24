import type { TSyntaxChars } from "../../../types/Syntax.types"
import { TokenType, type TokenRule } from "../../../types/Token.types"

export function makeCommentRule(S: TSyntaxChars): TokenRule {
   return {
      name: TokenType.comment,
      match(input, i) {
         if (S.COMMENT !== input[i]) return null

         const end = input.indexOf("\n", i)
         const value = end === -1 ? input.slice(i + 1) : input.slice(i + 1, end)

         return {
            end: end === -1 ? input.length : end + 1,
            value: value.trim()
         }
      }
   }
}
