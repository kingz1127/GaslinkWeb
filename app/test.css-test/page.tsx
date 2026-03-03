
export default function TestPage() {
  return (
    <div className="space-y-4 p-8">
      <div className="bg-red-500 text-white p-4 rounded">
        If this is red with white text, Tailwind works!
      </div>
      <div className="bg-blue-500 text-white p-4 rounded">
        If this is blue, definitely works!
      </div>
      <div className="flex gap-4">
        <div className="bg-green-500 text-white p-4 w-20 h-20 flex items-center justify-center rounded">
          Box 1
        </div>
        <div className="bg-purple-500 text-white p-4 w-20 h-20 flex items-center justify-center rounded-full">
          Box 2
        </div>
      </div>
    </div>
  )
}