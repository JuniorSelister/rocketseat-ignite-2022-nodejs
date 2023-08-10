import { InMemoryGymsRespository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

let gymsRepository: InMemoryGymsRespository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRespository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })


  it('should be able to fetch nearby gyms', async () => {
    await gymsRepository.create({
      title: 'Far Gym',
      description: null,
      phone: null,
      latitude: -29.9118744,
      longitude: -51.0695692
    })

    await gymsRepository.create({
      title: 'Near Gym',
      description: null,
      phone: null,
      latitude: -29.7745978,
      longitude: -51.1340875
    })

    const { gyms } = await sut.execute({
      userLatitude: -29.7740729,
      userLongitude: -51.1532529
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([
      expect.objectContaining({ title: 'Near Gym' }),
    ])
  })

})