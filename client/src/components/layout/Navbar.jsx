import React from 'react'

export default function Navbar() {
    return (
        <div>
            <Navbar class="rounded-box bg-base-100">
                <FlexItem grow>
                    <Button ghost class="text-xl normal-case">daisyUI Kit 🌼</Button>
                </FlexItem>
                <Flex none class="gap-2">
                    <FormControl>
                        <TextInput bordered placeholder="Search" />
                    </FormControl>
                    <Dropdown end>
                        <Button ghost circle is="label" tabindex="0">
                            <Avatar circle class="w-10">
                                <img src="https://api.lorem.space/image/face?hash=33791" />
                            </Avatar>
                        </Button>
                        <DropdownContent>
                            <Menu compact tabindex="0" class="p-2 mt-3 shadow bg-base-100 rounded-box w-52">
                                <MenuItem>
                                    <a class="justify-between">
                                        Profile
                                        <span class="badge">New</span>
                                    </a>
                                </MenuItem>
                                <MenuItem><a>Settings</a></MenuItem>
                                <MenuItem><a>Logout</a></MenuItem>
                            </Menu>
                        </DropdownContent>
                    </Dropdown>
                </Flex>
            </Navbar>

        </div>
    )
}
