const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
//function createDreamTeam(members) {
  if (Array.isArray(members)){
    return members.map(function(item){
      if (typeof item === 'string') return item[0];
    }).sort().join('');
  }
  return false;

};
//console.log( createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) );
