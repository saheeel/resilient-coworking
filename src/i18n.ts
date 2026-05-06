import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            open_space: "Open Space",
            private_offices: "Private Offices",
            meeting_rooms: "Meeting Rooms",
            location: "Location",
            about_us: "About Us",
            book_tour: "Book a Tour"
          },
          footer: {
            copyright: "© 2024 Resilient Coworking. All rights reserved.",
            language: "Language"
          },
          home: {
            hero_title: "The Premier Boutique Coworking Space in Zurich.",
            hero_subtitle: "3'000m² of space, 250 workstations, 10 meeting rooms and 3 event spaces for up to 250 guests. Isn't that far too big for a personal, individual boutique concept? Welcome to Resilient Coworking.",
            explore_btn: "Explore Spaces",
            stats: {
              area: "Total Area",
              workstations: "Workstations",
              rooms: "Meeting Rooms",
              event_capacity: "Event Capacity"
            },
            story: {
              title: "7 Floors. 3 Buildings. 1 Resilient Family.",
              subtitle: "Our Story",
              p1: "What started as a single vision has grown into 7 unique coworking boutiques spread across 3 adjacent buildings. We're more than just space; we're a family-run team of 20 dedicated professionals.",
              p2: "By combining hotel-like service—from seamless mail handling to technical support—with a vibrant community where \"everybody knows your name,\" we provide the ultimate foundation for your business to flourish.",
              feature1_title: "Personal Service",
              feature1_desc: "A 20-person on-site team handles all your needs, from cleaning to IT setup.",
              feature2_title: "Lakeside Living",
              feature2_desc: "2 minutes to the promenade, 5 minutes to Stadelhofen station.",
              learn_more: "Learn more about our story"
            },
            workspaces: {
              title: "Our Memberships & Workspaces.",
              subtitle: "Flexible options designed for individuals and teams.",
              open_space: "Open Space",
              open_space_desc: "Perfect for creative professionals. Choose from day passes, flexible hot desks, or your own permanent setup.",
              private_offices: "Private Offices",
              private_offices_desc: "Your private sanctuary in the heart of Zurich. Fully furnished spaces for teams with access to all community perks.",
              meeting_rooms: "Meeting Rooms",
              meeting_rooms_desc: "From intimate boardrooms to grand event spaces. Professional stages for your success, fully equipped and serviced.",
              explore: "Explore"
            },
            community: {
              title: "A workplace where everybody knows your name.",
              p1: "In our true boutique environment, you're not an anonymous face. Despite offering flexible short-term options, most of our members stay mid-to-long term—a true testament to the loyal community we've built.",
              quote: "“When highly qualified experts are looking for a job, they choose my company precisely because of this culture.”",
              p2: "We provide the foundation—the prime location, beautiful design, and flawless service—so you can offer a highly attractive workplace that draws and keeps top talent."
            },
            events: {
              title: "Boutique Event Spaces.",
              desc: "Host up to 250 guests in our 3 versatile event rooms. Discover a sophisticated backdrop for your conferences, creative workshops, or private celebrations on our dedicated events platform.",
              btn: "Discover Event Website"
            },
            location: {
              title: "Our Location.",
              desc: "Perfectly situated: Just a 2-minute walk from the Lake Zurich promenade and 5 minutes from Stadelhofen station.",
              btn: "Open in Google Maps"
            }
          },
          offices: {
            hero_title: "Private Offices.",
            hero_subtitle: "Your own private sanctuary in the heart of Zurich. Enjoy the privacy of a dedicated office with all the premium amenities of our boutique collection.",
            plans: {
              private: {
                title: "Private Office",
                desc: "From 2 to 8 workstations, 24/7 badge access.",
                subdesc: "Your private sanctuary with full access to our boutique amenities.",
                label2: "2-desk from",
                label4: "4-desk from",
                label6: "6-desk from",
                label8: "8-desk from",
                month: "Month",
                occupied: "Occupied",
                available: "Available",
                features: ["Fully furnished", "24/7 access", "Meeting room allowance", "Daily cleaning"]
              },
              corporate: {
                title: "Corporate Spaces",
                desc: "Do you need larger workstation counts?",
                subdesc: "Flexible office space tailored for your company culture. Contact us for a bespoke solution.",
                label: "Pricing",
                price: "On Request",
                features: ["Custom floorplan", "Branded interior", "Dedicated amenities", "Scalable solutions"]
              },
              inquire: "Inquire Now"
            },
            services: {
              title: "Included Services.",
              subtitle: "Everything you need to run your business seamlessly. All included in your membership, with no hidden fees.",
              cat1: {
                title: "Workspace & Tech",
                item1: "High speed fiber optic internet connection",
                item2: "Laser Printer and highspeed-scanner",
                item3: "Phone booths and lounge areas on each floor",
                item4: "Address can be used as official business address, postal service to your door"
              },
              cat2: {
                title: "Facilities & Comfort",
                item1: "High standard private showers",
                item2: "Cleaning: kitchen + toilets 4 x per week / offices 2 x per week",
                item3: "PET, glass, paper and cardboard are collected and recycled",
                item4: "In the kitchenettes: refrigerator, cutlery, dishwasher, coffee maker",
                item5: "Coffee and tea are included"
              },
              cat3: {
                title: "Access & Security",
                item1: "Access to the premises 24/7",
                item2: "Security badge system to the entrance doors",
                item3: "Access to the Resident 9 - 5pm, if no events",
                item4: "In-house facility and support team"
              },
              cat4: {
                title: "Exclusive Perks",
                item1: "4h per desk Meetingroom-allowance (additional hours with 25% discount)",
                item2: "Discount on the rental of the Resident Eventlocation (for up to 250 people)",
                item3: "25% off drinks at the Resident"
              }
            },
            upgrades: {
              title: "Optional Upgrades.",
              subtitle: "Tailor your workspace with additional services designed to support your business growth.",
              car: {
                title: "Indoor Parking",
                desc: "Parking: Indoor (CHF 400.-, excl. VAT) depending on availability"
              },
              conf: {
                title: "Conference & Seminar",
                desc: "Conference and Seminar facilities available for larger team meetings or presentations."
              },
              design: {
                title: "Interior Design",
                desc: "Interior design services to upgrade offices and reflect your corporate identity."
              },
              event: {
                title: "Event Consulting",
                desc: "Professional Event consulting to help you plan and execute the perfect occasion."
              }
            }
          },
          open_space: {
            hero_title: "Open Space.",
            hero_subtitle: "Flexible coworking solutions for creative professionals and growing teams. Choose the plan that fits your rhythm.",
            plans: {
              daypass: {
                title: "Daypass / Test Day",
                desc: "At Resilient and/or Resident from 08:30 to 17:30.",
                label_full: "Full Day",
                label_half: "Half Day"
              },
              flexdesk: {
                title: "Flexdesk",
                desc: "24/7 Badge access for ultimate flexibility.",
                label10: "10 Days / Month",
                label15: "15 Days / Month"
              },
              fixdesk: {
                title: "Fixdesk",
                desc: "Your own permanent desk with full business support.",
                label: "Monthly"
              },
              inquire: "Inquire Now"
            }
          },
          meeting_rooms: {
            hero_title: "Boutique Meeting Rooms.",
            hero_subtitle: "Professional, inspiring, and fully equipped. Discover our range of uniquely designed rooms for your next success.",
            investment: "Investment",
            included: "Included",
            request: "Request Booking",
            rooms: {
              seminar: {
                title: "THE SEMINAR",
                desc: "The ideal infrastructure for complex and exciting business meetings, seminars, workshops, and events.",
                capacity: "Up to 55 persons"
              },
              classic: {
                title: "CLASSIC",
                desc: "A classic meeting room for focused work in groups of up to 10 people.",
                capacity: "Up to 10 persons"
              },
              matisse: {
                title: "MATISSE",
                desc: "Compact and creative space for smaller meetings.",
                capacity: "Up to 7 persons"
              },
              conference: {
                title: "CONFERENCE",
                desc: "Spacious conference room for professional meetings.",
                capacity: "Up to 13 persons"
              },
              flow: {
                title: "FLOW",
                desc: "Flexible room with 7 different setup variants, ideal for dynamic workshops.",
                capacity: "Up to 16 persons"
              },
              kusama: {
                title: "KUSAMA",
                desc: "Inspiring ambiance for creative teamwork.",
                capacity: "Up to 8 persons"
              },
              miro: {
                title: "MIRO",
                desc: "Bright and friendly for efficient meetings.",
                capacity: "Up to 8 persons"
              },
              warhol: {
                title: "WARHOL",
                desc: "Small meeting room with modern flair.",
                capacity: "Up to 7 persons"
              }
            },
            prices: {
              half: "Half Day",
              full: "Full Day",
              h2: "Up to 2 Hours",
              h3: "Up to 3 Hours",
              h4: "Up to 4 Hours"
            },
            benefits: {
              refreshments: {
                title: "Refreshments",
                desc: "Premium coffee, tea & water included in all bookings."
              },
              tech: {
                title: "Full Tech",
                desc: "High-speed WiFi & large screens with easy HDMI setup."
              },
              parking: {
                title: "Parking",
                desc: "Private courtyard parking available on request."
              },
              support: {
                title: "Support",
                desc: "On-site team to help with any technical or catering needs."
              }
            }
          },
          about: {
            hero_title: "Boutique Workspace <br /> With Soul.",
            hero_subtitle: "We are a successfully established collection of 7 coworking boutiques spread across 7 floors in 3 neighboring buildings. Each uniquely and lovingly furnished to provide a private yet vibrant environment.",
            focus_title: "The Luxury of Focus.",
            focus_p1: "It's a massive relief not to worry about cleaning, Wi-Fi, or printer issues. Not to mention the hassle of accepting online packages. Here, you enjoy a hotel-like service.",
            focus_p2: "Having your own office—or several offices for a larger team—while enjoying hotel-like amenities is an offering unlike any other. Plus, being just two minutes from the magnificent Lake Zurich promenade and five minutes from Stadelhofen station is the ultimate convenience.",
            community_title: "Where Everyone Knows Your Name.",
            community_subtitle: "In a true boutique environment, you aren't just an anonymous face in a massive corporate building. Here, people know each other. This culture is the foundation that helps you attract and retain top talent.",
            features: {
              service: {
                title: "Personal Service",
                desc: "Tailored support that understands your specific business needs."
              },
              exchange: {
                title: "Inspiring Exchange",
                desc: "A community of experts and inspiring personalities across all floors."
              },
              amenities: {
                title: "Hotel-like Amenities",
                desc: "Private showers, equipped kitchens, and an award-winning internal working café."
              }
            },
            cta_title: "Ready to join our community?",
            cta_btn: "Book a Private Tour"
          },
          location_page: {
            hero_title: "Location Overview.",
            hero_subtitle: "Kreuzstrasse 24, 8008 Zurich. Situated in the heart of the city, perfectly connected and just steps away from the lake.",
            poi: "Points of Interest",
            transport: "Public Transport",
            markets: "Supermarkets",
            disclaimer: "*All distances are approximate and calculated using the fastest available means of transport."
          },
          contact: {
            hero_title: "Let's get in touch.",
            hero_subtitle: "Book a non-binding tour of our 7 boutiques or reach out with any questions. We look forward to meeting you.",
            details: {
              location: "Location",
              view_maps: "View on Google Maps",
              contact: "Contact"
            },
            form: {
              first_name: "First Name",
              last_name: "Last Name",
              email: "Email Address",
              interest_label: "I am interested in",
              interests: {
                private: "Private Office",
                team: "Team Studio",
                fixdesk: "Fixdesk",
                flexdesk: "Flexdesk",
                event: "Event Location",
                other: "Other Inquiry"
              },
              message: "Your Message",
              submit: "Submit Request"
            }
          }
        }
      },
      de: {
        translation: {
          nav: {
            open_space: "Open Space",
            private_offices: "Private Büros",
            meeting_rooms: "Sitzungszimmer",
            location: "Standort",
            about_us: "Über uns",
            book_tour: "Tour buchen"
          },
          footer: {
            copyright: "© 2024 Resilient Coworking. Alle Rechte vorbehalten.",
            language: "Sprache"
          },
          home: {
            hero_title: "Der führende Boutique Coworking Space in Zürich.",
            hero_subtitle: "3'000m² Fläche, 250 Arbeitsplätze, 10 Sitzungszimmer und 3 Eventräume für bis zu 250 Gäste. Ist das nicht viel zu gross für ein persönliches, individuelles Boutique-Konzept? Willkommen bei Resilient Coworking.",
            explore_btn: "Räume entdecken",
            stats: {
              area: "Gesamtfläche",
              workstations: "Arbeitsplätze",
              rooms: "Sitzungszimmer",
              event_capacity: "Event-Kapazität"
            },
            story: {
              title: "7 Etagen. 3 Gebäude. 1 Resilient Familie.",
              subtitle: "Unsere Geschichte",
              p1: "Was als einzelne Vision begann, ist zu 7 einzigartigen Coworking-Boutiquen angewachsen, die sich über 3 benachbarte Gebäude verteilen. Wir sind mehr als nur Raum; wir sind ein familiengeführtes Team von 20 engagierten Profis.",
              p2: "Durch die Kombination von hotelähnlichem Service – vom nahtlosen Postversand bis zum technischen Support – mit einer lebendigen Community, in der „jeder Ihren Namen kennt“, bieten wir die ultimative Grundlage für das Gedeihen Ihres Unternehmens.",
              feature1_title: "Persönlicher Service",
              feature1_desc: "Ein 20-köpfiges Team vor Ort kümmert sich um all Ihre Bedürfnisse, von der Reinigung bis zur IT.",
              feature2_title: "Leben am See",
              feature2_desc: "2 Minuten zur Promenade, 5 Minuten zum Bahnhof Stadelhofen.",
              learn_more: "Erfahren Sie mehr über unsere Geschichte"
            },
            workspaces: {
              title: "Unsere Mitgliedschaften & Arbeitsplätze.",
              subtitle: "Flexible Optionen für Einzelpersonen und Teams.",
              open_space: "Open Space",
              open_space_desc: "Perfekt für Kreativschaffende. Wählen Sie zwischen Tagespässen, flexiblen Hot Desks oder Ihrem eigenen permanenten Schreibtisch.",
              private_offices: "Private Büros",
              private_offices_desc: "Ihr privater Rückzugsort im Herzen von Zürich. Voll möblierte Räume für Teams mit Zugang zu allen Community-Vorteilen.",
              meeting_rooms: "Sitzungszimmer",
              meeting_rooms_desc: "Von intimen Sitzungszimmern bis hin zu grossartigen Eventräumen. Professionelle Bühnen für Ihren Erfolg, voll ausgestattet und serviert.",
              explore: "Entdecken"
            },
            community: {
              title: "Ein Arbeitsplatz, an dem jeder Ihren Namen kennt.",
              p1: "In unserer echten Boutique-Umgebung sind Sie kein anonymes Gesicht. Trotz flexibler Kurzzeitoptionen bleiben die meisten unserer Mitglieder mittel- bis langfristig – ein echtes Zeugnis für die loyale Gemeinschaft, die wir aufgebaut haben.",
              quote: "„Wenn hochqualifizierte Experten einen Job suchen, entscheiden sie sich gerade wegen dieser Kultur für mein Unternehmen.“",
              p2: "Wir bieten das Fundament – die erstklassige Lage, schönes Design und makellosen Service –, damit Sie einen hochattraktiven Arbeitsplatz bieten können, der Top-Talente anzieht und hält."
            },
            events: {
              title: "Boutique-Eventräume.",
              desc: "Gastgeber für bis zu 250 Gäste in unseren 3 vielseitigen Eventräumen. Entdecken Sie eine anspruchsvolle Kulisse für Ihre Konferenzen, kreativen Workshops oder privaten Feiern auf unserer speziellen Event-Plattform.",
              btn: "Event-Website entdecken"
            },
            location: {
              title: "Unser Standort.",
              desc: "Perfekt gelegen: Nur 2 Gehminuten von der Seepromenade Zürich und 5 Minuten vom Bahnhof Stadelhofen entfernt.",
              btn: "In Google Maps öffnen"
            }
          },
          offices: {
            hero_title: "Private Büros.",
            hero_subtitle: "Ihr persönlicher Rückzugsort im Herzen von Zürich. Geniessen Sie die Privatsphäre eines eigenen Büros mit allen erstklassigen Annehmlichkeiten unserer Boutique-Kollektion.",
            plans: {
              private: {
                title: "Private Büro",
                desc: "Von 2 bis 8 Arbeitsplätzen, 24/7 Badge-Zugang.",
                subdesc: "Ihr privater Rückzugsort mit vollem Zugang zu unseren Boutique-Annehmlichkeiten.",
                label2: "2er-Büro ab",
                label4: "4er-Büro ab",
                label6: "6er-Büro ab",
                label8: "8er-Büro ab",
                month: "Monat",
                occupied: "Besetzt",
                available: "Verfügbar",
                features: ["Voll möbliert", "24/7 Zugang", "Sitzungszimmer-Guthaben", "Tägliche Reinigung"]
              },
              corporate: {
                title: "Corporate Spaces",
                desc: "Benötigen Sie eine grössere Anzahl an Arbeitsplätzen?",
                subdesc: "Flexible Büroräume, die auf Ihre Unternehmenskultur zugeschnitten sind. Kontaktieren Sie uns für eine massgeschneiderte Lösung.",
                label: "Preise",
                price: "Auf Anfrage",
                features: ["Individueller Grundriss", "Branded Interior", "Eigene Annehmlichkeiten", "Skalierbare Lösungen"]
              },
              inquire: "Jetzt anfragen"
            },
            services: {
              title: "Inbegriffene Leistungen.",
              subtitle: "Alles, was Sie brauchen, um Ihr Unternehmen reibungslos zu führen. Alles in Ihrer Mitgliedschaft enthalten, ohne versteckte Gebühren.",
              cat1: {
                title: "Workspace & Technik",
                item1: "Hochgeschwindigkeits-Glasfaser-Internetverbindung",
                item2: "Laserdrucker und Hochgeschwindigkeitsscanner",
                item3: "Telefonzellen und Loungebereiche auf jeder Etage",
                item4: "Adresse kann als offizielle Geschäftsadresse verwendet werden, Postservice bis vor Ihre Tür"
              },
              cat2: {
                title: "Einrichtungen & Komfort",
                item1: "Hochwertige private Duschen",
                item2: "Reinigung: Küche + Toiletten 4 x per Woche / Büros 2 x per Woche",
                item3: "PET, Glas, Papier und Karton werden gesammelt und recycelt",
                item4: "In den Kochnischen: Kühlschrank, Besteck, Geschirrspüler, Kaffeemaschine",
                item5: "Kaffee und Tee sind inbegriffen"
              },
              cat3: {
                title: "Zugang & Sicherheit",
                item1: "Zugang zum Gelände 24/7",
                item2: "Sicherheits-Badge-System für die Eingangstüren",
                item3: "Zugang zum Resident 9 - 17 Uhr, wenn keine Events stattfinden",
                item4: "Hauseigenes Facility- und Support-Team"
              },
              cat4: {
                title: "Exklusive Vorteile",
                item1: "4h Sitzungszimmer-Guthaben pro Schreibtisch (zusätzliche Stunden mit 25% Rabatt)",
                item2: "Rabatt auf die Miete der Resident Eventlocation (für bis zu 250 Personen)",
                item3: "25% Rabatt auf Getränke im Resident"
              }
            },
            upgrades: {
              title: "Optionale Upgrades.",
              subtitle: "Passen Sie Ihren Arbeitsplatz mit zusätzlichen Dienstleistungen an, die Ihr Unternehmenswachstum unterstützen.",
              car: {
                title: "Innenparkplatz",
                desc: "Parken: Innen (CHF 400.-, exkl. MwSt.) je nach Verfügbarkeit"
              },
              conf: {
                title: "Konferenz & Seminar",
                desc: "Konferenz- und Seminareinrichtungen für grössere Teambesprechungen oder Präsentationen verfügbar."
              },
              design: {
                title: "Innendesign",
                desc: "Innendesign-Services zur Aufwertung von Büros und zur Widerspiegelung Ihrer Corporate Identity."
              },
              event: {
                title: "Event-Beratung",
                desc: "Professionelle Event-Beratung, die Ihnen bei der Planung und Durchführung des perfekten Anlasses hilft."
              }
            }
          },
          open_space: {
            hero_title: "Open Space.",
            hero_subtitle: "Flexible Coworking-Lösungen für Kreativschaffende und wachsende Teams. Wählen Sie den Plan, der zu Ihrem Rhythmus passt.",
            plans: {
              daypass: {
                title: "Tagespass / Testtag",
                desc: "Bei Resilient und/oder Resident von 08:30 bis 17:30 Uhr.",
                label_full: "Ganztag",
                label_half: "Halbtag"
              },
              flexdesk: {
                title: "Flexdesk",
                desc: "24/7 Badge-Zugang für ultimative Flexibilität.",
                label10: "10 Tage / Monat",
                label15: "15 Tage / Monat"
              },
              fixdesk: {
                title: "Fixdesk",
                desc: "Ihr eigener permanenter Schreibtisch mit voller geschäftlicher Unterstützung.",
                label: "Monatlich"
              },
              inquire: "Jetzt anfragen"
            }
          },
          meeting_rooms: {
            hero_title: "Boutique Sitzungszimmer.",
            hero_subtitle: "Professionell, inspirierend und voll ausgestattet. Entdecken Sie unser Angebot an einzigartig gestalteten Räumen für Ihren nächsten Erfolg.",
            investment: "Investition",
            included: "Inbegriffen",
            request: "Buchungsanfrage",
            rooms: {
              seminar: {
                title: "THE SEMINAR",
                desc: "Die ideale Infrastruktur für komplexe und spannende Geschäftstreffen, Seminare, Workshops und Events.",
                capacity: "Bis zu 55 Personen"
              },
              classic: {
                title: "CLASSIC",
                desc: "Ein klassischer Besprechungsraum für konzentriertes Arbeiten in Gruppen von bis zu 10 Personen.",
                capacity: "Bis zu 10 Personen"
              },
              matisse: {
                title: "MATISSE",
                desc: "Kompakter und kreativer Raum für kleinere Besprechungen.",
                capacity: "Bis zu 7 Personen"
              },
              conference: {
                title: "CONFERENCE",
                desc: "Großzügiger Konferenzraum für professionelle Meetings.",
                capacity: "Bis zu 13 Personen"
              },
              flow: {
                title: "FLOW",
                desc: "Flexibler Raum mit 7 verschiedenen Setup-Varianten, ideal für dynamische Workshops.",
                capacity: "Bis zu 16 Personen"
              },
              kusama: {
                title: "KUSAMA",
                desc: "Inspirierendes Ambiente für kreative Teamarbeit.",
                capacity: "Bis zu 8 Personen"
              },
              miro: {
                title: "MIRO",
                desc: "Hell und freundlich für effiziente Besprechungen.",
                capacity: "Bis zu 8 Personen"
              },
              warhol: {
                title: "WARHOL",
                desc: "Kleiner Sitzungsraum mit modernem Flair.",
                capacity: "Bis zu 7 Personen"
              }
            },
            prices: {
              half: "Halbtag",
              full: "Ganztag",
              h2: "Bis zu 2 Stunden",
              h3: "Bis zu 3 Stunden",
              h4: "Bis zu 4 Stunden"
            },
            benefits: {
              refreshments: {
                title: "Erfrischungen",
                desc: "Premium-Kaffee, Tee und Wasser in allen Buchungen inbegriffen."
              },
              tech: {
                title: "Vollständige Technik",
                desc: "Hochgeschwindigkeits-WLAN und grosse Bildschirme mit einfachem HDMI-Setup."
              },
              parking: {
                title: "Parken",
                desc: "Private Innenhofparkplätze auf Anfrage verfügbar."
              },
              support: {
                title: "Support",
                desc: "Team vor Ort, das bei technischen oder Catering-Wünschen hilft."
              }
            }
          },
          about: {
            hero_title: "Boutique Workspace <br /> Mit Herz und Seele.",
            hero_subtitle: "Wir sind eine erfolgreich etablierte Kollektion von 7 Coworking-Boutiquen auf 7 Etagen in 3 benachbarten Gebäuden. Jede Etage ist einzigartig und liebevoll eingerichtet, um eine private und dennoch lebendige Umgebung zu bieten.",
            focus_title: "Der Luxus des Fokus.",
            focus_p1: "Es ist eine enorme Erleichterung, sich nicht um Reinigung, WLAN oder Druckerprobleme kümmern zu müssen. Ganz zu schweigen von der Mühe, Online-Pakete anzunehmen. Hier geniessen Sie hotelähnlichen Service.",
            focus_p2: "Ein eigenes Büro – oder mehrere Büros für ein grösseres Team – zu haben und gleichzeitig hotelähnliche Annehmlichkeiten zu geniessen, ist ein einzigartiges Angebot. Zudem ist die Lage nur zwei Minuten von der herrlichen Zürcher Seepromenade und fünf Minuten vom Bahnhof Stadelhofen entfernt ein ultimativer Komfort.",
            community_title: "Wo jeder Ihren Namen kennt.",
            community_subtitle: "In einer echten Boutique-Umgebung sind Sie nicht nur ein anonymes Gesicht in einem riesigen Bürogebäude. Hier kennt man sich. Diese Kultur ist das Fundament, das Ihnen hilft, Top-Talente anzuziehen und zu halten.",
            features: {
              service: {
                title: "Persönlicher Service",
                desc: "Massgeschneiderter Support, der Ihre spezifischen geschäftlichen Anforderungen versteht."
              },
              exchange: {
                title: "Inspirierender Austausch",
                desc: "Eine Gemeinschaft von Experten und inspirierenden Persönlichkeiten über alle Etagen hinweg."
              },
              amenities: {
                title: "Hotelähnliche Annehmlichkeiten",
                desc: "Private Duschen, ausgestattete Küchen und ein preisgekröntes internes Working-Café."
              }
            },
            cta_title: "Bereit, unserer Community beizutreten?",
            cta_btn: "Eine private Tour buchen"
          },
          location_page: {
            hero_title: "Standortübersicht.",
            hero_subtitle: "Kreuzstrasse 24, 8008 Zürich. Im Herzen der Stadt gelegen, perfekt angebunden und nur wenige Schritte vom See entfernt.",
            poi: "Sehenswürdigkeiten",
            transport: "Öffentlicher Verkehr",
            markets: "Supermärkte",
            disclaimer: "*Alle Entfernungen sind ungefähre Angaben und wurden mit dem schnellsten verfügbaren Verkehrsmittel berechnet."
          },
          contact: {
            hero_title: "Kontaktieren Sie uns.",
            hero_subtitle: "Buchen Sie eine unverbindliche Tour durch unsere 7 Boutiquen oder kontaktieren Sie uns bei Fragen. Wir freuen uns darauf, Sie kennenzulernen.",
            details: {
              location: "Standort",
              view_maps: "In Google Maps anzeigen",
              contact: "Kontakt"
            },
            form: {
              first_name: "Vorname",
              last_name: "Nachname",
              email: "E-Mail Adresse",
              interest_label: "Ich interessiere mich für",
              interests: {
                private: "Privates Büro",
                team: "Team Studio",
                fixdesk: "Fixdesk",
                flexdesk: "Flexdesk",
                event: "Event-Location",
                other: "Andere Anfrage"
              },
              message: "Ihre Nachricht",
              submit: "Anfrage absenden"
            }
          }
        }
      }
    }
  });

export default i18n;
