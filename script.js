const spices=[
 {name:'Karabiber',latin:'Piper nigrum',part:'fruit',icon:'⚫',origin:'Güney Hindistan / Malabar',etym:'Türkçe kara + biber; biber hattı Sanskrit pippalī ile ilişkilidir.',chem:'Piperin',history:'Antik ve Ortaçağ ticaretinin en değerli ürünlerinden biri.',tags:['yakıcı','ticaret','piperin']},
 {name:'Tarçın',latin:'Cinnamomum verum/cassia',part:'bark',icon:'🟤',origin:'Sri Lanka ve Güney Asya',etym:'Arapça/Persçe kanallar üzerinden Türkçeye yerleşmiş ad.',chem:'Cinnamaldehyde',history:'Koku, tatlı, tıp ve ritüel tarihinde önemli bir kabuk.',tags:['tatlı','kabuk','aldehit']},
 {name:'Karanfil',latin:'Syzygium aromaticum',part:'flower',icon:'🌺',origin:'Maluku Adaları',etym:'Şekli küçük çiviye benzediği için birçok dilde “clove/Klöve” çivi çağrışımı taşır.',chem:'Eugenol',history:'Doğu Hint Adaları baharat ağının klasik ürünü.',tags:['çiçek tomurcuğu','eugenol','keskin']},
 {name:'Kimyon',latin:'Cuminum cyminum',part:'seed',icon:'🌾',origin:'Doğu Akdeniz / Batı Asya',etym:'Latince cuminum, Yunanca kyminon hattı.',chem:'Cuminaldehyde',history:'Antik mutfaklarda, ekmekte ve et yemeklerinde kullanılmıştır.',tags:['topraksı','tohum','antik']},
 {name:'Zerdeçal',latin:'Curcuma longa',part:'root',icon:'🟡',origin:'Güney Asya',etym:'Türkçede zerd/sarı çağrışımı; İngilizce turmeric.',chem:'Curcumin',history:'Renk, ritüel ve mutfak üçgeninde güçlü bir rizom.',tags:['sarı','rizom','kurkumin']},
 {name:'Zencefil',latin:'Zingiber officinale',part:'root',icon:'🫚',origin:'Güneydoğu Asya',etym:'Sanskrit śṛṅgavera hattından Avrupa dillerine uzanan ad ailesi.',chem:'Gingerol',history:'Deniz ticaretiyle Akdeniz ve Avrupa mutfaklarına taşınmıştır.',tags:['ısıtıcı','rizom','gingerol']},
 {name:'Kakule',latin:'Elettaria cardamomum',part:'seed',icon:'💚',origin:'Güney Hindistan',etym:'Arapça ve Farsça aktarım katmanlarıyla Osmanlı mutfağına girmiştir.',chem:'1,8-cineole',history:'Kahve, tatlı ve pilav kültürlerinde seçkin bir aroma.',tags:['ferah','tohum','kahve']},
 {name:'Muskat',latin:'Myristica fragrans',part:'seed',icon:'🥥',origin:'Banda Adaları',etym:'Nutmeg “misk kokulu ceviz” anlam katmanları taşır.',chem:'Myristicin',history:'Erken modern çağda Avrupa rekabetinin sembol baharatlarından.',tags:['sıcak','ada','yoğun']},
 {name:'Safran',latin:'Crocus sativus',part:'flower',icon:'🧡',origin:'Muhtemelen İran / Doğu Akdeniz hattı',etym:'Arapça zaʿfarān üzerinden birçok dile yayılmıştır.',chem:'Crocin / safranal',history:'Renk, lüks ve ilaç tarihi içinde çok değerli bir stigma.',tags:['lüks','renk','çiçek']},
 {name:'Sumak',latin:'Rhus coriaria',part:'fruit',icon:'🔴',origin:'Akdeniz / Batı Asya',etym:'Süryanice/Arapça summāq, kırmızı anlam alanıyla ilişkilidir.',chem:'Organik asitler',history:'Ekşi tat için limon öncesi/yanı bir sofra malzemesi.',tags:['ekşi','meyve','sofra']},
 {name:'Kişniş',latin:'Coriandrum sativum',part:'seed',icon:'🟢',origin:'Akdeniz / Batı Asya',etym:'Yunanca koriannon; yaprak ve tohum aroması farklıdır.',chem:'Linalool',history:'Antik Mısır ve Akdeniz mutfaklarında izleri vardır.',tags:['narenciye','tohum','linalool']},
 {name:'Pul biber',latin:'Capsicum annuum',part:'fruit',icon:'🌶️',origin:'Amerika kıtası',etym:'Biber adı Eski Dünya pepper kavramıyla Yeni Dünya capsicumuna aktarılmıştır.',chem:'Capsaicin',history:'16. yüzyıldan sonra Osmanlı ve Akdeniz mutfaklarına yerleşmiştir.',tags:['acı','capsaicin','yeni dünya']}
];
const cards=document.querySelector('#cards');
function renderCards(filter='all'){
 cards.innerHTML='';
 spices.filter(s=>filter==='all'||s.part===filter).forEach(s=>{
  const el=document.createElement('article'); el.className='card';
  el.innerHTML=`<div class="icon">${s.icon}</div><h3>${s.name}</h3><p class="small"><i>${s.latin}</i></p><span class="tag">${s.part}</span><span class="tag">${s.chem}</span><p><b>Köken:</b> ${s.origin}</p><p><b>Etimoloji:</b> ${s.etym}</p><p><b>Tarih:</b> ${s.history}</p><div>${s.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>`;
  cards.appendChild(el);
 });
}
renderCards();
document.querySelectorAll('.filters button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.filters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderCards(b.dataset.filter)}));
const svg=document.querySelector('#spiceCloud');
const nodes=[
 ['Karabiber',450,90,'#3d3430'],['Tarçın',260,170,'#9b5a34'],['Karanfil',610,170,'#7b2d26'],['Kimyon',150,295,'#b08a4a'],['Zerdeçal',365,260,'#d5a51f'],['Zencefil',540,285,'#c99456'],['Kakule',735,290,'#6e8b55'],['Muskat',275,410,'#8c5b3e'],['Safran',460,420,'#d7832f'],['Sumak',645,420,'#a33b35']
];
const links=[[0,1],[0,2],[1,2],[4,5],[5,6],[3,10],[7,2],[8,6],[9,3],[4,8],[0,3],[1,7]];
links.forEach(([a,b])=>{if(!nodes[a]||!nodes[b])return; const l=document.createElementNS('http://www.w3.org/2000/svg','line');l.setAttribute('x1',nodes[a][1]);l.setAttribute('y1',nodes[a][2]);l.setAttribute('x2',nodes[b][1]);l.setAttribute('y2',nodes[b][2]);l.setAttribute('class','link');svg.appendChild(l)});
nodes.forEach(n=>{const g=document.createElementNS('http://www.w3.org/2000/svg','g');g.setAttribute('class','node'); const c=document.createElementNS('http://www.w3.org/2000/svg','circle');c.setAttribute('cx',n[1]);c.setAttribute('cy',n[2]);c.setAttribute('r',46);c.setAttribute('fill',n[3]);c.setAttribute('class','circle'); const t=document.createElementNS('http://www.w3.org/2000/svg','text');t.setAttribute('x',n[1]);t.setAttribute('y',n[2]+5);t.setAttribute('text-anchor','middle');t.setAttribute('font-size','15');t.textContent=n[0];g.append(c,t);svg.appendChild(g)});
