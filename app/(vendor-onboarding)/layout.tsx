export default function VendorOnboardingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-3xl mx-auto py-8">
      {/* Step progress will go here */}
      {children}
    </div>
  )
}
