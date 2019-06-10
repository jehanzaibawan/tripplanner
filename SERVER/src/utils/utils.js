/**
 * This function calculates the actual price of the deal after subtracting the percentage
 * of discount applied
 *
 * @param  {number} basePrice
 * @param  {number} discount
 */
export const getPriceAfterDiscount = (basePrice, discount) => {
  // handle multiply by zero error
  if (discount > 0) {
    const percentOf = (basePrice * discount) / 100;

    // incase of discount% entered is higher than base price
    if (basePrice > percentOf) return basePrice - percentOf;
    else return basePrice;
  }
  return basePrice;
};

/**
 * This function simply sums up hours and mintues and returns the duration into minutes
 *
 * @param  {number} hours
 * @param  {number} minutes
 */
export const durationToMinutes = (hours, minutes) => {
  let _hours = parseInt(hours, 10);
  const _minutes = parseInt(minutes, 10);

  if (_hours !== 0) {
    _hours = _hours * 60;
  }

  return _hours + _minutes;
};
