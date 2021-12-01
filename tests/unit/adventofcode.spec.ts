import { shallowMount } from '@vue/test-utils'
import AdventOfCode from '@/components/AdventOfCode.vue'

describe('AdventOfCode.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(AdventOfCode, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg);
  })

  it('Solves day 1', async () => {
    // Arrange
    const msg = 'new message'
    const wrapper = shallowMount(AdventOfCode, {
      propsData: { msg }
    })

    // Act
    const textArea = wrapper.find('#input');
    textArea.setValue('199\n200\n208\n210\n200\n207\n240\n269\n260\n263');
    wrapper.find('#solve').trigger('click');
    await new Promise((r) => setTimeout(r, 2000));

    // Assert
    const solution1 = wrapper.find('#solution1').text();
    const solution2 = wrapper.find('#solution2').text();
    expect(solution1).toMatch('7');
    expect(solution2).toMatch('5');
  })  
})
