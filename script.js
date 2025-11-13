document.addEventListener('DOMContentLoaded', function() {
    // --- إعدادات يمكنك تغييرها ---
    const yourName = "محمد البوزيدي | mohammed AL-buzidi";
    const bioText = "مطور ويب وشغوف بالتقنيات الحديثة. أبحث دائماً عن تحديات جديدة لتوسيع معرفتي ومهاراتي في عالم البرمجة.";
    
    const nameContainer = document.getElementById('name-container');
    const bioElement = document.getElementById('bio-text');
    
    const typingDelay = 50; // سرعة الكتابة (بالمللي ثانية)
    const initialDelay = 2200; // تأخير قبل بدء الكتابة (لإعطاء وقت للحركات)

    // دالة تأثير الكتابة
    function typeWriter(element, text, i, callback) {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            setTimeout(() => typeWriter(element, text, i + 1, callback), typingDelay);
        } else if (callback) {
            callback();
        }
    }

    // بدء التأثيرات بعد فترة تأخير
    setTimeout(() => {
        // أضف كلاس المؤشر قبل بدء الكتابة
        bioElement.classList.add('typing-effect');
        
        // ابدأ بكتابة النبذة أولاً
        typeWriter(bioElement, bioText, 0, () => {
            // عند انتهاء كتابة النبذة
            bioElement.classList.remove('typing-effect'); // إزالة مؤشر الكتابة
            
            // الآن أظهر الاسم
            nameContainer.textContent = yourName;
            nameContainer.style.opacity = '0';
            nameContainer.style.transition = 'opacity 1s ease';
            setTimeout(() => nameContainer.style.opacity = '1', 100); // إظهار الاسم بتدرج
        });
    }, initialDelay);
});
