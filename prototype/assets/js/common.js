/* 钢贸经营分析与诊断 · 原型公共布局脚本 */
(function () {
  const NAV = [
    { g: "经营总览" , items: [
      { id: "dashboard", t: "总裁驾驶舱", ic: "🧭", href: "dashboard.html" },
      { id: "design",    t: "系统设计方案", ic: "📐", href: "design.html" },
      { id: "prd",       t: "产品需求文档 PRD", ic: "📄", href: "prd.html" },
      { id: "algorithms",t: "指标与算法字典", ic: "🧮", href: "algorithms.html" },
      { id: "rollout",   t: "运营落地方案", ic: "🚀", href: "rollout.html" },
    ]},
    { g: "三维分析", items: [
      { id: "market",   t: "市场潜力分析", ic: "🗺️", href: "market.html" },
      { id: "customer", t: "客户价值分层", ic: "👥", href: "customer.html" },
      { id: "customer-list", t: "客户查询工作台", ic: "🔎", href: "customer-list.html" },
      { id: "assign", t: "跟进分配·我的客户", ic: "📌", href: "assign.html" },
      { id: "employee", t: "员工能力画像", ic: "🧑‍💼", href: "employee.html" },
    ]},
    { g: "智能诊断", items: [
      { id: "ai",     t: "AI 经营诊断", ic: "🤖", href: "ai-diagnosis.html" },
      { id: "churn",  t: "购货频率 · 流失预警", ic: "⚠️", href: "churn.html", tag: "37" },
      { id: "billing", t: "Token 计费中心", ic: "💰", href: "billing.html" },
    ]},
    { g: "系统与权限", items: [
      { id: "roles", t: "角色与权限设计", ic: "🔐", href: "roles.html" },
      { id: "datasource", t: "数据源 & 平台接入", ic: "🔌", href: "datasource.html" },
    ]},
  ];

  function buildSidebar(active) {
    let html = `
      <div class="brand">
        <div class="logo">钢</div>
        <div class="b-txt"><b>钢智经营</b><span>三维分析与AI诊断</span></div>
      </div>
      <nav class="nav">`;
    NAV.forEach(sec => {
      html += `<div class="group-t">${sec.g}</div>`;
      sec.items.forEach(it => {
        html += `<a href="${it.href}" class="${it.id === active ? "active" : ""}">
          <span class="ic">${it.ic}</span><span>${it.t}</span>
          ${it.tag ? `<span class="tag">${it.tag}</span>` : ""}
        </a>`;
      });
    });
    html += `</nav>
      <div class="foot">ERP 内嵌模块 · v1.0 原型<br/>数据 100% 复用销售明细</div>`;
    return html;
  }

  function buildTopbar(opts) {
    const periods = ["近3月", "近6月", "近12月", "本月"];
    const active = opts.period || "近12月";
    return `
      <div class="crumb">经营分析与诊断 / <b>${opts.crumb || opts.title}</b></div>
      <div class="spacer"></div>
      <div class="period">
        ${periods.map(p => `<button class="${p === active ? "on" : ""}">${p}</button>`).join("")}
      </div>
      <div class="tb-btn" title="导出经营报告">⬇</div>
      <div class="tb-btn" title="预警通知">🔔<span class="dot"></span></div>
      <div class="user">
        <div class="av">李</div>
        <div class="u-txt"><b>李总</b><span>营销总裁</span></div>
      </div>`;
  }

  window.Layout = {
    render(active, opts) {
      opts = opts || {};
      const app = document.createElement("div");
      app.className = "app";
      const sidebar = document.createElement("aside");
      sidebar.className = "sidebar";
      sidebar.innerHTML = buildSidebar(active);
      const main = document.createElement("div");
      main.className = "main";
      const top = document.createElement("header");
      top.className = "topbar";
      top.innerHTML = buildTopbar(opts);
      const content = document.createElement("main");
      content.className = "content";
      content.innerHTML = document.getElementById("view").innerHTML;
      main.appendChild(top);
      main.appendChild(content);
      app.appendChild(sidebar);
      app.appendChild(main);
      document.body.innerHTML = "";
      document.body.appendChild(app);

      // period toggle (visual only)
      top.querySelectorAll(".period button").forEach(b => {
        b.addEventListener("click", () => {
          top.querySelectorAll(".period button").forEach(x => x.classList.remove("on"));
          b.classList.add("on");
        });
      });
      // fire chart init after DOM ready
      if (typeof window.initCharts === "function") {
        setTimeout(window.initCharts, 30);
      }
      bindTabs();
    }
  };

  function bindTabs() {
    document.querySelectorAll("[data-tabs]").forEach(group => {
      const btns = group.querySelectorAll(".tabs button");
      btns.forEach(btn => btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-tab");
        btns.forEach(b => b.classList.remove("on"));
        btn.classList.add("on");
        const scope = group;
        scope.querySelectorAll(".tabpane").forEach(p => p.classList.remove("on"));
        const pane = scope.querySelector('.tabpane[data-pane="' + target + '"]');
        if (pane) {
          pane.classList.add("on");
          // 关键修复：隐藏标签页里的图表初始化时尺寸为 0，切换显示后需重新计算尺寸
          setTimeout(() => {
            if (window.echarts) {
              pane.querySelectorAll(".chart").forEach(el => {
                const inst = window.echarts.getInstanceByDom(el);
                if (inst) { inst.resize(); }
              });
            }
          }, 30);
        }
        window.dispatchEvent(new Event("resize"));
      }));
    });
  }

  // shared ECharts theme helpers
  window.CHART = {
    grid: { left: 46, right: 20, top: 30, bottom: 34 },
    palette: ["#2563eb", "#0ea5e9", "#0d9488", "#7c3aed", "#f97316", "#16a34a", "#d99e00", "#dc2626"],
    axisText: "#8592ac",
    splitLine: "#eef1f7",
    tip() {
      return { trigger: "axis", backgroundColor: "rgba(13,27,51,.92)", borderWidth: 0,
        textStyle: { color: "#e8eefb", fontSize: 12 }, axisPointer: { type: "shadow" } };
    },
    tipItem() {
      return { trigger: "item", backgroundColor: "rgba(13,27,51,.92)", borderWidth: 0,
        textStyle: { color: "#e8eefb", fontSize: 12 } };
    },
    cat(axis) {
      return Object.assign({ type: "category", axisLine: { lineStyle: { color: "#dbe1ee" } },
        axisTick: { show: false }, axisLabel: { color: this.axisText, fontSize: 11 } }, axis || {});
    },
    val(axis) {
      return Object.assign({ type: "value", axisLine: { show: false }, axisTick: { show: false },
        axisLabel: { color: this.axisText, fontSize: 11 },
        splitLine: { lineStyle: { color: this.splitLine } } }, axis || {});
    }
  };
})();
