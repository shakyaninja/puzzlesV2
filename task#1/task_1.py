import csv
file = open('../csv-sample.csv')
csv_file = csv.reader(file)
rows = len(list(csv_file))
print("Number of rows in csv file: ",rows)
