
const contact = document.querySelector('.contact')
const button = document.getElementById('share');
const pageMinWidth = window.matchMedia('(min-width: 900px)');
const pageMaxWidth = window.matchMedia('(max-width: 900px)');


let isOnMob = true;
let isOnMon = true;

//  change mobil device contacts 

const handlePageSizeMobil = () => {
  if (pageMaxWidth.matches){
  if (isOnMob){
  contact.style.zIndex = '10';
  contact.style.display = 'block'
  button.classList.add('icon-active');
  isOnMob = false;
  } 
   else  {
  contact.style.zIndex = '-2';
  button.classList.remove('icon-active');
  isOnMob = true;
  }
}
}

// desktop size contact information different display
 const handlePageSizeMonitor = () => {
 
    if (pageMinWidth.matches) {
      if(isOnMon){
      contact.style.display = 'block';
      contact.style.zIndex = '10';
      isOnMon = false;
      } else {
      contact.style.display = 'none';
      isOnMon = true;
      }
    }
};



button.addEventListener('click', handlePageSizeMobil)


button.addEventListener('mouseover', handlePageSizeMonitor);


button.addEventListener('mouseleave', handlePageSizeMonitor)