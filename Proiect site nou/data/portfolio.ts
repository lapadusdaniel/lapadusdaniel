export type PortfolioCategory = 'nunta' | 'botez' | 'evenimente';

export type PortfolioItem = {
  id: string;
  category: PortfolioCategory;
  title: string;
  location: string;
  image: string;
  width: number;
  height: number;
  alt: string;
};

export const categoryLabels: Record<PortfolioCategory, string> = {
  nunta: 'Nuntă',
  botez: 'Botez',
  evenimente: 'Alte evenimente'
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'nunta-cristi-beatrice',
    category: 'nunta',
    title: 'Cristi & Beatrice',
    location: 'Cugir, Alba',
    image: '/_images/0ea3e0b87656db3a0ddd4c57e193561b2fee4900.jpg',
    width: 6000,
    height: 4000,
    alt: 'Fotograf nuntă Cugir - Cristi și Beatrice'
  },
  {
    id: 'nunta-roxana-alex',
    category: 'nunta',
    title: 'Roxana & Alex',
    location: 'Alba',
    image: '/_images/28dc11d9a8a4b9c213659cb2b6a67486a6a999e0.jpg',
    width: 6000,
    height: 4000,
    alt: 'Fotografie de nuntă în Alba - Roxana și Alex'
  },
  {
    id: 'nunta-alexandra-radu',
    category: 'nunta',
    title: 'Alexandra & Radu',
    location: 'Cugir',
    image: '/_images/2572464fbeb984b9d2ab00a8b974cbda44a7213e.jpg',
    width: 6000,
    height: 4000,
    alt: 'Fotograf nuntă Cugir - Alexandra și Radu'
  },
  {
    id: 'nunta-danusia-alex',
    category: 'nunta',
    title: 'Danusia & Alex',
    location: 'Călnic, Alba',
    image: '/_images/1e265fe53d5e9c991d5d63f235d8d3577063fc5f.jpg',
    width: 4000,
    height: 6000,
    alt: 'Portret de nuntă Danusia și Alex în Alba'
  },
  {
    id: 'nunta-tudor-cosmina',
    category: 'nunta',
    title: 'Tudor & Cosmina',
    location: 'Sebeș',
    image: '/_images/c6d1f48c8ff3c4e40d6364b9e81315f4792b04d4.jpg',
    width: 5716,
    height: 3811,
    alt: 'Fotografie nuntă Sebeș - Tudor și Cosmina'
  },
  {
    id: 'nunta-alex-andreea',
    category: 'nunta',
    title: 'Alex & Andreea',
    location: 'Alba Iulia',
    image: '/_images/ec4ff8694c0174d00a58da8b57d67ff1464db2e9.jpg',
    width: 3779,
    height: 5669,
    alt: 'Fotograf nuntă Alba Iulia - Alex și Andreea'
  },
  {
    id: 'nunta-mihai-loredana',
    category: 'nunta',
    title: 'Mihai & Loredana',
    location: 'White Velvet, Cugir',
    image: '/_images/daab06c4f1136fd20c6010658752612564545aab.jpg',
    width: 6000,
    height: 4000,
    alt: 'Nuntă elegantă la White Velvet Cugir'
  },
  {
    id: 'nunta-sedinta-alba',
    category: 'nunta',
    title: 'Ședință de cuplu',
    location: 'Sebeș, Alba',
    image: '/_images/988e1a5e5e45afe0808c7cca42612e934f305133.jpg',
    width: 4000,
    height: 6000,
    alt: 'Ședință foto nuntă în Sebeș, Alba'
  },
  {
    id: 'nunta-pregatiri',
    category: 'nunta',
    title: 'Pregătirile mirilor',
    location: 'Alba',
    image: '/_images/be75003912a79d83bae2da517f7d42e475324f71.jpg',
    width: 6000,
    height: 4000,
    alt: 'Pregătiri nuntă surprinse natural în Alba'
  },
  {
    id: 'nunta-trash-dress',
    category: 'nunta',
    title: 'Trash the Dress',
    location: 'Râpa Roșie, Sebeș',
    image: '/_images/89c28875f130cdec228d807dea2c7492133b9647.jpg',
    width: 6000,
    height: 4000,
    alt: 'Trash the dress în Sebeș, Alba'
  },
  {
    id: 'nunta-cupliu-alba',
    category: 'nunta',
    title: 'Cadre de cuplu',
    location: 'Alba Carolina',
    image: '/_images/593f038512250e0f3620c82d22cd34af97c3ec92.jpg',
    width: 6000,
    height: 4000,
    alt: 'Fotograf nuntă Alba Carolina'
  },
  {
    id: 'nunta-white-velvet',
    category: 'nunta',
    title: 'Seară de petrecere',
    location: 'White Velvet, Cugir',
    image: '/_images/76fb208840d67decddef3cb700a29dd814ab7917.jpg',
    width: 5585,
    height: 3723,
    alt: 'Atmosferă de nuntă la White Velvet Cugir'
  },
  {
    id: 'botez-aron-cover',
    category: 'botez',
    title: 'Botez Aron',
    location: 'Cugir',
    image: '/_images/044464a0a1f8971e2816dca862b07fb5d87bf946.jpg',
    width: 6000,
    height: 4000,
    alt: 'Fotograf botez Cugir - Aron'
  },
  {
    id: 'botez-david-cover',
    category: 'botez',
    title: 'Botez David Cristian',
    location: 'Alba Iulia',
    image: '/_images/10dfda1ce397e42f8ab40e2390e9adc4f8f59cd9.jpg',
    width: 6000,
    height: 4000,
    alt: 'Fotograf botez Alba Iulia - David Cristian'
  },
  {
    id: 'botez-catalin-cover',
    category: 'botez',
    title: 'Botez Cătălin',
    location: 'Alba',
    image: '/_images/faf60513b0d5af0156eb9a856035b0b0452e5b6a.jpg',
    width: 6000,
    height: 4000,
    alt: 'Fotografie botez Cătălin în Alba'
  },
  {
    id: 'botez-aron-portrait',
    category: 'botez',
    title: 'Emoții la biserică',
    location: 'Cugir',
    image: '/_images/9e30e4acdf5fd9d866df43e311ac2bd35696325e.jpg',
    width: 4000,
    height: 6000,
    alt: 'Fotografii de botez la biserică în Cugir'
  },
  {
    id: 'botez-aron-family',
    category: 'botez',
    title: 'Familia împreună',
    location: 'Cugir',
    image: '/_images/e07e827ce6530d141958b1d4e9f4bbb1a192d739.jpg',
    width: 6000,
    height: 4000,
    alt: 'Cadru de familie la botez în Cugir'
  },
  {
    id: 'botez-aron-detail',
    category: 'botez',
    title: 'Detalii delicate',
    location: 'Alba',
    image: '/_images/995dc6eae6024e8ba4bec99277c9b224b44cac89.jpg',
    width: 4000,
    height: 6000,
    alt: 'Detalii de botez surprinse natural'
  },
  {
    id: 'botez-aron-smile',
    category: 'botez',
    title: 'Zâmbete autentice',
    location: 'Alba Iulia',
    image: '/_images/c7cffa34fcbd191df2a030b719e75517455e6428.jpg',
    width: 4000,
    height: 6000,
    alt: 'Fotograf botez Alba Iulia - momente autentice'
  },
  {
    id: 'botez-aron-portrait-2',
    category: 'botez',
    title: 'Ritmul zilei',
    location: 'Cugir',
    image: '/_images/29e577e07e4c03858909d6a87adec11b6ea15ba1.jpg',
    width: 4000,
    height: 6000,
    alt: 'Portret de botez în lumină naturală'
  },
  {
    id: 'event-majorat-alesia',
    category: 'evenimente',
    title: 'Majorat Alesia',
    location: 'Alba',
    image: '/_images/6154ee704dd1cad597c3734b95bddca2df331b1f.jpg',
    width: 3617,
    height: 5425,
    alt: 'Fotograf eveniment majorat în Alba'
  },
  {
    id: 'event-after-wedding-1',
    category: 'evenimente',
    title: 'After Wedding',
    location: 'Sebeș',
    image: '/_images/c5a30c4e73a907ed83481125c5a03b2960118b69.jpg',
    width: 4000,
    height: 6000,
    alt: 'Ședință after wedding în Sebeș'
  },
  {
    id: 'event-after-wedding-2',
    category: 'evenimente',
    title: 'Sesiune de poveste',
    location: 'Sibiu',
    image: '/_images/7bcaa8751dc1dd5b3107196ce70f655055a00f26.jpg',
    width: 5740,
    height: 3827,
    alt: 'Fotograf eveniment Sibiu - sesiune de cuplu'
  },
  {
    id: 'event-after-wedding-3',
    category: 'evenimente',
    title: 'Lumini de seară',
    location: 'Cluj-Napoca',
    image: '/_images/117f0a9ad7bd84cf8b307727cb34162b2f1e5689.jpg',
    width: 6000,
    height: 4000,
    alt: 'Fotograf eveniment Cluj-Napoca'
  },
  {
    id: 'event-emotional-frame',
    category: 'evenimente',
    title: 'Cadru cinematic',
    location: 'Deva',
    image: '/_images/214d8a294e546703b25feac911d2f58bb44c4fa0.jpg',
    width: 6783,
    height: 4522,
    alt: 'Fotografie eveniment Deva cu lumină naturală'
  }
];
