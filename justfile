VERSION := `jq -r .version < package.json`

all:
  @echo "select target"

bump:
  npm version --no-git-tag-version patch

release: pack gh-release market-release

pack:
  rm -f *.vsix
  vsce pack

gh-release:
  echo "" | gh release create v{{VERSION}} evaics-{{VERSION}}.vsix -t v{{VERSION}}

market-release:
  vsce publish
