**Tarih:** 13.03.2025 **Durum:** 
**Karar Verenler:** Mehmet ÇETİN


-------------------------------------------------------------------------


### **1.Bağlam (Context)**

- **Proje Arka Planı:**
Bu proje, kullanıcıların SpaceX etkinliklerini ve organizasyonlarını kolayca takip edebileceği bir sistem olarak tasarlandı. Next.js ile geliştirilen uygulama, Supabase veritabanını kullanarak kullanıcı kayıt/giriş işlemlerini ve etkinlik verilerini yönetmektedir. Proje, kullanıcıların etkileşimli bir takvim aracılığıyla etkinliklerini görüntüleyebilmesine olanak tanırken, modern bir karanlık tema tasarımı sunmaktadır.

- **Problem Tanımı:**
Mevcut sistemlerde kullanıcılar etkinliklerini görüntülerken merkezi bir takvim yapısına sahip değiller veya farklı platformlar arasında senkronizasyon sorunu yaşıyorlar. Ayrıca, kullanıcı dostu ve ölçeklenebilir bir etkinlik yönetim arayüzü eksikliği bulunuyor. Bu proje, **Supabase** tabanlı bir veritabanı ile entegre çalışarak etkinlikleri saklamayı, dinamik takvim yapısı ile görselleştirmeyi ve **Next.js** altyapısı sayesinde hızlı ve modern bir kullanıcı deneyimi sunmayı amaçlamaktadır.

- **Gereksinimler & Kısıtlamalar:**
-**Next.js (App Router)** kullanılarak geliştirilmeli.
-**TanStack** form yönetimi kullanılarak geliştirilmeli.
-**Supabase** ile kimlik doğrulama ve veritabanı işlemleri yapılmalı.
-**Cypress** ile uçtan uca testler gerçekleştirilmeli.
-Karanlık tema desteği olmalı.

**İş Gereksinimleri:**
-Giriş ve kayıt işlemleri olmalı.
-Kullanıcı dostu bir arayüz sunulmalı.

**Kısıtlamalar:**
-Proje, **Supabase'in ücretsiz planı** ile çalışacak, bu nedenle **eşzamanlı bağlantılar** ve **veri saklama** konusunda sınırlamalar olabilir.
-**Sunucu tarafı işlem yapısı**, Next.js’in sunucu bileşenlerine uygun şekilde optimize edilmeli.
-Uygulamanın **mobil uyumluluğu** göz önünde bulundurulmalı.
-Yüksek trafikli kullanıcı senaryoları şu an için öncelikli değil.

- **Varsayımlar:**
-**Supabase kimlik doğrulama sistemi**, proje süresince kararlı ve kullanılabilir olacak.
-**Next.js App Router** uzun vadeli desteklenecek ve güncellemeler projeye büyük refaktör gerektirmeyecek.
-**Mobil uyumluluk** bir gereksinim olsa da, ana kullanım masaüstü tarayıcılar üzerinden olacak.


-------------------------------------------------------------------------


### **2.Karar (Decision)**

- **Seçilen Çözüm:**
-**Next.js (App Router)** kullanılarak modern ve performanslı bir yapı oluşturulmasına karar verildi.
-**Supabase** kimlik doğrulama ve veritabanı yönetimi için kullanılacak.
-**JWT tabanlı kimlik doğrulama** kullanılacak, böylece kullanıcı oturumları güvenli ve ölçeklenebilir olacak.
-**Cypress** ile uçtan uca testler yazılacak.

- **Uygulama Detayları:**
**Kimlik Doğrulama:** Supabase’in **Auth** modülü ile kullanıcı girişi sağlanacak, JWT token kullanılarak doğrulama yapılacak.
**Veri Yönetimi:** Etkinlikler, kullanıcılar ve diğer veriler Supabase’in PostgreSQL veritabanında tutulacak. CRUD işlemleri için Supabase SDK kullanılacak.
**Stil & Tema:** Karanlık tema öncelikli olacak ve Tailwind CSS ile tasarım sağlanacak.

- **Önemli Noktalar:**
**Test & Hata Ayıklama:**
-**Cypress** ile **E2E (End-to-End)** testler yazılacak.
-Supabase’in **log ve monitoring araçları** ile hata takibi yapılacak.


-------------------------------------------------------------------------


### **3.Sonuçlar (Consequences)**

- **Avantajlar:**
-Next.js’in SSR ve ISR özellikleri sayesinde hızlı yüklenme süreleri
-Kullanıcı girişi ile kişiselleştirilmiş deneyim sunulması
-Takvim entegrasyonu ile etkinliklerin kolay takip edilmesi

- **Dezantajlar / Riskler:**
-Büyük ölçekli veri trafiğinde performans yönetimi zorlukları
-Kimlik doğrulama ve kullanıcı verisi güvenliğiyle ilgili riskler

- **Gelecekteki Etkiler:**
-Daha fazla veri ve kullanıcı sayısıyla ölçeklendirme gereksinimi
-Canlı etkinlik bildirimleri gibi ek özelliklerin entegrasyon ihtiyacı


-------------------------------------------------------------------------


### **4. Alternatifler (Alternatives Considered)**

##### Alternatif 1: **React Hook Form**

- **Kısa Açıklama:** React Hook Form, form yönetimini optimize eden hafif ve performans dostu bir kütüphanedir.

- **Avantajlar:**
-Küçük boyutlu ve hızlı
-React’in native form özellikleriyle uyumlu
-Performans açısından daha verimli

- **Dezavantajlar:**
-Daha gelişmiş form yönetimi için ek yapılandırma gerekebilir
-Büyük ve kompleks formlar için state yönetimi zorlaşabilir

##### Alternatif 2: **VOD.dev**

- **Kısa Açıklama:** VOD.dev, form yönetimini basitleştirmek için tasarlanmış modern bir çözüm sunar.

- **Avantajlar:**
-TypeScript desteğiyle güvenli form yapısı
-Kolay entegrasyon ve iyi dokümantasyon

- **Dezavantajlar:**

-TanStack kadar geniş bir ekosisteme sahip değil
-Daha az topluluk desteği ve kaynak

##### Tercih Gerekçesi:

**TanStack*** yerine **React Hook Form** veya **VOD.dev** kullanmanın avantajları, daha az bağımlılık ve daha performanslı bir form yönetimi sunmasıdır. React Hook Form’un hafif yapısı ve VOD.dev’in modern çözümleri, form yönetimini optimize etmek için güçlü adaylardır.


-------------------------------------------------------------------------


### 5. Teknik Borç ve Uzun Vadeli Etkiler

- **Bu kararın uzun vadede bakım maliyeti ne olacak?**

-Seçilen teknolojilere bağlı olarak bakım maliyeti değişebilir. Next.js'in güçlü ekosistemi ve sürekli güncellenmesi, uzun vadede daha az teknik borç oluşturur.
-TanStack yerine React Hook Form veya VOD.dev kullanımı, form yönetimi açısından daha hafif olabilir, ancak topluluk desteği ve gelecekteki güncellemeler bakımından risk taşıyabilir.

- **Alternatif bir karar seçilseydi ne gibi avantaj/dezavantajları olurdu?**

-**TanStack kullanılsaydı:** Daha gelişmiş state yönetimi ile esneklik sağlardı, ancak daha karmaşık bir yapı oluşabilirdi.
-**React Hook Form kullanılsaydı:** Daha hafif ve performanslı olurdu, ancak bazı ileri düzey özellikler için ek yapılandırma gerekebilirdi.
-**VOD.dev kullanılsaydı:** Modern bir alternatif olarak sade ve kullanışlı olabilirdi, ancak daha az topluluk desteği bulunurdu.

- **Kararın geri alınması gerekirse ne kadar zor olur?**

-Next.js temel yapı olarak değiştirilmeyecekse büyük bir değişiklik gerekmeyebilir.
-Form yönetimi için farklı bir kütüphaneye geçiş, form bileşenlerinin ve doğrulama sistemlerinin yeniden düzenlenmesini gerektirir.
-Eğer büyük ölçekli veri ve kullanıcı sayısına ulaşılırsa, geçiş süreci daha maliyetli olabilir.


-------------------------------------------------------------------------


### 6. Ek Notlar (Additional Notes)

##### Referanslar:
- [Next.Js Dökümantasyonu](https://nextjs.org/docs)
- [TanStack Dökümantasyonu](https://tanstack.com/query/latest/docs/framework/react/overview)
- [Tailwind CSS Dökümantasyonu](https://tailwindcss.com/docs/installation/using-vite)
- [Cypress Dökümantasyonu](https://docs.cypress.io/app/get-started/why-cypress)
##### Gözden Geçirme / Revizyon Notları:

- **İlk versiyon:** Proje yapısı ve teknik kararlar belirlendi.
- **Revizyon:** Form yönetimi için alternatif çözümler değerlendirildi.
##### Diğer Açıklamalar:

- Bu doküman, proje sürecinde değişikliklere göre güncellenebilir.
- Seçilen teknolojiler, ölçeklenebilirlik ve performans gereksinimlerine göre tekrar gözden geçirilebilir.
