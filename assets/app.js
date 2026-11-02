
const CHAPTERS = [{"num":1,"file":"01-suc-khoe-va-phong-ngua.md","title":"Bảo vệ tính mạng và phòng bệnh","tips":48,"group":"Sức khỏe"},{"num":2,"file":"02-loi-song-va-benh-man-tinh.md","title":"Lối sống giúp giảm nguy cơ bệnh mạn tính","tips":47,"group":"Sức khỏe"},{"num":3,"file":"03-quan-ly-nang-luong-va-tap-trung.md","title":"Quản lý năng lượng và sự tập trung","tips":27,"group":"Phát triển"},{"num":4,"file":"04-quan-ly-thoi-gian-va-quyet-dinh.md","title":"Quản lý thời gian và ra quyết định","tips":18,"group":"Phát triển"},{"num":5,"file":"05-tai-chinh-ca-nhan.md","title":"Quản lý tiền và tránh mất tiền","tips":51,"group":"Tiền bạc"},{"num":6,"file":"06-nhung-khoan-khong-nen-mua.md","title":"Những khoản không nên mua chỉ vì quảng cáo","tips":35,"group":"Tiền bạc"},{"num":7,"file":"07-khi-thieu-tien-va-mat-viec.md","title":"Khi mất việc, thiếu tiền hoặc gặp biến cố","tips":23,"group":"Tiền bạc"},{"num":8,"file":"08-tranh-chap-va-bao-ve-ban-than.md","title":"Tránh rủi ro pháp lý và bảo vệ quyền lợi","tips":46,"group":"Pháp lý & công việc"},{"num":9,"file":"09-cac-rui-ro-phap-ly-thuong-gap.md","title":"Những rủi ro pháp lý thường gặp trong đời sống Việt Nam","tips":29,"group":"Pháp lý & công việc"},{"num":10,"file":"10-tinh-yeu-hon-nhan-va-gia-dinh.md","title":"Tình yêu, hôn nhân và gia đình","tips":23,"group":"Gia đình"},{"num":11,"file":"11-lap-trinh-vien-va-cong-nghe.md","title":"Lưu ý pháp lý cho lập trình viên và người làm công nghệ","tips":21,"group":"Pháp lý & công việc"},{"num":12,"file":"12-khoi-nghiep-va-kinh-doanh.md","title":"Khởi nghiệp và kinh doanh tại Việt Nam","tips":28,"group":"Pháp lý & công việc"},{"num":13,"file":"13-so-cuu-va-khan-cap.md","title":"Sơ cứu và tình huống khẩn cấp","tips":48,"group":"Sức khỏe"},{"num":14,"file":"14-an-toan-tai-khoan-va-du-lieu.md","title":"An toàn tài khoản và dữ liệu","tips":12,"group":"Đời sống"},{"num":15,"file":"15-thue-nha-va-mua-nha.md","title":"Thuê nhà và mua nhà","tips":18,"group":"Tiền bạc"},{"num":16,"file":"16-song-voi-benh-man-tinh.md","title":"Sống cùng bệnh mạn tính","tips":14,"group":"Sức khỏe"},{"num":17,"file":"17-cham-soc-nguoi-cao-tuoi.md","title":"Chăm sóc người cao tuổi","tips":13,"group":"Gia đình"},{"num":18,"file":"18-quyet-dinh-sinh-con-va-nuoi-con.md","title":"Quyết định sinh con và nuôi con","tips":7,"group":"Gia đình"},{"num":19,"file":"19-quyen-loi-lao-dong-va-nghi-viec.md","title":"Quyền lợi khi đi làm, nghỉ việc và tai nạn lao động","tips":24,"group":"Pháp lý & công việc"},{"num":20,"file":"20-cham-soc-tre-so-sinh.md","title":"Chăm sóc trẻ sơ sinh","tips":17,"group":"Sức khỏe"},{"num":21,"file":"21-du-lich-nuoc-ngoai.md","title":"Du lịch nước ngoài an toàn","tips":13,"group":"Phát triển"},{"num":22,"file":"22-giai-tri-va-thu-gian.md","title":"Giải trí và nghỉ ngơi an toàn","tips":12,"group":"Phát triển"},{"num":23,"file":"23-hoc-ky-nang-va-nghe-nghiep.md","title":"Học kỹ năng và phát triển nghề nghiệp","tips":25,"group":"Phát triển"},{"num":24,"file":"24-kham-chua-benh-va-bhyt.md","title":"Khám chữa bệnh và sử dụng bảo hiểm y tế","tips":15,"group":"Sức khỏe"},{"num":25,"file":"25-thu-tuc-sau-khi-nguoi-than-qua-doi.md","title":"Những việc cần làm khi người thân qua đời","tips":12,"group":"Pháp lý & công việc"},{"num":26,"file":"26-xay-dung-website-va-nen-tang-so.md","title":"Xây dựng website, ứng dụng và nền tảng số","tips":13,"group":"Pháp lý & công việc"},{"num":27,"file":"27-mang-thai-va-sinh-no.md","title":"Mang thai và sinh nở","tips":20,"group":"Sức khỏe"},{"num":28,"file":"28-ngoai-hinh-va-tham-my-an-toan.md","title":"Chăm sóc ngoại hình mà không làm hại sức khỏe","tips":10,"group":"Sức khỏe"},{"num":29,"file":"29-vuot-qua-bien-co-va-khung-hoang.md","title":"Vượt qua mất mát, thất nghiệp và biến cố lớn","tips":14,"group":"Gia đình"},{"num":30,"file":"30-suc-khoe-va-an-toan-tre-di-hoc.md","title":"Sức khỏe và an toàn của trẻ đi học","tips":21,"group":"Gia đình"},{"num":31,"file":"31-lua-chon-sau-tuoi-18.md","title":"Những lựa chọn sau tuổi 18","tips":17,"group":"Pháp lý & công việc"},{"num":32,"file":"32-du-hoc-va-hoc-tap-o-nuoc-ngoai.md","title":"Du học và học tập ở nước ngoài","tips":12,"group":"Phát triển"},{"num":33,"file":"33-song-voi-khuyet-tat-va-cham-soc-dai-han.md","title":"Sống với khuyết tật và chăm sóc dài hạn","tips":21,"group":"Gia đình"},{"num":34,"file":"34-su-dung-thuoc-an-toan-tai-nha.md","title":"Dùng thuốc an toàn tại nhà","tips":13,"group":"Sức khỏe"}];
const GROUPS = [
  { name: "Tất cả", ids: CHAPTERS.map(c => c.num), icon: "✦" },
  { name: "Sức khỏe", ids: [1,2,13,16,20,24,27,28,34], icon: "✚" },
  { name: "Tiền bạc", ids: [5,6,7,15], icon: "₫" },
  { name: "Pháp lý & công việc", ids: [8,9,11,12,19,25,26,31], icon: "§" },
  { name: "Gia đình", ids: [10,17,18,20,25,27,29,30,33], icon: "⌂" },
  { name: "Phát triển", ids: [3,4,19,21,22,23,31,32], icon: "↗" },
  { name: "Đời sống", ids: [3,4,6,7,14,17,22,29], icon: "◌" }
];

const state = {
  chapters: [],
  query: "",
  chapter: "",
  group: "Tất cả",
  view: "grid",
  sort: "chapter",
  review: "all",
  limit: 24
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const searchInput = $("#searchInput");
const searchFallback = $("#searchInputFallback");
const chapterSelect = $("#chapterSelect");
const resultGrid = $("#resultGrid");
const resultCount = $("#resultCount");
const noResults = $("#noResults");
const loadMore = $("#loadMore");
const topicGrid = $("#topicGrid");
const chapterDetails = $("#chapterDetails");
const groupFilters = $("#groupFilters");
const viewToggle = $("#viewToggle");

function normalise(text) {
  return (text || "").normalize("NFC").toLocaleLowerCase("vi");
}

function stripInline(text) {
  return text
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, "$1")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^\s*>\s?/, "")
    .trim();
}

function parseChapter(meta, markdown) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  let title = meta.title;
  let intro = [];
  let tips = [];
  let notes = [];
  let current = null;
  let mode = "intro";

  const commit = () => {
    if (!current) return;
    const section = {
      title: current.title,
      body: current.lines.join("\n").trim()
    };
    if (current.type === "tip") {
      const reviewMatch = section.body.match(/\*\*Mức kiểm chứng:\*\*\s*(P[123])/);
      tips.push({
        num: current.num,
        title: current.title,
        body: section.body,
        review: reviewMatch ? reviewMatch[1] : "P1"
      });
    } else {
      notes.push(section);
    }
    current = null;
  };

  for (const raw of lines) {
    const line = raw.trimEnd();
    const h1 = line.match(/^#\s+\d+\.\s+(.+)$/);
    if (h1) {
      title = h1[1].trim();
      continue;
    }
    const h2 = line.match(/^##\s+(.+)$/);
    if (h2) {
      commit();
      const numbered = h2[1].match(/^(\d+)\.\s+(.+)$/);
      if (numbered) {
        mode = "tip";
        current = {
          type: "tip",
          num: numbered[1],
          title: numbered[2].trim(),
          lines: []
        };
      } else {
        mode = "note";
        current = {
          type: "note",
          title: h2[1].trim(),
          lines: []
        };
      }
      continue;
    }
    if (!current) {
      if (mode === "intro" && line.trim()) intro.push(line);
    } else {
      current.lines.push(line);
    }
  }
  commit();

  return {
    ...meta,
    title,
    intro: intro.join("\n").trim(),
    tips,
    notes
  };
}

function appendInline(parent, text) {
  const tokenPattern = /(\[[^\]]+\]\(https?:\/\/[^)]+\)|\*\*[^*]+\*\*|`[^`]+`)/g;
  let lastIndex = 0;
  for (const match of text.matchAll(tokenPattern)) {
    const before = text.slice(lastIndex, match.index);
    if (before) parent.append(document.createTextNode(before));
    const token = match[0];
    const link = token.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);
    if (link) {
      const a = document.createElement("a");
      a.href = link[2];
      a.textContent = link[1];
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.className = "source-link";
      parent.append(a);
    } else if (token.startsWith("**")) {
      const strong = document.createElement("strong");
      strong.textContent = token.slice(2, -2);
      parent.append(strong);
    } else {
      const code = document.createElement("code");
      code.textContent = token.slice(1, -1);
      parent.append(code);
    }
    lastIndex = match.index + token.length;
  }
  if (lastIndex < text.length) {
    parent.append(document.createTextNode(text.slice(lastIndex)));
  }
}

function renderMarkdown(container, markdown) {
  const lines = (markdown || "").split("\n");
  let paragraph = [];
  let list = null;
  let quote = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    const p = document.createElement("p");
    appendInline(p, paragraph.join(" "));
    container.append(p);
    paragraph = [];
  };
  const flushList = () => {
    if (!list) return;
    container.append(list.node);
    list = null;
  };
  const flushQuote = () => {
    if (!quote.length) return;
    const block = document.createElement("blockquote");
    const p = document.createElement("p");
    appendInline(p, quote.join(" "));
    block.append(p);
    container.append(block);
    quote = [];
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushParagraph();
      flushList();
      flushQuote();
      continue;
    }
    if (line.startsWith(">")) {
      flushParagraph(); flushList();
      quote.push(line.replace(/^>\s?/, ""));
      continue;
    }
    flushQuote();
    const bullet = line.match(/^[-*]\s+(.+)$/);
    const numbered = line.match(/^\d+\.\s+(.+)$/);
    if (bullet || numbered) {
      flushParagraph();
      const kind = bullet ? "ul" : "ol";
      if (!list || list.kind !== kind) {
        flushList();
        const node = document.createElement(kind);
        list = { kind, node };
      }
      const li = document.createElement("li");
      appendInline(li, (bullet || numbered)[1]);
      list.node.append(li);
      continue;
    }
    flushList();
    if (/^#{1,6}\s+/.test(line)) {
      flushParagraph();
      const h = document.createElement("h4");
      h.textContent = line.replace(/^#{1,6}\s+/, "");
      container.append(h);
    } else {
      paragraph.push(line);
    }
  }
  flushParagraph();
  flushList();
  flushQuote();
}

function countAllTips() {
  return state.chapters.reduce((sum, chapter) => sum + chapter.tips.length, 0);
}

function buildGroupFilters() {
  groupFilters.replaceChildren();
  GROUPS.forEach(group => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter-chip" + (group.name === state.group ? " is-active" : "");
    button.setAttribute("aria-pressed", String(group.name === state.group));
    button.innerHTML = `<span aria-hidden="true">${group.icon}</span><span>${group.name}</span>`;
    button.addEventListener("click", () => {
      state.group = group.name;
      state.limit = 24;
      buildGroupFilters();
      renderResults();
    });
    groupFilters.append(button);
  });
}

function buildChapterSelectors() {
  const allOption = document.createElement("option");
  allOption.value = "";
  allOption.textContent = "Tất cả 34 chương";
  chapterSelect.append(allOption);

  state.chapters.forEach(chapter => {
    const option = document.createElement("option");
    option.value = String(chapter.num);
    option.textContent = `Chương ${String(chapter.num).padStart(2, "0")} · ${chapter.title}`;
    chapterSelect.append(option);
  });
}

function buildTopicGrid() {
  topicGrid.replaceChildren();
  state.chapters.forEach(chapter => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "topic-tile";
    button.setAttribute("aria-label", `Chương ${chapter.num}: ${chapter.title}, ${chapter.tips.length} lời khuyên`);
    button.innerHTML = `
      <span class="topic-number">${String(chapter.num).padStart(2, "0")}</span>
      <span class="topic-copy">
        <strong>${chapter.title}</strong>
        <small>${chapter.tips.length} lời khuyên</small>
      </span>
      <span class="topic-arrow" aria-hidden="true">↗</span>`;
    button.addEventListener("click", () => {
      state.chapter = String(chapter.num);
      chapterSelect.value = state.chapter;
      state.group = "Tất cả";
      state.limit = 24;
      searchInput.value = "";
      searchFallback.value = "";
      state.query = "";
      buildGroupFilters();
      renderResults();
      $("#library").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    topicGrid.append(button);
  });
  $("#topicCount").textContent = `${state.chapters.length} chủ đề`;
}

function getFiltered() {
  const query = normalise(state.query);
  const selectedIds = GROUPS.find(g => g.name === state.group)?.ids || CHAPTERS.map(c => c.num);
  let tips = [];

  state.chapters.forEach(chapter => {
    if (state.chapter && String(chapter.num) !== state.chapter) return;
    if (state.group !== "Tất cả" && !selectedIds.includes(chapter.num)) return;
    const chapterText = normalise([
      chapter.title,
      chapter.intro,
      ...chapter.notes.map(n => n.title + " " + n.body)
    ].join(" "));
    chapter.tips.forEach(tip => {
      if (state.review !== "all" && tip.review !== state.review) return;
      const haystack = normalise(`${chapter.title} ${tip.title} ${tip.body}`);
      const tipMatches = !query || haystack.includes(query);
      const notesMatch = query && !tipMatches && chapterText.includes(query);
      if (tipMatches || notesMatch) {
        tips.push({ ...tip, chapter, noteMatch: Boolean(notesMatch) });
      }
    });
  });

  if (state.sort === "alpha") {
    tips.sort((a, b) => a.title.localeCompare(b.title, "vi"));
  } else {
    tips.sort((a, b) => a.chapter.num - b.chapter.num || Number(a.num) - Number(b.num));
  }
  return tips;
}

function makeNoteDetails(chapter, query = "") {
  if (!chapter.notes.length) return null;
  const details = document.createElement("details");
  details.className = "chapter-notes";
  if (query && chapter.notes.some(n => normalise(n.title + " " + n.body).includes(normalise(query)))) {
    details.open = true;
  }
  const summary = document.createElement("summary");
  const title = document.createElement("span");
  title.textContent = "Ghi chú cập nhật & nguồn tham khảo";
  const meta = document.createElement("small");
  meta.textContent = `${chapter.notes.length} mục`;
  summary.append(title, meta);
  details.append(summary);

  const content = document.createElement("div");
  content.className = "notes-content";
  chapter.notes.forEach(note => {
    const section = document.createElement("section");
    section.className = "note-section";
    const h = document.createElement("h4");
    h.textContent = note.title;
    const body = document.createElement("div");
    body.className = "markdown-content";
    renderMarkdown(body, note.body);
    section.append(h, body);
    content.append(section);
  });
  details.append(content);
  return details;
}

function makeTipCard(entry, index) {
  const card = document.createElement("article");
  card.className = "tip-card";
  const top = document.createElement("div");
  top.className = "tip-card-top";

  const number = document.createElement("span");
  number.className = "tip-number";
  number.textContent = `${String(entry.chapter.num).padStart(2, "0")}.${String(entry.num).padStart(2, "0")}`;

  const badge = document.createElement("span");
  badge.className = "tip-category";
  badge.textContent = entry.chapter.group;

  const review = document.createElement("span");
  review.className = `tip-review review-${entry.review.toLowerCase()}`;
  review.textContent = entry.review === "P1" ? "Cần thẩm định" : entry.review === "P2" ? "Cần cập nhật" : "Nguyên tắc";
  top.append(number, badge, review);

  const h = document.createElement("h3");
  h.textContent = entry.title;

  const body = document.createElement("div");
  body.className = "tip-preview markdown-content";
  const firstParagraph = entry.body.split(/\n\s*\n/)[0] || entry.body;
  const preview = firstParagraph.length > 300 ? firstParagraph.slice(0, 300).replace(/\s+\S*$/, "") + "…" : firstParagraph;
  renderMarkdown(body, preview);

  const details = document.createElement("details");
  details.className = "tip-details";
  const summary = document.createElement("summary");
  summary.textContent = "Đọc đầy đủ lời khuyên";
  const full = document.createElement("div");
  full.className = "markdown-content tip-full";
  renderMarkdown(full, entry.body);

  const sources = document.createElement("p");
  sources.className = "tip-source-hint";
  const link = document.createElement("a");
  link.href = `#chapter-${entry.chapter.num}`;
  link.textContent = "Xem ghi chú và nguồn của chương";
  sources.append(link);

  details.append(summary, full, sources);
  card.append(top, h, body, details);
  return card;
}

function renderResults() {
  const filtered = getFiltered();
  const total = countAllTips();
  const visible = filtered.slice(0, state.limit);

  resultGrid.replaceChildren();
  noResults.hidden = filtered.length !== 0;
  loadMore.hidden = visible.length >= filtered.length;

  resultCount.textContent = state.query
    ? `${filtered.length} kết quả phù hợp`
    : `${filtered.length} / ${total} lời khuyên`;
  $("#resultSummary").textContent = state.query
    ? `Đang tìm trong ${total} lời khuyên Việt Nam và ghi chú cập nhật của 34 chương.`
    : state.group === "Tất cả" && !state.chapter
      ? `Thư viện có ${total} lời khuyên được đối chiếu từ 767 mục gốc trong ${state.chapters.length} chương.`
      : `Đang lọc theo ${state.chapter ? "chương đã chọn" : state.group}.`;

  if (!filtered.length) return;

  const grouped = new Map();
  visible.forEach(entry => {
    const key = entry.chapter.num;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key).push(entry);
  });

  for (const [chapterNum, entries] of grouped) {
    const chapter = entries[0].chapter;
    const section = document.createElement("section");
    section.className = "chapter-result";
    section.id = `chapter-${chapter.num}`;

    const header = document.createElement("div");
    header.className = "chapter-result-head";
    const titleGroup = document.createElement("div");
    const eyebrow = document.createElement("div");
    eyebrow.className = "section-eyebrow";
    eyebrow.textContent = `CHƯƠNG ${String(chapter.num).padStart(2, "0")} · ${chapter.group.toUpperCase()}`;
    const title = document.createElement("h3");
    title.textContent = chapter.title;
    titleGroup.append(eyebrow, title);

    const count = document.createElement("span");
    count.className = "chapter-result-count";
    count.textContent = `${entries.length} / ${chapter.tips.length}`;
    header.append(titleGroup, count);
    section.append(header);

    if (chapter.intro) {
      const intro = document.createElement("p");
      intro.className = "chapter-intro";
      intro.textContent = stripInline(chapter.intro);
      section.append(intro);
    }

    const cards = document.createElement("div");
    cards.className = `tip-grid ${state.view === "list" ? "is-list" : ""}`;
    entries.forEach((entry, i) => cards.append(makeTipCard(entry, i)));
    section.append(cards);

    const noteDetails = makeNoteDetails(chapter, state.query);
    if (noteDetails) {
      noteDetails.id = `notes-${chapter.num}`;
      section.append(noteDetails);
    }
    resultGrid.append(section);
  }
}

function setView(view) {
  state.view = view;
  $$(".view-button").forEach(button => {
    const active = button.dataset.view === view;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderResults();
}

async function init() {
  try {
    const chapters = await Promise.all(CHAPTERS.map(async meta => {
      const response = await fetch(`book/${encodeURIComponent(meta.file)}`);
      if (!response.ok) throw new Error(`${meta.file}: ${response.status}`);
      const markdown = await response.text();
      return parseChapter(meta, markdown);
    }));
    state.chapters = chapters.sort((a, b) => a.num - b.num);

    const total = countAllTips();
    const noteCount = state.chapters.reduce((n, c) => n + c.notes.length, 0);
    $("#heroTipCount").textContent = total;
    $("#heroChapterCount").textContent = state.chapters.length;
    $("#heroNoteCount").textContent = noteCount;
    $("#loadingState").hidden = true;

    buildChapterSelectors();
    buildGroupFilters();
    buildTopicGrid();
    renderResults();
  } catch (error) {
    $("#loadingState").hidden = false;
    $("#loadingState").className = "load-error";
    $("#loadingState").textContent = `Không tải được nội dung. Hãy mở website qua máy chủ HTTP (ví dụ: python3 -m http.server 8000). Chi tiết: ${error.message}`;
    resultGrid.replaceChildren();
  }
}

function syncSearch(value, activeInput) {
  state.query = value.trim();
  searchInput.value = value;
  searchFallback.value = value;
  state.limit = 24;
  renderResults();
}
searchInput.addEventListener("input", () => syncSearch(searchInput.value, searchInput));
searchFallback.addEventListener("input", () => syncSearch(searchFallback.value, searchFallback));
$("#heroSearchForm").addEventListener("submit", event => {
  event.preventDefault();
  state.query = searchInput.value.trim();
  searchFallback.value = searchInput.value;
  state.limit = 24;
  renderResults();
  $("#library").scrollIntoView({ behavior: "smooth", block: "start" });
});

chapterSelect.addEventListener("change", () => {
  state.chapter = chapterSelect.value;
  state.limit = 24;
  renderResults();
});
$("#sortSelect").addEventListener("change", event => {
  state.sort = event.target.value;
  state.limit = 24;
  renderResults();
});
const reviewSelect = $("#reviewSelect");
if (reviewSelect) reviewSelect.addEventListener("change", event => {
  state.review = event.target.value;
  state.limit = 24;
  renderResults();
});
$$(".view-button").forEach(button => {
  button.addEventListener("click", () => setView(button.dataset.view));
});
loadMore.addEventListener("click", () => {
  state.limit += 24;
  renderResults();
});
$("#resetFilters").addEventListener("click", () => {
  state.query = "";
  state.chapter = "";
  state.group = "Tất cả";
  state.sort = "chapter";
  state.review = "all";
  state.limit = 24;
  searchInput.value = "";
  chapterSelect.value = "";
  $("#sortSelect").value = "chapter";
  if (reviewSelect) reviewSelect.value = "all";
  buildGroupFilters();
  renderResults();
});
$$(".mobile-menu-panel a").forEach(link => {
  link.addEventListener("click", () => {
    const menu = $(".mobile-menu");
    if (menu) menu.open = false;
  });
});
document.addEventListener("keydown", event => {
  if (event.key === "/" && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && [searchInput, searchFallback].includes(document.activeElement)) {
    searchInput.value = "";
    searchFallback.value = "";
    state.query = "";
    state.limit = 24;
    renderResults();
  }
});

init();
