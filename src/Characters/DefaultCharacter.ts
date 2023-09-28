import { IronswornCharacter } from "../Types/CharacterTypes";

export const blankCharacter: IronswornCharacter = {
  id:"",
  name: "",
  worldName: "",
  description:"",
  experience: {
    min: 0,
    spent: 0,
    current: 0,
    max: 28,
  },
  gauges: [
    {
      name: "Health",
      description: "Current physical condition and stamina",
      min: 0,
      max: 5,
      current: 5,
      reset: 1,
    },
    {
      name: "Spirit",
      description: "Current mental state",
      min: 0,
      max: 5,
      current: 5,
      reset: 1,
    },
    {
      name: "Supply",
      description: "Current prepardness and supplies",
      min: 0,
      max: 5,
      current: 5,
      reset: 1,
    },
    {
      name: "Momentum",
      description: "How your quests are faring",
      min: -2,
      max: 12,
      current: 2,
      reset: 2,
    },
  ],
  stats: [
    {
      name: "Edge",
      initials: "E",
      value: 0,
      description: "Quickness, agility, and prowess in ranged combat",
    },
    {
      name: "Heart",
      initials: "H",
      value: 0,
      description: "Courage, willpower, empathy, sociability, and loyalty",
    },
    {
      name: "Iron",
      initials: "I",
      value: 0,
      description: "Strength, endurance, aggressiveness, and martial prowess",
    },
    {
      name: "Shadow",
      initials: "S",
      value: 0,
      description: "Sneakiness, guile, deceptiveness, and cunning",
    },
    {
      name: "Wit",
      initials: "W",
      value: 0,
      description: "Expertise, versatility, knowledge, and observation",
    },
  ],
  vows: new Map(),
  bonds: new Map(),
  conditions: [
    {
      name: "Wounded",
      active: false,
      description:
        "You are severely injured and need treatment to recover. You cannot increase health.",
    },
    {
      name: "Shaken",
      active: false,
      description:
        "You are despairing or distraught, and need comfort to recover. You cannot increase spirit.",
    },
    {
      name: "Unprepared",
      active: false,
      description:
        "You are ill-prepared for your current circumstances. You cannot increase supply.",
    },
    {
      name: "Encumbered",
      active: false,
      description:
        "You are overburdened. You can remove this by lightening your load.",
    },
  ],
  banes: [
    {
      name: "Maimed",
      active: false,
      description:
        "You have suffered a wound which causes you ongoing physical challenges, or bear hideous scars",
      manifesting: "",
    },
    {
      name: "Corrupted",
      active: false,
      description:
        "Your experiences have left you emotionally scarred, and you are at the threshold of losing yourself to darkness",
      manifesting: "",
    },
  ],
  burdens: [
    {
      name: "Cursed",
      active: false,
      description:
        "You have returned with a soul-bound quest, and must clear it by completing the quest",
      manifesting: "",
      relatedVow: undefined,
    },
    {
      name: "Tormented",
      active: false,
      description:
        "You alone can prevent a dire future, and must clear it by completing the quest",
      manifesting: "",
      relatedVow: undefined,
    },
  ],
  companions: [],
  paths: [],
  talents: [],
  rituals: [],
  equipment: [],
  date:Date.now()
};
