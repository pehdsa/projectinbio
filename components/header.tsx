import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Header = () => {
    return (
        <header className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between py-10">
            <div className="flex items-center gap-4">
                <Image src="/logo.svg" alt="ProjectInBio logo" width={187} height={32} />
            </div>
            <div className="flex items-center gap-4">
                <Button>Minha Página</Button>
                <Button>Sair</Button>
            </div>
        </header>
    )
}