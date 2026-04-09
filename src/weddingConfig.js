const weddingConfig = {
  names: {
    groom: "Yashraj",
    bride: "Aditi",
    monogram: "Y & A"
  },
  date: "2026-04-27T19:00:00", // Full date for countdown
  displayDate: "27 April 2026",
  colors: {
    cream: '#FDFCF0',
    gold: '#C9A84C',
    maroon: '#800000',
    beige: '#F5F5DC',
    pink: '#FFD1DC'
  },
  hero: {
    title: "Yashraj ❤️ Aditi",
    subtitle: "We're Getting Married",
    buttonText: "View Invitation"
  },
  couple: {
    groom: {
      name: "Yashraj",
      parents: "Son of Mrs. Harsha Namdeo & Mr. Ganesh Namdeo",
      // Put your groom image in public/assets/images/groom.jpg
      image: "/assets/images/groom.jpg" 
    },
    bride: {
      name: "Aditi",
      parents: "Daughter of Mrs. Anjani Namdeo & Mr. Dilip Namdeo",
      // Put your bride image in public/assets/images/bride.jpg
      image: "/assets/images/bride.jpg"
    }
  },
  events: [
    {
      title: "Mandap Sthapana & Matrika Pujan",
      date: "25 April 2026 (Saturday)",
      time: "Morning",
      location: "Residence – Dwarka Nagar, Seoni",
      icon: "🏠"
    },
    {
      title: "Haldi & Sangeet Ceremony",
      date: "26 April 2026 (Sunday)",
      time: "Evening onwards",
      location: "Ashirwad Palace, Seoni",
      address: "Behind Honda Agency, Jyarat Naka, Seoni",
      icon: "💃"
    },
    {
      title: "Wedding Ceremony",
      date: "27 April 2026 (Monday)",
      time: "7:00 PM onwards",
      note: "Baraat Arrival: 6:30 PM",
      location: "Milan Garden, Seoni",
      address: "Near Jyarat Naka, Lakhnadon Road, Seoni",
      icon: "💍"
    }
  ],
  venue: {
    name: "Milan Garden",
    address: "Near Jyarat Naka, Lakhnadon Road, Seoni, Madhya Pradesh",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.657074364065!2d79.5447!3d22.0844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b7f7f7f7f7f7f%3A0x7f7f7f7f7f7f7f7f!2sMilan%20Garden!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
    navigateLink: "https://www.google.com/maps/dir/?api=1&destination=Milan+Garden+Seoni"
  },
  contact: {
    address: "Dwarka Nagar, Kidwai Ward, Near Filter, Gali No. 3, Seoni, Madhya Pradesh",
    phones: ["+91 9131123661", "+91 9179234196"]
  },
  audio: {
    // Put your music file in public/assets/music/bg-music.mp3
    url: '/assets/music/bg-music.mp3',
    volume: 0.5
  },
  images: {
    // Put your hero image in public/assets/images/hero.jpg
    hero: "/assets/images/hero.jpg",
    groom: "/assets/images/groom.jpg",
    bride: "/assets/images/bride.jpg",
    // Put your gallery images in public/assets/images/gallery1.jpg, gallery2.jpg, etc.
    gallery: [
      "/assets/images/gallery1.jpg",
      "/assets/images/gallery2.jpg",
      "/assets/images/gallery3.jpg",
      "/assets/images/gallery4.jpg",
      "/assets/images/gallery5.jpg",
      "/assets/images/gallery6.jpg"
    ]
  }
}

export default weddingConfig
