
#include "sample1.h"


int api1(int a, int b, struct Sample *out) {
    int i;
    char *p;
    out->sum = a + b;
    out->difference = a - b;
    for(i = 0 ; i< 16 ; i++) {
        out->platform[i] = 0;
    }
    p = "mac";
    i = 0;
    while(*p != 0) {
        out->platform[i++] = *p++;
    }
    return 1;
}
