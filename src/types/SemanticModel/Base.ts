export type NodeList = (string | number)[]
export type NodeConfig = Record<string, string | number | NodeList>

export enum NodeType {
   PROGRAM = "program",
   ENTITY = "entity",
   DIRECTIVE = "directive",
   COMMENT = "comment",
   FLOW = "flow"
}

export interface BaseNode {
   type: NodeType
}
