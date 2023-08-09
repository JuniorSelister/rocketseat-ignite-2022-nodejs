import { InMemoryGymsRespository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateGymUseCase } from './create-gym'

let gymsRepository: InMemoryGymsRespository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRespository()
    sut = new CreateGymUseCase(gymsRepository)
  })


  it('should be able to create Gym', async () => {
    const { gym } = await sut.execute({
      title: 'JavaScript Gym',
      description: null,
      phone: null,
      latitude: -29.7740401,
      longitude: -51.1507919
    })

    expect(gym.id).toEqual(expect.any(String))
  })

})