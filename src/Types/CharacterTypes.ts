export enum VowTier {
  Troublesome = "troublesome",
  Dangerous = "dangerous",
  Formidable = "formidable",
  Extreme = "Extreme",
  Epic = "Epic",
}

export interface Gauge {
  name: string,
  description: string,
  min: number,
  max: number,
  current: number,
  reset: number,
}

export interface Stat {
  name: string,
  initials: string,
  value: number,
  description: string
}

export interface Vow {
  name: string,
  description: string,
  tier: VowTier,
  min: number,
  max: number,
  current: number
}

export interface Bond {

}

export interface IronswornCharacter {
  name: string,
  worldName: string,
  experience: {
    min: number,
    spent: number,
    current: number,
    max: number,
  }
  gauges: Array<Gauge>,
  stats: Array<Stat>,
  vows:Array<Vow>,
}