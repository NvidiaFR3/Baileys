const green = "\x1b[32m";
const cyan = "\x1b[36m";
const gray = "\x1b[90m";
const white = "\x1b[37m";
const magenta = "\x1b[35m";
const reset = "\x1b[0m";
const bold = "\x1b[1m";

const banner = `
${bold}${green}◈ FR3NEWERA BAILEYS SUPPORT${reset}
${gray}---------------------------------------${reset}
${white}● ${cyan}Author    ${gray}» ${white}Rendi Indra Pratama${reset}
${white}● ${cyan}Network   ${gray}» ${white}https://fr3newera.com${reset}
${white}● ${cyan}Telegram  ${gray}» ${magenta}@fr3newera${reset}
${white}● ${cyan}WhatsApp  ${gray}» ${green}+62 882-0087-71871${reset}
${white}● ${cyan}Status    ${gray}» ${green}System Modified & Encrypted${reset}
${gray}---------------------------------------${reset}
`;

console.log(banner);

import makeWASocket from "./Socket/index.js";
export * from "./Defaults/index.js";
export * from "./WABinary/index.js";
export * from "../WAProto/index.js";
export * from "./WAUSync/index.js";
export * from "./Store/index.js";
export * from "./Utils/index.js";
export * from "./Types/index.js";
export * from "./WAM/index.js";
export { makeWASocket };
export default makeWASocket;