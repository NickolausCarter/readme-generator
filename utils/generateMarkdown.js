// check license and render correct badge
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  // added a few open source license options since badge color and URLs are not uniform
  if (license === 'ISC') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }

  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }

  if (license === 'PDDL' || 'ODbL') {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-brightgreen.svg)](https://opendatacommons.org/licenses/${license}/)`
  }
};

function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `
  - [License](#license)
  `
};

// check license and create license section
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
  ## License
  ${license}
  `
};

// create standard license notice when a license is present
function renderLicenseNotice(license) {
  if (!license) {
    return '';
  }

  return `
  &copy; ${new Date().getFullYear()}
  
  Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  `
};

// checks for description and adds link to table of contents
function renderDescriptionLink(description) {
  if (!description) {
    return '';
  }

  return `
  - [Description](#description)
  `
};

// adds description section when user provides a description
function renderDescriptionSection(description) {
  if (!description) {
    return '';
  }
  return `
  ## Description
  ${description}
  `
};

// checks for installation instructions and adds link to table of contents
function renderInstallationLink(installation) {
  if (!installation) {
    return '';
  }

  return `
  - [Installation](#installation)
  `
};

// adds installation section when user provides instructions
function renderInstallationSection(installation) {
  if (!installation) {
    return '';
  }
  return `
  ## Installation
  ${installation}
  `
};

// check for usage info and adds link to table of contents
function renderUsageLink(usage) {
  if (!usage) {
    return '';
  }

  return `
  - [Usage](#usage)
  `
};

// adds usage section when user provides info
function renderUsageSection(usage) {
  if (!usage) {
    return '';
  }
  return `
  ## Usage
  ${usage}
  `
};

// checks for contributing info and adds link to table of contents
function renderContributeLink(contribute) {
  if (!contribute) {
    return '';
  }

  return `
  - [Contribute](#contribute)
  `
};

// adds contribute section when user provides info
function renderContributeSection(contribute) {
  if (!contribute) {
    return '';
  }
  return `
  ## Contribute
  ${contribute}
  `
};

// checks for test instructions and adds link to table of contents
function renderTestLink(test) {
  if (!test) {
    return '';
  }

  return `
  - [Test](#test)
  `
};

// adds test section when user provides info
function renderTestSection(test) {
  if (!test) {
    return '';
  }
  return `
  ## Test
  ${test}
  `
};

// generate markdown data for writeToFile() function in index.js
function generateMarkdown(data) {

  const { description, installation, usage, license, contribute, test } = data;

  return `
  # ${data.title}

  ## Table of Contents
  ${renderDescriptionLink(description)}
  ${renderInstallationLink(installation)}
  ${renderUsageLink(usage)}
  ${renderLicenseLink(license)}
  ${renderContributeLink(contribute)}
  ${renderTestLink(test)}
  - [Questions](#questions)

  ${renderDescriptionSection(description)}

  ${renderInstallationSection(installation)}

  ${renderUsageSection(usage)}

  ${renderLicenseSection(license)}
  ${renderLicenseBadge(license)}
  ${renderLicenseNotice(license)}

  ${renderContributeSection(contribute)}

  ${renderTestSection(test)}

  ## Questions
  GitHub: <https://github.com/${data.username}><br>
  Email: <${data.email}>
  `
}

module.exports = generateMarkdown;
