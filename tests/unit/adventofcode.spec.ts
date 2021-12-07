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
    const select = wrapper.find('#day');
    select.setValue('1');
    const textArea = wrapper.find('#input');
    const input = '199\n200\n208\n210\n200\n207\n240\n269\n260\n263';
    textArea.setValue(input);
    wrapper.find('#solve').trigger('click');
    await new Promise((r) => setTimeout(r, 2000));

    // Assert
    const solution1 = wrapper.find('#solution1').text();
    const solution2 = wrapper.find('#solution2').text();
    expect(solution1).toMatch('7');
    expect(solution2).toMatch('5');
  })
  
  it('Solves day 2', async () => {
    // Arrange
    const msg = 'new message'
    const wrapper = shallowMount(AdventOfCode, {
      propsData: { msg }
    })

    // Act
    const select = wrapper.find('#day');
    select.setValue('2');
    const textArea = wrapper.find('#input');
    const input = 'forward 5\ndown 5\nforward 8\nup 3\ndown 8\nforward 2';
    textArea.setValue(input);
    wrapper.find('#solve').trigger('click');
    await new Promise((r) => setTimeout(r, 2000));

    // Assert
    const solution1 = wrapper.find('#solution1').text();
    const solution2 = wrapper.find('#solution2').text();
    expect(solution1).toMatch('150');
    expect(solution2).toMatch('900');
  })

  it('Solves day 3', async () => {
    // Arrange
    const msg = 'new message'
    const wrapper = shallowMount(AdventOfCode, {
      propsData: { msg }
    })

    // Act
    const select = wrapper.find('#day');
    select.setValue('3');
    const textArea = wrapper.find('#input');
    const input = '00100\n11110\n10110\n10111\n10101\n01111\n00111\n11100\n10000\n11001\n00010\n01010';
    textArea.setValue(input);
    wrapper.find('#solve').trigger('click');
    await new Promise((r) => setTimeout(r, 2000));

    // Assert
    const solution1 = wrapper.find('#solution1').text();
    const solution2 = wrapper.find('#solution2').text();
    expect(solution1).toMatch('198');
    expect(solution2).toMatch('230');
  })

  it('Solves day 4', async () => {
    const input = 
    `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`;

    // Arrange
    const msg = 'new message'
    const wrapper = shallowMount(AdventOfCode, {
      propsData: { msg }
    })

    // Act
    const select = wrapper.find('#day');
    select.setValue('4');
    const textArea = wrapper.find('#input');
    textArea.setValue(input);
    wrapper.find('#solve').trigger('click');
    await new Promise((r) => setTimeout(r, 2000));

    // Assert
    const solution1 = wrapper.find('#solution1').text();
    const solution2 = wrapper.find('#solution2').text();
    expect(solution1).toMatch('4512');
    expect(solution2).toMatch('1924');
  })  
})
