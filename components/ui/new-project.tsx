"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { ArrowUpFromLine } from "lucide-react";


export const NewProject = ({ profileId }: { profileId: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <button onClick={() => setIsOpen(true)} className="w-[340px] h-[122px] rounded-[20px] bg-background-secondary flex items-center gap-2 justify-center hover:border border-dashed cursor-pointer">
            <Plus className="size-10 text-accent-green" />
            <span>Novo projeto</span>
        </button>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
            <div className="bg-background-primary p-8 rounded-[20px] flex flex-col justify-between gap-10">
                <p className="text-white font-bold text-xl">Novo Projeto</p>
                <div className="flex gap-10">
                    <div className="flex flex-col items-center gap-3 text-xs">
                        <div className="w-[100px] h-[100px] rounded-xl bg-background-tertiary overflow-hidden">
                            <button className="w-full h-full">100x100</button>
                        </div>
                        <button>
                            <ArrowUpFromLine />
                            <span>Adicionar imagem</span>
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
        </>
    )
}