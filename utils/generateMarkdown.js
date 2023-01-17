// The following function returns a license badge if chosen
var licenseBadge = function renderLicenseBadge(license) {
  switch (license) {
    case MIT:
      licenseBadge = `https://img.shields.io/badge/License-MIT-yellow.svg`;
    case Apache:
      licenseBadge = `https://img.shields.io/badge/License-Apache_2.0-blue.svg`;
    case ISC:
      licenseBadge = `https://img.shields.io/badge/License-ISC-blue.svg`;
    default:
      console.log("You selected No license")
      return "";
  }
}

// TODO: Create a function that returns the license link

var licenseLink = function renderLicenseLink(license) {
  switch (license) {
    case MIT:
      licenseLink = "https://opensource.org/licenses/MIT";
    case Apache:
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
    case ISC:
      licenseLink = `https://opensource.org/licenses/ISC`;
    default:
      console.log("You selected No license")
      return "";
  }
}

// A function to render all lciense information into the read me file.
function renderLicenseSection(license) {

 return `
 ${licenseBadge}
 ${licenseLink} License


 Copyright (c) 2023 ${data.credits}
 `
}
 
// Function is to create the structure of the markdown file once all questions have been answered.
function generateMarkdown(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents:

- [Installation](#installation)
- [Usage](#usage)
- [How-To-Use](#instructions)
- [Credits](#credits)
- [License](#license)

  ## Installation
  ${data.installation}

  ## How to use
  ${data.usage}

  ## Contributers
  ${data.credits}

  ## ${renderLicenseSection(data.license)}`


}

module.exports = generateMarkdown;
