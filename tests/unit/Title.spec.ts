import { shallowMount } from '@vue/test-utils'
import Title from '@/components/Title.vue'

describe('Title.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'sample title'
    const wrapper = shallowMount(Title, {
      props: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })
})
