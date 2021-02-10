import {
  DZ1_nums,
  DZ1_str,
  DZ1_sumOfItems
} from './index.js';

it('DZ1_nums: calls console.log with 7+2 and 7*2', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  DZ1_nums(7, 2);
  expect(consoleSpy).toHaveBeenCalledWith(9, 14);
});

it('DZ1_nums: calls console.log with -1+0 and -1*0', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  DZ1_nums(-1, 0);
  expect(consoleSpy).toHaveBeenCalledWith(-1, -0);
});

it('DZ1_nums: calls console.log with NaN', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  DZ1_nums();
  expect(consoleSpy).toHaveBeenCalledWith('Error');
});

it('DZ1_nums: calls console.log with String and Null', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  DZ1_nums('String', null);
  expect(consoleSpy).toHaveBeenCalledWith('Error');
});

it('DZ1_str: calls console.log with empty strings', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  DZ1_str('', '');
  expect(consoleSpy).toHaveBeenCalledWith(0);
});

it('DZ1_str: calls console.log with Null and empty string', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  DZ1_str(null, '');
  expect(consoleSpy).toHaveBeenCalledWith('Error');
});

it('DZ1_str: calls console.log with string and number', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  DZ1_str('Some String', 1);
  expect(consoleSpy).toHaveBeenCalledWith('Error');
});

it('DZ1_sumOfItems: calls console.log with 123', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  jest.spyOn(window, 'prompt').mockReturnValue('123');
  DZ1_sumOfItems();
  expect(consoleSpy).toHaveBeenCalledWith(6);
});

it('DZ1_sumOfItems: calls console.log with "Some String"', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  // jest.spyOn(window, "prompt").returnValue("123");
  jest.spyOn(window, 'prompt').mockReturnValue('Some string');
  DZ1_sumOfItems();
  expect(consoleSpy).toHaveBeenCalledWith('Error');
});

it('DZ1_sumOfItems: calls console.log with Null', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  // jest.spyOn(window, "prompt").returnValue("123");
  jest.spyOn(window, 'prompt').mockReturnValue(null);
  DZ1_sumOfItems();
  expect(consoleSpy).toHaveBeenCalledWith('Error');
});

it('DZ1_sumOfItems: calls console.log with empty string', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  // jest.spyOn(window, "prompt").returnValue("123");
  jest.spyOn(window, 'prompt').mockReturnValue();
  DZ1_sumOfItems();
  expect(consoleSpy).toHaveBeenCalledWith('Error');
});
