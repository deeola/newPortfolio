import audiophile from "../../assets/audiophile.png";
import archstudio from "../../assets/archstudio.png";
import sunnyside from "../../assets/sunnyside.png";
import heritage from "../../assets/heritage.png";

const AllProjects = [
  {
    key: 1,
    name: "Audiophile",
    desc: {
      en: "Audiophile is an e-commerce website. It is a frontend mentor guru challenge. Users are able to add/remove items from cart, edit product quantities in cart, receive form validations if fields are missed or incorrect during checkout and receive an order confirmation modal after checking out with an order summary.",
      de: "Audiophile ist eine E-Commerce-Website. Es ist eine Herausforderung für den Frontend-Mentor Guru. Benutzer können Artikel zum Warenkorb hinzufügen/entfernen, Produktmengen im Warenkorb bearbeiten, Formularvalidierungen erhalten, wenn Felder während der Kaufabwicklung fehlen oder falsch sind, und nach der Kaufabwicklung ein Bestellbestätigungsmodal mit einer Bestellzusammenfassung erhalten.",
    },

    links: [
      {
        name: "STORYBOOK",
        href: "#",
      },
      {
        name: "VIEW REPO",
        href: "#",
      },
      {
        name: "LIVE SITE",
        href: "#",
      },
    ],
    img: audiophile,
    tech: ["storybook", "react", "javascript", "git", "R. Hooks", 'Jest'],
  },
  {
    key: 2,
    name: "Sunnyside",
    desc: {
      en: "This web application looks like your basic html,css and Javascript website but it is more than that. It is a Progressive Web Application(PWA) where users have the option to Deustch and English language.Users are able to view and use this website even without internet connection. They can also download this app and add to their android home screen on mobile and desktop.",
      de: "Diese Webanwendung sieht aus wie eine einfache html-, css- und Javascript-Website, aber sie ist mehr als das. Es handelt sich um eine progressive Webanwendung (PWA), bei der die Benutzer die Möglichkeit haben, die Website in englischer und niederländischer Sprache anzuzeigen und zu nutzen, auch ohne Internetverbindung. Sie können auch diese App herunterladen und zu ihrem Android-Startbildschirm auf dem Handy und Desktop hinzufügen.",
    },
    links: [
      {
        name: "STORYBOOK",
        href: "#",
      },
      {
        name: "VIEW REPO",
        href: "#",
      },
      {
        name: "LIVE SITE",
        href: "#",
      },
    ],
    img: sunnyside,
    tech: ["HTML", "CSS", "JAVASCRIPT", "GSAP", "PWA"],
  },
  {
    key: 3,
    name: "Archstudio",
    desc:{
      en: "Archstudio is a multi-page website I created. Users are able to view optimal layout for each page depending on their device's screen sizes and also view actual locations on the contact page map.",
      de: "Archstudio ist eine mehrseitige Website, die ich erstellt habe. Die Nutzer können das optimale Layout für jede Seite in Abhängigkeit von der Bildschirmgröße ihres Geräts anzeigen und auch die aktuellen Standorte auf der Karte der Kontaktseite sehen.",
    },
    links: [
      {
        name: "STORYBOOK",
        href: "#",
      },
      {
        name: "VIEW REPO",
        href: "#",
      },
      {
        name: "LIVE SITE",
        href: "#",
      },
    ],
    img: archstudio,
    tech: ["storybook", "react", "html", "css", "pwa"],
  },
  {
    key: 4,
    name: "Heritage-X",
    desc: {
      en : "This is a cultural heritage website I created to help people learn more about their UNESCO heritage sites around the world. Users can save some of these sites to their visit list or bucketlist.",
      de : "Dies ist eine Website zum kulturellen Erbe, die ich erstellt habe, um Menschen zu helfen, mehr über ihre UNESCO-Stätten auf der ganzen Welt zu erfahren. Die Nutzer können einige dieser Stätten auf ihrer Besuchsliste oder Bucketlist speichern."
    },
    links: [
      {
        name: "STORYBOOK",
        href: "#",
      },
      {
        name: "VIEW REPO",
        href: "#",
      },
      {
        name: "LIVE SITE",
        href: "#",
      },
    ],
    img: heritage,
    tech: ["storybook", "react", "html", "css", "pwa"],
  },
];

export default AllProjects;
