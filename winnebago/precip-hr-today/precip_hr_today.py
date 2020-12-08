#!/bin/env jython
# example that exports CWMS data to a CSV file
# Karl Tarbet September 2020
import DBAPI
import sys,os,string,csv
from datetime import datetime,timedelta
from hec.heclib.util import HecTime
from hec.io  import TimeSeriesContainer, TimeSeriesContainerAligner
from hec.script import Constants
from hec.hecmath import TimeSeriesMath
from jarray import array


# function to connect to Database
def connectToDatabase():
    ts  = datetime.today()
    t = ts - timedelta(hours=6)
    t1=t.strftime('%d%b%Y 0000')
    t2=t.strftime('%d%b%Y %H00')

    print("Time Window = %s, %s" % (t1, t2))

    #Time Window = 02Sep2020 0900, 03Sep2020 0900 
    officeId  = 'LRC' 
    db = DBAPI.open()
    db.setOfficeId(officeId)
    db.setTimeZone('US/Central')
    db.setTimeWindow(t1, t2)
    db.setTrimMissing(False)
    return db

# create a table with times in the first column
def createTable(times):
    rval = []
    ht = HecTime(); 
    ht.showTimeAsBeginningOfDay(True)
    for i in range(len(times)):
        t = times[i]
        ht.set(t)
        d = ht.dateAndTime(4) #'03Sep2020, 00:00'
        # format like 02-Jun-1985 01
        d = d[0:2]+"-"+d[2:5]+"-"+d[5:9]+" "+d[11:13]
        row = [d]  
        rval.append(row)
    return rval

# add data values as a to a column to a 'table'
# assuming regular-consistent interval
def addValueColumn(table,tsc):
        for i in range(len(table)):
            if i >= len(tsc.values):
                print("stopping at ",i)
                break
            table[i].append(tsc.values[i])

def writeToCsv(table,header,csvFileName):
    f = open(csvFileName,'wb')
    w = csv.writer(f)
    w.writerow(header)
    for row in table:
        for i in range(1,len(row)):
            if( row[i] == Constants.UNDEFINED):
              row[i] = ' '
            else:
              row[i] = '{:.2f}'.format(float(row[i]))
        w.writerow(row)

# begin main program
db = connectToDatabase()
FondDuLac=db.get('FondDuLac.Precip-Inc.Total.1Hour.1Hour.GOES-raw')
Berlin=db.get('Berlin.Precip-Inc.Total.1Hour.1Hour.GOES-raw')
Poygan=db.get('Poygan.Precip-Inc.Total.1Hour.1Hour.GOES-raw')
Waupaca=db.get('Waupaca.Precip-Inc.Total.1Hour.1Hour.GOES-raw')
Royalton=db.get('Royalton.Precip-Inc.Total.1Hour.1Hour.GOES-raw')
NewLondon=db.get('NewLondon.Precip-Inc.Total.1Hour.1Hour.GOES-raw')
FritsePark=db.get('FritsePark.Precip-Inc.Total.1Hour.1Hour.GOES-raw')
Menasha=db.get('Menasha.Precip-Inc.Total.1Hour.1Hour.GOES-raw')
Oshkosh=db.get('Oshkosh.Precip-Inc.Total.1Hour.1Hour.GOES-raw')
Stockbridge=db.get('Stockbridge.Precip-Inc.Total.1Hour.1Hour.GOES-raw')

table = createTable(Oshkosh.times)
for precip in [FondDuLac,Berlin,Poygan,Waupaca,Royalton,NewLondon,FritsePark,Menasha,Oshkosh,Stockbridge]:
    addValueColumn(table,precip)

#addAverageColumn(table,[1,2,3,4]) # add computed average column 
#addValueColumn(table,Poygan)

header=['Date','FondDuLac','Berlin','Poygan', 'Waupaca','Royalton','New London','Fritse Park','Menasha','Oshkosh','Stockbridge']
#writeToCsv(table,header,R'/wm/lrc/h6cwpa04/local/wm_reports/precip_hr_today.csv')
writeToCsv(table,header,R'C:\temp\precip_hr_today.csv')
print(table)

db.done()
sys.exit()