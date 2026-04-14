give a basis for col(A)
1. row reduce asshole
2. find pivot columns
3. go back to orginal matrix
4. take those same columns
that's the basis

give a basis for null(A)
1. row reduce A
2. identify free vars
3. solve for Ax = 0 
   1. place the vertical polynomials for every row
   2. solve for pivot vars in the horizontal polynomial form
   3. replug in the vertical polynomials form


\text{rank} + \text{nullity} = \text{# of columns}
rank + nullity = # of columns

1   2   3
4   5   6
7   8   9
-->
1 - \l  2       3
4       5 - \l   6
7       8       9 - \l 

(1 - \l) ((5 - \l) * (9 - \l) - 6 * 8)
2 (4 * (9 - \l) - 6 * 7)
3 (4 * 8 - (5 - \l) * 7)

solve taht bih
\l =
(4 - \l)^2
\l = 4 mul 2

1 - 4  2       3
4       5 - 4   6
7       8       9 - 4
-->
-3      2       3
4       1      6
7       8       5

problem 19
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
























