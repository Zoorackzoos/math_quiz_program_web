# Math 314 – Exam 2 Answer Key (Concise Steps)

---

## Problem 1 (Dimensions)

(a) ℝ¹⁰¹ → 101

(b) M₄×₅ → 4·5 = 20

(c) Matrix → RREF gives 2 pivots, 4 cols → nullity = 4 − 2 = 2

(d) All polynomials → infinite dimension

(e) 4×4 matrices: 16 entries − 1 constraint (trace=0) → 15

(f) Lower triangular 5×5 → 5+4+3+2+1 = 15

---

## Problem 2 (Bases)

(a) ℝ³ → {(1,0,0),(0,1,0),(0,0,1)}

(b) M₂×₃ → 6 matrices with one 1 each position

(c) Upper triangular 2×2:
[1 0;0 0], [0 1;0 0], [0 0;0 1]

(d) p(0)=0 → no constant term → {t, t², t³}

---

## Problem 3 (Subspace)

Form: bt − bt² + ct³ = b(t − t²) + c(t³)

→ span{t−t², t³} ⇒ subspace

---

## Problem 4 (Basis check)

M₂×₂ dim = 4

4 matrices given → check independence

Row reduce → dependent (one is combo of others)

→ NOT a basis

---

## Problem 5

(a) Linear combination form → subspace

(b) Write as:
WRONG
    = a[4,0,1,0] + b[3,0,3,3] + c[3,0,0,-1]
    
    Basis = those 3 vectors
RIGHT
    take the "linear cobonation of vectors" and turn it into a matirx
    it looks like this
    a[  1] + b[ 0]
        0       1
    now row reduce it
    and the final answer is the amount of volumns with pivots in it

(c)
Dimension = amount of pivot columns
dimension = 2

---

## Problem 6

RREF has 2 pivots

(a) col(A): use pivot columns from ORIGINAL A

(b) nul(A):
Free vars → solve → basis vectors from parameters

(c) rank = 2, nullity = 5−2=3 → checks

---

## Problem 7

(a) Compute Aw → not 0 → not in nul(A)

(b) Solve Ax = w → inconsistent → not in col(A)

---

## Problem 8

RREF pivots: col 1,2,4

(a) col(A): columns 1,2,4 from original

(b) nul(A): free vars x₃,x₅ → solve → 2 basis vectors

---

## Problem 9

(a) rank = 8 − 3 = 5

(b) Not invertible (nullity ≠ 0)

---

## Problem 10

4×6 → max rank = 4

nullity = 6 − rank ≥ 2

Smallest = 2

---

## Problem 11

3 polynomials, dim(P₂)=3

Check independence → yes → basis

---

## Problem 12

Same as 4 → NOT a basis

---

## Problem 13

v = 2b₁ − b₃

Substitute b’s in terms of c’s

Collect coefficients → gives [v]_C

---

## Problem 14

Row reduce to triangular

Multiply diagonal entries → determinant

---

## Problem 15

det(B): row ops:
Swap rows, scaling → track factors

Then det(−2B) = (−2)⁴ det(B)

---

## Problem 16

det(C)=3 ≠0 → invertible

Row equivalent → same determinant up to row ops

→ A invertible

---

## Problem 17

Compute Av

Check if Av = λv

→ yes/no, solve λ

---

## Problem 18

|A−λI| = 0

→ λ² −2λ −1 = 0

→ λ = 1 ± √2

---

## Problem 19

(a) det(A−λI)=0 → eigenvalues

(b) Plug λ=3 → solve (A−3I)x=0

(c) 0 eigenvalue? if no → invertible

---

## Problem 20

Cv = λv

C²v = C(λv) = λCv = λ²v

---

## Problem 21

(a) p ≤ n

(b) p ≥ n

---

## Problem 22

(a) False (not multiples ≠ independent)

(b) True (repetition → dependent)

---

## Problem 23

2026 vars, ≤2000 pivots

→ nullity ≥ 26 → not a line

---

## Problem 24

17 ≠ 0 → AB invertible → A invertible

---

## Problem 25

3 vectors in dim 3 → check independence

Row reduce → independent → basis

---

## Problem 26

Compute T(1), T(t)

Write in C basis → columns form matrix

---

## Problem 27

(a) Reordering/scaling ≠ break independence → still basis

(b) Permute rows/columns accordingly

---

## Problem 28

(a) Impossible (2×2 max 2 eigenvalues)

(b) Possible

(c) Possible (rotation-type)

(d) Possible

(e) Possible

(f) Impossible (triangular → real diagonal entries)

---

## Problem 29

(a) True

(b) True

(c) False

(d) Compute using matrix → true

(e) False

(f) True

(g) True (rank 4 → nullity 310)

(h) False

(i) True

---

End of Answer Key
