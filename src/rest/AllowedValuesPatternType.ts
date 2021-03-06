/**
 * Values that are allowed for the [allowedValuesPatternType]{@link IGroupByRequest.allowedValuesPatternType} parameter.
 */
export enum AllowedValuesPatternType {
  /**
   * Only supports trailing wildcards in the pattern.
   */
  Legacy = 'legacy',
  /**
   * Full support for wildcards.
   */
  Wildcards = 'wildcards',
  /**
   * Supports regular expression as the pattern.
   */
  Regex = 'regex',
  /**
   *Applies the Edit Distance algorithm to match values that are close to the specified pattern.
   */
  EditDistance = 'editdistance',
  /**
   *Applies a phonetic algorithm to match values that are phonetically similar to the specified pattern.
   */
  Phonetic = 'phonetic'
}
