---
title: "【Golang】Go 新手也能懂的指標教學"
description: "這篇文章從「我當初的困惑」出發，一步一步拆解 Go 指標的概念、用途與實際寫法。"
tags: ["Go"]
pubDate: 2025-07-01
draft: true
---

## toc

## 前言

如果你像我沒碰過 C/C++，從 JavaScript 轉過來學 Go ，對於指標這個新的概念應該會感到非常困惑跟害怕，最大的問題就是不知道什麼時候該用指標，本文將我曾經遇到問題記錄整理下來，希望對於 Go 新手能有所幫助。

## 什麼是指標？

指標是一個變數，這個變數儲存的不是值，而是**值的「記憶體位址」**

一般來說普通的變數會長這樣：
`var x := 10`

而指標會長這樣：

```go
var x := 10
var p *int;
p = &x // 指向 x 值的記憶體位址
```

---

## 如何使用？

### 表示指標類型

在型別前放 `*` ，表示這是某型別的指標類型：

```go
var p *int // int 型別的指標類型
```

### `&` 位址運算子

把 `&` 放在值前面，可以取得值的記憶體位址：

```go
x := 10
pointerX := &x
```

### `*` 間接運算子

把 `*` 放在指標類型前面，可以取得指標所指的值，稱為「解參考」（ dereferencing）：

```go
x := 10
pointerX := &x
value := *pointerX // 10
```

但是，如果該指標是 `nil`，則會引發 `panic`：

```go
var p *int
*p // panic: runtime error: invalid memory address or nil pointer dereference
```

## 為什麼需要指標？
