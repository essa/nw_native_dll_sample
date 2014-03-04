TARGET=../sample1.dll
CC=gcc
OPT=-mwindows
 
SRC=$(shell ls *.c *.h)
OBJ=$(SRC:.cpp=.o)
 
all: test
$(TARGET): $(OBJ)
	$(CC) $(OPT) -shared -o $@ $(OBJ) 

.cpp.o:
	$(CC) $(OPT) -c $<

test: $(TARGET)
	cd ..; node test_sample.js



