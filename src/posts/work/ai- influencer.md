---
title: 【AI教程】如何打造一个顶级"Jennie风"虚拟博主？
category: work
date: 2025-11-23
tags: [AI, ChatGPT, RED, 小红书, Midjourney,Gemini]
excerpt: 【AI教程】如何打造一个顶级"Jennie风"虚拟博主？从捏脸到老钱风OOTD全流程复盘
---

今天这篇内容，源于一次对"极致真实感"的死磕。

很多人用 AI 生成美女，要么太假（像油腻的游戏CG），要么太丑（过度追求写实导致面部干瘪）。今天我将分享一套完整的 Workflow，教你如何用 **Gemini、Midjourney 和 ChatGPT** 打造一个拥有"Jennie同款"猫系幼态脸、走老钱风路线、且照片像 iPhone 直出一样真实的虚拟博主。

---

## 第一阶段：捏出一张完美的 Base Headshot（基础脸模）

做虚拟博主的第一步，是拥有一张五官固定、方便后续换脸的"素颜证件照"。

### 1. 避坑指南

❌ **不要用名人的名字**：直接写 "Jennie Kim" 容易触发版权拦截或生成四不像。

❌ **不要用太高端的摄影词**：写 "Studio lighting", "Sony A7R" 会让 AI 拼命算光影，结果算出"塑料感"。

❌ **不要写"高颧骨"**：AI 容易把 high cheekbones 理解为欧美超模的凹陷脸，显老。

### 2. 核心咒语逻辑 (The Formula)

我们要的是 **"iPhone 原相机直出" + "顶级皮相"**。

**脸型锁死：**
- Short mid-face（短中庭，显嫩关键）
- Mochi cheeks（麻薯脸/软糯感）
- Baby fat（婴儿肥）

**五官精修：**
- Large feline eyes（大猫眼）
- Clear double eyelids（清晰双眼皮）
- Straight side profile（平整侧颜，拒绝凸嘴）

**真实感杀手锏：**
- Vellus hair / Peach fuzz（面部绒毛）
- iPhone 15 Pro raw photo（手机原片）
- Model agency digitals（模特面试照风格）

### 3. 成功 Prompt 参考

```
Subject: A model agency "Digitals" shot. A 20-year-old Asian girl with a full, round "Mochi" face, short mid-face, and plump lips. Large feline eyes with deep double eyelids. Skin has visible pores and peach fuzz. Shot on iPhone, natural window light, plain white background.
```

---

## 第二阶段：Midjourney V6 换装实战（老钱风 OOTD）

有了满意的脸后，如何给她换上"秋冬老钱风"的衣服，并且保持脸不变？

### 1. 风格定义：什么是"老钱风"？

不要只写 "Old Money"，要写材质！

**材质：**
- Cashmere（羊绒）
- Wool（羊毛）
- Tweed（粗花呢）

**色系：**
- Cream
- Beige
- Camel
- Charcoal

### 2. 锁脸神器：--cref

在 Discord 中使用 MJ 生成时，必须使用 Character Reference 功能：

**指令：**
```
/imagine prompt: [描述衣服和场景] --cref [你的Base图链接] --cw 0
```

> **关键点：** 一定要加 `--cw 0`！这意味着"只参考脸，衣服发型听 Prompt 的"。如果不加，它会连你的旧衣服一起参考进去。

---

## 第三阶段：ChatGPT (DALL-E 3) 的应对策略

如果你习惯用 ChatGPT，逻辑完全不同。因为 DALL-E 3 不能像 MJ 那样精准锁脸，我们需要用"图生图 + 强文字描述"。

**操作：** 上传 Base 图 -> 告诉 GPT "请以此图为面部参考"。

> **话术：** 必须在 Prompt 里反复强调五官特征（圆脸、短下巴、猫眼），否则 GPT 会"自由发挥"导致脸崩。

---

## 第四阶段：终极秘籍——如何打破"AI 塑料感"？

这是今天最精华的部分。为什么你的图一看就是 AI？因为太干净、太完美了。**真实感来自于"瑕疵"**。

想要照片像朋友圈发的生图，请在 Prompt 里加入以下"破坏性"关键词：

### 1. 制造"废片感"

- **Flash enabled**（开启闪光灯）：模拟夜晚或室内的硬光，制造生硬的投影，去油腻神器。
- **Motion blur**（动态模糊）：手抖了、没拿稳，瞬间有了抓拍的生活气息。
- **Overexposed**（过曝）：窗户背景一片死白，这才是手机拍出来的真实动态范围。

### 2. 制造"环境脏乱"

- **Dirty mirror**（脏镜子）：加上 fingerprints（指纹）、dust（灰尘）、smudges（污渍）。镜子太亮反而假。
- **Messy background**（凌乱背景）：没铺平的床单、地上的咖啡杯、略微杂乱的衣帽间。

### 3. 制造"生理瑕疵"

- **Flyaway hair**（飞舞的碎发）：真人的头发永远不会是整整齐齐的一块，一定要有毛躁感。
- **Digital noise / Grain**（数码噪点）：模拟低光环境下的画质损耗。

---

## 总结

打造一个真实的 AI 博主，不是比谁的 Prompt 词藻更华丽，而是比谁更懂摄影和人性。

- **想要美**，就强调面部软组织（Short mid-face, Mochi cheeks）。
- **想要真**，就强调物理瑕疵（Dirty mirror, Flash, Noise）。
- **想要稳**，就用 MJ 的 `--cref` 锁住那张脸。

希望这篇复盘能帮你省去几十个小时的"抽卡"时间，直接生成你心目中的完美缪斯！✨

---

