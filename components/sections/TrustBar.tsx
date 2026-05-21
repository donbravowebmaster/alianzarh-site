const clients = [
  { name: 'Empresa de Tecnología', width: 'w-28' },
  { name: 'Grupo Industrial MX', width: 'w-32' },
  { name: 'Retail Corp', width: 'w-24' },
  { name: 'Fintech SA de CV', width: 'w-28' },
  { name: 'Logística Express', width: 'w-28' },
  { name: 'Salud y Bienestar', width: 'w-24' },
]

export function TrustBar() {
  return (
    <section
      className="bg-white py-10 border-b border-gray-100"
      aria-label="Empresas clientes de Alianza RH"
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <p className="text-brand-gray text-xs text-center uppercase tracking-widest font-semibold mb-7">
          Empresas que ya confían en Alianza RH
        </p>

        {/* overflow-x-auto para scroll horizontal en mobile (< sm) */}
        <div
          className="flex items-center gap-10 overflow-x-auto pb-1
            sm:justify-center sm:flex-wrap sm:overflow-visible
            scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden"
          role="list"
          aria-label="Logos de clientes"
        >
          {clients.map((client) => (
            <div
              key={client.name}
              role="listitem"
              className="shrink-0 flex items-center justify-center"
              title={client.name}
            >
              {/* Placeholder de logo: grayscale con hover a pleno color */}
              <div
                className={`${client.width} h-7 rounded bg-gray-200
                  opacity-40 grayscale
                  hover:opacity-60 hover:grayscale-0
                  transition-[filter,opacity] duration-200 ease-out
                  cursor-default select-none`}
                aria-label={client.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
