function talk(){
var know = {
"Who are you?" : "My name is Nivera Bot",
"hello" : "Hello, How are you?",
"I am fine" : "Good to head that :)",
"How are you?" : "Good :), what about you?",
"Where can I hear songs?" : "Check our Nivera-fy option on the home page :)",
"what is Nivera-fy" : "You can select your genre and play the resp player",
"thank you" : "Anytime",
"ok" : "Thank You So Much ",
"Bye" : "Bye! Thanks for tuning in.."
};
var user = document.getElementById('userBox').value;
document.getElementById('chatLog').innerHTML = user + "<br>";
if (user in know) {
document.getElementById('chatLog').innerHTML = know[user] + "<br>";
}else{
document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
}
}
