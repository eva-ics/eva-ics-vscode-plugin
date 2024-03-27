VERSION := `jq -r .version < package.json`

all:
  @echo "select target"

pack:
  rm -f *.vsix
  vsce pack

gh-release:
  gh release create $(VERSION) evaics-$(VERSION).vsix -t $(VERSION)
