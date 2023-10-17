import { defineConfig } from "cypress";
import codeCoverageTask from "@cypress/code-coverage/task";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      codeCoverageTask(on, config);
      return config
    },
    baseUrl: "http://localhost:5173/solo-scribe/",
  },
});
