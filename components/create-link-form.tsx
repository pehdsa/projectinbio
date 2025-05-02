"use client"
import { useState, ChangeEvent, FormEvent } from "react"
import { TextInput } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { sanitizeLink } from "@/lib/utils";
import { verifyLink } from "@/app/actions/verify-link"
import { createLink } from "@/app/actions/create-link"
import { useRouter } from "next/navigation"

export const CreateLinkForm = () => {
    const router = useRouter();

    const [link, setLink] = useState("");
    const [error, setError] = useState("");

    function handleLinkChange(e: ChangeEvent<HTMLInputElement>) {
        setLink(sanitizeLink(e.target.value));
        setError("");
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (link.length === 0) return setError("Escolha um link primeiro");

        //Verifica se o link já existe
        const isLinkTaken = await verifyLink(link);
        if (isLinkTaken) return setError("Desculpe esse link já está em uso.");

        //Criar Perfil
        const isLinkCreated = await createLink(link);
        if (!isLinkCreated) return setError("Erro ao criar o perfil, tente novamente mais tarde.");

        router.push(`/perfil/${link}`);
    }


    return (
        <>
        <form
            onSubmit={handleSubmit}
            className="w-full flex items-center gap-2"
        >   
            <span className="text-white text-xl">projectinbio.com/</span>
            <TextInput placeholder="Seu link" value={link} onChange={handleLinkChange} />
            <Button className="cursor-pointer" type="submit">Criar alguma</Button>
            
        </form>
        { !!error && (
            <div>
                <span className="text-accent-pink">{ error }</span>
            </div>
        )}  
        </>
    )
}