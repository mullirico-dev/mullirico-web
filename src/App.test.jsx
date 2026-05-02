import { render, screen, within } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the main hero, product, and contact content', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /naturally fermented bread, baked slowly each week/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /our signature sourdough/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: /reach mullirico directly/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders the expected ingredient cards', () => {
    render(<App />);

    const ingredientsHeading = screen.getByRole('heading', {
      name: /simple, clear, and carefully chosen/i,
    });
    const ingredientsSection = ingredientsHeading.closest('section');

    expect(ingredientsSection).not.toBeNull();
    expect(
      within(ingredientsSection).getByText(/organic all-purpose flour/i),
    ).toBeInTheDocument();
    expect(
      within(ingredientsSection).getByText(/^water$/i),
    ).toBeInTheDocument();
    expect(
      within(ingredientsSection).getByText(/organic extra virgin olive oil/i),
    ).toBeInTheDocument();
    expect(
      within(ingredientsSection).getByText(/^himalayan salt$/i),
    ).toBeInTheDocument();
  });

  it('renders ordering links with the correct destinations', () => {
    render(<App />);

    const orderLinks = screen.getAllByRole('link', { name: /order by email/i });
    expect(orderLinks.length).toBeGreaterThan(0);

    for (const link of orderLinks) {
      expect(link).toHaveAttribute('href', 'mailto:orders@mullirico.com');
    }

    const instagramLinks = screen.getAllByRole('link', { name: /instagram/i });
    expect(instagramLinks.length).toBeGreaterThan(0);
    expect(
      instagramLinks.some((link) =>
        link.getAttribute('href')?.includes('instagram.com/mullirico'),
      ),
    ).toBe(true);
  });

  it('renders six gallery images', () => {
    render(<App />);

    const galleryHeading = screen.getByRole('heading', {
      name: /a closer look at the loaves/i,
    });
    const gallerySection = galleryHeading.closest('section');
    expect(gallerySection).not.toBeNull();

    const images = within(gallerySection).getAllByRole('img');
    expect(images.length).toBeGreaterThanOrEqual(6);
  });
});
