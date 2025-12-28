import {
   FlowNodeConnectionDirection,
   FlowNodeConnectionStyle
} from "../../../types/SemanticModel"

export function parsePointer(s: string) {
   const pointers = s.replaceAll("-", "")
   const direction =
      FlowNodeConnectionDirection?.[pointers as keyof typeof FlowNodeConnectionDirection]
   if (!direction) throw new Error(`Parse pointer stuck at ${s}`)

   const line = s.replaceAll(/[<?>?]/g, "")
   const style = FlowNodeConnectionStyle?.[line as keyof typeof FlowNodeConnectionStyle]
   if (!style) throw new Error(`Parse pointer stuck at ${s}`)

   return {
      style: style,
      direction: direction
   }
}
