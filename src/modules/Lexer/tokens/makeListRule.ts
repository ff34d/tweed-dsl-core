import type { TSyntaxChars } from "../../../types/Syntax.types"
import { TokenType, type TokenRule } from "../../../types/Token.types"

export function makeListRule(S: TSyntaxChars): TokenRule {
   return {
      name: TokenType.list,
      match(input, i) {
         if (S.LIST_OPEN !== input[i]) return null

         const end = input.indexOf(S.LIST_CLOSE, i)
         if (end === -1) throw new Error(`Unclosed list at ${i}`)

         return {
            end: end + 1,
            value: input.slice(i + 1, end)
         }
      }
   }
}
