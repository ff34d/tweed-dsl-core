import { TokenType, type Token } from "../types/Token"

// Reference dslCode
export const lexerParsed: Token[] = [
   { type: TokenType.comment, value: 'diagram flowchart "Products diagram"' },

   { type: TokenType.comment, value: "entities" },

   { type: TokenType.word, value: "block" },
   { type: TokenType.id, value: "block_id" },
   { type: TokenType.string, value: "block label" },

   { type: TokenType.word, value: "triangle" },
   { type: TokenType.id, value: "triangle_id" },
   { type: TokenType.string, value: "triangle label" },

   { type: TokenType.word, value: "block" },
   { type: TokenType.id, value: "block_1" },
   { type: TokenType.config, value: ' label = "block 1", theme = "default" ' },

   { type: TokenType.word, value: "block" },
   { type: TokenType.id, value: "block_2" },
   {
      type: TokenType.config,
      value: '\n         label = "block 2",\n         theme = "default"\n      '
   },

   { type: TokenType.comment, value: 'diagram flowchart "Products diagram __2"' },

   { type: TokenType.directive, value: "group" },
   { type: TokenType.id, value: "group_1" },
   { type: TokenType.list, value: "block_id, triangle_id" },

   { type: TokenType.directive, value: "group" },
   { type: TokenType.id, value: "group_2" },
   {
      type: TokenType.list,
      value: "\n         block_id,\n         triangle_id\n      "
   }
]
