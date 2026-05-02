export const SEMVER_LABELS = ['semver:patch', 'semver:minor', 'semver:major'];

export function getMatchingSemverLabels(labels) {
  return SEMVER_LABELS.filter((label) => labels.includes(label));
}

export function labelToBump(label) {
  if (label === 'semver:major') return 'major';
  if (label === 'semver:minor') return 'minor';
  return 'patch';
}
