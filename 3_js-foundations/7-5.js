/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "David",
    friends: 55,
    messages: ["I love it!", "Happy Birthday!", "That looks delicious!"],
    postMessage: function postMessage(message) {
        facebookProfile.messages.push(message);
    },
    deleteMessage: function deleteMessage(index) {
        facebookProfile.messages.splice(index, 1);
    },
    addFriend: function addFriend() {
        return facebookProfile.friends += 1;
    },
    removeFriend: function removeFriend() {
        return facebookProfile.friends -= 1;
    }
};