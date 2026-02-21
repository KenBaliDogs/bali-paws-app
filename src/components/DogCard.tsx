import { useNavigate } from 'react-router-dom'
import type { Dog } from '../types'
import { nameToGradient } from '../utils/nameToGradient'

interface DogCardProps {
  dog: Dog
}

export default function DogCard({ dog }: DogCardProps) {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(`/dogs/${dog.id}`)}
      className="w-[200px] flex-shrink-0 bg-dark rounded-2xl overflow-hidden text-left transition-transform active:scale-[0.97]"
    >
      {/* Image area */}
      <div className={`relative h-40 bg-gradient-to-br ${nameToGradient(dog.name)}`}>
        {dog.photo_url ? (
          <img
            src={dog.photo_url}
            alt={dog.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-4xl text-gray/40">
            🐾
          </div>
        )}

        {/* Status badge */}
        {dog.is_sponsored ? (
          <span className="absolute top-2.5 right-2.5 bg-teal text-black text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full">
            Sponsored
          </span>
        ) : (
          <span className="absolute top-2.5 right-2.5 bg-electric text-black text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full">
            Urgent
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-3.5">
        <h3 className="text-white font-extrabold text-base leading-tight">
          {dog.name}
        </h3>
        <p className="text-gray text-xs leading-snug mt-1 line-clamp-2">
          {dog.story}
        </p>
        <p className="text-white/70 text-xs font-semibold mt-2">
          ${dog.monthly_amount_usd}/mo
        </p>

        {/* Action button */}
        <div
          className={`mt-3 w-full text-center text-xs font-bold py-2 rounded-lg ${
            dog.is_sponsored
              ? 'bg-teal text-black'
              : 'bg-electric text-black'
          }`}
        >
          {dog.is_sponsored ? 'Details' : 'Sponsor'}
        </div>
      </div>
    </button>
  )
}
