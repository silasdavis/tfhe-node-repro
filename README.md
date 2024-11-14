# Minimal repro of `TfheServerKey.new` hanging

It looks like `TfheServerKey.new` is hanging indefinitely on 0.9.1 but not on 0.10.0.

In this repro I am generating a key, whereas in our case we are using a key we generated over on the Rust side, but that tests exhibits a successful decryption so we can assume the key is not at fault.

## Prerequisites

- Node
- pnpm (npm will work too)

## Usage

```shell
pnpm install
pnpm test
# Make coffee...
<Ctrl-C>
```

Now update `node-tfhe` to `0.10.0` and rerun the above, it should print 'Got server key'


