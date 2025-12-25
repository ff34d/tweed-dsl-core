export const SyntaxChars = {
   COMMENT: "#",
   DIRECTIVE: "@",
   ASSIGN: "=",

   STRING_QUOTE: '"',

   ID_OPEN: "[",
   ID_CLOSE: "]",

   CONFIG_OPEN: "{",
   CONFIG_CLOSE: "}",

   LIST_OPEN: "(",
   LIST_CLOSE: ")"
} as const

export const Lexical = {
   WHITESPACE: /[ \t]+/,
   NEWLINE: /\r?\n/,
   WORD: /[a-zA-Z_-]/,
   PROGRAM: /(diagram)[ \t]+([a-z]+)[ \t]"([\S ?t]+)"/,
   ASSIGN: /[=]/,
   SEPARATOR: /[,]/,
   LIST_OPEN: /[(]/,
   LIST_CLOSE: /[)]/,
   STRING_QUOTE: /["]/,
   LIST: /\([,"\s\w]+\)/
} as const

export type TSyntaxChars = typeof SyntaxChars
export type TLexical = typeof Lexical
