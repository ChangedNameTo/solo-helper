import { IronswornCharacter } from "../Types/CharacterTypes";
import { VowTier } from "../Types/VowTypes";

export const testCharacter: IronswornCharacter = {
  id: "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
  name: "Nismera Elro",
  worldName: "The Iron Isles",
  description: "A pale female high-elf with slanted cheekbones",
  experience: {
    min: 0,
    spent: 3,
    current: 10,
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
      value: 3,
      description: "Quickness, agility, and prowess in ranged combat",
    },
    {
      name: "Heart",
      initials: "H",
      value: 2,
      description: "Courage, willpower, empathy, sociability, and loyalty",
    },
    {
      name: "Iron",
      initials: "I",
      value: 2,
      description: "Strength, endurance, aggressiveness, and martial prowess",
    },
    {
      name: "Shadow",
      initials: "S",
      value: 1,
      description: "Sneakiness, guile, deceptiveness, and cunning",
    },
    {
      name: "Wit",
      initials: "W",
      value: 1,
      description: "Expertise, versatility, knowledge, and observation",
    },
  ],
  vows: new Map([
    [
      "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
      {
        name: "Find my sister",
        id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        description:
          "My sister has wandered away from the village. I need to find her and bring her home.",
        tier: VowTier.Troublesome,
        min: 0,
        max: 40,
        current: 20,
      },
    ],
    [
      "qpoqiweuroiqeurpoqwrpiqwuwqq",
      {
        name: "Slay the Dragon",
        id: "qpoqiweuroiqeurpoqwrpiqwuwqq",
        description: "Pee poo peepee.",
        tier: VowTier.Epic,
        min: 0,
        max: 40,
        current: 20,
      },
    ],
  ]),
  bonds: new Map([
    [
      "c90f9243-9e14-4fef-9ac7-2c87e9491a58",
      {
        id: "c90f9243-9e14-4fef-9ac7-2c87e9491a58",
        name: "Last Hearth",
        description: "My home village",
      },
    ],
    [
      "23c48e07-2ab8-42a0-8639-b0db26b47488",
      {
        id: "23c48e07-2ab8-42a0-8639-b0db26b47488",
        name: "My friends",
        description: "Simba and Calcifer, my sacred beasts",
      },
    ],
  ]),
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
  companions: [
    {
      type: "Hawk",
      name: "Silijana",
      active: true,
      description:
        "Silijana is no ordinary bird; it's a majestic, iridescent phoenix with shimmering plumage that shifts from fiery reds and oranges to cool blues and greens. Its wingspan is impressive, casting a warm, ethereal glow that lights your path through the darkest of dungeons.",
      abilities: [
        {
          name: "Far-seeing",
          description:
            "When you Undertake a Journey, or when you Resupply by hunting for small game, add +1.",
          starting: false,
          active: false,
        },
        {
          name: "Fierce",
          description:
            "When you Secure an Advantage +edge using your hawk to harass and distract your foes, add +1 and take +1 momentum on a hit.",
          starting: false,
          active: false,
        },
        {
          name: "Vigilant",
          description:
            "When you Face Danger +wits to detect an approaching threat, or when you Enter the Fray +wits against an ambush, add +2",
          starting: false,
          active: false,
        },
      ],
      health: {
        min: 0,
        max: 3,
        current: 3,
        reset: 1,
      },
    },
  ],
  paths: [
    {
      type: "Storyweaver",
      active: true,
      abilities: [
        {
          name: "Perform",
          description:
            "When you Secure an Advantage, Compel, or Forge a Bond by sharing an inspiring or enlightening song, poem, or tale, envision the story you tell. Then, add +1 and take +1 momentum on a hit.",
          active: true,
        },
        {
          name: "Spin Stories",
          description:
            "When you Make Camp and choose the option to relax, you may share a story with your allies or compose a new story if alone. If you do, envision the story you tell and take +1 spirit or +1 momentum. Any allies who choose to relax in your company may also take +1 spirit or +1 momentum.",
          active: false,
        },
        {
          name: "Gossip",
          description:
            "When you Sojourn within a community with which you share a bond, add +2 (instead of +1).",
          active: false,
        },
      ],
    },
  ],
  talents: [
    {
      name: "Shield-Bearer",
      requirement: "Holding Shield",
      active: false,
      abilities: [
        {
          name: "Stand Behind Me!",
          description:
            "When you Face Danger using your shield as cover, add +1. When you Clash in close quarters, take +1 momentum on a strong hit.",
          starting: false,
          active: false,
        },
        {
          name: "Chosen's Champion",
          description:
            "When you bear a shield painted with a meaningful symbol, and you Endure Stress as you face off against a fearsome foe, add +1 and take +1 momentum on a hit.",
          starting: false,
          active: false,
        },
        {
          name: "Bent, not Broken",
          description:
            "When forced to Endure Harm in a fight, you may instead sacrifice your shield and ignore all harm. If you do, your shield is destroyed or will require extensive repair; suffer -2 momentum.",
          starting: false,
          active: false,
        },
      ],
    },
  ],
  rituals: [
    {
      name: "Communion",
      active: false,
      abilities: [
        {
          name: "Speak to the Dead",
          description:
            "When you surround the remains of a recently deceased intelligent creature with lit candles, and summon its spirit, roll +heart. Add +1 if you share a bond. On a strong hit, the spirit appears and you may converse for a few minutes. Make moves as appropriate (add +1). On a weak hit, as above, but the spirit also delivers troubling news unrelated to your purpose. Envision what it tells you (Ask the Oracle if unsure) and Endure Stress (1 stress).",
          starting: true,
          active: true,
        },
        {
          name: "Beckon the Remnant",
          description: "As above, and you may also commune with the long-dead.",
          starting: false,
          active: false,
        },
        {
          name: "Medium",
          description:
            "When you perform this ritual, add +1 and take +1 momentum on a hit",
          starting: false,
          active: false,
        },
      ],
    },
  ],
  equipment: [
    {
      name: "Shield of the Lion",
      description:
        "Full greatshield emblazoned with the head of a golden lion.",
    },
  ],
  date: Date.now(),
};
