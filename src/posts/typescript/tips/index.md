---
title: "TypeScript 物件型別常用技巧介紹 - Omit, Record, satisfies"
description: "這篇文章帶你掌握 3 個 TypeScript 物件型別常用技巧：Omit, Record, satisfies, as const，透過實際開發場景的範例，讓你少踩坑、多享受型別安全帶來的好處。"
tags: ["TypeScript"]
pubDate: 2025-06-10
relatedPosts:
  - typescript/discriminated-union
---

## Omit：拿掉不想要的欄位

`Omit<Type, Keys>` 是 <a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys" target="_blank">TypeScript Utility Types</a>其中之一

Utility Types 用途主要是讓開發人員不用重複寫型別，而 `Omit<Type, Keys>` 則是可以讓你拿掉不想要的欄位。

舉例來說，假設現在有個型別叫做 `User` ，結構如下：

```ts
type User = {
  email: string;
  id?: string | undefined;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
  hashedPassword?: string | undefined;
};
```

如果我們想要回傳給使用者 User 資訊，但不想要回傳 `hashedPassword` 這個欄位，除了複製 `User` 並建立一個新的型別之外，可以透過 `Omit` 簡單做到：

```ts
type UserResponse = Omit<User, "hashedPassword">;
/** 
 * UserResponse {
    email: string;
    id?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
  }
 * 
*/
```

## Record: 建立 Key-Value 結構

開發時很常會遇到需要建立 Key-Value 結構的狀況，如：下拉選單，`Record<Keys, Type>` 則是幫助你迅速建立此種類型的 Utility Type。

例如，現在有個 Todo 狀態的下拉選單：

```ts
type TodoStatus = "todo" | "in-progress" | "done";

const todoStatusLabels: Record<TodoStatus, string> = {
  todo: "待辦",
  "in-progress": "進行中",
  done: "已完成",
};
```

透過 `Record<Keys, Type>` 的方式，如果有異動`TodoStatus`， `todoStatusLabels` 也會提示使用者，這樣可以避免不一致的情況。

## satisfies operator: 檢查型別

`satisfies` operator 是 <a href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html" target="_blank">TypeScript 4.9</a> 版本新增的。

根據官網所述：

> The new satisfies operator lets us validate that the type of an expression matches some type, without changing the resulting type of that expression.

簡單來講就是說 `satisfies` 可以檢查物件是否滿足某種型別，但不改變結果的推論型別。

聽起來可能有點繞，我們看實際例子：

```ts
type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};

const userResponse = {
  data: { id: 1, name: "John" },
  status: 200,
  message: "Success",
  // 額外
  timestamp: new Date(),
  requestId: "abc123",
} satisfies ApiResponse<{ id: number; name: string }>;

// 保留原始物件的所有屬性
userResponse.timestamp; // ✅ 可訪問
userResponse.data.name; // ✅ 有完整類型推斷
```

透過 `satisfies` operator，讓 `userResponse` 既符合 `ApiResponse` ，又保有自己的屬性。

## 結語

`Omit` , `Record` 算是常見的 Utility Types ，另外還有許多也一樣好用的 Utility Types 可以使用（如： `Pick`, `Readonly`），詳細說明可以參照<a href="https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys" href="_blank">官網</a>。

`satisfies` 算是後期出的新功能，相對來講比較冷門，但是用來檢查型別非常快速方便。
