import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import BarChart from 'recharts/lib/chart/BarChart';
import Bar from 'recharts/lib/cartesian/Bar';
import XAxis from 'recharts/lib/cartesian/XAxis';
import Tooltip from 'recharts/lib/component/Tooltip';

const SimpleLineChart = ({ theme, data }) => {

  return (
    <ResponsiveContainer width="99%" height={225}>
      <BarChart data={data}>
        <XAxis dataKey="name"/>
        <Tooltip/>
        <Bar dataKey="Type" stackId="a" fill={theme.palette.primary.main} />
        <Bar dataKey="OtherType" stackId="a" fill={theme.palette.secondary.light} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default withTheme()(SimpleLineChart);
