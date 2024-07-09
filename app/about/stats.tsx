import React from 'react';

interface StatsProps {
  value: string;
  description: string;
}

const Stats = ({ value, description }: StatsProps) => {
  return (
    <div className="hivekind-stats-wrapper">
      <div className="margin-bottom margin-xxsmall">
        <div className="text-align-center">
          <div className="heading-style-h2">{value}</div>
        </div>
      </div>
      <div className="text-align-center">{description}</div>
    </div>
  );
};

export default Stats;
