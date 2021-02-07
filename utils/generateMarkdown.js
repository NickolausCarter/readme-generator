// check license and render correct badge
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
  ## License
  ${license}
  `
};

function renderLicenseNotice(license) {
  if (!license) {
    return '';
  }

  return `
  &copy; ${new Date().getFullYear()}
  
  Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
  `
} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  const { license } = data;

  return `
  # ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseLink(license)}
  - [Contribute](#contribute)
  - [Test](#test)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(license)}
  ${renderLicenseBadge(license)}
  ${renderLicenseNotice(license)}

  ## Contribute
  ${data.contribute}

  ## Test
  ${data.test}

  ## Questions
  GitHub: <https://github.com/${data.username}><br>
  Email: <${data.email}>
  `
}

module.exports = generateMarkdown;
