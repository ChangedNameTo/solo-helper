import { useRef, useEffect } from "react";

import { IronswornCharacter } from "./IronswornCharacter";
import SheetGauge from "./CharacterSheetComponents/SheetGauge";
import SheetStat from "./CharacterSheetComponents/SheetStat";
import SheetVow from "./CharacterSheetComponents/SheetVow";
import SheetBond from "./CharacterSheetComponents/SheetBond";
import SheetCondition from "./CharacterSheetComponents/SheetCondition";
import SheetBane from "./CharacterSheetComponents/SheetBane";
import SheetBurden from "./CharacterSheetComponents/SheetBurden";
import SheetCompanion from "./CharacterSheetComponents/SheetCompanion";
import SheetAsset from "./CharacterSheetComponents/SheetAsset";
import SheetExperienceBar from "./CharacterSheetComponents/SheetExperienceBar";

export default function CharacterSheet() {
  const characterSheetRef = useRef(null);

  // Calculate the maximum height based on the viewport size
  const calculateMaxHeight = () => {
    const viewportHeight = window.innerHeight;
    const headerHeight = 68; // Adjust this value based on your header size
    return viewportHeight - headerHeight;
  };

  useEffect(() => {
    // Update the maximum height when the viewport is resized
    const handleResize = () => {
      const maxHeight = calculateMaxHeight();
      characterSheetRef.current.style.maxHeight = `${maxHeight}px`;
    };

    window.addEventListener("resize", handleResize);

    // Initial calculation and set
    const initialMaxHeight = calculateMaxHeight();
    characterSheetRef.current.style.maxHeight = `${initialMaxHeight}px`;

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="overflow-scroll bg-gray-100" ref={characterSheetRef}>
      {/* Name */}
      <div className="text-xl font-bold text-center border border-1">
        {IronswornCharacter.name}
      </div>

      <div className="mx-2 flex flex-col shadow-sm rounded-md bg-white">
        <div className="text-l font-semibold text-center">Experience</div>
        <SheetExperienceBar experience={IronswornCharacter.experience} />
      </div>

      {/* Stats */}
      <div className="overflow-hidden bg-white rounded-md shadow-sm m-2 border-gray-200 border">
        <div className="border-b border-gray-200 bg-white px-4 py-2">
          <h2 className="text-large font-semibold leading-6 text-gray-900">
            Stats
          </h2>
        </div>
        <ul role="list" className="flex flex-col">
          {IronswornCharacter.stats.map((stat, idx, arr) => (
            <SheetStat stat={stat} idx={idx} key={stat.name} arr={arr} />
          ))}
        </ul>
      </div>

      {/* Gauges */}
      <div className="text-l font-semibold text-center">Gauges</div>
      <ul role="list" className="mx-2 flex flex-col gap-2">
        {IronswornCharacter.gauges.map((gauge, idx) => (
          <SheetGauge gauge={gauge} key={gauge.name} />
        ))}
      </ul>

      {/* Vows */}
      <div className="text-l font-semibold text-center">Vows</div>
      <ul role="list" className="mx-2 flex flex-col gap-2">
        {IronswornCharacter.vows.map((vow, idx) => (
          <SheetVow vow={vow} key={vow.name} />
        ))}
      </ul>

      {/* Bonds */}
      <div className="text-l font-semibold text-center">Bonds</div>
      <ul role="list" className="mx-2 flex flex-col gap-2">
        {IronswornCharacter.bonds.bonds.map((bond) => (
          <SheetBond bond={bond} key={bond.name} />
        ))}
      </ul>

      {/* Debilities */}
      <div className="text-l font-semibold text-center">Debilities</div>

      {/* Conditions */}
      <div className="overflow-hidden bg-white rounded-md shadow-sm mx-2">
        <div className="border-b border-gray-200 bg-white px-4 py-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Conditions
          </h3>
        </div>
        <ul role="list" className="divide-y divide-gray-200">
          {IronswornCharacter.conditions.map((condition) => (
            <SheetCondition condition={condition} key={condition.name} />
          ))}
        </ul>
      </div>

      {/* Banes */}
      <div className="overflow-hidden bg-white rounded-md shadow-sm mx-2 my-2">
        <div className="border-b border-gray-200 bg-white px-4 py-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Banes
          </h3>
        </div>
        <ul role="list" className="divide-y divide-gray-200">
          {IronswornCharacter.banes.map((bane) => (
            <SheetBane bane={bane} key={bane.name} />
          ))}
        </ul>
      </div>

      {/* Burdens */}
      <div className="overflow-hidden bg-white rounded-md shadow-sm mx-2 my-2">
        <div className="border-b border-gray-200 bg-white px-4 py-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Burdens
          </h3>
        </div>
        <ul role="list" className="divide-y divide-gray-200">
          {IronswornCharacter.burdens.map((burden) => (
            <SheetBurden burden={burden} key={burden.name} />
          ))}
        </ul>
      </div>

      {/* Assets */}
      <div className="text-l font-semibold text-center">Assets</div>

      {/* Companions */}
      <div className="overflow-hidden bg-white rounded-md shadow-sm mx-2 my-2">
        <div className="border-b border-gray-200 bg-white px-4 py-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Companions
          </h3>
        </div>
        <ul role="list" className="divide-y divide-gray-200">
          {IronswornCharacter.companions.map((companion) => (
            <SheetCompanion companion={companion} key={companion.name} />
          ))}
        </ul>
      </div>

      {/* Paths */}
      <div className="overflow-hidden bg-white rounded-md shadow-sm mx-2 my-2">
        <div className="border-b border-gray-200 bg-white px-4 py-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Paths
          </h3>
        </div>
        <ul role="list" className="divide-y divide-gray-200">
          {IronswornCharacter.paths.map((path) => (
            <SheetAsset asset={path} key={path.name} />
          ))}
        </ul>
      </div>

      {/* Talents */}
      <div className="overflow-hidden bg-white rounded-md shadow-sm mx-2 my-2">
        <div className="border-b border-gray-200 bg-white px-4 py-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Talents
          </h3>
        </div>
        <ul role="list" className="divide-y divide-gray-200">
          {IronswornCharacter.talents.map((talent) => (
            <SheetAsset asset={talent} key={talent.name} />
          ))}
        </ul>
      </div>

      {/* Rituals */}
      <div className="overflow-hidden bg-white rounded-md shadow-sm mx-2 my-2">
        <div className="border-b border-gray-200 bg-white px-4 py-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Rituals
          </h3>
        </div>
        <ul role="list" className="divide-y divide-gray-200">
          {IronswornCharacter.rituals.map((ritual) => (
            <SheetAsset asset={ritual} key={ritual.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}
