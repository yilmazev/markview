import { clsx } from "clsx"
import { ButtonHTMLAttributes, ReactNode } from "react"
import { IconSpinner } from "../Icons"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "tertiary"
    color?: any
    size?: "small" | "medium" | "large"
    isFull?: boolean
    isLoading?: boolean
    disabled?: boolean
    children: ReactNode
}

const Button: React.FC<ButtonProps> = (props) => {
    const { variant = "primary", color = null, size = "medium", isFull = false, isLoading = false, disabled, children, ...rest } = props

    const sizeClasses = {
        small: "text-sm px-6 py-2.5 h-10",
        medium: "px-7 py-3 h-12",
        large: "text-xl px-6 py-4"
    }

    const getIconSpinnerSizeClass = (size: ButtonProps["size"]) => (
        size === "small" ? "size-4" : size === "medium" ? "size-5" : "size-7"
    )

    const classes = clsx(
        "flex w-fit cursor-pointer items-center justify-center gap-2 rounded-xl font-medium transition",
        {
            "bg-primary-600 hover:bg-primary-600/75 text-white": ((variant === "primary") && (color === null)),
            "bg-green-600 hover:bg-green-600/75 text-white": ((variant === "primary") && (color === "success")),
            "bg-stone-900 hover:bg-stone-900/75 text-stone-400": ((variant === "secondary") && (color === null)),
            "text-primary-600 py-0 px-0 !h-auto !rounded-none": ((variant === "tertiary") && (color === null)),
            "text-white/85 py-0 px-0 !h-auto !rounded-none": ((variant === "tertiary") && (color === "light")),
            "w-full": isFull === true,
            "disabled:opacity-50 disabled:cursor-default": disabled === true,
            [sizeClasses[size]]: sizeClasses[size]
        }
    )

    return (
        <button className={classes} disabled={disabled || isLoading} {...rest}>
            {isLoading && <IconSpinner className={`animate-spin fill-none ${getIconSpinnerSizeClass(size)}`} /> }
            {children}
        </button>
    )
}

export default Button