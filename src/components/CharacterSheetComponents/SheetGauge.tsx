import * as React from "react";

export default function SheetGauge(gauge) {
  const textDecoration = (gaugeValue) => {
    if (gaugeValue > 0) {
      return "+";
    } else if (gaugeValue < 0) {
      return "-";
    } else {
      return " ";
    }
  };

  const gaugeWidth = () =>
    (gauge.current / (gauge.max - gauge.min)) * 100 + "%";

  return {
    name:gauge.name,
    value: textDecoration(gauge.current) + gauge.current,
    gaugeWidth: gaugeWidth(),
  }
}
