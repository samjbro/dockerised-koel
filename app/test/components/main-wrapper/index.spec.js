import Component from '@/components/main-wrapper/index.vue'
import Sidebar from '@/components/main-wrapper/sidebar/index.vue'
import MainContent from '@/components/main-wrapper/main-content/index.vue'
import Extra from '@/components/main-wrapper/extra/index.vue'

describe('component/main-wrapper/index', () => {
  it('renders properly', () => {
    // This passes even when Component only contains one of the subcomponents - why?
    mount(Component).contains(Sidebar).should.be.true
    mount(Component).contains(MainContent).should.be.true
    mount(Component).contains(Extra).should.be.true
  })
})
