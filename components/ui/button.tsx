import React from "react";
import { cn } from "@/lib/utils"


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    variant?: "primary" | "secondary" | "ghost", 
}

export const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
    return (
        <button 
            { ...props }
            className={cn(
                `p-3 text-white rounded-xl font-bold whitespace-nowrap hover:opacity-95 disabled:opacity-70`,
                variant === "primary" && "bg-accent-purple",
                variant === "secondary" && "bg-background-tertiary",
                variant === "ghost" && "border-border-primary",
                props.className
            )}
        >
            { children }
        </button>
    )
}

