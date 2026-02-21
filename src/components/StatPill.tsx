interface StatPillProps {
  number: string
  label: string
  color: 'green' | 'orange' | 'yellow'
}

const colorMap = {
  green: 'text-teal',
  orange: 'text-electric',
  yellow: 'text-lime',
} as const

export default function StatPill({ number, label, color }: StatPillProps) {
  return (
    <div className="bg-dark border border-charcoal rounded-[14px] p-3.5 text-center">
      <div className={`text-[22px] font-black ${colorMap[color]}`}>
        {number}
      </div>
      <div className="text-[10px] text-gray font-semibold uppercase tracking-widest mt-0.5">
        {label}
      </div>
    </div>
  )
}
