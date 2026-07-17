/* 模拟数据 —— 全部字段对应现有销售明细，用于原型演示 */
window.DATA = {
  // 区域市场
  regions: [
    { name: "江苏无锡", prov: "江苏", sales: 4.82, netProfit: 386, perTon: 148, growth: 0.28, netRate: 0.121, overdue: 0.06, endRatio: 0.78, level: "明星市场" },
    { name: "上海", prov: "上海", sales: 4.15, netProfit: 342, perTon: 132, growth: 0.11, netRate: 0.104, overdue: 0.08, endRatio: 0.71, level: "明星市场" },
    { name: "浙江宁波", prov: "浙江", sales: 3.6, netProfit: 268, perTon: 121, growth: 0.19, netRate: 0.098, overdue: 0.09, endRatio: 0.63, level: "成熟存量" },
    { name: "山东济南", prov: "山东", sales: 2.1, netProfit: 205, perTon: 158, growth: 0.31, netRate: 0.128, overdue: 0.05, endRatio: 0.55, level: "潜力蓝海" },
    { name: "安徽合肥", prov: "安徽", sales: 1.6, netProfit: 158, perTon: 142, growth: 0.36, netRate: 0.132, overdue: 0.04, endRatio: 0.49, level: "潜力蓝海" },
    { name: "广东佛山", prov: "广东", sales: 3.2, netProfit: 176, perTon: 96, growth: 0.05, netRate: 0.072, overdue: 0.12, endRatio: 0.42, level: "成熟存量" },
    { name: "河北廊坊", prov: "河北", sales: 2.4, netProfit: -32, perTon: -18, growth: -0.42, netRate: -0.02, overdue: 0.28, endRatio: 0.09, level: "衰退弱势" },
    { name: "天津", prov: "天津", sales: 1.9, netProfit: 42, perTon: 34, growth: -0.22, netRate: 0.031, overdue: 0.19, endRatio: 0.21, level: "衰退弱势" },
    { name: "四川成都", prov: "四川", sales: 1.3, netProfit: 121, perTon: 138, growth: 0.24, netRate: 0.118, overdue: 0.06, endRatio: 0.52, level: "潜力蓝海" },
    { name: "湖北武汉", prov: "湖北", sales: 2.0, netProfit: 148, perTon: 108, growth: 0.08, netRate: 0.089, overdue: 0.11, endRatio: 0.47, level: "成熟存量" },
  ],
  // 品类
  categories: [
    { name: "热轧板卷", ton: 3.8, perTon: 92, net: 349, cat: "普碳" },
    { name: "冷轧板", ton: 2.1, perTon: 156, net: 328, cat: "普碳" },
    { name: "H型钢", ton: 2.9, perTon: 138, net: 400, cat: "型材" },
    { name: "角钢/槽钢", ton: 1.7, perTon: 118, net: 201, cat: "型材" },
    { name: "不锈钢卷板", ton: 0.9, perTon: 385, net: 347, cat: "不锈钢" },
    { name: "合金圆钢", ton: 0.7, perTon: 268, net: 188, cat: "合金" },
    { name: "螺纹钢", ton: 5.2, perTon: 58, net: 302, cat: "普碳" },
    { name: "镀锌管", ton: 1.1, perTon: 132, net: 145, cat: "型材" },
  ],
  // 客户
  customers: [
    { name: "无锡精机制造", cat: "制造终端", grade: "A", region: "江苏无锡", sale: "张三", ton: 3200, net: 402, perTon: 126, interval: 12, freq: "高频", account: 30, overdue: 0, type: "①量利双优", score: 9.4, trend: "up" },
    { name: "华东重工集团", cat: "制造终端", grade: "A", region: "上海", sale: "张三", ton: 2850, net: 358, perTon: 125, interval: 15, freq: "高频", account: 25, overdue: 0, type: "①量利双优", score: 9.1, trend: "up" },
    { name: "苏州轨道建设", cat: "基建工程", grade: "A", region: "江苏无锡", sale: "赵敏", ton: 4100, net: 289, perTon: 70, interval: 22, freq: "高频", account: 45, overdue: 1, type: "③高走量流水", score: 7.8, trend: "flat" },
    { name: "宁波特钢加工", cat: "制造终端", grade: "B", region: "浙江宁波", sale: "王五", ton: 980, net: 132, perTon: 135, interval: 26, freq: "中频", account: 30, overdue: 0, type: "②高盈利获利", score: 7.2, trend: "up" },
    { name: "合肥新材科技", cat: "制造终端", grade: "B", region: "安徽合肥", sale: "王五", ton: 760, net: 118, perTon: 155, interval: 33, freq: "中频", account: 20, overdue: 0, type: "②高盈利获利", score: 6.9, trend: "up" },
    { name: "廊坊金属贸易", cat: "二级钢贸", grade: "C", region: "河北廊坊", sale: "李四", ton: 1200, net: 26, perTon: 22, interval: 68, freq: "低频", account: 72, overdue: 3, type: "③高走量流水", score: 3.6, trend: "down" },
    { name: "天津建工物资", cat: "基建工程", grade: "C", region: "天津", sale: "李四", ton: 640, net: 18, perTon: 28, interval: 85, freq: "低频", account: 66, overdue: 2, type: "④量利双弱", score: 3.1, trend: "down" },
    { name: "佛山五金城", cat: "零售加工", grade: "D", region: "广东佛山", sale: "王五", ton: 180, net: -6, perTon: -33, interval: 145, freq: "沉睡", account: 60, overdue: 4, type: "④量利双弱", score: 2.2, trend: "down" },
    { name: "武汉钢联商贸", cat: "二级钢贸", grade: "B", region: "湖北武汉", sale: "赵敏", ton: 1350, net: 96, perTon: 71, interval: 40, freq: "中频", account: 38, overdue: 0, type: "③高走量流水", score: 6.1, trend: "flat" },
    { name: "成都装备制造", cat: "制造终端", grade: "B", region: "四川成都", sale: "陈刚", ton: 820, net: 108, perTon: 132, interval: 29, freq: "高频", account: 22, overdue: 0, type: "②高盈利获利", score: 7.0, trend: "up" },
  ],
  // 员工
  employees: [
    { name: "张三", dept: "华东一部", net: 486, ton: 6.1, perTon: 128, custA: 12, custB: 8, revive: 6, churn: 0.04, newCust: 4, radar: [9, 9, 8, 7, 9, 9], type: "标杆全能型", conc: 0.42 },
    { name: "赵敏", dept: "华东一部", net: 352, ton: 7.4, perTon: 96, custA: 6, custB: 9, revive: 4, churn: 0.09, newCust: 6, radar: [7, 6, 8, 8, 7, 8], type: "潜力攻坚型", conc: 0.51 },
    { name: "王五", dept: "华东二部", net: 268, ton: 3.2, perTon: 138, custA: 4, custB: 11, revive: 5, churn: 0.11, newCust: 7, radar: [6, 8, 8, 9, 8, 7], type: "潜力攻坚型", conc: 0.33 },
    { name: "李四", dept: "华北部", net: 96, ton: 4.1, perTon: 52, custA: 1, custB: 3, revive: 1, churn: 0.34, newCust: 0, radar: [3, 3, 2, 2, 3, 4], type: "低效弱势型", conc: 0.78 },
    { name: "陈刚", dept: "西南部", net: 178, ton: 2.4, perTon: 118, custA: 3, custB: 6, revive: 3, churn: 0.14, newCust: 3, radar: [6, 7, 6, 6, 7, 6], type: "存量守成型", conc: 0.62 },
    { name: "周琳", dept: "华东二部", net: 214, ton: 2.9, perTon: 121, custA: 5, custB: 5, revive: 2, churn: 0.08, newCust: 2, radar: [7, 7, 5, 6, 8, 7], type: "存量守成型", conc: 0.68 },
  ],
  // 客户流失预警 —— 原始因子（分数由可配置模型实时计算）
  // drop: 近3月采购同比(负=下滑)  rate: 近期间隔/历史间隔(节奏)  fund: 资金恶化  loss: 连续亏损
  churn: [
    { name: "佛山五金城",   type: "量利双弱", sale: "王五", lastDays: 145, drop: -0.81, rate: 2.4, fund: true,  ext: 45, loss: true },
    { name: "常州建材集散", type: "量利双弱", sale: "李四", lastDays: 210, drop: -0.70, rate: 2.6, fund: true,  ext: 60, loss: true },
    { name: "廊坊金属贸易", type: "高走量",   sale: "李四", lastDays: 74,  drop: -0.62, rate: 1.9, fund: true,  ext: 38, loss: false },
    { name: "天津建工物资", type: "量利双弱", sale: "李四", lastDays: 88,  drop: -0.55, rate: 1.6, fund: true,  ext: 25, loss: false },
    { name: "南京中转贸易", type: "高走量",   sale: "王五", lastDays: 65,  drop: -0.42, rate: 1.5, fund: false, ext: 20, loss: false },
    { name: "苏州轨道建设", type: "高走量",   sale: "赵敏", lastDays: 55,  drop: -0.35, rate: 1.4, fund: false, ext: 12, loss: false },
    { name: "武汉钢联商贸", type: "高走量",   sale: "赵敏", lastDays: 46,  drop: -0.28, rate: 1.2, fund: false, ext: 8,  loss: false },
    { name: "宁波特钢加工", type: "高盈利",   sale: "王五", lastDays: 32,  drop: -0.12, rate: 1.1, fund: false, ext: 5,  loss: false },
    { name: "成都装备制造", type: "高盈利",   sale: "陈刚", lastDays: 20,  drop: -0.05, rate: 1.05,fund: false, ext: 0,  loss: false },
    { name: "无锡精机制造", type: "量利双优", sale: "张三", lastDays: 12,  drop: 0.08,  rate: 0.9, fund: false, ext: 0,  loss: false },
  ],
  // 流失评分模型默认配置（可在页面配置面板修改）
  churnConfig: {
    weights: { s1: 40, s2: 30, s3: 20, s4: 10 },
    s1: [ { max: 30, score: 0 }, { max: 90, score: 30 }, { max: 180, score: 70 }, { max: 99999, score: 100 } ],       // 断单时长(天)
    s2: [ { max: 0,  score: 0 }, { max: 0.3, score: 40 }, { max: 0.6, score: 70 }, { max: 99,   score: 100 } ],        // 采购下滑率
    s3: [ { max: 1,  score: 0 }, { max: 1.3, score: 30 }, { max: 1.8, score: 60 }, { max: 99,   score: 100 } ],        // 节奏恶化倍数
    s4: { extendDays: 30 },      // 账期拉长阈值(天)，或存在逾期/现款转赊销 → 100
    levels: [ { max: 25, name: "低",  color: "green" }, { max: 50, name: "潜在", color: "yellow" },
              { max: 75, name: "高",  color: "orange" }, { max: 100, name: "极高", color: "red" } ],
  },
  // 品类 12 个月需求趋势(千吨)
  categoryTrend: {
    "热轧板卷": [352,338,366,402,388,360,412,398,372,430,418,405],
    "H型钢":    [268,242,290,336,362,318,398,412,356,388,372,344],
    "不锈钢卷板":[82,78,90,96,102,94,110,98,92,108,104,96],
    "合金圆钢":  [64,60,72,78,84,76,92,86,78,88,82,74],
  },
  // 下游行业月度销量(千吨)
  industryTrend: {
    "制造终端": [120,112,128,140,152,138,166,158,142,170,164,150],
    "基建工程": [95,82,108,132,148,120,110,96,132,158,140,118],
    "二级贸易": [70,88,76,92,64,102,80,58,96,72,84,90],
  },
  // 同规格不同产地毛利对比
  origins: [
    { name: "沙钢",   list: 128, real: 112, vol: 4.2 },
    { name: "南钢",   list: 142, real: 138, vol: 3.1 },
    { name: "日照",   list: 96,  real: 72,  vol: 5.6 },
    { name: "永锋",   list: 156, real: 148, vol: 2.4 },
    { name: "中天",   list: 112, real: 98,  vol: 3.8 },
  ],
  // 下游行业综合评分(满分10)：销量规模/单吨毛利/购货频次/账期健康/逾期风险(低)
  industryRadar: {
    "制造终端": [7, 9, 8, 9, 9],
    "基建工程": [9, 6, 6, 5, 6],
    "二级贸易": [8, 3, 7, 3, 4],
  },
  months: ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
};
