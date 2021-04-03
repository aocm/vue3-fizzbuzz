import Title from '../components/Title.vue';

export default {
  title: 'Component/Title',
  component: Title,
  argTypes: {
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Title },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Title v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: 'sample title',
};

