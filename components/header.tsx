import Image from "next/image";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { manageAuth } from "@/app/actions/menage-auth";

export const Header = async () => {
    const session = await auth();

    return (
        <header className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between py-10">
            <div className="flex items-center gap-4">
                <Image src="/logo.svg" alt="ProjectInBio logo" width={187} height={32} />
            </div>
            <div className="flex items-center gap-4">
                { session && <Button>Minha Página</Button> }
                <form action={manageAuth}>
                    <Button>{ session ? 'Sair' : "Logar" }</Button>
                </form>
            </div>
        </header>
    )
}