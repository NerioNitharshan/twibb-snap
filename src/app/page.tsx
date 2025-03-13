import TwibbonCard from "@/components/TwibbonCard";

export default function Home() {
  return (
    <>
      {/* component */}
      <section className="bg-[#0d2118]">
        <div className="py-16">
          <div className="mx-auto px-6 max-w-6xl text-[#fcfcd1]">
            <div className="text-center">
              <h2 className="text-5xl text-[#ffcd06] font-semibold">
              175 Years of Fide Et Labore
              </h2>
              <p className="text-lg mt-6 text-White">
              Celebrate the 175th anniversary of St. Patrick’s College, Jaffna by adding a special commemorative frame to your images! Showcase your Patrician pride and be part of this historic milestone with customized photo frames designed for the occasion
              </p>
            </div>
            <div className="mt-12">
              <TwibbonCard shadowColor="green" twibbonFileName="twibbon.png" />
            </div>
          </div>
        </div>
      </section>
    </>


  )
}