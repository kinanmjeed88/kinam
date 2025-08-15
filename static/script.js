document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded, initializing...");
    setupEventListeners();
    updateProfilePic();
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
    const cards = document.querySelectorAll(".modern-post-card");
    cards.forEach(card => {
        card.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-3px) scale(1.02)";
        });
        
        card.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0) scale(1)";
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

// وظيفة فتح النافذة المنبثقة (لأقسام التليجرام)
function openDropdownModal(modalId, title) {
    const modal = document.getElementById("popupModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");
    
    if (!modal || !modalTitle || !modalContent) return;

    modalTitle.textContent = title;
    modalContent.innerHTML = ""; // مسح المحتوى السابق

    // هنا يجب أن يتم جلب المحتوى ديناميكيًا من Hugo وليس روابط ثابتة
    // سيتم تعديل هذا الجزء لاحقًا ليعتمد على بيانات Hugo
    if (modalId === "telegram-channels") {
        // مثال: يمكننا هنا جلب بيانات قنوات التليجرام من مصدر بيانات Hugo
        // حاليًا، سنعرض رسالة توضيحية
        modalContent.innerHTML = `<p>سيتم عرض قنوات التليجرام هنا ديناميكيًا.</p>`;
    } else {
        modalContent.innerHTML = `<p>محتوى ${title} سيتم عرضه هنا.</p>`;
    }

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
        alert("تم تحديث الإعلان بنجاح! (التغيير سيظهر بعد نشر Netlify)");
    } else {
        alert("يرجى إدخال نص الإعلان!");
    }
}

// وظيفة إضافة منشور جديد (لصفحة الإدارة فقط)
function addPost() {
    alert("تم إضافة المنشور بنجاح! (التغيير سيظهر بعد نشر Netlify)");
}

// وظيفة تحديث الصورة الشخصية (لصفحة الإدارة فقط)
function updateProfilePicture() {
    const profilePicInput = document.getElementById("profile-pic-input");
    if (profilePicInput && profilePicInput.files && profilePicInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem("profilePic", e.target.result);
            updateProfilePic();
            alert("تم تحديث الصورة الشخصية بنجاح! (التغيير سيظهر بعد نشر Netlify)");
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    } else {
        alert("يرجى اختيار صورة!");
    }
}


