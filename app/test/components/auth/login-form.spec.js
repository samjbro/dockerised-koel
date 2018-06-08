import LoginForm from '@/components/auth/login-form.vue'
import { userStore } from '@/stores'

describe('components/auth/login-form', () => {
  it('displays a form for users to log in', () => {
    shallowMount(LoginForm).findAll('form').should.have.lengthOf(1)
  })

  it('triggers login when form is submitted', () => {
    const wrapper = shallowMount(LoginForm)
    const loginStub = sinon.stub(userStore, 'login')
    wrapper.trigger('submit')
    loginStub.calledWith(wrapper.vm.email, wrapper.vm.password).should.be.true
    loginStub.restore()
  })
})
