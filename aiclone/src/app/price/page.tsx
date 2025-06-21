"use client"
import { PricingCard } from "@/components/ui/dark-gradient-pricing"
import { Cloud, Server, BarChart3, Sparkles, Users } from "lucide-react"

export default function price() {
  return (    
  <section>
      <div className="relative  mx-auto max-w-5xl px-4 py-20 md:px-8">
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
              <div className="flex items-center gap-4">
                <BarChart3 className="h-5 w-5 text-purple-500" />
                <span className="text-purple-500 font-medium">Free</span>
              </div>
            }
            price={
              <div className="flex items-baseline">
                <span className="text-zinc-200 dark:text-zinc-100">$0</span>
                <span className="text-sm text-zinc-200 ml-3">/month</span>
              </div>
            }
            bestFor="Free forever. No credit card required."
            CTA="Get Started"
            benefits={[
              { text: "ChatGPT 4 unlimited.", checked: true },
              { text: "Test scheduling & classroom features.", checked: true },
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
                <span className="text-zinc-200 dark:text-zinc-100">$49</span>
                <span className="text-sm text-zinc-200 ml-3">/month</span>
              </div>
            }
            CTA="Get Started"
            benefits={[
              { text: "All included in Free.", checked: true },
              { text: "Unlimited Questions Generations", checked: true },
              { text: "Download your generated questions", checked: true },
              { text: "5 credit used question/month", checked: true },
              { text: "Unlimited test schedule at scale.", checked: true },
              { text: "Question generation in Collaboration", checked: true },
            ]}
          />
          <PricingCard
            theme="gray"
            tier={
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-orange-500" />
                <span className="text-orange-500 font-medium">Enterprise</span>
              </div>
            }
            price={              
              <div className="flex items-center justify-center gap-1.5">                
                <a 
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
              { text: "Seemless integration of the platform", checked: true },
              { text: "Dedicated Tech & Support", checked: true },
              { text: "Custom feature request support.", checked: true },
              { text: "Dedicated pricing.", checked: true },
            ]}
          />
        </div>
      </div>
      {/* Advanced Pricing Table Section */}
      <div className="relative mx-auto max-w-5xl px-4 pb-20 md:px-8">
        <div className="mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2">Compare Features</h2>
            <p className="text-zinc-600 dark:text-zinc-400">See what each plan offers in detail</p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="rounded-lg border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-800/80 shadow-sm overflow-x-auto">
                <table className="min-w-full divide-y divide-zinc-700 text-sm text-zinc-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-4 text-left font-medium text-zinc-100">Features</th>
                      <th className="px-6 py-4 font-medium text-zinc-100">Starter</th>
                      <th className="px-6 py-4 font-medium text-zinc-100">Pro</th>
                      <th className="px-6 py-4 font-medium text-zinc-100">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    {[
                      { feature: 'Basic Analytics', starter: true, pro: true, enterprise: true },
                      { feature: 'Up to 5 team members', starter: true, pro: true, enterprise: true },
                      { feature: 'Basic support', starter: true, pro: true, enterprise: true },
                      { feature: 'Advanced Analytics', starter: false, pro: true, enterprise: true },
                      { feature: 'Up to 20 team members', starter: false, pro: true, enterprise: true },
                      { feature: 'Priority support', starter: false, pro: true, enterprise: true },
                      { feature: 'Custom integrations', starter: false, pro: true, enterprise: true },
                      { feature: 'Unlimited team members', starter: false, pro: true, enterprise: true },
                      { feature: '24/7 phone support', starter: false, pro: true, enterprise: true },
                    ].map((row, idx) => (
                      <tr key={row.feature} className={idx % 2 === 0 ? 'bg-zinc-900/30' : ''}>
                        <td className="px-6 py-4 text-zinc-300">{row.feature}</td>
                        {[row.starter, row.pro, row.enterprise].map((val, i) => (
                          <td key={i} className="px-6 py-4 text-center">
                            {val ? (
                              <span className="inline-flex items-center justify-center rounded-full bg-green-600/80 text-white w-5 h-5">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                              </span>
                            ) : (
                              <span className="inline-flex items-center justify-center rounded-full bg-zinc-700 text-zinc-400 w-5 h-5">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}