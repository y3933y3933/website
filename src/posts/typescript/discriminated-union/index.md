---
title: "別再 if else：用 Discriminated Union 精準控制型別邏輯"
description: "本篇文章介紹 TypeScript 中的 Discriminated Union，並透過實例說明如何用它優雅地取代 if-else 判斷，讓型別幫你寫邏輯、降低錯誤風險、提升維護性。"
tags: ["TypeScript"]
pubDate: 2025-06-10
relatedPosts:
  - typescript/tips
---

## 情境

小明入職後負責了一個新專案，這天他要來寫後端回傳的 API 規格，有成功或失敗兩種，成功的話會回傳

```json
{
  "status": "success",
  "data": "test"
}
```

失敗的話則會:

```json
{
  "status": "error",
  "error": "Something went wrong"
}
```

小明一拍腦袋，想說那就這樣定義 `APIResponse` 好了

```ts
type APIResponse = {
  status: "success" | "error";
  data?: any;
  error?: any;
};
```

試問，上述寫法會造成什麼影響？

---

沒錯，經過一兩週之後，小明要開始串接 API，卻發現每次處理 API Response 都需要寫 `if-else`

```ts
function handleResponse(res: APIResponse) {
  if (res.status === "success") {
    // 處理成功邏輯
  } else if (res.status === "error") {
    // 處理錯誤邏輯
  } else {
    throw new Error("Unknown response");
  }
}
```

你也有遇到類似的困擾嗎？當型別有兩種狀況，為求簡單將不同欄位寫成 `optional` 狀況，反而導致後續處理變複雜，這時候可以考慮使用 `Discriminated Union`。

## 什麼是 Discriminated Union？

根據 <a href="https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#discriminating-unions" target="_blank">TypeScript 官網</a> 說法：

> A common technique for working with unions is to have a single field which uses literal types which you can use to let TypeScript narrow down the possible current type.

簡單講就是一種特定的 Union Type，其成員包含一個可以識別的共同欄位。

可以來改寫上面的 `APIResponse`，他們都有一個共同欄位叫做 `status` ，但成功跟失敗回傳的 `status` 值不同。

```ts
type Success = { status: "success"; data: any };
type Error = { status: "error"; error: any };
type APIResponse = Success | Error;
```

在處理邏輯時可以改寫成：

```ts
function handleResponse(res: APIResponse) {
  switch (res.status) {
    case "success":
      // 處理成功
      break;
    case "error":
      // 處理失敗
      break;
    default:
      const _exhaustiveCheck: never = res;
      return _exhaustiveCheck;
  }
}
```

## 結語

使用 `Discriminated Union` 的好處是可以清楚的定義資料結構，而不會不同狀態的型別混在一起，都變成 `optional`，使用 `switch` 來處理邏輯讓型別判斷變得更清楚。
