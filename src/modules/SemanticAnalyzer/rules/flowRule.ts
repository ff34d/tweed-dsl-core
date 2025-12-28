import type { SemanticRule } from "../../../types/SemanticAnalyzer"
import { isFlowNode } from "../../../types/SemanticModel"

export const flowRule: SemanticRule = (n, programNode) => {
   if (!isFlowNode(n)) return false

   const targets = programNode?.nodes?.filter(
      (v) => "id" in v && (v?.id === n.connection.from || v?.id === n.connection.to)
   )

   if (targets?.length !== 2) return false

   return true
}
