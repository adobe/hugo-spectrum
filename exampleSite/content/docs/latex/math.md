---
title: Math
weight: 1
tags:
  - math
  - latex
---
Examples below are from [https://www.overleaf.com/learn](https://www.overleaf.com/learn)
## Expressions

The well known Pythagorean theorem \\(x^2 + y^2 = z^2\\) was proved to be invalid for other exponents. 
Meaning the next equation has no integer solutions:

\\[ x^n + y^n = z^n \\]

\begin{equation}
E=mc^2
\end{equation}

**Greek letters** \\(\alpha \beta \gamma \rho \sigma \delta \epsilon\\)

**Binary operators** \\(\times \otimes \oplus \cup \cap \\)

**Relation operators**	\\(< > \subset \supset \subseteq \supseteq\\)

**Others** \\( \int \oint \sum \prod \\)

## Subscripts and superscripts
\\( a_1^2 + a_2^2 = a_3^2 \\)

\\( x^{2 \alpha} - 1 = y_{ij} + y_{ij}  \\)

\\( \sum_{i=1}^{\infty} \frac{1}{n^s}
= \prod_p \frac{1}{1 - p^{-s}} \\)

\\( \sum_{i=1}^{\infty} \\)

\\( \cup_{i=1}^n \\)

\\( \cap_{i=1}^n \\)

## Brackets and Parentheses
\\((x+y) [x+y] \\{ x+y \\} \\langle x + y \\rangle |x+y|  \\|x+y\\| \\)

\\(
F = G \left( \frac{m_1 m_2}{r^2} \right)
\\)

\\(
\left[  \frac{ N } { \left( \frac{L}{p} \right)  - (m+n) }  \right]
\\)

\\(
\begin{align*}
y  = 1 + & \left(  \frac{1}{x} + \frac{1}{x^2} + \frac{1}{x^3} + \ldots \right. \\\\
&\left. \quad + \frac{1}{x^{n-1}} + \frac{1}{x^n} \right)
\end{align*}
\\)


## Matrices
\\(
\begin{matrix}
1 & 2 & 3\\\\
a & b & c
\end{matrix}
\\)

\\(
\begin{pmatrix}
1 & 2 & 3\\\\
a & b & c
\end{pmatrix}
\\)

\\(
\begin{bmatrix}
1 & 2 & 3\\\\
a & b & c
\end{bmatrix}
\\)

\\(
\begin{Bmatrix}
1 & 2 & 3\\\\
a & b & c
\end{Bmatrix}
\\)

\\(
\begin{vmatrix}
1 & 2 & 3\\\\
a & b & c
\end{vmatrix}
\\)

\\(
\begin{Vmatrix}
1 & 2 & 3\\\\
a & b & c
\end{Vmatrix}
\\)

## Fractions and Binomials
\\( \frac{1}{2} \\)

\\( f(x)=\frac{P(x)}{Q(x)} \ \ \textrm{and}
\ \ f(x)=\textstyle\frac{P(x)}{Q(x)} \\)

\\(
\frac{1+\frac{a}{b}}{1+\frac{1}{1+\frac{1}{a}}}
\\)

\\(
a_0+\cfrac{1}{a_1+\cfrac{1}{a_2+\cfrac{1}{a_3+\cdots}}}
\\)

\\(
\binom{n}{k} = \frac{n!}{k!(n-k)!}
\\)


## Operators
\\(
\sin(a + b) = \sin a \cos b + \cos b \sin a
\\)

\\(
\lim_{h \to 0 } \frac{f(x+h)-f(x)}{h}
\\)

## Integrals, sums and limits
\\(
\int_{a}^{b} x^2 \,dx
\\)

\\(
\iint_V \mu(u,v) \,du\,dv
\\)

\\(
\sum_{n=1}^{\infty} 2^{-n} = 1
\\)

\\(
\prod_{i=a}^{b} f(i)
\\)

\\(
\lim_{x\to\infty} f(x)
\\)

\\(

\\)

<p>
\begin{align}
\dot{x} &amp; = \sigma(y-x) \\
\dot{y} &amp; = \rho x - y - xz \\
\dot{z} &amp; = -\beta z + xy
\end{align}
</p>

## The Cauchy-Schwarz Inequality
<p>
\[
\left( \sum_{k=1}^n a_k b_k \right)^{\!\!2} \leq
 \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
\]
</p>

## A Cross Product Formula

<p>\[
  \mathbf{V}_1 \times \mathbf{V}_2 =
   \begin{vmatrix}
    \mathbf{i} &amp; \mathbf{j} &amp; \mathbf{k} \\
    \frac{\partial X}{\partial u} &amp; \frac{\partial Y}{\partial u} &amp; 0 \\
    \frac{\partial X}{\partial v} &amp; \frac{\partial Y}{\partial v} &amp; 0 \\
   \end{vmatrix}
\]</p>

## The probability of getting \(k\) heads when flipping \(n\) coins is:

<p>\[P(E) = {n \choose k} p^k (1-p)^{ n-k} \]</p>

## An Identity of Ramanujan

<p>\[
   \frac{1}{(\sqrt{\phi \sqrt{5}}-\phi) e^{\frac25 \pi}} =
     1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}}
      {1+\frac{e^{-8\pi}} {1+\ldots} } } }
\]</p>

## A Rogers-Ramanujan Identity

<p>\[
  1 +  \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots =
    \prod_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})},
     \quad\quad \text{for $|q| &lt; 1$}.
\]</p>

## Maxwell's Equations

<p>
\begin{align}
  \nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &amp; = \frac{4\pi}{c}\vec{\mathbf{j}} \\
  \nabla \cdot \vec{\mathbf{E}} &amp; = 4 \pi \rho \\
  \nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} &amp; = \vec{\mathbf{0}} \\
  \nabla \cdot \vec{\mathbf{B}} &amp; = 0
\end{align}
</p>

## In-line Mathematics

<p>Finally, while display equations look good for a page of samples, the
ability to mix math and text in a paragraph is also important.  This
expression \(\sqrt{3x-1}+(1+x)^2\) is an example of an inline equation.  As
you see, MathJax equations can be used this way as well, without unduly
disturbing the spacing between lines.</p>
