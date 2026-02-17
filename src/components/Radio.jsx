import { RadioOption } from "./RadioOption"

export const Radio = ({ selectedRadio, setSelectedRadio }) => (
  <div className="flex flex-col gap-6 bg-gray-900 border-2 border-gray-700 rounded-lg p-4 absolute bottom-18 left-8 max-w-[40%]">
    <h3 className="text-xl text-violet-100 font-bold">Radio</h3>

    <div className="flex flex-wrap items-center gap-4">
      {mockRadioData.map((radio) => (
        <RadioOption
          key={radio}
          radioName={radio}
          isSelected={radio === selectedRadio}
          onClick={() => setSelectedRadio(radio)}
        />
      ))}
    </div>
  </div>
)

const mockRadioData = [
  "Hip Hop",
  "Jazz",
  "Bossa Nova",
  "Synthwave",
  "Classical",
  "Piano",
  "Guitar",
  "Asian",
]
