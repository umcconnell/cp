build: clean lint static index.html
	NODE_ENV="production" node esbuild.mjs

build-dev: static index.html
	NODE_ENV="dev" node esbuild.mjs

dist:
	mkdir -p dist/

static: dist
	mkdir -p dist/static
	cp static/* dist/static/

index.html: dist FORCE
	cp index.html dist/

clean:
	rm -rf dist/

lint:
	npx prettier . -c

FORCE:


.PHONY: clean lint build build-dev
