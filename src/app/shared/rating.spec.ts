import { Rating } from './rating';

describe('Rating', () => {
  it('should create an instance', () => {
    expect(new Rating(55,44,44,66,77,88,99,66,55,44,55)).toBeTruthy();
  });
});
