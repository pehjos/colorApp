/**
 * Returns a random hex color in the format #RRGGBB
 * @returns {string} A random hex color
 */
export const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  /**
   * Returns a random hex color based on a given base color
   * 
   * The returned color is the base color with a random factor between 0 and 255 added to it.
   * The random factor is converted to a two-digit hex string and appended to the base color.
   * This ensures that the returned color is always a valid hex color.
   * @param {string} baseColor A valid hex color
   * @returns {string} A random hex color based on the given base color
   */
  export const getRandomColorFromBase = (baseColor) => {
    const randomFactor = () => Math.floor(Math.random() * 256); 
    return baseColor + randomFactor().toString(16).padStart(2, '0');
  };
  