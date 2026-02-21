interface CurrencyToggleProps {
  value: 'USD' | 'IDR'
  onChange: (currency: 'USD' | 'IDR') => void
}

export default function CurrencyToggle({ value, onChange }: CurrencyToggleProps) {
  return (
    <div className="inline-flex bg-charcoal rounded-lg p-0.5">
      <button
        onClick={() => onChange('USD')}
        className={`text-xs font-bold px-3.5 py-1.5 rounded-md transition-colors ${
          value === 'USD'
            ? 'bg-electric text-black'
            : 'text-gray'
        }`}
      >
        USD
      </button>
      <button
        onClick={() => onChange('IDR')}
        className={`text-xs font-bold px-3.5 py-1.5 rounded-md transition-colors ${
          value === 'IDR'
            ? 'bg-electric text-black'
            : 'text-gray'
        }`}
      >
        IDR
      </button>
    </div>
  )
}
