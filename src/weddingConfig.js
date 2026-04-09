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
      icon: "🏠",
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d408.6717062161129!2d79.53898985629326!3d22.07725790821654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1775728303491!5m2!1sen!2sin",
      navigateLink: "https://www.google.com/maps/dir/?api=1&destination=Dwarka+Nagar+Seoni"
    },
    {
      title: "Haldi & Sangeet Ceremony",
      date: "26 April 2026 (Sunday)",
      time: "Evening onwards",
      location: "Ashirwad Palace, Seoni",
      address: "Behind Honda Agency, Jyarat Naka, Seoni",
      icon: "💃",
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d648.6150390715444!2d79.5473988377295!3d22.101387057187605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2aaf104107a427%3A0xcd0c6d20857f0b71!2sAashirwad%20palace!5e1!3m2!1sen!2sin!4v1775728251225!5m2!1sen!2sin",
      navigateLink: "https://www.google.com/maps/dir/?api=1&destination=Ashirwad+Palace+Seoni"
    },
    {
      title: "Wedding Ceremony",
      date: "27 April 2026 (Monday)",
      time: "7:00 PM onwards",
      note: "Baraat Arrival: 6:30 PM",
      location: "Milan Garden, Seoni",
      address: "Near Jyarat Naka, Jabalpur Road, Seoni",
      icon: "💍",
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1122.8044207548473!2d79.55007885554502!3d22.1008323551489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2aaf86ce5188c7%3A0x8b8cbb8253e5ec50!2sMilan%20Marriage%20Garden!5e1!3m2!1sen!2sin!4v1775728367105!5m2!1sen!2sin",
      navigateLink: "https://www.google.com/maps/dir/?api=1&destination=Milan+Garden+Seoni"
    }
  ],
  venue: {
    name: "Milan Garden",
    address: "Near Jyarat Naka, Jabalpur Road, Seoni, Madhya Pradesh",
    mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1122.8044207548473!2d79.55007885554502!3d22.1008323551489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2aaf86ce5188c7%3A0x8b8cbb8253e5ec50!2sMilan%20Marriage%20Garden!5e1!3m2!1sen!2sin!4v1775728367105!5m2!1sen!2sin",
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
