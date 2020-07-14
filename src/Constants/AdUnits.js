let adUnits = [
  'ca-app-pub-0714649342045057/8222174259',
  'ca-app-pub-0714649342045057/5615643477',
  'ca-app-pub-0714649342045057/1676398465',
  'ca-app-pub-0714649342045057/6338246941',
];
export function GenerateId() {
  try {
    let rN = Math.floor(Math.random() * adUnits.length);
    return adUnits[rN];
  } catch (error) {
    return adUnits[0];
  }
}
