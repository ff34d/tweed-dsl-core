export const InputText = `
# diagram flowchart "Test program"

# test comment

block [test_block_1] "block label" 
triangle [test_triangle] "triangle label"

block [test_block_2] "block label" {
    theme = "black",
    list = (1,2,3),
    list_2 = ("red", "green", "blue")
}

@group [test_group] (
    test_block_1, 
    test_triangle, 
    test_block_2
)

[test_block_1] -> [test_block_2]
[test_block_1] <- [test_block_2]
[test_block_1] <-> [test_block_2]

[test_block_1] --> [test_block_2]
[test_block_1] <-- [test_block_2]
[test_block_1] <--> [test_block_2]

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

export const dslApiText = `
# diagram flowchart "Architecture app"

block [user] "User entity"
block [user_service] "User service"

triangle [http] "Http client"
block [web] "Web cloud"

@group [app_group] (user, user_service)
@group [web_group] (http, web)

[user] -> [user_service]
[user_service] -> [http]
[http] <--> [web]

[app_group] <-> [web_group]
` as const
