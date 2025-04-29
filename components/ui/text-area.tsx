import React from "react";
import { cn } from "@/lib/utils"

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    // children: React.ReactNode,
    // variant?: "primary" | "secondary" | "ghost", 
}

export const TextArea = ({ ...props }: TextAreaProps) => {
    return (
        <textarea 
            { ...props } 
            className={cn(
                "w-full p-3 bg-background-secondary text-white placeholder:text-content-placeholder rounded-xl border-transparent hover:border-border-secondary hover:text-content-body active:border-border-tertiary",
                props.className
            )}
        />
    )
}