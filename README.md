# AiJYFXZD · 钢贸企业三维经营分析与诊断系统

面向钢贸企业营销总裁的「市场 / 客户 / 员工」三维经营分析与 AI 诊断系统（ERP 内嵌模块）。

## 目录

- `prototype/` — 高保真 HTML 原型（16 个页面），打开 `prototype/design.html` 或根目录 `index.html` 开始浏览
  - 经营总览：`dashboard` 驾驶舱 · `design` 设计方案 · `prd` 产品需求文档 · `algorithms` 指标与算法字典 · `rollout` 运营落地方案
  - 三维分析：`market` 市场 · `customer` 客户 · `customer-list` 客户查询工作台 · `assign` 跟进分配·我的客户 · `employee` 员工
  - 智能诊断：`ai-diagnosis` AI 诊断 · `churn` 购货频率·流失预警 · `billing` Token 计费中心
  - 系统与权限：`roles` 角色权限 · `datasource` 数据源&平台接入 · `jobs` 定时任务·自动化
- `AI_BUILD_PROMPT.md` — **AI 开发主提示词**（里程碑驱动）。在 Cursor 中打开后说「请开始编码」，即按 M0→M9 自动开发，确保页面 100% 还原、功能 100% 完整、逻辑 100% 正确。

## 三大唯一真源（开发依据）

1. 原型：`prototype/*.html` — UI 与交互标准
2. PRD：`prototype/prd.html` — 功能/数据模型/流程/权限/非功能
3. 算法字典：`prototype/algorithms.html` — 指标计算口径/公式/阈值

## 快速开始（浏览原型）

任选其一：

```bash
# 直接用浏览器打开
open prototype/dashboard.html

# 或起本地静态服务
cd prototype && python3 -m http.server 8080   # 访问 http://localhost:8080/dashboard.html
```
