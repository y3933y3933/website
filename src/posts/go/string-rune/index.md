---
title: "【Go入門向】搞懂 string 與 rune 的真正差別"
description: "在 Go 裡用 str[i] 取值真的拿到的是字元嗎？別被表象誤導！本文深入解析 string 與 rune 的本質與使用情境，讓你一次搞懂 byte、UTF-8、與 Unicode 的差異。"
tags: ["Go"]
pubDate: 2025-07-09
---

## toc

## 情境

PM：這個留言板幫我限制最多只能輸入 100 字喔。

小明：好的！（心想：超級簡單）

```go
if len(comment) > 100 {
    return errors.New("留言超過上限")
}
```

試想上面程式碼可能會遇到什麼問題？

## string 的本質

試問 c 會印出什麼？

```go
func main() {
	s := "Hello"
	c := s[0]
	fmt.Println(c) // ??
}
```

你可能以為是 `H`，但實際上印出的是 `72`

根據<a href="https://go.dev/ref/spec#String_types" target="_blank">官方文件</a>所述：

> A string value is a (possibly empty) sequence of bytes.

也就是說 Go 的字串本質上是 bytes 序列，所以上述程式碼 `s[0]` 印出的會是 H 的 utf-8 值。

## UTF-8 與 Unicode 又是什麼？

電腦的世界沒有文字，只有 0 跟 1 ，那要怎麼表示各種文字呢？

早期各國創了各自字元的對照表，但就會發生在 A 國有這個字，但 B 國沒有，就會顯示亂碼，為了解決這樣的問題，Unicode 誕生了。

Unicode 幫各國字元編碼，讓大家可以統一語言，每個字元對應一個碼位 code point，比如說中文的「你」，對應到 Unicode 裡就是 `\u4f60`。

可以使用 <a href="https://www.ifreesite.com/unicode-ascii-ansi.html" target="_blank">Unicode 字元轉換工具</a>來轉換看看。

那什麼是 UTF-8？如果你是前端人員，在寫 html 時，會看到有這一段：

```html
<head>
  <meta charset="UTF-8" />
</head>
```

UTF-8 其實就是一種編碼方式，用來將 Unicode 字元集的碼位轉換成二進位，他還有其他兄弟，如：UTF-16，但考量空間效率，UTF-8 是目前最廣泛使用的編碼方式。

## rune 是什麼？

rune 在 Go 中，其實就是 Unicode 的碼位 (code point)，其實也等同於 `int32`

```go
var r rune = '🤡'
fmt.Println(r)      // 129313
fmt.Printf("%U", r) // U+1F921
```

## 常見陷阱

### 陷阱 1：len(str) 回傳的是 bytes 數，不是字元數

```go
str := "你好"
fmt.Println(len(str)) // 6，不是 2！
```

如果想獲得字串的 rune 數量，應該改使用 `unicode/utf8` package：

```go
import (
	"fmt"
	"unicode/utf8"
)

func main() {
	str := "你好"
	fmt.Println(utf8.RuneCountInString(str))

}
```

### 陷阱 2：for loop

```go
str := "早安你好"
for i := range str {
	fmt.Printf("position： %d: %c\n", i, str[i])
}
// position： 0: æ
// position： 3: å
// position： 6: ä
// position： 9: å
```

可以看到印出的 index 並不是依照順序印出 0,1,2,3，這是因為 for loop 迭代的是 `rune` 而非 `byte`。

如果要正確取得 `index` 與字元的話，可以先將字串轉成 `[]rune`：

```go
str := "早安你好"
runes := []rune(str)
for i, r := range runes {
	fmt.Printf("position： %d: %c\n", i, r)
}
```

## Summary

Go 為了效能與簡潔，選擇讓 string 是一段唯讀的 bytes。

但若你要處理的是文字，就必須轉換成 rune，或使用 utf8 套件協助解析。千萬別假設「一個字元就是一個 byte」，這在多語系環境中只會製造更多 bug。

記住這句話：Go 的 string 儲存的是 bytes，而不是字元。 只有 rune 才是字元。

## 參考資源

- <a href="https://go.dev/blog/strings" target="_blank">Strings, bytes, runes and characters in Go</a>
- <a href="https://www.joelonsoftware.com/2003/10/08/the-absolute-minimum-every-software-developer-absolutely-positively-must-know-about-unicode-and-character-sets-no-excuses/" target="_blank">The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets (No Excuses!)</a>
