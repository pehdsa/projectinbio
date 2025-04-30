import { FAQ_ITEMS } from "@/lib/config";
import { FaqCard } from "@/components/faq-card";

export const Faq = () => {
    return (
        <section className="my-[150px] flex flex-col items-center gap-14">
            <div className="flex flex-col items-center gap-6">
                <h3 className="text-4xl font-bold text-white">
                    Dúvidas frequentes
                </h3>
            </div>
            <div className="columns-2 gap-4 space-y-4">
                { FAQ_ITEMS.map((faq,index) => <FaqCard key={index} title={faq.title} description={ faq.description } />) }
            </div>
        </section>
    )
}