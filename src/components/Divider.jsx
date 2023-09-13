export default function Divider() {
  return (
    <div className="relative py-2">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-500" />
      </div>
    </div>
  )
}

// https://tailwindui.com/components/application-ui/layout/dividers