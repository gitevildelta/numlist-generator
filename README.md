# numlist-generator

Generator millions of msisdn with 1 command.

## Usage

NB : The generated msisdn list will be written to `numlist.txt`.
This file is never overwritten.

`deno run --allow-read --allow-write https://raw.githubusercontent.com/gitevildelta/numlist-generator/master/main.ts --count 10 --cc 49 --ndc 176 --snLen 8`

* `--allow-read` is required to verify if `numlist.txt` does not already exists
* `--allow-write` is required to write the list of msisdn to `numlist.txt`

### Arguments

* `cc` the country code of the msisdn
* `ndc` the national destination code
* `snLen` the length of the subscriber number

## Output

The generated list of msisdn is in the following format :

```
+49 176 05804060
+49 176 00803825
```

To remove the spaces : `sed -i s/ //g numlist.txt`
To remove the duplicates : `cat numlist.txt | sort -u | uniq > numlist-uniques.txt` (will also sort the file)

## Benchmark

```
cpu: 11th Gen Intel(R) Core(TM) i7-11800H @ 2.30GHz
runtime: deno 1.36.4 (x86_64-unknown-linux-gnu)

file:///home/user/Documents/tools/numlist-generator/random/msisdn_bench.ts
benchmark                    time (avg)        iter/s             (min … max)       p75       p99      p995
----------------------------------------------------------------------------- -----------------------------
randomMsisdnSimonMobile     187.83 ns/iter   5,323,959.7  (174.93 ns … 255.5 ns)  190.5 ns 242.85 ns 251.39 ns

file:///home/user/Documents/tools/numlist-generator/random/number_bench.ts
benchmark                 time (avg)        iter/s             (min … max)       p75       p99      p995
-------------------------------------------------------------------------- -----------------------------
randomNumberOneDigit       9.18 ns/iter 108,939,116.5    (7.93 ns … 96.56 ns)   9.33 ns   15.3 ns  17.35 ns

file:///home/user/Documents/tools/numlist-generator/random/string_bench.ts
benchmark                      time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------------- -----------------------------
randomStringWithArrayFrom     518.61 ns/iter   1,928,229.6 (500.21 ns … 718.77 ns) 517.86 ns 665.32 ns 718.77 ns
randomStringManual             96.81 ns/iter  10,329,375.2  (90.05 ns … 127.99 ns)  99.37 ns 117.34 ns 120.24 ns
```
