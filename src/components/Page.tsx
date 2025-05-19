import type { ReactElement } from "react";

interface PageProps {
    children: ReactElement[],
}

function Page(props: PageProps) {
    return (
        <div className="bg-main dark:bg-gray-900 transition-colors">
            {props.children}
        </div>
    )
}

export default Page