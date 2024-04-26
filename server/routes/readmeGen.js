import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![GitHub license](https://img.shields.io/badge/license-${license.replace(' ', '_')}-blue.svg)`;
    }
    return '';
}

function renderLicenseLink(license) {
    if (license !== 'None') {
        return `* [License](#license)`;
    }
    return '';
}

function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License
  
  This project is licensed under the ${license} license.`;
    }
    return '';
}

router.post('/readme', (req, res) => {
    const data = req.body;
    console.log(data);
    let string = `# ${data.title}
${renderLicenseBadge(data.license)}
    
## Description
    
${data.description}
    
## Table of Contents 
    
* [Deployed](#deployed)

* [Installation](#installation)
    
* [Usage](#usage)

${renderLicenseLink(data.license)}

* [Contributing](#contributing)
    
* [Tests](#tests)
    
* [Questions](#questions)

## Deployed

[${data.deployedLink}](${data.deployedLink})
    
## Installation
    
To install necessary dependencies, run the following command:
    
\`\`\`
${data.installation}
\`\`\`
    
## Usage
    
${data.usage}
    
${renderLicenseSection(data.license)}
      
## Contributing
    
${data.contributing}
    
## Tests
    
To run tests, run the following command:
    
\`\`\`
${data.tests}
\`\`\`
    
## Questions
    
If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).`


    const resolvedPath = path.resolve(data.readmeLink);
    fs.writeFileSync(resolvedPath, string);
    res.send('Readme Created');
});

export { router as ReadmeGen };