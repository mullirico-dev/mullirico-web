import fs from 'node:fs';
import { getMatchingSemverLabels, labelToBump } from './semver-labels.mjs';

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
    'Unable to determine a unique semver label for this pull request.',
  );
  process.exit(1);
}

const bump = labelToBump(matches[0]);
process.stdout.write(`bump=${bump}\n`);
