const movies = [
  { title: "Interstellar", rating: 8.6, img: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },

  { title: "The Dark Knight", rating: 9.0, img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },

  { title: "Avatar", rating: 7.8, img: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },

  { title: "Endgame", rating: 8.4, img: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg" },

  { title: "Infinity War", rating: 8.5, img: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg" },

  { title: "Joker", rating: 8.4, img: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },

  { title: "Dune", rating: 8.2, img: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" },

  { title: "Deadpool & Wolv", rating: 8.1, img: "https://image.tmdb.org/t/p/w500/f9ZAIUxTTk23vo1BC9Ur1Rx5c2E.jpg" },

  { title: "No Way Home", rating: 8.3, img: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" },

  { title: "Iron Man", rating: 7.9, img: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg" },

  { title: "Black Panther", rating: 7.3, img: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg" },

  { title: "Ragnarok", rating: 7.9, img: "https://image.tmdb.org/t/p/w500/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg" },

  { title: "The Matrix", rating: 8.7, img: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },

  { title: "Shutter Island", rating: 8.2, img: "https://image.tmdb.org/t/p/w500/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg" },

  { title: "Shawshank", rating: 9.3, img: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg" },

  { title: "Fight Club", rating: 8.8, img: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg" },

  { title: "Forrest Gump", rating: 8.8, img: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg" },

  { title: "The Godfather", rating: 9.2, img: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg" },

  { title: "Godfather II", rating: 9.0, img: "https://image.tmdb.org/t/p/w500/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg" },

  { title: "Gladiator", rating: 8.5, img: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" },

  { title: "Wolf Wall Street", rating: 8.2, img: "https://image.tmdb.org/t/p/w500/sOxr33wnRuKazR9ClHek73T8qnK.jpg" },

  { title: "The Avengers", rating: 8.0, img: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg" },

  { title: "Captain Marvel", rating: 6.8, img: "https://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg" },

  { title: "Frozen II", rating: 7.2, img: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg" },

  { title: "Inside Out", rating: 8.0, img: "https://image.tmdb.org/t/p/w500/lRHE0vzf3oYJrhbsHXjIkF4Tl5A.jpg" },

  { title: "Toy Story 4", rating: 7.5, img: "https://image.tmdb.org/t/p/w500/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg" },

  { title: "John Wick", rating: 7.4, img: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg" },

  { title: "John Wick 3", rating: 7.6, img: "https://image.tmdb.org/t/p/w500/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg" },

  { title: "Tenet", rating: 7.4, img: "https://image.tmdb.org/t/p/w500/k68nPLbIST6NP96JmTxmZijEvCA.jpg" },

  { title: "Mad Max Fury", rating: 8.1, img: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg" },

  { title: "The Conjuring", rating: 7.5, img: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg" },

  { title: "IT Chapter One", rating: 7.4, img: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg" },

  { title: "The Nun", rating: 5.9, img: "https://image.tmdb.org/t/p/w500/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg" },

  { title: "Logan", rating: 8.1, img: "https://image.tmdb.org/t/p/w500/fnbjcRDYn6YviCcePDnGdyAkYsB.jpg" },

  { title: "Spider-Verse", rating: 8.8, img: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg" },

  { title: "La La Land", rating: 8.0, img: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg" },

  { title: "Parasite", rating: 8.6, img: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" },

  { title: "Oppenheimer", rating: 8.6, img: "https://image.tmdb.org/t/p/w500/8bcoRX3hQRHufLPSDREdvr3YMXx.jpg" },

  { title: "Barbie", rating: 7.2, img: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg" },

  { title: "Dunkirk", rating: 7.9, img: "https://image.tmdb.org/t/p/w500/ebSnODDg9lbsMIaWg2uAbjn7TO5.jpg" }
];

export default movies;
