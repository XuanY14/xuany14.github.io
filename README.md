# OPERATION FRONTLINE · 战术行动（写实第一人称射击）

一个跑在浏览器里的**写实风格第一人称战术射击游戏网站**，基于 [React](https://react.dev) + [Vite](https://vitejs.dev) + [Three.js](https://threejs.org)。
打开即玩，无需后端、无需登录。

线上地址：<https://xuany14.github.io>

> 对标方向：以「真实战场」为核心的战术射击（受《战地》系列启发）。浏览器单机环境用 **大规模 AI 双方混战** 来模拟大战场规模，并实现了真实弹道、可破坏掩体、动态天气、载具协同、据点争夺、兵种分工等核心机制。

## 🎮 玩法

- 选择兵种（突击 / 医疗 / 工程 / 侦察）进入战场，三个据点由红蓝双方争夺。
- 击杀敌人、占领据点、驾驶载具协同作战，把敌方「兵力值」打光即获胜；己方兵力归零则失败。
- 真实弹道：子弹有**下坠与散布**、开火有**后坐力**，远距离需抬枪口提前量。
- 动态天气：晴 / 雨 / 风暴，会影响能见度与作战节奏。
- 可破坏掩体：木箱、墙体被子弹/炮火命中会碎裂，战场会实时改变。

| 操作 | 说明 |
| --- | --- |
| `W A S D` | 移动 |
| 鼠标 | 转动视角（点击画面锁定鼠标） |
| 左键 | 开火 |
| 右键 | 瞄准（腰射 / 精确） |
| `R` | 换弹 |
| `Shift` | 疾跑 |
| 空格 | 跳跃 |
| `Ctrl` / `C` | 下蹲 |
| `E` | 进入 / 离开载具（靠近装甲车或坦克时） |
| `F` | 小队指令（集结点） |
| `Esc` | 暂停 / 释放鼠标 |
| `1-4` | 切换兵种预设武器（部分兵种） |

## 🧩 技术结构

```
src/
  config/game.js          # 全部可调参数：地图/兵种/武器/敌人/据点/天气/载具/AI
  game/FPSGame.js         # Three.js 引擎：世界/天空/雾/阴影/弹道/破坏/天气/载具/小队AI/据点
  components/HUD.jsx      # 血量/弹药/兵种/分数/兵力/占领进度/小地图/天气
  components/Overlays.jsx # 主菜单(选兵种+天气)/暂停/结束 界面
  App.jsx                 # 状态机：菜单 → 游戏 → 暂停 → 结束
  index.css               # 写实军事主题与 HUD 样式
```

核心机制：
- **实景渲染**：程序化地形 + `Sky` 大气散射太阳 + 指数雾 + 方向光阴影 + HemisphereLight，写实配色。
- **真实弹道**：Hitscan + 弹道下坠 + 散布 + 后坐力 + 曳光弹；不同枪械有不同弹速/伤害/射速/弹匣。
- **可破坏掩体**：木箱/墙体被子弹命中按命中数碎裂为碎块（程序化碎片），改变掩体布局。
- **动态天气**：雨粒子 + 风力 + 雾浓度，可切换晴/雨/风暴预设。
- **载具**：可驾驶装甲车（炮塔跟随视角、主炮溅射）；敌方/友方 AI 坦克自动交火。
- **小队与兵种**：四类兵种（突击/医疗/工程/侦察）不同武器与职责；AI 友军/敌军士兵会推进、交火、协同。
- **据点系统**：3 个据点按驻军比例被占领，控点持续消耗敌方兵力；兵力归零判负。
- **音效**：WebAudio 合成开火/命中/换弹/炮击音（失败静默，不影响游戏）。

> 素材策略：默认美术为**程序化 PBR + Three 自带天空着色器**，以保证离线可运行与稳定加载；同时引擎已接入 `GLTFLoader`，加载开源 CC0 真实模型与贴图（见下「开源素材」），替换默认几何体与材质。

## 📦 开源素材（已集成）

游戏在运行时从 `public/assets/` 加载以下**开源/免费授权**素材（已入库，运行时无第三方依赖）：

| 素材 | 文件 | 用途 | 来源 / 授权 |
| --- | --- | --- | --- |
| 士兵模型（带动画） | `models/CesiumMan.glb` | 敌我士兵人形与行走动画 | [Khronos glTF Sample Assets](https://github.com/KhronosGroup/glTF-Sample-Assets) · CC0 / Khronos Sample 授权 |
| 破损头盔 | `models/DamagedHelmet.glb` | 战场残骸/装备掩体 | Khronos glTF Sample Assets · CC0 |
| 废弃载具 | `models/ToyCar.glb` | 战场废弃载具掩体 | Khronos glTF Sample Assets · CC0 |
| 草地贴图 | `textures/ground_grass.jpg` | 地面 | three.js 示例贴图（`terrain/grasslight-big.jpg`）· MIT |
| 砖墙贴图 + 法线 | `textures/prop_brick.jpg` / `prop_brick_nrm.jpg` | 可破坏墙体 | three.js 示例贴图 · MIT |
| 木箱贴图 | `textures/prop_wood.jpg` | 可破坏木箱 | three.js 示例贴图（`hardwood2_diffuse.jpg`）· MIT |
| 水面法线 | `textures/normal_water.jpg` | 水面/潮湿效果 | three.js 示例贴图 · MIT |

加载逻辑见 `src/game/FPSGame.js` 的 `loadAssets()`；任一素材缺失会自动回退到程序化几何/贴图，不影响游戏运行。

**换成更高精度素材**：把你的 `.glb` 放到 `public/assets/models/`，在 `loadAssets()` 里改对应 `assetUrl('models/xxx.glb')` 即可；士兵模型需为带骨骼动画的人形（如 Mixamo / Ready Player Me 导出），其余逻辑（命中、阵营染色、动画）会自动适配。

## 🛠️ 本地开发

```bash
npm install
npm run dev        # 开发预览 http://localhost:5173
npm run build      # 生产构建到 dist/
npm run preview    # 预览构建产物 http://localhost:4173
```

## 🚀 部署

- **源码**在 `source` 分支。
- **线上成品（GitHub Pages 发布内容）**在 `master` 分支根目录。
- 发布方式：构建后把 `dist/` 内容推到 `master`。可运行仓库里的 `deploy.sh`：

  ```bash
  npm run build && ./deploy.sh
  ```

  `deploy.sh` 会把构建产物提交并推送到 `master`（用户页从默认分支直接发布）。

## ✏️ 想改游戏？

几乎所有平衡性参数都在 **`src/config/game.js`**：
地图尺寸、四类兵种武器与技能、敌人速度/血量/伤害、每波数量、3 个据点位置、天气预设、载具参数、AI 难度等。

想换美术风格就改 `src/game/FPSGame.js` 与 `src/index.css`；想接入真实 3D 素材参考文件顶部 `GLTFLoader` 接入点。

## ⚠️ 已知边界

- 这是**单机 + 大规模 AI 模拟**，并非真实 64 人联网对战（联网需要权威服务器与 netcode，超出浏览器单机能力）。
- 美术为「程序化 PBR + 开源 CC0 真实模型/贴图」组合，已尽量贴近写实；若需 AAA 级高模，可按上文替换 `public/assets/models/` 下模型并调高 `vite.config.js` 的 `chunkSizeWarningLimit`。
