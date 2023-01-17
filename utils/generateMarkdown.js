// The following function returns a license badge if chosen
function renderLicenseBadge(data) {
  switch (license) {
    case MIT:
      var licenseBadge = `https://img.shields.io/badge/License-MIT-yellow.svg`;
    case Apache:
      var licenseBadge = `https://img.shields.io/badge/License-Apache_2.0-blue.svg`;
    case ISC:
      var licenseBadge = `https://img.shields.io/badge/License-ISC-blue.svg`;
    default:
      console.log("You selected No license")
      return "";
  }
  return licenseBadge
}

// TODO: Create a function that returns the license link

function renderLicenseLink(license) {
  switch (license) {
    case MIT:
      var licenseLink = "https://opensource.org/licenses/MIT";
    case Apache:
      var licenseLink = "https://opensource.org/licenses/Apache-2.0";
    case ISC:
      var licenseLink = `https://opensource.org/licenses/ISC`;
    default:
      console.log("You selected No license")
      return "";
  }
  return licenseLink
}

// A function to render all lciense information into the read me file.
function renderLicenseSection(license) {
 var licenseBadge = renderLicenseBadge(data);
 var licenseLink = renderLicenseLink(data);

 return `
 ${data.licenseBadge}
 ${data.licenseLink} License


 Copyright (c) 2023 ${data.credits}`


}
 
// Function is to create the structure of the markdown file once all questions have been answered.
function generateMarkdown(data) {
  return `
# 
${data.title}

## 
${data.description}

## Table of Contents:

- [Installation](#installation)
- [Usage](#usage)
- [How-To-Use](#instructions)
- [Credits](#credits)
- [License](#license)

  return ##
  ${data.installation}

  return ## 
  ${data.usage}

  return ## 
  ${data.credits}

  return ## 
  ${renderLicenseSection(data.license)}`
}

module.exports = generateMarkdown;
