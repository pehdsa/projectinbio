import { UserCard } from "@/components/user-card";
import { ProjectCard } from "@/components/project-card";
import { TotalVisits } from "@/components/total-visits";
import { getProfileData } from "@/app/server/get-profile-data";
import { notFound } from "next/navigation";
import { NewProject } from "@/components/ui/new-project"
import { auth } from "@/lib/auth";
import Link from "next/link"


export default async function ProfilePage({ params }: { 
    params: Promise<{ profileId: string }>
}) {
    const { profileId } = await params;

    const profileData = await getProfileData(profileId);
    if (!profileData) return notFound();

    const session = await auth();
    const isSameOwner = profileData.userId == session?.user?.id;
    // if (!isSameOwner) return notFound();

    return (
        <div className="relative h-screen flex p-20 overflow-hidden">
            <div className="fixed top-0 left-0 w-full flex justify-center items-center gap-1 py-2 bg-background-tertiary">
                <span>Você está usando a versão trial.</span>
                <Link href={`/perfil/${profileId}/upgrade`}>
                    <button className="text-accent-green font-bold cursor-pointer hover:underline">
                        Faça o upgrade agora!
                    </button>
                </Link>
            </div>
            <div className="w-1/2 flex justify-center h-min">
                <UserCard />
            </div>
            <div className="w-full flex justify-center content-start gap-4 flex-wrap overflow-y-auto">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                { isSameOwner && (
                    <NewProject profileId={profileId} />
                ) } 
            </div>
            <div className="absolute bottom-4 right-0 left-0 w-min mx-auto">
                <TotalVisits />
            </div>
        </div>
    );
}
