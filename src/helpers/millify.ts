import millify from 'millify';

/**
 * Formats a given number with a precision of 2 decimal places.
 *
 * @param number - The number to be formatted.
 * @returns The formatted number with a precision of 2 decimal places.
 */
function formateNumber(number: number) {
  return millify(number, { precision: 2 });
}

/**
 * Formats a given number into a human-readable string representation with appropriate units (B, KB, MB, GB, TB) and precision (up to 2 decimal places).
 *
 * @param number - The number to be formatted.
 * @returns A human-readable string representation of the input number with appropriate units and precision.
 */
function formateUnit(number: number) {
  return millify(number, {
    precision: 2,
    units: ['B', 'KB', 'MB', 'GB', 'TB'],
  });
}

export { formateNumber, formateUnit };
