---
title: Sample Page
weight: 1
tags:
  - docs
  - howto
  - page1
---


# Heading 1


## Text Content

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id ipsum sed enim euismod lobortis. Pellentesque facilisis efficitur eros vel feugiat. Donec vitae placerat neque, et venenatis felis. Mauris ultrices rhoncus ante non molestie. Donec fringilla gravida interdum. Pellentesque iaculis dolor a nisl iaculis, nec elementum sem efficitur. Nulla sed ante ac dolor egestas semper. Aliquam eget ligula et neque tristique blandit. Suspendisse sit amet eleifend felis.


Integer placerat libero sit amet lorem egestas pulvinar. Proin maximus vestibulum ante, eget faucibus libero blandit ac. Maecenas imperdiet, turpis id euismod tempus, lectus purus consequat elit, ac dictum magna justo ullamcorper turpis. Ut dictum laoreet nibh, et malesuada tellus malesuada nec. Suspendisse nibh nisi, aliquet vel diam pretium, feugiat hendrerit risus. Proin sed sagittis nulla, vel feugiat dui. Cras mollis in sapien cursus egestas. Nullam vulputate ut arcu eget bibendum. Aliquam ligula mauris, placerat non mollis et, fringilla ac magna. Donec non est pellentesque, pellentesque dolor quis, tempor ipsum.

## Hints

{{< alert title="Success" variant="success" >}}
This is an alert box using Adobe Spectrum style.
{{< /alert >}}

{{< alert title="Info" variant="info" >}}
This is an alert box using Adobe Spectrum style.
{{< /alert >}}

{{< alert title="Help" variant="help" >}}
This is an alert box using Adobe Spectrum style.
{{< /alert >}}


{{< alert title="Warning" variant="warning" >}}
This is an alert box using Adobe Spectrum style.
{{< /alert >}}


{{< alert title="Error" variant="error" >}}
This is an alert box using Adobe Spectrum style.
{{< /alert >}}




## Table

{{< table >}}
| Col1    | Col2  | Col3 |
| ------- | ------| -----| 
| 8       | 10    | 50   |
| 8       | 10    | 500  |
| 8       | 10    | 50   |
| 8       | 10    | 500  |
| 8       | 10    | 50   |
| 8       | 10    | 500  |
{{< /table >}}

## Code

```go
package main

import (
    "fmt"
    "math/rand"
    "time"
)

type Moo struct {
    Cow   int
    Sound string
    Tube  chan bool
}

// A cow will moo until it is being milked
func cow(num int, mootube chan Moo) {
    tube := make(chan bool)
    for {
        select {
        case mootube <- Moo{num, "moo", tube}:
            fmt.Println("Cow number", num, "mooed through the mootube")
            <-tube
            fmt.Println("Cow number", num, "is being milked and stops mooing")
            mootube <- Moo{num, "mooh", nil}
            fmt.Println("Cow number", num, "moos one last time in relief")
            return
        default:
            fmt.Println("Cow number", num, "mooed through the mootube and was ignored")
            time.Sleep(time.Duration(rand.Int31n(1000)) * time.Millisecond)
        }
    }
}

// The farmer wants to turn on all the milktubes to stop the mooing
func farmer(numcows int, mootube chan Moo, farmertube chan string) {
    fmt.Println("Farmer starts listening to the mootube")
    for unrelievedCows := numcows; unrelievedCows > 0; {
        moo := <-mootube
        if moo.Sound == "mooh" {
            fmt.Println("Farmer heard a moo of relief from cow number", moo.Cow)
            unrelievedCows--
        } else {
            fmt.Println("Farmer heard a", moo.Sound, "from cow number", moo.Cow)
            time.Sleep(2e9)
            fmt.Println("Farmer starts the milking machine on cow number", moo.Cow)
            moo.Tube <- true
        }
    }
    fmt.Println("Farmer doesn't hear a single moo anymore. All done!")
    farmertube <- "yey!"
}

// The farm starts out with mooing cows that wants to be milked
func runFarm(numcows int) {
    farmertube := make(chan string)
    mootube := make(chan Moo)
    for cownum := 0; cownum < numcows; cownum++ {
        go cow(cownum, mootube)
    }
    go farmer(numcows, mootube, farmertube)
    farmerSaid := <-farmertube
    if farmerSaid == "yey!" {
        fmt.Println("All cows are happy.")
    }
}

func main() {
    runFarm(4)
    fmt.Println("done")
}
```

## Heading 2

### Heading 3
