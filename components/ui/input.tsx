import React from "react";
import { cn } from "@/lib/utils"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    // children: React.ReactNode,
    // variant?: "primary" | "secondary" | "ghost", 
}

export const TextInput = ({ ...props }: InputProps) => {
    return (
        <input 
            { ...props } 
            className={cn(
                "w-full p-3 bg-background-secondary text-white placeholder:text-content-placeholder rounded-xl border-transparent hover:border-border-secondary hover:text-content-body active:border-border-tertiary",
                props.className
            )}
        />
    )
}