type Props = {
  className?: string;
  imageClassName?: string;
};

const BBB_HREF =
  "https://www.bbb.org/us/tn/la-vergne/profile/roofing-contractors/jp-pro-services-llc-0573-37380553/#sealclick";
const BBB_IMAGE_SRC =
  "https://seal-nashville.bbb.org/seals/blue-seal-200-42-bbb-37380553.png";
const BBB_ALT = "JP Pro Services LLC BBB Business Review";

export default function BBBSeal({ className = "", imageClassName = "" }: Props) {
  return (
    <a
      href={BBB_HREF}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={className}
      aria-label="View JP Pro Services LLC on Better Business Bureau"
    >
      <img
        src={BBB_IMAGE_SRC}
        alt={BBB_ALT}
        className={imageClassName}
        style={{ border: 0 }}
      />
    </a>
  );
}
