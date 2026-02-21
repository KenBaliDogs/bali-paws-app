import { supabase } from './supabase'
import { dogs as localDogs } from '../data/dogs'
import type { Dog, DogUpdate } from '../types'

// ── Dogs (served from local data) ──

export async function fetchDogs(): Promise<Dog[]> {
  return localDogs
}

export async function fetchDog(id: string): Promise<Dog | null> {
  return localDogs.find((d) => d.id === id) ?? null
}

export async function fetchDogUpdates(dogId: string): Promise<DogUpdate[]> {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('dog_updates')
    .select('*')
    .eq('dog_id', dogId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data as DogUpdate[]
}

export async function fetchDogStats() {
  const sponsored = localDogs.filter((d) => d.is_sponsored).length
  return {
    dogsRescued: localDogs.length,
    activeSponsors: sponsored,
    totalRaised: 0,
  }
}

// ── User data ──

export async function fetchUserDonations(userId: string) {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('donations')
    .select('*, dogs(name)')
    .eq('donor_id', userId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function fetchUserSponsoredDogs(userId: string): Promise<Dog[]> {
  if (!supabase) return []
  const { data, error } = await supabase
    .from('dogs')
    .select('*')
    .eq('sponsor_id', userId)

  if (error) throw error
  return data as Dog[]
}

// ── Admin: Dogs CRUD ──

export async function createDog(dog: {
  name: string
  photo_url: string
  story: string
  monthly_amount_usd: number
  monthly_amount_idr: number
}) {
  if (!supabase) throw new Error('Database not configured')
  const { data, error } = await supabase
    .from('dogs')
    .insert(dog)
    .select()
    .single()

  if (error) throw error
  return data as Dog
}

export async function updateDog(id: string, updates: Partial<Dog>) {
  if (!supabase) throw new Error('Database not configured')
  const { data, error } = await supabase
    .from('dogs')
    .update(updates)
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data as Dog
}

export async function deleteDog(id: string) {
  if (!supabase) throw new Error('Database not configured')
  const { error } = await supabase
    .from('dogs')
    .delete()
    .eq('id', id)

  if (error) throw error
}

// ── Admin: Dog Updates ──

export async function createDogUpdate(update: {
  dog_id: string
  caption: string
  photo_url?: string
  posted_by: string
}) {
  if (!supabase) throw new Error('Database not configured')
  const { data, error } = await supabase
    .from('dog_updates')
    .insert(update)
    .select()
    .single()

  if (error) throw error
  return data as DogUpdate
}
