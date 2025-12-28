import { TokenType, type Token } from "../main"

export const LexerResult: Token[] = [
   { type: TokenType.comment, value: 'diagram flowchart "Test program"' },

   { type: TokenType.comment, value: "test comment" },

   { type: TokenType.word, value: "block" },
   { type: TokenType.id, value: "test_block_1" },
   { type: TokenType.string, value: "block label" },

   { type: TokenType.word, value: "triangle" },
   { type: TokenType.id, value: "test_triangle" },
   { type: TokenType.string, value: "triangle label" },

   { type: TokenType.word, value: "block" },
   { type: TokenType.id, value: "test_block_2" },
   { type: TokenType.string, value: "block label" },
   {
      type: TokenType.config,
      value: '\n    theme = "black",\n    list = (1,2,3),\n    list_2 = ("red", "green", "blue")\n'
   },

   { type: TokenType.directive, value: "group" },
   { type: TokenType.id, value: "test_group" },
   {
      type: TokenType.list,
      value: "\n    test_block_1, \n    test_triangle, \n    test_block_2\n"
   },

   { type: TokenType.id, value: "test_block_1" },
   { type: TokenType.pointer, value: "->" },
   { type: TokenType.id, value: "test_block_2" },

   { type: TokenType.id, value: "test_block_1" },
   { type: TokenType.pointer, value: "<-" },
   { type: TokenType.id, value: "test_block_2" },

   { type: TokenType.id, value: "test_block_1" },
   { type: TokenType.pointer, value: "<->" },
   { type: TokenType.id, value: "test_block_2" },

   { type: TokenType.id, value: "test_block_1" },
   { type: TokenType.pointer, value: "-->" },
   { type: TokenType.id, value: "test_block_2" },

   { type: TokenType.id, value: "test_block_1" },
   { type: TokenType.pointer, value: "<--" },
   { type: TokenType.id, value: "test_block_2" },

   { type: TokenType.id, value: "test_block_1" },
   { type: TokenType.pointer, value: "<-->" },
   { type: TokenType.id, value: "test_block_2" },

   { type: TokenType.comment, value: 'diagram flowchart "Test program 2"' },

   { type: TokenType.word, value: "block" },
   { type: TokenType.id, value: "test_block_1" },
   { type: TokenType.string, value: "block label" }
] as const
