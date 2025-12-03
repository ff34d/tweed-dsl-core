export const dslCode = `
      # diagram flowchart "Products diagram"

      # entities

      block [block_id] "block label"
      triangle [triangle_id] "triangle label"

      block [block_1] { label = "block 1", theme = "default" }
      block [block_2] {
         label = "block 2",
         theme = "default"
      }

      # diagram flowchart "Products diagram __2"
      
      @group [group_1] (block_id, triangle_id)
      @group [group_2] (
         block_id,
         triangle_id
      )
    `

export const dslCodeLexerStuckError = `
      # diagram flowchart "Products diagram"

      # entities

      block [block_id] "block label"
      triangle [triangle_id] "triangle label"

      block [block_1] { label = "block 1", theme = "default" }
      block [block_2] {
         label = "block 2",
         theme = "default"
      }

      # diagram flowchart "Products diagram __2"
      
      @group [group_1] (block_id, triangle_id)
      @group [group_2] (
         block_id,
         triangle_id
      )
    
      ~
    `
