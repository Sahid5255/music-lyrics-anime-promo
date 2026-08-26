// ============================================================
// PORTFOLIO DATA
// ============================================================

// ============================================================
// COVER ART IMPORTS
// ============================================================

import cover1 from "../assets/cover1.jpeg";
import cover2 from "../assets/cover2.jpeg";
import cover3 from "../assets/cover3.jpeg";
import cover4 from "../assets/cover4.jpeg";
import cover5 from "../assets/cover5.jpeg";
import cover6 from "../assets/cover6.jpeg";
import cover7 from "../assets/cover7.jpeg";
import cover8 from "../assets/cover8.jpeg";
import cover9 from "../assets/cover9.jpeg";
import cover10 from "../assets/cover10.png";
import cover11 from "../assets/cover11.png";
import cover12 from "../assets/cover12.webp";
import cover13 from "../assets/cover13.webp";
import cover14 from "../assets/cover14.jpeg";
import cover15 from "../assets/cover15.png";
import cover16 from "../assets/cover16.jpeg";
import cover17 from "../assets/cover17.jpeg";
import cover18 from "../assets/cover18.jpeg";
import cover20 from "../assets/cover20.jpeg";
import cover21 from "../assets/cover21.jpeg";
import cover22 from "../assets/cover22.jpeg";
import cover23 from "../assets/cover23.jpeg";
import cover25 from "../assets/cover25.jpeg";


// ============================================================
// ANIMATION IMPORTS
// ============================================================

import thumbnail from "../assets/thumbail1.png";
import thumbnai2 from "../assets/thumbail2.png";
import thumbnai3 from "../assets/thumbail3.png";
import thumbnail1 from "../assets/thumbail.png";

import Animation1 from "../assets/Animation1.mp4";
import Animation2 from "../assets/Animation2.mp4";
import Animation3 from "../assets/Animation3.mp4";
import Animation4 from "../assets/Animation4.mp4";
import Animation5 from "../assets/Animation5.mp4";


// ============================================================
// COVER ART
// ADD YOUR COVER ART HERE
// ============================================================

export const coverArts = [
  {
    id: 1,
    title: "Midnight Energy",
    artist: "Artist One",
    category: "Cover Art",
    image: cover1,
  },

  {
    id: 2,
    title: "Neon Dreams",
    artist: "Artist Two",
    category: "Cover Art",
    image: cover11,
  },

  {
    id: 3,
    title: "After Dark",
    artist: "Artist Three",
    category: "Cover Art",
    image: cover2,
  },

  {
    id: 4,
    title: "City Lights",
    artist: "Artist Four",
    category: "Cover Art",
    image: cover3,
  },

  {
    id: 5,
    title: "Lost Frequencies",
    artist: "Artist Five",
    category: "Cover Art",
    image: cover4,
  },

  {
    id: 6,
    title: "Electric Soul",
    artist: "Artist Six",
    category: "Cover Art",
    image: cover5,
  },

  {
    id: 7,
    title: "Golden Hour",
    artist: "Artist Seven",
    category: "Cover Art",
    image: cover6,
  },

  {
    id: 8,
    title: "No Limits",
    artist: "Artist Eight",
    category: "Cover Art",
    image: cover7,
  },

  {
    id: 9,
    title: "Frequency",
    artist: "Artist Nine",
    category: "Cover Art",
    image: cover8,
  },

  {
    id: 10,
    title: "Rebel Heart",
    artist: "Artist Ten",
    category: "Cover Art",
    image: cover9,
  },

  {
    id: 11,
    artist: "Artist Eleven",
    category: "Cover Art",
    image: cover10,
  },

  {
    id: 12,
    category: "Cover Art",
    image: cover11,
  },

  {
    id: 13,
    category: "Cover Art",
    image: cover12,
  },

  {
    id: 14,
    category: "Cover Art",
    image: cover13,
  },

  {
    id: 15,
    category: "Cover Art",
    image: cover14,
  },

  {
    id: 16,
    category: "Cover Art",
    image: cover15,
  },

  {
    id: 17,
    category: "Cover Art",
    image: cover16,
  },

  {
    id: 18,
    category: "Cover Art",
    image: cover17,
  },

  {
    id: 19,
    category: "Cover Art",
    image: cover18,
  },
   {
    id: 20,
    category: "Cover Art",
    image: cover20,
  },
   {
    id: 21,
    category: "Cover Art",
    image: cover21,
  },
   {
    id: 22,
    category: "Cover Art",
    image: cover22,
  },
   {
    id: 23,
    category: "Cover Art",
    image: cover23,
  },
   {
    id: 25,
    category: "Cover Art",
    image: cover25,
  },
];


// ============================================================
// ANIMATION PROJECTS
// ADD YOUR VIDEOS HERE
// ============================================================

export const animations = [
  {
    id: 1,
    category: "Music Animation",

    description:
      "Creative animated visuals designed to give the music a stronger visual identity.",

    type: "mp4",
    video: Animation1,

    // Thumbnail shown before the video starts
    thumbnail: thumbnail,
  },

  {
    id: 2,

    description:
      "Creative animated visuals designed to give the music a stronger visual identity.",

    type: "mp4",
    video: Animation2,

    // Thumbnail shown before the video starts
    thumbnail: thumbnail1,
  },

  {
    id: 3,
    category: "Music Animation",

    description:
      "Creative animated visuals designed to give the music a stronger visual identity.",

    type: "mp4",
    video: Animation3,

    // Thumbnail shown before the video starts
    thumbnail: thumbnai3,
  },

  {
    id: 4,
    category: "Music Animation",

    description:
      "Creative animated visuals designed to give the music a stronger visual identity.",

    type: "mp4",
    video: Animation4,

    // Thumbnail shown before the video starts
    thumbnail: thumbnail1,
  },

  {
    id: 5,

    description:
      "Creative animated visuals designed to give the music a stronger visual identity.",

    type: "mp4",
    video: Animation5,

    // Add a fifth thumbnail when you have one
    thumbnail: thumbnai2,
  },
];


// ============================================================
// LYRICS VIDEOS
// ADD YOUR LYRICS VIDEOS HERE
// ============================================================

export const lyricsVideos = Array.from(
  { length: 10 },
  (_, index) => ({
    id: index + 1,

    title: `Lyrics Video ${index + 1}`,

    artist: "Your Artist",

    category: "Lyrics Video",

    description:
      "A cinematic lyrics video designed around the mood, lyrics and identity of the song.",

    thumbnail: `https://placehold.co/1280x720/172033/ffffff?text=LYRICS+VIDEO+${index + 1}`,

    type: "mp4",

    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  })
);


// ============================================================
// MUSIC PROMOTION
// SALES-FOCUSED PROMOTION CAMPAIGNS
// ============================================================

export const promotionProjects = [
  {
    id: 1,

    title: "Your Music Deserves To Be Heard",

    artist: "Music Promotion",

    category: "Music Promotion",

    image:
      "https://placehold.co/1200x1000/111827/ffffff?text=YOUR+MUSIC+DESERVES+TO+BE+HEARD",

    description:
      "A strategic promotional campaign built to put your music in front of more potential listeners and create attention around your release.",

    results:
      "Build awareness, increase audience reach and create stronger momentum around your release.",

  },

  {
    id: 2,

    title: "Turn Listeners Into Fans",

    artist: "Music Promotion",

    category: "Music Promotion",

    image:
      "https://placehold.co/1200x1000/111827/ffffff?text=TURN+LISTENERS+INTO+FANS",

    description:
      "Your goal is bigger than getting one stream. This campaign focuses on turning attention into genuine listeners and long-term fans.",

    results:
      "More meaningful engagement, stronger artist awareness and a growing audience.",

  },

  {
    id: 3,

    title: "Get Your Next Release Noticed",

    artist: "Release Promotion",

    category: "Music Promotion",

    image:
      "https://placehold.co/1200x1000/111827/ffffff?text=GET+YOUR+NEXT+RELEASE+NOTICED",

    description:
      "Give your next single, EP or album the attention it deserves with a focused promotional campaign designed around your release.",

    results:
      "Create buzz before, during and after your release.",

  },

  {
    id: 4,

    title: "Stop Posting. Start Promoting.",

    artist: "Music Promotion",

    category: "Music Promotion",

    image:
      "https://placehold.co/1200x1000/111827/ffffff?text=STOP+POSTING.+START+PROMOTING.",

    description:
      "Posting your music is only the beginning. A proper promotional strategy helps your release reach people beyond your existing followers.",

    results:
      "Turn ordinary posts into purposeful release promotion.",

  },

  {
    id: 5,

    title: "More Reach. More Streams. More Fans.",

    artist: "Music Promotion",

    category: "Music Promotion",

    image:
      "https://placehold.co/1200x1000/111827/ffffff?text=MORE+REACH.+MORE+STREAMS.+MORE+FANS.",

    description:
      "A campaign designed to increase visibility around your music and help you connect with more potential listeners.",

    results:
      "Increase visibility, engagement and opportunities to grow your audience.",

  },

  {
    id: 6,

    title: "Make Your Release Impossible To Ignore",

    artist: "Release Campaign",

    category: "Music Promotion",

    image:
      "https://placehold.co/1200x1000/111827/ffffff?text=MAKE+YOUR+RELEASE+IMPOSSIBLE+TO+IGNORE",

    description:
      "Build attention around your release with creative promotional content that gives your music a stronger presence online.",

    results:
      "Create anticipation and make your release stand out in a crowded feed.",

  },

  {
    id: 7,

    title: "Your Next Hit Needs A Campaign",

    artist: "Music Promotion",

    category: "Music Promotion",

    image:
      "https://placehold.co/1200x1000/111827/ffffff?text=YOUR+NEXT+HIT+NEEDS+A+CAMPAIGN",

    description:
      "Great music deserves more than a simple upload. Build a campaign around your song and give people a reason to stop, listen and share.",

    results:
      "Create stronger release momentum and audience attention.",

  },

  {
    id: 8,

    title: "Build Buzz Before The Drop",

    artist: "Pre-Release Campaign",

    category: "Music Promotion",

    image:
      "https://placehold.co/1200x1000/111827/ffffff?text=BUILD+BUZZ+BEFORE+THE+DROP",

    description:
      "Start promoting before release day so your audience already knows your song is coming.",

    results:
      "Build anticipation and give your release a stronger launch.",

  },

  {
    id: 9,

    title: "Turn Your Release Into A Movement",

    artist: "Music Promotion",

    category: "Music Promotion",

    image:
      "https://placehold.co/1200x1000/111827/ffffff?text=TURN+YOUR+RELEASE+INTO+A+MOVEMENT",

    description:
      "Create a promotional identity around your release that gives fans something to connect with and remember.",

    results:
      "Build stronger audience connection and release awareness.",

  },

  {
    id: 10,

    title: "Get Discovered. Get Heard. Grow.",

    artist: "Artist Growth Campaign",

    category: "Music Promotion",

    image:
      "https://placehold.co/1200x1000/111827/ffffff?text=GET+DISCOVERED.+GET+HEARD.+GROW.",

    description:
      "A focused campaign designed to help independent artists increase visibility and reach new potential listeners.",

    results:
      "Expand your reach and put your music in front of fresh audiences.",

  },

  {
    id: 11,

    title: "Don't Just Drop It. Promote It.",

    artist: "Music Promotion",

    category: "Music Promotion",

    image:
      "https://placehold.co/1200x1000/111827/ffffff?text=DONT+JUST+DROP+IT.+PROMOTE+IT.",

    description:
      "Your release deserves a promotional strategy. Give your music the push it needs instead of relying only on organic posts.",

    results:
      "Create more attention around your release and reach beyond your current audience.",

  },

  {
    id: 12,

    title: "Put Your Music In Front Of The Right Audience",

    artist: "Targeted Music Promotion",

    category: "Music Promotion",

    image:
      "https://placehold.co/1200x1000/111827/ffffff?text=PUT+YOUR+MUSIC+IN+FRONT+OF+THE+RIGHT+AUDIENCE",

    description:
      "Reach potential listeners who are more likely to connect with your sound, style and artist brand.",

    results:
      "Focus your promotional efforts on meaningful audience growth.",

  },

  {
    id: 13,

    title: "Ready To Make Noise?",

    artist: "Music Promotion",

    category: "Music Promotion",

    image:
      "https://placehold.co/1200x1000/111827/ffffff?text=READY+TO+MAKE+NOISE%3F",

    description:
      "Take your next release seriously with a creative promotional campaign designed to create attention, engagement and momentum.",

    results:
      "Turn your next release into an opportunity to grow your artist brand.",

  },
];