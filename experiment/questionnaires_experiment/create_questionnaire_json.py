import json
import pandas as pd

questionnaire_data = pd.read_csv('questionnaires.csv', sep=';')

data = {}

for i in questionnaire_data.Measure.unique():
    data[i] = dict(questions=[], preamble=questionnaire_data.Preamble[questionnaire_data.Measure == i].iloc[0],
                   name=i)
    for j in questionnaire_data[questionnaire_data.Measure == i].iterrows():
        print([i.strip() for i in j[1].Options.split(',') if len(i)])
        data[i]['questions'].append(dict(prompt=j[1].Question,
                                            labels=[i.strip() for i in j[1].Options.split(',') if len(i)]))

json_data = json.dumps(data)

with open('questionnaires.json', 'w') as outfile:
    json.dump(data, outfile)

