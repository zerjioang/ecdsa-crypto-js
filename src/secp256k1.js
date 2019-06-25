const elliptic = require('elliptic');
const sha3 = require('js-sha3');
/* eslint new-cap: ["error", { "newIsCap": false }] */
const ec = new elliptic.ec('secp256k1');

export default class secp256k1 {
  constructor() {
    this._name = 'secp256k1';
  }
  get name() {
    return this._name;
  }
  example() {
    // let keyPair = ec.genKeyPair();
    let keyPair = ec.keyFromPrivate('97ddae0f3a25b92268175400149d65d6887b9cefaf28ea2c078e05cdc15a3c0a');
    let privKey = keyPair.getPrivate('hex');
    let pubKey = keyPair.getPublic();

    console.log(`Private key: ${privKey}`);
    console.log('Public key :', pubKey.encode('hex').substr(2));
    console.log('Public key (compressed):', pubKey.encodeCompressed('hex'));

    console.log();
    let msg = 'Message for signing';
    let msgHash = sha3.keccak256(msg);
    let signature = ec.sign(msgHash, privKey, 'hex', {canonical: true});

    console.log(`Msg: ${msg}`);
    console.log(`Msg hash: ${msgHash}`);
    console.log('Signature:', signature);

    console.log();
    let hexToDecimal = (x) => ec.keyFromPrivate(x, 'hex').getPrivate().toString(10);
    let pubKeyRecovered = ec.recoverPubKey(
      hexToDecimal(msgHash), signature, signature.recoveryParam, 'hex');

    console.log('Recovered pubKey:', pubKeyRecovered.encodeCompressed('hex'));
    let validSig = ec.verify(msgHash, signature, pubKeyRecovered);

    console.log('Signature valid?', validSig);
    return validSig;
  }
}
