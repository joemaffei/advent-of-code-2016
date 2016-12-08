// WIP: close, but it still captures every ABBA but the last one in brackets
var regex = /([a-z])([a-z])\2\1(?=\[)|([a-z])([a-z])\4\3(?!\])/g

// abba[mnop]qrst[boob]poop   //passes
// abcd[bddb]xyyx             //passes
// aaaa[qwer]tyui             //passes
// ioxxoj[asdfgh]zxcvbn       //passes

// sdfhgkizzi[peepasddfpoop]noonotto[naanboobgoog]
// fails: peep, naan and boob are captured.
