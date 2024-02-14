import { clsx } from "clsx"
import { ButtonHTMLAttributes, ReactNode } from "react"
import { Spinner } from "../Icons"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "tertiary"
    size?: "small" | "medium" | "large"
    isFull?: boolean
    isLoading?: boolean
    disabled?: boolean
    children: ReactNode
}

const Button: React.FC<ButtonProps> = (props) => {
    const { variant = "primary", size = "medium", isFull = false, isLoading = false, disabled, children, ...rest } = props

    const sizeClasses = {
        small: "text-sm px-6 py-2.5",
        medium: "px-7 py-3",
        large: "text-xl px-6 py-4"
    }

    const getSpinnerSizeClass = (size: ButtonProps["size"]) => (
        size === "small" ? "size-4" : size === "medium" ? "size-5" : "size-7"
    )

    const classes = clsx(
        "flex w-fit cursor-pointer items-center justify-center gap-2 rounded-xl transition",
        {
            "bg-primary-600 hover:bg-primary-600/75 text-white": variant === "primary",
            "bg-stone-900 hover:bg-stone-900/75 text-stone-400": variant === "secondary",
            "bg-transparent text-gray-700 !p-0": variant === "tertiary",
            "w-full": isFull === true,
            "disabled:opacity-50 disabled:cursor-default": disabled === true,
            [sizeClasses[size]]: sizeClasses[size]
        }
    )

    return (
        <button className={classes} disabled={disabled || isLoading} {...rest}>
            {isLoading && <Spinner className={`animate-spin fill-none ${getSpinnerSizeClass(size)}`} /> }
            {children}
        </button>
    )
}

export default Button