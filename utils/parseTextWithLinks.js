/**
 * Parses text and converts URLs to clickable links
 * @param {string} text - The text to parse
 * @returns {Array} Array of React elements (text nodes and anchor tags)
 */
export const parseTextWithLinks = (text) => {
  if (!text || typeof text !== "string") return text;

  // Regex to match URLs (http://, https://)
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  const result = [];

  parts.forEach((part, index) => {
    // Check if part matches URL pattern
    if (part && /^https?:\/\/[^\s]+$/.test(part)) {
      // It's a URL, create a link
      result.push(
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {part}
        </a>
      );
    } else if (part) {
      // It's regular text
      result.push(part);
    }
  });

  return result;
};
