import { act, fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

function renderAndEnterBreadSite() {
  render(<App />);

  vi.useFakeTimers();
  fireEvent.click(
    screen.getByRole('button', { name: /enter sourdough bread section/i }),
  );

  act(() => {
    vi.advanceTimersByTime(420);
  });

  vi.useRealTimers();
}

describe('App', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the landing selector by default', () => {
    render(<App />);

    expect(
      screen.getByText(/handcrafted in cypress, texas/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /enter sourdough bread section/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /mully bakes — coming soon/i }),
    ).toBeInTheDocument();
  });

  it('shows the coming-soon toast for mully bakes', () => {
    render(<App />);

    fireEvent.click(
      screen.getByRole('button', { name: /mully bakes — coming soon/i }),
    );

    expect(screen.getByText(/coming soon\./i)).toBeInTheDocument();
    expect(screen.getByText(/follow us for updates\./i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /@mullirico/i })).toHaveAttribute(
      'href',
      expect.stringContaining('instagram.com/mullirico'),
    );
  });

  it('renders the main hero, product, and contact content after entering the bread site', () => {
    renderAndEnterBreadSite();

    expect(
      screen.getByRole('heading', {
        name: /naturally fermented bread, baked slowly each week\./i,
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

  it('renders the expected ingredient cards after entering the bread site', () => {
    renderAndEnterBreadSite();

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

  it('renders ordering links with the correct destinations after entering the bread site', () => {
    renderAndEnterBreadSite();

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

  it('renders only unique gallery images after entering the bread site', () => {
    renderAndEnterBreadSite();

    const galleryHeading = screen.getByRole('heading', {
      name: /a closer look at the loaves/i,
    });
    const gallerySection = galleryHeading.closest('section');
    expect(gallerySection).not.toBeNull();

    const images = within(gallerySection).getAllByRole('img');
    expect(images).toHaveLength(4);

    const imageSources = images.map((image) => image.getAttribute('src'));
    expect(new Set(imageSources).size).toBe(images.length);
  });
});
