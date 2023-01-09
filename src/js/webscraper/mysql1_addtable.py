import mysql.connector

conn = mysql.connector.connect(host="localhost",user='root',password='root123',database='main') 

c = conn.cursor()

c.execute("""CREATE TABLE reviews1 (
     product text,
     review text,
     date text,
     rating text,
     sentiment text
 )""")

c.execute("""CREATE TABLE keywords (
     keyword text,
     Mentions text,
     sentiment text,
     averagerating text
    
 )""")

c.execute("""CREATE TABLE keyword_specific (
     review text,
     sentiment text,
     rating text,
     date text,
     product text
    
 )""")

c.execute("""CREATE TABLE productnames (
     product text
    
 )""")

c.execute("""CREATE TABLE productnames2 (
     product text
    
 )""")

c.execute("""CREATE TABLE keywordnames (
     keyword text
    
 )""")

c.execute("""CREATE TABLE amazonlink (
    product text,
    link text
    
)""")
conn.commit()
conn.close()
