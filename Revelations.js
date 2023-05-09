const data = {
  weapons : [
    {
      name: 'Sword of Destiny',
      type: 'sword',
      aligment: ["Neutral Evil", "Chaotic Evil", "Chaotic Neutral"],
      damage: 50,
      weight: 10,
      durability: 80,
      level: 20,
      price: 2032,
    },
    {
      name: 'Mace of Chaos',
      type: 'mace',
      aligment: ["Neutral Evil", "Chaotic Evil"],
      damage: 70,
      weight: 15,
      durability: 50,
      level: 25,
      price: 3020,
    },
    {
      name: 'Axe of Fury',
      type: 'axe',
      aligment: ["Lawful Good"],
      damage: 60,
      weight: 12,
      durability: 70,
      level: 22,
      price: 2500,
    },
    {
      name: 'Hammer of the Gods',
      type: 'hammer',
      aligment: ["Neutral Evil", "Lawful Good"],
      damage: 75,
      weight: 18,
      durability: 60,
      level: 30,
      price: 3500,
    },
    {
      name: 'Dagger of Shadows',
      type: 'dagger',
      aligment: ["Chaotic Neutral"],
      damage: 40,
      weight: 5,
      durability: 90,
      level: 18,
      price: 1500,
    },
    {
      name: 'Longbow of Accuracy',
      type: 'bow',
      aligment: ["Neutral Evil", "Chaotic Neutral", "Lawful Good"],
      damage: 55,
      weight: 8,
      durability: 75,
      level: 23,
      price: 2800,
    },
    {
      name: 'Staff of Arcane',
      type: 'staff',
      aligment: ["Neutral Evil", "Chaotic Evil", "Chaotic Neutral", "Lawful Good"],
      damage: 65,
      weight: 11,
      durability: 80,
      level: 28,
      price: 9202,
    },
    {
      name: 'Morningstar of Havoc',
      type: 'mace',
      aligment: ["Chaotic Evil"],
      damage: 80,
      weight: 20,
      durability: 40,
      level: 36,
      price: 4190,
    },
    {
      name: 'Greatsword of Glory',
      type: 'sword',
      aligment: ["Neutral Evil", "Chaotic Evil", "Chaotic Neutral", "Lawful Good"],
      damage: 65,
      weight: 14,
      durability: 70,
      level: 27,
      price: 3000,
    },
    {
      name: 'Battleaxe of Vengeance',
      type: 'axe',
      aligment: ["Neutral Evil", "Chaotic Evil", "Chaotic Neutral"],
      damage: 70,
      weight: 16,
      durability: 65,
      level: 30,
      price: 3500,
    },
    {
      name: 'Javelin of Thunder',
      type: 'spear',
      aligment: ["Neutral Evil", "Chaotic Evil", "Chaotic Neutral", "Lawful Good"],
      damage: 45,
      weight: 7,
      durability: 85,
      level: 20,
      price: 2000,
    },
    {
      name: 'Flail of Devastation',
      type: 'mace',
      aligment: ["Chaotic Evil"],
      damage: 85,
      weight: 22,
      durability: 35,
      level: 40,
      price: 4500,
    },
  ],
  epicHeroes : [
    {
      name: "Arthur Pendragon",
      alias: "King Arthur",
      gold: 5000,
      weight: 80,
      tall: 185,
      level: 20,
      alignment: "Lawful Good",
      armor: [
        { name: "Helm of Pendragon", defense: 10 },
        { name: "Gauntlets of Might", defense: 8 },
        { name: "Breastplate of the Round Table", defense: 15 },
        { name: "Legplates of Camelot", defense: 12 },
        { name: "Boots of Excalibur", defense: 5 }
      ]
    },
    {
      name: "Lancelot du Lac",
      alias: "Sir Lancelot",
      gold: 4000,
      weight: 85,
      tall: 180,
      level: 15,
      alignment: "Lawful Good",
      armor: [
        { name: "Helm of the Holy Grail", defense: 12 },
        { name: "Gauntlets of Valour", defense: 9 },
        { name: "Breastplate of the White Knight", defense: 17 },
        { name: "Legplates of the Questing Beast", defense: 14 },
        { name: "Boots of the Lady of the Lake", defense: 6 }
      ]
    },
    {
      name: "Morgana le Fay",
      alias: "Morgana",
      gold: 17300,
      weight: 60,
      tall: 170,
      level: 25,
      alignment: "Neutral Evil",
      armor: [
        { name: "Helm of Shadows", defense: 8 },
        { name: "Gloves of Venom", defense: 5 },
        { name: "Corset of Nightmares", defense: 12 },
        { name: "Leggings of Deceit", defense: 10 },
        { name: "Boots of Illusion", defense: 4 }
      ]
    },
    {
      name: "Gawain",
      alias: "Sir Gawain",
      gold: 8452,
      weight: 75,
      tall: 183,
      level: 30,
      alignment: "Chaotic Evil",
      armor: [
        { name: "Helm of the Green Knight", defense: 11 },
        { name: "Gauntlets of Courage", defense: 7 },
        { name: "Breastplate of the Lionheart", defense: 14 },
        { name: "Legplates of the Giant of St. Michael's Mount", defense: 12 },
        { name: "Boots of the Four Winds", defense: 5 }
      ]
    },
    {
      name: "Gareth",
      alias: "Sir Gareth",
      gold: 3500,
      weight: 70,
      tall: 180,
      level: 15,
      alignment: "Chaotic Neutral",
      armor: [
        { name: "Helm of the Red Knight", defense: 10 },
        { name: "Gauntlets of Prowess", defense: 6 },
        { name: "Breastplate of the Lady of the Red Castle", defense: 13 },
        { name: "Legplates of the Ogre of the South", defense: 11 },
        { name: "Boots of the Mountain of Fire", defense: 4 }
      ]
    },
    {
      name: "Erudite Pendragon",
      alias: "King Erudite",
      gold: 6270,
      weight: 80,
      tall: 185,
      level: 22,
      alignment: "Chaotic Evil",
      armor: [
        { name: "Helm of Erudite", defense: 10 },
        { name: "Gauntlets of Erudite", defense: 8 },
        { name: "Breastplate of the Round Erudite", defense: 15 },
        { name: "Legplates of Erudite", defense: 12 },
        { name: "Boots of Erudite", defense: 5 }
      ]
    },
    {
      name: "Lucretia du Lac",
      alias: "Miss Lucretia",
      gold: 7400,
      weight: 85,
      tall: 180,
      level: 25,
      alignment: "Chaotic Neutral",
      armor: [
        { name: "Helm of the Holy Lucretia", defense: 12 },
        { name: "Gauntlets of Valour", defense: 9 },
        { name: "Breastplate of the White Lucretia", defense: 17 },
        { name: "Legplates of the Questing Beast", defense: 14 },
        { name: "Boots of the Lady of the Lake", defense: 6 }
      ]
    },
    {
      name: "Chonifer le Fay",
      alias: "Chonifer",
      gold: 8310,
      weight: 60,
      tall: 170,
      level: 35,
      alignment: "Chaotic Evil",
      armor: [
        { name: "Helm of ShaChoniferdows", defense: 8 },
        { name: "Gloves of Chonifer", defense: 5 },
        { name: "Corset of Chonifer", defense: 12 },
        { name: "Leggings of Deceit", defense: 10 },
        { name: "Boots of Illusion", defense: 4 }
      ]
    },
    {
      name: "Pariah",
      alias: "Sir Pariah",
      gold: 450,
      weight: 75,
      tall: 183,
      level: 10,
      alignment: "Chaotic Neutral",
      armor: [
        { name: "Helm of the Green Pariah", defense: 11 },
        { name: "Gauntlets of Pariah", defense: 7 },
        { name: "Breastplate of the Lionheart", defense: 14 },
        { name: "Legplates of the Giant of St. Michael's Mount", defense: 12 },
        { name: "Boots of the Four Winds", defense: 5 }
      ]
    },
    {
      name: "Believer",
      alias: "Sir Believer",
      gold: 4350,
      weight: 70,
      tall: 180,
      level: 23,
      alignment: "Chaotic Neutral",
      armor: [
        { name: "Helm of the Believer Knight", defense: 10 },
        { name: "Gauntlets of Believer", defense: 6 },
        { name: "Breastplate of the Lady of the Red Castle", defense: 13 },
        { name: "Legplates of the Ogre of the South", defense: 11 },
        { name: "Boots of the Mountain of Fire", defense: 4 }
      ]
    }
  ]
}

//1.- Mostrar listado de armas (nombre) y los alineamientos que pueden usarlas.
console.log("/1.- Mostrar listado de armas (nombre) y los alineamientos que pueden usarlas.");
function weaponsNameAndAligment()
{
    for(let i = 0; i < data.weapons.length; i++)
  {
    console.log("Nombre de las armas y sus alineamientos: " + data.weapons[i].name + " - " + data.weapons[i].aligment);
  }
}
weaponsNameAndAligment();
console.log("/////////////////////////////////////////////");
//2.- mostrar el alias de los Héroes cuyo nivel es mayor que 20 y que su alineamiento contenga el término "Chaotic".
console.log("/2.- mostrar el alias de los Héroes cuyo nivel es mayor que 20 y que su alineamiento contenga el término Chaotic.");
function heroesAliasLevel20AndAligmentChaotic()
{
  for(let i = 0; i < data.epicHeroes.length; i++)
  {
    if(data.epicHeroes[i].level > 20 || data.epicHeroes[i].alignment === "Chaotic")
    {
      console.log("Alias de heroes con level mayor que 20: " + data.epicHeroes[i].alias);
    } 
  }  
}
heroesAliasLevel20AndAligmentChaotic();

console.log("////////////////////////////////////////////////");
//3.- Mostrar la lista de Héroes (nombre) y la suma total de defensa que proporciona la armadura.
console.log("3.- Mostrar la lista de Héroes (nombre) y la suma total de defensa que proporciona la armadura.");
function heroesArmorTotalValue()
{
  let totalArmor = 0;
  for(let i = 0; i < data.epicHeroes.length; i++)
  {
    console.log("Lista de heroes: " + data.epicHeroes[i].name + " - Armor: " + data.epicHeroes[i].armor.defense);
    // console.log("Armadura total: " + data.epicHeroes.armor.name[i].defense);
  }
  // for(let i = 0; i < data.epicHeroes.length; i++)
  // {
  //   console.log("Armor : " + data.epicHeroes[i].armor.defense);
  // }
  
}
heroesArmorTotalValue();
console.log("///////////////////////////////////////////////////////////");

//4.- Mostrar la lista de armas que puede utilizar el Héroe alias "Chonifer" siempre y cuando pueda pagarlas con el oro que dispone. 
//Los artículos se irán comprando en el orden en el que están expuestos. Mostrar el oro restante.
console.log("/4.- Mostrar la lista de armas que puede utilizar el Héroe alias Chonifer siempre y cuando pueda pagarlas con el oro que dispone. ");
function choniferWeaponsPosibles()
{
  for (let i = 0; i < data.weapons.length; i++)
  {
    if (data.weapons[i].price < 8310)
    {
      console.log("Lista de armas que puede utilizar Chonifer: " + data.weapons[i].name + " --- Precio: " + data.weapons[i].price);
        }
  }
  let prices = [data.weapons[0].price];
    console.log(prices);  
}
choniferWeaponsPosibles();
console.log("////////////////////////////////////////////////////////////");

//5.- Mostrar todas las piezas de armadura con su defensa, sin repeticiones.

console.log("//5.- Mostrar todas las piezas de armadura con su defensa, sin repeticiones.");
function posibleUnicArmors()
{
  const totalArmors = [];
  for(let i = 0; i< data.epicHeroes.length;i++)
  {
      const armorU = data.epicHeroes[i].armor;
      if(!totalArmors.includes(data.epicHeroes[i].armor))
      {
          totalArmors.push(armorU);
      }
  }
  console.log("Piezas de armadura con su defensa sin repeteciones: ")
  console.log(totalArmors);
}
posibleUnicArmors();

