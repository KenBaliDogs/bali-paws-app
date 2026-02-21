import { useState } from 'react'
import { Link } from 'react-router-dom'
import CurrencyToggle from '../components/CurrencyToggle'

const PRESETS_USD = [10, 25, 50, 100] as const
const PRESETS_IDR = [150_000, 400_000, 750_000, 1_500_000] as const

function formatLabel(amount: number, currency: 'USD' | 'IDR'): string {
  if (currency === 'IDR') {
    return amount >= 1_000_000
      ? `${(amount / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`
      : `${amount / 1_000}K`
  }
  return `$${amount}`
}

export default function Donate() {
  const [currency, setCurrency] = useState<'USD' | 'IDR'>('USD')
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [email, setEmail] = useState('')

  const presets = currency === 'USD' ? PRESETS_USD : PRESETS_IDR

  const activeAmount =
    customAmount.length > 0 ? Number(customAmount) || 0 : selectedAmount

  const buttonLabel =
    activeAmount && activeAmount > 0
      ? `Donate ${currency === 'IDR' ? 'Rp ' : '$'}${activeAmount.toLocaleString()} now`
      : 'Donate now'

  const isDisabled = !activeAmount || activeAmount <= 0

  return (
    <div className="pb-8">
      {/* ── Header ── */}
      <header className="flex items-center px-6 pt-5 pb-2">
        <Link
          to="/"
          className="w-10 h-10 flex items-center justify-center -ml-2"
          aria-label="Back"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <h1 className="flex-1 text-center text-lg font-extrabold -ml-10">
          Donate
        </h1>
      </header>

      {/* ── Main Card ── */}
      <div className="bg-dark rounded-2xl p-6 mx-6 mt-4">
        <h2 className="font-extrabold text-xl text-white">
          Make a one-time gift
        </h2>
        <p className="text-sm text-gray mt-1">
          Every dollar helps feed, vaccinate, and shelter our rescues.
        </p>

        {/* Currency toggle */}
        <div className="flex justify-end mt-4">
          <CurrencyToggle value={currency} onChange={(c) => {
            setCurrency(c)
            setSelectedAmount(null)
            setCustomAmount('')
          }} />
        </div>

        {/* ── Amount Selection ── */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          {presets.map((amount) => (
            <button
              key={amount}
              onClick={() => {
                setSelectedAmount(amount)
                setCustomAmount('')
              }}
              className={`rounded-xl py-5 text-center font-extrabold text-lg transition-colors ${
                selectedAmount === amount && customAmount.length === 0
                  ? 'border-2 border-electric bg-electric/10 text-white'
                  : 'bg-charcoal text-white border-2 border-transparent'
              }`}
            >
              {formatLabel(amount, currency)}
            </button>
          ))}
        </div>

        {/* Custom amount */}
        <input
          type="number"
          inputMode="numeric"
          placeholder="Enter amount"
          value={customAmount}
          onFocus={() => setSelectedAmount(null)}
          onChange={(e) => {
            setCustomAmount(e.target.value)
            setSelectedAmount(null)
          }}
          className="mt-3 w-full bg-charcoal rounded-xl px-4 py-4 text-white font-bold placeholder:text-gray/60 outline-none focus:ring-2 focus:ring-electric/40"
        />

        {/* ── Email ── */}
        <div className="mt-6">
          <label className="block text-xs text-gray uppercase tracking-widest font-semibold mb-2">
            Your email
          </label>
          <input
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-charcoal rounded-xl px-4 py-4 text-white placeholder:text-gray/60 outline-none focus:ring-2 focus:ring-electric/40"
          />
        </div>

        {/* ── Submit ── */}
        <button
          disabled={isDisabled}
          className={`mt-6 w-full bg-electric text-black rounded-[14px] py-4 font-extrabold text-base transition-opacity ${
            isDisabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {buttonLabel}
        </button>

        <p className="text-center text-xs text-gray mt-4">
          Secure payment powered by Stripe
        </p>
      </div>
    </div>
  )
}
