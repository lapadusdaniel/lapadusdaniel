export const siteConfig = {
  name: 'Daniel Lapadus Photography',
  photographerName: 'Daniel Lapadus',
  titleTemplate: '%s | Daniel Lapadus Photography',
  defaultTitle: 'Fotograf nuntă și botez în Cugir, Alba și împrejurimi',
  description:
    'Fotograf de eveniment în Cugir, Alba Iulia, Sebeș, Sibiu, Cluj-Napoca și Deva. Nunți, botezuri și evenimente surprinse natural, luminos și autentic.',
  baseUrl: 'https://lapadusdaniel.photography',
  alternateDomain: 'https://lapadusdaniel.ro',
  locale: 'ro_RO',
  email: 'lapadusdaniel@gmail.com',
  phoneDisplay: '+40 790 208 780',
  phoneRaw: '+40790208780',
  whatsapp: 'https://wa.me/40790208780',
  instagram: 'https://www.instagram.com/lapadusdaniel.photo/profilecard/?igsh=NDFneTB1NndpZWF2',
  facebook: 'https://www.facebook.com/lapadus.photographer'
} as const;

export const navigation = [
  { href: '/', label: 'Acasă' },
  { href: '/portfolio', label: 'Portofoliu' },
  { href: '/services', label: 'Servicii & Prețuri' },
  { href: '/about', label: 'Despre' },
  { href: '/contact', label: 'Contact' }
] as const;

export const locations = ['Cugir', 'Alba Iulia', 'Sebeș', 'Sibiu', 'Cluj-Napoca', 'Deva'] as const;

export const testimonials = [
  {
    name: 'Alexandra & Radu',
    quote:
      'Daniel ne-a făcut să ne simțim relaxați din primele minute. Fotografiile sunt pline de emoție și exact așa cum ne-am dorit: naturale, fără regie.'
  },
  {
    name: 'Familia Aron',
    quote:
      'La botez a surprins toate momentele importante, dar și detaliile pe care noi nu le-am observat în ziua aceea. Rezultatul este superb.'
  },
  {
    name: 'Mihai & Loredana',
    quote:
      'Comunicare excelentă, prezență discretă și livrare rapidă. Albumul final spune povestea zilei noastre exact cum a fost.'
  }
] as const;

export const featuredWeddings = [
  {
    title: 'Cristi & Beatrice',
    location: 'Cugir, Alba',
    image: '/_images/0ea3e0b87656db3a0ddd4c57e193561b2fee4900.jpg',
    width: 6000,
    height: 4000,
    alt: 'Nuntă Cristi și Beatrice în Cugir'
  },
  {
    title: 'Alexandra & Radu',
    location: 'Cugir, Alba',
    image: '/_images/2572464fbeb984b9d2ab00a8b974cbda44a7213e.jpg',
    width: 6000,
    height: 4000,
    alt: 'Ședință foto de nuntă cu Alexandra și Radu'
  },
  {
    title: 'Mihai & Loredana',
    location: 'White Velvet, Cugir',
    image: '/_images/daab06c4f1136fd20c6010658752612564545aab.jpg',
    width: 6000,
    height: 4000,
    alt: 'Nuntă intimă la White Velvet Cugir'
  }
] as const;

export const featuredBaptisms = [
  {
    title: 'Botez Aron',
    location: 'Cugir',
    image: '/_images/044464a0a1f8971e2816dca862b07fb5d87bf946.jpg',
    width: 6000,
    height: 4000,
    alt: 'Botez Aron fotografiat în Cugir'
  },
  {
    title: 'Botez David Cristian',
    location: 'Alba',
    image: '/_images/10dfda1ce397e42f8ab40e2390e9adc4f8f59cd9.jpg',
    width: 6000,
    height: 4000,
    alt: 'Fotografii de botez pentru David Cristian'
  },
  {
    title: 'Botez Cătălin',
    location: 'Alba Iulia',
    image: '/_images/faf60513b0d5af0156eb9a856035b0b0452e5b6a.jpg',
    width: 6000,
    height: 4000,
    alt: 'Botez Cătălin surprins natural'
  }
] as const;

export const serviceSections = [
  {
    id: 'nunta',
    title: 'Fotografie nuntă',
    intro:
      'Ziua nunții trece repede, dar imaginile rămân. Documentez întreaga zi discret, cu accent pe emoții reale, lumină naturală și momentele care fac povestea voastră unică.',
    includes: [
      'Acoperire completă: pregătiri, ceremonie, ședință foto, petrecere până la tort',
      'Editare profesională în stil luminos și natural',
      'Galerie online privată + livrare pe suport digital',
      'Consultare înainte de eveniment'
    ],
    pricing: [
      { name: 'Pachet Essential', price: 'de la 1000€', details: 'Acoperire completă + galerie online' },
      { name: 'Pachet Signature', price: 'de la 1100€', details: 'Include album premium 30x30 + Save the Date' },
      { name: 'Pachet Complete', price: 'de la 1300€', details: 'Include album premium + Trash the Dress + Save the Date' }
    ]
  },
  {
    id: 'botez',
    title: 'Fotografie botez',
    intro:
      'Botezul are o emoție aparte: familie, detalii și momente irepetabile. Surprind ceremonia într-un mod cald și discret, pentru amintiri autentice și curate vizual.',
    includes: [
      'Pregătiri acasă, ceremonie la biserică, petrecere (în funcție de pachet)',
      'Cadre de familie și portrete naturale',
      'Editare completă și galerie privată',
      'Livrare în 4-6 săptămâni'
    ],
    pricing: [
      { name: 'Pachet 1', price: '1400 lei', details: 'Acasă + biserică, ideal pentru evenimente intime' },
      { name: 'Pachet 2', price: '2000 lei', details: 'Acasă + biserică + petrecere până la tort' },
      { name: 'Pachet 3', price: '2500 lei', details: 'Acoperire completă + album foto inclus' }
    ]
  },
  {
    id: 'evenimente',
    title: 'Alte evenimente',
    intro:
      'Fie că este majorat, aniversare sau eveniment corporate, abordarea rămâne aceeași: imagini curate, expresive și orientate pe oameni.',
    includes: [
      'Acoperire pe interval orar clar stabilit',
      'Focus pe atmosferă, relații și momente-cheie',
      'Galerie online ușor de partajat',
      'Opțiuni extra: oră suplimentară, album, livrare rapidă'
    ],
    pricing: [
      { name: 'Majorat Party Only', price: '1200 lei', details: 'Prezență pe durata petrecerii + aproximativ 1 oră după tort' },
      { name: 'Majorat Party + Photoshoot', price: '1500 lei', details: 'Ședință foto înainte de petrecere + acoperire completă party' },
      { name: 'Evenimente personalizate', price: 'ofertă la cerere', details: 'Tarif adaptat tipului de eveniment și duratei' }
    ]
  }
] as const;

export const aboutContent = {
  portrait: {
    src: '/_images/8c9d10cc3c7c855c3b8e04ff40fa8f93beb1dd93.jpg',
    width: 3649,
    height: 5474,
    alt: 'Portret Daniel Lăpăduș'
  },
  story: [
    'Sunt Daniel Lăpăduș și fotografiez momentele care contează cu adevărat. De peste 7 ani, lucrez la nunți, botezuri și evenimente de familie în Cugir, Alba Iulia și în orașele din jur.',
    'Am început cu dorința simplă de a păstra emoția unei zile exact așa cum este ea: fără presiune, fără cadre forțate, fără artificii inutile. Pentru mine, o fotografie bună nu înseamnă doar lumină corectă, ci și o stare reală.'
  ],
  philosophy:
    'Îmi place fotografia luminoasă, aerisită și sinceră. În ziua evenimentului sunt prezent, atent la detalii, dar discret. Așa vă puteți trăi momentele natural, iar imaginile finale spun povestea voastră în ritmul ei firesc.',
  whyChooseMe: [
    'Experiență practică în sute de momente de familie și evenimente',
    'Stil curat, elegant și atemporal',
    'Comunicare clară înainte și în timpul colaborării',
    'Livrare organizată, rapidă și ușor de partajat cu cei dragi'
  ]
} as const;

export const localSeoParagraph =
  'Ca fotograf nuntă în Cugir și Alba Iulia, fotografiez frecvent evenimente și în Sebeș, Sibiu, Cluj-Napoca și Deva. Dacă ai nevoie de fotograf botez în Cugir sau fotograf botez în Alba Iulia, construim împreună o acoperire potrivită pentru ziua voastră, cu imagini naturale și autentice.';
