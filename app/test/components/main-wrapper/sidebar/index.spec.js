import Component from '@/components/main-wrapper/sidebar/index.vue'

describe('components/main-wrapper/sidebar/index', () => {
  it('renders properly', () => {
    const wrapper = shallowMount(Component)
    wrapper.contains('.nav-link--home').should.be.true
    wrapper.contains('.nav-link--songs').should.be.true
  })
})
