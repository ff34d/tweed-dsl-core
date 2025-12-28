import { NodeType, type BaseNode } from "../Base"

export enum FlowNodeConnectionStyle {
   "-" = "fill",
   "--" = "dotted"
}

export enum FlowNodeConnectionDirection {
   ">" = "right",
   "<" = "left",
   "<>" = "rl"
}

export interface FlowNode extends BaseNode {
   type: NodeType.FLOW
   connection: FlowNodeConnection
}

export interface FlowNodeConnection {
   style: FlowNodeConnectionStyle
   direction: FlowNodeConnectionDirection
   from: string
   to: string
}

export function isFlowNode(target: BaseNode): target is FlowNode {
   return target?.type === NodeType.FLOW && "connection" in target
}
