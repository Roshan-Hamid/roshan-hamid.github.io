/**
 * LMS platforms I've worked on or supported.
 * Add a logo by saving a file in src/assets/ and importing it here.
 * Entries without a logo are shown as a text name.
 */
// import vocabspedia from '../assets/logo-vocabspedia.png'

export interface Platform {
  name: string
  logo?: string
}

export const platformsIntro = {
  stat: '100+',
  statLabel: 'LMS platforms supported',
  text: 'As a support engineer I handled issues, fixes and maintenance across 100+ learning platforms.',
}

/** Logos are hidden for now. Uncomment entries (and the import above) to show them again. */
export const platforms: Platform[] = [
  // { name: 'Vocabspedia', logo: vocabspedia },
  // { name: 'Upgrade' },
  // { name: 'PSC' },
]
