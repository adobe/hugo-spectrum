---
title: Programming
tags:
  - highlight
---

## Kotlin, Java
{{< multi-highlight >}}
{{< highlight-item title="Kotlin example" syntax="kt" >}}
fun main(args: Array<String>) {

    val first = 1.5f
    val second = 2.0f

    val product = first * second

    println("The product is: $product")
}
{{</ highlight-item >}}

{{< highlight-item title="Java example" syntax="java" >}}
public class MultiplyTwoNumbers {

    public static void main(String[] args) {

        float first = 1.5f;
        float second = 2.0f;

        float product = first * second;

        System.out.println("The product is: " + product);
    }
}

{{</ highlight-item >}}
{{</multi-highlight>}}

## Go, Python
{{< multi-highlight >}}
{{< highlight-item title="Go example" syntax="go" >}}
func main() {
    fmt.Println("hello world")
}
{{</ highlight-item >}}

{{< highlight-item title="Python example" syntax="py3" >}}
print('Hello, world!')
{{</ highlight-item >}}
{{</multi-highlight>}}

## C, C#, C++
{{< multi-highlight >}}
{{< highlight-item title="C" syntax="c" >}}
#include <stdio.h>
int main()
{
   printf("Hello World");
   return 0;
}
{{</ highlight-item >}}

{{< highlight-item title="C#" syntax="c#" >}}
static void Main(string[] args) 
{
  Console.WriteLine("Hello, world!");
}
{{</ highlight-item >}}

{{< highlight-item title="C++" syntax="c++" >}}
 
int main()
{
  std::cout << "Hello World!" << std::endl;
  return 0;
}
{{</ highlight-item >}}

{{</multi-highlight>}}
