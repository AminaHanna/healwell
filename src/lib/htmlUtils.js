/**
 * Utility functions for handling HTML content
 */

/**
 * Strips HTML tags from a string and returns plain text
 * @param {string} html - HTML string to strip
 * @param {number} maxLength - Maximum length of returned text (optional)
 * @returns {string} Plain text without HTML tags
 */
export function stripHtmlTags(html) {
  if (!html) return '';
  
  // Create a temporary element to parse HTML
  const temp = document.createElement('div');
  temp.innerHTML = html;
  
  // Get text content and clean up whitespace
  let text = temp.textContent || temp.innerText || '';
  
  // Clean up multiple spaces and line breaks
  text = text.replace(/\s+/g, ' ').trim();
  
  return text;
}

/**
 * Strips HTML tags and truncates text to a specified length
 * @param {string} html - HTML string to process
 * @param {number} maxLength - Maximum length of returned text (default: 100)
 * @returns {string} Plain text without HTML tags, truncated if necessary
 */
export function stripHtmlAndTruncate(html, maxLength = 100) {
  const plainText = stripHtmlTags(html);
  
  if (plainText.length <= maxLength) {
    return plainText;
  }
  
  // Truncate and add ellipsis
  return plainText.substring(0, maxLength).trim() + '...';
}

/**
 * Safely strips HTML tags using regex (fallback for SSR environments)
 * @param {string} html - HTML string to strip
 * @returns {string} Plain text without HTML tags
 */
export function stripHtmlTagsRegex(html) {
  if (!html) return '';
  
  // Remove HTML tags using regex
  let text = html.replace(/<[^>]*>/g, '');
  
  // Decode HTML entities
  text = text
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  
  // Clean up multiple spaces and line breaks
  text = text.replace(/\s+/g, ' ').trim();
  
  return text;
}

/**
 * Safely strips HTML tags and truncates (regex-based, works in SSR)
 * @param {string} html - HTML string to process
 * @param {number} maxLength - Maximum length of returned text (default: 100)
 * @returns {string} Plain text without HTML tags, truncated if necessary
 */
export function stripHtmlAndTruncateRegex(html, maxLength = 100) {
  const plainText = stripHtmlTagsRegex(html);
  
  if (plainText.length <= maxLength) {
    return plainText;
  }
  
  // Truncate and add ellipsis
  return plainText.substring(0, maxLength).trim() + '...';
}

