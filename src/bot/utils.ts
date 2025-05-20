export function getDaysRemainingInMonth() {
  const avui = new Date()
  const ultimDiaMes = new Date(
    avui.getFullYear(),
    avui.getMonth() + 1,
    0
  ).getDate()
  const diesRestants = ultimDiaMes - avui.getDate()

  return diesRestants
}

export function getCurrentMonth(): number {
  const now = new Date()
  return now.getMonth() + 1
}

export function getPoints(message: string) {
  const tries = message.split(' ')[2].split('/')[0]

  if (tries === 'X') return 0

  const points = 6 - parseInt(tries)

  return points + 1
}

export function getPointsForHability(hability: number) {
  // Normalized hability between 0 and 1
  const normalizedHability = Math.min(Math.max(hability, 0), 10) / 10

  // Generate a random number between 0 and 1
  const rand = Math.random()

  // Higher hability means much better punctuations
  // and low hability much worst punctuations
  if (rand < 0.15 - normalizedHability * 0.12) {
    return 0
  } else if (rand < 0.35 - normalizedHability * 0.2) {
    return 1
  } else if (rand < 0.55 - normalizedHability * 0.2) {
    return 2
  } else if (rand < 0.7) {
    return 3
  } else if (rand < 0.8 + normalizedHability * 0.1) {
    return 4
  } else if (rand < 0.9 + normalizedHability * 0.07) {
    return 5
  } else {
    return 6
  }
}

// TODO - Això posar-ho a config en contes d'aquí
export function getEmojiReactionFor(points: number) {
  if (points === 0) return '🤡'
  if (points === 1) return '😭'
  if (points === 2) return '😐'
  if (points === 3) return '😎'
  if (points === 4) return '🤯'
  if (points === 5) return '🏆'
  if (points === 6) return '🤨'
  return '🤷'
}
