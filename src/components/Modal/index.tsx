import { clsx } from "clsx"
import { ButtonHTMLAttributes, ReactNode } from "react"
import { IconTimes } from "../Icons"

interface ModalProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: "small" | "medium" | "large"
    title?: string
    extraStyle?: string
    onClose?: any
    children: ReactNode
}

const Modal: React.FC<ModalProps> = ({
    size = "medium",
    title = "",
    onClose,
    children,
    extraStyle
}: ModalProps) => {
    const sizeClasses = {
        small: "sm:max-w-lg",
        medium: "sm:max-w-4xl",
        large: "sm:max-w-7xl"
    }

    const classes = clsx(
        "fixed z-50 flex h-svh w-full items-center justify-center",
        extraStyle
    )

    return (
        <div className={classes}>
            <div className={`relative z-50 size-full rounded-xl bg-stone-800 sm:h-auto ${sizeClasses[size]}`}>
                <div className="flex w-full items-center justify-between border-b border-stone-700 p-4">
                    <span className="w-full text-center font-semibold">
                        {title}
                    </span>
                    <button onClick={onClose}>
                        <IconTimes className="size-6 stroke-white stroke-2" />
                    </button>
                </div>
                <div className="p-4">
                    {children}
                </div>
            </div>
            <div className="absolute left-0 top-0 size-full bg-stone-900/50 backdrop-blur" />
        </div>
    )
}

export default Modal