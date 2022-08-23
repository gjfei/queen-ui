const { resolve } =require ('path');
const { execSync } =require( 'child_process');

const exampleDir = resolve(process.cwd(), 'packages/example');

execSync(
  `mklink /d ${resolve(exampleDir, './src/uni_modules/queen-ui')}  ${resolve(
    exampleDir,
    './node_modules/@queen-ui'
  )}`
);
