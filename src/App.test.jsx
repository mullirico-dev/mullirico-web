import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import App from './App';
import { samplers } from './content/site';
import { cafeJsonLd } from './seo';

describe('single-page site', () => {
  it('renders the shop name as the page heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(within(heading).getByAltText('MulliRico')).toBeInTheDocument();
  });

  it('states the opening status and address', () => {
    render(<App />);
    expect(screen.getAllByText(/Opening November 2026/).length).toBeGreaterThan(
      0,
    );
    expect(screen.getAllByText(/9522 Huffmeister Rd/).length).toBeGreaterThan(
      0,
    );
  });

  it('uses the camel band tagline exactly once', () => {
    render(<App />);
    expect(
      screen.getAllByText(
        'Crafted from scratch · Real ingredients · No shortcuts',
      ),
    ).toHaveLength(1);
  });

  it('shows the three craft chapters and the visit section', () => {
    render(<App />);
    for (const title of [
      /Specialty coffee/,
      /It all began/,
      /Homemade/,
      /Family-run/,
      /Come find us/,
    ]) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    }
  });

  it('shows sampler items from the content source', () => {
    render(<App />);
    for (const item of [
      ...samplers.coffee,
      ...samplers.sourdough,
      ...samplers.bakery,
    ]) {
      expect(screen.getAllByText(item).length).toBeGreaterThan(0);
    }
  });

  it('never shows a price', () => {
    const { container } = render(<App />);
    expect(container.textContent).not.toMatch(/\$\d/);
  });

  it('shows an hours-coming-soon slot', () => {
    render(<App />);
    expect(screen.getAllByText('Hours coming soon').length).toBeGreaterThan(0);
  });

  it('links the floating header to the visit section, not to other pages', () => {
    render(<App />);
    // The floating header is aria-hidden until the user scrolls past the
    // hero, so include hidden elements in the query.
    const cta = screen.getByRole('link', {
      name: 'Plan a visit',
      hidden: true,
    });
    expect(cta).toHaveAttribute('href', '#visit');
  });
});

describe('structured data', () => {
  it('describes the cafe with its real address and phone, without a menu URL', () => {
    const data = cafeJsonLd();
    expect(data['@type']).toBe('CafeOrCoffeeShop');
    expect(data.address.streetAddress).toBe('9522 Huffmeister Rd, Suite 700');
    expect(data.address.addressLocality).toBe('Houston');
    expect(data.address.postalCode).toBe('77095');
    expect(data.telephone).toBe('+1-346-563-8998');
    expect(data.hasMenu).toBeUndefined();
  });
});
