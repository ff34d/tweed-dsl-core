import type { TLexical } from "../../../types/Syntax"
import { TokenType, type TokenRule } from "../../../types/Token"

export function makeWhitespaceRule(L: TLexical): TokenRule {
   return {
      name: TokenType.whitespace,
      match(input, i) {
         const char = input[i]

         if (char !== undefined && (L.WHITESPACE.test(char) || L.NEWLINE.test(char))) {
            return {
               end: i + 1,
               value: ""
            }
         }

         return null
      }
   }
}
