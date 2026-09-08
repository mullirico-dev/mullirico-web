import divider from '../assets/brand/botanical-divider.svg';

// The fine-line wheat/bean/leaf border from our cups and bags, used as a
// horizontal divider between real sections — never tiled behind text.
function BotanicalDivider({ className = '' }) {
  return (
    <div className={`botanical-divider ${className}`.trim()} aria-hidden="true">
      <img src={divider} alt="" width="1200" height="90" loading="lazy" />
    </div>
  );
}

export default BotanicalDivider;
