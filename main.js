$(function () {
    var $header = $("#header");
    var header = ['Welcome','Okaerinasai', 'Ohayō','Konnichiwa', ];
    var position = -1;
    
    !function loop() {
        position = (position + 1) % header.length;
        $header.html(header[position])
        .fadeIn(1000)
        .delay(1500)
        .fadeOut(1000, loop);
    }();

   
});
//Final JavaScript
const generateQuote = function() {
    const quotes = [
    {
        quote: "People’s lives don’t end when they die, it ends when they lose faith.",
        author: "– Itachi Uchiha "
    },
    {
        quote: "If you don’t take risks, you can’t create a future!",
        author: "– Monkey D. Luffy "
    },
    {
        quote: "Why should I apologize for being a monster? Has anyone ever apologized for turning me into one?",
        author: "– Juuzou Suzuya"
    },
    {
        quote: "’ll leave tomorrow’s problems to tomorrow’s me.",
        author: "– Saitama"
    },
    {
        quote: "If you really want to be strong… Stop caring about what your surrounding thinks of you!",
        author: "– Saitama"
    },
    {
        quote: "Sometimes I do feel like I’m a failure. Like there’s no hope for me. But even so, I’m not gonna give up. Ever!",
        author: "– Izuku Midoriya"
    },
    {
        quote: "Za WARUDO! Tomare toki wo",
        author: "– Dio"
    },
    {
        quote: "Whats 1000 - 7 ?",
        author: "Ken Kaneiki"
    },
    {
        quote: "DIO! Here take this 20 meter EMERALD SPLASH!!",
        author: "Kakyoin"
    },
    {
        quote: "If to be truthful is to be cruel, then lying must surely be an act of kindness. And so, kindness is a lie.",
        author: "― Hikigaya Hachiman"
    },
    {
        quote: "ohh... you're approaching me? Instead of running away you are coming straight to me?",
        author: "― Dio"
    },
    {
        quote: "yaare yaare daze",
        author: "― Jotaro joestar"
    },
    {
        quote: "yaamate kudasai",
        author: "― Nibutani"
    },
    {
        quote: "It will be fine. After all you're kinda weak",
        author: "― Gojo Satoru"
    },
    {
        quote: "Are all humans truly equal?",
        author: "― Kiyotaka Ayanokoji"
    },
    {
        quote: "It will be fine. After all you're kinda weak",
        author: "― Gojo Satoru"
    }
];

    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}
window.onload = function() {
    generateQuote();
    document.getElementById("generate").addEventListener('click', generateQuote);
}
