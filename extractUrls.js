const baseSha = process.argv[2];
const headSha = process.argv[3];

// extract repository url from diff
const { execSync } = require('child_process');
const fs = require('fs');

function extractUrls(text) {
  const urlRegex = /(https?:\/\/[^\s\)]+)/g;
  return text.match(urlRegex);
}

const command = `git diff ${baseSha} ${headSha}`;

const diff = execSync(command).toString();
const urls = extractUrls(diff);

if (urls) {
  console.log(urls.join('\n'));
} else {
  console.log('No URLs found.');
}

// load data from ost.ecosyste.ms

// produce comment with checks and crosses for each type of check