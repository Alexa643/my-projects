import { useState, useMemo } from "react";
import {
  FaSearch,
  FaCalendarAlt,
  FaUser,
  FaFilter,
  FaClock,
  FaChevronDown,
  FaChevronUp,
  FaExchangeAlt,
} from "react-icons/fa";
import "./BlogPage.css";

const blogPosts = [
  {
    id: 1,
    title: "10 Trucuri Esențiale pentru Curățenia de Primăvară",
    excerpt:
      "Descoperiți secretele unei curățenii eficiente de primăvară care vă va transforma casa într-un spațiu fresh și organizat.",
    content:
      "Curățenia de primăvară nu trebuie să fie o corvoadă. Cu aceste 10 trucuri esențiale, veți putea transforma casa într-un spațiu curat și organizat în timp record. Începeți cu decluttering-ul - eliminați obiectele pe care nu le mai folosiți. Apoi, curățați de sus în jos, începând cu tavanele și luminile. Folosiți produse naturale precum bicarbonatul de sodiu și oțetul pentru o curățenie ecologică. Nu uitați să aerisiți bine fiecare cameră și să schimbați filtrele de aer. Organizați-vă într-un sistem care să vă permită să mențineți curățenia pe termen lung.",
    author: "Maria Popescu",
    date: "2024-03-15",
    category: "Sfaturi",
    readTime: "5 min",
    image: "/placeholder.svg",
    tags: ["primăvară", "organizare", "sfaturi"],
  },
  {
    id: 2,
    title: "Cum să Curățați Eficient Covoarele și Mochetele",
    excerpt:
      "Ghidul complet pentru întreținerea covoarelor și mochetelor, de la curățenia zilnică la tratamentele profunde.",
    content:
      "Covoarele și mochetele necesită o atenție specială pentru a-și păstra aspectul și durabilitatea. Aspirarea regulată este esențială - faceți-o cel puțin de două ori pe săptămână în zonele cu trafic intens. Pentru petele proaspete, acționați imediat cu o cârpă curată și apă rece. Evitați să frecați pata, ci tamponați-o ușor. Pentru curățenia profundă, folosiți un aspirator cu spălare sau apelați la servicii profesionale. Tratați petele persistente cu soluții specializate și nu uitați să testați orice produs nou pe o zonă nevăzută mai întâi.",
    author: "Ion Marinescu",
    date: "2024-03-10",
    category: "Ghiduri",
    readTime: "7 min",
    image: "/placeholder.svg",
    tags: ["covoare", "mochetă", "curățenie profundă"],
  },
  {
    id: 3,
    title: "Produse Ecologice vs Produse Chimice: Ce să Alegeți?",
    excerpt:
      "Analiză detaliată a avantajelor și dezavantajelor produselor de curățenie ecologice față de cele tradiționale.",
    content:
      "Alegerea între produsele ecologice și cele chimice tradiționale poate fi dificilă. Produsele ecologice sunt mai sigure pentru sănătate și mediu, fiind ideale pentru familiile cu copii și animale de companie. Acestea includ ingrediente naturale precum oțetul, bicarbonatul de sodiu și uleiurile esențiale. Pe de altă parte, produsele chimice pot fi mai eficiente pentru anumite tipuri de murdărie și bacterii. Soluția optimă este o combinație echilibrată: folosiți produse ecologice pentru curățenia zilnică și rezervați produsele chimice pentru situațiile care necesită o dezinfectare intensă.",
    author: "Ana Gheorghiu",
    date: "2024-03-05",
    category: "Sănătate",
    readTime: "6 min",
    image: "/placeholder.svg",
    tags: ["ecologic", "sănătate", "produse"],
  },
  {
    id: 4,
    title: "Organizarea Eficientă a Spațiilor de Depozitare",
    excerpt:
      "Transformați-vă spațiile de depozitare în zone funcționale și organizate cu aceste tehnici profesionale.",
    content:
      "Un spațiu de depozitare bine organizat poate face diferența în menținerea unei case curate. Începeți prin a grupa obiectele similare și etichetați toate cutiile și rafturile. Folosiți containere transparente pentru a vedea ușor conținutul. Amplasați obiectele folosite frecvent la înălțimea ochilor și cele mai puțin folosite sus sau jos. Creați zone dedicate pentru diferite categorii: produse de curățenie, unelte, decorațiuni sezoniere. Nu uitați să lăsați spațiu pentru ventilație și să verificați periodic starea obiectelor depozitate.",
    author: "Mihai Constantinescu",
    date: "2024-02-28",
    category: "Organizare",
    readTime: "4 min",
    image: "/placeholder.svg",
    tags: ["organizare", "depozitare", "eficiență"],
  },
  {
    id: 5,
    title: "Curățenia Biroului: Productivitate prin Ordine",
    excerpt:
      "Cum un birou curat și organizat poate îmbunătăți semnificativ productivitatea și starea de bine la locul de muncă.",
    content:
      "Un birou curat nu este doar plăcut vizual, ci contribuie direct la creșterea productivității. Începeți fiecare zi prin a vă organiza biroul - aranjați documentele, curățați monitorul și tastatura. Păstrați doar obiectele esențiale pe birou și folosiți organizatoare pentru rechizite. Curățați săptămânal suprafețele cu produse dezinfectante și nu uitați să aspirați sau să măturați zona din jurul biroului. Plantele pot îmbunătăți calitatea aerului și pot aduce o notă de prospețime în spațiul de lucru.",
    author: "Elena Radu",
    date: "2024-02-20",
    category: "Birou",
    readTime: "5 min",
    image: "/placeholder.svg",
    tags: ["birou", "productivitate", "organizare"],
  },
  {
    id: 6,
    title: "Întreținerea Aparatelor Electrocasnice",
    excerpt:
      "Ghid complet pentru întreținerea și curățarea aparatelor electrocasnice pentru o durată de viață mai lungă.",
    content:
      "Aparatele electrocasnice bine întreținute durează mai mult și funcționează mai eficient. Pentru frigider, curățați bobinele din spate lunar și verificați garniturile ușilor. Mașina de spălat necesită curățarea filtrului și rularea unui ciclu de curățare cu oțet lunar. Cuptorul trebuie curățat după fiecare utilizare intensă, iar filtrul de grăsimi de la hota trebuie spălat regulat. Nu uitați să deconectați aparatele de la curent înainte de curățare și să folosiți doar produse recomandate de producător.",
    author: "Gheorghe Ionescu",
    date: "2024-02-15",
    category: "Întreținere",
    readTime: "8 min",
    image: "/placeholder.svg",
    tags: ["electrocasnice", "întreținere", "durabilitate"],
  },
];

const categories = [
  "Toate",
  "Sfaturi",
  "Ghiduri",
  "Sănătate",
  "Organizare",
  "Birou",
  "Întreținere",
];
const sortOptions = [
  { value: "date-desc", label: "Cele mai recente" },
  { value: "date-asc", label: "Cele mai vechi" },
  { value: "title-asc", label: "Titlu A-Z" },
  { value: "title-desc", label: "Titlu Z-A" },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Toate");
  const [sortBy, setSortBy] = useState("date-desc");
  const [expandedCard, setExpandedCard] = useState(null);

  const filteredAndSortedPosts = useMemo(() => {
    const filtered = blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "Toate" || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "date-desc":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "date-asc":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "title-asc":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="blog-page">
      {/* Header Section */}
      <div className="blog-header">
        <h1 className="blog-title">Blog CleanPro</h1>
        <p className="blog-subtitle">
          Descoperiți sfaturi, ghiduri și trucuri pentru o curățenie perfectă
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="blog-controls">
        <div className="search-container">
          <div className="search-input-wrapper">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Căutați articole, sfaturi, ghiduri..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="filters-container">
          <div className="filter-group">
            <FaFilter className="filter-icon" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="category-select"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <FaExchangeAlt className="filter-icon" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results Counter */}
      <div className="results-counter">
        <span>{filteredAndSortedPosts.length} articole găsite</span>
      </div>

      {/* Blog Posts Grid */}
      <div className="blog-grid">
        {filteredAndSortedPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-card-image">
              <img src={post.image} alt={post.title} className="card-image" />
              <span className="category-badge">{post.category}</span>
            </div>

            <div className="blog-card-content">
              <div className="blog-card-meta">
                <div className="meta-item">
                  <FaCalendarAlt className="meta-icon" />
                  <span>{new Date(post.date).toLocaleDateString("ro-RO")}</span>
                </div>
                <div className="meta-item">
                  <FaClock className="meta-icon" />
                  <span>{post.readTime}</span>
                </div>
                <div className="meta-item">
                  <FaUser className="meta-icon" />
                  <span>{post.author}</span>
                </div>
              </div>

              <h3 className="blog-card-title">{post.title}</h3>

              <p className="blog-card-excerpt">{post.excerpt}</p>

              {expandedCard === post.id && (
                <div className="blog-card-expanded">
                  <p className="blog-card-content-text">{post.content}</p>
                  <div className="blog-card-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="tag-badge">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={() => toggleCard(post.id)}
                className="expand-button"
              >
                {expandedCard === post.id ? (
                  <>
                    <FaChevronUp className="expand-icon" />
                    Afișează mai puțin
                  </>
                ) : (
                  <>
                    <FaChevronDown className="expand-icon" />
                    Citește mai mult
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredAndSortedPosts.length === 0 && (
        <div className="no-results">
          <h3>Nu am găsit articole</h3>
          <p>
            Încercați să modificați termenii de căutare sau filtrele selectate.
          </p>
        </div>
      )}
    </div>
  );
}
