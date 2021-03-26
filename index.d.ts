declare interface PokemonEvolutionRequirement {
  amount: number
  name: string
}

declare interface Attack {
  name: string
  type: string
  damage: number
}

declare interface PokemonDimension {
  minimum: string
  maximum: string
}

declare interface PokemonAttack {
  fast: Attack[]
  special: Attack[]
}

declare interface Pokemon {
  id: number
  number: string
  name: string
  weight: PokemonDimension
  height: PokemonDimension
  classification: string
  types: string[]
  resistant: string[]
  attacks: PokemonAttack
  weaknesses: string[]
  fleeRate: Float
  maxCP: number
  evolutions: Pokemon[]
  evolutionRequirements: PokemonEvolutionRequirement
  maxHP: number
  image: string
}

declare interface PokemonList {
  pokemons: Pokemon[]
}
