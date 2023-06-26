---
title: User Guide
tags:
  - techradar
---
This theme has support for Tech Radar, based on [Zalando Tech Radar](https://github.com/zalando/tech-radar) JS library. [Live example]({{< ref "/techradar" >}})

## Rings
Ring names, descriptions and associated colors can be set via theme parameters `params.techradar.rings`. Default values are:
```yaml
params:
  techradar:
    rings:
      - name: "ADOPT"
        color: "green"
        description: "We feel strongly that the industry should be adopting these items. We use them when appropriate on our projects."
      - name: "TRIAL"
        color: "blue"
        description: "Worth pursuing. It is important to understand how to build up this capability."
      - name: "ASSESS"
        color: "darkorange"
        description: "Worth exploring with the goal of understanding how it will affect your enterprise."
      - name: "HOLD"
        color: "red"
        description: "Proceed with caution"

```

## Shortcode
Theme has a defined shortcode **`techradar`**, accepting two optional parameters: title and quadrant. Quadrant parameter is used to zoom into particular part of radar. 

## Content organization
Techradar shortcode expects radar's content to be under single top level section. Next level of sections represents quadrants, all pages under quadrant will get quadrant id assigned from section front matter, **quadrant**. Each content page should have **ring**, **moved** and **active** front matter metadata fields. Shortcode uses these values to generate radar visualisation. 
