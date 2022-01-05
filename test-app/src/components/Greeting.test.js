import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting', () => {
  test('should say Hello World!', () => {
    //Arrange
    render(<Greeting />);

    //Act
    // ...

    //Assert
    const helloWorld = screen.getByText('Hello World!', { extact: true });
    expect(helloWorld).toBeInTheDocument();
  });

  test('should render Its good to see you', () => {
    render(<Greeting />);

    const outputText = screen.getByText("It's good to see you!", {
      extact: false,
    });
    expect(outputText).toBeInTheDocument();
  });

  test('should render Changed! text', () => {
    render(<Greeting />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    const outputText = screen.getByText('Changed!', {
      extact: false,
    });
    expect(outputText).toBeInTheDocument();
  });
});
