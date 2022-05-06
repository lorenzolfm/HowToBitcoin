import { create } from 'react-test-renderer';
import { Input } from 'components/Input';

describe('Input', () => {
  const props = {
    id: 'test',
    onChange: jest.fn(),
    placeholder: 'test',
    value: 'test',
  };

  it('matches snapshot', () => {
    expect(create(<Input {...props} />)).toMatchSnapshot();
  });
});
