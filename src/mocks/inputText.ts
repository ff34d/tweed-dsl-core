export const InputText = `
# diagram flowchart "Test program"

# test comment

block [test_block_1] "block label" 
triangle [test_triangle] "triangle label"

block ["test_block_2] "block label" {
    theme = "black",
    list = (1,2,3),
    list_2 = ("red", "green", "blue")
}

@group [test_group] (
    test_block_1, 
    test_triangle, 
    test_block_2
)

# diagram flowchart "Test program 2"

block [test_block_1] "block label"
` as const

export const InputTextStackError = `
# diagram flowchart "Test program"

# test comment

block [test_block_1] "block label"
triangle [test_triangle] "triangle label"

block [test_block_2] "block label" {
    theme = "black",
    list = (1,2,3),
    list_2 = ("red", "green", "blue"),
}

@group [test_group] (
    test_block_1, 
    test_triangle, 
    test_block_2
)

!@f-_
` as const
