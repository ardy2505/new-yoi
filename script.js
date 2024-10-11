
const showMoreBtn = document.getElementById('showMoreBtn');
const moreInfo = document.getElementById('moreInfo');


showMoreBtn.addEventListener('click', function() {
    
    if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        moreInfo.style.display = 'block';
        showMoreBtn.textContent = 'Sembunyikan Info';  
    } else {
        
        moreInfo.style.display = 'none';
        showMoreBtn.textContent = 'Tampilkan Info Lebih Lanjut';  
    }
});
