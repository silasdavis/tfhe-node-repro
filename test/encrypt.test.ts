import {
  ShortintCompactPublicKeyEncryptionParameters,
  ShortintCompactPublicKeyEncryptionParametersName,
  ShortintParameters,
  ShortintParametersName,
  TfheClientKey,
  TfheConfigBuilder,
  TfheServerKey
} from "node-tfhe";
import {describe, it} from "vitest";

export const SERIALIZED_SIZE_LIMIT_CIPHERTEXT = BigInt(1024 * 1024 * 512);

describe("encrypt/decrypt", () => {
  it("Get server key", () => {
    let block_params = new ShortintParameters(ShortintParametersName.PARAM_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M64);
    let casting_params = new ShortintCompactPublicKeyEncryptionParameters(
      ShortintCompactPublicKeyEncryptionParametersName.SHORTINT_PARAM_PKE_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M64,
    );
    const config = TfheConfigBuilder.default()
      .use_custom_parameters(block_params)
      .use_dedicated_compact_public_key_parameters(casting_params)
      .build();
    const clientKeyLocal = TfheClientKey.generate(config);
    // Hangs forever on 0.9.1 (okay, 30 mins at least), works in a few seconds on 0.10.0
    const serverKey = TfheServerKey.new(clientKeyLocal);
    console.log('Got server key')
  });
});
