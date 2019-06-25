<p align="center">
  <img alt="etherniti.org" src="https://avatars3.githubusercontent.com/u/47393730?s=200&v=4" width="200px"></img>
  <h3 align="center"><b>Etherniti Web3 Crypto Library</b></h3>
  <p align="center">https://docs.etherniti.org/js</p>
</p>

<p align="center">
    <a href="https://travis-ci.org/zerjioang/etherniti-js">
      <img alt="Build Status" src="https://travis-ci.org/zerjioang/etherniti-js.svg?branch=master">
    </a>
    <a href="https://github.com/zerjioang/etherniti-js/blob/master/LICENSE">
        <img alt="Software License" src="http://img.shields.io/:license-gpl3-brightgreen.svg?style=flat-square">
    </a>
</p>

Etherniti Web3 Crypto Library compatible with Ethereum **Elliptic Curve Digital Signature Algorithm** (ECDSA) `secp256k1` for Web Browsers.

![Travis](https://travis-ci.org/etherniti/etherniti-js.svg?branch=master)

## Features
* Key-Pair generation.
* Signing validation of messages.
* Offline signing of messages using `secp256k1`.

### Mention to ECDSA

Elliptic Curve Cryptography (ECC) and ECDS`A` are a specific flavor of asymmetric cryptography. They are widely used in blockchain technology because of three reasons:

* Their computational performance is economical compared to a lot of other algorithms
* The keys that are generated are relatively short
* Bitcoin started it, so most new blockchain projects have copied it

`ECDSA` uses the algebraic structure of elliptic curves over finite fields. Without getting into the mathematics of it, they require a set of constants to define this curve. The constants used by most blockchains are set in the `secp256k1` standard.

## License

Copyright © 2019 Etherniti Project & Contributors

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 * Uses GPL license described below

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
