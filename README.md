# Clone

Simply `git clone` or:

```
git clone https://github.com/prendradjaja/typescript-node-starter YOUR_PROJECT_NAME &&
cat << EOF > YOUR_PROJECT_NAME/commit-message.tmp
Initial commit: Clone typescript-node-starter

https://github.com/prendradjaja/typescript-node-starter
@ $(git --git-dir YOUR_PROJECT_NAME/.git rev-parse HEAD)
EOF
rm -rf YOUR_PROJECT_NAME/.git &&  # rm before cd because closer-to-fully-qualified path is less likely to cause accidents
cd YOUR_PROJECT_NAME &&
git init &&
git add . &&
git rm --cached commit-message.tmp &&
git commit -F commit-message.tmp &&
rm commit-message.tmp &&
echo Success!
```

# Install

```
npm install
npm run prepare-husky  # Set up pre-commit hook for Prettier. OK to skip this if you don't want Prettier.
```
