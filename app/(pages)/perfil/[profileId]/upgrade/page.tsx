import { Header } from "@/components/header";
import { Button } from "@/components/ui/button"


export default async function Upgrade({ params }: { 
    params: Promise<{ profileId: string }>
}) {
    const { profileId } = await params;
    return (
        <div className="h-screen flex flex-col items-center justify-center gap-4 ">
            <Header />
            <h2 className="text-2xl font-bold">Escolha o plano</h2>
            <div className="flex gap-4">
                <Button>R$ 9,90 / Mês</Button>
                <Button>R$ 99,90 Vitalício</Button>
            </div>
        </div>
    );
}
