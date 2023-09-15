export default function SheetExperienceBar(props) {
  const currentGaugeWidth = () =>
    (props.experience.current / (props.experience.max - props.experience.min)) * 100 + "%";
  
    const spentGaugeWidth = () =>
    (props.experience.spent / (props.experience.max - props.experience.min)) * 100 + "%";
    
  console.log(props)

  return (
    <div className="relative z-0 m-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 border border-gray-700">
      <div
        className="absolute z-10 bg-blue-600 h-2 rounded-full"
        style={{ width: currentGaugeWidth() }}
      ></div>
      <div
        className="absolute z-20 bg-black h-2 rounded-full"
        style={{ width: spentGaugeWidth() }}
      ></div>
    </div>
  );
}
