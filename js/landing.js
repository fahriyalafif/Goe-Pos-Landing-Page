(function () {
  var header = document.querySelector("[data-header]");
  var nav = document.querySelector("[data-nav]");
  var toggle = document.querySelector("[data-nav-toggle]");
  var revealItems = document.querySelectorAll(".reveal");
  var languageButtons = document.querySelectorAll("[data-lang-option]");
  var defaultLang = document.documentElement.getAttribute("data-lang") || "en";
  var goeposPlayUrls = {
    pro: {
      id: "https://play.google.com/store/apps/details?id=com.pos.goe&hl=id",
      en: "https://play.google.com/store/apps/details?id=com.pos.goe"
    },
    lite: {
      id: "https://play.google.com/store/apps/details?id=com.pos.goe.free&hl=id",
      en: "https://play.google.com/store/apps/details?id=com.pos.goe.free"
    }
  };
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
      heroBusinessText: "Khusus untuk bisnis<br><strong>restoran, cafe, rumah makan dan kuliner.</strong>",
      downloadPlay: "Gratis, coba sekarang",
      heroSupportTitle: "Dukungan Chat Langsung",
      heroSupportText: "Support langsung live<br>chating via aplikasi",
      spotlightTitle: "Satu Aplikasi untuk Semua Kebutuhan Bisnis, All in one tanpa plugin tambahan",
      spotlightDescription: "Semua sistem terintegrasi, Waiter mencatat pesanan, pesanan langsung masuk ke dapur, dan kasir memproses pembayaran dalam satu alur operasional yang rapi",
      spotlightLensTitle: "Internet putus? Transaksi tetap jalan",
      spotlightLensText: "Tetap jualan meski internet bermasalah. Transaksi tersimpan saat offline dan otomatis sinkron saat online",
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
      pricingCta: "Download sekarang",
      footerText: "Aplikasi kasir untuk restoran, kafe, rumah makan, dan kuliner."
    },
    en: {
  heroHeadline: "POS app<span class=\"dot\">.</span>",
  heroDesignedTitle: "Made for",
  heroEasyTitle: "Simple to use",
  heroEasyText: "Easy to learn,<br>ready to run",
  heroFastTitle: "Runs fast",
  heroFastText: "Smooth on every<br>device",
  heroSafeTitle: "99% error-free",
  heroSafeText: "Secure transactions,<br>protected data",
  heroStableTitle: "Lag-free",
  heroStableText: "Stable and smooth,<br>even during rush hours",
  heroBusinessText: "Made for<br><strong>restaurants, cafés, eateries, and food businesses.</strong>",
  downloadPlay: "Try it for free",
  heroSupportTitle: "Live Chat Support",
  heroSupportText: "Get support directly<br>from inside the app",

  spotlightTitle: "One App for Your Entire Business, All-in-One Without Extra Plugins",
  spotlightDescription: "Everything works together in one smooth flow. Servers take orders, orders go straight to the kitchen, and cashiers process payments with less hassle.",
  spotlightLensTitle: "Internet down? Keep selling",
  spotlightLensText: "Keep taking orders even when the internet is unstable. Transactions are saved offline and synced automatically once you are back online.",
  spotlightSecurityTitle: "Secure transactions, protected data",
  spotlightSecurityText: "GoePOS keeps every transaction properly recorded, helps prevent careless deletion, and continuously monitors app performance so issues can be fixed faster.",

  flexibleTransactionTitle: "Because Customer Payments Are Not Always Simple.",
  flexibleTransactionText: "Customer short on cash? Split the payment. Eating together but paying separately? Split the menu. Not ready to pay yet? Hold the transaction. GoePOS helps cashiers handle real situations without slowing down the queue.",

  teamRoutingTitle: "Enter an Order Once, Let Every Team Move",
  teamRoutingText: "Orders from the cashier can be sent automatically to the beverage counter, kitchen, 1st floor, 2nd floor, and other service areas.<br><br>More accurate.<br>Faster service.<br>Less wasted time.<br>Fewer miscommunications.<br><br>With GoePOS, your team does not need to shout across the room, cashiers do not need to go back and forth, and orders can reach customers more smoothly.",

  receiptPromoTitle: "Receipts Are More Than Proof of Payment. They Can Promote Your Business.",
  receiptPromoShareText: "Send receipts to customers through WhatsApp, Telegram, or other apps without always having to print them.",
  receiptPromoQrText: "Customers can simply scan a QR code from GoePOS to view their digital transaction receipt.",
  receiptPromoAdText: "Add information, promos, or ads at the bottom of receipts to encourage customers to come back.",

  activeOrdersTitle: "Keep Every Active Order Under Control",
  activeOrdersText: "Is the order ready? Has it been served? Or is it still being prepared? With GoePOS, every order status can be monitored from one screen, helping your team respond faster and reducing questions like, \"Table 13 is still missing their Nasi Goreng Mawut.\" Service becomes clearer, more organized, and customers do not have to wait without certainty.",

  tableManagementTitle: "Organized Tables, Smoother Service.",
  tableManagementPoint1: "View your table layout visually",
  tableManagementPoint2: "Monitor each table status",
  tableManagementPoint3: "Combine multiple tables into one payment",
  tableManagementPoint4: "Move customers to another table",
  tableManagementPoint5: "View table activity history in one clean display",

  cashierShiftTitle: "Track Performance Across Every Cashier Shift",
  cashierShiftText: "Run 2 or more shifts in a day? With the Cash Drawer feature in GoePOS, each cashier can open and close their own cashier session based on their shift.<br><br>Owners can view sales by shift, see which operating hours are busiest, and understand which shifts contribute the most revenue.<br><br>This data helps your business plan stock, ingredients, and daily operations more accurately, especially during peak hours.",

  customerDisplayTitle: "More transparent transactions, more customer trust",
  customerDisplayText: "Customer Display lets customers see their orders and total payment in real time, helping reduce input mistakes, miscalculations, and wrong orders from the start.",

  pricingTitle: "No ads. No surprise add-on feature fees.",
  pricingText: "GoePOS uses in-app purchases. You can choose the usage level that fits your outlet directly from the app, while the core features remain available for daily operations.",
  priceTitle: "Download for free",
  pricingCardText: "Try the app first. As your transactions, products, or staff grow, you can adjust your usage level anytime from the app menu.",
  pricingPoint1: "No ads and no extra feature fees",
  pricingPoint2: "Plans adjust to your transactions, products, and staff",
  pricingPoint3: "Pay via Google Play, e-wallet, QRIS, or bank transfer",
  pricingCta: "Download now",
  footerText: "A POS app for restaurants, cafés, eateries, and food businesses."
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

    document.querySelectorAll("a[href*=\"id=com.pos.goe\"]").forEach(function (link) {
      var playUrl = link.href.indexOf("com.pos.goe.free") !== -1
        ? goeposPlayUrls.lite[lang] || goeposPlayUrls.lite.en
        : goeposPlayUrls.pro[lang] || goeposPlayUrls.pro.en;

      link.setAttribute("href", playUrl);

      if (link.hasAttribute("onclick")) {
        link.setAttribute("onclick", "gtag_report_conversion('" + playUrl + "')");
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
