const l1 = ["Hospital de Bellvitge", "Bellvitge", "Avinguda Carrilet", "Rambla Just Oliveras", "Can Serra", "Florida", "Torrassa", "Santa Eulàlia", "Mercat Nou", "Plaça de Sants", "Hostafrancs", "Espanya", "Rocafort", "Urgell", "Universitat", "Catalunya", "Urquinaona", "Arc de Triomf", "Marina", "Glòries", "Clot", "Navas", "La Sagrera", "Fabra i Puig", "Sant Andreu", "Torras i Bages", "Trinitat Vella", "Baró de Viver", "Santa Coloma", "Fondo"];
const l2 = ["Paral·lel", "Sant Antoni", "Universitat", "Passeig de Gràcia", "Tetuan", "Monumental", "Sagrada Família", "Encants", "Clot", "Bac de Roda", "Sant Martí", "La Pau", "Verneda", "Artigues | Sant Adrià", "Sant Roc", "Gorg", "Pep Ventura", "Badalona Pompeu Fabra"];
const l3 = ["Zona Universitària", "Palau Reial", "Maria Cristina", "Les Corts", "Plaça del Centre", "Sants Estació", "Tarragona", "Espanya", "Poble Sec", "Paral·lel", "Drassanes", "Liceu", "Catalunya", "Passeig de Gràcia", "Diagonal / Provença", "Fontana", "Lesseps", "Vallcarca", "Penitents", "Vall d'Hebron", "Montbau", "Mundet", "Valldaura", "Canyelles", "Roquetes", "Trinitat Nova"];
const l4 = ["Trinitat Nova", "Via Júlia", "Llucmajor", "Maragall", "Guinardó | Hospital de Sant Pau", "Alfons X", "Joanic", "Verdaguer", "Girona", "Passeig de Gràcia", "Urquinaona", "Jaume I", "Barceloneta", "Ciutadella | Vila Olímpica", "Bogatell", "Llacuna", "Poblenou", "Selva de Mar", "El Maresme | Fòrum", "Besòs Mar", "Besòs", "La Pau"];
const l5 = ["Cornellà Centre", "Gavarra", "Sant Ildefons", "Can Boixeres", "Can Vidalet", "Pubilla Cases", "Ernest Lluch", "Collblanc", "Badal", "Plaça de Sants", "Sants Estació", "Entença", "Hospital Clínic", "Diagonal / Provença", "Verdaguer", "Sagrada Família", "Sant Pau | Dos de Maig", "Camp de l'Arpa", "La Sagrera", "Congrés", "Maragall", "Virrei Amat", "Vilapicina", "Horta", "El Carmel", "El Coll | La Teixonera", "Vall d'Hebron"];
const l6 = ["Catalunya", "Diagonal / Provença", "Gràcia", "Sant Gervasi", "Muntaner", "La Bonanova", "Les Tres Torres", "Sarrià"];
const l7 = ["Catalunya", "Diagonal / Provença", "Gràcia", "Plaça Molina", "Pàdua", "El Putxet", "Avinguda Tibidabo"];
const l8 = ["Espanya", "Magòria-La Campana", "Ciutat de la Justícia / Ildefons Cerdà", "Europa | Fira", "Gornal", "Sant Josep", "Avinguda Carrilet", "Almeda", "Cornellà Riera", "Sant Boi", "Molí Nou | Ciutat Cooperativa"];
const l9n = ["La Sagrera", "Onze de Setembre", "Bon Pastor", "Can Peixauet", "Santa Rosa", "Fondo", "Església Major", "Singuerlín", "Can Zam"];
const l9s = ["Aeroport T1", "Aeroport T2", "Mas Blau", "Parc Nou", "Cèntric", "El Prat Estació", "Les Moreres", "Mercabarna", "Parc Logístic", "Fira", "Europa | Fira", "Can Tries | Gornal", "Torrassa", "Collblanc", "Zona Universitària"];
const l10n = ["La Sagrera", "Onze de Setembre", "Bon Pastor", "Llefià", "La Salut", "Gorg"];
const l10s = ["ZAL | Riu Vell", "Ecoparc", "Port Comercial | La Factoria", "Zona Franca", "Foc", "Foneria", "Ciutat de la Justícia / Ildefons Cerdà", "Provençana", "Can Tries | Gornal", "Torrassa", "Collblanc"];
const l11 = ["Trinitat Nova", "Casa de l'Aigua", "Torre Baró | Vallbona", "Ciutat Meridiana", "Can Cuiàs"];
const l12 = ["Sarrià", "Reina Elisenda"];

const lines = [l1, l2, l3, l4, l5, l6, l7, l8, l9n, l9s, l10n, l10s, l11, l12];

const zones = new Map([
  ['Ciutat Vella', ["Barceloneta", "Drassanes", "Jaume I", "Liceu", "Catalunya", "Sant Antoni", "Universitat", "Urquinaona", "Ciutadella | Vila Olímpica", "Paral·lel"]],
  ['Eixample', ["Catalunya", "Sant Antoni", "Universitat", "Urquinaona", "Arc de Triomf", "Diagonal / Provença", "Entença", "Girona", "Hospital Clínic", "Monumental", "Passeig de Gràcia", "Rocafort", "Sagrada Família", "Sant Pau | Dos de Maig", "Tetuan", "Verdaguer", "Marina", "Espanya", "Poble Sec", "Tarragona", "Urgell"]],
  ['Sants-Montjuïc', ["Paral·lel", "Espanya", "Poble Sec", "Tarragona", "Plaça del Centre", "Badal", "Ecoparc", "Foc", "Foneria", "Hostafrancs", "Magòria-La Campana", "Mercabarna", "Mercat Nou", "Parc Logístic", "Plaça de Sants", "Port Comercial | La Factoria", "Sants Estació", "ZAL | Riu Vell", "Zona Franca"]],
  ['Les Corts', ["Les Corts", "Maria Cristina", "Palau Reial", "Zona Universitària", "Ernest Lluch", "Plaça del Centre"]],
  ['Sarrià-Sant Gervasi', ["Gràcia", "Lesseps", "Avinguda Tibidabo", "La Bonanova", "Muntaner", "Pàdua", "Plaça Molina", "El Putxet", "Reina Elisenda", "Sant Gervasi", "Sarrià", "Les Tres Torres"]],
  ['Gràcia', ["Fontana", "Joanic", "Mundet", "Penitents", "Vallcarca", "El Coll | La Teixonera", "Gràcia", "Lesseps"]],
  ['Horta-Guinardó', ["El Coll | La Teixonera", "Alfons X", "El Carmel", "Guinardó | Hospital de Sant Pau", "Horta", "Montbau", "Vall d'Hebron", "Valldaura", "Maragall"]],
  ['Sant Andreu', ["Maragall", "Fabra i Puig", "Baró de Viver", "Bon Pastor", "Congrés", "Navas", "Onze de Setembre", "La Sagrera", "Sant Andreu", "Torras i Bages", "Trinitat Vella"]],
  ['Sant Martí', ["Ciutadella | Vila Olímpica", "Marina", "Bac de Roda", "Besòs", "Besòs Mar", "Bogatell", "Camp de l'Arpa", "Clot", "Encants", "Glòries", "Llacuna", "El Maresme | Fòrum", "La Pau", "Poblenou", "Sant Martí", "Selva de Mar"]],
  ['Nou Barris', ["Maragall", "Canyelles", "Casa de l'Aigua", "Ciutat Meridiana", "Llucmajor", "Roquetes", "Torre Baró | Vallbona", "Trinitat Nova", "Via Júlia", "Vilapicina", "Virrei Amat", "Fabra i Puig"]],
  ['Fora de Barcelona (costat Besòs)', ["Artigues | Sant Adrià", "Badalona Pompeu Fabra", "Gorg", "Llefià", "Pep Ventura", "La Salut", "Sant Roc", "Can Cuiàs", "Verneda", "Can Peixauet", "Can Zam", "Església Major", "Fondo", "Santa Coloma", "Santa Rosa", "Singuerlín"]],
  ['Baix Llobregat', ["Almeda", "Cornellà Centre", "Cornellà Riera", "Gavarra", "Sant Ildefons", "Aeroport T1", "Aeroport T2", "Cèntric", "Mas Blau", "Les Moreres", "Parc Nou", "El Prat Estació", "Can Boixeres", "Can Vidalet", "Molí Nou | Ciutat Cooperativa", "Sant Boi"]],
  ['L\'Hospitalet de Llobregat', ["Can Vidalet", "Avinguda Carrilet", "Bellvitge", "Can Serra", "Can Tries | Gornal", "Ciutat de la Justícia / Ildefons Cerdà", "Collblanc", "Europa | Fira", "Fira", "Florida", "Gornal", "Hospital de Bellvitge", "Provençana", "Pubilla Cases", "Rambla Just Oliveras", "Sant Josep", "Santa Eulàlia", "Torrassa", "Ernest Lluch"]],
])

const linesDict = new Map([
  ["L1", l1],
  ["L2", l2],
  ["L3", l3],
  ["L4", l4],
  ["L5", l5],
  ["L6", l6],
  ["L7", l7],
  ["L8", l8],
  ["L9N", l9n],
  ["L9S", l9s],
  ["L10N", l10n],
  ["L10S", l10s],
  ["L11", l11],
  ["L12", l12],
]);

/**
 * Wrapper that takes a normal test and returns one that considers stations with multiple names separately (e.g. Diagonal / Provença as Diagonal and Provença, separately).
 * If the test passes with either of those, it passes.
 */
const nameStar = test => candidates => {
  let multiverse = [[...candidates]];
  if (candidates.includes('Diagonal / Provença')) {
    multiverse = multiverse.flatMap(candidates => [
      candidates.map(candidate => candidate === 'Diagonal / Provença' ? 'Diagonal' : candidate),
      candidates.map(candidate => candidate === 'Diagonal / Provença' ? 'Provença' : candidate),
    ]);
  }
  if (candidates.includes('Ciutat de la Justícia / Ildefons Cerdà')) {
    multiverse = multiverse.flatMap(candidates => [
      candidates.map(candidate => candidate === 'Ciutat de la Justícia / Ildefons Cerdà' ? 'Ciutat de la Justícia' : candidate),
      candidates.map(candidate => candidate === 'Ciutat de la Justícia / Ildefons Cerdà' ? 'Ildefons Cerdà' : candidate),
    ]);
  }
  return multiverse.some(test);
};

const lowerCaseWithoutDiacritics = str => str
  .toLowerCase() // À -> à
  .normalize('NFD') // À -> Combination of A and `
  .replaceAll('ç'.normalize('NFD'), 'ç') // Recover ç as a single character so it doesn't get replaced by a c
  .replace(/\p{Diacritic}/gu, ''); // Remove all other diacritics

export default {
  "version": "1",
  "name": "Estacions de Metro de Barcelona",
  "items": [
    "Aeroport T1",
    "Aeroport T2",
    "Alfons X",
    "Almeda",
    "Arc de Triomf",
    "Artigues | Sant Adrià",
    "Avinguda Carrilet",
    "Avinguda Tibidabo",
    "Bac de Roda",
    "Badal",
    "Badalona Pompeu Fabra",
    "Barceloneta",
    "Baró de Viver",
    "Bellvitge",
    "Besòs",
    "Besòs Mar",
    "Bogatell",
    "Bon Pastor",
    "Camp de l'Arpa",
    "Can Boixeres",
    "Can Cuiàs",
    "Can Peixauet",
    "Can Serra",
    "Can Tries | Gornal",
    "Can Vidalet",
    "Can Zam",
    "Canyelles",
    "Casa de l'Aigua",
    "Catalunya",
    "Ciutadella | Vila Olímpica",
    "Ciutat Meridiana",
    "Ciutat de la Justícia / Ildefons Cerdà",
    "Clot",
    "Collblanc",
    "Congrés",
    "Cornellà Centre",
    "Cornellà Riera",
    "Cèntric",
    "Diagonal / Provença",
    "Drassanes",
    "Ecoparc",
    "El Carmel",
    "El Coll | La Teixonera",
    "El Maresme | Fòrum",
    "El Prat Estació",
    "El Putxet",
    "Encants",
    "Entença",
    "Ernest Lluch",
    "Església Major",
    "Espanya",
    "Europa | Fira",
    "Fabra i Puig",
    "Fira",
    "Florida",
    "Foc",
    "Fondo",
    "Foneria",
    "Fontana",
    "Gavarra",
    "Girona",
    "Glòries",
    "Gorg",
    "Gornal",
    "Gràcia",
    "Guinardó | Hospital de Sant Pau",
    "Horta",
    "Hospital Clínic",
    "Hospital de Bellvitge",
    "Hostafrancs",
    "Jaume I",
    "Joanic",
    "La Bonanova",
    "La Pau",
    "La Sagrera",
    "La Salut",
    "Les Corts",
    "Les Moreres",
    "Les Tres Torres",
    "Lesseps",
    "Liceu",
    "Llacuna",
    "Llefià",
    "Llucmajor",
    "Magòria-La Campana",
    "Maragall",
    "Maria Cristina",
    "Marina",
    "Mas Blau",
    "Mercabarna",
    "Mercat Nou",
    "Molí Nou | Ciutat Cooperativa",
    "Montbau",
    "Monumental",
    "Mundet",
    "Muntaner",
    "Navas",
    "Onze de Setembre",
    "Palau Reial",
    "Paral·lel",
    "Parc Logístic",
    "Parc Nou",
    "Passeig de Gràcia",
    "Penitents",
    "Pep Ventura",
    "Plaça Molina",
    "Plaça de Sants",
    "Plaça del Centre",
    "Poble Sec",
    "Poblenou",
    "Port Comercial | La Factoria",
    "Provençana",
    "Pubilla Cases",
    "Pàdua",
    "Rambla Just Oliveras",
    "Reina Elisenda",
    "Rocafort",
    "Roquetes",
    "Sagrada Família",
    "Sant Andreu",
    "Sant Antoni",
    "Sant Boi",
    "Sant Gervasi",
    "Sant Ildefons",
    "Sant Josep",
    "Sant Martí",
    "Sant Pau | Dos de Maig",
    "Sant Roc",
    "Santa Coloma",
    "Santa Eulàlia",
    "Santa Rosa",
    "Sants Estació",
    "Sarrià",
    "Selva de Mar",
    "Singuerlín",
    "Tarragona",
    "Tetuan",
    "Torras i Bages",
    "Torrassa",
    "Torre Baró | Vallbona",
    "Trinitat Nova",
    "Trinitat Vella",
    "Universitat",
    "Urgell",
    "Urquinaona",
    "Vall d'Hebron",
    "Vallcarca",
    "Valldaura",
    "Verdaguer",
    "Verneda",
    "Via Júlia",
    "Vilapicina",
    "Virrei Amat",
    "ZAL | Riu Vell",
    "Zona Franca",
    "Zona Universitària"
  ],
  "stars": [
    {
      "title": "Estan a una mateixa línia",
      "test": candidates => {
        for (const line of lines) {
          if (candidates.every(candidate => line.includes(candidate))) return true;
        }
        return false;
      }
    },
    {
      "title": "No tenen cap línia en comú",
      "test": candidates => {
        const sets = candidates.map(candidate => new Set([...linesDict.keys()].filter(key => linesDict.get(key).includes(candidate))));
        const nrOfLines = sets.reduce((acc, cur) => acc + cur.size, 0);
        return nrOfLines === sets.reduce((acc, cur) => acc.union(cur)).size;
      }
    },
    {
      "title": "Sumen sis o més línies diferents",
      "test": candidates => {
        const sets = candidates.map(candidate => new Set([...linesDict.keys()].filter(key => linesDict.get(key).includes(candidate))));
        return sets.reduce((acc, cur) => acc.union(cur)).size >= 6;
      }
    },
    {
      "title": "Estan a la mateixa zona (districte, Hospitalet, Baix Llobregat, o costat Besòs)",
      "test": candidates => {
        for (const zone of zones.values()) {
          if (candidates.every(candidate => zone.includes(candidate))) return true;
        }
        return false;
      }
    },
    {
      "title": "Estan totes a zones diferents (districte, Hospitalet, Baix Llobregat, o costat Besòs)",
      "test": candidates => {
        const sets = candidates.map(candidate => new Set([...zones.keys()].filter(key => zones.get(key).includes(candidate))));
        const nrOfZones = sets.reduce((acc, cur) => acc + cur.size, 0);
        return nrOfZones === sets.reduce((acc, cur) => acc.union(cur)).size;
      }
    },
    {
      "title": "Comencen amb la mateixa lletra o xifra",
      "test": nameStar(candidates => candidates
        .map(candidate => lowerCaseWithoutDiacritics(candidate[0]))
        .every((value, _, array) => value === array[0]))
    },
    {
      "title": "Acaben amb la mateixa lletra o xifra",
      "test": nameStar(candidates => candidates
        .map(candidate => lowerCaseWithoutDiacritics(candidate[candidate.length - 1]))
        .every((value, _, array) => value === array[0]))
    },
    {
      "title": "No tenen cap vocal en comú entre elles",
      "test": nameStar(candidates => {
        const sets = candidates.map(candidate => new Set(
          lowerCaseWithoutDiacritics(candidate)
          .replace(/[^aeiou]/g, '') // Remove consonants
        ));
        const nrOfVowels = sets.reduce((acc, cur) => acc + cur.size, 0);
        return nrOfVowels === sets.reduce((acc, cur) => acc.union(cur)).size;
      })
    },
    {
      "title": "Tenen tres o més lletres o xifres en comú",
      "test": nameStar(candidates => {
        const sets = candidates.map(candidate => new Set(
          lowerCaseWithoutDiacritics(candidate)
          .replace(/\|\-\s/g, '') // Remove non letters or numbers
        ));
        return sets.reduce((acc, cur) => acc.intersection(cur)).size >= 3;
      })
    },
  ],
  "categories": [
    {
      "name": "L1",
      "members": l1
    },
    {
      "name": "L2",
      "members": l2
    },
    {
      "name": "L3",
      "members": l3
    },
    {
      "name": "L4",
      "members": l4
    },
    {
      "name": "L5",
      "members": l5
    },
    {
      "name": "L6 o L12",
      "members": l6.concat("Reina Elisenda")
    },
    {
      "name": "L7",
      "members": l7
    },
    {
      "name": "L8",
      "members": l8
    },
    {
      "name": "L9 Nord",
      "members": l9n
    },
    {
      "name": "L9 Sud",
      "members": l9s
    },
    {
      "name": "L10 Nord",
      "members": l10n
    },
    {
      "name": "L10 Sud",
      "members": l10s
    },
    {
      "name": "L11",
      "members": l11
    },
    {
      "name": "Té múltiples línies",
      "members": ["Avinguda Carrilet", "Torrassa", "Plaça de Sants", "Espanya", "Universitat", "Catalunya", "Urquinaona", "Clot", "La Sagrera", "Fondo", "Paral·lel", "Passeig de Gràcia", "Sagrada Família", "La Pau", "Gorg", "Zona Universitària", "Sants Estació", "Diagonal / Provença", "Vall d'Hebron", "Trinitat Nova", "Maragall", "Verdaguer", "Collblanc", "Gràcia", "Sarrià", "Ciutat de la Justícia / Ildefons Cerdà", "Europa | Fira", "Onze de Setembre", "Bon Pastor", "Can Tries | Gornal"]
    },
    {
      "name": "Connecta amb tramvia",
      "members": ["Cornellà Centre", "Ernest Lluch", "Zona Universitària", "Palau Reial", "Maria Cristina", "Ciutadella | Vila Olímpica", "Marina", "Glòries", "Selva de Mar", "El Maresme | Fòrum", "Besòs", "Sant Roc", "Gorg"]
    },
    {
      "name": "Conté un nom de sant o santa",
      "members": ["Sant Andreu", "Sant Antoni", "Sant Boi", "Sant Gervasi", "Sant Ildefons", "Sant Josep", "Sant Martí", "Sant Pau | Dos de Maig", "Sant Roc", "Santa Coloma", "Santa Eulàlia", "Santa Rosa", "Artigues | Sant Adrià", "Guinardó | Hospital de Sant Pau"]
    },
    {
      "name": "Solució Barcelona",
      "members": ["Avinguda Tibidabo", "Catalunya", "Clot", "Fabra i Puig", "Glòries", "La Bonanova", "Muntaner", "Navas", "Sant Andreu"]
    },
    {
      "name": "Punt TMB",
      "members": ["Diagonal / Provença", "La Sagrera", "Sagrada Família", "Universitat"]
    },
    {
      "name": "Té alguna línia o transbordament no accesible",
      "members": ["Plaça de Sants", "Espanya", "Urquinaona", "Clot", "Verdaguer", "Ciutadella | Vila Olímpica", "Virrei Amat", "Maragall", "Catalunya", "Passeig de Gràcia"]
    },
    {
      "name": "Ciutat Vella",
      "members": zones.get('Ciutat Vella')
    },
    {
      "name": "Eixample",
      "members": zones.get('Eixample')
    },
    {
      "name": "Sants-Montjuïc",
      "members": zones.get('Sants-Montjuïc')
    },
    {
      "name": "Les Corts",
      "members": zones.get('Les Corts')
    },
    {
      "name": "Sarrià-Sant Gervasi",
      "members": zones.get('Sarrià-Sant Gervasi')
    },
    {
      "name": "Gràcia",
      "members": zones.get('Gràcia')
    },
    {
      "name": "Horta-Guinardó",
      "members": zones.get('Horta-Guinardó')
    },
    {
      "name": "Sant Andreu",
      "members": zones.get('Sant Andreu')
    },
    {
      "name": "Sant Martí",
      "members": zones.get('Sant Martí')
    },
    {
      "name": "Nou Barris",
      "members": zones.get('Nou Barris')
    },
    {
      "name": "Fora de Barcelona (costat Besòs)",
      "members": zones.get('Fora de Barcelona (costat Besòs)')
    },
    {
      "name": "Baix Llobregat",
      "members": zones.get('Baix Llobregat')
    },
    {
      "name": "L'Hospitalet de Llobregat",
      "members": zones.get('L\'Hospitalet de Llobregat')
    },
    {
      "name": "Final de línia",
      "members": ["Hospital de Bellvitge", "Fondo", "Paral·lel", "Badalona Pompeu Fabra", "Zona Universitària", "Trinitat Nova", "La Pau", "Cornellà Centre", "Vall d'Hebron", "Catalunya", "Sarrià", "Avinguda Tibidabo", "Espanya", "Molí Nou | Ciutat Cooperativa", "La Sagrera", "Can Zam", "Aeroport T1", "Zona Universitària", "Gorg", "ZAL | Riu Vell", "Collblanc", "Can Cuiàs", "Reina Elisenda"]
    },
    {
      "name": "Oberta abans del 1970",
      "members": ["Sant Boi", "Lesseps", "Fontana", "Liceu", "Catalunya", "Espanya", "Hostafrancs", "Mercat Nou", "Plaça de Sants", "Rocafort", "Universitat", "Urgell", "Jaume I", "Gràcia", "Muntaner", "Diagonal / Provença", "Sant Gervasi", "Arc de Triomf", "Santa Eulàlia", "Urquinaona", "Marina", "Clot", "Glòries", "La Bonanova", "Les Tres Torres", "Navas", "Avinguda Tibidabo", "Pàdua", "Plaça Molina", "El Putxet", "La Sagrera", "Fabra i Puig", "Congrés", "Vilapicina", "Virrei Amat", "Horta", "Molí Nou | Ciutat Cooperativa", "Sant Andreu", "Torras i Bages", "Drassanes", "Badal", "Entença", "Hospital Clínic"]
    },
    {
      "name": "Oberta entre 1970 i 1999",
      "members": ["Camp de l'Arpa", "Sant Pau | Dos de Maig", "Girona", "Joanic", "Verdaguer", "Pubilla Cases", "Alfons X", "Guinardó | Hospital de Sant Pau", "Sarrià", "Les Corts", "Maria Cristina", "Palau Reial", "Plaça del Centre", "Sants Estació", "Zona Universitària", "Poble Sec", "Tarragona", "Barceloneta", "Reina Elisenda", "Can Boixeres", "Can Vidalet", "Sant Ildefons", "Magòria-La Campana", "Bogatell", "Ciutadella | Vila Olímpica", "Llacuna", "Poblenou", "Selva de Mar", "Llucmajor", "Maragall", "Via Júlia", "Besòs", "Besòs Mar", "Baró de Viver", "Santa Coloma", "Trinitat Vella", "Cornellà Centre", "Gavarra", "Torrassa", "Artigues | Sant Adrià", "Gorg", "Pep Ventura", "Sant Roc", "Verneda", "Almeda", "Cornellà Riera", "Sant Josep", "Montbau", "Penitents", "Vall d'Hebron", "Vallcarca", "Gornal", "Ciutat de la Justícia / Ildefons Cerdà", "Avinguda Carrilet", "Can Serra", "Florida", "Rambla Just Oliveras", "Bellvitge", "Hospital de Bellvitge", "Fondo", "Monumental", "Passeig de Gràcia", "Sagrada Família", "Sant Antoni", "Tetuan", "Paral·lel", "Bac de Roda", "Encants", "La Pau", "Sant Martí", "Trinitat Nova", "Collblanc"]
    },
    {
      "name": "Oberta al segle XXI",
      "members": ["Canyelles", "Mundet", "Valldaura", "El Maresme | Fòrum", "Can Cuiàs", "Casa de l'Aigua", "Ciutat Meridiana", "Torre Baró | Vallbona", "Europa | Fira", "Roquetes", "Can Peixauet", "Can Zam", "Església Major", "Singuerlín", "Bon Pastor", "Llefià", "La Salut", "Onze de Setembre", "Badalona Pompeu Fabra", "El Carmel", "El Coll | La Teixonera", "Santa Rosa", "Aeroport T1", "Aeroport T2", "Can Tries | Gornal", "Cèntric", "Fira", "Mas Blau", "Mercabarna", "Les Moreres", "Parc Logístic", "Parc Nou", "El Prat Estació", "Foc", "Foneria", "Provençana", "Zona Franca", "Ernest Lluch", "Ecoparc", "Port Comercial | La Factoria", "ZAL | Riu Vell"]
    },
    {
      "name": "Més de 5 milions d'usuaris anuals",
      "members": ["Catalunya", "Espanya", "Diagonal / Provença", "Sagrada Família", "La Sagrera", "Sants Estació", "Passeig de Gràcia", "Paral·lel", "Universitat", "Urquinaona", "Collblanc", "Clot", "Hospital Clínic", "Glòries", "Liceu", "Fabra i Puig"]
    },
    {
      "name": "Entre 1 i 5 milions d'usuaris anuals",
      "members": ["Avinguda Carrilet", "Europa | Fira", "Verdaguer", "Arc de Triomf", "Plaça de Sants", "Barceloneta", "Santa Eulàlia", "Fondo", "Torrassa", "Lesseps", "Pubilla Cases", "Joanic", "Jaume I", "Sarrià", "Sant Andreu", "Badalona Pompeu Fabra", "Fontana", "Poble Sec", "Rocafort", "Sant Pau | Dos de Maig", "Badal", "Artigues | Sant Adrià", "Drassanes", "Sant Antoni", "Marina", "Maragall", "Urgell", "Can Vidalet", "Santa Coloma", "Gràcia", "Entença", "Vall d'Hebron", "Sant Ildefons", "Llucmajor", "Cornellà Centre", "Virrei Amat", "Sant Martí", "Poblenou", "Maria Cristina", "Alfons X", "El Maresme | Fòrum", "Ciutadella | Vila Olímpica", "Palau Reial", "El Carmel", "Zona Universitària", "Camp de l'Arpa", "Vallcarca", "Bac de Roda", "Muntaner", "Torras i Bages", "Horta", "Via Júlia", "Florida", "Florida", "La Pau", "Navas", "Tetuan", "Les Corts", "Llacuna", "Rambla Just Oliveras", "Vilapicina", "Encants", "Sant Boi", "Mundet", "Bellvitge", "Ernest Lluch", "Monumental", "Guinardó | Hospital de Sant Pau", "Can Serra", "Gorg", "Pep Ventura", "Hostafrancs", "La Salut", "Besòs Mar", "Selva de Mar", "Sant Roc", "Trinitat Nova", "Mercat Nou", "Girona", "El Putxet", "Plaça del Centre", "Cornellà Riera", "Avinguda Tibidabo", "El Coll | La Teixonera", "Bogatell", "Hospital de Bellvitge", "Bon Pastor", "Aeroport T1", "Gavarra", "Canyelles", "Trinitat Vella", "Llefià", "Congrés", "Roquetes", "Ciutat de la Justícia / Ildefons Cerdà", "Montbau", "Tarragona", "Almeda", "Cèntric", "Penitents", "Can Boixeres", "Valldaura"]
    },
    {
      "name": "Menys d'1 milió d'usuaris anuals",
      "members": ["Besòs", "Santa Rosa", "Can Peixauet", "Sant Josep", "Les Tres Torres", "Les Moreres", "Onze de Setembre", "Foneria", "La Bonanova", "Molí Nou | Ciutat Cooperativa", "Can Tries | Gornal", "Singuerlín", "Gornal", "Pàdua", "Mercabarna", "Provençana", "Magòria-La Campana", "Foc", "El Prat Estació", "Verneda", "Fira", "Sant Gervasi", "Aeroport T2", "Plaça Molina", "Ciutat Meridiana", "Parc Nou", "Reina Elisenda", "Baró de Viver", "Mas Blau", "Can Zam", "ZAL | Riu Vell", "Església Major", "Torre Baró | Vallbona", "Can Cuiàs", "Parc Logístic", "Zona Franca", "Ecoparc", "Port Comercial | La Factoria", "Casa de l'Aigua"]
    },
    {
      "name": "Connecta amb una estació de Rodalies",
      "members": ["Aeroport T2", "Arc de Triomf", "Barceloneta", "Catalunya", "Clot", "Cornellà Centre", "El Prat Estació", "Fabra i Puig", "La Sagrera", "Passeig de Gràcia", "Rambla Just Oliveras", "Sant Andreu", "Sants Estació", "Torre Baró | Vallbona"]
    },
    {
      "name": "Nom en una sola paraula",
      "members": ["Almeda", "Badal", "Barceloneta", "Bellvitge", "Besòs", "Bogatell", "Canyelles", "Catalunya", "Cèntric", "Clot", "Collblanc", "Congrés", "Diagonal / Provença", "Drassanes", "Ecoparc", "Encants", "Entença", "Espanya", "Fira", "Florida", "Foc", "Fondo", "Foneria", "Fontana", "Gavarra", "Girona", "Glòries", "Gorg", "Gornal", "Gràcia", "Horta", "Hostafrancs", "Joanic", "Lesseps", "Liceu", "Llacuna", "Llefià", "Llucmajor", "Maragall", "Marina", "Mercabarna", "Montbau", "Monumental", "Mundet", "Muntaner", "Navas", "Pàdua", "Paral·lel", "Penitents", "Poblenou", "Provençana", "Rocafort", "Roquetes", "Sarrià", "Singuerlín", "Tarragona", "Tetuan", "Torrassa", "Universitat", "Urgell", "Urquinaona", "Vallcarca", "Valldaura", "Verdaguer", "Verneda", "Vilapicina"]
    },
    {
      "name": "Nom en més d'una paraula",
      "members": ["Aeroport T1", "Aeroport T2", "Alfons X", "Arc de Triomf", "Artigues | Sant Adrià", "Avinguda Carrilet", "Avinguda Tibidabo", "Bac de Roda", "Badalona Pompeu Fabra", "Baró de Viver", "Besòs Mar", "Bon Pastor", "Camp de l'Arpa", "Can Boixeres", "Can Cuiàs", "Can Peixauet", "Can Serra", "Can Tries | Gornal", "Can Vidalet", "Can Zam", "Casa de l'Aigua", "Ciutadella | Vila Olímpica", "Ciutat Meridiana", "Ciutat de la Justícia / Ildefons Cerdà", "Cornellà Centre", "Cornellà Riera", "El Carmel", "El Coll | La Teixonera", "El Maresme | Fòrum", "El Prat Estació", "El Putxet", "Ernest Lluch", "Església Major", "Europa | Fira", "Fabra i Puig", "Guinardó | Hospital de Sant Pau", "Hospital Clínic", "Hospital de Bellvitge", "Jaume I", "La Bonanova", "La Pau", "La Sagrera", "La Salut", "Les Corts", "Les Moreres", "Les Tres Torres", "Magòria-La Campana", "Maria Cristina", "Mas Blau", "Mercat Nou", "Molí Nou | Ciutat Cooperativa", "Onze de Setembre", "Palau Reial", "Parc Logístic", "Parc Nou", "Passeig de Gràcia", "Pep Ventura", "Plaça Molina", "Plaça de Sants", "Plaça del Centre", "Poble Sec", "Port Comercial | La Factoria", "Pubilla Cases", "Rambla Just Oliveras", "Reina Elisenda", "Sagrada Família", "Sant Andreu", "Sant Antoni", "Sant Boi", "Sant Gervasi", "Sant Ildefons", "Sant Josep", "Sant Martí", "Sant Pau | Dos de Maig", "Sant Roc", "Santa Coloma", "Santa Eulàlia", "Santa Rosa", "Sants Estació", "Selva de Mar", "Torras i Bages", "Torre Baró | Vallbona", "Trinitat Nova", "Trinitat Vella", "Vall d'Hebron", "Via Júlia", "Virrei Amat", "ZAL | Riu Vell", "Zona Franca", "Zona Universitària"]
    },
    {
      "name": "Acaba en A",
      "members": ["Almeda", "Artigues | Sant Adrià", "Bac de Roda", "Badalona Pompeu Fabra", "Barceloneta", "La Bonanova", "Camp de l'Arpa", "Can Serra", "Casa de l'Aigua", "Catalunya", "Ciutadella | Vila Olímpica", "Ciutat de la Justícia / Ildefons Cerdà", "Ciutat Meridiana", "El Coll | La Teixonera", "Cornellà Riera", "Entença", "Espanya", "Europa | Fira", "Fira", "Florida", "Foneria", "Fontana", "Gavarra", "Girona", "Gràcia", "Horta", "Llacuna", "Llefià", "Magòria-La Campana", "Maria Cristina", "Marina", "Mercabarna", "Molí Nou | Ciutat Cooperativa", "Pàdua", "Passeig de Gràcia", "Pep Ventura", "Plaça Molina", "Port Comercial | La Factoria", "Diagonal / Provença", "Provençana", "Reina Elisenda", "Sagrada Família", "La Sagrera", "Santa Coloma", "Santa Eulàlia", "Santa Rosa", "Sarrià", "Tarragona", "Torrassa", "Torre Baró | Vallbona", "Trinitat Nova", "Trinitat Vella", "Urquinaona", "Vallcarca", "Valldaura", "Verneda", "Via Júlia", "Vilapicina", "Zona Franca", "Zona Universitària"]
    },
    {
      "name": "Conté algun accent",
      "members": ["Artigues | Sant Adrià", "Baró de Viver", "Besòs", "Besòs Mar", "Can Cuiàs", "Ciutadella | Vila Olímpica", "Ciutat de la Justícia / Ildefons Cerdà", "Congrés", "Cornellà Centre", "Cornellà Riera", "Cèntric", "El Maresme | Fòrum", "El Prat Estació", "Església Major", "Glòries", "Gràcia", "Guinardó | Hospital de Sant Pau", "Hospital Clínic", "Llefià", "Magòria-La Campana", "Molí Nou | Ciutat Cooperativa", "Parc Logístic", "Passeig de Gràcia", "Pàdua", "Sagrada Família", "Sant Martí", "Santa Eulàlia" ,"Sants Estació", "Sarrià", "Singuerlín", "Torre Baró | Vallbona", "Via Júlia", "Zona Universitària"]
    },
    {
      "name": "Menys de 8 lletres o xifres",
      "members": ["Foc", "Clot", "Fira", "Gorg", "Badal", "Besòs", "Fondo", "Horta", "La Pau", "Liceu", "Navas", "Pàdua", "Almeda", "Can Zam", "Girona", "Gornal", "Gràcia", "Jaume I", "Joanic", "Llefià", "Marina", "Mundet", "Sarrià", "Tetuan", "Urgell", "Alfons X", "Congrés", "Cèntric", "Ecoparc", "Encants", "Entença", "Espanya", "Florida", "Foneria", "Fontana", "Gavarra", "Glòries", "La Salut", "Lesseps", "Llacuna", "Mas Blau", "Montbau", "Parc Nou", "Sant Boi", "Sant Roc", "Verneda"]
    },
    {
      "name": "Entre 8 i 10 lletres o xifres",
      "members": ["Besòs Mar", "Bogatell", "Can Cuiàs", "Can Serra", "Diagonal / Provença", "El Carmel", "El Putxet", "Les Corts", "Maragall", "Muntaner", "Paral·lel", "Poble Sec", "Poblenou", "Rocafort", "Roquetes", "Torrassa", "Via Júlia", "Bac de Roda", "Bellvitge", "Bon Pastor", "Canyelles", "Catalunya", "Collblanc", "Drassanes", "La Sagrera", "Llucmajor", "Mercat Nou", "Penitents", "Sant Josep", "Sant Martí", "Santa Rosa", "Tarragona", "Vallcarca", "Valldaura", "Verdaguer", "Aeroport T1", "Aeroport T2", "Can Vidalet", "Europa | Fira", "Fabra i Puig", "La Bonanova", "Les Moreres", "Mercabarna", "Monumental", "Palau Reial", "Pep Ventura", "Provençana", "Sant Andreu", "Sant Antoni", "Selva de Mar", "Singuerlín", "Urquinaona", "Vilapicina", "Virrei Amat", "ZAL | Riu Vell", "Zona Franca"]
    },
    {
      "name": "Més de 10 lletres o xifres",
      "members": ["Arc de Triomf", "Barceloneta", "Baró de Viver", "Can Boixeres", "Can Peixauet", "Ernest Lluch", "Hostafrancs", "Plaça Molina", "Sant Gervasi", "Santa Coloma", "Universitat", "Camp de l'Arpa", "Parc Logístic", "Plaça de Sants", "Pubilla Cases", "Sant Ildefons", "Santa Eulàlia", "Sants Estació", "Torras i Bages", "Trinitat Nova", "Vall d'Hebron", "Casa de l'Aigua", "Cornellà Riera", "El Prat Estació", "Església Major", "Les Tres Torres", "Maria Cristina", "Reina Elisenda", "Trinitat Vella", "Can Tries | Gornal", "Cornellà Centre", "El Maresme | Fòrum", "Hospital Clínic", "Onze de Setembre", "Plaça del Centre", "Sagrada Família", "Ciutat Meridiana", "Passeig de Gràcia", "Avinguda Carrilet", "Avinguda Tibidabo", "Magòria-La Campana", "Sant Pau | Dos de Maig", "Artigues | Sant Adrià", "El Coll | La Teixonera", "Torre Baró | Vallbona", "Zona Universitària", "Rambla Just Oliveras", "Badalona Pompeu Fabra", "Hospital de Bellvitge", "Ciutadella | Vila Olímpica", "Port Comercial | La Factoria", "Molí Nou | Ciutat Cooperativa", "Guinardó | Hospital de Sant Pau", "Ciutat de la Justícia / Ildefons Cerdà"]
    },
    {
      "name": "A més de 700 metres de qualsevol altra estació",
      "members": ["Magòria-La Campana", "Almeda", "Sant Boi", "Molí Nou | Ciutat Cooperativa", "Hospital de Bellvitge", "Fabra i Puig", "Sant Andreu", "Verneda", "Artigues | Sant Adrià", "Badalona Pompeu Fabra", "Diagonal / Provença", "Penitents", "Valldaura", "Canyelles", "Ciutadella | Vila Olímpica", "Joanic", "Alfons X", "Llucmajor", "Gavarra", "Aeroport T1", "Aeroport T2", "Mas Blau", "Parc Nou", "Cèntric", "El Prat Estació", "Les Moreres", "Mercabarna", "Parc Logístic", "Fira", "Onze de Setembre", "Bon Pastor", "ZAL | Riu Vell", "Ecoparc", "Port Comercial | La Factoria", "Zona Franca"]
    },
    {
      "name": "Té tres o més estacions a menys de 700 metres",
      "members": ["Gràcia", "Sant Gervasi", "Muntaner", "Plaça Molina", "Pàdua", "Can Serra", "Florida", "Mercat Nou", "Plaça de Sants", "Hostafrancs", "Espanya", "Rocafort", "Urgell", "Universitat", "Catalunya", "Urquinaona", "Clot", "Navas", "Sant Antoni", "Passeig de Gràcia", "Tetuan", "Encants", "Sants Estació", "Tarragona", "Fontana", "Lesseps", "Jaume I", "Girona", "Entença", "Sant Pau | Dos de Maig", "Camp de l'Arpa", "Can Tries | Gornal", "Llefià", "Santa Rosa"]
    },
    {
      "name": "A més de 7 quilòmetres de Catalunya",
      "members": ["Almeda", "Cornellà Riera", "Sant Boi", "Molí Nou | Ciutat Cooperativa", "Hospital de Bellvitge", "Trinitat Vella", "Baró de Viver", "Santa Coloma", "Fondo", "Sant Roc", "Gorg", "Pep Ventura", "Badalona Pompeu Fabra", "Cornellà Centre", "Gavarra", "Sant Ildefons", "Aeroport T1", "Aeroport T2", "Mas Blau", "Parc Nou", "Cèntric", "El Prat Estació", "Les Moreres", "Mercabarna", "Llefià", "La Salut", "Can Peixauet", "Santa Rosa", "Església Major", "Singuerlín", "Can Zam", "ZAL | Riu Vell", "Casa de l'Aigua", "Torre Baró | Vallbona", "Ciutat Meridiana", "Can Cuiàs"]
    },
    {
      "name": "A menys de 2 quilòmetres del mar",
      "members": ["ZAL | Riu Vell", "Ecoparc", "Port Comercial | La Factoria", "Zona Franca", "Foc", "Foneria", "Fira", "Parc Logístic", "Aeroport T1", "Poble Sec", "Paral·lel", "Drassanes", "Liceu", "Sant Antoni", "Urgell", "Universitat", "Catalunya", "Jaume I", "Barceloneta", "Urquinaona", "Passeig de Gràcia", "Girona", "Tetuan", "Arc de Triomf", "Marina", "Glòries", "Ciutadella | Vila Olímpica", "Bogatell", "Llacuna", "Poblenou", "Selva de Mar", "El Maresme | Fòrum", "Besòs Mar", "Besòs", "La Pau", "Artigues | Sant Adrià", "Sant Roc", "Gorg", "Pep Ventura", "Badalona Pompeu Fabra", "La Salut"]
    },
    {
      "name": "Conté el nom d'un personatge",
      "members": ["Alfons X", "Almeda", "Artigues | Sant Adrià", "Bac de Roda", "Badalona Pompeu Fabra", "Baró de Viver", "Bon Pastor", "Can Boixeres", "Can Cuiàs", "Can Peixauet", "Can Serra", "Can Tries | Gornal", "Can Vidalet", "Can Zam", "Ciutat de la Justícia / Ildefons Cerdà", "Entença", "Ernest Lluch", "Fabra i Puig", "Guinardó | Hospital de Sant Pau", "Jaume I", "Joanic", "Lesseps", "Maragall", "Maria Cristina", "Mundet", "Muntaner", "Pep Ventura", "Plaça Molina", "Provençana", "Pubilla Cases", "Rambla Just Oliveras", "Reina Elisenda", "Rocafort", "Sant Andreu", "Sant Antoni", "Sant Boi", "Sant Gervasi", "Sant Ildefons", "Sant Josep", "Sant Martí", "Sant Pau | Dos de Maig", "Sant Roc", "Santa Coloma", "Santa Eulàlia", "Santa Rosa", "Torras i Bages", "Torre Baró | Vallbona", "Urgell", "Urquinaona", "Verdaguer", "Verneda", "Via Júlia", "Virrei Amat"]
    },
    {
      "name": "Conté un article (incl. apostrofat o contret)",
      "members": ["Camp de l'Arpa", "Can Boixeres", "Can Cuiàs", "Can Peixauet", "Can Serra", "Can Tries | Gornal", "Can Vidalet", "Can Zam", "Casa de l'Aigua", "Ciutat de la Justícia / Ildefons Cerdà", "El Carmel", "El Coll | La Teixonera", "El Maresme | Fòrum", "El Prat Estació", "El Putxet", "La Bonanova", "La Pau", "La Sagrera", "La Salut", "Les Corts", "Les Moreres", "Les Tres Torres", "Magòria-La Campana", "Plaça del Centre", "Poble Sec", "Port Comercial | La Factoria"]
    },
    {
      "name": "Conté la preposició \"de\" (incl. apostrofada o contreta)",
      "members": ["Arc de Triomf", "Bac de Roda", "Baró de Viver", "Camp de l'Arpa", "Casa de l'Aigua", "Catalunya", "Ciutat de la Justícia / Ildefons Cerdà", "Guinardó | Hospital de Sant Pau", "Hospital de Bellvitge", "Onze de Setembre", "Passeig de Gràcia", "Plaça de Sants", "Plaça del Centre", "Sant Pau | Dos de Maig", "Selva de Mar", "Vall d'Hebron"]
    },
    {
      "name": "Conté un topònim que no és el del barri o localitat on es troba",
      "members": ["Canyelles", "Catalunya", "Diagonal / Provença", "El Maresme | Fòrum", "Espanya", "Europa | Fira", "Florida", "Gavarra", "Girona", "Llucmajor", "Navas", "Pàdua", "Roquetes", "Selva de Mar", "Tarragona", "Tetuan", "Urgell"]
    },
    {
      "name": "No té lletres repetides",
      "members": ["Alfons X", "Clot", "Congrés", "Fira", "Florida", "Foc", "Foneria", "Girona", "Glòries", "Gornal", "Horta", "Jaume I", "Joanic", "Liceu", "Mercat Nou", "Montbau", "Mundet", "Parc Nou", "Sant Boi", "Sant Roc"]
    },
    {
      "name": "Conté un nom comú",
      "members": ["Aeroport T1", "Aeroport T2", "Arc de Triomf", "Artigues | Sant Adrià", "Avinguda Carrilet", "Avinguda Tibidabo", "Bac de Roda", "Baró de Viver", "Besòs Mar", "Bon Pastor", "Camp de l'Arpa", "Can Serra", "Casa de l'Aigua", "Ciutadella | Vila Olímpica", "Ciutat Meridiana", "Ciutat de la Justícia / Ildefons Cerdà", "Clot", "Congrés", "Cornellà Centre", "Cornellà Riera", "Diagonal / Provença", "Drassanes", "Ecoparc", "El Coll | La Teixonera", "El Maresme | Fòrum", "El Prat Estació", "Encants", "Església Major", "Europa | Fira", "Fira", "Foc", "Fondo", "Foneria", "Fontana", "Gavarra", "Glòries", "Gorg", "Gràcia", "Guinardó | Hospital de Sant Pau", "Horta", "Hospital Clínic", "Hospital de Bellvitge", "La Bonanova", "La Pau", "La Sagrera", "La Salut", "Les Corts", "Les Moreres", "Les Tres Torres", "Liceu", "Llacuna", "Magòria-La Campana", "Marina", "Mas Blau", "Mercat Nou", "Molí Nou | Ciutat Cooperativa", "Onze de Setembre", "Palau Reial", "Paral·lel", "Parc Logístic", "Parc Nou", "Passeig de Gràcia", "Penitents", "Pep Ventura", "Plaça Molina", "Plaça de Sants", "Plaça del Centre", "Poble Sec", "Poblenou", "Port Comercial | La Factoria", "Pubilla Cases", "Rambla Just Oliveras", "Reina Elisenda", "Rocafort", "Roquetes", "Sagrada Família", "Sant Pau | Dos de Maig", "Sant Roc", "Santa Coloma", "Santa Rosa", "Sants Estació", "Selva de Mar", "Torrassa", "Torre Baró | Vallbona", "Trinitat Nova", "Trinitat Vella", "Universitat", "Vall d'Hebron", "Vallcarca", "Valldaura", "Via Júlia", "Vilapicina", "Virrei Amat", "ZAL | Riu Vell", "Zona Franca", "Zona Universitària"]
    }
  ]
}
