(function () {
  var header = document.querySelector("[data-header]");
  var nav = document.querySelector("[data-nav]");
  var toggle = document.querySelector("[data-nav-toggle]");
  var revealItems = document.querySelectorAll(".reveal");
  var languageButtons = document.querySelectorAll("[data-lang-option]");
  var defaultLang = document.documentElement.getAttribute("data-lang") || "en";
  var translations = {
    id: {
      heroHeadline: "Aplikasi kasir<span class=\"dot\">.</span>",
      heroDesignedTitle: "Dirancang khusus",
      heroEasyTitle: "Gak ribet",
      heroEasyText: "Mudah digunakan,<br>siap pakai",
      heroFastTitle: "Anti lemot",
      heroFastText: "Cepat di semua<br>perangkat",
      heroSafeTitle: "99% anti error",
      heroSafeText: "Transaksi aman,<br>data terlindungi",
      heroStableTitle: "Anti ngelag",
      heroStableText: "Stabil dan lancar,<br>tanpa gangguan",
      heroBusinessText: "Khusus untuk bisnis<br><strong>Restoran, cafe, rumah makan dan kuliner.</strong>",
      downloadPlay: "Gratis, coba sekarang",
      heroSupportTitle: "Dukungan Chat Langsung",
      heroSupportText: "Support langsung live<br>chating via aplikasi",
      spotlightTitle: "Satu aplikasi untuk kasir, order, dapur, laporan, dan operasional kuliner",
      spotlightDescription: "Waiter mencatat pesanan, dapur menyiapkan menu, dan kasir memproses pembayaran dalam satu alur operasional yang rapi",
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
      activeOrdersTitle: "Pesanan Aktif Selalu Terpantau",
      activeOrdersText: "Pesanan sudah siap? Sudah diantar? Atau masih diproses? Dengan GoePOS, semua status pesanan bisa dipantau dalam satu layar, sehingga tim bisa lebih sigap dan mengurangi risiko pelanggan bertanya, \"Meja 13 kurang Nasi Goreng Mawut.\" Pelayanan jadi lebih jelas, lebih rapi, dan pelanggan tidak menunggu tanpa kepastian.",
      tableManagementTitle: "Meja Rapi, Layanan Lancar.",
      tableManagementPoint1: "Lihat denah meja secara visual",
      tableManagementPoint2: "Pantau status meja",
      tableManagementPoint3: "Gabungkan beberapa meja jadi 1 pembayaran",
      tableManagementPoint4: "Pindah pelanggan ke meja lain",
      tableManagementPoint5: "Lihat riwayat aktivitas meja dalam satu tampilan yang rapi",
      cashierShiftTitle: "Pantau Performa Setiap Shift Kasir",
      cashierShiftText: "Punya 2 shift atau lebih dalam sehari? Dengan fitur Cash Drawer di GoePOS, setiap kasir bisa melakukan buka dan tutup kasir sesuai shift masing-masing.<br><br>Owner dapat melihat hasil penjualan per shift, mengetahui jam operasional mana yang lebih ramai, dan memahami shift mana yang memberi kontribusi penjualan lebih tinggi.<br><br>Data ini membantu bisnis mengatur stok, bahan baku, dan persiapan operasional dengan lebih tepat, terutama saat jam ramai.",
      customerDisplayTitle: "Transaksi lebih transparan, pelanggan lebih percaya",
      customerDisplayText: "Customer display membantu pelanggan melihat pesanan dan total pembayaran secara langsung, sehingga risiko salah input, salah hitung, atau salah pesanan bisa dikurangi sejak awal",
      pricingTitle: "Tidak ada iklan, tidak ada biaya fitur tambahan yang bikin kaget.",
      pricingText: "GoePOS memakai pembelian dalam aplikasi. Level penggunaan bisa dipilih dari aplikasi, sementara fitur utamanya tetap dibuat terbuka untuk kebutuhan outlet.",
      priceTitle: "Unduh gratis",
      pricingCardText: "Coba aplikasinya dulu. Saat transaksi, produk, atau jumlah staf bertambah, level penggunaan bisa disesuaikan dari menu aplikasi.",
      pricingPoint1: "Tanpa iklan dan tanpa biaya fitur tambahan",
      pricingPoint2: "Level menyesuaikan transaksi, produk, dan staf",
      pricingPoint3: "Pembayaran melalui Google Play, E-wallet, QRIS, maupun Transfer",
      pricingCta: "Download sekarang"
    },
    en: {
      heroHeadline: "Cashier app<span class=\"dot\">.</span>",
      heroDesignedTitle: "Designed specifically",
      heroEasyTitle: "Easy to use",
      heroEasyText: "Simple to operate,<br>ready to use",
      heroFastTitle: "Fast performance",
      heroFastText: "Fast on every<br>device",
      heroSafeTitle: "Reliable",
      heroSafeText: "Safer transactions,<br>protected data",
      heroStableTitle: "Lag-free",
      heroStableText: "Stable and smooth,<br>without disruption",
      heroBusinessText: "Built for<br><strong>restaurants, cafes, food stalls and culinary businesses.</strong>",
      downloadPlay: "Free, try it now",
      heroSupportTitle: "Live Chat Support",
      heroSupportText: "Direct live chat<br>support from the app",
      spotlightTitle: "One app for cashier, ordering, kitchen, reports, and food business operations",
      spotlightDescription: "Waiters record orders, the kitchen prepares each menu, and cashiers process payments in one organized operational flow",
      spotlightLensTitle: "Internet down? Transactions keep running",
      spotlightLensText: "Keep selling even when the internet has issues. Transactions are saved offline and automatically synced when you are back online",
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
      activeOrdersTitle: "Active Orders Stay Visible",
      activeOrdersText: "Is an order ready? Has it been delivered? Or is it still being prepared? With GoePOS, every order status can be monitored on one screen, so the team responds faster and customers are not left waiting without certainty.",
      tableManagementTitle: "Tidy Tables, Smoother Service.",
      tableManagementPoint1: "View the table layout visually",
      tableManagementPoint2: "Monitor table status",
      tableManagementPoint3: "Merge several tables into 1 payment",
      tableManagementPoint4: "Move customers to another table",
      tableManagementPoint5: "See table activity history in one tidy view",
      cashierShiftTitle: "Track Every Cashier Shift Performance",
      cashierShiftText: "Have 2 or more shifts in a day? With Cash Drawer in GoePOS, each cashier can open and close the cashier session according to their own shift.<br><br>Owners can view sales results per shift, identify which operating hours are busier, and understand which shift contributes higher sales.<br><br>This data helps the business manage stock, ingredients, and operational preparation more accurately, especially during busy hours.",
      customerDisplayTitle: "More transparent transactions, more customer trust",
      customerDisplayText: "Customer display helps customers see their order and total payment directly, so the risk of wrong input, wrong calculation, or wrong order can be reduced from the start.",
      pricingTitle: "No ads, no surprise extra charges for features.",
      pricingText: "GoePOS uses in-app purchases. Usage levels can be selected from the app, while the main features stay available for outlet needs.",
      priceTitle: "Free download",
      pricingCardText: "Try the app first. When transactions, products, or staff grow, adjust the usage level from the app menu.",
      pricingPoint1: "No ads and no additional feature charges",
      pricingPoint2: "Levels follow transactions, products, and staff",
      pricingPoint3: "Payment through Google Play, E-wallet, QRIS, or Transfer",
      pricingCta: "Download now"
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
