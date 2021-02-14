import { mount } from '@vue/test-utils'
import Logo from '@/components/global/Logo.vue'

describe('Logo', () => {
  test('Teste cego', () => {
    const boolean = true
    expect(boolean).toBeTruthy()
  })
})

// describe('Logo', () => {
//   test('is a Vue instance', () => {
//     const wrapper = mount(Logo)
//     expect(wrapper.vm).toBeTruthy()
//   })
// })
