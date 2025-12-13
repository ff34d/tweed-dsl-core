import type { SemanticRule } from "../../../types/SemanticAnalyzer"
import { isCommentNode } from "../../../types/SemanticModel"

export const commentRule: SemanticRule = (n) => {
   if (!isCommentNode(n)) return false
   return true
}
