// The following function returns a license badge if chosen
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    case 'Apache':
      return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    case 'ISC':
      return `![License](https://img.shields.io/badge/License-ISC-blue.svg)`;
    default:
      console.log("You selected No license")
      return "";
  }
}


function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return "https://opensource.org/licenses/MIT";
    case 'Apache':
      return "https://opensource.org/licenses/Apache-2.0";
    case 'ISC':
      return `https://opensource.org/licenses/ISC`;
    default:
      console.log("You selected No license")
      return "";
  }
}
 
// Function is to create the structure of the markdown file once all questions have been answered.
function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents:


- [Installation](#installation)
- [Directions](#Directions)
- [Purpose](#Purpose)
- [Contributers](#Contributors)
- [License](#license)
- [Contact](#contactInfo)

## Installation
${data.installation}

## Directions
${data.directions}

## Purpose
${data.usage}

## Contributers
${data.credits}


## License
${renderLicenseLink(data.license)} 


## ContactInfo

Contact me at anytime at ${data.contactInfo} for any questions or other inquieries. Also, check out my github account at https://github.com/${data.userName}.

Copyright (c) 2023
 `
}

module.exports = generateMarkdown;
