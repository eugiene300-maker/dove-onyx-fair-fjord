import type { DeliveryService } from "./types.ts";

export const deliveryServices: DeliveryService[] = [
  {
    slug: "bx-buddiez-nyc-delivery",
    name: "BX Buddiez NYC Delivery",
    coverage:
      "Licensed adult-use delivery across the South Bronx (Melrose, Mott Haven, Port Morris, The Hub), Fordham and Belmont, Parkchester, Throgs Neck, Riverdale, and most of the rest of NYC. The shop at 2935 3rd Avenue also does same-day pickup.",
    hours:
      "Delivery windows track store hours: Mon–Sat 9am–8pm, Sun 10am–7pm. Order cutoff is typically an hour before close.",
    notes:
      "This is the licensed option we actually recommend. BX Buddiez is a CAURD equity shop (OCM-CAURD-25-000297) at 2935 3rd Avenue between East 152nd and East 153rd in Melrose. Adult-use, 21+ with government ID — no medical card required. Flower, pre-rolls, edibles, vapes, and concentrates, all New York-tested. You can order for delivery or walk in for pickup. Drivers are the shop's, not a random Instagram handle. If a courier asks you to meet in a lobby without scanning ID, that is not this service. South Bronx, Fordham, Parkchester, Throgs Neck, and Riverdale are all inside the regular radius; if you are on City Island or the far edge of Eastchester, call (929) 600-7207 and ask before you checkout.",
    licensed: true,
    website: "https://bxbuddiez.com/",
    phone: "(929) 600-7207",
  },
  {
    slug: "unlicensed-instagram-delivery",
    name: "Unlicensed Instagram / WhatsApp delivery (do not use)",
    coverage:
      "Borough-wide spam: stories, close-friends lists, and burner numbers promising 20-minute drops to Parkchester, Soundview, Throgs Neck, and Riverdale.",
    hours: "Whatever the story says. There is no license and no recourse after 11pm.",
    notes:
      "We are listing this so nobody confuses it with the licensed row above. If the account has no OCM license number, no physical shop you can walk into, and a menu of mystery carts, that is an illegal sale. The Office of Cannabis Management licenses adult-use retailers and their delivery; Instagram does not. Parkchester's porch-pirate and 'laced weed' door-note panic this summer started, in part, because people were still treating unlicensed drops like a pizza order. We do not name the accounts. We do not map them. Buy from a licensed shop, or do not buy.",
    licensed: false,
  },
];
