const toggle=document.querySelector('.nav-toggle');const nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','메뉴 열기')}));
const topButton=document.querySelector('.top-button');const updateTop=()=>topButton.classList.toggle('visible',window.scrollY>450);window.addEventListener('scroll',updateTop,{passive:true});updateTop();topButton.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
document.querySelector('#year').textContent=new Date().getFullYear();
document.querySelector('#copy-address').addEventListener('click',async()=>{const address='대전광역시 서구 복수동로52번길 135-58';const status=document.querySelector('#copy-status');try{await navigator.clipboard.writeText(address);status.textContent='주소를 복사했습니다.'}catch(e){status.textContent='주소 복사가 지원되지 않습니다. 위 주소를 직접 선택해 복사해 주세요.'}});
const video=document.querySelector('.hero-video');if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){video.pause()}else{video.play().catch(()=>{})}
