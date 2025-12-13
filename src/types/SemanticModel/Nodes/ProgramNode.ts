import { NodeType, type BaseNode } from "../Base"
import type { CommentNode } from "./CommentNode"
import type { DirectiveNode } from "./DirectiveNode"
import type { EntityNode } from "./EntityNode"

export enum ProgramName {
   FLOWCHART = "flowchart"
}

export enum ProgramSchemeType {
   DIAGRAM = "diagram"
}

export interface ProgramNode extends BaseNode {
   type: NodeType.PROGRAM
   schemeType: ProgramSchemeType
   name: ProgramName
   label: string
   nodes: (BaseNode | CommentNode | EntityNode | DirectiveNode)[]
}

export function isProgramNode(n: BaseNode): n is ProgramNode {
   return n.type === NodeType.PROGRAM && "schemeType" in n && "nodes" in n
}
