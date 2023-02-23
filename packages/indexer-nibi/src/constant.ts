/** CandlePeriod: Each value in the `enum` describes a time window in units of
 * seconds. A value of 3600 corresponds to a candle that occurs over one hour.
 */
export enum CandlePeriod {
  MIN_1 = 60,
  MIN_5 = 300,
  MIN_15 = 900,
  HOUR_1 = 3600,
  HOUR_6 = 21600,
  DAY_1 = 86400,
  WEEK_1 = 604800,
}
