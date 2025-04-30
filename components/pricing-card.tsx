"use client"

import { Button } from "@/components/ui/button";

interface PricingCardProps {
    title: string;
    price: string;
    recommended?: boolean;
    onClick: () => void;   
}

export const PricingCard = ({ title, price, recommended = false, onClick }: PricingCardProps) => {
    return (
        <>
        <div className={`relative w-[304px] flex flex-col gap-7 rounded-2xl ${ recommended ? "bg-[linear-gradient(90deg,#4B2DBB_0%,#B5446B_100%)] border-transparent" : "bg-[#1E1E1E]" }`}>
            { recommended && (
                <div className="text-xs font-bold absolute top-0 left-0 right-0 flex justify-center items-center h-[33px] rounded-t-2xl w-[304px] bg-[linear-gradient(90deg,#4B2DBB_0%,#B5446B_100%)]">
                    RECOMENDADO 
                </div>
            ) }
            <div className="p-[1px]">
                <div className={`p-8 flex flex-col rounded-2xl gap-7 ${ recommended ? "bg-background-secondary pt-[53px]" : "bg-background-primary" }`}>
                    <div className="flex flex-col">
                        <span className="text-white font-bold text-2xl">{ title }</span>
                        <span className="text-content-body">Apenas</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span className="text-white font-bold text-2xl">{ price }</span>
                        <span className="text-content-headline text-2xl">/mês</span>
                    </div>
                    <Button onClick={onClick} variant={`${ recommended ? "primary" : "secondary" }`}>Assinar</Button>
                </div>
            </div>
        </div>
        </>
    )
}