
function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

// ===== POOLS (safe emoji only, no ZWJ sequences) =====
const POOL={
  shapes:   ['circle','square','triangle','star','heart','diamond','pentagon','hexagon','oval','cross'],
  fruit:    ['apple','banana','grapes','orange','strawberry','watermelon','pear','cherry','peach','lemon',
             'kiwi','pineapple','mango','blueberry','melon','apple2','tomato','coconut','eggplant','corn'],
  food:     ['pizza','burger','taco','icecream','cake','donut','cookie','cupcake','chocolate','popcorn',
             'sandwich','burrito','noodles','falafel','pancake','sushi','rice','stew','curry','salad'],
  animals:  ['cat','dog','rabbit','chick','lion','elephant','giraffe','monkey','penguin','frog',
             'fox','bear','panda','butterfly','tiger','zebra','rhino','koala','parrot','dolphin',
             'eagle','flamingo','peacock','squirrel','otter'],
  numbers:  ['zero','one','two','three','four','five','six','seven','eight','nine'],
  letters:  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  vehicles: ['car','train','rocket','helicopter','bicycle','ufo','bus','racecar','firetruck','ambulance',
             'boat','pickup','truck','tractor','motorbike','scooter','cablecar','gondola','monorail','tram'],
  nature:   ['cherry_blossom','sunflower','rainbow','wave','palm','clover','hibiscus','cactus','moon','maple',
             'ear_of_rice','herb','rock','earth','mountain','volcano','island','sunrise','sunset','valley'],
  space:    ['rocket','moon','ringed_planet','star2','earth','shooting_star','ufo','dizzy','telescope','milky_way',
             'satellite','sun','full_moon','crescent','last_quarter'],
  sports:   ['basketball','tennis','football','dart','volleyball','ping_pong','boxing','billiards','badminton',
             'ski','archery','goal','sled','dive','weightlift'],
  music:    ['guitar','trumpet','drum','violin','piano','sax','microphone','headphone','accordion','djembe',
             'studio_mic','banjo','sheet_music','bugle','notes'],
  ocean:    ['dolphin','shark','octopus','squid','crab','lobster','blowfish','tropical_fish','fish','seal',
             'whale','shrimp','shell','humpback','crab2'],
  insects:  ['butterfly','honeybee','caterpillar','ladybug','cricket','mosquito','ant','worm','scorpion','snail',
             'spider','lizard','crocodile','turtle','trex'],
  weather:  ['rain','rainbow','tornado','partly_cloudy','wave','dash','lightning','thermometer','sun','full_moon',
             'snowflake','thunder','fog','wind','cyclone'],
  faces:    ['smile','joy','heart_eyes','open_mouth','sleeping','sunglasses','partying','cry','angry','thinking',
             'wink','smiling_hearts','innocent','starstruck','smirk','hugs','steam','sob','grimace','zany'],
  clothes:  ['hat','top_hat','sneaker','heel','scarf','gloves','cap','dress','boot','backpack',
             'kimono','sari','swimsuit','shorts','sock','shirt','coat','ballet','flat','crown'],
  tools:    ['hammer','wrench','saw','key','ladder','magnet','microscope','telescope','screwdriver','bulb',
             'flashlight','extinguisher','hook','oldkey','lock','unlock','pen','ruler','set_square','bucket'],
  sweets:   ['candy','lollipop','chocolate','donut','cookie','cupcake','cake','icecream','honey','waffle',
             'pancake','pudding','dango','skewer','pretzel'],
  birds:    ['parrot','eagle','duck','swan','flamingo','peacock','owl','bird','penguin','rooster',
             'turkey','dove','feather','dodo','goose'],
  places:   ['house','castle','fortress','mosque','church','temple','construction','office','factory','shop',
             'school','hotel','bank','synagogue','tower'],
  fantasy:  ['unicorn','dragon','fairy','mermaid','wizard','elf','genie','zombie','vampire','troll',
             'magic_wand','crystal_ball','trident','shield','sword'],
};

// emoji display map — safe single emoji for each key
const EMOJI={
  apple:'🍎', banana:'🍌', grapes:'🍇', orange:'🍊', strawberry:'🍓', watermelon:'🍉',
  pear:'🍐', cherry:'🍒', peach:'🍑', lemon:'🍋', kiwi:'🥝', pineapple:'🍍', mango:'🥭',
  blueberry:'🫐', melon:'🍈', apple2:'🍏', tomato:'🍅', coconut:'🥥', eggplant:'🍆', corn:'🌽',
  pizza:'🍕', burger:'🍔', taco:'🌮', icecream:'🍦', cake:'🎂', donut:'🍩', cookie:'🍪',
  cupcake:'🧁', chocolate:'🍫', popcorn:'🍿', sandwich:'🥪', burrito:'🌯', noodles:'🍜',
  falafel:'🧆', pancake:'🥞', sushi:'🍣', rice:'🍱', stew:'🥘', curry:'🍛', salad:'🥗',
  cat:'🐱', dog:'🐶', rabbit:'🐰', chick:'🐥', lion:'🦁', elephant:'🐘', giraffe:'🦒',
  monkey:'🐵', penguin:'🐧', frog:'🐸', fox:'🦊', bear:'🐻', panda:'🐼', butterfly:'🦋',
  tiger:'🐯', zebra:'🦓', rhino:'🦏', koala:'🐨', parrot:'🦜', dolphin:'🐬', eagle:'🦅',
  flamingo:'🦩', peacock:'🦚', squirrel:'🐿', otter:'🦦',
  zero:'0️⃣', one:'1️⃣', two:'2️⃣', three:'3️⃣', four:'4️⃣', five:'5️⃣',
  six:'6️⃣', seven:'7️⃣', eight:'8️⃣', nine:'9️⃣',
  car:'🚗', train:'🚂', rocket:'🚀', helicopter:'🚁', bicycle:'🚲', ufo:'🛸', bus:'🚌',
  racecar:'🏎', firetruck:'🚒', ambulance:'🚑', boat:'🚤', pickup:'🛻', truck:'🚛',
  tractor:'🚜', motorbike:'🏍', scooter:'🛵', cablecar:'🚡', gondola:'🚠', monorail:'🚟', tram:'🚋',
  cherry_blossom:'🌸', sunflower:'🌻', rainbow:'🌈', wave:'🌊', palm:'🌴', clover:'🍀',
  hibiscus:'🌺', cactus:'🌵', moon:'🌙', maple:'🍁', ear_of_rice:'🌾', herb:'🌿', rock:'🪨',
  earth:'🌍', mountain:'🗻', volcano:'🌋', island:'🏝', sunrise:'🌅', sunset:'🌄', valley:'🏞',
  moon2:'🌙', ringed_planet:'🪐', star2:'⭐', shooting_star:'🌠', dizzy:'💫', telescope:'🔭',
  milky_way:'🌌', satellite:'🛰', sun:'🌞', full_moon:'🌝', crescent:'🌛', last_quarter:'🌜',
  basketball:'🏀', tennis:'🎾', football:'🏈', dart:'🎯', volleyball:'🏐', ping_pong:'🏓',
  boxing:'🥊', billiards:'🎱', badminton:'🏸', ski:'🎿', archery:'🏹', goal:'🥅',
  sled:'🛷', dive:'🤿', weightlift:'🏋',
  guitar:'🎸', trumpet:'🎺', drum:'🥁', violin:'🎻', piano:'🎹', sax:'🎷', microphone:'🎤',
  headphone:'🎧', accordion:'🪗', djembe:'🪘', studio_mic:'🎙', banjo:'🪕', sheet_music:'🎼',
  bugle:'📯', notes:'🎵',
  shark:'🦈', octopus:'🐙', squid:'🦑', crab:'🦀', lobster:'🦞', blowfish:'🐡',
  tropical_fish:'🐠', fish:'🐟', seal:'🦭', whale:'🐳', shrimp:'🦐', shell:'🐚',
  humpback:'🐋', crab2:'🦀',
  honeybee:'🐝', caterpillar:'🐛', ladybug:'🐞', cricket:'🦗', mosquito:'🦟', ant:'🐜',
  worm:'🪱', scorpion:'🦂', snail:'🐌', spider:'🕷', lizard:'🦎', crocodile:'🐊',
  turtle:'🐢', trex:'🦖',
  rain:'🌧', tornado:'🌪', partly_cloudy:'🌤', dash:'💨', lightning:'⚡', thermometer:'🌡',
  snowflake:'🌨', thunder:'🌩', fog:'🌫', wind:'🌬', cyclone:'🌀',
  smile:'😊', joy:'😂', heart_eyes:'😍', open_mouth:'😮', sleeping:'😴', sunglasses:'😎',
  partying:'🥳', cry:'😢', angry:'😡', thinking:'🤔', wink:'😜', smiling_hearts:'🥰',
  innocent:'😇', starstruck:'🤩', smirk:'😏', hugs:'🤗', steam:'😤', sob:'🥺', grimace:'😬', zany:'🤪',
  hat:'👒', top_hat:'🎩', sneaker:'👟', heel:'👠', scarf:'🧣', gloves:'🧤', cap:'🧢',
  dress:'👗', boot:'🥾', backpack:'🎒', kimono:'👘', sari:'🥻', swimsuit:'🩱', shorts:'🩲',
  sock:'🧦', shirt:'👕', coat:'🧥', ballet:'🩰', flat:'🥿', crown:'👑',
  hammer:'🔨', wrench:'🔧', saw:'🪚', key:'🔑', ladder:'🪜', magnet:'🧲',
  microscope:'🔬', screwdriver:'🪛', bulb:'💡', flashlight:'🔦', extinguisher:'🧯',
  hook:'🪝', oldkey:'🗝', lock:'🔒', unlock:'🔓', pen:'🖊', ruler:'📏', set_square:'📐', bucket:'🪣',
  candy:'🍬', lollipop:'🍭', dango:'🍡', skewer:'🍢', pretzel:'🥨', pudding:'🍮', honey:'🍯', waffle:'🧇',
  duck:'🦆', swan:'🦢', owl:'🦉', bird:'🐦', rooster:'🐓', turkey:'🦃', dove:'🕊', feather:'🪶', dodo:'🦤', goose:'🪿',
  house:'🏠', castle:'🏰', fortress:'🏯', mosque:'🕌', church:'⛪', temple:'🏛', construction:'🏗',
  office:'🏢', factory:'🏭', shop:'🏪', school:'🏫', hotel:'🏨', bank:'🏦', synagogue:'🕍', tower:'🗼',
  unicorn:'🦄', dragon:'🐉', fairy:'🧚', mermaid:'🧜', wizard:'🧙', elf:'🧝', genie:'🧞',
  zombie:'🧟', vampire:'🧛', troll:'🧌', magic_wand:'🪄', crystal_ball:'🔮', trident:'🔱', shield:'🛡', sword:'⚔',
};

function getEmoji(key){ return EMOJI[key] || key; }

const SHAPES=POOL.shapes;

const CYCLE=[
  {key:'shapes',   cat:'Shapes 🔷',    type:'shape',  label:'What shape is this?'},
  {key:'fruit',    cat:'Fruit 🍎',     type:'emoji',  label:'Find the matching fruit!'},
  {key:'food',     cat:'Food 🍕',      type:'emoji',  label:'Find the matching food!'},
  {key:'animals',  cat:'Animals 🐱',   type:'emoji',  label:'Find the matching animal!'},
  {key:'shapes',   cat:'Shapes 🔷',    type:'shape',  label:'What shape is this?'},
  {key:'numbers',  cat:'Numbers 🔢',   type:'emoji',  label:'Find the matching number!'},
  {key:'letters',  cat:'Letters 🔤',   type:'letter', label:'Find the matching letter!'},
  {key:'vehicles', cat:'Vehicles 🚗',  type:'emoji',  label:'Find the matching vehicle!'},
  {key:'shapes',   cat:'Shapes 🔷',    type:'shape',  label:'What shape is this?'},
  {key:'nature',   cat:'Nature 🌿',    type:'emoji',  label:'Find the matching one!'},
  {key:'ocean',    cat:'Ocean 🌊',     type:'emoji',  label:'Find the sea creature!'},
  {key:'sports',   cat:'Sports 🏀',    type:'emoji',  label:'Find the matching sport!'},
  {key:'shapes',   cat:'Shapes 🔷',    type:'shape',  label:'What shape is this?'},
  {key:'music',    cat:'Music 🎵',     type:'emoji',  label:'Find the instrument!'},
  {key:'space',    cat:'Space 🚀',     type:'emoji',  label:'Find the space thing!'},
  {key:'insects',  cat:'Bugs 🦋',      type:'emoji',  label:'Find the matching bug!'},
  {key:'shapes',   cat:'Shapes 🔷',    type:'shape',  label:'What shape is this?'},
  {key:'weather',  cat:'Weather 🌈',   type:'emoji',  label:'Find the weather!'},
  {key:'faces',    cat:'Faces 😊',     type:'emoji',  label:'Find the matching face!'},
  {key:'letters',  cat:'Letters 🔤',   type:'letter', label:'Find the matching letter!'},
  {key:'shapes',   cat:'Shapes 🔷',    type:'shape',  label:'What shape is this?'},
  {key:'clothes',  cat:'Clothes 👒',   type:'emoji',  label:'Find the matching item!'},
  {key:'fruit',    cat:'Fruit 🍎',     type:'emoji',  label:'Find the matching fruit!'},
  {key:'animals',  cat:'Animals 🐱',   type:'emoji',  label:'Find the matching animal!'},
  {key:'shapes',   cat:'Shapes 🔷',    type:'shape',  label:'What shape is this?'},
  {key:'tools',    cat:'Tools 🔨',     type:'emoji',  label:'Find the matching tool!'},
  {key:'food',     cat:'Food 🍕',      type:'emoji',  label:'Find the matching food!'},
  {key:'numbers',  cat:'Numbers 🔢',   type:'emoji',  label:'Find the matching number!'},
  {key:'shapes',   cat:'Shapes 🔷',    type:'shape',  label:'What shape is this?'},
  {key:'places',   cat:'Places 🏠',    type:'emoji',  label:'Find the matching place!'},
  {key:'fantasy',  cat:'Fantasy 🦄',   type:'emoji',  label:'Find the matching one!'},
  {key:'letters',  cat:'Letters 🔤',   type:'letter', label:'Find the matching letter!'},
  {key:'shapes',   cat:'Shapes 🔷',    type:'shape',  label:'What shape is this?'},
  {key:'birds',    cat:'Birds 🦜',     type:'emoji',  label:'Find the matching bird!'},
  {key:'vehicles', cat:'Vehicles 🚗',  type:'emoji',  label:'Find the matching vehicle!'},
  {key:'sweets',   cat:'Sweets 🍬',    type:'emoji',  label:'Find the matching sweet!'},
  {key:'shapes',   cat:'Shapes 🔷',    type:'shape',  label:'What shape is this?'},
  {key:'sports',   cat:'Sports 🏀',    type:'emoji',  label:'Find the matching sport!'},
  {key:'ocean',    cat:'Ocean 🌊',     type:'emoji',  label:'Find the sea creature!'},
  {key:'nature',   cat:'Nature 🌿',    type:'emoji',  label:'Find the matching one!'},
];

const _ICO40=['🔷','🍎','🍕','🐱','🔷','🔢','🔤','🚗','🔷','🌿','🌊','🏀','🔷','🎵','🚀','🦋','🔷','🌈','😊','🔤','🔷','👒','🍎','🐱','🔷','🔨','🍕','🔢','🔷','🏠','🦄','🔤','🔷','🦜','🚗','🍬','🔷','🏀','🌊','🌿'];
const TOTAL_LEVELS=1000;
const WORLD_SIZE=12;
const SAVE_KEY='ss4v1';
const LEGACY_SAVE_KEY='ss3v2';
const ADMOB_CONFIG={
  appId:'ca-app-pub-5167184884708072~5699630374',
  bannerMap:'ca-app-pub-5167184884708072/7308225512',
  interstitialEvery3:'ca-app-pub-5167184884708072/4115085967',
  rewardedWorldUnlock:'ca-app-pub-5167184884708072/3204798743',
  rewardedBonusStar:'ca-app-pub-5167184884708072/8597256458'
};
const ADMOB_RUNTIME={
  useTestAds:true,
  npa:true,
  childDirected:true,
  underAgeOfConsent:true,
  maxAdContentRating:'General'
};
const ADMOB_STATE={initialized:false,bannerVisible:false,listenersBound:false,bannerRetryCount:0,bannerRetryTimer:null};
const ICONS=Array.from({length:TOTAL_LEVELS},(_,i)=>_ICO40[i%40]);
const CEL_EMOS=['🎉','🌟','🎊','🏆','🎈','✨','🥳','💫','🎯','🌈','🎠','🪄','🦄','🌺','🎆','🎇','🪅','🎭','🎪','🎡'];
const CEL_MSGS=['Amazing!','Brilliant!','Super Star!','Wonderful!','You Rock!','Fantastic!','Awesome!','Great Job!','Well Done!','Hooray!'];

const queues={};
function nextItem(key){
  const pool=POOL[key];
  if(!queues[key]||queues[key].length===0) queues[key]=shuffle([...pool]);
  return queues[key].shift();
}

function genLevels(){
  const lvs=[];
  for(let i=0;i<TOTAL_LEVELS;i++){
    const pat=CYCLE[i%CYCLE.length];
    const pool=POOL[pat.key];
    const picks=[];
    while(picks.length<Math.min(5,pool.length)){
      const item=nextItem(pat.key);
      if(!picks.includes(item))picks.push(item);
    }
    lvs.push({key:pat.key,type:pat.type,cat:pat.cat,items:picks,label:pat.label});
  }
  return lvs;
}
const LEVELS=genLevels();

let G={unlocked:null,done:null,stars:null,worlds:null,cur:0,round:0,total:5,mistakes:0,item:null,items:[],sound:true,last:0,world:0,bonusClaimed:false,adBreakCounter:0};
function gInit(){
  try{
    const raw=localStorage.getItem(SAVE_KEY);
    if(raw){
      const p=JSON.parse(raw);
      G.unlocked=p.u;
      G.done=p.d;
      G.stars=p.s;
      G.worlds=p.wo;
      G.sound=p.so!==false;
      G.last=Number.isInteger(p.l)?p.l:0;
      G.world=Number.isInteger(p.w)?p.w:0;
      G.adBreakCounter=Number.isInteger(p.ab)?p.ab:0;
    }else{
      const legacy=localStorage.getItem(LEGACY_SAVE_KEY);
      if(legacy){
        const p=JSON.parse(legacy);
        G.unlocked=p.u;
        G.done=p.d;
      }
    }
  }catch(e){}
  if(!Array.isArray(G.unlocked)||G.unlocked.length!==LEVELS.length) G.unlocked=LEVELS.map((_,i)=>i===0);
  if(!Array.isArray(G.done)||G.done.length!==LEVELS.length) G.done=LEVELS.map(()=>false);
  if(!Array.isArray(G.stars)||G.stars.length!==LEVELS.length) G.stars=LEVELS.map((_,i)=>G.done[i]?1:0);
  const worldCount=Math.ceil(LEVELS.length/WORLD_SIZE);
  if(!Array.isArray(G.worlds)||G.worlds.length!==worldCount){
    G.worlds=Array.from({length:worldCount},(_,worldIndex)=>{
      if(worldIndex===0)return true;
      const start=worldIndex*WORLD_SIZE;
      const end=Math.min(start+WORLD_SIZE,LEVELS.length);
      return G.unlocked.slice(start,end).some(Boolean)||G.done.slice(start,end).some(Boolean);
    });
  }
  G.worlds[0]=true;
  G.sound=G.sound!==false;
  G.last=Math.min(Math.max(G.last||0,0),LEVELS.length-1);
  G.world=Math.min(Math.max(G.world||0,0),Math.ceil(LEVELS.length/WORLD_SIZE)-1);
  G.adBreakCounter=Math.max(G.adBreakCounter||0,0);
}
function gSave(){
  try{
    localStorage.setItem(SAVE_KEY,JSON.stringify({u:G.unlocked,d:G.done,s:G.stars,wo:G.worlds,so:G.sound,l:G.last,w:G.world,ab:G.adBreakCounter}));
  }catch(e){}
}
gInit();
lockFutureLevels();

const COLORS=['#FFB3A3','#A8DFD0','#C4B5FD','#FFE08A','#A8D8F0','#FFB3C8','#C5E8A0','#FFCC80','#B0D8F8','#F9B8D0'];
const SHADOWS=['#FF8A70','#70C0A8','#9A85E0','#F0C040','#80B8E0','#FF8AAA','#90C870','#F0A040','#80B8E0','#E0889A'];
const LV_TEXT=['#C07060','#40A080','#7060C0','#A08000','#4080B0','#B04070','#508030','#B07000','#4080B0','#A04060'];

const AudioCtx=window.AudioContext||window.webkitAudioContext;
let actx=null;
function getCtx(){if(!actx)try{actx=new AudioCtx();}catch(e){}return actx;}
function tone(f,d,type,v,dl){
  if(!G.sound)return;
  const c=getCtx();if(!c)return;
  try{
    const o=c.createOscillator(),g=c.createGain();
    o.connect(g);g.connect(c.destination);
    o.type=type||'sine';o.frequency.value=f;
    const t=c.currentTime+(dl||0);
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(v||.28,t+.01);
    g.gain.exponentialRampToValueAtTime(.001,t+d);
    o.start(t);o.stop(t+d+.05);
  }catch(e){}
}
function sndOk(){tone(523,.1,'sine',.3,0);tone(659,.1,'sine',.3,.1);tone(784,.22,'sine',.3,.2);tone(1047,.28,'sine',.22,.38);}
function sndBad(){tone(220,.12,'sawtooth',.18,0);tone(180,.22,'sawtooth',.18,.12);}
function sndCel(){[523,659,784,1047,1319].forEach((f,i)=>tone(f,.16,'sine',.28,i*.09));setTimeout(()=>[659,784,1047,1319,1568].forEach((f,i)=>tone(f,.14,'sine',.22,i*.07)),550);}
function sndClick(){tone(440,.05,'sine',.12,0);}
function totalStars(){return G.stars.reduce((sum,n)=>sum+(n||0),0);}
function completedLevels(){return G.done.filter(Boolean).length;}
function maxWorld(){return Math.ceil(LEVELS.length/WORLD_SIZE)-1;}
function worldStart(worldIndex){return worldIndex*WORLD_SIZE;}
function worldEnd(worldIndex){return Math.min(worldStart(worldIndex)+WORLD_SIZE,LEVELS.length);}
function isWorldUnlocked(worldIndex){return !!G.worlds[worldIndex];}
function isWorldComplete(worldIndex){return G.done.slice(worldStart(worldIndex),worldEnd(worldIndex)).every(Boolean);}
function lockFutureLevels(){
  G.unlocked=LEVELS.map((_,levelIndex)=>{
    const worldIndex=Math.floor(levelIndex/WORLD_SIZE);
    if(!isWorldUnlocked(worldIndex)) return false;
    if(levelIndex===worldStart(worldIndex)) return true;
    return G.done[levelIndex-1];
  });
}
function getAdMobPlugin(){
  return window.Capacitor && window.Capacitor.Plugins ? window.Capacitor.Plugins.AdMob : null;
}
function isNativeApp(){
  return !!(window.Capacitor && typeof window.Capacitor.isNativePlatform==='function' && window.Capacitor.isNativePlatform());
}
function updateBannerSlot(message){
  const slot=document.getElementById('bannerSlot');
  if(slot)slot.textContent=message;
}
function clearBannerRetry(){
  if(ADMOB_STATE.bannerRetryTimer){
    clearTimeout(ADMOB_STATE.bannerRetryTimer);
    ADMOB_STATE.bannerRetryTimer=null;
  }
}
function scheduleBannerRetry(){
  if(ADMOB_STATE.bannerRetryCount>=2||ADMOB_STATE.bannerRetryTimer) return;
  ADMOB_STATE.bannerRetryCount+=1;
  updateBannerSlot(`Retrying banner... (${ADMOB_STATE.bannerRetryCount}/2)`);
  ADMOB_STATE.bannerRetryTimer=setTimeout(()=>{
    ADMOB_STATE.bannerRetryTimer=null;
    showMapBanner();
  },1800);
}
async function bindBannerListeners(){
  const AdMob=getAdMobPlugin();
  if(!isNativeApp()||!AdMob||ADMOB_STATE.listenersBound) return;
  ADMOB_STATE.listenersBound=true;
  await AdMob.addListener('bannerAdLoaded',()=>{
    ADMOB_STATE.bannerVisible=true;
    ADMOB_STATE.bannerRetryCount=0;
    clearBannerRetry();
    updateBannerSlot('Banner ad loaded.');
  });
  await AdMob.addListener('bannerAdFailedToLoad',error=>{
    ADMOB_STATE.bannerVisible=false;
    console.log('Banner failed to load',error);
    updateBannerSlot('Banner is taking a moment to load...');
    if(document.getElementById('s-map').style.display==='block')scheduleBannerRetry();
  });
}
async function ensureAdMobInitialized(){
  const AdMob=getAdMobPlugin();
  if(!isNativeApp()||!AdMob||ADMOB_STATE.initialized) return;
  await AdMob.initialize({
    initializeForTesting:ADMOB_RUNTIME.useTestAds,
    tagForChildDirectedTreatment:ADMOB_RUNTIME.childDirected,
    tagForUnderAgeOfConsent:ADMOB_RUNTIME.underAgeOfConsent,
    maxAdContentRating:ADMOB_RUNTIME.maxAdContentRating
  });
  ADMOB_STATE.initialized=true;
  await bindBannerListeners();
}
async function showMapBanner(){
  const AdMob=getAdMobPlugin();
  if(!isNativeApp()||!AdMob) return;
  try{
    await ensureAdMobInitialized();
    clearBannerRetry();
    if(ADMOB_STATE.bannerVisible) return;
    updateBannerSlot('Loading banner...');
    await AdMob.showBanner({
      adId:ADMOB_CONFIG.bannerMap,
      adSize:'ADAPTIVE_BANNER',
      position:'BOTTOM_CENTER',
      margin:12,
      isTesting:ADMOB_RUNTIME.useTestAds,
      npa:ADMOB_RUNTIME.npa
    });
  }catch(error){
    console.log('Banner show failed',error);
    updateBannerSlot('Banner is taking a moment to load...');
    scheduleBannerRetry();
  }
}
async function hideMapBanner(){
  const AdMob=getAdMobPlugin();
  clearBannerRetry();
  if(!isNativeApp()||!AdMob) return;
  try{
    await AdMob.removeBanner();
    ADMOB_STATE.bannerVisible=false;
  }catch(error){
    console.log('Banner hide failed',error);
  }
}
async function showRewardedAd(kind,onReward){
  const adUnitId=kind==='unlock_world'?ADMOB_CONFIG.rewardedWorldUnlock:ADMOB_CONFIG.rewardedBonusStar;
  const AdMob=getAdMobPlugin();
  if(!isNativeApp()||!AdMob){
    console.log(`Rewarded ad placeholder: ${kind} -> ${adUnitId}`);
    if(typeof onReward==='function')onReward();
    return;
  }
  try{
    await ensureAdMobInitialized();
    await AdMob.prepareRewardVideoAd({
      adId:adUnitId,
      isTesting:ADMOB_RUNTIME.useTestAds,
      npa:ADMOB_RUNTIME.npa,
      immersiveMode:true
    });
    await AdMob.showRewardVideoAd();
    if(typeof onReward==='function')onReward();
  }catch(error){
    console.log(`Rewarded ad failed: ${kind}`,error);
  }
}
async function maybeShowInterstitial(trigger){
  const AdMob=getAdMobPlugin();
  if(!isNativeApp()||!AdMob){
    console.log(`Interstitial placeholder: ${trigger} -> ${ADMOB_CONFIG.interstitialEvery3}`);
    return;
  }
  try{
    await ensureAdMobInitialized();
    await AdMob.prepareInterstitial({
      adId:ADMOB_CONFIG.interstitialEvery3,
      isTesting:ADMOB_RUNTIME.useTestAds,
      npa:ADMOB_RUNTIME.npa,
      immersiveMode:true
    });
    await AdMob.showInterstitial();
  }catch(error){
    console.log(`Interstitial failed: ${trigger}`,error);
  }
}
function syncSoundButtons(){
  const onLabel=G.sound?'Sound On':'Sound Off';
  const shortLabel=G.sound?'Sound On':'Sound Off';
  const settingsLabel=G.sound?'On':'Off';
  ['soundBtnMap','soundBtnGame'].forEach(id=>{
    const el=document.getElementById(id);
    if(el)el.textContent=id==='soundBtnMap'?onLabel:shortLabel;
  });
  const settingsBtn=document.getElementById('soundBtnSettings');
  if(settingsBtn){
    settingsBtn.textContent=settingsLabel;
    settingsBtn.classList.toggle('off',!G.sound);
  }
}
function updateSummary(){
  const progress=document.getElementById('progressText');
  const stars=document.getElementById('starsText');
  const settingsStars=document.getElementById('settingsStars');
  const continueBtn=document.getElementById('continueBtn');
  const total=totalStars();
  if(progress)progress.textContent=`${completedLevels()} / ${LEVELS.length} levels`;
  if(stars)stars.textContent=`${total} stars`;
  if(settingsStars)settingsStars.textContent=`${total} stars`;
  if(continueBtn)continueBtn.style.display=completedLevels()>0?'inline-flex':'none';
}
function updateWorldGate(){
  const gate=document.getElementById('worldGate');
  const title=document.getElementById('worldGateTitle');
  const text=document.getElementById('worldGateText');
  if(isWorldUnlocked(G.world)){
    gate.classList.remove('show');
    return;
  }
  const start=worldStart(G.world)+1;
  const end=worldEnd(G.world);
  title.textContent=`Unlock World ${G.world+1}`;
  text.textContent=`Watch a rewarded ad to open levels ${start}-${end}.`;
  gate.classList.add('show');
}
function updateWorldHeader(){
  const start=G.world*WORLD_SIZE+1;
  const end=Math.min(start+WORLD_SIZE-1,LEVELS.length);
  document.getElementById('worldTitle').textContent=`World ${G.world+1}`;
  document.getElementById('worldMeta').textContent=`Levels ${start}-${end}`;
  document.getElementById('prevWorldBtn').disabled=G.world===0;
  document.getElementById('nextWorldBtn').disabled=G.world===maxWorld();
}
function toggleSound(){
  G.sound=!G.sound;
  gSave();
  syncSoundButtons();
  if(G.sound)sndClick();
}
function openSettings(){
  updateSummary();
  syncSoundButtons();
  document.getElementById('settings').style.display='flex';
}
function openPolicy(){
  document.getElementById('policy').style.display='flex';
}
function closePolicy(){
  document.getElementById('policy').style.display='none';
}
function dismissPolicy(event){
  if(event.target.id==='policy')closePolicy();
}
function closeSettings(){
  document.getElementById('settings').style.display='none';
}
function dismissSettings(event){
  if(event.target.id==='settings')closeSettings();
}
function resetProgress(){
  G.unlocked=LEVELS.map((_,i)=>i===0);
  G.done=LEVELS.map(()=>false);
  G.stars=LEVELS.map(()=>0);
  G.worlds=Array.from({length:maxWorld()+1},(_,i)=>i===0);
  G.last=0;
  G.world=0;
  G.adBreakCounter=0;
  lockFutureLevels();
  gSave();
  closeSettings();
  updateSummary();
  showMap();
}
function continueGame(){
  sndClick();
  startLevel(G.last||0);
}
function changeWorld(dir){
  G.world=Math.min(Math.max(G.world+dir,0),maxWorld());
  gSave();
  buildMap();
}
function unlockWorldReward(){
  const worldIndex=G.world;
  if(isWorldUnlocked(worldIndex)) return;
  showRewardedAd('unlock_world',()=>{
    G.worlds[worldIndex]=true;
    lockFutureLevels();
    G.last=worldStart(worldIndex);
    gSave();
    buildMap();
  });
}
function rewardBonusStar(){
  if(G.bonusClaimed||document.getElementById('overlay').style.display!=='flex') return;
  showRewardedAd('bonus_star',()=>{
    G.stars[G.cur]=3;
    G.bonusClaimed=true;
    gSave();
    updateSummary();
    document.getElementById('cst').textContent='\u2B50\u2B50\u2B50';
    document.getElementById('rewardNote').textContent='Bonus star earned!';
    document.getElementById('bonusStarBtn').textContent='Bonus Star Added';
    document.getElementById('bonusStarBtn').disabled=true;
  });
}

function shapeSVG(type,col,sz){
  const c=sz/2,r=sz*.41;
  const d={
    circle:`<circle cx="${c}" cy="${c}" r="${r}" fill="${col}"/>`,
    square:`<rect x="${sz*.1}" y="${sz*.1}" width="${sz*.8}" height="${sz*.8}" rx="${sz*.09}" fill="${col}"/>`,
    triangle:`<polygon points="${c},${sz*.07} ${sz*.91},${sz*.91} ${sz*.09},${sz*.91}" fill="${col}"/>`,
    star:`<polygon points="${c},${sz*.06} ${c+r*.37},${c-r*.07} ${c+r*.94},${c-r*.07} ${c+r*.49},${c+r*.3} ${c+r*.6},${c+r*.88} ${c},${c+r*.5} ${c-r*.6},${c+r*.88} ${c-r*.49},${c+r*.3} ${c-r*.94},${c-r*.07} ${c-r*.37},${c-r*.07}" fill="${col}"/>`,
    heart:`<path d="M${c} ${sz*.83} C${c} ${sz*.83} ${sz*.09} ${sz*.58} ${sz*.09} ${sz*.37} C${sz*.09} ${sz*.19} ${sz*.23} ${sz*.1} ${c-r*.2} ${sz*.2} C${c-r*.04} ${sz*.28} ${c} ${sz*.34} ${c} ${sz*.34} C${c} ${sz*.34} ${c+r*.04} ${sz*.28} ${c+r*.2} ${sz*.2} C${sz*.77} ${sz*.1} ${sz*.91} ${sz*.19} ${sz*.91} ${sz*.37} C${sz*.91} ${sz*.58} ${c} ${sz*.83} ${c} ${sz*.83}Z" fill="${col}"/>`,
    diamond:`<polygon points="${c},${sz*.05} ${sz*.92},${c} ${c},${sz*.95} ${sz*.08},${c}" fill="${col}"/>`,
    pentagon:`<polygon points="${c},${sz*.06} ${sz*.93},${sz*.37} ${sz*.75},${sz*.91} ${sz*.25},${sz*.91} ${sz*.07},${sz*.37}" fill="${col}"/>`,
    hexagon:`<polygon points="${c},${sz*.05} ${sz*.87},${sz*.27} ${sz*.87},${sz*.73} ${c},${sz*.95} ${sz*.13},${sz*.73} ${sz*.13},${sz*.27}" fill="${col}"/>`,
    oval:`<ellipse cx="${c}" cy="${c}" rx="${r*.7}" ry="${r*.47}" fill="${col}"/>`,
    cross:`<rect x="${c-r*.17}" y="${sz*.1}" width="${r*.34}" height="${sz*.8}" rx="4" fill="${col}"/><rect x="${sz*.1}" y="${c-r*.17}" width="${sz*.8}" height="${r*.34}" rx="4" fill="${col}"/>`,
  };
  return d[type]||d.circle;
}

function renderSVG(el,val,col,sz,type){
  el.setAttribute('viewBox',`0 0 ${sz} ${sz}`);
  el.setAttribute('width',sz);el.setAttribute('height',sz);
  if(type==='shape'){
    el.innerHTML=shapeSVG(val,col,sz);
  } else if(type==='letter'){
    el.innerHTML=`<text x="50%" y="56%" dominant-baseline="middle" text-anchor="middle" font-size="${sz*.65}px" font-family="'Trebuchet MS','Arial Rounded MT Bold',sans-serif" font-weight="800" fill="${col}">${val}</text>`;
  } else {
    const em=getEmoji(val);
    el.innerHTML=`<text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-size="${sz*.58}px" font-family="sans-serif">${em}</text>`;
  }
}

function showStart(){
  document.getElementById('s-start').style.display='flex';
  document.getElementById('s-map').style.display='none';
  document.getElementById('s-game').style.display='none';
  document.getElementById('overlay').style.display='none';
  hideMapBanner();
  closeSettings();
  closePolicy();
  updateSummary();
  syncSoundButtons();
}
function showMap(){
  document.getElementById('s-start').style.display='none';
  document.getElementById('s-map').style.display='block';
  document.getElementById('s-game').style.display='none';
  document.getElementById('overlay').style.display='none';
  closeSettings();
  closePolicy();
  ADMOB_STATE.bannerRetryCount=0;
  updateBannerSlot(isNativeApp()?'Loading banner...':`Banner ad placeholder on the map screen (${ADMOB_CONFIG.bannerMap})`);
  showMapBanner();
  buildMap();
}
function buildMap(){
  const grid=document.getElementById('pgrid');
  grid.innerHTML='';
  updateSummary();
  updateWorldHeader();
  updateWorldGate();
  const startIndex=G.world*WORLD_SIZE;
  const endIndex=Math.min(startIndex+WORLD_SIZE,LEVELS.length);
  if(!isWorldUnlocked(G.world)) return;
  LEVELS.slice(startIndex,endIndex).forEach((lv,offset)=>{
    const i=startIndex+offset;
    const btn=document.createElement('button');
    const col=COLORS[i%COLORS.length];
    const sh=SHADOWS[i%SHADOWS.length];
    const ico=ICONS[i];
    const earned=G.stars[i]||0;
    if(G.done[i]){
      btn.className='lbtn dn';
      btn.style.background=col;btn.style.boxShadow=`0 5px 0 ${sh}`;
      const tc=LV_TEXT[i%LV_TEXT.length];
      btn.innerHTML=`<div class="lbtn-ico">${ico}</div><div class="lbtn-lbl" style="color:${tc}">Level ${i+1}</div><div class="lbtn-st">${'\u2B50'.repeat(earned)}${'\u2606'.repeat(3-earned)}</div>`;
      btn.onclick=()=>{sndClick();startLevel(i);};
    }else if(G.unlocked[i]){
      btn.className='lbtn un';
      btn.style.borderTop=`4px solid ${col}`;
      btn.innerHTML=`<div class="lbtn-ico">${ico}</div><div class="lbtn-lbl">Level ${i+1}</div>`;
      btn.onclick=()=>{sndClick();startLevel(i);};
    }else{
      btn.className='lbtn lk';
      btn.innerHTML=`<div style="font-size:1.3rem">🔒</div><div class="lbtn-lbl">Level ${i+1}</div>`;
    }
    grid.appendChild(btn);
  });
}

let curItem,curItems,curType,curRoundItems;
function startLevel(idx){
  const worldIndex=Math.floor(idx/WORLD_SIZE);
  if(!isWorldUnlocked(worldIndex)) return;
  getCtx();
  G.cur=idx;G.round=0;G.mistakes=0;
  G.bonusClaimed=(G.stars[idx]||0)>=3;
  G.last=idx;
  G.world=Math.floor(idx/WORLD_SIZE);
  gSave();
  document.getElementById('s-start').style.display='none';
  document.getElementById('s-map').style.display='none';
  document.getElementById('s-game').style.display='flex';
  document.getElementById('overlay').style.display='none';
  hideMapBanner();
  const lv=LEVELS[idx];
  const col=COLORS[idx%COLORS.length];
  document.getElementById('glv').textContent=`Level ${idx+1}`;
  document.getElementById('glv').style.background=col;
  document.getElementById('glv').style.color=LV_TEXT[idx%LV_TEXT.length];
  document.getElementById('gcat').textContent=lv.cat;
  syncSoundButtons();
  document.getElementById('pfill').style.width='0%';
  document.getElementById('qlbl').textContent=lv.label;
  ['s1','s2','s3'].forEach(id=>{const e=document.getElementById(id);e.textContent='\u2B50';e.className='si';});
  curRoundItems=shuffle([...lv.items]).slice(0,G.total);
  nextRound();
}
function nextRound(){
  const lv=LEVELS[G.cur];
  curType=lv.type;
  const correct=curRoundItems[G.round];
  const pool=POOL[lv.key];
  const others=shuffle(pool.filter(x=>x!==correct)).slice(0,2);
  const choices=shuffle([correct,...others]);
  curItem=correct;curItems=choices;
  const col=COLORS[Math.floor(Math.random()*COLORS.length)];
  const bigsvg=document.getElementById('bigsvg');
  const bigc=document.getElementById('bigc');
  bigc.style.animation='none';void bigc.offsetWidth;bigc.style.animation='popIn .38s cubic-bezier(.175,.885,.32,1.275)';
  bigc.style.borderBottom=`5px solid ${col}`;
  renderSVG(bigsvg,correct,col,130,curType);
  const row=document.getElementById('chrow');
  row.innerHTML='';
  choices.forEach((item,i)=>{
    const card=document.createElement('div');
    card.className='chc';
    const cc=COLORS[(COLORS.indexOf(col)+i+2)%COLORS.length];
    const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
    renderSVG(svg,item,cc,70,curType);
    card.appendChild(svg);
    card.onclick=()=>pick(item===correct,card);
    row.appendChild(card);
  });
  document.getElementById('pfill').style.width=(G.round/G.total*100)+'%';
}
function pick(ok,card){
  getCtx();
  document.querySelectorAll('.chc').forEach(c=>c.onclick=null);
  if(ok){
    card.classList.add('correct');sndOk();
    setTimeout(()=>{
      G.round++;
      document.getElementById('pfill').style.width=(G.round/G.total*100)+'%';
      if(G.round>=G.total)setTimeout(celebrate,300);else nextRound();
    },620);
  }else{
    card.classList.add('wrong');sndBad();
    G.mistakes++;
    if(G.mistakes===2){const s=document.getElementById('s3');s.textContent='\u2606';s.className='si dim';}
    else if(G.mistakes>=4){const s=document.getElementById('s2');s.textContent='\u2606';s.className='si dim';}
    setTimeout(()=>{
      card.classList.remove('wrong');
      const row=document.getElementById('chrow');
      Array.from(row.children).forEach((c,i)=>{c.onclick=()=>pick(curItems[i]===curItem,c);});
    },520);
  }
}
function celebrate(){
  sndCel();
  const stars=G.mistakes===0?3:G.mistakes<=2?2:1;
  G.adBreakCounter++;
  G.bonusClaimed=stars>=3;
  document.getElementById('cemo').textContent=CEL_EMOS[G.cur%CEL_EMOS.length];
  document.getElementById('cttl').textContent=stars===3?CEL_MSGS[Math.floor(Math.random()*CEL_MSGS.length)]:stars===2?'Well done! 👏':'You finished! 💪';
  document.getElementById('cst').textContent='\u2B50'.repeat(stars)+'\u2606'.repeat(3-stars);
  G.done[G.cur]=true;
  G.stars[G.cur]=Math.max(G.stars[G.cur]||0,stars);
  G.last=G.cur;
  const next=G.cur+1;
  if(next<LEVELS.length){
    const nextWorldIndex=Math.floor(next/WORLD_SIZE);
    G.world=nextWorldIndex;
    if(isWorldUnlocked(nextWorldIndex)) G.last=next;
  }
  lockFutureLevels();
  gSave();
  updateSummary();
  confetti();
  const rewardNote=document.getElementById('rewardNote');
  const bonusBtn=document.getElementById('bonusStarBtn');
  if(stars<3){
    rewardNote.style.display='block';
    rewardNote.textContent='Watch a rewarded ad to earn 1 bonus star.';
    bonusBtn.style.display='inline-block';
    bonusBtn.disabled=false;
    bonusBtn.textContent='Get a Bonus Star';
  }else{
    rewardNote.style.display='none';
    bonusBtn.style.display='none';
    bonusBtn.disabled=false;
  }
  const btn=document.getElementById('bnxt');
  if(next>=LEVELS.length){
    btn.textContent='All Done! 🏆';
    btn.onclick=()=>{sndClick();showMap();};
  }else if(!isWorldUnlocked(Math.floor(next/WORLD_SIZE))){
    btn.textContent='Open Next World ✨';
    btn.onclick=()=>{sndClick();showMap();};
  }else{
    btn.textContent='Next Level →';
    btn.onclick=()=>{sndClick();if(G.adBreakCounter%3===0)maybeShowInterstitial(`after_level_${G.cur+1}`);startLevel(next);};
  }
  document.getElementById('overlay').style.display='flex';
}
function confetti(){
  const cols=['#FFB3A3','#A8DFD0','#C4B5FD','#FFE08A','#A8D8F0','#FFB3C8','#C5E8A0','#FFCC80'];
  for(let i=0;i<52;i++){
    const p=document.createElement('div');
    p.className='confp';
    p.style.cssText=`left:${Math.random()*100}vw;top:-20px;width:${7+Math.random()*8}px;height:${7+Math.random()*8}px;background:${cols[Math.floor(Math.random()*cols.length)]};border-radius:${Math.random()>.5?'50%':'3px'};animation-duration:${1.2+Math.random()*1.4}s;animation-delay:${Math.random()*.5}s;`;
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),2700);
  }
}
showStart();
