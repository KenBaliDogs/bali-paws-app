export function nameToGradient(name: string): string {
  const gradients = [
    'from-charcoal to-dark',
    'from-charcoal via-dark to-charcoal',
    'from-dark to-charcoal',
  ]
  const index = name.charCodeAt(0) % gradients.length
  return gradients[index]
}
