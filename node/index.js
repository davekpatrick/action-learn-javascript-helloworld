// BOF
const core = require('@actions/core');
//
try {
  // Remember that inputs are defined in action metadata file
  const greetingType = core.getInput('greetingType');
  const message = `${greetingType}, World!`
  //
  console.log(`${message}`);
  // Rember the output is defined in action metadata file
  core.setOutput("greetingMessage", `Super cool, ${message} from node.js land`);
} catch (error) {
  // Should any error occur, the action will fail and the workflow will stop
  // Using the actions toolkit (core) pacakge to log a message and set exit code
  core.setFailed(error.message);
}
// EOF