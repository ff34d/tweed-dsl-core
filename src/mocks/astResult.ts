import {
   DirectiveName,
   EntityName,
   NodeType,
   ProgramName,
   ProgramSchemeType,
   type IR
} from "../main"

export const AstResult: IR = [
   {
      type: NodeType.PROGRAM,
      schemeType: ProgramSchemeType.DIAGRAM,
      name: ProgramName.FLOWCHART,
      label: "Test program",
      nodes: [
         { type: NodeType.COMMENT, value: "test comment" },
         {
            type: NodeType.ENTITY,
            name: EntityName.BLOCK,
            id: "test_block_1",
            label: "block label",
            config: undefined
         },
         {
            type: NodeType.ENTITY,
            name: EntityName.TRIANGLE,
            id: "test_triangle",
            label: "triangle label",
            config: undefined
         },
         {
            type: NodeType.ENTITY,
            name: EntityName.BLOCK,
            id: "test_block_2",
            label: "block label",
            config: {
               theme: "black",
               list: ["1", "2", "3"],
               list_2: ["red", "green", "blue"]
            }
         },
         {
            type: NodeType.DIRECTIVE,
            name: DirectiveName.GROUP,
            id: "test_group",
            list: ["test_block_1", "test_triangle", "test_block_2"]
         }
      ]
   },
   {
      type: NodeType.PROGRAM,
      schemeType: ProgramSchemeType.DIAGRAM,
      name: ProgramName.FLOWCHART,
      label: "Test program 2",
      nodes: [
         {
            type: NodeType.ENTITY,
            name: EntityName.BLOCK,
            id: "test_block_1",
            label: "block label",
            config: undefined
         }
      ]
   }
] as const
