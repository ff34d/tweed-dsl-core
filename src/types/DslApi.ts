import type { IR } from "./Ir"

export interface IDslApi {
   read(s: string): IR
}
