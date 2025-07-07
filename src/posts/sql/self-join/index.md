---
title: "【 SQL 入門】要跟自己比較 - Self Join 介紹"
description: "了解 Self Join 是什麼以及應用場境，並提供實戰範例。"
tags: ["SQL"]
pubDate: 2025-07-07
---

## toc

## 什麼是 Self Join?

一句話解釋：**Join a table to itself**，也就是自己 Join 自己。

概念很簡單，但什麼情況下會需要自己 Join 自己呢？

## 適用場景

Self Join 通常有個特點： table 的某筆資料會參考同個 table 的其他資料。

常見的如階層比較：

- 組織圖
- 家譜

## 實戰範例一：員工與主管

#### Table

`employee`

| id  | name   | manager_id |
| --- | ------ | ---------- |
| 1   | 李小美 | NULL       |
| 2   | 林柏宇 | 1          |
| 3   | 王凱蒂 | 1          |
| 4   | 吳大偉 | 2          |
| 5   | 黃怡婷 | 2          |
| 6   | 劉志強 | 3          |

#### Question

請寫出一段 SQL 查詢，列出每位員工的姓名以及他們對應的主管姓名。如果該員工沒有主管，則主管欄位顯示為 NULL。

#### Answer

```sql
SELECT
    e.name AS employee,
    m.name AS manager
FROM employee e
LEFT JOIN employee m ON e.manager_id = m.id;
```

#### Output

| employee | manager |
| -------- | ------- |
| 李小美   | NULL    |
| 林柏宇   | 李小美  |
| 王凱蒂   | 李小美  |
| 吳大偉   | 林柏宇  |
| 黃怡婷   | 林柏宇  |
| 劉志強   | 王凱蒂  |

## 實戰範例二：氣溫比較

這個範例來源自 LeetCode SQL 題目 [197. Rising Temperature](https://leetcode.com/problems/rising-temperature/)

#### Table

`weather`

| id  | recordDate | temperature |
| --- | ---------- | ----------- |
| 1   | 2015-01-01 | 10          |
| 2   | 2015-01-02 | 25          |
| 3   | 2015-01-03 | 20          |
| 4   | 2015-01-04 | 30          |

#### Question

請找出「氣溫高於前一天」的那些日期的 id。

#### Answer

```sql
SELECT today.id
FROM weather today
JOIN weather yesterday
  ON today.recordDate = yesterday.recordDate + INTERVAL '1 day'
WHERE today.temperature > yesterday.temperature;
```

#### Output

| id  |
| --- |
| 2   |
| 4   |

## Summary

Self Join 的概念很簡單，但應用卻需要熟悉一下，只需要記得這個要點：
**當 table 的某筆資料會參考同個 table 的其他資料**，可以考慮看看 Self Join 這個方向。
