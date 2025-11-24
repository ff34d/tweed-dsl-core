import type { TSyntaxChars } from "../../../types/Syntax.types"
import { TokenType, type TokenRule } from "../../../types/Token.types"

export function makeIdRule(S: TSyntaxChars): TokenRule {
   return {
      name: TokenType.id,
      match(input, i) {
         if (S.ID_OPEN !== input[i]) return null

         const end = input.indexOf(S.ID_CLOSE, i)
         if (end === -1) throw new Error(`Unclosed ID at ${i}`)

         return {
            end: end + 1,
            value: input.slice(i + 1, end)
         }
      }
   }
}
