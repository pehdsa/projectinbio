
interface FaqCardProps {
    title: string;
    description: string;
}

export const FaqCard = ({ title, description }: FaqCardProps) => {
    return (
        <div className="w-[351px] h-min flex flex-col gap-3 p-5 rounded-2xl border border-border-primary bg-background-primary">
            <h4 className="font-bold text-white">{ title }</h4>
            <p className="text-content-body">{ description }</p>
        </div>
    )
}