# Math 314, Exam 2 practice (Spring 2026)

## Problem 1. For each of the following vector spaces, indicate its dimension.
(a) ℝ101.
it’s 101

(b) M4×5, the vector space of all 4 × 5 matrices.
it’s 4 * 5. so 20.

(c) the null space of
[
[3 0 0 9],
[0 1 0 8],
[0 2 0 16]
]
→
3	0	0	9
0	1	0	8
0	0	0	0
→
3x1 + 0x2 + 0x3 + 9x4
0x1 + 1x2 + 0x3 + 8x4
solve for pivot vars bro
3x1 = -9x4
1x1 = -3x4
1x2 = -8x4
→
x1
x2
x3
x4
plug in what you found
→
-3x4
-8x4
x3
x4
separate the vars that exist in this
→
unplug x4
x3[	0
0
1
0]
+
x4[	-3
-8
0
1]
that’s what it is.
4 x 2
:-3

(d) ℙ, the vector space of all polynomials with real coefficients.
“all polynomials” “p”.
P is all of the polynomials in the world to ever exist ever.
to remember this remember that P starts for Pbackrooms. and the backrooms is endless.
so Dim( P ) is infinite.

(e) The space of all 4 × 4 matrices with trace 0.
you’re just gonna have to remember this
Dim( n x n w/ trace 0 ) → n^2 - 1
thus
Dim( 4 x 4 w/ trace 0 ) → 4^2 - 1
→
16 - 1
15
n x n , trace 0? i hardly n^2 - 1 her!

(f) The space of all 5 × 5 lower triangular matrices.
another formula bullshit of you can visualize it :-/
1	1	1	1	1
1	1	1	1	1
1	1	1	1	1
1	1	1	1	1
1	1	1	1	1
everything below the diagonal.
and the diagonal
3 + 3 + 4 + 5
6 + 4 + 5
10 + 5
15

or the formula
n(n+1)/2
5(5+1)/2
5(6)/2
30/2
15


## Problem 2. Give a basis for each of the following vector spaces.
(a) ℝ3
    a basis is a set of matrix pieces.
    R creates something like this
    x[	1] + 	y[	0] + z[	0]
        0		    1	    0
        0		    0	    1
    which is aour answer
    if you had R^4
    it would be this instead
    x[  1] +    y[  0] + z[ 0] + a[ 0]
        0           1       0       0
        0           0       1       0
        0           0       0       1

(b) M2×3, the space of 2 × 3 matrices.
    m_(n x m) works differently
    instead of a matrix defined by some variable versus vector bullshit. it's a normal matrix.
    row x column
    1   1   1
    1   1   1
    the basis for this, looks like this:
    [
        [
            [   1,  0,  0   ],
            [   0,  0,  0   ]
        ],
        [
            [   0,  1,  0   ],
            [   0,  0,  0   ]   
        ],
        [
            [   0,  0,  1   ],
            [   0,  0,  0   ]
        ],
        [
            [   0,  0,  0   ],
            [   1,  0,  0   ]       
        ],
        [
            [   0,  0,  0   ],
            [   0,  1,  0   ]
        ],
        [
            [   0,  0,  0   ],
            [   0,  0,  1   ]   
        ]
    ]
    contains the set of all of the elements at 1 at least once.

(c) The space of 2 × 2 upper triangular matrices.
a basis for that.
a basis is all of the available spaces with a 1 in a differentt slot, in a set. 
confusing as hell, just look
[
    [
        [1 , 0 ],
        [0 , 0 ]
    ],
    [
        [0, 1 ],
        [0, 0 ]
    ],
    [
        [0, 0 ],
        [0, 1 ]
    ]
]

(d) The space of all polynomials of degree up to 3 satisfying p(0) = 0.
wtf are you yapping about bro.
"all th epolynomials" means use the variable t for a polynomial
so
t
now "of degree up to 3 satisfying p(0) = 0" means just have polynomials up to 3
    P(t) = at^3 + bt^2 + ct
but "p(0) = 0" means there's no constant terms attached
so do this
    {t^3 , t^2 , ,t } 

Problem 3. show that the set of polynomials
W = { bt - bt^2 + ct^3 : b , c any real numbers }
is a subset of P_3 .

the bullshit they asked of you creates this:
    bt - bt^2 + ct^3
        htat's the equation they mentioned
        factor this
    b(t - t^2) + ct^3
        this is a subset of p^3 because it has the form
        t - t^2 , t^3
        idfk why

Problem 4. Is the set of vectors
{
[
[1 , 3],
[4 , 6]
]
[
[2, 7],
[8, 14]
]
[
[5 , 20],
[25, 40]
]
[
[0 , 0]
[0 , 1]
]
}
a basis for M_(2x2)? justify your answer.

1   3   ,   2   7   ,   5   20  ,   0   0  
4   6       8   14      25  40      0   1
-->
r0 <-- r0 * 4
4   12      8   28      20  80      0   0
4   6       8   15      25  40      0   1
r0 <- r0 - r1
-->
0   6       0   5       0   40      0   0
4   6       8   15      25  40      0   1
uhh no
correct

Problem 5. Consider the following subset of ℝ4:
W = \
{
    [ 4a + 3b + 3c
    0
    a + 3b
    3b - c ]
    :
    a,b,c in R 
}

(a) Show that W is a subspace of ℝ4. (b) Find a basis for R^4

R^4 = a[    1] + b[ 0] + c[ 0 ] 
            0       1       0   
            0       0       1  
            0       0       0    
    no d becuase R^4 not M_4x4
now just plug in the bullshit they have
but before you can do that, turn their equation into a better format
    4a + 3b + 3c
    0
    a + 3b
    3b - c 
-->
    4a + 3b + 3c
    0a + 0b + 0c
    1a + 3b + 0c
    0a + 3b + -1c
-->
R^4 = a[    4] + b[ 3] + c[ 3 ] 
            0       0       0 
            1       3       0 
            0       3       -1  

(b) find the basis of W

4   3   3
0   0   0
1   3   0
0   3   -1
    row reduce asshole
    swap r4 and r2
4   3   3
0   3   -1
1   3   0
0   0   0  
    R3 <- r3 * -4
4   3   3
0   3   -1
-4   -12   0
0   0   0
    R3 <- R3 + R1
4   3   3
0   3   -1
0   -9   0
0   0   0
    r2 <- r2 * 3
4   3   3
0   9   -3
0   -9   0
0   0   0
    R3 <- R3 + R2
4   3   3
0   9   -3
0   0   0
0   0   0
    R1 <- R1 + R2
4   12   0
0   9   -3
0   0   0
0   0   0
    R2 <- R2 * 1/3
4   12   0
0   3   -1
0   0   0
0   0   0
    R1 <- R1 * 1/4
1   3   0
0   3   -1
0   0   0
0   0   0
    which rows are pivots bro?
    R1 and R2
    plug those columns in the orginal matrix as the basis
4   3
0   0
1   0
0   -1
    that's the basses bro

(c) Find the dimension of w.

thi sis the amount of columns in your basis
2
    it's 2
    and if it's not. 
    then blow up the math department

Problem 6. Consider 
A = \
    -3  6   -1  1   -7
    1   -2  2   3   -1
    2   -4  5   8   -4
~
B = \
    1   -2  2   3   -1
    0   0   1   2   -2
    0   0   0   0   0

(a) find the basis of col(A)

it's what zen said
look for the pivot columns in B
column 1 and 3.
now show those columns in A
-3  -1
1   2
2   5
    those

(b) find the basis of null(A)
do Ax = 0 
    which is whatever
do this:

x1
x2
x3
x4
x5
-->
    1x1 + -2x2 + 0x3 + -1x4 + 3x5 = 0
    0x1 + 0x2 + 1x3 + 2x4 + -2x5 = 0
    solve for x1 and x3.
        these are pivot variables
        if it asks for  the basis of null(A)
        get B or A or whatever in REf first.
            or you will be sad
    1x1 = 2x2 + 1x4 + -3x5
    1x3 = -2x4 + 2x5
-->
2x2 + 1x4 + -3x5
x2
-2x4 + 2x5
x4
x5
    turn this into a linear combonation of vectors
    by doing this, factor out the variables that exit
    so not x1 and x3
x2[ 2] + x4[1] + x5[-3]
    1       0       0
    0       -2      2
    0       1       0
    0       0       1
that just different looking
1   1   -3
1   0   0
0   -2  2
0   1   0
0   0   1

(c) Compute the rank of A and the dimension of the null space of A and check that the Rank Theorem holds.

rank of A? 
    the number of pivots in A
    2
dimention of null space? 
    dim(null(A)) = number of free variables
    3
    if
    dim( null(A) ) + rank(A) = number_of_columns
    3 + 2 = 5


Problem 7. Let
A = \
    -8  -2  -9
    6   4   8
    4   0   4
and 
W = \
    2
    1
    -2

(a) is W in null(A) ?
 A * W -> 
row x column
row 1
-8 * 2 + -2 * 1 + -9 * -2
-16 + -2 + 18 
0
row 2
6 * 2 + 4 * 1 + 8 * -2
12 + 4 + -16
16 + -16
0
row 3
4 * 2 + 0 * 1 + 4 * -2
4 + -4
0
    so 0 , 0 , 0 so w is in null of A?
    idk what that means. i thought this called a column in A but it doens't look like it :-/ 

(b) is W in col(A) ? 
row reduce augmented matrix. asshole.
-8  -2  -9  |    2
6   4   8   |    1
4   0   4   |    -2
--> swap
6   4   8   |    1
-8  -2  -9  |    2
4   0   4   |    -2
-->
24  16  32  |   4
-8  -2  -9  |    2
4   0   4   |    -2
-->
24  16  32  |   4
-24  -6  -27  |    6
4   0   4   |    -2
-->
24  16  32  |   4
0  10  5  |    10
4   0   4   |    -2
--> * -6
24  16  32  |   4
0  10  5  |    10
-24   0   -24   |    -12
-->
24  16  32  |   4
0  10  5  |    10
0   16   8   |    -8
-->
24  16  32  |   4
0  5  1 |    5
0   2   1   |    -1
-->
24  16  32  |   4
0  10  2 |    10
0   -10   -5   |    5
-->
24  16  32  |   4
0  10  2 |    10
0   0   -3   |    15
-->
24  16  32  |   4
0  10  2 |    10
0   0   -3   |    15
    look man i can keep going on you can realize that this isn't going to 0.


Problem 8. 
A = \
0   1   4   -5  3   ~   1   0   -7  0   -34
1   3   5   -2  1       0   1   4   0   -13
3   7   7   6   1       0   0   0   1   2
4   10  12  4   2       0   0   0   0   0   
find the bases for the column space and null space
column space = pivot columns -> Georgian content
so column 1 and 2
0   1
1   2
2   7
4   10
    i missed one
0   1   -5
1   2   -2
3   7   6
4   10  4

null space = put the RREF matrx in polynomial form. solve for them. the x_n or x1 thing shit sthing
x1
x2
x3
x4
x5

1x1 + 0x2 + -7x3 + 0x4 + -34x5
0x1 = 1x2 + 4x3 + 0x4 + -13x5
0x1 = 0x2 + 0x3 + 1x4 + 2x5
    solve asshole
    the pivots are x1, x2, and x4. so solve for those

1x1 = 7x3 + 34x5
1x2 = -4x3 + 13x5
1x4 = -2x5

7x3 + 34x5
-4x3 + 13x5
x3
-2x5
x5
unfactor that shit into the 2 variables remaining

x3[ 7 ] + x5[   34 ]
    -4          13
    1           0
    0           -2
    0           1
let go of the variables
7   34
-4  13
1   0
0   -2
0   1

Problem 9. Suppose that A is an 8 × 8 matrix with a 3-dimensional null space. 
(a) What is the dimension of col(A)?
    8 - 3 = 5
    3 inner dimensions
    8 basic dimensions 
    8 - 3 = 5
(b) Is A invertible? Why or why not?
    iff null( A ) = 0
        no
    if null( a ) = 0
        yes

Problem 10. Suppose that B is a 4 × 6 matrix. What is the smallest possible dimension for nul(B)? Explain your answer.

smallest_possible_dimension = biggest_dimension_number - max_rank
2 = 6 - 4

Problem 11. Show that the first three powers of 1 + t, namely the polynomials 
p1 = 1, 
p2 = 1 + t,
p3 = (1 + t)2 = 1 + 2t + t^2
form a basis for the vector space ℙ2 of polynomials of degree at most 2. 


Problem 12. Is the set of vectors
4 6],[2 7



1 3
{[
8 14],[5 20
25 40],[0 0
0 1]}

a basis for ��2×2? Justify your answer. 2
Problem 13. Let �� be a vector space of dimension 3, and let ℬ = (b1, b2, b3) and �� = (c1, c2, c3)
be two bases for �� such that
b1 = c1 − 3c2 + 2c3, b2 = c2 − 3c3, and b3 = −2c1 + 4c2 + 4c3. Let v = 2b1 − b3. Find [v]��.
Problem 14. Find the determinant of

]
.
Problem 15. Suppose that
�� =
[1 −2 5 2 0 0 3 0 2 −4 −3 5 2 0 3 5

det
[�� �� �� �� �� �� �� ℎ �� �� �� ��
]
= 4 and �� =
[�� �� �� �� �� + 2�� �� + 2�� �� + 2�� ℎ + 2�� �� �� �� ��
]
.

�� �� �� ��
What is det(−2��)?
�� − 3�� �� − 3�� �� − 3�� �� − 3��

Problem 16. Let �� be an �� × �� matrix. If �� ∼ �� and det(��) = 3, must �� be invertible? Justify your answer.

Problem 17. Is[−11 1
eigenvalue?
]an eigenvector of[2 4 3
−4 −6 −3
3 3 1
]? If so, what is the corresponding

Problem 18. Find the eigenvalues of [
3 −2
2 −1].

Problem 19. Let
4   0   -1
0   4   -1
1   0   2
-->
4 - \l  0       -1
0       4 - \l  -1
1       0       2 - \l
-->
4 - \l ((4 - \l) * (2 - \l) 0 * -1)
0 :-/
-1 ( (4 - \l) * 1)
-->
4       -\l
2   8       -2\l
-\l -4\l    \l^2
\l^2 + -6\l + 8

4 - \l (\l^2 + -6\l + 8)
4
\l^2    -3
2                8

4 - \l (\l^2 + -6\l + 9)
\l       -4
\l    \l^2    -4\l
-2    -2\l        8

4 - \l (\l^2 + -6\l + 8)
(4 - \l)  (3 - \l) (4 - \l)

4 - \l  0       -1
0       4 - \l  -1
1       0       2 - \l
\l = 3
4 - 3  0       -1
0       4 - 3  -1
1       0       2 - 3
-->
1       0       -1
0       1       -1
1       0       -1
row reduce
1       0       -1
0       1       -1
0       0       0

1x + 0y + -1z = 0
0x + 1y + -1z = 0
-->
1x = 1z
1y = 1z
-->
x1
x2
x3
-->
1
1
1
the amount of variables here

Problem 20. 
Suppose that \l is an eigenvalue for a matrix C.
Show that \l^2 is an eigenvalue for C^2.
(Hint: Use the fact that Cv = \lv to compute C^(2)v. 
Careful: squaring both sides does not make sense!)



Problem 21. Fill in the following statements in a way that makes them be true and provide brief justifications.
(a) If �� is a vector space, dim(�� ) = �� and (v1, v2,…, v��) is linearly independent, then �� ��.
(b) If �� is a vector space, dim(�� ) = ��, and span(v1, v2,…, v��) = ��, then �� ��.
Problem 22. True or false? Provide brief justification if true or an example to show that it is false.
(a) If u, v, and w are vectors in a vector space �� such that none of these vectors is a multiple of another, then the list (u, v,w) must be linearly independent.
(b) A list of vectors in a vector space �� containing repetitions (such as (v1, v1, v2, …, v��))  must be linearly dependent.
Problem 23. Is it possible for the solution set of a homogeneous linear system of 2000 equations in 2026 variables to be contained in a line? Justify your answer.
Problem 24. Let �� and �� be 5 × 5 matrices such that det(����) = 17. Must �� be invertible? Justify your answer.
Problem 25. Is the list of vectors
(1 + ��2, �� + ��2, 1 + 2��)
a basis for ℙ2? Justify your answer. If this set is not a basis for ℙ2, does it satisfy any of the conditions for a basis?

Problem 26. Let ��∶ ℙ1 → ℙ2 be a linear transformation with the following properties: �� (2) = 4 − 2�� + 6��2and �� (1 + ��) = 3 + 2�� + 6��2.
Find the matrix representing �� in the basis

T(2) = 4 - 2t + 6t^2
T(1 + t) = 3 + 2t + 6t^2
-->
2T(1) = 2 - t + 3t^2

t(i + 1) - t(1) 
=
3 + 2t + 6t^2
-
2 - t + 3t^2
-->
1 + 3t + 3t^2

t(i) = 3t^2 + 3t + 1
t(1) = 3t^2 + -t + 2

ℬ = (1, ��) for ℙ1and �� = (1, ��, ��2) for ℙ2.
Problem 27. Suppose that ℬ = (b1, b2, b3) and �� = (c1, c2, c3) are two bases for ℝ3. 4
(a) Explain why ℬ′ = (b2, 2b3, b1) and ��′ = (c3, c2, c1) are also bases for ℝ3. (Hint: Row operations.)
(b) Suppose that ��∶ ℝ3 → ℝ3 has matrix representation relative to ℬ and �� given by

[�� ]��←ℬ =[0 −1 2
3 1 4
�� 0 −7
].

Find [�� ]��′←ℬ′, the matrix representation of �� relative to ℬ′ and ��′.
    
Problem 28. Give an example or explain why no example exists.
(a) A 2 × 2 matrix A with eigenvalues −1, 2, and 3.
    no example exists
(b) A 3 × 3 matrix A with eigenvalues −1, 2, and 3.
    yes. you can do that because the eigenvalues corropsond to diagonal values
(c) A 4 × 4 matrix A with no (real) eigenvalues.
    
(d) A 3 × 3 matrix �� with no (real) eigenvalues.
(e) A 314 × 314 matrix �� with det(��) = 0 and no (real) eigenvalues. (f) An upper-triangular 4 × 4 matrix �� with no (real) eigenvalues.
Problem 29. Indicate whether each statement is true or false, and justify your answer. (a) A square matrix �� is invertible if and only if 0 is not an eigenvalue of ��. (b) A square matrix �� has determinant 0 if and only if 0 is an eigenvalue of ��. (c) If �� and �� are 314 × 314 matrices each with eigenvalue 7, then �� + �� has eigenvalue 7.

(d) If [�� ]ℬ←ℬ =[3 1 4
0 2 0
0 0 1
]is the matrix of a linear transformation ��∶ ℝ3 → ℝ3relative

to a basis ℬ = (b1, b2, b3), then �� (b1 + b2 + b3) = 8b1 + 2b2 + b3. (e) There exists a matrix with exactly 100 eigenvectors.
(f) The matrices [1 0
0 0],[0 0
0 1], and [0 1
1 0]form a basis for the space of symmetric 2×2
matrices.
(g) There is a surjective linear transformation ��∶ ℝ314 → ℝ4 with dim(ker(�� )) = 100.
(h) If �� and �� are row-equivalent, and �� is an eigenvalue of ��, then �� must be an eigenvalue of ��.
(i) If �� and �� are row-equivalent, and 0 is an eigenvalue of ��, then 0 must be an eigenvalue of ��.
5

reference
Math 314 – Exam 2 Reference Sheet

1. Dimension Rules
   dim(ℝⁿ) = n
   dim(M_{m×n}) = m·n
   dim(polynomials of degree ≤ n) = n + 1
   dim(trace 0 n×n matrices) = n² − 1
   dim(lower triangular n×n) = n(n+1)/2

2. Basis Basics
   A set is a basis if:
   Linearly independent
   Spans the space
   Standard bases:
   ℝⁿ → standard unit vectors
   Polynomials → {1, t, t², ..., tⁿ}
   Matrices → matrices with one 1 and rest 0

3. Subspace Test
   To show W is a subspace:
   Contains 0 vector
   Closed under addition
   Closed under scalar multiplication
   Shortcut: If defined with parameters (like a, b, c), it's usually a subspace.

4. Linear Independence
   Vectors are linearly independent if:
   c₁v₁ + c₂v₂ + ... + cₖvₖ = 0 ⇒ all cᵢ = 0
   Quick checks:
   Too many vectors → dependent
   Repeated vectors → dependent

5. Rank–Nullity Theorem
   rank(A) + nullity(A) = number of columns
   rank = # pivots
   nullity = # free variables

6. Column Space & Null Space
   Column Space
   Basis = pivot columns of ORIGINAL matrix
   Null Space
   Solve Ax = 0
   Express in parametric form
   Basis = vectors from free variables

7. Checking Membership
   w ∈ col(A): solve Ax = w
   w ∈ nul(A): check if Aw = 0

8. Determinants
   Key rules:
   det(AB) = det(A)det(B)
   det(cA) = cⁿ det(A)
   Row swap → multiply by −1
   Row scaling → multiply determinant
   Row replacement → no change
   Invertibility:
   det(A) ≠ 0 ⇔ invertible

9. Eigenvalues & Eigenvectors
   Definition:
   Av = λv
   Find eigenvalues:
   det(A − λI) = 0
   Facts:
   0 eigenvalue ⇔ not invertible
   Upper triangular → eigenvalues on diagonal

10. Eigenspaces
    Solve:
    (A − λI)x = 0
    Dimension = geometric multiplicity

11. Change of Basis
    To convert coordinates:
    [v]_C = P[v]_B
    Where P converts B → C

12. Linear Transformations (Matrix)
    [T]_{C←B}:
    Columns = T(bᵢ) written in C

13. Common Tricks
    Dimension = # parameters
    Pivot columns → basis for col(A)
    Free variables → basis for nul(A)
    Eigenvalues tell invertibility instantly
    Row operations DO NOT preserve eigenvalues

14. True/False Patterns
    Independent list size ≤ dimension
    Spanning list size ≥ dimension
    Repeated vectors → dependent
    Not multiples ≠ independent

15. Strategy by Problem Type
    Dimension problems
    → Count degrees of freedom
    Basis problems
    → Find spanning set + check independence
    Subspace
    → Verify 3 conditions
    Null/Col space
    → Row reduce, identify pivots/free vars
    Eigenvalue problems
    → Characteristic polynomial
    Determinants
    → Row reduce or use properties

16. Fast Mental Checklist
    Before solving:
    What space am I in?
    What is being asked: dimension, basis, or membership?
    Can I reduce to pivots/free variables?
    Is there a shortcut formula?

Use this sheet to quickly identify the method for each problem type.

    