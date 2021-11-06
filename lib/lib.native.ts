/*
 * Copyright 2021 Inrupt Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
 * PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import "text-encoding-polyfill";
import "localstorage-polyfill";
import "react-native-url-polyfill/auto";
import "isomorphic-webcrypto";
import "react-native-get-random-values";
import "./util/subtleCryptoPolyfill";

console.log("NATIVE IMPORT");

// import "node-libs-react-native/globals";
// import { polyfillGlobal } from "react-native/Libraries/Utilities/PolyfillFunctions";

// polyfillGlobal("URLSearchParams", () => require("whatwg-url").URLSearchParams);

console.log("After polyfill");
console.log(crypto);

// Typsescript doesn't play well with react-native's import scheme
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export { Session, ISessionOptions } from "./Session";

export { getClientAuthenticationWithDependencies } from "./dependencies";

export * from "./defaultSession";

// Re-export of types defined in the core module and produced/consumed by our API

export {
  ILoginInputOptions,
  ISessionInfo,
  IStorage,
  NotImplementedError,
  ConfigurationError,
  InMemoryStorage,
} from "@inrupt/solid-client-authn-core";