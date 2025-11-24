import type { TLexical, TSyntaxChars } from "../../../types/Syntax.types"
import { TokenType, type TokenRule } from "../../../types/Token.types"

export function makeDirectiveRule(S: TSyntaxChars, L: TLexical): TokenRule {
   return {
      name: TokenType.directive,
      match(input, i) {
         if (S.DIRECTIVE !== input[i]) return null
         let end = i + 1

         while (
            end < input.length &&
            input[end] &&
            !L.WHITESPACE.test(input[end] as string)
         ) {
            end++
         }

         return {
            end: end + 1,
            value: input.slice(i + 1, end)
         }
      }
   }
}
