const poems = [
  `Gözlerin gözlerime değince,  
  Dünya başka bir şeye dönüşür,  
  Aşkla dolu o kısa an içinde,  
  Kalplerin en derini yükselir.`,

  `Bir gülüşünle açar bahar,  
  Soğuk kalpler sıcacık olur,  
  Senle başlar her yeni karar,  
  Umuda dair her yol yol olur.`,

  `Yalnızlık rüzgar gibi eser,  
  Sen yanımda olunca diner,  
  Gözlerinle başlar her şey,  
  Aşkın ateşi kalbime iner.`,

  `Bir çiçek gibi açar sevda,  
  Gönül bahçemde büyür her an,  
  Senle gelen her güzel anda,  
  Mutluluk başlar sessizce yan.`,

  `Yıldızlar kayar gecede,  
  Dilek tutar aşkın kalbi,  
  Seninle her gece özel,  
  Rüyalar dolar sevgiyle.`,

  `Gözlerinle gördüm dünyayı,  
  Karanlıklar aydınlandı bir anda,  
  Seninle geçen her anı,  
  Sonsuza dek saklar zaman.`,

  `Sessizlikte fısıldar sevda,  
  Kalbimde senin adın yaşar,  
  Her nefeste biraz daha,  
  Aşkın gücü bana güç katar.`,

  `Deniz gibi derin gözlerin,  
  Bana huzur verir her an,  
  Senle geçer zamanın içinde,  
  Bir ömür boyu süren rüya.`,

  `Umutla başlar her sabah,  
  Sevginle dolar her an kalbim,  
  Senle her gün bir masal,  
  Yaşanır en güzel hayalim.`,

  `Aşkın ışığıyla yanar gece,  
  Kalpler birleşir sessizce,  
  Seninle anlam bulur hayat,  
  Her anı sevda ile süsler.`,

  `Bir bakışın yeter anlatmaya,  
  Tüm dünyayı sevgiyle sarmaya,  
  Seninle başlar her hikaye,  
  Kalbimde sonsuz bir bahar.`,

  `Ve son gün gelir, eller birleşir,  
  Aşk ile dolu tüm günler birikir,  
  Seninle devri âlem tamamlanır,  
  Ömür boyu süren sevgi yaşanır.`  
];

const buttonsContainer = document.querySelector('.cards-container');
const poemText = document.getElementById('poem-text');

for (let i = 1; i <= 12; i++) {
  const btn = document.createElement('button');
  btn.textContent = i;
  btn.dataset.day = i;
  buttonsContainer.appendChild(btn);

  btn.addEventListener('click', () => {
    document.querySelectorAll('.cards-container button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    poemText.textContent = poems[i - 1];
  });
}
