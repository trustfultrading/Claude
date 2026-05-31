// SVG diagram components for visual learning aids

export function OhmDreieck() {
  return (
    <div className="my-4 flex flex-col items-center">
      <svg width="220" height="200" viewBox="0 0 220 200" className="drop-shadow">
        {/* Triangle */}
        <polygon points="110,10 10,180 210,180" fill="#dbeafe" stroke="#2563eb" strokeWidth="2.5"/>
        {/* Dividing lines */}
        <line x1="110" y1="95" x2="10" y2="95" stroke="#2563eb" strokeWidth="2" strokeDasharray="6,3"/>
        <line x1="110" y1="95" x2="210" y2="95" stroke="#2563eb" strokeWidth="2" strokeDasharray="6,3"/>
        <line x1="110" y1="10" x2="110" y2="95" stroke="#2563eb" strokeWidth="2"/>
        {/* Labels */}
        <text x="110" y="70" textAnchor="middle" fontSize="26" fontWeight="bold" fill="#1d4ed8">U</text>
        <text x="110" y="85" textAnchor="middle" fontSize="11" fill="#3b82f6">Spannung [V]</text>
        <text x="55" y="148" textAnchor="middle" fontSize="26" fontWeight="bold" fill="#1d4ed8">R</text>
        <text x="55" y="162" textAnchor="middle" fontSize="11" fill="#3b82f6">Widerstand [Ω]</text>
        <text x="165" y="148" textAnchor="middle" fontSize="26" fontWeight="bold" fill="#1d4ed8">I</text>
        <text x="165" y="162" textAnchor="middle" fontSize="11" fill="#3b82f6">Strom [A]</text>
        {/* Operators */}
        <text x="110" y="105" textAnchor="middle" fontSize="14" fill="#6b7280">×</text>
      </svg>
      <div className="flex gap-6 mt-2 text-sm">
        <span className="bg-blue-100 px-3 py-1 rounded-lg font-mono text-blue-800">U = R × I</span>
        <span className="bg-blue-100 px-3 py-1 rounded-lg font-mono text-blue-800">R = U / I</span>
        <span className="bg-blue-100 px-3 py-1 rounded-lg font-mono text-blue-800">I = U / R</span>
      </div>
    </div>
  )
}

export function LeistungsDreieck() {
  return (
    <div className="my-4 flex flex-col items-center">
      <svg width="280" height="160" viewBox="0 0 280 160" className="drop-shadow">
        {/* Right angle box */}
        <rect x="20" y="20" width="240" height="120" rx="8" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2"/>
        {/* Right triangle */}
        <polygon points="40,130 40,40 230,130" fill="#dcfce7" stroke="#16a34a" strokeWidth="2.5"/>
        {/* Right angle marker */}
        <rect x="40" y="110" width="14" height="14" fill="none" stroke="#16a34a" strokeWidth="1.5"/>
        {/* Labels */}
        <text x="35" y="88" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#15803d">P</text>
        <text x="35" y="103" textAnchor="middle" fontSize="10" fill="#16a34a">Wirkl. [W]</text>
        <text x="138" y="148" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#15803d">Q</text>
        <text x="138" y="160" textAnchor="middle" fontSize="10" fill="#16a34a">Blindl. [var]</text>
        <text x="148" y="82" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#15803d">S</text>
        <text x="148" y="96" textAnchor="middle" fontSize="10" fill="#16a34a">Scheinl. [VA]</text>
        {/* Angle φ */}
        <path d="M 40 130 A 30 30 0 0 1 63 107" fill="none" stroke="#f59e0b" strokeWidth="2"/>
        <text x="72" y="120" fontSize="14" fill="#d97706" fontStyle="italic">φ</text>
      </svg>
      <div className="grid grid-cols-3 gap-2 mt-2 text-xs text-center">
        <span className="bg-green-100 px-2 py-1 rounded font-mono text-green-800">S² = P² + Q²</span>
        <span className="bg-green-100 px-2 py-1 rounded font-mono text-green-800">cos φ = P/S</span>
        <span className="bg-green-100 px-2 py-1 rounded font-mono text-green-800">P = S·cos φ</span>
      </div>
    </div>
  )
}

export function SternDreieck() {
  return (
    <div className="my-4 grid sm:grid-cols-2 gap-4">
      {/* Stern */}
      <div className="flex flex-col items-center bg-blue-50 rounded-xl p-4">
        <h4 className="font-bold text-blue-800 mb-3">⭐ Stern-Schaltung (Y)</h4>
        <svg width="160" height="160" viewBox="0 0 160 160">
          {/* Center point */}
          <circle cx="80" cy="80" r="5" fill="#2563eb"/>
          {/* Three wires to center */}
          <line x1="80" y1="80" x2="80" y2="15" stroke="#2563eb" strokeWidth="3"/>
          <line x1="80" y1="80" x2="15" y2="140" stroke="#ef4444" strokeWidth="3"/>
          <line x1="80" y1="80" x2="145" y2="140" stroke="#1a1a1a" strokeWidth="3"/>
          {/* Coil symbols */}
          {[[[75,15],[75,55]],[[15,140],[50,110]],[[145,140],[110,110]]].map(([a,b],i)=> null)}
          {/* Winding boxes */}
          <rect x="70" y="20" width="20" height="45" rx="4" fill="white" stroke="#2563eb" strokeWidth="2"/>
          <text x="80" y="47" textAnchor="middle" fontSize="10" fill="#2563eb">U1</text>
          <rect x="22" y="98" width="40" height="20" rx="4" fill="white" stroke="#ef4444" strokeWidth="2"/>
          <text x="42" y="112" textAnchor="middle" fontSize="10" fill="#ef4444">V1</text>
          <rect x="98" y="98" width="40" height="20" rx="4" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
          <text x="118" y="112" textAnchor="middle" fontSize="10" fill="#1a1a1a">W1</text>
          {/* Phase labels */}
          <text x="80" y="12" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">L1</text>
          <text x="8" y="155" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ef4444">L2</text>
          <text x="152" y="155" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a1a1a">L3</text>
          {/* Neutral N */}
          <text x="90" y="82" fontSize="11" fontWeight="bold" fill="#6b7280">N</text>
        </svg>
        <div className="text-xs text-blue-700 mt-2 space-y-1 text-center">
          <div>U_Strang = <strong>230 V</strong></div>
          <div>Anlaufstrom ÷ 3</div>
        </div>
      </div>
      {/* Dreieck */}
      <div className="flex flex-col items-center bg-orange-50 rounded-xl p-4">
        <h4 className="font-bold text-orange-800 mb-3">🔺 Dreieck-Schaltung (Δ)</h4>
        <svg width="160" height="160" viewBox="0 0 160 160">
          {/* Triangle */}
          <polygon points="80,15 10,140 150,140" fill="none" stroke="#9a3412" strokeWidth="2" strokeDasharray="4,2"/>
          {/* Winding boxes on each side */}
          <rect x="70" y="20" width="20" height="40" rx="4" fill="white" stroke="#2563eb" strokeWidth="2"/>
          <text x="80" y="44" textAnchor="middle" fontSize="10" fill="#2563eb">U1</text>
          <rect x="22" y="95" width="38" height="20" rx="4" fill="white" stroke="#ef4444" strokeWidth="2"/>
          <text x="41" y="109" textAnchor="middle" fontSize="10" fill="#ef4444">V1</text>
          <rect x="100" y="95" width="38" height="20" rx="4" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
          <text x="119" y="109" textAnchor="middle" fontSize="10" fill="#1a1a1a">W1</text>
          {/* Connections */}
          <line x1="80" y1="15" x2="80" y2="20" stroke="#2563eb" strokeWidth="3"/>
          <line x1="10" y1="140" x2="22" y2="115" stroke="#ef4444" strokeWidth="3"/>
          <line x1="150" y1="140" x2="138" y2="115" stroke="#1a1a1a" strokeWidth="3"/>
          {/* Phase labels */}
          <text x="80" y="12" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#2563eb">L1</text>
          <text x="3" y="155" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ef4444">L2</text>
          <text x="157" y="155" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1a1a1a">L3</text>
        </svg>
        <div className="text-xs text-orange-700 mt-2 space-y-1 text-center">
          <div>U_Strang = <strong>400 V</strong></div>
          <div>Volle Leistung im Betrieb</div>
        </div>
      </div>
      <div className="sm:col-span-2 bg-yellow-50 rounded-lg p-3 text-xs text-center text-yellow-800">
        <strong>Ablauf:</strong> Anlauf im Stern (3–5 s) → Umschalten → Betrieb im Dreieck
      </div>
    </div>
  )
}

export function WechselstromKurve() {
  const points = []
  for (let i = 0; i <= 360; i += 5) {
    const x = 20 + (i / 360) * 340
    const y = 80 - Math.sin((i * Math.PI) / 180) * 55
    points.push(`${x},${y}`)
  }
  const path = `M ${points.join(' L ')}`
  return (
    <div className="my-4 bg-gray-50 rounded-xl p-4">
      <svg width="380" height="160" viewBox="0 0 380 160" className="w-full">
        {/* Grid */}
        {[0,1,2,3,4].map(i => (
          <line key={i} x1={20 + i*85} y1="10" x2={20 + i*85} y2="150" stroke="#e5e7eb" strokeWidth="1"/>
        ))}
        {/* Axes */}
        <line x1="20" y1="80" x2="365" y2="80" stroke="#6b7280" strokeWidth="1.5"/>
        <line x1="20" y1="10" x2="20" y2="150" stroke="#6b7280" strokeWidth="1.5"/>
        {/* Sine wave */}
        <path d={path} fill="none" stroke="#2563eb" strokeWidth="2.5"/>
        {/* Shaded positive half */}
        <path d={`M 20,80 ${points.slice(0, 37).join(' L ')} L 190,80 Z`} fill="#dbeafe" opacity="0.5"/>
        {/* Labels */}
        <text x="370" y="84" fontSize="11" fill="#6b7280">t</text>
        <text x="5" y="14" fontSize="11" fill="#6b7280">u</text>
        <text x="22" y="35" fontSize="10" fill="#2563eb">+û</text>
        <text x="22" y="128" fontSize="10" fill="#2563eb">-û</text>
        <text x="22" y="77" fontSize="10" fill="#6b7280">0</text>
        {/* Markings */}
        <text x="95" y="155" fontSize="10" fill="#6b7280" textAnchor="middle">T/4</text>
        <text x="190" y="155" fontSize="10" fill="#6b7280" textAnchor="middle">T/2</text>
        <text x="275" y="155" fontSize="10" fill="#6b7280" textAnchor="middle">3T/4</text>
        <text x="360" y="155" fontSize="10" fill="#6b7280" textAnchor="middle">T</text>
        {/* Effective value line */}
        <line x1="20" y1="41" x2="365" y2="41" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6,3"/>
        <text x="200" y="38" fontSize="10" fill="#d97706" textAnchor="middle">U_eff = û / √2 = 230 V</text>
        {/* Arrow for û */}
        <line x1="110" y1="25" x2="110" y2="80" stroke="#2563eb" strokeWidth="1.5" strokeDasharray="4,2"/>
        <text x="115" y="50" fontSize="10" fill="#2563eb">û ≈ 325 V</text>
      </svg>
      <div className="flex justify-center gap-6 text-xs mt-1">
        <span className="flex items-center gap-1"><span className="inline-block w-6 h-1 bg-blue-500 rounded"/>Momentanwert u(t)</span>
        <span className="flex items-center gap-1"><span className="inline-block w-6 h-0.5 bg-yellow-500 rounded border-dashed border"/>U_eff = 230 V</span>
      </div>
    </div>
  )
}

export function DrehstromSystem() {
  const colors = ['#2563eb','#ef4444','#1a1a1a']
  const labels = ['L1','L2','L3']
  const offsets = [0, 120, 240]
  const allPoints = offsets.map(offset => {
    const pts = []
    for (let i = 0; i <= 360; i += 5) {
      const x = 15 + (i / 360) * 330
      const y = 70 - Math.sin(((i + offset) * Math.PI) / 180) * 45
      pts.push(`${x},${y}`)
    }
    return pts
  })
  return (
    <div className="my-4 bg-gray-50 rounded-xl p-4">
      <h4 className="text-sm font-semibold text-gray-700 mb-2 text-center">Drehstrom – 3 Phasen je 120° versetzt</h4>
      <svg width="360" height="140" viewBox="0 0 360 140" className="w-full">
        <line x1="15" y1="70" x2="350" y2="70" stroke="#d1d5db" strokeWidth="1"/>
        {allPoints.map((pts, i) => (
          <path key={i} d={`M ${pts.join(' L ')}`} fill="none" stroke={colors[i]} strokeWidth="2"/>
        ))}
        {labels.map((lbl, i) => (
          <text key={i} x="345" y={52 + i * 16} fontSize="11" fontWeight="bold" fill={colors[i]}>{lbl}</text>
        ))}
        <text x="15" y="135" fontSize="10" fill="#6b7280">0°</text>
        <text x="95" y="135" fontSize="10" fill="#6b7280">90°</text>
        <text x="178" y="135" fontSize="10" fill="#6b7280">180°</text>
        <text x="261" y="135" fontSize="10" fill="#6b7280">270°</text>
        <text x="332" y="135" fontSize="10" fill="#6b7280">360°</text>
      </svg>
      <div className="flex justify-center gap-4 text-xs mt-1">
        {labels.map((l, i) => (
          <span key={i} className="flex items-center gap-1">
            <span className="inline-block w-5 h-1 rounded" style={{backgroundColor: colors[i]}}/>
            {l} (230 V)
          </span>
        ))}
      </div>
    </div>
  )
}

export function FRLEinheit() {
  return (
    <div className="my-4 flex flex-col items-center">
      <svg width="320" height="130" viewBox="0 0 320 130" className="drop-shadow-sm">
        {/* Arrow in */}
        <defs>
          <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#374151"/>
          </marker>
        </defs>
        <line x1="10" y1="65" x2="45" y2="65" stroke="#374151" strokeWidth="2" markerEnd="url(#arr)"/>
        <text x="5" y="55" fontSize="10" fill="#374151">6 bar</text>
        {/* Filter */}
        <rect x="45" y="40" width="60" height="50" rx="8" fill="#dbeafe" stroke="#2563eb" strokeWidth="2"/>
        <text x="75" y="67" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#1d4ed8">F</text>
        <text x="75" y="104" textAnchor="middle" fontSize="10" fill="#2563eb">Filter</text>
        <line x1="105" y1="65" x2="120" y2="65" stroke="#374151" strokeWidth="2"/>
        {/* Regler */}
        <rect x="120" y="40" width="60" height="50" rx="8" fill="#dcfce7" stroke="#16a34a" strokeWidth="2"/>
        <text x="150" y="67" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#15803d">R</text>
        <text x="150" y="104" textAnchor="middle" fontSize="10" fill="#16a34a">Druckregler</text>
        <line x1="180" y1="65" x2="195" y2="65" stroke="#374151" strokeWidth="2"/>
        {/* Öler */}
        <rect x="195" y="40" width="60" height="50" rx="8" fill="#fef9c3" stroke="#ca8a04" strokeWidth="2"/>
        <text x="225" y="67" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#854d0e">L</text>
        <text x="225" y="104" textAnchor="middle" fontSize="10" fill="#ca8a04">Öler</text>
        {/* Arrow out */}
        <line x1="255" y1="65" x2="305" y2="65" stroke="#374151" strokeWidth="2" markerEnd="url(#arr)"/>
        <text x="275" y="55" fontSize="10" fill="#374151">sauber</text>
        <text x="270" y="80" fontSize="10" fill="#374151">geregelt</text>
        {/* Pressure indicator on R */}
        <circle cx="150" cy="28" r="12" fill="white" stroke="#16a34a" strokeWidth="1.5"/>
        <text x="150" y="32" textAnchor="middle" fontSize="9" fill="#15803d">bar</text>
      </svg>
      <p className="text-xs text-gray-500 mt-1">FRL-Wartungseinheit: immer am Eingang der Pneumatikanlage</p>
    </div>
  )
}

export function ZylinderDoppelt() {
  return (
    <div className="my-4 flex flex-col items-center">
      <svg width="340" height="160" viewBox="0 0 340 160">
        {/* Cylinder body */}
        <rect x="40" y="55" width="200" height="60" rx="4" fill="#e5e7eb" stroke="#374151" strokeWidth="2"/>
        {/* Piston */}
        <rect x="155" y="58" width="15" height="54" fill="#6b7280" stroke="#374151" strokeWidth="2"/>
        {/* Piston rod */}
        <rect x="170" y="76" width="100" height="18" fill="#9ca3af" stroke="#374151" strokeWidth="2"/>
        <text x="270" y="89" textAnchor="middle" fontSize="11" fill="#374151">→</text>
        {/* End caps */}
        <rect x="35" y="50" width="12" height="70" rx="2" fill="#374151"/>
        <rect x="235" y="50" width="12" height="70" rx="2" fill="#374151"/>
        {/* Port A (left) */}
        <line x1="80" y1="55" x2="80" y2="30" stroke="#2563eb" strokeWidth="2.5"/>
        <circle cx="80" cy="26" r="6" fill="#2563eb"/>
        <text x="80" y="18" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#2563eb">A</text>
        {/* Port B (right) */}
        <line x1="200" y1="55" x2="200" y2="30" stroke="#ef4444" strokeWidth="2.5"/>
        <circle cx="200" cy="26" r="6" fill="#ef4444"/>
        <text x="200" y="18" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#ef4444">B</text>
        {/* Labels */}
        <text x="120" y="92" textAnchor="middle" fontSize="10" fill="#6b7280">Kolben</text>
        <text x="220" y="107" textAnchor="middle" fontSize="10" fill="#6b7280">Kolbenstange</text>
        {/* Arrows for forces */}
        <text x="40" y="145" fontSize="10" fill="#2563eb">Druck auf A → Ausfahren ▶</text>
        <text x="40" y="158" fontSize="10" fill="#ef4444">Druck auf B → Einfahren ◀</text>
      </svg>
    </div>
  )
}

export function FrequenzumrichterSchema() {
  return (
    <div className="my-4 flex flex-col items-center">
      <svg width="380" height="110" viewBox="0 0 380 110">
        <defs>
          <marker id="a2" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
            <path d="M0,0 L0,6 L7,3 z" fill="#374151"/>
          </marker>
        </defs>
        {/* Netz */}
        <rect x="5" y="30" width="55" height="50" rx="6" fill="#fee2e2" stroke="#dc2626" strokeWidth="1.5"/>
        <text x="32" y="52" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#dc2626">Netz</text>
        <text x="32" y="65" textAnchor="middle" fontSize="9" fill="#dc2626">400V</text>
        <text x="32" y="77" textAnchor="middle" fontSize="9" fill="#dc2626">50 Hz AC</text>
        <line x1="60" y1="55" x2="80" y2="55" stroke="#374151" strokeWidth="2" markerEnd="url(#a2)"/>
        {/* Gleichrichter */}
        <rect x="80" y="30" width="65" height="50" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
        <text x="112" y="52" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#2563eb">Gleich-</text>
        <text x="112" y="64" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#2563eb">richter</text>
        <text x="112" y="76" textAnchor="middle" fontSize="9" fill="#2563eb">AC→DC</text>
        <line x1="145" y1="55" x2="165" y2="55" stroke="#374151" strokeWidth="2" markerEnd="url(#a2)"/>
        {/* Zwischenkreis */}
        <rect x="165" y="30" width="65" height="50" rx="6" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5"/>
        <text x="197" y="52" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#15803d">Zwischen-</text>
        <text x="197" y="64" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#15803d">kreis</text>
        <text x="197" y="76" textAnchor="middle" fontSize="9" fill="#15803d">~560V DC</text>
        <line x1="230" y1="55" x2="250" y2="55" stroke="#374151" strokeWidth="2" markerEnd="url(#a2)"/>
        {/* Wechselrichter */}
        <rect x="250" y="30" width="65" height="50" rx="6" fill="#fef9c3" stroke="#ca8a04" strokeWidth="1.5"/>
        <text x="282" y="52" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#854d0e">Wechsel-</text>
        <text x="282" y="64" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#854d0e">richter</text>
        <text x="282" y="76" textAnchor="middle" fontSize="9" fill="#854d0e">DC→AC</text>
        <line x1="315" y1="55" x2="335" y2="55" stroke="#374151" strokeWidth="2" markerEnd="url(#a2)"/>
        {/* Motor */}
        <rect x="335" y="30" width="40" height="50" rx="6" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5"/>
        <text x="355" y="52" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7c3aed">Mo-</text>
        <text x="355" y="64" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7c3aed">tor</text>
        <text x="355" y="76" textAnchor="middle" fontSize="9" fill="#7c3aed">0-50Hz</text>
        {/* Bottom label */}
        <text x="190" y="102" textAnchor="middle" fontSize="10" fill="#6b7280">Frequenz variabel → Drehzahl variabel</text>
      </svg>
    </div>
  )
}

export function PT100Anschluss() {
  return (
    <div className="my-4 grid grid-cols-3 gap-3">
      {[
        { title: '2-Leiter', color: '#ef4444', desc: 'Leitungswiderstand verfälscht Messung', wires: 2 },
        { title: '3-Leiter', color: '#f59e0b', desc: 'Einseitige Kompensation', wires: 3 },
        { title: '4-Leiter', color: '#16a34a', desc: 'Vollständige Kompensation (beste Genauigkeit)', wires: 4 },
      ].map(({ title, color, desc, wires }) => (
        <div key={title} className="flex flex-col items-center bg-gray-50 rounded-xl p-3">
          <div className="font-semibold text-sm mb-2" style={{ color }}>{title}</div>
          <svg width="90" height="90" viewBox="0 0 90 90">
            {/* Sensor */}
            <rect x="30" y="50" width="30" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
            <text x="45" y="69" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1d4ed8">PT100</text>
            {/* Wires based on count */}
            {wires >= 2 && <>
              <line x1="35" y1="50" x2="20" y2="10" stroke="#ef4444" strokeWidth="2"/>
              <line x1="55" y1="50" x2="70" y2="10" stroke="#1a1a1a" strokeWidth="2"/>
              <circle cx="20" cy="8" r="4" fill="#ef4444"/>
              <circle cx="70" cy="8" r="4" fill="#1a1a1a"/>
            </>}
            {wires >= 3 && <>
              <line x1="45" y1="50" x2="45" y2="10" stroke="#16a34a" strokeWidth="2"/>
              <circle cx="45" cy="8" r="4" fill="#16a34a"/>
            </>}
            {wires >= 4 && <>
              <line x1="40" y1="50" x2="27" y2="10" stroke="#2563eb" strokeWidth="2"/>
              <circle cx="27" cy="8" r="4" fill="#2563eb"/>
            </>}
          </svg>
          <p className="text-xs text-gray-600 text-center mt-1">{desc}</p>
        </div>
      ))}
    </div>
  )
}

export function LogikGatter() {
  const gates = [
    { name: 'AND', symbol: '&', color: '#2563eb', bg: '#dbeafe', truth: [['0','0','0'],['0','1','0'],['1','0','0'],['1','1','1']], desc: 'Alle=1 → 1' },
    { name: 'OR', symbol: '≥1', color: '#16a34a', bg: '#dcfce7', truth: [['0','0','0'],['0','1','1'],['1','0','1'],['1','1','1']], desc: 'Eines=1 → 1' },
    { name: 'NOT', symbol: '1', color: '#7c3aed', bg: '#ede9fe', truth: [['0','1'],['1','0']], desc: 'Invertierung' },
    { name: 'XOR', symbol: '=1', color: '#d97706', bg: '#fef9c3', truth: [['0','0','0'],['0','1','1'],['1','0','1'],['1','1','0']], desc: 'Verschieden → 1' },
  ]
  return (
    <div className="my-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
      {gates.map(g => (
        <div key={g.name} className="rounded-xl p-3 text-center" style={{ background: g.bg, border: `1.5px solid ${g.color}` }}>
          <div className="font-bold text-sm mb-2" style={{ color: g.color }}>{g.name}</div>
          <svg width="60" height="44" viewBox="0 0 60 44" className="mx-auto mb-2">
            <rect x="10" y="2" width="40" height="40" rx="6" fill="white" stroke={g.color} strokeWidth="2"/>
            <text x="30" y="26" textAnchor="middle" fontSize="14" fontWeight="bold" fill={g.color}>{g.symbol}</text>
            {/* Input lines */}
            <line x1="0" y1="14" x2="10" y2="14" stroke={g.color} strokeWidth="1.5"/>
            {g.truth[0].length > 2 && <line x1="0" y1="30" x2="10" y2="30" stroke={g.color} strokeWidth="1.5"/>}
            {/* Output line + circle for NOT */}
            <line x1="50" y1="22" x2="60" y2="22" stroke={g.color} strokeWidth="1.5"/>
          </svg>
          <table className="text-xs mx-auto border-collapse">
            <thead>
              <tr>{g.truth[0].map((_, i) => <th key={i} className="px-1.5 font-medium" style={{ color: g.color }}>{i < g.truth[0].length - 1 ? String.fromCharCode(65+i) : 'Y'}</th>)}</tr>
            </thead>
            <tbody>
              {g.truth.map((row, i) => (
                <tr key={i}>
                  {row.map((v, j) => (
                    <td key={j} className={`px-1.5 rounded ${v === '1' ? 'font-bold' : 'text-gray-400'}`} style={{ color: v === '1' ? g.color : undefined }}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-xs mt-1 text-gray-500">{g.desc}</div>
        </div>
      ))}
    </div>
  )
}

export function KirchhoffKnoten() {
  return (
    <div className="my-4 flex flex-col items-center">
      <svg width="280" height="180" viewBox="0 0 280 180">
        {/* Node */}
        <circle cx="140" cy="90" r="10" fill="#2563eb"/>
        {/* Currents flowing IN */}
        <line x1="30" y1="40" x2="133" y2="83" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#a3)"/>
        <line x1="30" y1="90" x2="130" y2="90" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#a3)"/>
        {/* Currents flowing OUT */}
        <line x1="147" y1="97" x2="220" y2="150" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#a3)"/>
        <line x1="150" y1="90" x2="260" y2="90" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#a3)"/>
        <line x1="147" y1="83" x2="230" y2="40" stroke="#ef4444" strokeWidth="2.5" markerEnd="url(#a3)"/>
        <defs>
          <marker id="a3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="currentColor"/>
          </marker>
        </defs>
        {/* Labels */}
        <text x="20" y="35" fontSize="12" fontWeight="bold" fill="#16a34a">I₁</text>
        <text x="15" y="88" fontSize="12" fontWeight="bold" fill="#16a34a">I₂</text>
        <text x="225" y="158" fontSize="12" fontWeight="bold" fill="#ef4444">I₃</text>
        <text x="262" y="88" fontSize="12" fontWeight="bold" fill="#ef4444">I₄</text>
        <text x="232" y="35" fontSize="12" fontWeight="bold" fill="#ef4444">I₅</text>
        {/* Equation */}
        <rect x="60" y="155" width="160" height="22" rx="4" fill="#dbeafe"/>
        <text x="140" y="170" textAnchor="middle" fontSize="12" fill="#1d4ed8">I₁ + I₂ = I₃ + I₄ + I₅</text>
        {/* Legend */}
        <line x1="35" y1="168" x2="55" y2="168" stroke="#16a34a" strokeWidth="2"/>
        <text x="38" y="178" fontSize="9" fill="#16a34a">zufliessend</text>
      </svg>
    </div>
  )
}

export function SchutzleiterpruefungSchema() {
  return (
    <div className="my-4 flex flex-col items-center">
      <svg width="300" height="130" viewBox="0 0 300 130">
        {/* Schaltschrank */}
        <rect x="10" y="10" width="120" height="80" rx="6" fill="#f3f4f6" stroke="#374151" strokeWidth="2"/>
        <text x="70" y="35" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#374151">Schaltschrank</text>
        {/* PE Schiene */}
        <rect x="20" y="50" width="90" height="12" rx="2" fill="#fef08a" stroke="#ca8a04" strokeWidth="1.5"/>
        <text x="65" y="60" textAnchor="middle" fontSize="9" fill="#854d0e">PE-Schiene</text>
        {/* Ground symbol */}
        <line x1="70" y1="90" x2="70" y2="110" stroke="#374151" strokeWidth="2"/>
        <line x1="55" y1="110" x2="85" y2="110" stroke="#374151" strokeWidth="2.5"/>
        <line x1="60" y1="115" x2="80" y2="115" stroke="#374151" strokeWidth="2"/>
        <line x1="65" y1="120" x2="75" y2="120" stroke="#374151" strokeWidth="1.5"/>
        {/* Measuring instrument */}
        <rect x="190" y="30" width="80" height="55" rx="6" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.5"/>
        <text x="230" y="50" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1d4ed8">Prüfgerät</text>
        <text x="230" y="63" textAnchor="middle" fontSize="9" fill="#2563eb">R &lt; 0,3 Ω</text>
        <text x="230" y="76" textAnchor="middle" fontSize="9" fill="#2563eb">oder PASS ✓</text>
        {/* Measurement wires */}
        <line x1="130" y1="56" x2="190" y2="56" stroke="#16a34a" strokeWidth="2" strokeDasharray="6,3"/>
        <circle cx="130" cy="56" r="4" fill="#16a34a"/>
        <circle cx="190" cy="56" r="4" fill="#16a34a"/>
        <text x="158" y="50" textAnchor="middle" fontSize="9" fill="#15803d">Messleitungen</text>
      </svg>
      <p className="text-xs text-gray-500">Schutzleiterprüfung: Widerstand PE-Schiene → Gehäuse/Schutzleiter-Anschluss muss &lt; 0,3 Ω sein</p>
    </div>
  )
}

export function SternDreieckZeitdiagramm() {
  return (
    <div className="my-4 bg-gray-50 rounded-xl p-4">
      <h4 className="text-sm font-semibold text-gray-700 mb-3 text-center">Stern-Dreieck Anlauf – Zeitdiagramm</h4>
      <svg width="360" height="120" viewBox="0 0 360 120" className="w-full">
        {/* Time axis */}
        <line x1="30" y1="100" x2="345" y2="100" stroke="#6b7280" strokeWidth="1.5"/>
        <text x="350" y="104" fontSize="10" fill="#6b7280">t</text>
        {/* K1 (main) */}
        <text x="5" y="22" fontSize="10" fill="#374151">K1</text>
        <line x1="30" y1="20" x2="60" y2="20" stroke="#d1d5db" strokeWidth="2"/>
        <line x1="60" y1="20" x2="60" y2="10" stroke="#2563eb" strokeWidth="2"/>
        <line x1="60" y1="10" x2="340" y2="10" stroke="#2563eb" strokeWidth="2"/>
        {/* K3 (star) */}
        <text x="5" y="47" fontSize="10" fill="#374151">K3 Y</text>
        <line x1="30" y1="45" x2="60" y2="45" stroke="#d1d5db" strokeWidth="2"/>
        <line x1="60" y1="45" x2="60" y2="35" stroke="#16a34a" strokeWidth="2"/>
        <line x1="60" y1="35" x2="180" y2="35" stroke="#16a34a" strokeWidth="2"/>
        <line x1="180" y1="35" x2="180" y2="45" stroke="#16a34a" strokeWidth="2"/>
        <line x1="180" y1="45" x2="340" y2="45" stroke="#d1d5db" strokeWidth="2"/>
        {/* K2 (delta) */}
        <text x="5" y="72" fontSize="10" fill="#374151">K2 Δ</text>
        <line x1="30" y1="70" x2="195" y2="70" stroke="#d1d5db" strokeWidth="2"/>
        <line x1="195" y1="70" x2="195" y2="60" stroke="#ef4444" strokeWidth="2"/>
        <line x1="195" y1="60" x2="340" y2="60" stroke="#ef4444" strokeWidth="2"/>
        {/* Motor current */}
        <text x="5" y="88" fontSize="9" fill="#374151">I</text>
        <path d="M 30 90 Q 75 78 120 86 Q 150 89 180 87 Q 185 87 190 82 Q 210 72 250 84 Q 290 90 340 87" fill="none" stroke="#f59e0b" strokeWidth="2"/>
        {/* Time markers */}
        <line x1="60" y1="100" x2="60" y2="95" stroke="#6b7280" strokeWidth="1"/>
        <text x="60" y="112" textAnchor="middle" fontSize="9" fill="#6b7280">Start</text>
        <line x1="180" y1="100" x2="180" y2="95" stroke="#6b7280" strokeWidth="1"/>
        <text x="180" y="112" textAnchor="middle" fontSize="9" fill="#6b7280">~3–5s</text>
        <line x1="195" y1="100" x2="195" y2="95" stroke="#6b7280" strokeWidth="1"/>
        <text x="250" y="112" textAnchor="middle" fontSize="9" fill="#6b7280">Betrieb (Δ)</text>
        {/* Labels */}
        <text x="120" y="30" textAnchor="middle" fontSize="9" fill="#15803d">Stern-Anlauf</text>
        <text x="270" y="55" textAnchor="middle" fontSize="9" fill="#dc2626">Dreieck-Betrieb</text>
      </svg>
    </div>
  )
}

export function MotorHauptstromkreis() {
  return (
    <div className="my-4 flex flex-col items-center">
      <svg width="300" height="270" viewBox="0 0 300 270" className="drop-shadow-sm">
        {/* Phase lines from top */}
        <line x1="75" y1="10" x2="75" y2="45" stroke="#ef4444" strokeWidth="2.5"/>
        <line x1="150" y1="10" x2="150" y2="45" stroke="#ca8a04" strokeWidth="2.5"/>
        <line x1="225" y1="10" x2="225" y2="45" stroke="#3b82f6" strokeWidth="2.5"/>
        {/* Phase labels */}
        <text x="75" y="8" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ef4444">L1</text>
        <text x="150" y="8" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ca8a04">L2</text>
        <text x="225" y="8" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#3b82f6">L3</text>
        {/* F1 Fuses */}
        <rect x="60" y="45" width="30" height="23" rx="1" fill="white" stroke="#374151" strokeWidth="1.5"/>
        <line x1="75" y1="45" x2="75" y2="68" stroke="#374151" strokeWidth="1"/>
        <rect x="135" y="45" width="30" height="23" rx="1" fill="white" stroke="#374151" strokeWidth="1.5"/>
        <line x1="150" y1="45" x2="150" y2="68" stroke="#374151" strokeWidth="1"/>
        <rect x="210" y="45" width="30" height="23" rx="1" fill="white" stroke="#374151" strokeWidth="1.5"/>
        <line x1="225" y1="45" x2="225" y2="68" stroke="#374151" strokeWidth="1"/>
        <text x="160" y="57" fontSize="10" fill="#374151" fontWeight="bold">F1</text>
        {/* Lines F1 to K1 */}
        <line x1="75" y1="68" x2="75" y2="88" stroke="#374151" strokeWidth="2"/>
        <line x1="150" y1="68" x2="150" y2="88" stroke="#374151" strokeWidth="2"/>
        <line x1="225" y1="68" x2="225" y2="88" stroke="#374151" strokeWidth="2"/>
        {/* K1 NO contacts upper dot */}
        <circle cx="75" cy="92" r="3.5" fill="#1d4ed8"/>
        <circle cx="150" cy="92" r="3.5" fill="#1d4ed8"/>
        <circle cx="225" cy="92" r="3.5" fill="#1d4ed8"/>
        {/* K1 diagonal bridge line */}
        <line x1="75" y1="92" x2="68" y2="118" stroke="#1d4ed8" strokeWidth="2"/>
        <line x1="150" y1="92" x2="143" y2="118" stroke="#1d4ed8" strokeWidth="2"/>
        <line x1="225" y1="92" x2="218" y2="118" stroke="#1d4ed8" strokeWidth="2"/>
        {/* K1 NO contacts lower dot */}
        <circle cx="68" cy="118" r="3.5" fill="#1d4ed8"/>
        <circle cx="143" cy="118" r="3.5" fill="#1d4ed8"/>
        <circle cx="218" cy="118" r="3.5" fill="#1d4ed8"/>
        <text x="240" y="108" fontSize="10" fill="#1d4ed8" fontWeight="bold">K1</text>
        {/* Lines K1 to Q1 */}
        <line x1="68" y1="118" x2="68" y2="135" stroke="#374151" strokeWidth="2"/>
        <line x1="143" y1="118" x2="143" y2="135" stroke="#374151" strokeWidth="2"/>
        <line x1="218" y1="118" x2="218" y2="135" stroke="#374151" strokeWidth="2"/>
        {/* Q1 Motorschutz rectangles */}
        <rect x="53" y="135" width="30" height="22" rx="2" fill="#fff7ed" stroke="#ea580c" strokeWidth="1.5"/>
        <path d="M55 146 Q63 140 71 146 Q79 152 83 146" fill="none" stroke="#ea580c" strokeWidth="1.5"/>
        <rect x="128" y="135" width="30" height="22" rx="2" fill="#fff7ed" stroke="#ea580c" strokeWidth="1.5"/>
        <path d="M130 146 Q138 140 146 146 Q154 152 158 146" fill="none" stroke="#ea580c" strokeWidth="1.5"/>
        <rect x="203" y="135" width="30" height="22" rx="2" fill="#fff7ed" stroke="#ea580c" strokeWidth="1.5"/>
        <path d="M205 146 Q213 140 221 146 Q229 152 233 146" fill="none" stroke="#ea580c" strokeWidth="1.5"/>
        <text x="240" y="148" fontSize="10" fill="#ea580c" fontWeight="bold">Q1</text>
        {/* Lines Q1 to busbar */}
        <line x1="68" y1="157" x2="68" y2="185" stroke="#374151" strokeWidth="2"/>
        <line x1="143" y1="157" x2="143" y2="185" stroke="#374151" strokeWidth="2"/>
        <line x1="218" y1="157" x2="218" y2="185" stroke="#374151" strokeWidth="2"/>
        {/* Motor busbar */}
        <line x1="68" y1="185" x2="218" y2="185" stroke="#374151" strokeWidth="2.5"/>
        {/* Line to motor */}
        <line x1="143" y1="185" x2="143" y2="204" stroke="#374151" strokeWidth="2"/>
        {/* Motor circle */}
        <circle cx="143" cy="232" r="28" fill="#fef3c7" stroke="#d97706" strokeWidth="2"/>
        <text x="143" y="228" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#92400e">M</text>
        <text x="143" y="244" textAnchor="middle" fontSize="10" fill="#92400e">3~</text>
        {/* PE Symbol */}
        <line x1="143" y1="260" x2="143" y2="265" stroke="#16a34a" strokeWidth="1.5"/>
        <line x1="133" y1="265" x2="153" y2="265" stroke="#16a34a" strokeWidth="2"/>
        <line x1="136" y1="268" x2="150" y2="268" stroke="#16a34a" strokeWidth="1.5"/>
        <line x1="139" y1="271" x2="147" y2="271" stroke="#16a34a" strokeWidth="1"/>
      </svg>
      <div className="flex flex-wrap gap-2 mt-2 justify-center text-xs">
        <span className="bg-gray-100 px-2 py-1 rounded border">F1 Sicherung</span>
        <span className="bg-blue-100 px-2 py-1 rounded border border-blue-300 text-blue-800">K1 Schütz-Hauptkontakt</span>
        <span className="bg-orange-100 px-2 py-1 rounded border border-orange-300 text-orange-800">Q1 Motorschutzschalter</span>
        <span className="bg-yellow-100 px-2 py-1 rounded border border-yellow-400 text-yellow-800">M Drehstrommotor</span>
      </div>
    </div>
  )
}

export function SelbsthaltungsSchaltung() {
  return (
    <div className="my-4 flex flex-col items-center">
      <svg width="520" height="130" viewBox="0 0 520 130" className="w-full drop-shadow-sm">
        {/* +24V rail left */}
        <line x1="25" y1="5" x2="25" y2="125" stroke="#ef4444" strokeWidth="3"/>
        <text x="25" y="3" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ef4444">+24V</text>
        {/* 0V rail right */}
        <line x1="495" y1="5" x2="495" y2="125" stroke="#374151" strokeWidth="3"/>
        <text x="495" y="3" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#374151">0V</text>
        {/* Main rung line from +24V */}
        <line x1="25" y1="45" x2="60" y2="45" stroke="#374151" strokeWidth="2"/>
        {/* S0 Notaus NC contact */}
        <line x1="60" y1="35" x2="60" y2="55" stroke="#374151" strokeWidth="2"/>
        <line x1="80" y1="35" x2="80" y2="55" stroke="#374151" strokeWidth="2"/>
        <line x1="60" y1="35" x2="80" y2="35" stroke="#ef4444" strokeWidth="2"/>
        <text x="70" y="31" textAnchor="middle" fontSize="8" fill="#ef4444">S0</text>
        <text x="70" y="64" textAnchor="middle" fontSize="8" fill="#6b7280">Notaus</text>
        <line x1="80" y1="45" x2="110" y2="45" stroke="#374151" strokeWidth="2"/>
        {/* Q1-NC Motorschutz NC contact */}
        <line x1="110" y1="35" x2="110" y2="55" stroke="#374151" strokeWidth="2"/>
        <line x1="130" y1="35" x2="130" y2="55" stroke="#374151" strokeWidth="2"/>
        <line x1="110" y1="35" x2="130" y2="35" stroke="#ea580c" strokeWidth="2"/>
        <text x="120" y="31" textAnchor="middle" fontSize="8" fill="#ea580c">Q1</text>
        <text x="120" y="64" textAnchor="middle" fontSize="8" fill="#6b7280">Motorschutz</text>
        <line x1="130" y1="45" x2="160" y2="45" stroke="#374151" strokeWidth="2"/>
        {/* S1 Stop NC contact */}
        <line x1="160" y1="35" x2="160" y2="55" stroke="#374151" strokeWidth="2"/>
        <line x1="180" y1="35" x2="180" y2="55" stroke="#374151" strokeWidth="2"/>
        <line x1="160" y1="35" x2="180" y2="35" stroke="#374151" strokeWidth="2"/>
        <text x="170" y="31" textAnchor="middle" fontSize="8" fill="#374151">S1</text>
        <text x="170" y="64" textAnchor="middle" fontSize="8" fill="#6b7280">Stop</text>
        <line x1="180" y1="45" x2="210" y2="45" stroke="#374151" strokeWidth="2"/>
        {/* Junction point for parallel */}
        <circle cx="210" cy="45" r="3" fill="#374151"/>
        {/* Upper path: S2 Start NO contact */}
        <line x1="210" y1="35" x2="210" y2="55" stroke="#374151" strokeWidth="2"/>
        <line x1="230" y1="35" x2="230" y2="55" stroke="#374151" strokeWidth="2"/>
        <line x1="212" y1="53" x2="228" y2="37" stroke="#16a34a" strokeWidth="2"/>
        <text x="220" y="31" textAnchor="middle" fontSize="8" fill="#16a34a">S2</text>
        <text x="220" y="64" textAnchor="middle" fontSize="8" fill="#16a34a">Start</text>
        <line x1="230" y1="45" x2="340" y2="45" stroke="#374151" strokeWidth="2"/>
        {/* Lower parallel path for self-hold */}
        <line x1="210" y1="45" x2="210" y2="90" stroke="#374151" strokeWidth="1.5"/>
        <line x1="210" y1="90" x2="250" y2="90" stroke="#374151" strokeWidth="1.5"/>
        {/* K1 Aux NO contact self-hold */}
        <line x1="250" y1="80" x2="250" y2="100" stroke="#374151" strokeWidth="2"/>
        <line x1="270" y1="80" x2="270" y2="100" stroke="#374151" strokeWidth="2"/>
        <line x1="252" y1="98" x2="268" y2="82" stroke="#1d4ed8" strokeWidth="2"/>
        <text x="260" y="76" textAnchor="middle" fontSize="8" fill="#1d4ed8">K1</text>
        <text x="260" y="109" textAnchor="middle" fontSize="8" fill="#1d4ed8">Selbsthalt.</text>
        <line x1="270" y1="90" x2="340" y2="90" stroke="#374151" strokeWidth="1.5"/>
        <line x1="340" y1="90" x2="340" y2="45" stroke="#374151" strokeWidth="1.5"/>
        {/* Junction point right side of parallel */}
        <circle cx="340" cy="45" r="3" fill="#374151"/>
        {/* Line to coil */}
        <line x1="340" y1="45" x2="377" y2="45" stroke="#374151" strokeWidth="2"/>
        {/* K1 Coil */}
        <ellipse cx="405" cy="45" rx="28" ry="14" fill="#eff6ff" stroke="#1d4ed8" strokeWidth="2"/>
        <text x="405" y="42" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1d4ed8">K1</text>
        <text x="405" y="53" textAnchor="middle" fontSize="8" fill="#1d4ed8">Spule</text>
        {/* Line from coil to 0V */}
        <line x1="433" y1="45" x2="495" y2="45" stroke="#374151" strokeWidth="2"/>
        {/* Self-hold arrow label */}
        <text x="260" y="120" textAnchor="middle" fontSize="9" fill="#1d4ed8" fontWeight="bold">Selbsthaltung</text>
      </svg>
      <p className="text-xs text-gray-600 mt-2 text-center max-w-md">
        Wenn K1 anzieht &#8594; K1-Hilfskontakt schliesst &#8594; K1 bleibt angezogen auch nach Loslassen des Starttasters
      </p>
    </div>
  )
}

export function WendeschaltungSchema() {
  return (
    <div className="my-4 flex flex-col items-center">
      <svg width="520" height="180" viewBox="0 0 520 180" className="w-full drop-shadow-sm">
        {/* +24V rail */}
        <line x1="25" y1="5" x2="25" y2="175" stroke="#ef4444" strokeWidth="3"/>
        <text x="25" y="3" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#ef4444">+24V</text>
        {/* 0V rail */}
        <line x1="495" y1="5" x2="495" y2="175" stroke="#374151" strokeWidth="3"/>
        <text x="495" y="3" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#374151">0V</text>
        {/* Rung 1 label */}
        <text x="30" y="48" fontSize="9" fill="#16a34a" fontWeight="bold">&#8594; Rechtslauf</text>
        {/* Rung 1 from +24V */}
        <line x1="25" y1="55" x2="55" y2="55" stroke="#374151" strokeWidth="2"/>
        {/* S0 NC Notaus Rung1 */}
        <line x1="55" y1="46" x2="55" y2="64" stroke="#374151" strokeWidth="2"/>
        <line x1="72" y1="46" x2="72" y2="64" stroke="#374151" strokeWidth="2"/>
        <line x1="55" y1="46" x2="72" y2="46" stroke="#ef4444" strokeWidth="2"/>
        <text x="63" y="43" textAnchor="middle" fontSize="7.5" fill="#ef4444">S0 NC</text>
        <line x1="72" y1="55" x2="100" y2="55" stroke="#374151" strokeWidth="2"/>
        {/* K2-NC Verrieg. */}
        <line x1="100" y1="46" x2="100" y2="64" stroke="#374151" strokeWidth="2"/>
        <line x1="117" y1="46" x2="117" y2="64" stroke="#374151" strokeWidth="2"/>
        <line x1="100" y1="46" x2="117" y2="46" stroke="#dc2626" strokeWidth="2"/>
        <text x="108" y="43" textAnchor="middle" fontSize="7.5" fill="#dc2626">K2-NC</text>
        <text x="108" y="70" textAnchor="middle" fontSize="7" fill="#dc2626">Verrieg.</text>
        <line x1="117" y1="55" x2="150" y2="55" stroke="#374151" strokeWidth="2"/>
        {/* S1 NO Start green Rung1 */}
        <line x1="150" y1="46" x2="150" y2="64" stroke="#374151" strokeWidth="2"/>
        <line x1="167" y1="46" x2="167" y2="64" stroke="#374151" strokeWidth="2"/>
        <line x1="152" y1="62" x2="165" y2="48" stroke="#16a34a" strokeWidth="2"/>
        <text x="158" y="43" textAnchor="middle" fontSize="7.5" fill="#16a34a">S1 NO</text>
        <line x1="167" y1="55" x2="215" y2="55" stroke="#374151" strokeWidth="2"/>
        {/* K1 Aux self-hold NO Rung1 */}
        <line x1="215" y1="46" x2="215" y2="64" stroke="#374151" strokeWidth="2"/>
        <line x1="232" y1="46" x2="232" y2="64" stroke="#374151" strokeWidth="2"/>
        <line x1="217" y1="62" x2="230" y2="48" stroke="#1d4ed8" strokeWidth="2"/>
        <text x="223" y="43" textAnchor="middle" fontSize="7.5" fill="#1d4ed8">K1-Hilfs</text>
        <line x1="232" y1="55" x2="350" y2="55" stroke="#374151" strokeWidth="2"/>
        {/* K1 Coil blue */}
        <ellipse cx="378" cy="55" rx="28" ry="14" fill="#eff6ff" stroke="#1d4ed8" strokeWidth="2"/>
        <text x="378" y="52" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#1d4ed8">K1</text>
        <text x="378" y="62" textAnchor="middle" fontSize="8" fill="#1d4ed8">Spule</text>
        <line x1="406" y1="55" x2="495" y2="55" stroke="#374151" strokeWidth="2"/>
        {/* Dashed K1-NC feedback line */}
        <line x1="378" y1="69" x2="378" y2="130" stroke="#1d4ed8" strokeWidth="1" strokeDasharray="5,3"/>
        <line x1="378" y1="130" x2="100" y2="130" stroke="#1d4ed8" strokeWidth="1" strokeDasharray="5,3"/>
        <line x1="100" y1="130" x2="100" y2="116" stroke="#1d4ed8" strokeWidth="1" strokeDasharray="5,3"/>
        {/* Rung 2 label */}
        <text x="30" y="118" fontSize="9" fill="#dc2626" fontWeight="bold">&#8592; Linkslauf</text>
        {/* Rung 2 from +24V */}
        <line x1="25" y1="125" x2="55" y2="125" stroke="#374151" strokeWidth="2"/>
        {/* S0 NC Notaus Rung2 */}
        <line x1="55" y1="116" x2="55" y2="134" stroke="#374151" strokeWidth="2"/>
        <line x1="72" y1="116" x2="72" y2="134" stroke="#374151" strokeWidth="2"/>
        <line x1="55" y1="116" x2="72" y2="116" stroke="#ef4444" strokeWidth="2"/>
        <text x="63" y="113" textAnchor="middle" fontSize="7.5" fill="#ef4444">S0 NC</text>
        <line x1="72" y1="125" x2="100" y2="125" stroke="#374151" strokeWidth="2"/>
        {/* K1-NC Verrieg. */}
        <line x1="100" y1="116" x2="100" y2="134" stroke="#374151" strokeWidth="2"/>
        <line x1="117" y1="116" x2="117" y2="134" stroke="#374151" strokeWidth="2"/>
        <line x1="100" y1="116" x2="117" y2="116" stroke="#1d4ed8" strokeWidth="2"/>
        <text x="108" y="113" textAnchor="middle" fontSize="7.5" fill="#1d4ed8">K1-NC</text>
        <text x="108" y="140" textAnchor="middle" fontSize="7" fill="#1d4ed8">Verrieg.</text>
        <line x1="117" y1="125" x2="150" y2="125" stroke="#374151" strokeWidth="2"/>
        {/* S2 NO Start red Rung2 */}
        <line x1="150" y1="116" x2="150" y2="134" stroke="#374151" strokeWidth="2"/>
        <line x1="167" y1="116" x2="167" y2="134" stroke="#374151" strokeWidth="2"/>
        <line x1="152" y1="132" x2="165" y2="118" stroke="#dc2626" strokeWidth="2"/>
        <text x="158" y="113" textAnchor="middle" fontSize="7.5" fill="#dc2626">S2 NO</text>
        <line x1="167" y1="125" x2="215" y2="125" stroke="#374151" strokeWidth="2"/>
        {/* K2 Aux self-hold NO Rung2 */}
        <line x1="215" y1="116" x2="215" y2="134" stroke="#374151" strokeWidth="2"/>
        <line x1="232" y1="116" x2="232" y2="134" stroke="#374151" strokeWidth="2"/>
        <line x1="217" y1="132" x2="230" y2="118" stroke="#dc2626" strokeWidth="2"/>
        <text x="223" y="113" textAnchor="middle" fontSize="7.5" fill="#dc2626">K2-Hilfs</text>
        <line x1="232" y1="125" x2="350" y2="125" stroke="#374151" strokeWidth="2"/>
        {/* K2 Coil red */}
        <ellipse cx="378" cy="125" rx="28" ry="14" fill="#fef2f2" stroke="#dc2626" strokeWidth="2"/>
        <text x="378" y="122" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#dc2626">K2</text>
        <text x="378" y="132" textAnchor="middle" fontSize="8" fill="#dc2626">Spule</text>
        <line x1="406" y1="125" x2="495" y2="125" stroke="#374151" strokeWidth="2"/>
        {/* Dashed K2-NC feedback line */}
        <line x1="350" y1="125" x2="340" y2="125" stroke="#dc2626" strokeWidth="1" strokeDasharray="5,3"/>
        <line x1="340" y1="125" x2="340" y2="60" stroke="#dc2626" strokeWidth="1" strokeDasharray="5,3"/>
        <line x1="340" y1="60" x2="108" y2="60" stroke="#dc2626" strokeWidth="1" strokeDasharray="5,3"/>
        <line x1="108" y1="60" x2="108" y2="69" stroke="#dc2626" strokeWidth="1" strokeDasharray="5,3"/>
      </svg>
      <p className="text-xs text-gray-600 mt-2 text-center max-w-md">
        K1-NC sperrt K2 | K2-NC sperrt K1 &#8211; verhindert gleichzeitiges Einschalten &#8594; Kurzschlussschutz
      </p>
    </div>
  )
}

export function BrueckenGleichrichter() {
  return (
    <div className="my-4 flex flex-col items-center">
      <svg width="340" height="230" viewBox="0 0 340 230" className="drop-shadow-sm">
        <defs>
          <marker id="arr-blue-bg" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#1d4ed8"/>
          </marker>
          <marker id="arr-red-bg" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L8,3 z" fill="#dc2626"/>
          </marker>
        </defs>
        {/* Transformer on left */}
        <rect x="5" y="95" width="30" height="40" rx="4" fill="#f3f4f6" stroke="#6b7280" strokeWidth="1.5"/>
        <text x="20" y="112" textAnchor="middle" fontSize="8" fill="#6b7280">AC</text>
        <text x="20" y="123" textAnchor="middle" fontSize="8" fill="#6b7280">Trafo</text>
        {/* AC connections from transformer */}
        <line x1="35" y1="103" x2="60" y2="115" stroke="#6b7280" strokeWidth="1.5"/>
        <line x1="35" y1="127" x2="60" y2="115" stroke="#6b7280" strokeWidth="1.5"/>
        {/* D1: AC1 to DC+ blue */}
        <line x1="60" y1="115" x2="165" y2="30" stroke="#1d4ed8" strokeWidth="2" markerEnd="url(#arr-blue-bg)"/>
        <text x="95" y="65" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1d4ed8">D1</text>
        {/* D2: AC2 to DC+ blue */}
        <line x1="280" y1="115" x2="175" y2="30" stroke="#1d4ed8" strokeWidth="2" markerEnd="url(#arr-blue-bg)"/>
        <text x="245" y="65" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1d4ed8">D2</text>
        {/* D3: DC- to AC1 red */}
        <line x1="170" y1="205" x2="65" y2="120" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr-red-bg)"/>
        <text x="95" y="175" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#dc2626">D3</text>
        {/* D4: DC- to AC2 red */}
        <line x1="170" y1="205" x2="275" y2="120" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arr-red-bg)"/>
        <text x="245" y="175" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#dc2626">D4</text>
        {/* Node circles */}
        <circle cx="170" cy="25" r="5" fill="#1d4ed8"/>
        <circle cx="60" cy="115" r="5" fill="#6b7280"/>
        <circle cx="280" cy="115" r="5" fill="#6b7280"/>
        <circle cx="170" cy="205" r="5" fill="#dc2626"/>
        {/* Labels */}
        <text x="170" y="18" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1d4ed8">DC+</text>
        <text x="48" y="115" textAnchor="end" fontSize="10" fill="#6b7280">AC1</text>
        <text x="292" y="115" textAnchor="start" fontSize="10" fill="#6b7280">AC2</text>
        <text x="170" y="218" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#dc2626">DC-</text>
        {/* DC+ output line right */}
        <line x1="170" y1="25" x2="305" y2="25" stroke="#1d4ed8" strokeWidth="2"/>
        <text x="315" y="29" fontSize="10" fontWeight="bold" fill="#1d4ed8">+</text>
        {/* DC- output line right */}
        <line x1="170" y1="205" x2="305" y2="205" stroke="#dc2626" strokeWidth="2"/>
        <text x="315" y="209" fontSize="10" fontWeight="bold" fill="#dc2626">-</text>
        {/* C1 capacitor right side */}
        <line x1="305" y1="25" x2="305" y2="100" stroke="#1d4ed8" strokeWidth="1.5"/>
        <line x1="291" y1="100" x2="319" y2="100" stroke="#1d4ed8" strokeWidth="2.5"/>
        <line x1="291" y1="107" x2="319" y2="107" stroke="#dc2626" strokeWidth="2.5"/>
        <line x1="305" y1="107" x2="305" y2="205" stroke="#dc2626" strokeWidth="1.5"/>
        <text x="328" y="108" fontSize="9" fill="#374151">C1</text>
      </svg>
      <p className="text-xs text-gray-600 mt-2 text-center max-w-md">
        D1+D2 leiten positive Halbwelle | D3+D4 leiten negative Halbwelle | C1 glättet Restwelligkeit
      </p>
    </div>
  )
}

// Map of diagram IDs to components
export const diagramMap = {
  ohm: OhmDreieck,
  leistung: LeistungsDreieck,
  sterndreieck: SternDreieck,
  sterndreieckzeit: SternDreieckZeitdiagramm,
  wechselstrom: WechselstromKurve,
  drehstrom: DrehstromSystem,
  frl: FRLEinheit,
  zylinder: ZylinderDoppelt,
  fu: FrequenzumrichterSchema,
  pt100: PT100Anschluss,
  logik: LogikGatter,
  kirchhoff: KirchhoffKnoten,
  pe_pruefung: SchutzleiterpruefungSchema,
  motorkreis: MotorHauptstromkreis,
  selbsthaltung: SelbsthaltungsSchaltung,
  wendeschaltung: WendeschaltungSchema,
  brueckengleichrichter: BrueckenGleichrichter,
}
