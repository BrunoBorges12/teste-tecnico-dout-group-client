import type { ReactNode } from "react"

export const Content = ({ children }: { children: ReactNode }) => {
    return (
        <div className="layout-content ">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="layout-content-padding ">

                    {children}
                </div>
            </div>
        </div>
    )
}