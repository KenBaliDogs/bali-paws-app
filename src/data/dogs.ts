import type { Dog } from '../types'

export const dogs: Dog[] = [
  {
    id: 'dog-001',
    name: 'Kopi',
    photo_url:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop',
    story:
      'Kopi was found wandering the streets of Ubud with a badly injured hind leg after being hit by a motorbike. After weeks of veterinary care and round-the-clock attention from our volunteers, he made a full recovery. Now he greets every visitor at the shelter with his signature tail-wagging sprint. His name means "coffee" in Indonesian, and his warm brown eyes match perfectly.',
    monthly_amount_usd: 25,
    monthly_amount_idr: 400000,
    is_sponsored: true,
    sponsor_id: 'user-012',
    created_at: '2025-03-15T08:00:00Z',
  },
  {
    id: 'dog-002',
    name: 'Dewi',
    photo_url:
      'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&h=400&fit=crop',
    story:
      'Dewi was rescued as a tiny puppy from a drainage ditch in Denpasar during monsoon season. She was shivering, malnourished, and barely breathing when a local shop owner called us. Today she is a joyful, energetic girl who loves playing fetch with coconut husks. Dewi means "goddess" and she truly lives up to her name with her regal posture and gentle spirit.',
    monthly_amount_usd: 25,
    monthly_amount_idr: 400000,
    is_sponsored: false,
    sponsor_id: null,
    created_at: '2025-06-02T10:30:00Z',
  },
  {
    id: 'dog-003',
    name: 'Bagus',
    photo_url:
      'https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=600&h=400&fit=crop',
    story:
      'Bagus was found chained to an abandoned warung near Canggu with no food or water. He was severely dehydrated and had deep wounds around his neck from the chain. Despite everything he endured, Bagus is the gentlest soul at our shelter. He loves belly rubs and will roll onto his back the moment anyone kneels down beside him. His name means "handsome" and he certainly is.',
    monthly_amount_usd: 25,
    monthly_amount_idr: 400000,
    is_sponsored: true,
    sponsor_id: 'user-027',
    created_at: '2025-01-20T14:15:00Z',
  },
  {
    id: 'dog-004',
    name: 'Lila',
    photo_url:
      'https://images.unsplash.com/photo-1544568100-847a948585b9?w=600&h=400&fit=crop',
    story:
      'Lila was part of a litter born under a temple in Sanur. While her siblings were adopted by local families, Lila was the runt and struggled to compete for food. A temple priest brought her to us when she was just four weeks old. She has blossomed into a curious and playful dog who loves exploring every corner of the shelter garden. She is still looking for a monthly sponsor to help cover her food and vet checkups.',
    monthly_amount_usd: 25,
    monthly_amount_idr: 400000,
    is_sponsored: false,
    sponsor_id: null,
    created_at: '2025-08-11T06:45:00Z',
  },
  {
    id: 'dog-005',
    name: 'Wayan',
    photo_url:
      'https://images.unsplash.com/photo-1477884213360-7e9d7dcc8f9b?w=600&h=400&fit=crop',
    story:
      'Wayan showed up at our shelter gate one morning on his own, as if he already knew this was home. He had been living on the beach near Seminyak, surviving on scraps from tourist restaurants. He was covered in ticks and had a skin infection across most of his body. After three months of treatment his coat grew back thick and healthy. Wayan is named in the Balinese tradition as a firstborn, and he acts like the big brother to every new rescue that arrives.',
    monthly_amount_usd: 25,
    monthly_amount_idr: 400000,
    is_sponsored: false,
    sponsor_id: null,
    created_at: '2025-04-28T12:00:00Z',
  },
  {
    id: 'dog-006',
    name: 'Nasi',
    photo_url:
      'https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600&h=400&fit=crop',
    story:
      'Nasi was rescued from a rice paddy near Tegallalang where she had been living among the farmers, eating scraps of leftover rice, which is how she got her name. She was pregnant when we found her and gave birth to five healthy puppies at the shelter. All her puppies have been adopted into loving homes, and now Nasi deserves a sponsor of her own to keep her happy and healthy for years to come.',
    monthly_amount_usd: 25,
    monthly_amount_idr: 400000,
    is_sponsored: false,
    sponsor_id: null,
    created_at: '2025-09-03T09:20:00Z',
  },
]
