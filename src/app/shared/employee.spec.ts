import { Employee } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee(1,'','','','',27,'','',[])).toBeTruthy();
  });
});
