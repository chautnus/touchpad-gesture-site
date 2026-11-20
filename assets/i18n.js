(function () {
  "use strict";

  var TRANSLATIONS = {
    en: {
      nav_features: "Features",
      nav_requirements: "Requirements",
      nav_privacy: "Privacy Policy",
      nav_home: "Home",

      hero_badge: "Windows 10 / 11 Precision Touchpad",
      hero_title: "Supercharge Your Windows Touchpad",
      hero_desc:
        "Custom multi-finger gestures, per-app profiles, and Hold-to-Draw actions for Windows 10/11 Precision Touchpads — lightweight, fast, and 100% offline.",
      hero_cta_download: "Get on GitHub Releases",
      hero_cta_store: "Microsoft Store (Coming Soon)",

      features_title: "Key Features",
      features_sub: "Designed for speed, precision, and zero background bloat.",
      feat_1_title: "Multi-Finger Gestures",
      feat_1_desc:
        "Map 3-finger and 4-finger swipes, taps, and directional movements to custom keyboard shortcuts, media controls, or window management.",
      feat_2_title: "Per-App Profiles",
      feat_2_desc:
        "Automatically switch gesture mappings based on the active foreground application (browsers, code editors, design tools, and more).",
      feat_3_title: "Hold-to-Draw Actions",
      feat_3_desc:
        "Hold and draw quick strokes on your touchpad to trigger macros and workflows without lifting your fingers.",
      feat_4_title: "Lightweight & 100% Offline",
      feat_4_desc:
        "Runs quietly in the Windows System Tray with minimal CPU/RAM usage. No background telemetry, no cloud account required.",

      req_title: "System Requirements & Support",
      req_os_title: "Supported Environment",
      req_os_1: "Windows 10 (version 2004 / Build 19041 or later) or Windows 11 (x64)",
      req_os_2: "Hardware with a Windows Precision Touchpad",
      support_title: "Support & Feedback",
      support_desc:
        "Need help, found a bug, or want to request a feature? Reach out via email or open an issue on GitHub:",
      support_email_label: "Email:",
      support_github_label: "GitHub Issues:",

      footer_copy: "© 2026 Touchpad Gesture — Chau Tran.",

      priv_title: "Privacy Policy",
      priv_updated: "Effective Date: November 20, 2026",
      priv_s1_title: "1. Overview & Zero Data Collection",
      priv_s1_body:
        "Touchpad Gesture is an offline-first desktop utility for Windows. We respect your privacy: the application does NOT collect, store, transmit, sell, or share any personal information, telemetry, analytics, or keystroke/touchpad logs to any external server.",
      priv_s2_title: "2. Local Touchpad Input & Desktop Permissions",
      priv_s2_body:
        "To detect multi-finger gestures and execute custom shortcuts, Touchpad Gesture uses Windows Desktop Full-Trust capabilities (runFullTrust) and Raw Input APIs:",
      priv_s2_l1:
        "Touchpad coordinates and finger counts are processed strictly in-memory on your local device in real time and are never recorded or uploaded.",
      priv_s2_l2:
        "Your gesture configurations and per-app profiles are saved locally on your computer.",
      priv_s3_title: "3. Microsoft Store & Licensing",
      priv_s3_body:
        "If you install or purchase Touchpad Gesture through the Microsoft Store, Microsoft processes payment and store account transactions in accordance with the Microsoft Privacy Statement. The application only queries local Windows Store licensing APIs (StoreContext) to verify your trial or license status.",
      priv_s4_title: "4. Third-Party Services",
      priv_s4_body:
        "Touchpad Gesture does not include third-party advertising SDKs, crash reporters, or analytics trackers.",
      priv_s5_title: "5. Children's Privacy",
      priv_s5_body:
        "Because we do not collect any personal data from any user, we do not knowingly collect personal information from children.",
      priv_s6_title: "6. Changes & Contact",
      priv_s6_body:
        "Any updates to this Privacy Policy will be published on this page with an updated effective date. If you have questions, please contact us at:"
    },
    vi: {
      nav_features: "Tính năng",
      nav_requirements: "Yêu cầu",
      nav_privacy: "Chính sách bảo mật",
      nav_home: "Trang chủ",

      hero_badge: "Windows 10 / 11 Precision Touchpad",
      hero_title: "Nâng Tầm Touchpad Trên Windows",
      hero_desc:
        "Tùy biến cử chỉ đa ngón, profile riêng cho từng ứng dụng và thao tác Hold-to-Draw cho Windows 10/11 Precision Touchpad — nhẹ, mượt và hoạt động hoàn toàn offline.",
      hero_cta_download: "Tải trên GitHub Releases",
      hero_cta_store: "Microsoft Store (Sắp ra mắt)",

      features_title: "Tính năng nổi bật",
      features_sub: "Thiết kế tối giản, phản hồi tức thì và không chạy ngầm nặng máy.",
      feat_1_title: "Cử chỉ đa ngón linh hoạt",
      feat_1_desc:
        "Gán thao tác vuốt, chạm 3 ngón và 4 ngón thành phím tắt tùy chỉnh, điều khiển media hoặc quản lý cửa sổ.",
      feat_2_title: "Profile theo từng ứng dụng",
      feat_2_desc:
        "Tự động chuyển đổi bộ cử chỉ phù hợp với ứng dụng đang mở (trình duyệt, trình soạn thảo code, công cụ thiết kế...).",
      feat_3_title: "Thao tác Hold-to-Draw",
      feat_3_desc:
        "Giữ và vẽ nhanh nét cử chỉ trên touchpad để kích hoạt macro hoặc chuỗi thao tác tức thì.",
      feat_4_title: "Nhẹ & 100% Offline",
      feat_4_desc:
        "Chạy gọn trong khay hệ thống Windows (System Tray), tiêu tốn ít tài nguyên, không telemetry và không cần đăng nhập.",

      req_title: "Yêu cầu hệ thống & Hỗ trợ",
      req_os_title: "Môi trường hỗ trợ",
      req_os_1: "Windows 10 (bản 2004 / Build 19041 trở lên) hoặc Windows 11 (x64)",
      req_os_2: "Thiết bị sử dụng Windows Precision Touchpad",
      support_title: "Hỗ trợ & Góp ý",
      support_desc:
        "Cần hỗ trợ kỹ thuật, báo lỗi hoặc đề xuất tính năng? Liên hệ qua email hoặc tạo issue trên GitHub:",
      support_email_label: "Email:",
      support_github_label: "GitHub Issues:",

      footer_copy: "© 2026 Touchpad Gesture — Chau Tran.",

      priv_title: "Chính sách Quyền riêng tư (Privacy Policy)",
      priv_updated: "Ngày hiệu lực: 20/11/2026",
      priv_s1_title: "1. Tổng quan & Cam kết không thu thập dữ liệu",
      priv_s1_body:
        "Touchpad Gesture là ứng dụng tiện ích chạy cục bộ (offline-first) trên Windows. Chúng tôi tôn trọng quyền riêng tư của bạn: ứng dụng KHÔNG thu thập, lưu trữ, gửi đi, bán hay chia sẻ bất kỳ dữ liệu cá nhân, telemetry, phân tích hành vi hay dữ liệu bàn phím/touchpad nào ra máy chủ bên ngoài.",
      priv_s2_title: "2. Xử lý dữ liệu Touchpad cục bộ & Quyền hệ thống",
      priv_s2_body:
        "Để nhận diện cử chỉ đa ngón và thực thi phím tắt, Touchpad Gesture sử dụng quyền Desktop Full-Trust (runFullTrust) và Raw Input API của Windows:",
      priv_s2_l1:
        "Tọa độ chạm và số ngón tay chỉ được xử lý trực tiếp trong bộ nhớ RAM theo thời gian thực trên máy của bạn, không ghi log hay tải lên mạng.",
      priv_s2_l2:
        "Cấu hình cử chỉ và profile theo ứng dụng được lưu cục bộ ngay trên máy tính của bạn.",
      priv_s3_title: "3. Microsoft Store & Bản quyền",
      priv_s3_body:
        "Nếu bạn cài đặt hoặc mua Touchpad Gesture qua Microsoft Store, mọi giao dịch thanh toán và thông tin tài khoản do Microsoft xử lý theo Chính sách Quyền riêng tư của Microsoft. Ứng dụng chỉ gọi API bản quyền cục bộ của Windows Store (StoreContext) để kiểm tra trạng thái dùng thử hoặc bản quyền.",
      priv_s4_title: "4. Dịch vụ bên thứ ba",
      priv_s4_body:
        "Touchpad Gesture không tích hợp SDK quảng cáo, công cụ theo dõi lỗi (crash reporter) hay analytics của bên thứ ba.",
      priv_s5_title: "5. Quyền riêng tư của trẻ em",
      priv_s5_body:
        "Vì ứng dụng không thu thập bất kỳ dữ liệu cá nhân nào từ người dùng, chúng tôi không thu thập thông tin của trẻ em.",
      priv_s6_title: "6. Thay đổi chính sách & Liên hệ",
      priv_s6_body:
        "Mọi cập nhật đối với Chính sách Quyền riêng tư này sẽ được đăng tải tại trang này cùng ngày hiệu lực mới. Nếu có thắc mắc, vui lòng liên hệ:"
    }
  };

  function getInitialLang() {
    var params = new URLSearchParams(window.location.search);
    var qLang = params.get("lang");
    if (qLang === "en" || qLang === "vi") {
      return qLang;
    }
    try {
      var saved = localStorage.getItem("tg_site_lang");
      if (saved === "en" || saved === "vi") {
        return saved;
      }
    } catch (_) {
      // Ignore storage restrictions
    }
    var browserLang = (navigator.language || "").toLowerCase();
    return browserLang.indexOf("vi") === 0 ? "vi" : "en";
  }

  function applyLang(lang) {
    var dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
    document.documentElement.lang = lang === "vi" ? "vi" : "en";

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        nodes[i].textContent = dict[key];
      }
    }

    var buttons = document.querySelectorAll(".lang-btn[data-lang]");
    for (var j = 0; j < buttons.length; j++) {
      var isActive = buttons[j].getAttribute("data-lang") === lang;
      buttons[j].classList.toggle("active", isActive);
      buttons[j].setAttribute("aria-pressed", isActive ? "true" : "false");
    }

    try {
      localStorage.setItem("tg_site_lang", lang);
    } catch (_) {
      // Ignore storage restrictions
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    var initial = getInitialLang();
    applyLang(initial);

    var buttons = document.querySelectorAll(".lang-btn[data-lang]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        applyLang(this.getAttribute("data-lang"));
      });
    }
  });
})();
