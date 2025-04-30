import { Header } from "@/components/header";
import { Rocket } from "lucide-react";
import { TextInput } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


export default function Create() {
  return (
    <div className="">
        <Header />
        <div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
            <div className="flex items-center gap-4">
                <h1 className="text-4xl font-bold text-white">Escolha seu link</h1>
                <Rocket className="size-10" />
            </div>
            <form
                action=""
                className="w-full flex items-center gap-2"
            >   
                <span className="text-white text-xl">projectinbio.com/</span>
                <TextInput placeholder="Seu link" />
                <Button className="cursor-pointer">Criar alguma</Button>
                
            </form>
            <div>
                <span className="text-accent-pink">Erro de exemplo</span>
            </div>
        </div>
    </div>
  );
}
