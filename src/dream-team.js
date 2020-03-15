module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let dreamTeam = [];
  for (let i = 0; i < members.length; i++) {      
    if (typeof(members[i]) == 'string') {
    dreamTeam.push(members[i].trim().toUpperCase()[0]);
 }
}
  return dreamTeam.sort().join('');
};