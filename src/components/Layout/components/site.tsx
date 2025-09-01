import type { ReactNode } from "react"

export const Site = ({ children }: { children: ReactNode }) => {
    return (
        <div className="layout-site layout">
            {children}
        </div>
    )
}