"use client"

import { TRIAL_DAYS } from "@/lib/config";
import { PricingCard } from "@/components/pricing-card";


export const Pricing = () => {
    return (
        <section className="my-[150px] flex flex-col items-center gap-14">
            <div className="flex flex-col items-center gap-6">
                <h3 className="text-4xl font-bold text-white">
                    Um valor acessível para todos
                </h3>
                <p className="text-center text-content-body text-xl">Junte-se à comunidade de criadores profissionais que já estão elevando sua<br />presença online. Teste gratuitamente por <strong className="text-accent-pink">{ TRIAL_DAYS } dias</strong>, sem compromisso!</p>
            </div>
            <div className="flex items-end justify-center gap-9">
                <PricingCard title="Mensal" price="R$ 9,90" onClick={() => alert("oi")} />
                <PricingCard title="Vitalício" price="R$ 99,90" onClick={() => alert("oi")} recommended />
            </div>
        </section>
    )
}