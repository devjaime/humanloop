import Link from "next/link";

export default function GasfiteriaBlog() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <article className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/blog"
          className="text-cyan-400 hover:underline mb-8 inline-block"
        >
          ← Volver al Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs uppercase px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded">
              ES
            </span>
            <span className="text-sm text-slate-400">6 de Marzo, 2026</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            IA + Gasfiteros Humanos: Un Nuevo Modelo para Servicios del Hogar en Chile
          </h1>
          <p className="text-xl text-slate-300">
            Explorando cómo HumanLoop combina agentes de IA con gasfiteros certificados para entregar servicios confiables.
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2>El Problema: Los Servicios de Gasfitería en Chile Están Rotos</h2>
          <p>
            Si alguna vez has tratado de encontrar un gasfiter confiable en Chile, conoces el dolor:
          </p>
          <ul>
            <li><strong>Disponibilidad no confiable</strong>: La mayoría trabaja de manera informal, sin sistema de agendamiento</li>
            <li><strong>Sin transparencia de precios</strong>: Nunca sabes cuánto pagarás hasta que termina el trabajo</li>
            <li><strong>Preocupaciones de certificación</strong>: No todos los &quot;gasfiteros&quot; están certificados por la SEC</li>
            <li><strong>Respuesta a emergencias</strong>: Cuando una tubería revienta o hay fuga de gas, necesitas ayuda YA</li>
          </ul>
          <p>
            Este es un caso de uso perfecto para orquestación de <strong>Inteligencia Artificial con Humanos en el Loop (HITL)</strong>.
          </p>

          <h2>Nuestro Enfoque: IA que Delega a Humanos</h2>
          <p>HumanLoop no intenta reemplazar a los gasfiteros. En cambio, nuestros agentes de IA:</p>
          <ol>
            <li><strong>Clasifican el problema</strong> (emergencia, urgente o normal)</li>
            <li><strong>Recopilan contexto</strong> (fotos, ubicación, síntomas)</li>
            <li><strong>Rutean al operador correcto</strong> (certificado, cercano, disponible)</li>
            <li><strong>Facilitan la cotización</strong> (transparencia para ambos lados)</li>
            <li><strong>Verifican el trabajo</strong> (fotos, aprobación del cliente)</li>
            <li><strong>Recopilan feedback</strong> (mejora continua)</li>
          </ol>

          <h3>Flujo del Servicio</h3>
          <pre className="bg-slate-800 p-4 rounded-lg overflow-x-auto">
{`Solicitud del Cliente → Clasificación IA → Asignación de Operador → 
Diagnóstico → Cotización → Ejecución → Verificación → Pago`}
          </pre>

          <h2>Tipos de Servicio que Soportamos</h2>
          <table>
            <thead>
              <tr>
                <th>Tipo de Servicio</th>
                <th>Ejemplos</th>
                <th>Rango de Precio (CLP)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reparación Menor</td>
                <td>Llave goteando, filtro tapado</td>
                <td>$25,000 - $45,000</td>
              </tr>
              <tr>
                <td>Reparación Mayor</td>
                <td>Tubería rota, fuga significativa</td>
                <td>$50,000 - $120,000</td>
              </tr>
              <tr>
                <td>Instalación</td>
                <td>Calefón, termoval, lavadora</td>
                <td>$80,000 - $200,000</td>
              </tr>
              <tr>
                <td>Emergencia</td>
                <td>Fuga de gas, inundación</td>
                <td>$60,000 - $150,000</td>
              </tr>
              <tr>
                <td>Mantención</td>
                <td>Revisión anual sistema gas</td>
                <td>$40,000 - $60,000</td>
              </tr>
            </tbody>
          </table>

          <h2>Por Qué la Certificación Importa</h2>
          <p>
            En Chile, <strong>el trabajo de gas DEBE ser realizado por instaladores certificados por la SEC</strong>. Esto no es opcional—es la ley. Nuestra plataforma:
          </p>
          <ul>
            <li>Verifica la certificación del operador antes de integrarlo</li>
            <li>Solo rutea trabajos de gas a profesionales certificados</li>
            <li>Mantiene registros de todo el trabajo para cumplimiento</li>
          </ul>

          <h2>El Stack de Tecnología</h2>
          <ul>
            <li><strong>Agentes de IA</strong>: Análisis de tareas con Claude</li>
            <li><strong>Sistema de Skills</strong>: PlumberSkill + PlumberOperator</li>
            <li><strong>Comunicación</strong>: Integración WhatsApp/Telegram</li>
            <li><strong>Pagos</strong>: Transferencia electrónica</li>
            <li><strong>Verificación</strong>: Evidencia fotográfica antes/después</li>
          </ul>

          <h2>Próximos Pasos</h2>
          <p>
            Estamos pilotosando este servicio en Santiago. Si eres un gasfiter certificado interesado en unirte a nuestra red,{" "}
            <a href="mailto:contacto@humanloop.cl" className="text-cyan-400 hover:underline">
              contáctanos
            </a>.
          </p>

          <hr className="my-8 border-slate-700" />

          <p className="text-sm text-slate-400">
            <em>HumanLoop: IA que orquesta, humanos que ejecutan.</em>
          </p>
        </div>
      </article>
    </main>
  );
}