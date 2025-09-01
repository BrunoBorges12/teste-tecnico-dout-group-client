import type { ReactNode } from "react"

export const Main = ({ children }: { children: ReactNode }) => {
    return (
        <div className="layout-main layout">
            {children}
        </div>
    )
}