
export default function Spinner() {
  return (
    <div className="flex justify-center items-center">
      <style>{`
        @keyframes premiumSpin {
          0% {
            transform: rotate(0deg);
            box-shadow: 0 0 15px rgba(199, 120, 115, 0.4);
          }
          100% {
            transform: rotate(360deg);
            box-shadow: 0 0 25px rgba(199, 120, 115, 0.6);
          }
        }
      `}</style>
      <div 
        className="w-12 h-12 rounded-full animate-spin"
        style={{
          border: '4px solid rgba(199, 120, 115, 0.25)',
          borderTop: '4px solid #C97873',
          borderRight: '4px solid #E08A83',
          animation: 'premiumSpin 1s linear infinite',
          boxShadow: '0 0 15px rgba(199, 120, 115, 0.4)'
        }}
      />
    </div>
  )
}
