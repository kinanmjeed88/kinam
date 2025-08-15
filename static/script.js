document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
    // تحديث الصورة الشخصية
    updateProfilePic();
    
    // إعداد الأزرار العائمة
    setupFloatingButtons();
    
    // إعداد النوافذ المنبثقة
    setupModals();
    
    // إضافة تأثيرات التفاعل
    addInteractionEffects();
});

// تحديث الصورة الشخصية
function updateProfilePic() {
    const profilePicDisplay = document.getElementById("profile-pic-display");
    if (profilePicDisplay) {
        const savedProfilePic = localStorage.getItem("profilePic");
        if (savedProfilePic) {
            profilePicDisplay.src = savedProfilePic;
        }
    }
}

// إعداد الأزرار العائمة
function setupFloatingButtons() {
    window.addEventListener('scroll', function() {
        const backToTopButton = document.getElementById('backToTop');
        const backToHomeButton = document.getElementById('backToHome');
        
        if (backToTopButton) {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        }
        
        if (backToHomeButton) {
            backToHomeButton.classList.add('show');
        }
    });
}

// إعداد النوافذ المنبثقة
function setupModals() {
    // إعداد modal التليجرام
    const telegramModal = document.getElementById('telegramModal');
    if (telegramModal) {
        const closeButton = telegramModal.querySelector('.close-button');
        if (closeButton) {
            closeButton.addEventListener('click', closeTelegramModal);
        }
        
        window.addEventListener('click', function(event) {
            if (event.target === telegramModal) {
                closeTelegramModal();
            }
        });
    }
    
    // إعداد modal العام
    const popupModal = document.getElementById('popupModal');
    if (popupModal) {
        const closeButton = popupModal.querySelector('.close-button');
        if (closeButton) {
            closeButton.addEventListener('click', function() {
                popupModal.style.display = 'none';
            });
        }
        
        window.addEventListener('click', function(event) {
            if (event.target === popupModal) {
                popupModal.style.display = 'none';
            }
        });
    }
}

// إضافة تأثيرات التفاعل
function addInteractionEffects() {
    const cards = document.querySelectorAll('.section-card, .post-card, .channel-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// فتح modal التليجرام
function openTelegramModal() {
    const modal = document.getElementById('telegramModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// إغلاق modal التليجرام
function closeTelegramModal() {
    const modal = document.getElementById('telegramModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// فتح قناة تليجرام
function openTelegramChannel(url) {
    window.open(url, '_blank');
    closeTelegramModal();
}

// فتح modal القوائم المنسدلة
function openDropdownModal(dropdownId, title) {
    const modal = document.getElementById('popupModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalTitle || !modalContent) {
        console.error('Modal elements not found');
        return;
    }
    
    modalTitle.textContent = title;
    modalContent.innerHTML = '';
    
    // بيانات القوائم المنسدلة
    const dropdownData = {
        'movies-dropdown': [
            { icon: '🎬', text: 'تـ Cinemana X ايرثلنك', url: 'https://t.me/techtouch7/173' },
            { icon: '🎭', text: 'تـ CEE أفلام', url: 'https://t.me/techtouch7/174' },
            { icon: '📽️', text: 'تـ Monveibox أفلام', url: 'https://t.me/techtouch7/2070' },
            { icon: '🎪', text: 'سينمانا', url: 'https://t.me/techtouch7/1668' },
            { icon: '🍿', text: 'نتفلكس محاني', url: 'https://t.me/techtouch7/2676' },
            { icon: '📺', text: 'سيمو دراما', url: 'https://t.me/techtouch7/211?single' }
        ],
        'sports-dropdown': [
            { icon: '📺', text: 'MixFlix tv', url: 'https://t.me/techtouch7/1450' },
            { icon: '📺', text: 'دراما لايف tv', url: 'https://t.me/techtouch7/1686' },
            { icon: '⚽', text: 'الأسطورة tv', url: 'https://t.me/techtouch7/2367?single' },
            { icon: '🏀', text: 'ياسين tv', url: 'https://t.me/techtouch7/136' },
            { icon: '🏈', text: 'تـ BlackUltra', url: 'https://t.me/techtouch7/2719' },
            { icon: '🎾', text: 'تـ ZAIN LIVE', url: 'https://t.me/techtouch7/1992' }
        ],
        'video-dropdown': [
            { icon: '✂️', text: 'تـ Viva cut بديل كاب كات', url: 'https://t.me/techtouch7/2975?single' },
            { icon: '🎨', text: 'CapCut اصدار 2', url: 'https://t.me/techtouch7/3250' },
            { icon: '🎬', text: 'CapCut اصدار 1', url: 'https://t.me/techtouch7/3287' }
        ],
        'misc-dropdown': [
            { icon: '📱', text: 'تـ MYTV الأندرويد', url: 'https://t.me/techtouch7/204' },
            { icon: '📲', text: 'تـ MYTV الآيفـــون', url: 'https://t.me/techtouch7/1041' },
            { icon: '📺', text: 'شبكتي tv للشاشات', url: 'https://t.me/techtouch7/1556' },
            { icon: '📱', text: 'شبكتي tv للهاتف', url: 'https://t.me/techtouch7/1818' },
            { icon: '🖥️', text: 'المنصة X للشاشات', url: 'https://t.me/techtouch7/1639' },
            { icon: '📲', text: 'المنصة X للهاتف', url: 'https://t.me/techtouch7/1533' }
        ]
    };
    
    const items = dropdownData[dropdownId];
    if (items) {
        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'modal-item';
            
            itemDiv.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                window.open(item.url, '_blank');
                modal.style.display = 'none';
            });
            
            itemDiv.innerHTML = `
                <span class='modal-item-icon'>${item.icon}</span>
                <span class='modal-item-text'>${item.text}</span>
            `;
            modalContent.appendChild(itemDiv);
        });
    }
    
    modal.style.display = 'block';
}

// التنقل إلى منشور
function goToPost(permalink) {
    window.location.href = permalink;
}

// التنقل إلى قسم
function goToSection(permalink) {
    window.location.href = permalink;
}

// العودة للأعلى
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// وظائف إدارة الموقع (للاستخدام في صفحة الإدارة)
function updateAd() {
    const newAdText = document.getElementById("ad-input").value;
    if (newAdText) {
        alert("تم تحديث الإعلان بنجاح! (التغيير سيظهر بعد نشر Netlify)");
    } else {
        alert("يرجى إدخال نص الإعلان!");
    }
}

function addPost() {
    alert("تم إضافة المنشور بنجاح! (التغيير سيظهر بعد نشر Netlify)");
}

function updateProfilePicture() {
    const profilePicInput = document.getElementById("profile-pic-input");
    if (profilePicInput && profilePicInput.files && profilePicInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem("profilePic", e.target.result);
            updateProfilePic();
            alert("تم تحديث الصورة الشخصية بنجاح!");
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    } else {
        alert("يرجى اختيار صورة!");
    }
}


