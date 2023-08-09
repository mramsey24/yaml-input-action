import * as core from '@actions/core';
import * as github from '@actions/github';
import * as fs from 'fs';
import * as yaml from 'js-yaml';

async function run() {
  try {
    core.info("Run function called")
    const yamlPath: string = core.getInput('yaml-file', { required: true });
    core.info("yamlPath=" + yamlPath)
    const yamlContent: any = yaml.load(fs.readFileSync(yamlPath, 'utf8'));

    for (const key in yamlContent) {
      if (Object.prototype.hasOwnProperty.call(yamlContent, key)) {
        const element = yamlContent[key];
        core.setOutput(key, element);
      }
    }

  } catch (error:unknown) {
    core.setFailed("Failed");
  }
}

run();
