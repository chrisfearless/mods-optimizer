import Character from "../domain/Character";
import {DamageType} from "../domain/Character";
import OptimizationPlan from "../domain/OptimizationPlan";
import optimizationStrategy from "./optimizationStrategy";

let charactersArray = [
  Character.basicCharacter(
    'Aayla Secura',
    'AAYLASECURA',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Jedi', 'Galactic Republic', 'Support'],
    [],
    false
  ),
  Character.basicCharacter(
    'Admiral Ackbar',
    'ADMIRALACKBAR',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Support', 'Fleet Commander', 'Crew Member'],
    ['AA', 'Snackbar', 'ABC'],
    true
  ),
  Character.basicCharacter(
    'Ahsoka Tano',
    'AHSOKATANO',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Jedi', 'Galactic Republic', 'Attacker', 'Crew Member'],
    ['Snips'],
    true
  ),
  Character.basicCharacter(
    'Ahsoka Tano (Fulcrum)',
    'FULCRUMAHSOKA',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Attacker'],
    ['ATF', 'FAT'],
    false
  ),
  Character.basicCharacter(
    'Amilyn Holdo',
    'AMILYNHOLDO',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Resistance', 'Tank'],
    ['Hodor'],
    false
  ),
  Character.basicCharacter(
    'Asajj Ventress',
    'ASAJVENTRESS',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Nightsister', 'Separatist', 'Support'],
    ['AV', 'Zen', 'NS', 'hSTR NS', 'ABC'],
    false
  ),
  Character.basicCharacter(
    'B2 Super Battle Droid',
    'B2SUPERBATTLEDROID',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Separatist', 'Droid', 'Tank'],
    [],
    false
  ),
  Character.basicCharacter(
    'Barriss Offee',
    'BARRISSOFFEE',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Jedi', 'Galactic Republic', 'Healer'],
    [],
    false
  ),
  Character.basicCharacter(
    'Bastila Shan',
    'BASTILASHAN',
    DamageType.special,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Jedi', 'Old Republic', 'Support'],
    [],
    false
  ),
  Character.basicCharacter(
    'Baze Malbus',
    'BAZEMALBUS',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Rogue One', 'Tank'],
    ['Rogue 1', 'Chaze', 'Chiggs'],
    false
  ),
  Character.basicCharacter(
    'BB-8',
    'BB8',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Resistance', 'Droid', 'Support'],
    ['bb8', 'Wampanader', 'ABC'],
    false
  ),
  Character.basicCharacter(
    'Biggs Darklighter',
    'BIGGSDARKLIGHTER',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Support', 'Crew Member'],
    ['Wiggs', 'Chiggs'],
    true
  ),
  Character.basicCharacter(
    'Bistan',
    'BISTAN',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Rogue One', 'Attacker', 'Crew Member'],
    ['Rogue 1', 'SuperStar2D2'],
    true
  ),
  Character.basicCharacter(
    'Boba Fett',
    'BOBAFETT',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Scoundrel', 'Bounty Hunter', 'Attacker', 'Crew Member'],
    [],
    true
  ),
  Character.basicCharacter(
    'Bodhi Rook',
    'BODHIROOK',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Rogue One', 'Support'],
    ['Rogue 1'],
    false
  ),
  Character.basicCharacter(
    'Bossk',
    'BOSSK',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Scoundrel', 'Bounty Hunter', 'Tank'],
    [],
    false
  ),
  Character.basicCharacter(
    'Cad Bane',
    'CADBANE',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Scoundrel', 'Bounty Hunter', 'Support'],
    [],
    false
  ),
  Character.basicCharacter(
    'Captain Han Solo',
    'HOTHHAN',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Scountrel', 'Rebel', 'Support'],
    ['CHS', 'CHolo', 'Snolo', 'Hoth Han'],
    false
  ),
  Character.basicCharacter(
    'Captain Phasma',
    'PHASMA',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'First Order', 'Support', 'Crew Member'],
    ['FO'],
    true
  ),
  Character.basicCharacter(
    'Cassian Andor',
    'CASSIANANDOR',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Rogue One', 'Support', 'Crew Member'],
    ['Rogue 1', 'SuperStar2D2'],
    true
  ),
  Character.basicCharacter(
    'CC-2224 "Cody"',
    'CC2224',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Galactic Republic', 'Clone Trooper', 'Attacker'],
    ['zody'],
    false
  ),
  Character.basicCharacter(
    'Chief Chirpa',
    'CHIEFCHIRPA',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Ewok', 'Support'],
    ['Murderbears'],
    false
  ),
  Character.basicCharacter(
    'Chief Nebit',
    'CHIEFNEBIT',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Jawa', 'Tank'],
    ['nebs'],
    false
  ),
  Character.basicCharacter(
    'Chirrut Îmwe',
    'CHIRRUTIMWE',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Rogue One', 'Attacker'],
    ['Rogue 1', 'Chaze', 'Chiggs', 'Chex Mix'],
    false
  ),
  Character.basicCharacter(
    'Chopper',
    'CHOPPERS3',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Phoenix', 'Droid', 'Support', 'Crew Member'],
    [],
    true
  ),
  Character.basicCharacter(
    'Clone Sergeant - Phase I',
    'CLONESERGEANTPHASEI',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Galactic Republic', 'Clone Trooper', 'Attacker', 'Crew Member'],
    ['Sarge'],
    true
  ),
  Character.basicCharacter(
    'Clone Wars Chewbacca',
    'CLONEWARSCHEWBACCA',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Galactic Republic', 'Scoundrel', 'Tank'],
    ['CWC'],
    false
  ),
  Character.basicCharacter(
    'Colonel Starck',
    'COLONELSTARCK',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Empire', 'Imperial Trooper', 'Support'],
    ['Tony Stark', 'Troopers'],
    false
  ),
  Character.basicCharacter(
    'Commander Luke Skywalker',
    'COMMANDERLUKESKYWALKER',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Attacker'],
    ['CLS', 'Wampanader', 'Chex Mix', 'ABC', 'Titans'],
    false
  ),
  Character.basicCharacter(
    'Coruscant Underworld Police',
    'CORUSCANTUNDERWORLDPOLICE',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Galactic Republic', 'Support'],
    ['CUP'],
    false
  ),
  Character.basicCharacter(
    'Count Dooku',
    'COUNTDOOKU',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Separatist', 'Sith', 'Support'],
    [],
    false
  ),
  Character.basicCharacter(
    'CT-21-0408 "Echo"',
    'CT210408',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Galactic Republic', 'Clone Trooper', 'Support'],
    [],
    false
  ),
  Character.basicCharacter(
    'CT-5555 "Fives"',
    'CT5555',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Galactic Republic', 'Clone Trooper', 'Tank', 'Crew Member'],
    [],
    true
  ),
  Character.basicCharacter(
    'CT-7567 "Rex"',
    'CT7567',
    DamageType.physical,
    new OptimizationPlan(
      10, // health
      0, // protection
      100, // speed
      0, // crit damage
      10, // potency
      20, // tenacity
      0, // offense
      0, // crit chance
      0, // defense
      0, // accuracy
      0 // crit avoidance
    ),
    {},
    ['Light Side', 'Galactic Republic', 'Clone Trooper', 'Support', 'Crew Member'],
    ['Titans'],
    true
  ),
  Character.basicCharacter(
    'Darth Maul',
    'MAUL',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Sith', 'Attacker', 'Crew Member'],
    [],
    true
  ),
  Character.basicCharacter(
    'Darth Nihilus',
    'DARTHNIHILUS',
    DamageType.special,
    new OptimizationPlan(
      0, // health
      10, // protection
      100, // speed
      0, // crit damage
      25, // potency
      0, // tenacity
      0, // offense
      0, // crit chance
      0, // defense
      0, // accuracy
      0 // crit avoidance
    ),
    {},
    ['Dark Side', 'Sith', 'Support'],
    ['Nightmare'],
    false
  ),
  Character.basicCharacter(
    'Darth Sidious',
    'DARTHSIDIOUS',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Sith', 'Attacker'],
    ['Auto Lightzader'],
    false
  ),
  Character.basicCharacter(
    'Darth Sion',
    'DARTHSION',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Sith', 'Tank'],
    ['Nightmare'],
    false
  ),
  Character.basicCharacter(
    'Darth Traya',
    'DARTHTRAYA',
    DamageType.special,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Sith', 'Support'],
    [],
    false
  ),
  Character.basicCharacter(
    'Darth Vader',
    'VADER',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Empire', 'Sith', 'Attacker', 'Crew Member'],
    ['Auto Lightzader', 'Wampanader', 'Nightmare'],
    true
  ),
  Character.basicCharacter(
    'Dathcha',
    'DATHCHA',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Jawa', 'Support'],
    [],
    false
  ),
  Character.basicCharacter(
    'Death Trooper',
    'DEATHTROOPER',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Empire', 'Imperial Trooper', 'Attacker', 'Crew Member'],
    ['Troopers', 'Chex Mix'],
    true
  ),
  Character.basicCharacter(
    'Dengar',
    'DENGAR',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Scoundrel', 'Bounty Hunter', 'Attacker'],
    [],
    false
  ),
  Character.basicCharacter(
    'Director Krennic',
    'DIRECTORKRENNIC',
    DamageType.special,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Empire', 'Support'],
    ['Imperial Grancor Maneuver'],
    false
  ),
  Character.basicCharacter(
    'Eeth Koth',
    'EETHKOTH',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Galactic Republic', 'Jedi', 'Support'],
    [],
    false
  ),
  Character.basicCharacter(
    'Emperor Palpatine',
    'EMPERORPALPATINE',
    DamageType.special,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Empire', 'Sith', 'Support'],
    ['EP', 'Palp', 'EzPz', 'Nightmare'],
    false
  ),
  Character.basicCharacter(
    'Enfys Nest',
    'ENFYSNEST',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Scoundrel', 'Attacker'],
    ['Nesty', 'Baby Wampa', '#solo'],
    false
  ),
  Character.basicCharacter(
    'Ewok Elder',
    'EWOKELDER',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Ewok', 'Healer'],
    ['EE', 'Murderbears'],
    false
  ),
  Character.basicCharacter(
    'Ewok Scout',
    'EWOKSCOUT',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Ewok', 'Attacker'],
    ['Murderbears'],
    false
  ),
  Character.basicCharacter(
    'Ezra Bridger',
    'EZRABRIDGERS3',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Phoenix', 'Jedi', 'Attacker', 'Crew Member'],
    [],
    true
  ),
  Character.basicCharacter(
    'Finn',
    'FINN',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Resistance', 'Tank', 'Crew Member'],
    ['Zinn'],
    true
  ),
  Character.basicCharacter(
    'First Order Executioner',
    'FIRSTORDEREXECUTIONER',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'First Order', 'Attacker'],
    ['Fox', 'Panda', 'Foe', 'FO'],
    false
  ),
  Character.basicCharacter(
    'First Order Officer',
    'FIRSTORDEROFFICERMALE',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'First Order', 'Support'],
    ['Foo', 'FO'],
    false
  ),
  Character.basicCharacter(
    'First Order SF TIE Pilot',
    'FIRSTORDERSPECIALFORCESPILOT',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'First Order', 'Attacker', 'Crew Member'],
    ['SFTP', 'FO'],
    true
  ),
  Character.basicCharacter(
    'First Order Stormtrooper',
    'FIRSTORDERTROOPER',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'First Order', 'Tank', 'Crew Member'],
    ['FOST', 'FO'],
    true
  ),
  Character.basicCharacter(
    'First Order TIE Pilot',
    'FIRSTORDERTIEPILOT',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'First Order', 'Attacker', 'Crew Member'],
    ['FOTP', 'FO'],
    true
  ),
  Character.basicCharacter(
    'Gamorrean Guard',
    'GAMORREANGUARD',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Scoundrel', 'Tank'],
    ['Piggy'],
    false
  ),
  Character.basicCharacter(
    'Gar Saxon',
    'GARSAXON',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Empire', 'Tank', 'Crew Member'],
    [],
    true
  ),
  Character.basicCharacter(
    'Garazeb "Zeb" Orrelios',
    'ZEBS3',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Phoenix', 'Tank', 'Crew Member'],
    [],
    true
  ),
  Character.basicCharacter(
    'General Grievous',
    'GRIEVOUS',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Separatist', 'Droid', 'Attacker'],
    ['GG'],
    false
  ),
  Character.basicCharacter(
    'General Kenobi',
    'GENERALKENOBI',
    DamageType.physical,
    new OptimizationPlan(
      50, // health
      100, // protection
      100, // speed
      0, // crit damage
      0, // potency
      50, // tenacity
      0, // offense
      0, // crit chance
      50, // defense
      0, // accuracy
      0 // crit avoidance
    ),
    {},
    ['Light Side', 'Galactic Republic', 'Jedi', 'Tank'],
    ['GK', 'Titans'],
    false
  ),
  Character.basicCharacter(
    'General Veers',
    'VEERS',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Empire', 'Imperial Trooper', 'Support'],
    ['Troopers'],
    false
  ),
  Character.basicCharacter(
    'Geonosian Soldier',
    'GEONOSIANSOLDIER',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Separatist', 'Geonosian', 'Attacker', 'Crew Member'],
    [],
    true
  ),
  Character.basicCharacter(
    'Geonosian Spy',
    'GEONOSIANSPY',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Separatist', 'Geonosian', 'Attacker', 'Crew Member'],
    [],
    true
  ),
  Character.basicCharacter(
    'Grand Admiral Thrawn',
    'GRANDADMIRALTHRAWN',
    DamageType.special,
    optimizationStrategy['Speed with survivability'],
    {},
    ['Dark Side', 'Empire', 'Support', 'Fleet Commander', 'Crew Member'],
    ['GAT', 'Imperial Grancor Maneuver', 'Wampanader', 'ABC', 'Titans'],
    true
  ),
  Character.basicCharacter(
    'Grand Master Yoda',
    'GRANDMASTERYODA',
    DamageType.special,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Galactic Republic', 'Jedi', 'Support'],
    ['GMY'],
    false
  ),
  Character.basicCharacter(
    'Grand Moff Tarkin',
    'GRANDMOFFTARKIN',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Empire', 'Support', 'Fleet Commander', 'Crew Member'],
    ['GMT', 'Auto Lightzader', 'Imperial Grancor Maneuver'],
    true
  ),
  Character.basicCharacter(
    'Greedo',
    'GREEDO',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Scoundrel', 'Bounty Hunter', 'Attacker'],
    [],
    false
  ),
  Character.basicCharacter(
    'Han Solo',
    'HANSOLO',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Scoundrel', 'Rebel', 'Attacker'],
    ['Raid Han', 'rHan', 'OG Han', 'Zolo', 'Chex Mix', 'Titans'],
    false
  ),
  Character.basicCharacter(
    'Hera Syndulla',
    'HERASYNDULLAS3',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Phoenix', 'Support', 'Crew Member'],
    [],
    true
  ),
  Character.basicCharacter(
    'Hermit Yoda',
    'HERMITYODA',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Jedi', 'Support'],
    ['Hyoda', 'Hoboda', 'Hobo', 'HY'],
    false
  ),
  Character.basicCharacter(
    'HK-47',
    'HK47',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Droid', 'Support'],
    [],
    false
  ),
  Character.basicCharacter(
    'Hoth Rebel Scout',
    'HOTHREBELSCOUT',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Attacker'],
    ['HRS', 'Hoth Bros'],
    false
  ),
  Character.basicCharacter(
    'Hoth Rebel Soldier',
    'HOTHREBELSOLDIER',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Support'],
    ['HRS', 'Hoth Bros'],
    false
  ),
  Character.basicCharacter(
    'IG-100 MagnaGuard',
    'MAGNAGUARD',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Separatist', 'Droid', 'Tank'],
    [],
    false
  ),
  Character.basicCharacter(
    'IG-86 Sentinel Droid',
    'IG86SENTINELDROID',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Droid', 'Attacker'],
    [],
    false
  ),
  Character.basicCharacter(
    'IG-88',
    'IG88',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Scoundrel', 'Bounty Hunter', 'Droid', 'Attacker'],
    [],
    false
  ),
  Character.basicCharacter(
    'Ima-Gun Di',
    'IMAGUNDI',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Galactic Republic', 'Jedi', 'Support'],
    ['IGD'],
    false
  ),
  Character.basicCharacter(
    'Imperial Probe Droid',
    'IMPERIALPROBEDROID',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Empire', 'Droid', 'Support'],
    ['IPD'],
    false
  ),
  Character.basicCharacter(
    'Imperial Super Commando',
    'IMPERIALSUPERCOMMANDO',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Empire', 'Attacker', 'Crew Member'],
    ['ISC'],
    true
  ),
  Character.basicCharacter(
    'Jawa',
    'JAWA',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Jawa', 'Attacker'],
    [],
    false
  ),
  Character.basicCharacter(
    'Jawa Engineer',
    'JAWAENGINEER',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Jawa', 'Healer'],
    [],
    false
  ),
  Character.basicCharacter(
    'Jawa Scavenger',
    'JAWASCAVENGER',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Jawa', 'Support'],
    [],
    false
  ),
  Character.basicCharacter(
    'Jedi Consular',
    'JEDIKNIGHTCONSULAR',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Galactic Republic', 'Jedi', 'Healer', 'Crew Member'],
    ['JC'],
    true
  ),
  Character.basicCharacter(
    'Jedi Knight Anakin',
    'ANAKINKNIGHT',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Galactic Republic', 'Jedi', 'Attacker'],
    ['JKA'],
    false
  ),
  Character.basicCharacter(
    'Jedi Knight Guardian',
    'JEDIKNIGHTGUARDIAN',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Galactic Republic', 'Jedi', 'Tank'],
    ['JKG'],
    false
  ),
  Character.basicCharacter(
    'Jolee Bindo',
    'JOLEEBINDO',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Jedi', 'Old Republic', 'Healer'],
    [],
    false
  ),
  Character.basicCharacter(
    'Jyn Erso',
    'JYNERSO',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Rogue One', 'Attacker', 'Crew Member'],
    ['Rogue 1', 'Auto Lightzader', 'Imperial Grancor Maneuver', 'SuperStar2D2'],
    false
  ),
  Character.basicCharacter(
    'K-2SO',
    'K2SO',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Rogue One', 'Droid', 'Tank', 'Crew Member'],
    ['Rogue 1', 'Cass-2SO', 'K2'],
    true
  ),
  Character.basicCharacter(
    'Kanan Jarrus',
    'KANANJARRUSS3',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Phoenix', 'Tank', 'Crew Member'],
    [],
    true
  ),
  Character.basicCharacter(
    'Kit Fisto',
    'KITFISTO',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Galactic Republic', 'Jedi', 'Attacker'],
    ['Fisty', 'Fister'],
    false
  ),
  Character.basicCharacter(
    'Kylo Ren',
    'KYLOREN',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'First Order', 'Attacker', 'Crew Member'],
    ['Old Kylo', 'zylo', 'FO'],
    true
  ),
  Character.basicCharacter(
    'Kylo Ren (Unmasked)',
    'KYLORENUNMASKED',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'First Order', 'Tank', 'Crew Member'],
    ['kru', 'matt', 'Snape', 'FO'],
    true
  ),
  Character.basicCharacter(
    'L3-37',
    'L3_37',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Scoundrel', 'Droid', 'Tank'],
    ['#solo'],
    true
  ),
  Character.basicCharacter(
    'Lando Calrissian',
    'ADMINISTRATORLANDO',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Scoundrel', 'Rebel', 'Attacker'],
    [],
    false
  ),
  Character.basicCharacter(
    'Lobot',
    'LOBOT',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Support'],
    [],
    false
  ),
  Character.basicCharacter(
    'Logray',
    'LOGRAY',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Ewok', 'Support'],
    ['Murderbears'],
    false
  ),
  Character.basicCharacter(
    'Luke Skywalker (Farmboy)',
    'LUKESKYWALKER',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Attacker'],
    ['farmboi'],
    false
  ),
  Character.basicCharacter(
    'Luminara Unduli',
    'LUMINARAUNDULI',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Galactic Republic', 'Jedi', 'Healer'],
    [],
    false
  ),
  Character.basicCharacter(
    'Mace Windu',
    'MACEWINDU',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Galactic Republic', 'Jedi', 'Tank', 'Fleet Commander', 'Crew Member'],
    [],
    true
  ),
  Character.basicCharacter(
    'Magmatrooper',
    'MAGMATROOPER',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Empire', 'Imperial Trooper', 'Attacker'],
    [],
    false
  ),
  Character.basicCharacter(
    'Mob Enforcer',
    'HUMANTHUG',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Scoundrel', 'Tank'],
    [],
    false
  ),
  Character.basicCharacter(
    'Mother Talzin',
    'MOTHERTALZIN',
    DamageType.special,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Nightsister', 'Support'],
    ['MT', 'NS', 'hSTR NS'],
    false
  ),
  Character.basicCharacter(
    'Nightsister Acolyte',
    'NIGHTSISTERACOLYTE',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Nightsister', 'Attacker'],
    ['NA', 'NS'],
    false
  ),
  Character.basicCharacter(
    'Nightsister Initiate',
    'NIGHTSISTERINITIATE',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Nightsister', 'Attacker'],
    ['NI', 'NS'],
    false
  ),
  Character.basicCharacter(
    'Nightsister Spirit',
    'NIGHTSISTERSPIRIT',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Nightsister', 'Attacker'],
    ['NS'],
    false
  ),
  Character.basicCharacter(
    'Nightsister Zombie',
    'NIGHTSISTERZOMBIE',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Nightsister', 'Tank'],
    ['NS', 'hSTR NS'],
    false
  ),
  Character.basicCharacter(
    'Nute Gunray',
    'NUTEGUNRAY',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Scoundrel', 'Separatist', 'Attacker'],
    [],
    false
  ),
  Character.basicCharacter(
    'Obi-Wan Kenobi (Old Ben)',
    'OLDBENKENOBI',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Jedi', 'Tank'],
    ['OB'],
    false
  ),
  Character.basicCharacter(
    'Old Daka',
    'DAKA',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Nightsister', 'Healer'],
    ['NS', 'hSTR NS'],
    false
  ),
  Character.basicCharacter(
    'Pao',
    'PAO',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Rogue One', 'Attacker'],
    ['Rogue 1', 'Chex Mix'],
    false
  ),
  Character.basicCharacter(
    'Paploo',
    'PAPLOO',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Ewok', 'Tank'],
    ['Murderbears'],
    false
  ),
  Character.basicCharacter(
    'Plo Koon',
    'PLOKOON',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Galactic Republic', 'Jedi', 'Tank', 'Crew Member'],
    [],
    true
  ),
  Character.basicCharacter(
    'Poe Dameron',
    'POE',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Resistance', 'Tank', 'Crew Member'],
    [],
    true
  ),
  Character.basicCharacter(
    'Poggle the Lesser',
    'POGGLETHELESSER',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Separatist', 'Geonosian', 'Support'],
    [],
    false
  ),
  Character.basicCharacter(
    'Princess Leia',
    'PRINCESSLEIA',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Attacker'],
    ['Machine Gun'],
    false
  ),
  Character.basicCharacter(
    'Qi\'ra',
    'QIRA',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Scoundrel', 'Support'],
    ['#solo'],
    false
  ),
  Character.basicCharacter(
    'Qui-Gon Jinn',
    'QUIGONJINN',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Galactic Republic', 'Jedi', 'Support'],
    ['QGJ'],
    false
  ),
  Character.basicCharacter(
    'R2-D2',
    'R2D2_LEGENDARY',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Galactic Republic', 'Rebel', 'Resistance', 'Droid', 'Support'],
    ['Trashcan', 'R2z2', 'SuperStar2D2'],
    false
  ),
  Character.basicCharacter(
    'Range Trooper',
    'RANGETROOPER',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Support', 'Empire', 'Imperial Trooper'],
    ['Troopers'],
    false
  ),
  Character.basicCharacter(
    'Rebel Officer Leia Organa',
    'HOTHLEIA',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Attacker'],
    ['ROLO'],
    false
  ),
  Character.basicCharacter(
    'Resistance Pilot',
    'RESISTANCEPILOT',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Resistance', 'Attacker', 'Crew Member'],
    ['RP'],
    true
  ),
  Character.basicCharacter(
    'Resistance Trooper',
    'RESISTANCETROOPER',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Resistance', 'Attacker'],
    ['RT', 'res trooper'],
    false
  ),
  Character.basicCharacter(
    'Rey (Jedi Training)',
    'REYJEDITRAINING',
    DamageType.physical,
    new OptimizationPlan(10, -5, 100, 100, 50, 0, 50, 0, 0, 0, 0),
    {
      'hSTR': new OptimizationPlan(10, -5, 100, 100, 50, 0, 50, 0, 0, 0, 0),
      'Arena': new OptimizationPlan(0, 0, 100, 100, 20, 0, 20, 50, 0, 0, 0)
    },
    ['Light Side', 'Resistance', 'Tank'],
    ['JTR', 'RJT', 'Jedi Rey', 'Jey Z'],
    false
  ),
  Character.basicCharacter(
    'Rey (Scavenger)',
    'REY',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Resistance', 'Attacker', 'Crew Member'],
    ['scav rey'],
    true
  ),
  Character.basicCharacter(
    'Rose Tico',
    'ROSETICO',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Resistance', 'Attacker'],
    [],
    false
  ),
  Character.basicCharacter(
    'Royal Guard',
    'ROYALGUARD',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Empire', 'Tank'],
    ['RG', 'Red Guard'],
    false
  ),
  Character.basicCharacter(
    'Sabine Wren',
    'SABINEWRENS3',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Phoenix', 'Attacker', 'Crew Member'],
    [],
    true
  ),
  Character.basicCharacter(
    'Savage Opress',
    'SAVAGEOPRESS',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Sith', 'Attacker'],
    ['zavage'],
    false
  ),
  Character.basicCharacter(
    'Scarif Rebel Pathfinder',
    'SCARIFREBEL',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Rogue One', 'Tank', 'Crew Member'],
    ['Rogue 1', 'SRP'],
    true
  ),
  Character.basicCharacter(
    'Shoretrooper',
    'SHORETROOPER',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Empire', 'Imperial Trooper', 'Tank', 'Crew Member'],
    ['ShT', 'Troopers', 'Imperial Grancor Maneuver'],
    true
  ),
  Character.basicCharacter(
    'Sith Assassin',
    'SITHASSASSIN',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Sith', 'Attacker'],
    ['SA', 'Sassy'],
    false
  ),
  Character.basicCharacter(
    'Sith Marauder',
    'SITHMARAUDER',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Sith', 'Attacker'],
    ['SM'],
    false
  ),
  Character.basicCharacter(
    'Sith Trooper',
    'SITHTROOPER',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Sith', 'Tank'],
    ['SiT', 'Nightmare'],
    false
  ),
  Character.basicCharacter(
    'Snowtrooper',
    'SNOWTROOPER',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Empire', 'Imperial Trooper', 'Attacker'],
    ['Troopers'],
    false
  ),
  Character.basicCharacter(
    'Stormtrooper',
    'STORMTROOPER',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Empire', 'Imperial Trooper', 'Tank'],
    ['Troopers'],
    false
  ),
  Character.basicCharacter(
    'Stormtrooper Han',
    'STORMTROOPERHAN',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Scoundrel', 'Rebel', 'Tank'],
    ['STHan'],
    false
  ),
  Character.basicCharacter(
    'Sun Fac',
    'SUNFAC',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Separatist', 'Geonosian', 'Tank', 'Crew Member'],
    [],
    true
  ),
  Character.basicCharacter(
    'Talia',
    'TALIA',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Nightsister', 'Healer'],
    ['NS', 'hSTR NS'],
    false
  ),
  Character.basicCharacter(
    'Teebo',
    'TEEBO',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Ewok', 'Tank'],
    ['Teebotine', 'Murderbears'],
    false
  ),
  Character.basicCharacter(
    'TIE Fighter Pilot',
    'TIEFIGHTERPILOT',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Empire', 'Attacker', 'Crew Member'],
    ['TFP', 'Auto Lightzader'],
    true
  ),
  Character.basicCharacter(
    'Tusken Raider',
    'TUSKENRAIDER',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Tusken', 'Attacker'],
    [],
    false
  ),
  Character.basicCharacter(
    'Tusken Shaman',
    'TUSKENSHAMAN',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Tusken', 'Healer'],
    [],
    false
  ),
  Character.basicCharacter(
    'Ugnaught',
    'UGNAUGHT',
    DamageType.mixed,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Support'],
    [],
    false
  ),
  Character.basicCharacter(
    'URoRRuR\'R\'R',
    'URORRURRR',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Tusken', 'Support'],
    [],
    false
  ),
  Character.basicCharacter(
    'Vandor Chewbacca',
    'YOUNGCHEWBACCA',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Scoundrel', 'Tank'],
    ['Dwight', '#solo'],
    false
  ),
  Character.basicCharacter(
    'Veteran Smuggler Chewbacca',
    'SMUGGLERCHEWBACCA',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Scoundrel', 'Attacker'],
    ['Vets'],
    false
  ),
  Character.basicCharacter(
    'Veteran Smuggler Han Solo',
    'SMUGGLERHAN',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Scoundrel', 'Attacker'],
    ['Vets'],
    false
  ),
  Character.basicCharacter(
    'Visas Marr',
    'VISASMARR',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Healer'],
    [],
    false
  ),
  Character.basicCharacter(
    'Wampa',
    'WAMPA',
    DamageType.physical,
    new OptimizationPlan(
      10, // health
      0, // protection
      100, // speed
      100, // crit damage
      10, // potency
      0, // tenacity
      50, // offense
      0, // crit chance
      0, // defense
      0, // accuracy
      0 // crit avoidance
    ),
    {},
    ['Dark Side', 'Attacker'],
    ['beast', 'Wampanader'],
    false
  ),
  Character.basicCharacter(
    'Wedge Antilles',
    'WEDGEANTILLES',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Rebel', 'Attacker', 'Crew Member'],
    ['Wiggs', 'chiggs', 'SuperStar2D2'],
    true
  ),
  Character.basicCharacter(
    'Wicket',
    'WICKET',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Ewok', 'Attacker'],
    ['Murderbears'],
    false
  ),
  Character.basicCharacter(
    'Young Han Solo',
    'YOUNGHAN',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Scoundrel', 'Attacker'],
    ['YOLO', '#solo', 'Jim'],
    true
  ),
  Character.basicCharacter(
    'Young Lando Calrissian',
    'YOUNGLANDO',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Light Side', 'Scoundrel', 'Attacker'],
    ['#solo'],
    true
  ),
  Character.basicCharacter(
    'Zam Wesell',
    'ZAMWESELL',
    DamageType.physical,
    new OptimizationPlan(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
    {},
    ['Dark Side', 'Scoundrel', 'Bounty Hunter', 'Attacker'],
    [],
    false
  )
];

const characters = {};
const charDefaults = {};

for (let character of charactersArray) {
  characters[character.name] = character;
  charDefaults[character.name] = Character.basicCharacter(
    character.name,
    character.baseId,
    character.physDmgPercent,
    character.optimizationPlan
  );
  Object.freeze(charDefaults[character.name]);
}

Object.freeze(characters);
Object.freeze(charDefaults);

export {characters, charDefaults};
