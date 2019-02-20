from random import randint
import sys
import time
import getopt
import platform
import subprocess 

if platform.system() == "Windows":
    subprocess.Popen("cls", shell=True).communicate() 
else: # Linux and Mac
    print("\033c")

class CPyramide(object):
    # list of arrays holding the "|" 
    def __init__(self, lines):
        # contains an element of every | as an array
        self.pir = []
        # construct the array of arrays for the pyramid
        # each one holding the n-sticks for a row
        for i in range(lines):
            # construct the array using a listcomprehension
            sticks = ["|" for j in range(i+1)]
            self.pir.append(sticks)
    # function to print the "pyramid" arrays
    def __str__(self):
        # print the pyramid
        o = ""
        # loop through all the rows that represent the pyramid
        # and use enumerate to have them numerical from 0 to len(pir)
        for i, L in enumerate(self.pir):
            # spaces decrease with increase of rows ...
            spaces = (len(self.pir) - i) * " "
            # so, a line starts with the n-spaces
            o += spaces
            # appended with the sticks of that row all in L
            o += " ".join(L)
            # and a newline, which is definitely something else
            o += "\n"
        return o

    def stickDelete(self, line, n):
        if "|" in self.pir[line]:
            self.pir[line] = self.pir[line][n:]
        else:
            time.sleep(3)
            print("\n")
            subprocess.Popen("cls", shell=True).communicate()
            print("\033c") 
            print("I lost... snif... but I'll get you next time!!")
            sys.exit(1)
            exit(1)
            
    
print("")

try:
    lines = int(sys.argv[1])
    sticks = int(sys.argv[2])
    cpir = CPyramide(lines)
    print(cpir)
    while True:
        print("Your turn:")
        inputLine = input("Line: ")
        inputSticks = input("Matches: ")
        if int(inputSticks) > sticks:
            print("Error: you cannot remove more than",sticks,"matches per turn")
            continue
        else:
            print("Player removed",inputSticks,"match(es) from line",inputLine)
            print("")
            cpir.stickDelete(int(inputLine) - 1,int(inputSticks))
            print(cpir)
            aiSticks = randint(1,sticks)
            aiLines = randint(1,lines)
            cpir.stickDelete(aiLines - 1,aiSticks)
            print("AI's turn...")
            time.sleep(3)
            print("AI removed",aiSticks,"match(es) from line",aiLines)
            print("")
            print(cpir)
except (KeyboardInterrupt, SystemExit):
    print("")
    sys.exit(1)
except (ValueError, TypeError, IndexError):
    print("Error: invalid input (positive number expected)")
    sys.exit(1)