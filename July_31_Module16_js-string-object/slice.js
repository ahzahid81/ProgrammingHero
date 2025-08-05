const address = 'andorkilla';
const part = address.slice(2,5);
console.log(part);

const sentence = 'I am a good and hardworking person.';

console.log(sentence.split(" "))

const friendsStr = 'Rahim, kahim, dahim, lahim, fahim, sahim';
const freinds = friendsStr.split(',');
console.log(freinds);
const realFriend = [ 'Rahim', ' kahim', ' dahim', ' lahim', ' fahim', ' sahim' ];
console.log(realFriend.join())
console.log(realFriend.join('|'))