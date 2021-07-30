import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // Arrange
  render(<App />);

  // Action
  const linkElement = screen.getByText(/oke/i);
  
  // Assert
  expect(linkElement).toBeInTheDocument();

  // Arrange
  // Komponen atau fitur apa yang mau di test

  // Act
  // Terdapat fitur apa saja yang mau di test

  // Assert
  // Hasil yang di harapkan 
});
