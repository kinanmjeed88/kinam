document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded, initializing...");
    requestAnimationFrame(() => {
        setupEventListeners();
        updateProfilePic();
        // لا حاجة لـ loadContent() هنا، المحتوى يتم تحميله بواسطة Hugo
    });
});

// تحديث الصورة الشخصية في الشريط العلوي
function updateProfilePic() {
    const profilePicDisplay = document.getElementById("profile-pic-display");
    if (profilePicDisplay) {
        const savedProfilePic = localStorage.getItem("profilePic");
        if (savedProfilePic) {
            profilePicDisplay.src = savedProfilePic;
        }
    }
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // إضافة تأثيرات التفاعل للبطاقات
    const cards = document.querySelectorAll(".post-card, .telegram-section");
    cards.forEach(card => {
        card.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-3px) scale(1.02)";
        });
        
        card.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0) scale(1)";
        });
    });

    // إضافة مستمعي الأحداث لأزرار الأقسام (البطاقات الصغيرة)
    const dropdownCards = document.querySelectorAll(".dropdown-card");
    dropdownCards.forEach(card => {
        card.addEventListener("click", function() {
            const modalId = this.getAttribute("onclick").match(/openDropdownModal\(\'(.*?)\'/)[1];
            const modalTitle = this.getAttribute("onclick").match(/openDropdownModal\(\'[^\']+\', \'(.*?)\'\)/)[1];
            openDropdownModal(modalId, modalTitle);
        });
    });

    // إعداد زر العودة للأعلى
    window.addEventListener("scroll", function() {
        const backToTopButton = document.getElementById("backToTop");
        if (backToTopButton) {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add("show");
            } else {
                backToTopButton.classList.remove("show");
            }
        }
    });

    // إعداد زر العودة للصفحة الرئيسية (يظهر دائماً)
    const backToHomeButton = document.getElementById("backToHome");
    if (backToHomeButton) {
        backToHomeButton.classList.add("show");
    }
}

// وظيفة العودة للأعلى
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// وظيفة فتح النافذة المنبثقة
function openDropdownModal(modalId, title) {
    const modal = document.getElementById("popupModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");
    
    if (!modal || !modalTitle || !modalContent) return;

    modalTitle.textContent = title;
    modalContent.innerHTML = ""; // مسح المحتوى السابق

    let items = [];
    if (modalId === "movies-dropdown") {
        items = [
            { name: "Netflix", url: "https://netflix.com" },
            { name: "Disney+", url: "https://disneyplus.com" },
            { name: "Amazon Prime", url: "https://primevideo.com" },
            { name: "Shahid", url: "https://shahid.mbc.net" }
        ];
    } else if (modalId === "sports-dropdown") {
        items = [
            { name: "ESPN", url: "https://espn.com" },
            { name: "beIN Sports", url: "https://beinsports.com" },
            { name: "KooraLive", url: "https://kooralive.tv" },
            { name: "Yalla Shoot", url: "https://yallashoot.com" }
        ];
    } else if (modalId === "video-dropdown") {
        items = [
            { name: "Adobe Premiere", url: "https://www.adobe.com/products/premiere.html" },
            { name: "DaVinci Resolve", url: "https://www.blackmagicdesign.com/products/davinciresolve/" },
            { name: "Filmora", url: "https://filmora.wondershare.com/" }
        ];
    } else if (modalId === "misc-dropdown") {
        items = [
            { name: "قناة الألعاب", url: "https://t.me/techtouch0/4882" },
            { name: "جميع قنواتي", url: "https://t.me/addlist/Gxcy1FFJONhkMjFi" }
        ];
    }

    items.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "modal-item";
        itemDiv.innerHTML = `<a href="${item.url}" target="_blank">${item.name}</a>`;
        modalContent.appendChild(itemDiv);
    });

    modal.style.display = "block";

    // إغلاق النافذة المنبثقة عند النقر على زر الإغلاق
    const closeButton = modal.querySelector(".close-button");
    if (closeButton) {
        closeButton.onclick = function() {
            modal.style.display = "none";
        };
    }

    // إغلاق النافذة المنبثقة عند النقر خارجها
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

// وظيفة التنقل إلى منشور (تستخدمها بطاقات المنشورات)
function goToPost(permalink) {
    window.location.href = permalink;
}

// وظيفة التنقل إلى قسم (تستخدمها بطاقات الأقسام)
function goToSection(permalink) {
    window.location.href = permalink;
}

// وظيفة تحديث الإعلان (لصفحة الإدارة فقط)
function updateAd() {
    const newAdText = document.getElementById("ad-input").value;
    if (newAdText) {
        // هنا يجب أن يتم حفظ التغيير عبر Netlify CMS API وليس localStorage
        // حالياً، هذا الجزء مخصص للتفاعل مع حقل الإدخال في لوحة التحكم
        alert("تم تحديث الإعلان بنجاح! (التغيير سيظهر بعد نشر Netlify)");
    } else {
        alert("يرجى إدخال نص الإعلان!");
    }
}

// وظيفة إضافة منشور جديد (لصفحة الإدارة فقط)
function addPost() {
    // هنا يجب أن يتم حفظ المنشور عبر Netlify CMS API وليس localStorage
    alert("تم إضافة المنشور بنجاح! (التغيير سيظهر بعد نشر Netlify)");
}

// وظيفة تحديث الصورة الشخصية (لصفحة الإدارة فقط)
function updateProfilePicture() {
    const profilePicInput = document.getElementById("profile-pic-input");
    if (profilePicInput && profilePicInput.files && profilePicInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // هنا يجب أن يتم حفظ الصورة عبر Netlify CMS API وليس localStorage
            localStorage.setItem("profilePic", e.target.result);
            updateProfilePic();
            alert("تم تحديث الصورة الشخصية بنجاح! (التغيير سيظهر بعد نشر Netlify)");
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    } else {
        alert("يرجى اختيار صورة!");
    }
}


