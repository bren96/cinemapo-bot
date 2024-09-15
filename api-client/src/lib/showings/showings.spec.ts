import { getShowings } from "./showings"

describe('showings lib', () => {
  it('should return list of showings on 2024-09-07', () => {
    const showings = getShowings('2024-09-07')
    expect(showings).toEqual([
      'Beetlejuice Beetlejuice',
      'My First Film',
      'The Front Room',
      'SING SING',
      'Between the Temples',
      'DIDI',
    ])
  })
})