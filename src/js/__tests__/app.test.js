import Validator from '../app';

test('getting information', () => {
  const input = new Validator("Alex");
  const expected = true;
  const received = input.validateUsername();
  expect(received).toBe(expected);
});

test('getting information', () => {
  const input = new Validator("1Alex_");
  const expected = false;
  const received = input.validateUsername();
  expect(received).toBe(expected);
});