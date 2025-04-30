import { Play } from "lucide-react";
import Image from "next/image";

export const VideoExplanation = () => {
    return (
        <section className="relative border border-border-primary aspect-video flex items-center justify-center my-20 rounded-xl">
            <Play className="absolute top-1/2 left-1/2 text-white size-18 -translate-x-1/2 -translate-y-1/2 z-10"/>
            <Image 
                src="/video.png"
                alt=""
                className="w-full h-full object-cover blur-xs"
                width={1206}
                height={675}
            />
        </section>
    )
}