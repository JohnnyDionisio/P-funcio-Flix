/*-------- Estrutura de dados de mídias --------------*/

const midias = [
  { id: 1, titulo: "Spice and Wolf", sinopse: "", imagem: "SpiceAndWolf.webp", trailer: 'cGGKtSIQhFU', categoria: "Animações" },
  { id: 2, titulo: "Komi Can't Communicate", sinopse: "", imagem: "KomiCantCommunicate.webp", trailer: 'tLdLTSnmnoA', categoria: "Animações" },
  { id: 3, titulo: "Demon Slayer", sinopse: "", imagem: "DemonSlayer.webp", trailer: 'VQGCKyvzIM4', categoria: "Animações" },
  { id: 4, titulo: "Elementos", sinopse: "", imagem: "Elementos.webp", trailer: 'BydjQP2aFd0', categoria: "Animações" },
  { id: 5, titulo: "Zootopia", sinopse: "", imagem: "Zootopia.webp", trailer: 'ljBuf7PI0zM', categoria: "Animações" },
  { id: 6, titulo: "Os Sete Pecados Capitais", sinopse: "", imagem: "Os7Pecados.webp", trailer: 'ZfmOt6hmfks', categoria: "Animações" },
  { id: 7, titulo: "Ascendance of a Bookworm", sinopse: "", imagem: "Bookworm.webp", trailer: '_4Eqk4SNPIo', categoria: "Animações" },
  { id: 8, titulo: "Sakamoto Days", sinopse: "", imagem: "SakamotoDays.webp", trailer: 'f8NOmzN788w', categoria: "Animações" },
  { id: 9, titulo: "Suzume", sinopse: "", imagem: "Suzume.webp", trailer: 'fbtQ5KG4G_A', categoria: "Animações" },
  { id: 10, titulo: "Tatsu Imortal", sinopse: "", imagem: "TatsuImortal.webp", trailer: 'd1LRMvK_vGE', categoria: "Animações" },
  { id: 11, titulo: "Your Name", sinopse: "", imagem: "YourName.webp", trailer: 'soQXM3XVvIU', categoria: "Animações" },
  { id: 12, titulo: "Kaiju No. 8", sinopse: "", imagem: "Kaiju.webp", trailer: 'JwF7bhvnCxI', categoria: "Animações" },
  { id: 13, titulo: "Spy x Family", sinopse: "", imagem: "SpyXFamily.jpg", trailer: '0CJr6AfE2rY', categoria: "Animações" },
  { id: 14, titulo: "Shrek", sinopse: "", imagem: "Shrek.webp", trailer: 'ooJJX3R42WM', categoria: "Animações" },
  { id: 15, titulo: "Os Simpsons", sinopse: "", imagem: "Simpsons.webp", trailer: 'XPG0MqIcby8', categoria: "Animações" },
  { id: 16, titulo: "Sorte", sinopse: "", imagem: "Sorte.webp", trailer: 'dvsoW_ST8TQ', categoria: "Animações" },

  { id: 46, titulo: "Pacificador", sinopse: "", imagem: "Pacificador.webp", trailer: 'WHXq62VCaCM', categoria: "Aventura" },
  { id: 17, titulo: "The Last of Us", sinopse: "", imagem: "TheLastOfUs.webp", trailer: 'IcR-6y3Q9XI', categoria: "Aventura" },
  { id: 18, titulo: "Avatar", sinopse: "", imagem: "Avatar.webp", trailer: '0Jgk65L6VxM', categoria: "Aventura" },
  { id: 19, titulo: "Cobra Kai", sinopse: "", imagem: "CobraKai.webp", trailer: 'gfDTor2B5ck', categoria: "Aventura" },
  { id: 20, titulo: "Alien vs Predador", sinopse: "", imagem: "AlienVersusPredador.webp", trailer: 'wCDJY7E0CWI', categoria: "Aventura" },
  { id: 21, titulo: "Jumanji", sinopse: "", imagem: "Jumanji.webp", trailer: 'tnpV3q8Q3gg', categoria: "Aventura" },
  { id: 22, titulo: "O Gladiador", sinopse: "", imagem: "Gladiador.webp", trailer: 'P5ieIbInFpg', categoria: "Aventura" },
  { id: 23, titulo: "Jurassic World", sinopse: "", imagem: "JurassicWorld.webp", trailer: 'RFinNxS5KN4', categoria: "Aventura" },
  { id: 24, titulo: "Matrix", sinopse: "", imagem: "Matrix.webp", trailer: 'vKQi3bBA1y8', categoria: "Aventura" },
  { id: 25, titulo: "O Senhor dos Anéis", sinopse: "", imagem: "SenhorDosAneis.webp", trailer: '0i86oM1nHjM', categoria: "Aventura" },
  { id: 26, titulo: "Vingadores", sinopse: "", imagem: "Vingadores.webp", trailer: 'KeNEGtsCWEk', categoria: "Aventura" },
  { id: 27, titulo: "Spiderman", sinopse: "", imagem: "SpiderMan.webp", trailer: 't06RUxPbp_c', categoria: "Aventura" },

  { id: 28, titulo: "Planeta dos Macacos", sinopse: "", imagem: "PlanetaDosMacacos.webp", trailer: 'tb-xfRR-ig8', categoria: "Empolgantes" },
  { id: 29, titulo: "Ultraseven", sinopse: "", imagem: "UltrasevenX.webp", trailer: '0fp4SlEkAHU', categoria: "Empolgantes" },
  { id: 30, titulo: "Lilo & Stitch", sinopse: "", imagem: "LiloEStitch.webp", trailer: 'oLnS1Ij9-Kk', categoria: "Empolgantes" },
  { id: 31, titulo: "Harry Potter", sinopse: "", imagem: "HarryPotter.webp", trailer: 'SFzft_2dcV0', categoria: "Empolgantes" },
  { id: 32, titulo: "Batman vs Superman", sinopse: "", imagem: "BatmanVersusSuperman.webp", trailer: 'f90lcJnq4gs', categoria: "Empolgantes" },
  { id: 33, titulo: "Ex Machina", sinopse: "", imagem: "ExMachina.webp", trailer: '54nzsdLPs9I', categoria: "Empolgantes" },
  { id: 34, titulo: "Sandman", sinopse: "", imagem: "Sandman.webp", trailer: 'NFnrLVrORiE', categoria: "Empolgantes" },
  { id: 35, titulo: "Homens de Preto", sinopse: "", imagem: "HomensDePreto.webp", trailer: 'KnlMkv7Q-UI', categoria: "Empolgantes" },
  { id: 36, titulo: "Star Wars", sinopse: "", imagem: "StarWarsVI.webp", trailer: '1GjZ0m_mKmM', categoria: "Empolgantes" },
  { id: 37, titulo: "Karate Kid", sinopse: "", imagem: "KarateKid.webp", trailer: 'r_8Rw16uscg', categoria: "Empolgantes" },
  { id: 38, titulo: "Star Trek", sinopse: "", imagem: "StarTrekV.webp", trailer: '7S5TDrAWBd8', categoria: "Empolgantes" },
  { id: 46, titulo: "Interestelar", sinopse: "", imagem: "Interestelar.webp", trailer: 'mbbPSq63yuM', categoria: "Empolgantes" },

  { id: 39, titulo: "Orgulho e Preconceito", sinopse: "", imagem: "OrgulhoEPreconceito.webp", trailer: 'Y6XneqkfD3c', categoria: "Romance e Não Ficção" },
  { id: 40, titulo: "A Cruzada", sinopse: "", imagem: "Cruzada.webp", trailer: 'sc7lzQQeGVI', categoria: "Romance e Não Ficção" },
  { id: 41, titulo: "Jane Eyre", sinopse: "", imagem: "JaneEyre.webp", trailer: 'GUWge7rMByw', categoria: "Romance e Não Ficção" },
  { id: 42, titulo: "O Último Samurai", sinopse: "", imagem: "OUltimoSamurai.webp", trailer: 'iqS6yJ8nbB4', categoria: "Romance e Não Ficção" },
  { id: 43, titulo: "O Fantasma da Ópera", sinopse: "", imagem: "FantasmaDaOpera.webp", trailer: 'N91AL8sAh9o', categoria: "Romance e Não Ficção" },
  { id: 44, titulo: "Entrevista com o Vampiro", sinopse: "", imagem: "EntrevistaComVampiro.webp", trailer: 'sCmYN6TLd8A', categoria: "Romance e Não Ficção" },
  { id: 45, titulo: "Vikings", sinopse: "", imagem: "Vikings.webp", trailer: '9GgxinPwAGc', categoria: "Romance e Não Ficção" }
];


/*-------- Gravando mídias no sessionStorage --------------*/

sessionStorage.clear();
const dados = sessionStorage.setItem('midias', JSON.stringify(midias));


