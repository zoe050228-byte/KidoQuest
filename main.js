// ═══════════════════════════════════════════════════
//  DATA
// ═══════════════════════════════════════════════════
var D={
  en:{
    alphabets:[
      {l:'A',w:'Apple',e:'🍎'},{l:'B',w:'Ball',e:'🏀'},{l:'C',w:'Cat',e:'🐱'},
      {l:'D',w:'Dog',e:'🐶'},{l:'E',w:'Egg',e:'🥚'},{l:'F',w:'Fish',e:'🐟'},
      {l:'G',w:'Grapes',e:'🍇'},{l:'H',w:'Hat',e:'🎩'},{l:'I',w:'Ice Cream',e:'🍦'},
      {l:'J',w:'Juice',e:'🧃'},{l:'K',w:'Kite',e:'🪁'},{l:'L',w:'Lion',e:'🦁'},
      {l:'M',w:'Mango',e:'🥭'},{l:'N',w:'Nest',e:'🪺'},{l:'O',w:'Orange',e:'🍊'},
      {l:'P',w:'Parrot',e:'🦜'},{l:'Q',w:'Queen',e:'👸'},{l:'R',w:'Rabbit',e:'🐰'},
      {l:'S',w:'Sun',e:'☀️'},{l:'T',w:'Tiger',e:'🐯'},{l:'U',w:'Umbrella',e:'☂️'},
      {l:'V',w:'Van',e:'🚐'},{l:'W',w:'Watermelon',e:'🍉'},{l:'X',w:'Xylophone',e:'🎵'},
      {l:'Y',w:'Yak',e:'🐃'},{l:'Z',w:'Zebra',e:'🦓'}
    ],
    numbers:[
      {l:'1',w:'One',e:'1️⃣'},{l:'2',w:'Two',e:'2️⃣'},{l:'3',w:'Three',e:'3️⃣'},
      {l:'4',w:'Four',e:'4️⃣'},{l:'5',w:'Five',e:'5️⃣'},{l:'6',w:'Six',e:'6️⃣'},
      {l:'7',w:'Seven',e:'7️⃣'},{l:'8',w:'Eight',e:'8️⃣'},{l:'9',w:'Nine',e:'9️⃣'},
      {l:'10',w:'Ten',e:'🔟'}
    ],
    animals:[
      {l:'🐱',w:'Cat',e:'🐱'},{l:'🐶',w:'Dog',e:'🐶'},{l:'🐮',w:'Cow',e:'🐮'},
      {l:'🐘',w:'Elephant',e:'🐘'},{l:'🦁',w:'Lion',e:'🦁'},{l:'🐯',w:'Tiger',e:'🐯'},
      {l:'🐻',w:'Bear',e:'🐻'},{l:'🦊',w:'Fox',e:'🦊'},{l:'🐰',w:'Rabbit',e:'🐰'},
      {l:'🐸',w:'Frog',e:'🐸'},{l:'🦓',w:'Zebra',e:'🦓'},{l:'🐺',w:'Wolf',e:'🐺'}
    ],
    birds:[
      {l:'🦜',w:'Parrot',e:'🦜'},{l:'🦢',w:'Swan',e:'🦢'},{l:'🦚',w:'Peacock',e:'🦚'},
      {l:'🦅',w:'Eagle',e:'🦅'},{l:'🐦',w:'Sparrow',e:'🐦'},{l:'🦉',w:'Owl',e:'🦉'},
      {l:'🐧',w:'Penguin',e:'🐧'},{l:'🦆',w:'Duck',e:'🦆'},{l:'🦩',w:'Flamingo',e:'🦩'}
    ]
  },
  hi:{
    alphabets:[
      {l:'अ',w:'अनार',e:'🍎',s:'अ से अनार'},{l:'आ',w:'आम',e:'🥭',s:'आ से आम'},
      {l:'इ',w:'इमली',e:'🌿',s:'इ से इमली'},{l:'ई',w:'ईख',e:'🎋',s:'ई से ईख'},
      {l:'उ',w:'उल्लू',e:'🦉',s:'उ से उल्लू'},{l:'ऊ',w:'ऊन',e:'🧶',s:'ऊ से ऊन'},
      {l:'क',w:'कमल',e:'🪷',s:'क से कमल'},{l:'ख',w:'खरगोश',e:'🐰',s:'ख से खरगोश'},
      {l:'ग',w:'गाय',e:'🐮',s:'ग से गाय'},{l:'घ',w:'घर',e:'🏠',s:'घ से घर'},
      {l:'च',w:'चाँद',e:'🌙',s:'च से चाँद'},{l:'छ',w:'छाता',e:'☂️',s:'छ से छाता'},
      {l:'ज',w:'जहाज',e:'✈️',s:'ज से जहाज'},{l:'ट',w:'टमाटर',e:'🍅',s:'ट से टमाटर'},
      {l:'द',w:'दीपक',e:'🪔',s:'द से दीपक'},{l:'न',w:'नाव',e:'⛵',s:'न से नाव'},
      {l:'प',w:'पत्ता',e:'🍃',s:'प से पत्ता'},{l:'ब',w:'बकरी',e:'🐐',s:'ब से बकरी'},
      {l:'म',w:'मछली',e:'🐟',s:'म से मछली'},{l:'र',w:'रोटी',e:'🫓',s:'र से रोटी'}
    ],
    numbers:[
      {l:'१',w:'एक',e:'1️⃣',s:'एक'},{l:'२',w:'दो',e:'2️⃣',s:'दो'},
      {l:'३',w:'तीन',e:'3️⃣',s:'तीन'},{l:'४',w:'चार',e:'4️⃣',s:'चार'},
      {l:'५',w:'पाँच',e:'5️⃣',s:'पाँच'},{l:'६',w:'छह',e:'6️⃣',s:'छह'},
      {l:'७',w:'सात',e:'7️⃣',s:'सात'},{l:'८',w:'आठ',e:'8️⃣',s:'आठ'},
      {l:'९',w:'नौ',e:'9️⃣',s:'नौ'},{l:'१०',w:'दस',e:'🔟',s:'दस'}
    ],
    animals:[
      {l:'🐱',w:'बिल्ली',e:'🐱',s:'बिल्ली'},{l:'🐶',w:'कुत्ता',e:'🐶',s:'कुत्ता'},
      {l:'🐮',w:'गाय',e:'🐮',s:'गाय'},{l:'🐘',w:'हाथी',e:'🐘',s:'हाथी'},
      {l:'🦁',w:'शेर',e:'🦁',s:'शेर'},{l:'🐯',w:'बाघ',e:'🐯',s:'बाघ'},
      {l:'🐰',w:'खरगोश',e:'🐰',s:'खरगोश'},{l:'🐸',w:'मेढक',e:'🐸',s:'मेढक'}
    ],
    birds:[
      {l:'🦜',w:'तोता',e:'🦜',s:'तोता'},{l:'🦚',w:'मोर',e:'🦚',s:'मोर'},
      {l:'🦅',w:'बाज',e:'🦅',s:'बाज'},{l:'🦉',w:'उल्लू',e:'🦉',s:'उल्लू'},
      {l:'🐧',w:'पेंगुइन',e:'🐧',s:'पेंगुइन'}
    ]
  },
  es:{
    alphabets:[
      {l:'A',w:'Avión',e:'✈️'},{l:'B',w:'Burro',e:'🫏'},{l:'C',w:'Casa',e:'🏠'},
      {l:'D',w:'Dado',e:'🎲'},{l:'E',w:'Elefante',e:'🐘'},{l:'F',w:'Fresa',e:'🍓'},
      {l:'G',w:'Gato',e:'🐱'},{l:'H',w:'Helado',e:'🍦'},{l:'I',w:'Iguana',e:'🦎'},
      {l:'J',w:'Jirafa',e:'🦒'},{l:'L',w:'Luna',e:'🌙'},{l:'M',w:'Manzana',e:'🍎'},
      {l:'N',w:'Naranja',e:'🍊'},{l:'O',w:'Oso',e:'🐻'},{l:'P',w:'Perro',e:'🐶'},
      {l:'R',w:'Ratón',e:'🐭'},{l:'S',w:'Sol',e:'☀️'},{l:'T',w:'Tigre',e:'🐯'},
      {l:'V',w:'Vaca',e:'🐮'},{l:'Z',w:'Zorro',e:'🦊'}
    ],
    numbers:[
      {l:'1',w:'Uno',e:'1️⃣'},{l:'2',w:'Dos',e:'2️⃣'},{l:'3',w:'Tres',e:'3️⃣'},
      {l:'4',w:'Cuatro',e:'4️⃣'},{l:'5',w:'Cinco',e:'5️⃣'},{l:'6',w:'Seis',e:'6️⃣'},
      {l:'7',w:'Siete',e:'7️⃣'},{l:'8',w:'Ocho',e:'8️⃣'},{l:'9',w:'Nueve',e:'9️⃣'},
      {l:'10',w:'Diez',e:'🔟'}
    ],
    animals:[
      {l:'🐱',w:'Gato',e:'🐱'},{l:'🐶',w:'Perro',e:'🐶'},{l:'🐮',w:'Vaca',e:'🐮'},
      {l:'🐘',w:'Elefante',e:'🐘'},{l:'🦁',w:'León',e:'🦁'},{l:'🐯',w:'Tigre',e:'🐯'},
      {l:'🐰',w:'Conejo',e:'🐰'},{l:'🐸',w:'Rana',e:'🐸'}
    ],
    birds:[
      {l:'🦜',w:'Loro',e:'🦜'},{l:'🦚',w:'Pavo Real',e:'🦚'},{l:'🦅',w:'Águila',e:'🦅'},
      {l:'🦉',w:'Búho',e:'🦉'},{l:'🐧',w:'Pingüino',e:'🐧'}
    ]
  }
};

var GRADS=[
  ['#ff6b35','#ff3d7f'],['#4e8ef7','#9b6bf7'],['#2ec97a','#00bcd4'],
  ['#ffb800','#ff8c42'],['#f25ea0','#9b6bf7'],['#00bcd4','#4e8ef7'],
  ['#77d42a','#2ec97a'],['#ff7043','#ff3d7f'],['#7c6cf7','#9b6bf7'],['#26d09c','#00bcd4']
];
var SPK=['✨','⭐','💫','🌟','⚡','🎊','🎇','🌈','🦋','🌸'];
var CHAT={
  en:{
    'what is a':'A is for Apple','what is b':'B is for Ball','what is c':'C is for Cat',
    'what is d':'D is for Dog','what is 1':'1 is One','what is 2':'2 is Two',
    'what is cat':'Cat says Meow','what is dog':'Dog says Woof','what is lion':'Lion says Roar',
    'hello':'Hi! I am KidoBot! Ask me about letters or numbers!',
    'hi':'Hello! Try asking What is A or What is 3','bye':'Bye bye! See you soon!',
    '_':'Try asking What is A or What is 5'
  },
  hi:{
    'a kya hai':'अ से अनार','b kya hai':'ब से बकरी',
    '1 kya hai':'एक','2 kya hai':'दो',
    'billi':'बिल्ली म्याऊँ बोलती है','kutta':'कुत्ता भौंकता है',
    'hello':'नमस्ते मैं KidoBot हूँ','namaste':'नमस्ते कैसे हो',
    '_':'पूछो A kya hai या 1 kya hai'
  },
  es:{
    'que es a':'A es de Avion','que es 1':'1 es Uno',
    'hola':'Hola Soy KidoBot','que es gato':'El gato dice Miau',
    '_':'Pregunta Que es A o Hola'
  }
};
var SUGS={
  en:['What is A?','What is 3?','What is cat?','Hello!','What is lion?'],
  hi:['A kya hai?','1 kya hai?','Billi?','Hello'],
  es:['Que es A?','Que es 1?','Hola','Que es gato?']
};

// ═══════════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════════
var S={user:null,lang:'en',db:JSON.parse(localStorage.getItem('kq')||'{}'),ll:'en',rl:'en'};
var LS={items:[],idx:0,mod:'alphabets',paused:false,timer:null,spelling:false};
var GS={data:[],idx:0,type:'match',score:0,ans:false};
var curAudio=null;

function saveDB(){localStorage.setItem('kq',JSON.stringify(S.db));}

// ═══════════════════════════════════════════════════
//  TTS — gTTS server + Web Speech fallback
// ═══════════════════════════════════════════════════
var _voices=[];
function loadVoices(){
  if(window.speechSynthesis){
    var v=window.speechSynthesis.getVoices();
    if(v&&v.length) _voices=v;
  }
}
loadVoices();
if(window.speechSynthesis) window.speechSynthesis.onvoiceschanged=loadVoices;
setTimeout(loadVoices,800);setTimeout(loadVoices,2000);

// Unlock audio on first click
var _unlocked=false;
document.addEventListener('click',function _u(){
  if(_unlocked) return; _unlocked=true;
  try{var a=new AudioContext();var b=a.createBuffer(1,1,22050);var s=a.createBufferSource();s.buffer=b;s.connect(a.destination);s.start(0);}catch(e){}
  document.removeEventListener('click',_u,true);
},true);

function cleanText(text,lang){
  // Remove emoji and non-language characters
  var t=text.replace(/[\u{1F000}-\u{1FFFF}]/gu,'')
            .replace(/[\u2600-\u27BF]/g,'')
            .replace(/[^\w\s\u0900-\u097F\u00C0-\u024F.,!?']/g,'')
            .replace(/\s+/g,' ').trim();
  if(lang==='hi') t=t.replace(/[a-zA-Z0-9]/g,'').replace(/\s+/g,' ').trim();
  return t||text.replace(/[^\w\s]/g,'').trim();
}

function buildPhrase(item,mod,lang){
  if(lang==='hi') return item.s||item.w;
  if(lang==='es') return mod==='alphabets'?item.l+' de '+item.w+'. '+item.w:item.w;
  if(mod==='alphabets') return item.l+' for '+item.w+'. '+item.w;
  if(mod==='numbers') return item.l+'. '+item.w+'. '+item.w;
  return item.w;
}

function speak(text,slow){
  if(!text) return;
  stopAudio();
  var lang=S.lang||'en';
  var clean=cleanText(text,lang);
  if(!clean) return;
  showBar(clean);setSp(true);

  // Try gTTS server first (6s timeout)
  var ctrl=new AbortController();
  var tid=setTimeout(function(){ctrl.abort();},6000);
  fetch('/speak',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({text:clean,lang:lang,slow:!!slow}),
    signal:ctrl.signal
  })
  .then(function(r){clearTimeout(tid);if(!r.ok) throw new Error(r.status);return r.arrayBuffer();})
  .then(function(ab){
    var url=URL.createObjectURL(new Blob([ab],{type:'audio/mpeg'}));
    curAudio=new Audio(url);
    curAudio.onended=function(){setSp(false);hideBar();URL.revokeObjectURL(url);};
    curAudio.onerror=function(){setSp(false);hideBar();wsFallback(clean,lang,slow);};
    var p=curAudio.play();
    if(p) p.catch(function(){setSp(false);hideBar();wsFallback(clean,lang,slow);});
  })
  .catch(function(e){
    clearTimeout(tid);
    console.log('gTTS failed, using Web Speech:',e.message||e);
    wsFallback(clean,lang,slow);
  });
}

function wsFallback(text,lang,slow){
  var ss=window.speechSynthesis;
  if(!ss){setSp(false);hideBar();return;}
  ss.cancel();setSp(true);showBar(text);
  var u=new SpeechSynthesisUtterance(text);
  if(lang==='hi'){
    u.lang='hi-IN';u.rate=slow?0.5:0.75;u.pitch=1.0;
    var hv=_voices.find(function(v){return v.lang==='hi-IN'||v.lang==='hi'||v.name.toLowerCase().indexOf('hindi')!==-1;});
    if(hv) u.voice=hv;
  } else if(lang==='es'){
    u.lang='es-ES';u.rate=slow?0.5:0.82;u.pitch=1.05;
    var ev=_voices.find(function(v){return v.lang.indexOf('es')===0;});
    if(ev) u.voice=ev;
  } else {
    u.lang='en-US';u.rate=slow?0.5:0.85;u.pitch=1.05;
    var pref=['Google UK English Female','Google US English','Microsoft Aria','Samantha','Karen'];
    for(var i=0;i<pref.length;i++){var v=_voices.find(function(x){return x.name.indexOf(pref[i])!==-1;});if(v){u.voice=v;break;}}
  }
  u.volume=1;
  u.onend=function(){setSp(false);hideBar();};
  u.onerror=function(){setSp(false);hideBar();};
  ss.speak(u);
}

function stopAudio(){
  if(curAudio){try{curAudio.pause();}catch(e){}curAudio=null;}
  if(window.speechSynthesis) window.speechSynthesis.cancel();
  setSp(false);hideBar();
}
function setSp(on){['wb1','wb2','wb3','wb4','wb5'].forEach(function(id){var e=document.getElementById(id);if(e)on?e.classList.add('sp'):e.classList.remove('sp');});}
function showBar(t){var b=document.getElementById('tts-bar');document.getElementById('tts-txt').textContent=t.length>35?t.slice(0,35)+'…':t;b.classList.add('show');}
function hideBar(){document.getElementById('tts-bar').classList.remove('show');}

// ═══════════════════════════════════════════════════
//  AUTH
// ═══════════════════════════════════════════════════
function atab(t){
  document.getElementById('f-login').style.display=t==='login'?'':'none';
  document.getElementById('f-reg').style.display=t==='reg'?'':'none';
  document.querySelectorAll('.tab').forEach(function(el,i){el.classList.toggle('on',(i===0&&t==='login')||(i===1&&t==='reg'));});
}
function slng(el,p){
  var l=el.dataset.l;if(p==='l') S.ll=l; else S.rl=l;
  el.parentNode.querySelectorAll('.lb').forEach(function(b){b.classList.remove('on');});el.classList.add('on');
}
function sal(id,msg,t){var e=document.getElementById(id);e.textContent=msg;e.style.display='block';e.className='al '+(t==='err'?'aerr':'aok');}
function hal(){['lerr','lok','rerr','rok'].forEach(function(id){var e=document.getElementById(id);if(e)e.style.display='none';});}

function doLogin(){
  var name=document.getElementById('ln').value.trim(),pw=document.getElementById('lp').value;
  if(!name){sal('lerr','Please enter your name 😊','err');return;}
  if(!pw){sal('lerr','Please enter your password 🔑','err');return;}
  fetch('/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:name,pw:pw})})
  .then(function(r){return r.json();})
  .then(function(res){
    if(res.status==='ok'){S.user={name:res.data.name,lang:res.data.lang};S.lang=S.ll||res.data.lang||'en';sal('lok','Welcome back, '+res.data.name+'! 🎉','ok');confetti();setTimeout(goHome,900);}
    else localLogin(name,pw);
  }).catch(function(){localLogin(name,pw);});
}
function localLogin(name,pw){
  var k=name.toLowerCase(),u=S.db[k];
  if(!u){sal('lerr','Name not found. Please register!','err');return;}
  if(u.pw!==pw){sal('lerr','Wrong password 🙈','err');return;}
  S.user=u;S.lang=S.ll||u.lang||'en';sal('lok','Welcome back, '+name+'! 🎉','ok');confetti();setTimeout(goHome,900);
}
function doReg(){
  var name=document.getElementById('rn').value.trim(),age=parseInt(document.getElementById('ra').value),pw=document.getElementById('rp').value,lang=S.rl||'en';
  if(!name){sal('rerr','Please enter your name 😊','err');return;}
  if(!age||age<3||age>5){sal('rerr','Age must be 3, 4, or 5 🎈','err');return;}
  if(!pw||pw.length<3){sal('rerr','Password needs 3+ characters 🔑','err');return;}
  S.db[name.toLowerCase()]={name:name,age:age,lang:lang,pw:pw};saveDB();
  S.user={name:name,age:age,lang:lang};S.lang=lang;
  sal('rok','Welcome to KidoQuest, '+name+'! 🦁🎉','ok');
  fetch('/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:name,age:age,lang:lang,pw:pw})}).catch(function(){});
  confetti();setTimeout(goHome,900);
}
function doLogout(){S.user=null;stopAudio();stopAP();hal();document.getElementById('ln').value='';document.getElementById('lp').value='';go('auth');fetch('/logout',{method:'POST'}).catch(function(){});}
function goHome(){
  go('home');document.getElementById('greet').textContent='Hello, '+S.user.name+'! ✨';
  loadMod('alphabets',document.querySelector('.mt'));
  loadGame('match',document.querySelector('.gt'));
  initChat();setTimeout(loadVoices,300);
}

// ═══════════════════════════════════════════════════
//  NAVIGATION
// ═══════════════════════════════════════════════════
function go(name){
  if(name!=='learn'){stopAP();stopAudio();}
  document.querySelectorAll('.screen').forEach(function(s){s.classList.remove('on');});
  document.getElementById('s-'+name).classList.add('on');
  if(name==='games'){GS.score=0;document.getElementById('gscore').textContent='0';}
}

// ═══════════════════════════════════════════════════
//  LEARNING
// ═══════════════════════════════════════════════════
function loadMod(mod,tabEl){
  document.querySelectorAll('.mt').forEach(function(t){t.classList.remove('on');});
  if(tabEl) tabEl.classList.add('on');
  LS.mod=mod;LS.idx=0;LS.paused=false;LS.spelling=false;
  LS.items=(D[S.lang]&&D[S.lang][mod])||D.en[mod]||[];
  document.getElementById('spbox').style.display='none';
  document.getElementById('pbtn').textContent='⏸ Pause';
  document.getElementById('apb').style.display='inline-flex';
  buildOrbit();buildBolts();buildStrip();showItem(0,true);
}
function buildStrip(){
  var strip=document.getElementById('mstrip');strip.innerHTML='';
  LS.items.forEach(function(item,i){
    var ch=document.createElement('div');ch.className='mchip'+(i===0?' ac':'');ch.id='ch'+i;ch.textContent=item.e||item.l;
    ch.onclick=(function(ix){return function(){stopAP();LS.idx=ix;LS.paused=false;document.getElementById('pbtn').textContent='⏸ Pause';document.getElementById('apb').style.display='inline-flex';showItem(ix,true);};})(i);
    strip.appendChild(ch);
  });
}
function buildOrbit(){
  var r=document.getElementById('oring');r.innerHTML='';
  ['⭐','✨','💫','🌟','⚡'].forEach(function(ic,i){
    var s=document.createElement('span');s.className='ostar';s.style.cssText='--r:110px;animation-duration:'+(8+i*1.5)+'s;animation-delay:'+(-i*1.4)+'s;font-size:15px;';s.textContent=ic;r.appendChild(s);
  });
}
function buildBolts(){
  var w=document.getElementById('lw');w.innerHTML='';
  for(var i=0;i<6;i++){var b=document.createElement('div');b.className='bolt';b.style.cssText='left:'+(8+Math.random()*80)+'%;top:'+(Math.random()*25)+'%;height:'+(40+Math.random()*80)+'px;--bd:'+(1.5+Math.random()*2)+'s;--bdl:'+(Math.random()*2)+'s;';w.appendChild(b);}
}
function showItem(idx,autoSpeak){
  stopAP();
  var item=LS.items[idx];if(!item) return;
  var g=GRADS[idx%GRADS.length];
  var card=document.getElementById('sc');
  card.style.background='linear-gradient(145deg,'+g[0]+','+g[1]+')';
  card.style.animation='none';void card.offsetWidth;card.style.animation='scIn .45s cubic-bezier(.34,1.4,.64,1)';
  document.getElementById('semoji').textContent=item.e;
  document.getElementById('slet').textContent=item.l;
  document.getElementById('sword').textContent=item.w;
  var pct=LS.items.length>1?Math.round((idx/(LS.items.length-1))*100):100;
  document.getElementById('pfi').style.width=pct+'%';
  document.getElementById('ptxt').textContent=(idx+1)+' of '+LS.items.length;
  document.getElementById('ppct').textContent=pct+'%';
  document.querySelectorAll('.mchip').forEach(function(c,i){c.classList.toggle('ac',i===idx);if(i<idx)c.classList.add('dc');else c.classList.remove('dc');});
  var ch=document.getElementById('ch'+idx);if(ch)ch.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
  document.getElementById('spbox').style.display='none';LS.spelling=false;
  sparkles();lightning();
  if(autoSpeak&&!LS.paused){
    var phrase=buildPhrase(item,LS.mod,S.lang);
    setTimeout(function(){speak(phrase,false);},300);
    var delay=Math.max(4000,phrase.length*140+2500);
    LS.timer=setTimeout(function(){if(!LS.paused){LS.idx=(LS.idx+1)%LS.items.length;showItem(LS.idx,true);}},delay);
  }
}
function stopAP(){if(LS.timer){clearTimeout(LS.timer);LS.timer=null;}stopAudio();}
function togPause(){
  LS.paused=!LS.paused;var btn=document.getElementById('pbtn'),apb=document.getElementById('apb');
  if(LS.paused){stopAP();btn.textContent='▶ Resume';apb.style.display='none';}
  else{btn.textContent='⏸ Pause';apb.style.display='inline-flex';showItem(LS.idx,true);}
}
function nav(d){
  stopAP();LS.paused=false;document.getElementById('pbtn').textContent='⏸ Pause';document.getElementById('apb').style.display='inline-flex';
  LS.idx=(LS.idx+d+LS.items.length)%LS.items.length;showItem(LS.idx,true);
}
function sayIt(){
  stopAP();LS.paused=true;document.getElementById('pbtn').textContent='▶ Resume';document.getElementById('apb').style.display='none';
  speak(buildPhrase(LS.items[LS.idx],LS.mod,S.lang),false);sparkles();lightning();
}
function saySlw(){
  stopAP();LS.paused=true;document.getElementById('pbtn').textContent='▶ Resume';document.getElementById('apb').style.display='none';
  speak(buildPhrase(LS.items[LS.idx],LS.mod,S.lang),true);sparkles();
}
function spellIt(){
  var item=LS.items[LS.idx];var box=document.getElementById('spbox'),div=document.getElementById('splets');
  LS.spelling=!LS.spelling;if(!LS.spelling){box.style.display='none';return;}
  box.style.display='block';div.innerHTML='';
  var word=item.w;var cols=['#ff6b35','#4e8ef7','#2ec97a','#ffb800','#9b6bf7','#ff3d7f','#00bcd4','#77d42a','#f25ea0','#7c6cf7'];
  var chips=[];
  word.split('').forEach(function(ch,i){
    var el=document.createElement('div');el.className='splc';el.id='slc'+i;
    el.style.background='linear-gradient(135deg,'+cols[i%cols.length]+','+cols[(i+3)%cols.length]+')';
    el.style.animationDelay=(i*.1)+'s';el.textContent=ch;div.appendChild(el);chips.push({el:el,ch:ch});
  });
  chips.forEach(function(c,i){setTimeout(function(){chips.forEach(function(x){x.el.classList.remove('hl');});c.el.classList.add('hl');speak(c.ch,false);},500+i*650);});
  setTimeout(function(){chips.forEach(function(x){x.el.classList.remove('hl');});speak(item.w,false);},500+word.length*650+600);
}
function sparkles(){
  var w=document.getElementById('spsw');w.innerHTML='';
  for(var i=0;i<16;i++){
    var s=document.createElement('span');s.className='spk';
    s.style.left=(5+Math.random()*90)+'%';s.style.top=(5+Math.random()*90)+'%';
    s.style.fontSize=(12+Math.random()*18)+'px';s.style.animationDelay=(Math.random()*.5)+'s';
    s.textContent=SPK[Math.floor(Math.random()*SPK.length)];w.appendChild(s);
  }
  setTimeout(function(){w.innerHTML='';},1600);
}
function lightning(){
  var f=document.getElementById('fl');
  f.style.opacity='1';setTimeout(function(){f.style.opacity='0';},60);
  setTimeout(function(){f.style.opacity='.4';},120);setTimeout(function(){f.style.opacity='0';},180);
}

// ═══════════════════════════════════════════════════
//  GAMES
// ═══════════════════════════════════════════════════
function loadGame(type,tabEl){
  document.querySelectorAll('.gt').forEach(function(t){t.classList.remove('on');});if(tabEl) tabEl.classList.add('on');
  GS.type=type;GS.idx=0;GS.score=0;document.getElementById('gscore').textContent='0';
  var mod=type==='number'?'numbers':type==='animal'?'animals':'alphabets';
  var pool=(D[S.lang]&&D[S.lang][mod])||D.en[mod]||[];
  GS.data=pool.slice().sort(function(){return Math.random()-.5;});nextQ();
}
function nextQ(){
  document.getElementById('gnxt').style.display='none';document.getElementById('gfb').textContent='';GS.ans=false;
  if(GS.idx>=GS.data.length){
    document.getElementById('gq').textContent='🏆';
    document.getElementById('gpr').textContent='Done! Score: '+GS.score+'/'+GS.data.length;
    document.getElementById('ogrid').innerHTML='';document.getElementById('gfb').textContent='🌟🌟🌟';
    confetti();speak('Amazing! You finished!',false);
    fetch('/save_score',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({game:GS.type,score:GS.score,total:GS.data.length})}).catch(function(){});
    return;
  }
  var item=GS.data[GS.idx++];
  if(GS.type==='match'){document.getElementById('gq').textContent=item.l;document.getElementById('gpr').textContent='Which picture matches this?';}
  else{document.getElementById('gq').textContent=item.e;document.getElementById('gpr').textContent=GS.type==='number'?'What number is this?':'What is this?';}
  var wrong=GS.data.filter(function(x){return x.w!==item.w;}).sort(function(){return Math.random()-.5;}).slice(0,3);
  var opts=[item].concat(wrong).sort(function(){return Math.random()-.5;});
  var grid=document.getElementById('ogrid');grid.innerHTML='';
  opts.forEach(function(opt){
    var btn=document.createElement('button');btn.className='ob';btn.textContent=GS.type==='match'?opt.e:opt.w;
    btn.onclick=function(){
      if(GS.ans) return;GS.ans=true;
      if(opt.w===item.w){btn.classList.add('cor');GS.score++;document.getElementById('gscore').textContent=GS.score;document.getElementById('gfb').textContent='✅ Correct! 🎉';speak('Correct! Well done!',false);confetti();lightning();}
      else{btn.classList.add('wrg');document.getElementById('gfb').textContent='❌ Try next one!';speak('Oops! Try again!',false);grid.querySelectorAll('.ob').forEach(function(b){if(b.textContent===(GS.type==='match'?item.e:item.w))b.classList.add('cor');});}
      document.getElementById('gnxt').style.display='block';
    };
    grid.appendChild(btn);
  });
  speak(GS.type==='match'?'Find the picture for '+item.l:'What is this?',false);
}

// ═══════════════════════════════════════════════════
//  CHATBOT
// ═══════════════════════════════════════════════════
function initChat(){
  document.getElementById('cmsgs').innerHTML='';
  addBot('Hi '+S.user.name+'! I am KidoBot! Ask me about letters, numbers, or animals!');
  var sugs=SUGS[S.lang]||SUGS.en,div=document.getElementById('csugs');div.innerHTML='';
  sugs.forEach(function(s){var btn=document.createElement('button');btn.className='csug';btn.textContent=s;btn.onclick=function(){document.getElementById('ci').value=s;sendMsg();};div.appendChild(btn);});
}
function addBot(text){
  var m=document.getElementById('cmsgs'),b=document.createElement('div');b.className='cb bot';b.textContent=text;m.appendChild(b);m.scrollTop=m.scrollHeight;
  setTimeout(function(){speak(text,false);},200);
}
function addUsr(text){var m=document.getElementById('cmsgs'),b=document.createElement('div');b.className='cb usr';b.textContent=text;m.appendChild(b);m.scrollTop=m.scrollHeight;}
function sendMsg(){
  var inp=document.getElementById('ci'),msg=inp.value.trim();if(!msg) return;addUsr(msg);inp.value='';
  fetch('/chatbot',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({text:msg,lang:S.lang})})
  .then(function(r){return r.json();}).then(function(res){setTimeout(function(){addBot(res.data&&res.data.reply?res.data.reply:localBot(msg.toLowerCase()));},400);})
  .catch(function(){setTimeout(function(){addBot(localBot(msg.toLowerCase()));},400);});
}
function localBot(msg){
  var rules=CHAT[S.lang]||CHAT.en;
  for(var k in rules) if(k!=='_'&&msg.indexOf(k)!==-1) return rules[k];
  for(var k2 in CHAT.en) if(k2!=='_'&&msg.indexOf(k2)!==-1) return CHAT.en[k2];
  return rules['_']||CHAT.en['_'];
}

// ═══════════════════════════════════════════════════
//  CONFETTI
// ═══════════════════════════════════════════════════
function confetti(){
  var w=document.getElementById('cfl');w.innerHTML='';
  var cols=['#ff8c42','#ff4d6d','#2ec97a','#4e8ef7','#ffb800','#9b6bf7','#00bcd4','#f25ea0'];
  for(var i=0;i<60;i++){
    var c=document.createElement('div');c.className='cn';
    c.style.left=Math.random()*100+'%';c.style.top=(Math.random()*8-4)+'%';
    c.style.background=cols[Math.floor(Math.random()*cols.length)];
    c.style.animationDelay=(Math.random()*.8)+'s';c.style.animationDuration=(1.2+Math.random()*.8)+'s';
    var z=7+Math.random()*14;c.style.width=z+'px';c.style.height=z+'px';c.style.borderRadius=Math.random()>.4?'50%':'3px';
    w.appendChild(c);
  }
  setTimeout(function(){w.innerHTML='';},2800);
}