(function () {
  "use strict";

  var TRANSLATIONS = {
    en: {
      /* Shared Navigation & Footer */
      nav_how: "How it works",
      nav_features: "Features",
      nav_usecases: "Use cases",
      nav_faq: "FAQ",
      nav_privacy: "Privacy Policy",
      nav_home: "Home",
      nav_cta: "Get early access",
      footer_copy: "© 2026 Touchpad Gesture — Chau Tran.",
      footer_support: "GitHub Support",
      footer_contact: "Contact",

      /* Hero */
      hero_pill: "● For Windows 10 / 11 laptops",
      hero_title_html:
        'Touchpad gestures.<br>Get repeated work done <span class="accent">in one swipe.</span>',
      hero_sub:
        "Turn the gestures you already make into shortcuts, AI actions, and multi-step macros. Keep your hands on the touchpad—and keep working.",
      hero_cta_primary: "Get early access",
      hero_cta_secondary: "See how it works",
      hero_trust:
        "No complex setup. 100% offline and works alongside your existing Windows shortcuts.",

      /* Hero Mockup */
      mock_w1: "Research notes",
      mock_w2: "Ask AI about this selection",
      mock_palette_title: "Gesture actions",
      mock_act_1: "Explain selection",
      mock_act_2: "Open VS Code",
      mock_act_3: "Screenshot area",
      mock_act_4: "Switch recent tab",

      /* Problem Section */
      prob_eyebrow: "The everyday friction",
      prob_title: "You repeat the same steps far too often.",
      prob_lead:
        "Open an app. Copy something. Switch windows. Find a link. Run a command. Then do it again tomorrow.",
      prob_1_title: "Shortcuts interrupt your focus",
      prob_1_desc:
        "Useful shortcuts often require moving between keyboard and mouse, breaking the rhythm of what you were doing.",
      prob_2_title: "Small tasks add up",
      prob_2_desc:
        "Launching tools, opening pages, capturing screenshots, and switching contexts are quick individually—but constant throughout the day.",
      prob_3_title: "Using AI takes too many steps",
      prob_3_desc:
        "Select text, copy it, switch apps, paste it, retype a prompt, and send. The context gets lost in the process.",

      /* How It Works */
      how_eyebrow: "How it works",
      how_title: "Assign a gesture. Run your routine.",
      how_lead:
        "Choose a touchpad gesture, connect it to an action or a sequence of actions, and trigger it whenever you need it.",
      how_1_title: "Pick a gesture",
      how_1_desc:
        "Use a three-finger swipe, tap, or drawing gesture that feels natural on your laptop’s touchpad.",
      how_2_title: "Choose what it does",
      how_2_desc:
        "Map it to an app, website, folder, system action, keyboard shortcut, AI prompt, or custom macro.",
      how_3_title: "Swipe to run it",
      how_3_desc:
        "Trigger the action instantly from your touchpad—without searching menus or reaching for the keyboard.",

      /* Features & AI Split */
      feat_eyebrow: "What you can do",
      feat_title: "One gesture for the work you repeat.",
      feat_lead:
        "Start with simple shortcuts. Grow into complete routines as you discover the actions you perform every day.",
      ai_title: "Send selected text to AI",
      ai_desc:
        "Select any text, make your gesture, and send it to your preferred AI with a prompt already prepared.",
      ai_c1_html: "<b>Select text</b> in any app, browser, PDF, or editor.",
      ai_c2_html: "<b>Swipe</b> to open the AI action you assigned.",
      ai_c3_html:
        "<b>Send it with context</b>—no copying, pasting, or retyping prompts.",
      ai_f1: "Select text in a document",
      ai_f1_tag: "Any app",
      ai_f2: "Three-finger swipe",
      ai_f2_tag: "Gesture",
      ai_f3: "Open AI with your prompt",
      ai_f3_tag: "Action",
      ai_f4: "Text is inserted and sent",
      ai_f4_tag: "Done",

      fcard_1_title: "Launch anything",
      fcard_1_desc:
        "Open apps, folders, websites, files, playlists, and frequently used tools from a single gesture.",
      fcard_2_title: "Move through Windows",
      fcard_2_desc:
        "Switch windows, manage tabs, snap windows, take screenshots, and control common system actions.",
      fcard_3_title: "Run multi-step macros",
      fcard_3_desc:
        "Combine actions into one routine: open a tool, run a command, capture a screenshot, and prepare your workspace.",
      fcard_4_title: "Use context-aware profiles",
      fcard_4_desc:
        "Give the same gesture different meanings depending on the active app—design tools, code editors, browsers, and more.",
      fcard_5_title: "Create custom actions",
      fcard_5_desc:
        "Build the shortcuts that match your work instead of adapting your habits to a fixed set of defaults.",
      fcard_6_title: "Stay lightweight",
      fcard_6_desc:
        "Designed to run quietly in the Windows System Tray and stay out of the way until you need it.",

      /* Use Cases */
      uc_eyebrow: "Built for real work",
      uc_title: "See yourself in the workflow.",
      uc_lead:
        "Touchpad gestures are most useful when they remove a sequence you perform again and again.",
      uc_1_badge: "Developers",
      uc_1_title: "Start a coding session",
      uc_1_desc:
        "Open your project, launch the terminal, start the dev server, and bring up the tools you need.",
      uc_1_mini: "Swipe → VS Code → Terminal → Dev server",
      uc_2_badge: "AI users",
      uc_2_title: "Ask AI about anything",
      uc_2_desc:
        "Select a paragraph, swipe, and send it to ChatGPT, Gemini, or another AI action with your prompt ready.",
      uc_2_mini: "Select text → Swipe → AI prompt",
      uc_3_badge: "Designers",
      uc_3_title: "Switch into design mode",
      uc_3_desc:
        "Open Figma, bring up reference materials, and access the design actions you use most often.",
      uc_3_mini: "Swipe → Figma → References → Tools",
      uc_4_badge: "Writers",
      uc_4_title: "Research without losing focus",
      uc_4_desc:
        "Highlight a phrase, send it to AI for an explanation, then return to writing without breaking your flow.",
      uc_4_mini: "Select phrase → Swipe → Explain",
      uc_5_badge: "Multitaskers",
      uc_5_title: "Move between tasks",
      uc_5_desc:
        "Switch between your browser, notes, communication apps, and active project windows with intentional gestures.",
      uc_5_mini: "Swipe → Recent window → Focus",
      uc_6_badge: "Everyday users",
      uc_6_title: "Open what you need",
      uc_6_desc:
        "Launch a favorite site, folder, playlist, screenshot tool, or daily routine without hunting through menus.",
      uc_6_mini: "Swipe → Favorite action",

      /* FAQ */
      faq_eyebrow: "Questions",
      faq_title: "Good to know",
      faq_1_q: "Do I need to remember complicated gestures?",
      faq_1_a:
        "No. Start with a few gestures for the actions you use most. You can add more only when a repeated task becomes worth automating.",
      faq_2_q: "Will this replace my keyboard shortcuts?",
      faq_2_a:
        "No. It gives you another way to trigger the actions you already rely on—especially when your hands are already on the touchpad.",
      faq_3_q: "Can one gesture run multiple actions?",
      faq_3_a:
        "Yes. You can create a macro that runs a sequence of actions, such as opening an app, switching windows, running a command, or preparing an AI prompt.",
      faq_4_q: "Does it work with AI tools?",
      faq_4_a:
        "You can assign a gesture to an AI action. For example, select text, swipe, and send it to your preferred AI with a prepared prompt.",
      faq_5_q: "Which laptops are supported?",
      faq_5_a:
        "Touchpad Gesture is designed for Windows 10 (Build 19041+) and Windows 11 (x64) laptops with a Windows Precision Touchpad. Gesture support and reliability can vary by touchpad hardware and drivers.",
      faq_6_q: "Is my data private?",
      faq_6_a:
        "Yes. Touchpad Gesture is 100% offline—your gesture configuration and actions remain on your device, with zero telemetry. The app does not require your AI account credentials to trigger an AI action.",

      /* Early Access CTA */
      cta_eyebrow: "Early access · Microsoft Store coming soon",
      cta_title: "Get repeated work done in one swipe.",
      cta_desc:
        "Try Touchpad Gesture on Windows 10/11, build your first custom actions, and help shape the workflows that matter most.",
      cta_btn_primary: "Request early access",
      cta_btn_secondary: "GitHub Support",
      cta_trust:
        "100% offline · Windows 10/11 Precision Touchpad · No credit card required.",

      /* Privacy Policy Page (preserved) */
      support_email_label: "Email:",
      support_github_label: "GitHub Issues:",
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
      /* Shared Navigation & Footer */
      nav_how: "Cách hoạt động",
      nav_features: "Tính năng",
      nav_usecases: "Ứng dụng",
      nav_faq: "Hỏi đáp",
      nav_privacy: "Chính sách bảo mật",
      nav_home: "Trang chủ",
      nav_cta: "Đăng ký trải nghiệm",
      footer_copy: "© 2026 Touchpad Gesture — Chau Tran.",
      footer_support: "Hỗ trợ GitHub",
      footer_contact: "Liên hệ",

      /* Hero */
      hero_pill: "● Dành cho laptop Windows 10 / 11",
      hero_title_html:
        'Cử chỉ Touchpad.<br>Xong việc lặp lại <span class="accent">chỉ một cú vuốt.</span>',
      hero_sub:
        "Biến những thao tác vuốt quen thuộc thành phím tắt, lệnh AI và macro đa bước. Giữ tay ngay trên touchpad—và làm việc liền mạch.",
      hero_cta_primary: "Đăng ký trải nghiệm",
      hero_cta_secondary: "Xem cách hoạt động",
      hero_trust:
        "Không cần thiết lập phức tạp. Hoạt động 100% offline, song song với phím tắt Windows sẵn có.",

      /* Hero Mockup */
      mock_w1: "Ghi chú nghiên cứu",
      mock_w2: "Hỏi AI về đoạn đang chọn",
      mock_palette_title: "Lệnh cử chỉ",
      mock_act_1: "Giải thích đoạn chọn",
      mock_act_2: "Mở VS Code",
      mock_act_3: "Chụp vùng màn hình",
      mock_act_4: "Chuyển tab gần nhất",

      /* Problem Section */
      prob_eyebrow: "Sự gián đoạn hằng ngày",
      prob_title: "Bạn lặp đi lặp lại cùng một thao tác quá nhiều lần.",
      prob_lead:
        "Mở ứng dụng. Sao chép nội dung. Chuyển cửa sổ. Tìm đường link. Chạy lệnh. Rồi ngày mai lại làm y hệt.",
      prob_1_title: "Phím tắt làm đứt mạch tập trung",
      prob_1_desc:
        "Nhiều phím tắt hữu ích buộc bạn di chuyển qua lại giữa bàn phím và chuột, làm gián đoạn nhịp làm việc.",
      prob_2_title: "Tác vụ nhỏ cộng dồn cả ngày",
      prob_2_desc:
        "Mở công cụ, mở trang web, chụp màn hình hay chuyển ngữ cảnh đều nhanh từng lần—nhưng lặp lại liên tục suốt ngày.",
      prob_3_title: "Dùng AI mất quá nhiều bước",
      prob_3_desc:
        "Bôi đen chữ, copy, chuyển app, dán, gõ lại prompt rồi gửi. Mạch suy nghĩ và ngữ cảnh rơi rớt dọc đường.",

      /* How It Works */
      how_eyebrow: "Cách hoạt động",
      how_title: "Gán một cử chỉ. Chạy cả quy trình.",
      how_lead:
        "Chọn cử chỉ touchpad, nối với một lệnh hoặc chuỗi hành động, và kích hoạt ngay bất cứ khi nào cần.",
      how_1_title: "Chọn cử chỉ",
      how_1_desc:
        "Dùng vuốt 3 ngón, chạm hoặc vẽ nét Hold-to-Draw tự nhiên ngay trên touchpad laptop của bạn.",
      how_2_title: "Chọn hành động",
      how_2_desc:
        "Gán cho ứng dụng, trang web, thư mục, thao tác hệ thống, phím tắt, prompt AI hoặc macro tùy chỉnh.",
      how_3_title: "Vuốt để chạy ngay",
      how_3_desc:
        "Kích hoạt tức thì từ touchpad—không phải lục menu hay với tay sang bàn phím.",

      /* Features & AI Split */
      feat_eyebrow: "Bạn có thể làm gì",
      feat_title: "Một cử chỉ cho mọi việc lặp lại.",
      feat_lead:
        "Bắt đầu từ phím tắt đơn giản. Mở rộng thành quy trình hoàn chỉnh khi bạn nhận ra những thao tác mình làm mỗi ngày.",
      ai_title: "Gửi đoạn văn bản đang chọn thẳng tới AI",
      ai_desc:
        "Bôi đen bất kỳ đoạn chữ nào, thực hiện cử chỉ, và gửi ngay tới AI ưa thích kèm prompt đã chuẩn bị sẵn.",
      ai_c1_html: "<b>Bôi đen văn bản</b> trong mọi app, trình duyệt, PDF hay trình soạn thảo.",
      ai_c2_html: "<b>Vuốt</b> để mở lệnh AI bạn đã gán sẵn.",
      ai_c3_html:
        "<b>Gửi kèm ngữ cảnh</b>—không cần copy, dán hay gõ lại prompt.",
      ai_f1: "Bôi đen văn bản trong tài liệu",
      ai_f1_tag: "Mọi ứng dụng",
      ai_f2: "Vuốt 3 ngón trên touchpad",
      ai_f2_tag: "Cử chỉ",
      ai_f3: "Mở AI kèm prompt chuẩn bị sẵn",
      ai_f3_tag: "Hành động",
      ai_f4: "Chèn văn bản và gửi tự động",
      ai_f4_tag: "Hoàn tất",

      fcard_1_title: "Mở mọi thứ tức thì",
      fcard_1_desc:
        "Mở ứng dụng, thư mục, website, tệp, playlist và công cụ hay dùng chỉ bằng một cử chỉ.",
      fcard_2_title: "Điều hướng Windows mượt mà",
      fcard_2_desc:
        "Chuyển cửa sổ, quản lý tab, chia đôi màn hình, chụp ảnh màn hình và điều khiển thao tác hệ thống.",
      fcard_3_title: "Chạy macro đa bước",
      fcard_3_desc:
        "Ghép nhiều lệnh thành một chuỗi: mở công cụ, chạy lệnh terminal, chụp màn hình và chuẩn bị không gian làm việc.",
      fcard_4_title: "Profile theo ngữ cảnh ứng dụng",
      fcard_4_desc:
        "Cùng một cử chỉ nhưng thực hiện lệnh khác nhau tùy ứng dụng đang mở—thiết kế, lập trình, trình duyệt...",
      fcard_5_title: "Tự tạo lệnh theo thói quen",
      fcard_5_desc:
        "Xây dựng bộ thao tác khớp đúng công việc của bạn thay vì phải tự thích nghi với mặc định cố định.",
      fcard_6_title: "Gọn nhẹ tối đa",
      fcard_6_desc:
        "Chạy êm trong khay hệ thống Windows (System Tray), không làm phiền và luôn sẵn sàng khi bạn cần.",

      /* Use Cases */
      uc_eyebrow: "Thiết kế cho công việc thực tế",
      uc_title: "Thấy chính quy trình của bạn ở đây.",
      uc_lead:
        "Cử chỉ touchpad hữu ích nhất khi nó thay thế cả một chuỗi thao tác bạn phải lặp lại mỗi ngày.",
      uc_1_badge: "Lập trình viên",
      uc_1_title: "Khởi động phiên code",
      uc_1_desc:
        "Mở dự án, bật terminal, chạy dev server và gọi sẵn các công cụ bạn cần.",
      uc_1_mini: "Vuốt → VS Code → Terminal → Dev server",
      uc_2_badge: "Người dùng AI",
      uc_2_title: "Hỏi AI về bất cứ điều gì",
      uc_2_desc:
        "Bôi đen một đoạn, vuốt, và gửi ngay tới ChatGPT, Gemini hoặc công cụ AI khác kèm prompt sẵn.",
      uc_2_mini: "Bôi đen → Vuốt → Prompt AI",
      uc_3_badge: "Nhà thiết kế",
      uc_3_title: "Chuyển sang chế độ thiết kế",
      uc_3_desc:
        "Mở Figma, gọi tài liệu tham khảo và truy cập nhanh các thao tác thiết kế hay dùng nhất.",
      uc_3_mini: "Vuốt → Figma → Tham khảo → Công cụ",
      uc_4_badge: "Người viết lách",
      uc_4_title: "Tra cứu không đứt mạch viết",
      uc_4_desc:
        "Bôi đen cụm từ, gửi AI giải thích nhanh rồi quay lại viết tiếp mà không mất tập trung.",
      uc_4_mini: "Bôi đen cụm từ → Vuốt → Giải thích",
      uc_5_badge: "Đa nhiệm",
      uc_5_title: "Chuyển đổi giữa các đầu việc",
      uc_5_desc:
        "Di chuyển giữa trình duyệt, ghi chú, ứng dụng chat và cửa sổ dự án bằng cử chỉ có chủ đích.",
      uc_5_mini: "Vuốt → Cửa sổ gần nhất → Tập trung",
      uc_6_badge: "Người dùng hằng ngày",
      uc_6_title: "Mở ngay thứ bạn cần",
      uc_6_desc:
        "Mở trang yêu thích, thư mục, playlist, công cụ chụp màn hình hoặc thói quen đầu ngày mà không cần tìm menu.",
      uc_6_mini: "Vuốt → Thao tác yêu thích",

      /* FAQ */
      faq_eyebrow: "Câu hỏi thường gặp",
      faq_title: "Thông tin cần biết",
      faq_1_q: "Tôi có cần nhớ nhiều cử chỉ phức tạp không?",
      faq_1_a:
        "Không. Hãy bắt đầu bằng vài cử chỉ cho những thao tác dùng nhiều nhất, rồi chỉ thêm mới khi thấy việc lặp lại đáng để tự động hóa.",
      faq_2_q: "Ứng dụng có thay thế phím tắt bàn phím không?",
      faq_2_a:
        "Không. Nó bổ sung thêm một cách kích hoạt nhanh những thao tác bạn vốn quen dùng—đặc biệt khi tay đang đặt sẵn trên touchpad.",
      faq_3_q: "Một cử chỉ có thể chạy nhiều hành động liên tiếp không?",
      faq_3_a:
        "Có. Bạn có thể tạo macro chạy chuỗi thao tác như mở ứng dụng, chuyển cửa sổ, chạy lệnh hoặc chuẩn bị prompt AI.",
      faq_4_q: "Có hỗ trợ các công cụ AI không?",
      faq_4_a:
        "Có. Bạn có thể gán cử chỉ cho hành động AI—ví dụ bôi đen văn bản, vuốt để gửi sang AI ưa thích kèm prompt sẵn.",
      faq_5_q: "Hỗ trợ những dòng laptop nào?",
      faq_5_a:
        "Touchpad Gesture được thiết kế cho laptop Windows 10 (Build 19041+) và Windows 11 (x64) có Windows Precision Touchpad. Độ tương thích và độ ổn định có thể khác nhau tùy phần cứng và driver touchpad.",
      faq_6_q: "Dữ liệu của tôi có được bảo mật không?",
      faq_6_a:
        "Có. Touchpad Gesture hoạt động 100% offline—toàn bộ cấu hình cử chỉ lưu cục bộ trên máy và không thu thập telemetry. Ứng dụng cũng không yêu cầu mật khẩu tài khoản AI của bạn.",

      /* Early Access CTA */
      cta_eyebrow: "Trải nghiệm sớm · Microsoft Store sắp ra mắt",
      cta_title: "Xong việc lặp lại chỉ trong một cú vuốt.",
      cta_desc:
        "Dùng thử Touchpad Gesture trên Windows 10/11, tạo những cử chỉ đầu tiên và góp ý cho các quy trình bạn cần nhất.",
      cta_btn_primary: "Đăng ký trải nghiệm sớm",
      cta_btn_secondary: "Hỗ trợ GitHub",
      cta_trust:
        "100% offline · Windows 10/11 Precision Touchpad · Không cần thẻ tín dụng.",

      /* Privacy Policy Page (preserved) */
      support_email_label: "Email:",
      support_github_label: "GitHub Issues:",
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

    var htmlNodes = document.querySelectorAll("[data-i18n-html]");
    for (var k = 0; k < htmlNodes.length; k++) {
      var hKey = htmlNodes[k].getAttribute("data-i18n-html");
      if (Object.prototype.hasOwnProperty.call(dict, hKey)) {
        htmlNodes[k].innerHTML = dict[hKey];
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
