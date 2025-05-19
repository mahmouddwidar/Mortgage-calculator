import type { ReactElement } from "react"

interface HeaderProps {
    children: ReactElement[],
}
export default function Header(props: HeaderProps) {
    return (
        <header className="flex justify-between items-center p-4 shadow">{props.children}</header>
    )
}
