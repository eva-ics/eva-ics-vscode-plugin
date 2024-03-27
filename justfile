VERSION := `jq -r .version < package.json`

all:
  @echo "select target"

pack:
  rm -f *.vsix
  vsce pack

gh-release:
  echo "" | gh release create v{{VERSION}} evaics-{{VERSION}}.vsix -t v{{VERSION}}
