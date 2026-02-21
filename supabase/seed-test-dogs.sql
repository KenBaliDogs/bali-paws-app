-- ============================================
-- Bali Paws Rescue — 3 Test Dogs
-- Paste into Supabase SQL Editor > Run
-- ============================================

insert into public.dogs (name, photo_url, story, monthly_amount_usd, monthly_amount_idr, is_sponsored) values
  (
    'Coco',
    'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&h=400&fit=crop&crop=face',
    'Coco was found as a tiny puppy abandoned in a cardboard box outside a convenience store in Kuta. She was barely three weeks old and needed bottle feeding every two hours. Our volunteers took turns through the night to keep her alive. She has since grown into a bouncy, mischievous girl who steals sandals and hides them under the shelter porch.',
    25,
    400000,
    false
  ),
  (
    'Bima',
    'https://images.unsplash.com/photo-1477884213360-7e9d7dcc8f9b?w=600&h=400&fit=crop&crop=face',
    'Bima is an older dog who was surrendered by a family leaving Bali. He spent his whole life as a house dog and was completely lost when he arrived at the shelter. He took weeks to trust anyone again. Now he has become the calming presence the other dogs rely on — always the first to greet nervous new arrivals with a gentle nudge of his grey muzzle.',
    25,
    400000,
    true
  ),
  (
    'Sari',
    'https://images.unsplash.com/photo-1544568100-847a948585b9?w=600&h=400&fit=crop&crop=face',
    'Sari was rescued from a rubbish tip near Jimbaran where she had been scavenging for weeks. She came in severely underweight with a fractured front leg that had never been treated. After surgery and two months of rehabilitation she is fully healed and has the most joyful spirit of any dog at the shelter. Sari means "essence" in Balinese, and she is the very essence of resilience.',
    25,
    400000,
    false
  );
