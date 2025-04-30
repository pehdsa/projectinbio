import Image from "next/image";

export const ProjectCard = () => {
    return (
        <div className="w-[340px] flex gap-5 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-border-secondary">
            <div className="size-24 rounded-md overflow-hidden shrink-0">
                <Image 
                    src="/project1.png" 
                    alt="" 
                    className="object-cover w-full h-full" 
                    width={96}
                    height={96}
                />
            </div>
            <div className="flex flex-col gap-2">
                <span className="uppercase text-xs text-accent-green font-bold">10 cliques</span>
                <div className="flex flex-col">
                    <span className="text-white font-bold">Projeto 1</span>
                    <span className="text-content-body text-sm">Descrição super detalhada do projeto</span>
                </div>
            </div>
        </div>
    )
}