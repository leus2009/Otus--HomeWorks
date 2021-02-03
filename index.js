{\rtf1\ansi\ansicpg1252\cocoartf2577
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red184\green93\blue213;\red17\green17\blue17;\red135\green135\blue135;
\red81\green157\blue235;\red155\green162\blue177;\red72\green168\blue181;\red222\green180\blue104;\red136\green185\blue102;
}
{\*\expandedcolortbl;;\cssrgb\c77647\c47059\c86667;\cssrgb\c8235\c8235\c8235;\cssrgb\c60000\c60000\c60000;
\cssrgb\c38039\c68627\c93725;\cssrgb\c67059\c69804\c74902;\cssrgb\c33725\c71373\c76078;\cssrgb\c89804\c75294\c48235;\cssrgb\c59608\c76471\c47451;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl480\partightenfactor0

\f0\fs30 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 export\cf4 \strokec4  \cf2 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 nums\cf6 \strokec6 (a,\cf4 \strokec4  \cf6 \strokec6 b)\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl480\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 let\cf4 \strokec4  \cf6 \strokec6 sum\cf4 \strokec4  \cf7 \strokec7 =\cf4 \strokec4  \cf6 \strokec6 a\cf4 \strokec4  \cf7 \strokec7 +\cf4 \strokec4  \cf6 \strokec6 b;\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 let\cf4 \strokec4  \cf6 \strokec6 mult\cf4 \strokec4  \cf7 \strokec7 =\cf4 \strokec4  \cf6 \strokec6 a\cf4 \strokec4  \cf7 \strokec7 *\cf4 \strokec4  \cf6 \strokec6 b;\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 try\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 if\cf4 \strokec4  \cf6 \strokec6 (\cf7 \strokec7 isNaN\cf6 \strokec6 (sum)\cf4 \strokec4  \cf7 \strokec7 ||\cf4 \strokec4  \cf7 \strokec7 isNaN\cf6 \strokec6 (mult))\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3       \cf2 \strokec2 throw\cf4 \strokec4  \cf2 \strokec2 new\cf4 \strokec4  \cf8 \strokec8 Error\cf6 \strokec6 (\cf8 \strokec8 console\cf6 \strokec6 .\cf7 \strokec7 log\cf6 \strokec6 (\cf9 \strokec9 "Error"\cf6 \strokec6 ));\cf4 \cb1 \strokec4 \
\cb3     \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \}\cf4 \strokec4  \cf2 \strokec2 catch\cf4 \strokec4  \cf6 \strokec6 (err)\cf4 \strokec4  \cf6 \strokec6 \{\cf4 \cb1 \strokec4 \
\cb3     \cf8 \strokec8 console\cf6 \strokec6 .\cf7 \strokec7 log\cf6 \strokec6 (\cf9 \strokec9 "Error"\cf6 \strokec6 );\cf4 \cb1 \strokec4 \
\cb3   \cf6 \strokec6 \}\cf4 \cb1 \strokec4 \
\cb3   \cf8 \strokec8 console\cf6 \strokec6 .\cf7 \strokec7 log\cf6 \strokec6 (sum,\cf4 \strokec4  \cf6 \strokec6 mult);\cf4 \cb1 \strokec4 \
\pard\pardeftab720\sl480\partightenfactor0
\cf6 \cb3 \strokec6 \}\cf4 \cb1 \strokec4 \
\
}