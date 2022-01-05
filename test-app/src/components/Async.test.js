import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Aync', () => {
  test('should posts if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: '1', title: 'text' }],
    });
    render(<Async />);

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).not.toHaveLength(0);
  });
});
