import FizzBuzz from './FizzBuzz.vue'

export default {
  title: 'Component/FizzBuzz',
  component: FizzBuzz,
  argTypes: {
  }
}

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { FizzBuzz },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup () {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<FizzBuzz v-bind="args" />'
})

export const Default = Template.bind({})
Default.args = {
}
