import { clsx } from "clsx"
import { ButtonHTMLAttributes, ReactNode } from "react"
import { IconSpinner } from "../Icons"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "tertiary"
    color?: "primary" | "success" | "light"
    size?: "small" | "medium" | "large"
    isFull?: boolean
    isLoading?: boolean
    extraStyle?: string,
    children: ReactNode
}

const Button: React.FC<ButtonProps> = ({
    variant = "primary",
    color = "primary",
    size = "medium",
    isFull = false,
    isLoading = false,
    disabled,
    children,
    extraStyle,
    ...rest
}: ButtonProps) => {
    const sizeClasses = {
        small: "text-sm px-6 py-2.5 h-10",
        medium: "px-7 py-3 h-12",
        large: "text-xl px-6 py-4"
    }

    const getIconSpinnerSizeClass = (size: ButtonProps["size"]) =>
        size === "small" ? "size-4" : size === "medium" ? "size-5" : "size-7"

    const classes = clsx(
        "flex cursor-pointer items-center justify-center gap-2 rounded-xl font-medium transition",
        {
            [sizeClasses[size]]: sizeClasses[size],
            "bg-primary-600 hover:bg-primary-600/75 text-white": variant === "primary",
            "bg-green-600 hover:bg-green-600/75 text-white": variant === "primary" && color === "success",
            "bg-stone-900 hover:bg-stone-900/75 text-stone-400": variant === "secondary",
            "text-primary-600 !py-0 !px-0 !h-auto !rounded-none": variant === "tertiary",
            "text-white/85 !py-0 !px-0 !h-auto !rounded-none": variant === "tertiary" && color === "light",
            "w-full": isFull,
            "disabled:bg-stone-600 disabled:opacity-50 disabled:cursor-default": disabled
        },
        extraStyle
    )

    return (
        <button className={classes} disabled={disabled || isLoading} {...rest}>
            {isLoading && (
                <IconSpinner className={`animate-spin fill-none ${getIconSpinnerSizeClass(size)}`} />
            )}
            {children}
        </button>
    )
}

export default Button
