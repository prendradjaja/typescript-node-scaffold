POC of esbuild

Some things I would want to look into more:

- For a command-line program, I shouldn't need to bundle. Without `--bundle`, esbuild only compiles the entry point file (not other imported files). Probably changeable with configuration (at least, I think I can specify multiple input files). Do I want to use that approach?
- esbuild documentation mentions at least a couple config options that should be enabled: isolatedModules, esModuleInterop -- https://esbuild.github.io/content-types/#typescript-caveats
