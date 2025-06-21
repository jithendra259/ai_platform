import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface BenefitProps {
  text: string
  checked: boolean
}

const Benefit = ({ text, checked }: BenefitProps) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span className="grid size-4 place-content-center rounded-full bg-primary text-sm text-primary-foreground">
          <Check className="size-3" />
        </span>
      ) : (
        <span className="grid size-4 place-content-center rounded-full dark:bg-zinc-800 bg-zinc-200 text-sm dark:text-zinc-400 text-zinc-600">
          <X className="size-3" />
        </span>
      )}
      <span className="text-sm text-zinc-300 dark:text-zinc-400">{text}</span>
    </div>
  )
}

interface PricingCardProps {
  tier: string | React.ReactNode
  price: string | React.ReactNode
  bestFor?: string
  CTA: string
  benefits: Array<{ text: string; checked: boolean }>
  className?: string
  theme?: 'purple' | 'teal' | 'gray'
}

export const PricingCard = ({
  tier,
  price,
  bestFor,
  CTA,
  benefits,
  className,
  theme,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ filter: "blur(2px)" }}
      whileInView={{ filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}
      whileHover={{ scale: 1.045, y: -10, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.18)' }}
      style={{ cursor: 'pointer' }}
    >
      <Card
        className={cn(
          "relative h-full w-full flex flex-col overflow-hidden border",
          "border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-zinc-800/80",
          "p-6",
          className,
        )}
      >
        <div className="relative flex flex-col items-center pb-6">
          <span className={cn(
            "mb-6 inline-block font-medium",
            theme === 'purple' && "text-purple-500",
            theme === 'teal' && "text-teal-500",
            theme === 'gray' && "text-[#FFA500]"
          )}>
            {tier}
          </span>
          <span className="mb-3 inline-block text-4xl font-medium">
            {price}
          </span>
          <span className="dark:bg-gradient-to-br dark:from-zinc-200 dark:to-zinc-500 bg-gradient-to-br from-zinc-700 to-zinc-900 bg-clip-text text-center text-transparent">
            {bestFor}
          </span>
          <div className="absolute left-0 w-full" style={{ top: '88px' }}>
            <div className="mx-6 h-[2px] bg-white opacity-80 rounded" />
          </div>
        </div>
        <div className="flex-1 space-y-4 py-9">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
        <div className="mt-auto">
          <Button
            className={cn(
              "w-full transition-colors",
              theme === 'purple' && "hover:bg-purple-500 hover:text-white",
              theme === 'teal' && "hover:bg-teal-500 hover:text-white",
              theme === 'gray' && "hover:bg-[#FFA500] hover:text-white text-[#FFA500] border-[#FFA500] border",
              !theme && "hover:bg-zinc-800 hover:text-white"
            )}
            variant="ghost"
          >
            {CTA}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default PricingCard;
