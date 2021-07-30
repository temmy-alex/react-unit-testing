import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
    // Test check string
    test('renders "Hello World" as a text', () => {
        // Arrange
        render(<Greeting />)

        // Act
        
        // Assert
        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    });

    // Test state false
    test('renders "good to see" you if the button was NOT clicked', () => {
        render(<Greeting />)

        // Exact = Berasal dari nilai state di component Greeting
        const outputElement = screen.getByText('good to see you', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    // Test state true if button onclick
    test('renders "Changed!" if the button was clicked', () => {
        render(<Greeting />)

        // menggunakan getByRole Trigger true berdasarkan button untuk mengubah state nya yang awalnya bernilai false
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // Assert (Ketika di klik dan state berubah menjadi true maka nilai textnya akan berubah menjadi ChangED)
        const outputElement = screen.getByText('Changed!');
        expect(outputElement).toBeInTheDocument()
    });

    // Test state true
})