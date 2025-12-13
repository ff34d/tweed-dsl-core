export interface Token {
   type: TokenType
   value: string
}

export enum TokenType {
   comment = "comment",
   directive = "directive",
   string = "string",
   id = "id",
   config = "config",
   list = "list",
   word = "word",
   whitespace = "whitespace"
}

export interface TokenRule {
   name: TokenType
   match(input: string, i: number): TokenRuleResult | null
}

export interface TokenRuleResult {
   end: number
   value: string
}
