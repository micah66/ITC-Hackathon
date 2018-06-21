import csv
import sqlite3
# import os
import numpy as np
# import pandas as pd
from collections import Counter

FILENAME = r"C:\Users\leohe\PycharmProjects\ITC\Hackathon\database.sqlite"

ARGENTINA = ['Sergio Romero','Franco Armani','Wilfredo Caballero',
             'Cristian Daniel Ansaldi', 'Marcos Rojo', 'Marcos Acuna',
             'Nicolas Tagliafico', 'Gabriel Mercado', 'Nicolas Otamendi',
             'Javier Mascherano', 'Federico Fazio', 'Ever Banega',
             'Lucas Biglia', 'Giovani Lo Celso', 'Eduardo Salvio',
             'Cristian Pavon', 'Maximiliano Meza', 'Angel Di Maria',
             'Manuel Lanzini', 'Lionel Messi', 'Paulo Dybala',
             'Sergio Aguero', 'Gonzalo Higuain']

GERMANY = ['Manuel Neuer', 'Marc-Andre ter Stegen', 'Kevin Trapp',
           'Jerome Boateng', 'Matthias Ginter', 'Jonas Hector',
           'Mats Hummels', 'Joshua Kimmich', 'Marvin Plattenhardt',
           'Antonio Ruediger', 'Niklas Suele', 'Julian Brandt',
           'Julian Draxler', 'Leon Goretzka', 'Ilkay Guendogan',
           'Sami Khedira', 'Toni Kroos', 'Mesut Oezil', 'Sebastian Rudy',
           'Mario Gomez', 'Thomas Mueller', 'Marco Reus', 'Timo Werner']

FRANCE = ['Alphonse Areola','Hugo Lloris','Steve Mandanda', 'Adil Rami',
          'Raphael Varane','Presnel Kimpembe', 'Benjamin Mendy',
          'Benjamin Pavard','Lucas Hernandez','Samuel Umtiti',
          'Corentin Tolisso','Nabil Fekir',"N'Golo Kanté",
          'Blaise Matuidi', 'Paul Pogba','Djibril Sidibe','Thomas Lemar',
          'Florian Thauvin', "Steven NZonzi",'Antoine Griezmann',
          'Olivier Giroud','Ousmane Dembele', 'Kylian Mbappe Lottin']

BARCELONA = ['Marc-Andre ter Stegen', 'Gerard Pique', 'Ivan Rakitic',
             'Sergio Busquets', 'Denis Suarez', 'Arda Turan', 'Andres Iniesta',
             'Luis Suarez', 'Lionel Messi', 'Neymar', 'Rafinha Alcantra',
             'Jasper Cillessen', 'Javier Mascherano', 'Francisco Alcacer',
             'Jordi Alba', 'Lucas Digne', 'Andre Gomes', 'Aleix Vidal',
             'Samuel Umtiti', 'Jeremy Mathieu', 'Jordi Masip']


def performance_index(player_name, readiness):
    #     print(player_name)
    pos_dict = {'goal_keeper': 0,
                'attacker_left': 1,
                'attacker_middle': 2,
                'attacker_right': 3,
                'midfield_left': 4,
                'midfield_middle': 5,
                'midfield_right': 6,
                'defender_left': 7,
                'defender_middle': 8,
                'defender_right': 9}

    metricsTable = "coef_updated.csv"
    with open(metricsTable) as f:
        reader = csv.reader(f)
        metricsList = [r for r in reader]
    relevantMetricsNames = metricsList[0][1:]
    floatMetricsList = [[float(perc) for perc in playerMetrics[1:]] for
                        playerMetrics in metricsList[1:]]

    query_data = ",".join(
        ['AVG({})'.format(el) for el in relevantMetricsNames])

    with sqlite3.connect(FILENAME) as con:
        cur = con.cursor()
        p_pos = cur.execute(
            "SELECT position FROM player WHERE player_name LIKE '{}';".format(
                player_name)).fetchall()
        #         print(p_pos)
        if len(p_pos) == 0 or p_pos[0][0] is None:
            return 0
        #         print(p_pos)
        position = p_pos[0][0]
        p_pos = pos_dict[p_pos[0][0]]
        p_att = cur.execute("""SELECT * 
                            FROM (SELECT player_api_id, 
                                  {} 
                                  FROM Player_Attributes 
                                  GROUP BY player_api_id) 
                            WHERE player_api_id = (
                                  SELECT player_api_id 
                                  FROM player 
                                  WHERE player_name 
                                  LIKE "{}");""".format(query_data,
                                                        player_name)).fetchall()
        player_att = list(p_att[0][1:])
        performance = readiness * (
                    np.array(floatMetricsList[p_pos]) @ np.array(
                         player_att))
        return position.split("_")[0], performance


def get_roster(team_list, tactic, readiness_list):
    tactic = '1-' + tactic
#     print(tactic)
    team = {}
    positions = []
    for name, ready in zip(team_list, readiness_list):
        player_performance = performance_index(name, ready)
        positions += [player_performance[0]]
        team[name] = player_performance
#     print(Counter(positions))
    positions = list(set(positions))
#     print(team)
#     print(sorted(positions))
    p_names = sorted(team, key=team.get, reverse=True)
    lineup = []
    for index, pos in enumerate(tactic.split('-')):
        if index == 0:
            lineup += int(pos)*['goal']
        elif index == 1:
            lineup += int(pos)*['defender']
        elif index == 2:
            lineup += int(pos)*['midfield']
        else:
            lineup += int(pos)*['attacker']
#     print(lineup)
    roster_n = []
    team_score = 0
    for pos in lineup:
        for names in p_names:
            if team[names][0] == pos:
                if names not in roster_n:
                    roster_n += [names]
                    team_score += team[names][1]
                    break
    return team_score, lineup, roster_n, team


def main():
    tactic = '4-4-2'
    team_score, lineup, players_name, team = \
        get_roster(GERMANY, tactic, np.ones(23))
    print("Team Score:\t{}".format(team_score))
    for pos, name in zip(lineup, players_name):
        print("{} \t{}".format(pos, name))


if __name__ == '__main__':
    main()
