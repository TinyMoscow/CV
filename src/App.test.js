import { render, screen } from '@testing-library/react';
import { App } from './App';

test('показывает профиль и ссылку на портфолио', () => {
  render(<App />);
  expect(screen.getByText('Taras Nikitin')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /portfolio/i })).toHaveAttribute('href', '/portfolio');
});
