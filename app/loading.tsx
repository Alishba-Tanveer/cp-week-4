export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-[#303a46] border-t-[#5eead4]" />

        <p className="mt-5 text-sm font-bold text-[#aeb9c5]">
          Loading countries...
        </p>
      </div>
    </div>
  );
}