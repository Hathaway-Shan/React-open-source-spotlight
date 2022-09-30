import React from 'react';
import './Charts.css';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel, VictoryTheme } from 'victory';
import { usePokemon } from '../../hooks/usePokemon';

export default function Charts() {
  const { pokemon } = usePokemon();
  const data = pokemon.slice(5, 18);
  return (
    <div className="wrapper">
      <VictoryChart width={1000} domainPadding={20} theme={VictoryTheme.material}>
        <VictoryLabel text="Pokemon Speed" x={100} y={30} textAnchor="middle" />
        <VictoryAxis tickValues={[]} />
        <VictoryAxis dependentAxis tickFormat={(x) => `${x * 1}`} />
        <VictoryBar data={data} x={'pokemon'} y={'speed'} />
      </VictoryChart>
    </div>
  );
}
