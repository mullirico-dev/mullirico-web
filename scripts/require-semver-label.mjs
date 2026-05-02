import fs from 'node:fs';
import { getMatchingSemverLabels, SEMVER_LABELS } from './semver-labels.mjs';

const eventPath = process.env.GITHUB_EVENT_PATH;

if (!eventPath) {
  console.error('GITHUB_EVENT_PATH is required.');
  process.exit(1);
}

const payload = JSON.parse(fs.readFileSync(eventPath, 'utf8'));
const labels = (payload.pull_request?.labels || []).map((label) => label.name);
const matches = getMatchingSemverLabels(labels);

if (matches.length !== 1) {
  console.error(
    `Expected exactly one semver label on the pull request. Allowed labels: ${SEMVER_LABELS.join(
      ', ',
    )}. Current semver labels: ${matches.join(', ') || 'none'}.`,
  );
  process.exit(1);
}

console.log(`Validated semver label: ${matches[0]}`);
