# cp

A no-datastore, client-side pastebin using LZMA compression.

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Initial setup](#initial-setup)
- [Contributing](#contributing)
- [Versioning](#versioning)
- [Authors](#authors)
- [License](#license)
- [See also](#see-also)
- [Acknowledgments](#acknowledgments)

## About

cp is a web editor based on CodeMirror that allows sharing text and code
documents. Sharing a document works by compressing it using
[LZMA](https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Markov_chain_algorithm)
and encoding it in base 64 in the link. No data is saved server-side, as
the entire document is contained in the link.

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

### Prerequisites

You will need node with npm installed on your machine. You can install it
from the official website https://nodejs.org.

### Initial setup

Clone the git repository

```bash
git clone https://github.com/umcconnell/cp.git
cd cp/
```

Install dependencies:

```bash
npm install
```

Build the project:

```bash
npm run bundle
```

Run a local webserver, for example using Python3:

```bash
python3 -m http.server -d dist/
```

Happy coding!

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) and
[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details on our code of conduct, and
the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available,
see the [tags on this repository](https://github.com/umcconnell/cp/tags).

## Authors

Ulysse McConnell - [umcconnell](https://github.com/umcconnell/)

See also the list of
[contributors](https://github.com/umcconnell/cp/contributors)
who participated in this project.

## License

This project is licensed under the MIT License - see the
[LICENSE.md](LICENSE.md) file for details.

## See also

Check out the great [paste](https://github.com/topaz/paste) and the fork
[nopaste](https://github.com/bokub/nopaste) that inspired this project.

## Acknowledgments

- [codemirror](https://codemirror.net/) - web editor component
  ([MIT LICENSE](https://github.com/codemirror/dev/blob/main/LICENSE))
- [esbuild](https://esbuild.github.io/) - ESM bundler
  ([MIT LICENSE](https://github.com/evanw/esbuild/blob/main/LICENSE.md))
- [LZMA-JS](https://github.com/LZMA-JS/LZMA-JS) JS port of the original 7-Zip
  LZMA implementation
  ([MIT LICENSE](https://github.com/LZMA-JS/LZMA-JS/blob/master/LICENSE))
