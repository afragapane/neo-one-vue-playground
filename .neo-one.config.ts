import { defaultNetworks } from '@neo-one/cli';

export default {
  contracts: {
    // NEO•ONE will look for smart contracts in this directory.
    path: 'neo-one/contracts',
  },
  artifacts: {
    // NEO•ONE will store build and deployment artifacts that should be checked in to vcs in this directory.
    path: 'neo-one/artifacts',
  },
  migration: {
    // NEO•ONE will load the deployment migration from this path.
    path: 'neo-one/migration.js',
  },
  codegen: {
    // NEO•ONE will write source artifacts to this directory. This directory should be committed.
    path: 'src/neo-one',
    // NEO•ONE will generate code in the language specified here. Can be one of 'javascript' or 'typescript'.
    language: 'typescript',
    framework: 'vue',
    browserify: false,
    // Set this to true if you're running in codesandbox to workaround certain limitations of codesandbox.
    codesandbox: false,
  },
  network: {
    path: '.neo-one/network',
    // NEO•ONE will start the network on this port.
    port: 9040,
  },
  // Refer to the documentation at https://neo-one.io/docs/configuration for more information.
  networks: defaultNetworks,
  neotracker: {
    path: '.neo-one/neotracker',
    // NEO•ONE will start an instance of NEO tracker using this port.
    port: 9041,
  },
};
