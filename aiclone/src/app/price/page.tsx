"use client"
import { PricingCard } from "@/components/ui/dark-gradient-pricing"
import { Cloud, Server, BarChart3, Sparkles, Users } from "lucide-react"

export default function price() {
  return (    <section className="relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 md:px-8">
        <div className="mb-12 space-y-3">
          <div className="text-center">
            <h2 className="relative inline-block text-3xl font-semibold leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
              Our flexible pricing plans
              <svg
                className="absolute left-[55%] -bottom-2 w-[220px]"
                height="12"
                viewBox="0 0 300 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{ stopColor: '#FFA500', stopOpacity: 0.4 }} />
                    <stop offset="50%" style={{ stopColor: '#FFA500', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#FFA500', stopOpacity: 0.4 }} />
                  </linearGradient>
                </defs>
                <path
                  d="M1 10C20 10 40 2 60 2C80 2 100 10 120 10C140 10 160 2 180 2C200 2 220 10 240 10C260 10 280 2 299 2"
                  stroke="url(#underlineGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  className="animate-draw-line"
                />
              </svg>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <PricingCard
            theme="purple"
            tier={
              <div className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-purple-500" />
                <span className="text-purple-500 font-medium">Free</span>
              </div>
            }
            price={
              <div className="flex items-baseline">
                <span>$0</span>
                <span className="text-sm text-zinc-400 ml-1">/month</span>
              </div>
            }
            bestFor="Free forever. No credit card required."
            CTA="Get Started"
            benefits={[
              { text: "ChatGPT 4 unlimited.", checked: true },
              { text: "Basic test scheduling & classroom freatures.", checked: true },
              { text: "Group chat.", checked: true },
              { text: "AI based question generation 5 credit.", checked: true },
            ]}
          />
          <PricingCard
            theme="teal"
            tier={
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-teal-500" />
                <span className="text-teal-500 font-medium">Premium</span>
              </div>
            }
            price={
              <div className="flex items-baseline">
                <span>$49</span>
                <span className="text-sm text-zinc-400 ml-1">/month</span>
              </div>
            }
            CTA="Get Started"
            benefits={[
              { text: "All included in Free.", checked: true },
              { text: "Unlimited Questions Generations from your topic or paragraph", checked: true },
              { text: "Download your generated questions and use or make print of it as per your will.", checked: true },
              { text: "5 credit to generate questions from your file per month.", checked: true },
              { text: "Unlimited test schedule at scale.", checked: true },
              { text: "Question generation request to other person on this platform.", checked: true },
            ]}
          />
          <PricingCard
            theme="gray"
            tier={
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-gray-500" />
                <span className="text-gray-500 font-medium">Enterprise</span>
              </div>
            }
            price={              <div className="flex items-center justify-center gap-1.5">                <a 
                  href="/price"
                  className="flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900 px-2 py-[1px] text-xs font-normal text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-800"
                >
                  <Cloud className="h-[10px] w-[10px]" />
                  <span className="mt-px">Cloud</span>
                </a>
                <a 
                  href="/price"
                  className="flex items-center gap-1 rounded-full border border-zinc-800 bg-zinc-900 px-2 py-[1px] text-xs font-normal text-zinc-300 transition-colors hover:border-zinc-700 hover:bg-zinc-800"
                >
                  <Server className="h-[10px] w-[10px]" />
                  <span className="mt-px">Self Hosted</span>
                </a>
              </div>
            }
            CTA="Schedule A Demo"
            benefits={[
              { text: "Seemless integrate ScholarRankAI in your existing infra.", checked: true },
              { text: "Dedicated account manager & tech person regular.", checked: true },
              { text: "Custom feature request support.", checked: true },
              { text: "Dedicated pricing.", checked: true },
            ]}
          />
        </div>
      </div>
    </section>
  )
}