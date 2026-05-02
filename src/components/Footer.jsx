import BrandMark from './BrandMark';

function Footer({ instagramUrl, infoEmail, ordersEmail }) {
  return (
    <footer className="border-t border-brown/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-brown/70 md:flex-row md:items-center md:justify-between">
        <div>
          <BrandMark />
          <p className="script-accent mt-4 text-brown/70">Made with love. Baked for you.</p>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${ordersEmail}`} className="story-link">
              Orders
            </a>
            <a href={`mailto:${infoEmail}`} className="story-link">
              Email
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="story-link">
              Instagram
            </a>
          </div>
          <p>© {new Date().getFullYear()} MulliRico. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
