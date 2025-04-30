import { TextInput } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UserCard } from "@/components/user-card";
import { TotalVisits } from "@/components/total-visits";
import { ProjectCard } from "@/components/project-card";


export const Hero = () => {
    return (
        <section className="hero flex h-screen">
            <div className="w-full flex flex-col gap-2 mt-[35vh]">
                <h1 className="text-5xl font-bold text-white">Seus projetos e redes sociais em um único link</h1>
                <h2 className="text-xl leading-6">
                    Crie sua própria página de projetos e compartilhe com o mundo.
                    <br />
                    Acompanhe o engajamento com Analytics de cliques
                </h2>
                <div className="flex items-center gap-2 w-full mt-[10vh]">
                    <span className="text-white text-xl">projectinbio.com/</span>
                    <TextInput placeholder="Seu link" />
                    <Button className="cursor-pointer">Criar alguma</Button>
                </div>
            </div>
            <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2Dbb,transparent_55%)]">
                <div className="relative">
                    <UserCard />
                    <div className="absolute bottom-[2%] -right-[45%]">
                        <TotalVisits />
                    </div>
                    <div className="absolute top-[20%] -left-[45%] -z-10 blur-[3px]">
                        <ProjectCard />
                    </div>
                    <div className="absolute -top-[5%] -left-[55%] -z-10 blur-[2px]">
                        <ProjectCard />
                    </div>
                </div>
            </div>
        </section>
    )
}