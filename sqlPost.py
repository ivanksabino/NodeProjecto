import postgresql
from datetime import datetime

db = postgresql.open('pq://ilitch:ilitch123@nodeprojecto.cjkvvca6w7zu.eu-west-2.rds.amazonaws.com:5432/postgres')
dateTime =  datetime.now().strftime("%H:%M:%S %d %m %Y")
print(dateTime)
for i in range(0,15):
    sql = """UPDATE public.testando \
            SET "userDate" = '""" + dateTime + """'\
            WHERE "userName" = '""" + "ivanPy" + str(i) + "';"
    print(sql)
    try:
        db.execute(sql)
        print("Subiu")
    except:
        print("erro")
