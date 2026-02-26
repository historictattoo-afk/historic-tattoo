export interface PortfolioImage {
  src: string;
  alt: string;
}

export interface Artist {
  name: string;
  slug: string;
  days: string;
  ig: string;
  specialty: string;
  bio: string;
  photo: string | null;
  portfolio: PortfolioImage[];
}

export const artists: Artist[] = [
  {
    name: "Craig Brown",
    slug: "craig-brown",
    days: "Wed – Sat",
    ig: "https://www.instagram.com/historictattoo/",
    specialty: "Traditional American",
    bio: "Craig Brown is a cornerstone of Historic Tattoo, bringing years of dedicated traditional American tattooing to Portland's SE side. Known for his bold lines and classic imagery, Craig specializes in timeless flash designs that hold up for a lifetime.",
    photo: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260914078-GP6VEZ0QUIHLSBNVQ9VD/image0+%283%29.jpeg",
    portfolio: [
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260917349-BJ3M63BOOWGVAC35OGPP/image4+%282%29.jpeg", alt: "Traditional American eagle chest piece by Craig Brown at Historic Tattoo Portland" },
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260935421-6VDMZOP1FBHBTMN2EULG/image1.jpeg", alt: "Bold traditional rose tattoo by Craig Brown in SE Portland" },
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260918274-NYD0M9B00Z8920I64LMY/image3+%282%29.jpeg", alt: "Classic anchor and banner tattoo by Craig Brown at Historic Tattoo" },
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260921172-JCSF45H4AXPO2PBIBZ6F/image2+%282%29.jpeg", alt: "Traditional panther head tattoo by Craig Brown Portland OR" },
    ],
  },
  {
    name: "Jonathan Vallee",
    slug: "jonathan-vallee",
    days: "Wed – Sat",
    ig: "https://www.instagram.com/historictattoo/",
    specialty: "Traditional American",
    bio: "Jonathan Vallee is a veteran traditional tattoo artist at Historic Tattoo in Portland. With a sharp eye for classic composition and rich color palettes, Jonathan delivers bold, clean traditional work that stands the test of time.",
    photo: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1533674774480-KW5OU5BVXB2DQ0ON3951/Screen+Shot+2018-08-07+at+1.21.22+PM.png",
    portfolio: [
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1533674758062-A1YKXQ6NH9S2QY2DNNA1/Screen+Shot+2018-08-07+at+1.42.21+PM.png", alt: "Traditional dagger and rose tattoo by Jonathan Vallee at Historic Tattoo Portland" },
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1533674769037-DV1YZS8B6A31REGUFLBC/Screen+Shot+2018-08-07+at+1.21.57+PM.png", alt: "Bold eagle tattoo by Jonathan Vallee in SE Portland Oregon" },
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1533674780575-X24N63X0LNWN7MHI5T4H/Screen+Shot+2018-08-07+at+1.22.14+PM.png", alt: "Classic ship and anchor tattoo by Jonathan Vallee at Historic Tattoo" },
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1533674761507-Y8YDZ279VN3KXRRXKTXG/Screen+Shot+2018-08-07+at+1.21.44+PM.png", alt: "Traditional snake and skull tattoo by Jonathan Vallee Portland" },
    ],
  },
  {
    name: "Krystian Schneider",
    slug: "krystian-schneider",
    days: "Tue, Wed, Fri, Sat",
    ig: "https://www.instagram.com/historictattoo/",
    specialty: "Traditional American",
    bio: "Krystian Schneider brings precision and energy to every traditional piece at Historic Tattoo. Specializing in bold, saturated color work and clean line execution, Krystian is a go-to artist for anyone seeking classic American tattoo style in Portland.",
    photo: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153066661-XCKV7C47MASE3QH8V23O/Screenshot%2B2025-07-10%2Bat%2B6.10.25%25E2%2580%25AFAM.jpg",
    portfolio: [
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153062265-WJ2RUIT1CANL265OOXLN/IMG_8260.jpeg", alt: "Traditional heart and dagger tattoo by Krystian Schneider at Historic Tattoo Portland" },
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153064259-WKV1R1SF15HNYL6TWTC0/IMG_8203.jpeg", alt: "Bold traditional panther tattoo by Krystian Schneider SE Portland" },
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153075109-BNE4L4EV619UYWKWX6H1/IMG_8108.jpeg", alt: "Classic traditional flash piece by Krystian Schneider at Historic Tattoo" },
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153079105-8LT5JOFTDE5PQ93HSRRC/IMG_8037.jpeg", alt: "Traditional American rose tattoo by Krystian Schneider Portland Oregon" },
    ],
  },
  {
    name: "Adam DeFiglio",
    slug: "adam-defiglio",
    days: "Fri – Mon",
    ig: "https://www.instagram.com/historictattoo/",
    specialty: "Traditional American",
    bio: "Adam DeFiglio is a powerhouse traditional tattoo artist at Historic Tattoo Portland. His work features heavy saturation, rock-solid lines, and a deep respect for the roots of American tattooing. Adam is available Friday through Monday for walk-ins and appointments.",
    photo: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752154031208-0211B5W3OOSB6L1EDEFZ/IMG_1250.jpeg",
    portfolio: [
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752154031409-MVMA9AEYI0XFWBUN5341/A57B5466-229C-46ED-8D7B-FBD6BD80E1BA.jpeg", alt: "Traditional skull and crossbones tattoo by Adam DeFiglio at Historic Tattoo Portland" },
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752154040779-FZOEPCI40Z7LJEEMY6RF/IMG_6676.jpeg", alt: "Bold lines traditional eagle tattoo by Adam DeFiglio SE Portland" },
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752154043520-L1E9J2XJ3S9AM178WNF0/IMG_6330.jpeg", alt: "Classic American traditional flash by Adam DeFiglio at Historic Tattoo" },
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752154052332-X29AZ8ZV7S318BJGV0L4/IMG_6544.jpeg", alt: "Traditional anchor tattoo by Adam DeFiglio Portland Oregon" },
    ],
  },
  {
    name: "Tony J. Vyeda",
    slug: "tony-vyeda",
    days: "Wed – Sat",
    ig: "https://www.instagram.com/historictattoo/",
    specialty: "Traditional American",
    bio: "Tony J. Vyeda brings vibrant color and dynamic composition to every traditional piece at Historic Tattoo. With a passion for classic imagery and a steady hand, Tony is one of Portland's most sought-after traditional American tattoo artists.",
    photo: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260696730-T41YHUXASE5MA2MH3ZMQ/image0.jpeg",
    portfolio: [
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260696744-G183ZP02TIQ015UKBRTH/image2.jpeg", alt: "Traditional rose and banner tattoo by Tony J. Vyeda at Historic Tattoo Portland" },
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260698033-Q6KT2SJ42O7PG454YU3J/image3.jpeg", alt: "Bold eagle and shield tattoo by Tony Vyeda in SE Portland" },
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260698535-K9J0ULBJFDIZEWJCUL9S/image4.jpeg", alt: "Classic snake tattoo by Tony J. Vyeda at Historic Tattoo Portland Oregon" },
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752260699281-DK2XQ3HJ89J5ZB6T70J0/image5.jpeg", alt: "Traditional dagger and heart tattoo by Tony Vyeda Portland" },
    ],
  },
  {
    name: "Abbie Fitzpatrick",
    slug: "abbie-fitzpatrick",
    days: "Sun – Tue",
    ig: "https://www.instagram.com/historictattoo/",
    specialty: "Traditional American",
    bio: "Abbie Fitzpatrick is a talented traditional American tattoo artist at Historic Tattoo Portland. Known for her clean execution and eye for classic design, Abbie is available Sunday through Tuesday for walk-ins and booked appointments.",
    photo: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153767790-VGSGPM17EFWTG09CORM9/unnamed.jpg",
    portfolio: [
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153794631-H86G5RKEWRJXQLRAO3FA/IMG_4755.jpeg", alt: "Traditional flower bouquet tattoo by Abbie Fitzpatrick at Historic Tattoo Portland" },
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153829523-DTFX3ZI7DBF3T59IW3NL/IMG_6445.jpeg", alt: "Classic lady head tattoo by Abbie Fitzpatrick in SE Portland" },
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153770742-15TCPFE6DTM6YA5MZACB/IMG_6452.jpeg", alt: "Bold traditional swallow tattoo by Abbie Fitzpatrick at Historic Tattoo" },
      { src: "https://images.squarespace-cdn.com/content/v1/590f374a1e5b6c8e16f091b5/1752153834785-Z74OZ24DQH0QGQQYLKRC/IMG_6455.jpeg", alt: "Traditional heart and rose tattoo by Abbie Fitzpatrick Portland Oregon" },
    ],
  },
  {
    name: "Mishka",
    slug: "mishka",
    days: "By appointment",
    ig: "https://www.instagram.com/historictattoo/",
    specialty: "Traditional American",
    bio: "Mishka is a tattoo artist at Historic Tattoo in Portland, available by appointment. Reach out via Instagram to book a session and see their latest work.",
    photo: null,
    portfolio: [],
  },
  {
    name: "Blane",
    slug: "blane",
    days: "By appointment",
    ig: "https://www.instagram.com/historictattoo/",
    specialty: "Traditional American",
    bio: "Blane is a tattoo artist at Historic Tattoo in Portland, available by appointment. Follow on Instagram to see their portfolio and message to schedule your next tattoo.",
    photo: null,
    portfolio: [],
  },
];

export function getArtistBySlug(slug: string): Artist | undefined {
  return artists.find((a) => a.slug === slug);
}

export function getArtistsWithPortfolios(): Artist[] {
  return artists.filter((a) => a.portfolio.length > 0);
}
