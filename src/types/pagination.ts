export type Links = {
  first: string
  last: string
  next: string | null
  prev: string | null
}

export type Meta = {
  current_page: number
  from: number
  last_page: number
  links: {
      active: boolean
      label: string
      page: number | null
      url: string | null
  }[]
  path: string
  per_page: number
  to: number
  total: number
}