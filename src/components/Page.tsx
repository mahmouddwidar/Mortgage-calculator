import type { ReactElement } from "react";

interface PageProps {
    children: ReactElement[],
}

function Page(props: PageProps) {
    return (
        <div className="bg-white dark:bg-gray-900 transition-colors">
            {props.children}
        </div>
    )
}

export default Page