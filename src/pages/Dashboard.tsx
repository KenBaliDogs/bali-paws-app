import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()
  const donationHistory = [
    {
      id: '1',
      description: 'Kopi \u2014 Monthly',
      date: 'Feb 1, 2025',
      amount: '$25.00',
      status: 'Completed',
    },
    {
      id: '2',
      description: 'One-time donation',
      date: 'Jan 15, 2025',
      amount: '$50.00',
      status: 'Completed',
    },
    {
      id: '3',
      description: 'Kopi \u2014 Monthly',
      date: 'Jan 1, 2025',
      amount: '$25.00',
      status: 'Completed',
    },
  ]

  return (
    <div className="pb-8">
      {/* ── Header ── */}
      <header className="pt-5 pb-2">
        <h1 className="text-center text-lg font-extrabold">My Account</h1>
      </header>

      {/* ── Profile Card ── */}
      <div className="bg-dark rounded-2xl p-6 mx-6 mt-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric to-lime flex items-center justify-center">
          <span className="text-black font-black text-xl">MK</span>
        </div>
        <h2 className="text-xl font-extrabold mt-3">Maria K.</h2>
        <p className="text-xs text-gray">Member since January 2025</p>

        <div className="flex gap-4 mt-4">
          <div className="bg-charcoal rounded-xl px-4 py-3">
            <span className="block font-bold text-white">$75</span>
            <span className="text-xs text-gray">donated</span>
          </div>
          <div className="bg-charcoal rounded-xl px-4 py-3">
            <span className="block font-bold text-white">1</span>
            <span className="text-xs text-gray">dog sponsored</span>
          </div>
        </div>
      </div>

      {/* ── My Sponsored Dogs ── */}
      <section className="mt-8 px-6">
        <h3 className="font-extrabold mb-4">My Sponsored Dogs</h3>

        <div className="bg-dark rounded-2xl overflow-hidden">
          {/* Image placeholder */}
          <div className="h-32 bg-gradient-to-br from-charcoal via-dark to-charcoal" />

          <div className="p-4">
            <div className="flex items-center justify-between">
              <h4 className="font-extrabold text-white">Kopi</h4>
              <span className="text-electric font-bold">$25/mo</span>
            </div>
            <p className="text-xs text-gray mt-1">Next payment: Mar 1, 2025</p>
            <button
              onClick={() => navigate('/dogs/dog-001')}
              className="text-teal text-xs font-semibold mt-2"
            >
              View updates
            </button>
          </div>
        </div>
      </section>

      {/* ── Donation History ── */}
      <section className="mt-8 px-6 mb-8">
        <h3 className="font-extrabold mb-4">Donation History</h3>

        <div>
          {donationHistory.map((donation) => (
            <div
              key={donation.id}
              className="flex justify-between items-center py-4 border-b border-charcoal last:border-0"
            >
              <div>
                <p className="text-sm font-semibold text-white">
                  {donation.description}
                </p>
                <p className="text-xs text-gray">{donation.date}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-white">{donation.amount}</p>
                <p className="text-xs text-teal">{donation.status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Settings ── */}
      <section className="mt-4 px-6 mb-8">
        <div className="bg-dark rounded-2xl">
          <div className="flex justify-between py-4 px-5 text-sm border-b border-charcoal">
            <span className="text-white">Currency Preference</span>
            <span className="text-gray">USD</span>
          </div>
          <div className="flex justify-between py-4 px-5 text-sm border-b border-charcoal">
            <span className="text-white">Email</span>
            <span className="text-gray">maria@example.com</span>
          </div>
          <div className="flex justify-between py-4 px-5 text-sm">
            <span className="text-red-400">Sign Out</span>
          </div>
        </div>
      </section>
    </div>
  )
}
