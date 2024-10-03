import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import "./DropdownMenu.css"
import { Link } from 'react-router-dom'

const menuTabs = [
    {
        id: 1,
        title: "Settings",
        href: "/settings"
    },
    {
        id: 2,
        title: "Support",
        href: "/support"
    },
    {
        id: 3,
        title: "License",
        href: "/license"
    }
]

export default function DropdownMenu() {
    return (
        <Menu>
            <MenuButton
                className="menu-button"
            >
                My account
            </MenuButton>
            <MenuItems
                anchor="bottom"
                className="menu-items">
                {
                    menuTabs.map((tab) => (
                        <MenuItem>
                            <Link
                                key={tab.id}
                                to={tab.href}
                                className="menu-item"
                            >
                                {tab.title}
                            </Link>
                        </MenuItem>
                    ))
                }
            </MenuItems>
        </Menu>
    )
}