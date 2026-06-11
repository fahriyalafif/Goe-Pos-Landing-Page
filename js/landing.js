(function () {
  var header = document.querySelector("[data-header]");
  var nav = document.querySelector("[data-nav]");
  var toggle = document.querySelector("[data-nav-toggle]");
  var revealItems = document.querySelectorAll(".reveal");
  var languageButtons = document.querySelectorAll("[data-lang-option]");
  var defaultLang = document.documentElement.getAttribute("data-lang") || "en";
  var translations = {
    id: {
      navSolutions: "Solusi",
      navWorkflow: "Alur kerja",
      navFeatures: "Fitur",
      navPricing: "Harga",
      heroHeadline: "Aplikasi kasir<span class=\"dot\">.</span>",
      heroDesignedTitle: "Dirancang khusus",
      heroEyebrow: "Aplikasi kasir untuk bisnis kuliner",
      heroTitle: "Aplikasi kasir yang dirancang khusus untuk restoran, cafe, rumah makan & kuliner.",
      heroLead: "Khusus untuk bisnis restoran, cafe, rumah makan, dan kuliner yang butuh kasir cepat, stabil, mudah digunakan, dan siap membantu operasional harian.",
      heroEasyTitle: "Gak ribet",
      heroEasyText: "Mudah digunakan,<br>siap pakai",
      heroFastTitle: "Anti lemot",
      heroFastText: "Cepat di semua<br>perangkat",
      heroSafeTitle: "99% anti error",
      heroSafeText: "Transaksi aman,<br>data terlindungi",
      heroStableTitle: "Anti ngelag",
      heroStableText: "Stabil dan lancar,<br>tanpa gangguan",
      heroBusinessText: "Khusus untuk bisnis<br><strong>restoran, cafe, rumah makan dan kuliner.</strong>",
      heroSupportTitle: "Dukungan Chat Langsung",
      heroSupportText: "Support langsung live<br>chating via aplikasi",
      downloadPlay: "Gratis, coba sekarang",
      seeFeatures: "Lihat fitur",
      proofOffline: "<strong>Online/offline</strong> otomatis",
      proofUsers: "<strong>Banyak pengguna</strong> untuk tim",
      proofReports: "<strong>Laporan</strong> bisa dipantau",
      todayTransactions: "Transaksi hari ini",
      todayTransactionsNote: "Pelayan, kasir, dan dapur tetap terhubung",
      connectionStatus: "Status koneksi",
      offlineReady: "Siap offline",
      offlineReadyNote: "Data sinkron lagi saat internet kembali",
      businessEyebrow: "Dibuat untuk bisnis kuliner",
      businessTitle: "Cocok untuk outlet kecil sampai usaha yang timnya mulai ramai.",
      businessLead: "Setiap tempat makan punya ritme sendiri. GoePOS membantu alurnya tetap enak diikuti, dari pelanggan pesan, pesanan masuk ke dapur, sampai laporan tutup kasir.",
      businessRestaurantTitle: "Restoran",
      businessCafeTitle: "Kafe",
      businessTruckTitle: "Food truck",
      restaurantText: "Order meja, kasir, dapur, dan laporan harian tersusun lebih jelas.",
      cafeText: "Cocok untuk makan di tempat, bawa pulang, dan antrean yang perlu dilayani cepat.",
      truckText: "Tetap bisa jualan di lokasi yang koneksinya belum tentu stabil.",
      pillarFastTitle: "Cepat",
      pillarStableTitle: "Stabil",
      pillarFlexTitle: "Fleksibel",
      fastText: "Input order dibuat cepat, termasuk dukungan keyboard fisik 3 digit untuk outlet yang transaksinya padat.",
      stableText: "Saat internet lambat atau putus, kasir tetap bisa berjalan dan sinkron lagi tanpa setup manual.",
      flexText: "Dari pesanan sederhana sampai bagi tagihan, tahan transaksi, dan reservasi, alurnya bisa mengikuti cara kerja outlet.",
      workflowEyebrow: "Alur kerja restoran",
      workflowTitle: "Pesanan masuk, dapur bergerak, kasir beres, laporan siap dicek.",
      workflowOrderLabel: "Pesan",
      workflowOrderTitle: "Pelayan input pesanan",
      workflowOrderText: "Pesanan dari HP atau tablet langsung masuk ke sistem. Pelayan tidak perlu bolak-balik bawa catatan kertas.",
      workflowCashierLabel: "Kasir",
      workflowCashierTitle: "Kasir proses pembayaran",
      workflowCashierText: "Kasir menghitung transaksi, membagi tagihan bila perlu, mencetak struk, dan mencatat pengeluaran outlet.",
      workflowKitchenLabel: "Dapur",
      workflowKitchenTitle: "Dapur langsung tahu",
      workflowKitchenText: "Pesanan bisa tampil di KDS atau dicetak ke printer dapur, bar, maupun kasir sesuai kebutuhan outlet.",
      workflowReportLabel: "Laporan",
      workflowReportTitle: "Laporan siap dicek",
      workflowReportText: "Pemilik bisa melihat ringkasan penjualan, mengunduh laporan PDF, atau mencetaknya untuk arsip.",
      featuresEyebrow: "Fitur utama",
      featuresTitle: "Yang dibutuhkan outlet ada, tapi tetap mudah dipakai.",
      featuresLead: "Fitur GoePOS dirancang untuk pekerjaan harian di outlet, bukan sekadar daftar menu di aplikasi. Tim bisa fokus melayani, sementara data tetap tercatat rapi.",
      featureOfflineTitle: "Kasir online dan offline",
      featureOfflineText: "Transaksi tetap bisa dicatat saat internet tidak stabil, lalu sinkron lagi tanpa pengaturan manual.",
      featureOrderingTitle: "Pesanan lewat HP dan POS pelayan",
      featureOrderingText: "Pelayan bisa input order dari HP atau tablet Android, lalu pesanan langsung terkirim ke kasir dan dapur.",
      featureKdsTitle: "Kitchen Display System",
      featureKdsText: "Dapur lebih mudah membaca pesanan, mengatur urutan masak, dan mengurangi order yang terlewat.",
      featureStockTitle: "Stok produk dan bahan baku",
      featureStockText: "Pantau stok produk dan bahan baku supaya belanja dan produksi lebih terukur.",
      featureExpenseTitle: "Pengeluaran kasir",
      featureExpenseText: "Catat belanja kecil, kebutuhan operasional, atau pengeluaran harian dari kas outlet.",
      featureUserTitle: "Akses sesuai peran",
      featureUserText: "Pemilik, kasir, pelayan, dan tim dapur bisa mendapat akses sesuai tugasnya masing-masing.",
      featureFastTitle: "Transaksi cepat",
      featureFastText: "Alur kasir dibuat praktis, termasuk dukungan keyboard fisik 3 digit untuk input yang lebih cepat.",
      featureReportTitle: "Laporan PDF dan cetak",
      featureReportText: "Laporan bisa dipantau online, diunduh sebagai PDF atau XLS, dan dicetak langsung dari printer kasir.",
      featureCloudTitle: "Sinkronisasi cloud",
      featureCloudText: "Data outlet tersinkron melalui cloud, jadi pemilik tetap bisa memantau tanpa harus selalu berada di tempat.",
      featureReceiptTitle: "Struk lebih aman",
      featureReceiptText: "Riwayat struk dibuat lebih aman sehingga transaksi tidak mudah hilang atau dihapus sembarangan.",
      featureSplitTitle: "Bagi tagihan, tahan transaksi, dan reservasi",
      featureSplitText: "Berguna saat pelanggan ingin berbagi tagihan, transaksi perlu ditahan, atau pesanan dibuat lebih dulu.",
      featurePrinterTitle: "Printer dapur, kasir, dan bar",
      featurePrinterText: "Cetak order dan struk ke titik yang tepat agar alur kerja tiap bagian lebih lancar.",
      spotlightEyebrow: "",
      spotlightTitle: "Satu aplikasi untuk kasir, order, dapur, laporan, dan operasional kuliner",
      spotlightDescription: "Waiter mencatat pesanan, dapur menyiapkan menu, dan kasir memproses pembayaran dalam satu alur operasional yang rapi",
      spotlightLead: "",
      spotlightPayKicker: "",
      spotlightPayTitle: "Transaksi Cepat untuk Kasir",
      spotlightPayText: "Layani pelanggan lebih cepat, tanpa bikin antrean panjang",
      spotlightLensKicker: "",
      spotlightLensTitle: "Internet putus? Transaksi tetap jalan",
      spotlightLensText: "Tetap jualan meski internet bermasalah. Transaksi tersimpan saat offline dan otomatis sinkron saat online kembali",
      spotlightSecurityTitle: "Transaksi aman, data terlindungi",
      spotlightSecurityText: "GoePOS menjaga transaksi tetap tercatat asli, tidak mudah dihapus sembarangan, dan performa aplikasi terus dipantau agar kendala bisa cepat diperbaiki",
      flexibleTransactionTitle: "Karena Transaksi Pelanggan Tidak Selalu Sederhana.",
      flexibleTransactionText: "Pelanggan uangnya kurang? Bisa split pembayaran. Makan bareng tapi bayar sendiri-sendiri? Bisa split menu. Belum siap bayar? Bisa hold transaksi. GoePOS bantu kasir menghadapi situasi nyata di lapangan tanpa bikin antrean macet.",
      teamRoutingTitle: "Sekali Input, Semua Tim Langsung Bergerak",
      teamRoutingText: "Pesanan dari kasir bisa langsung terkirim ke Konter Minuman, Dapur, Lantai 1, Lantai 2, dan area lainnya secara otomatis.<br><br>Lebih akurat.<br>Lebih cepat.<br>Lebih hemat waktu.<br>Lebih minim miskomunikasi.<br><br>Dengan GoePOS, tim tidak perlu saling teriak, kasir tidak perlu bolak-balik, dan pesanan bisa sampai ke pelanggan dengan lebih lancar.",
      receiptPromoTitle: "Struk Bukan Sekadar Bukti Bayar, Tapi Media Promosi",
      receiptPromoShareText: "Kirim struk ke pelanggan melalui WhatsApp, Telegram, atau aplikasi lainnya tanpa harus selalu mencetak",
      receiptPromoQrText: "Pelanggan cukup scan QR Code dari GoePOS untuk melihat struk transaksi secara digital",
      receiptPromoAdText: "Tambahkan info, promo, atau iklan di bagian bawah struk untuk mendorong pelanggan datang kembali",
      tableManagementTitle: "Meja Rapi, Layanan Lancar.",
      tableManagementText: "Dengan GoePOS, tim bisa melihat denah meja secara visual, memantau status meja, menggabungkan beberapa meja untuk pelanggan rombongan, memindahkan pelanggan ke meja lain, dan melihat riwayat aktivitas meja dalam satu tampilan yang rapi",
      spotlightBack: "Tutup",
      spotlightPayDetailTitle: "",
      spotlightPayDetailText: "Pilih menu, catat pesanan, beri diskon, pilih pembayaran, dan selesaikan transaksi tanpa banyak pindah halaman. GoePOS tetap bisa digunakan saat offline dan otomatis menyinkronkan data saat online kembali",
      spotlightPayPoint1: "",
      spotlightPayPoint2: "",
      spotlightPayPoint3: "",
      spotlightLensDetailTitle: "",
      spotlightLensDetailText: "Saat offline, transaksi tetap bisa dicatat seperti biasa. Ketika internet kembali online, data akan otomatis tersinkron sehingga operasional tetap berjalan tanpa harus menghentikan antrean",
      spotlightLensPoint1: "",
      spotlightLensPoint2: "",
      spotlightLensPoint3: "",
      showcaseEyebrow: "Tampilan aplikasi",
      showcaseTitle: "Lihat beberapa alur yang dipakai tim setiap hari.",
      showcaseLead: "Dari memilih produk, mengelola order berjalan, memproses pembayaran, sampai membuka struk, semua dibuat dekat dengan ritme kerja outlet.",
      showcaseProductsTitle: "Produk dan kategori",
      showcaseProductsText: "Kasir bisa memilih kategori dan produk dengan cepat, lengkap dengan harga yang langsung siap masuk ke order.",
      showcaseKitchenTitle: "Order berjalan",
      showcaseKitchenText: "Tim bisa memantau pesanan yang masih aktif, melihat status pembayaran, dan menandai order selesai tanpa kehilangan konteks.",
      showcaseCartTitle: "Keranjang dan pembayaran",
      showcaseCartText: "Item order, tipe layanan, pelanggan, dan metode pembayaran berada dalam satu layar sehingga kasir bisa bekerja lebih cepat.",
      showcaseReceiptTitle: "Struk penjualan",
      showcaseReceiptText: "Detail pembayaran, item transaksi, QR struk online, refund, dan cetak struk tersedia jelas setelah transaksi selesai.",
      offlineTitle: "Internet tidak selalu mulus. Kasir tetap harus siap.",
      offlineText: "Di jam sibuk, gangguan koneksi bisa bikin panik. Dengan mode offline dan sync otomatis, transaksi tetap dicatat dulu, lalu data menyusul saat internet kembali normal.",
      offlinePoint1: "Mode offline tanpa pengaturan rumit",
      offlinePoint2: "Sinkronisasi tanpa setup manual saat koneksi kembali",
      offlinePoint3: "Cocok untuk outlet dengan jaringan yang sering berubah",
      offlineEyebrow: "Online/offline",
      syncOffline: "Mode offline",
      syncAuto: "Sinkron otomatis",
      syncReports: "Laporan online",
      syncOutletLabel: "Kasir outlet",
      syncCloudLabel: "Cloud GoePOS",
      syncOwnerLabel: "Pemilik",
      reportStatLabel: "Ringkasan penjualan",
      reportBadge: "PDF, XLS, dan Cetak",
      reportImageSrc: "img/screenshots/report-id.jpeg",
      reportImageAlt: "Tampilan laporan bulanan GoePOS",
      reportEyebrow: "Monitoring bisnis",
      reportTitle: "Buka laporan tanpa harus selalu datang ke outlet.",
      reportText: "Penjualan, stok, dan pengeluaran kasir lebih mudah dicek. Laporan bisa diunduh dalam format PDF atau XLS, lalu dicetak saat dibutuhkan.",
      miniSales: "Penjualan harian",
      miniStock: "Produk dan stok",
      miniExpense: "Pengeluaran kasir",
      miniPrint: "Cetak laporan",
      pricingTitle: "Tidak ada iklan, tidak ada biaya fitur tambahan yang bikin kaget.",
      pricingText: "GoePOS memakai pembelian dalam aplikasi. Level penggunaan bisa dipilih dari aplikasi, sementara fitur utamanya tetap dibuat terbuka untuk kebutuhan outlet.",
      priceTitle: "Unduh gratis",
      pricingCardText: "Coba aplikasinya dulu. Saat transaksi, produk, atau jumlah staf bertambah, level penggunaan bisa disesuaikan dari menu aplikasi.",
      pricingPoint1: "Tanpa iklan dan tanpa biaya fitur tambahan",
      pricingPoint2: "Level menyesuaikan transaksi, produk, dan staf",
      pricingPoint3: "Pembayaran melalui Google Play, E-wallet, QRIS, maupun Transfer",
      pricingCta: "Download sekarang",
      faqTitle: "Pertanyaan yang sering ditanyakan.",
      faqOneTitle: "Apa itu GoePOS?",
      faqOneText: "GoePOS adalah aplikasi kasir untuk restoran, kafe, dan food truck. Di dalamnya ada kasir online/offline, POS pelayan, KDS, stok, pengeluaran, laporan, dan akses untuk banyak pengguna.",
      faqTwoTitle: "Apakah GoePOS bisa digunakan saat internet mati?",
      faqTwoText: "Bisa. Kasir tetap dapat mencatat transaksi dalam mode offline dan menyinkronkan data kembali saat internet tersedia.",
      faqThreeTitle: "Siapa saja yang bisa memakai GoePOS?",
      faqThreeText: "GoePOS mendukung akses untuk pemilik, kasir, pelayan, dan tim dapur. Setiap orang bisa fokus ke tugasnya tanpa perlu membuka seluruh bagian sistem.",
      faqFourTitle: "Bagaimana cara berlangganan?",
      faqFourText: "Download GoePOS di Google Play, lalu pilih level langganan dari menu pengaturan sesuai kebutuhan bisnis.",
      finalEyebrow: "Siap coba?",
      finalTitle: "Mulai dari satu outlet dulu. Kalau cocok, tinggal kembangkan pelan-pelan.",
      downloadGoePOS: "Download GoePOS",
      footerText: "Aplikasi kasir untuk restoran, kafe, dan food truck."
    },
    en: {
      navSolutions: "Solutions",
      navWorkflow: "Workflow",
      navFeatures: "Features",
      navPricing: "Pricing",
      heroHeadline: "Cashier app<span class=\"dot\">.</span>",
      heroDesignedTitle: "Designed specifically",
      heroEyebrow: "Cashier app for culinary businesses",
      heroTitle: "A cashier app designed specifically for restaurants, cafes, food stalls, and culinary businesses.",
      heroLead: "Built for restaurants, cafes, food stalls, and culinary businesses that need a fast, stable, easy-to-use cashier system for daily operations.",
      heroEasyTitle: "Easy to use",
      heroEasyText: "Simple to operate,<br>ready to use",
      heroFastTitle: "Fast performance",
      heroFastText: "Fast on every<br>device",
      heroSafeTitle: "Reliable",
      heroSafeText: "Safer transactions,<br>protected data",
      heroStableTitle: "Lag-free",
      heroStableText: "Stable and smooth,<br>without disruption",
      heroBusinessText: "Built for<br><strong>restaurants, cafes, food stalls and culinary businesses.</strong>",
      heroSupportTitle: "Live Chat Support",
      heroSupportText: "Direct live chat<br>support from the app",
      downloadPlay: "Free, try it now",
      seeFeatures: "View features",
      proofOffline: "<strong>Online/offline</strong> automatic",
      proofUsers: "<strong>Multi-user</strong> for your team",
      proofReports: "<strong>Reports</strong> ready to monitor",
      todayTransactions: "Today's transactions",
      todayTransactionsNote: "Floor staff, cashier, and kitchen stay connected",
      connectionStatus: "Connection status",
      offlineReady: "Offline ready",
      offlineReadyNote: "Data syncs again when internet returns",
      businessEyebrow: "Made for culinary businesses",
      businessTitle: "Works for small outlets and growing teams.",
      businessLead: "Every food business has its own rhythm. GoePOS helps keep the flow easy to follow, from customer orders, kitchen preparation, to end-of-day reports.",
      businessRestaurantTitle: "Restaurant",
      businessCafeTitle: "Cafe",
      businessTruckTitle: "Food truck",
      restaurantText: "Table orders, cashier, kitchen, and daily reports stay clearer.",
      cafeText: "Good for dine-in, takeaway, and fast-moving queues.",
      truckText: "Keep selling in locations where connection quality can change.",
      pillarFastTitle: "Fast",
      pillarStableTitle: "Stable",
      pillarFlexTitle: "Flexible",
      fastText: "Order input is made faster, including support for a 3-digit physical keyboard for busy outlets.",
      stableText: "When internet slows down or drops, the cashier can keep running and sync again without manual setup.",
      flexText: "From simple orders to split bills, held transactions, and reservations, the flow can follow the way your outlet works.",
      workflowEyebrow: "Restaurant workflow",
      workflowTitle: "Orders come in, kitchen moves, cashier finishes, reports are ready.",
      workflowOrderLabel: "Order",
      workflowOrderTitle: "Staff enter orders",
      workflowOrderText: "Orders from a phone or tablet go straight into the system. Floor staff no longer need to run back and forth with paper notes.",
      workflowCashierLabel: "Cashier",
      workflowCashierTitle: "Cashier handles payment",
      workflowCashierText: "Cashiers process payments, split bills when needed, print receipts, and record outlet expenses.",
      workflowKitchenLabel: "Kitchen",
      workflowKitchenTitle: "Kitchen sees it fast",
      workflowKitchenText: "Orders can appear on KDS or print to kitchen, bar, and cashier printers depending on your setup.",
      workflowReportLabel: "Reports",
      workflowReportTitle: "Reports are ready",
      workflowReportText: "Owners can review sales summaries, download PDF reports, or print them for records.",
      featuresEyebrow: "Main features",
      featuresTitle: "The outlet tools you need, without making work feel complicated.",
      featuresLead: "GoePOS features are built around everyday outlet work, not just a long menu of tools. Your team can focus on service while the data stays tidy.",
      featureOfflineTitle: "Online and offline cashier",
      featureOfflineText: "Transactions can still be recorded when internet is unstable, then synced again without manual setup.",
      featureOrderingTitle: "Mobile ordering and staff POS",
      featureOrderingText: "Floor staff can enter orders from Android phones or tablets, then send them straight to cashier and kitchen.",
      featureKdsTitle: "Kitchen Display System",
      featureKdsText: "The kitchen can read orders more clearly, manage preparation order, and reduce missed items.",
      featureStockTitle: "Product and ingredient stock",
      featureStockText: "Track products and ingredients so purchasing and production stay measured.",
      featureExpenseTitle: "Cashier expenses",
      featureExpenseText: "Record small purchases, operational needs, or daily expenses from outlet cash.",
      featureUserTitle: "Role-based access",
      featureUserText: "Owners, cashiers, floor staff, and kitchen teams can each get access that matches their work.",
      featureFastTitle: "Fast transactions",
      featureFastText: "The cashier flow is practical, with support for a 3-digit physical keyboard for faster input.",
      featureReportTitle: "PDF and printout reports",
      featureReportText: "Reports can be viewed online, downloaded as PDF or XLS, and printed from the cashier printer.",
      featureCloudTitle: "Cloud sync",
      featureCloudText: "Outlet data syncs through the cloud, so owners can keep an eye on the business without always being on site.",
      featureReceiptTitle: "Safer receipts",
      featureReceiptText: "Receipt history is kept safer so transactions are not easily lost or deleted carelessly.",
      featureSplitTitle: "Split bills, hold, and reservations",
      featureSplitText: "Useful when customers want to share a bill, a transaction needs to be held, or an order is prepared in advance.",
      featurePrinterTitle: "Kitchen, cashier, and bar printers",
      featurePrinterText: "Print orders and receipts to the right station so each team can move smoothly.",
      spotlightEyebrow: "",
      spotlightTitle: "Satu aplikasi untuk kasir, order, dapur, laporan, dan operasional kuliner",
      spotlightDescription: "Waiters record orders, the kitchen prepares each menu, and cashiers process payments in one organized operational flow",
      spotlightLead: "",
      spotlightPayKicker: "",
      spotlightPayTitle: "Fast Transactions for Cashiers",
      spotlightPayText: "Serve customers faster without making long queues",
      spotlightLensKicker: "",
      spotlightLensTitle: "Internet putus? Transaksi tetap jalan",
      spotlightLensText: "Tetap jualan meski internet bermasalah. Transaksi tersimpan saat offline dan otomatis sinkron saat online kembali",
      spotlightSecurityTitle: "Secure transactions, protected data",
      spotlightSecurityText: "GoePOS keeps transactions recorded authentically, prevents careless deletion, and monitors app performance so issues can be fixed quickly",
      flexibleTransactionTitle: "Because Customer Transactions Are Not Always Simple.",
      flexibleTransactionText: "With GoePOS, cashiers can handle mixed payments, split menu items by customer, and hold transactions when customers are not ready to pay. Everything is designed to keep service moving, prevent queues from stopping, and remove manual calculations for cashiers.",
      teamRoutingTitle: "One Input, Every Team Moves Right Away",
      teamRoutingText: "Orders from the cashier can be sent automatically to the Beverage Counter, Kitchen, Floor 1, Floor 2, and other areas.<br><br>More accurate.<br>Faster.<br>More time-saving.<br>Less miscommunication.<br><br>With GoePOS, teams do not need to shout across stations, cashiers do not need to go back and forth, and orders can reach customers more smoothly.",
      receiptPromoTitle: "Receipts Are Not Just Payment Proof, They Are Promotion Media",
      receiptPromoShareText: "Send receipts to customers through WhatsApp, Telegram, or other apps without always needing to print",
      receiptPromoQrText: "Customers can simply scan the QR Code from GoePOS to view their transaction receipt digitally",
      receiptPromoAdText: "Add info, promotions, or ads at the bottom of receipts to encourage customers to come back",
      tableManagementTitle: "Tidy Tables, Smoother Service.",
      tableManagementText: "With GoePOS, your team can view the table layout visually, monitor table status, merge tables for groups, move customers to another table, and see table activity history in one tidy view",
      spotlightBack: "Close",
      spotlightPayDetailTitle: "",
      spotlightPayDetailText: "Choose menus, record orders, apply discounts, choose payment, and complete transactions without moving across many pages. GoePOS can still be used offline and automatically syncs data when back online.",
      spotlightPayPoint1: "",
      spotlightPayPoint2: "",
      spotlightPayPoint3: "",
      spotlightLensDetailTitle: "",
      spotlightLensDetailText: "Saat offline, transaksi tetap bisa dicatat seperti biasa. Ketika internet kembali online, data akan otomatis tersinkron sehingga operasional tetap berjalan tanpa harus menghentikan antrean",
      spotlightLensPoint1: "",
      spotlightLensPoint2: "",
      spotlightLensPoint3: "",
      showcaseEyebrow: "App screens",
      showcaseTitle: "A closer look at the workflows your team uses every day.",
      showcaseLead: "From choosing products and tracking live orders to taking payment and opening receipts, each screen is built around real outlet work.",
      showcaseProductsTitle: "Products and categories",
      showcaseProductsText: "Cashiers can move through categories and products quickly, with prices ready to be added into the order.",
      showcaseKitchenTitle: "Ongoing orders",
      showcaseKitchenText: "The team can monitor active orders, check payment status, and mark orders complete without losing context.",
      showcaseCartTitle: "Cart and payment",
      showcaseCartText: "Ordered items, service type, customer details, and payment methods sit on one screen so checkout stays quick.",
      showcaseReceiptTitle: "Sales receipt",
      showcaseReceiptText: "Payment details, transaction items, online receipt QR, refund, sharing, and printout actions are easy to review after a sale.",
      offlineTitle: "Internet is not always smooth. Your cashier still needs to be ready.",
      offlineText: "Connection issues during busy hours can be stressful. With offline mode and automatic sync, transactions can be recorded first and sent when the internet is back.",
      offlinePoint1: "Offline mode without complicated setup",
      offlinePoint2: "Sync without manual setup when connection returns",
      offlinePoint3: "Useful for outlets with changing network quality",
      offlineEyebrow: "Online/offline",
      syncOffline: "Offline mode",
      syncAuto: "Auto sync",
      syncReports: "Online reports",
      syncOutletLabel: "Outlet cashier",
      syncCloudLabel: "GoePOS cloud",
      syncOwnerLabel: "Owner",
      reportStatLabel: "Sales summary",
      reportBadge: "PDF, XLS, and Printout",
      reportImageSrc: "img/screenshots/report-en.jpeg",
      reportImageAlt: "Monthly report screen in GoePOS",
      reportEyebrow: "Business monitoring",
      reportTitle: "Open reports without always visiting the outlet.",
      reportText: "Sales, stock, and cashier expenses are easier to review. Reports can be downloaded as PDF or XLS, then printed when needed for outlet records.",
      miniSales: "Daily sales",
      miniStock: "Products and stock",
      miniExpense: "Cashier expenses",
      miniPrint: "Print reports",
      pricingTitle: "No ads, no surprise extra charges for features.",
      pricingText: "GoePOS uses in-app purchases. Usage levels can be selected from the app, while the main features stay available for outlet needs.",
      priceTitle: "Free download",
      pricingCardText: "Try the app first. When transactions, products, or staff grow, adjust the usage level from the app menu.",
      pricingPoint1: "No ads and no additional feature charges",
      pricingPoint2: "Levels follow transactions, products, and staff",
      pricingPoint3: "Payment through Google Play, E-wallet, QRIS, or Transfer",
      pricingCta: "Download now",
      faqTitle: "Common questions.",
      faqOneTitle: "What is GoePOS?",
      faqOneText: "GoePOS is a POS app for restaurants, cafes, and food trucks. It includes online/offline cashier, staff POS, KDS, stock, expenses, reports, and multi-user access.",
      faqTwoTitle: "Can GoePOS work without internet?",
      faqTwoText: "Yes. Cashiers can keep recording transactions in offline mode and sync data again when internet is available.",
      faqThreeTitle: "Who can use GoePOS?",
      faqThreeText: "GoePOS supports access for owners, cashiers, floor staff, and kitchen teams. Each person can focus on their work without opening every part of the system.",
      faqFourTitle: "How do I subscribe?",
      faqFourText: "Download GoePOS from Google Play, then choose a subscription level from the app settings based on your business needs.",
      finalEyebrow: "Ready to try?",
      finalTitle: "Start with one outlet. If it fits, grow step by step.",
      downloadGoePOS: "Download GoePOS",
      footerText: "POS app for restaurants, cafes, and food trucks."
    }
  };

  function setHeaderState() {
    if (!header) return;
    var hero = document.querySelector(".goepos-hero");
    var headerHeight = header.offsetHeight || 0;
    var isPastHero = !hero || hero.getBoundingClientRect().bottom <= headerHeight + 8;
    var shouldHideOnHero = !isPastHero && !document.body.classList.contains("nav-open");

    header.classList.toggle("is-scrolled", isPastHero);
    header.classList.toggle("is-hidden-on-hero", shouldHideOnHero);
  }

  function setLanguage(lang) {
    var dictionary = translations[lang] || translations.id;
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (item) {
      var key = item.getAttribute("data-i18n");
      if (dictionary[key]) {
        item.textContent = dictionary[key];
      }
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (item) {
      var key = item.getAttribute("data-i18n-html");
      if (dictionary[key]) {
        item.innerHTML = dictionary[key];
      }
    });

    document.querySelectorAll("[data-report-image]").forEach(function (item) {
      if (dictionary.reportImageSrc) {
        item.setAttribute("src", dictionary.reportImageSrc);
      }
      if (dictionary.reportImageAlt) {
        item.setAttribute("alt", dictionary.reportImageAlt);
      }
    });

    languageButtons.forEach(function (button) {
      button.classList.toggle("is-active", button.getAttribute("data-lang-option") === lang);
    });

    try {
      window.localStorage.setItem("goepos-lang", lang);
    } catch (error) {}
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      document.body.classList.toggle("nav-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  languageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.getAttribute("data-lang-option"));
    });
  });

  document.querySelectorAll("[data-spotlight]").forEach(function (spotlight) {
    var cards = spotlight.querySelectorAll("[data-spotlight-card]");

    function setCardState(activeCard) {
      cards.forEach(function (card) {
        var wasActive = card.classList.contains("is-active");
        var isActive = card === activeCard && !wasActive;
        var detail = card.querySelector(".spotlight-card-detail");
        card.classList.toggle("is-active", isActive);
        card.setAttribute("aria-expanded", String(isActive));

        if (detail) {
          detail.setAttribute("aria-hidden", String(!isActive));
        }
      });
    }

    function resetSpotlight() {
      cards.forEach(function (card) {
        var detail = card.querySelector(".spotlight-card-detail");
        card.classList.remove("is-active");
        card.setAttribute("aria-expanded", "false");

        if (detail) {
          detail.setAttribute("aria-hidden", "true");
        }
      });
    }

    cards.forEach(function (card) {
      var detail = card.querySelector(".spotlight-card-detail");
      if (detail) {
        detail.setAttribute("aria-hidden", "true");
      }
    });

    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        setCardState(card);
      });

      card.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setCardState(card);
        }

        if (event.key === "Escape") {
          resetSpotlight();
        }
      });
    });

    spotlight.querySelectorAll("[data-spotlight-close]").forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.stopPropagation();
        resetSpotlight();
      });
    });
  });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    revealItems.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  setHeaderState();
  try {
    setLanguage(window.localStorage.getItem("goepos-lang") || defaultLang);
  } catch (error) {
    setLanguage(defaultLang);
  }
  window.addEventListener("scroll", setHeaderState, { passive: true });
  window.addEventListener("resize", setHeaderState);
})();
