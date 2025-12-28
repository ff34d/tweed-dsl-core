import type { IR } from "./Ir"
import type { BaseNode, ProgramNode } from "./SemanticModel"

export interface ISemanticAnalyzer {
   analyze(ir: IR): boolean
}

export type SemanticRule = (node: BaseNode, programNode: ProgramNode) => boolean
