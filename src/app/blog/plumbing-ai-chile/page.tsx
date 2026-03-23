import Link from "next/link";

export default function PlumbingAIBlog() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <article className="max-w-3xl mx-auto px-6 py-12">
        <Link
          href="/blog"
          className="text-cyan-400 hover:underline mb-8 inline-block"
        >
          ← Back to Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs uppercase px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded">
              EN
            </span>
            <span className="text-sm text-slate-400">March 6, 2026</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            AI + Human Plumbers: A New Model for Home Services in Chile
          </h1>
          <p className="text-xl text-slate-300">
            Exploring how HumanLoop combines AI agents with certified plumbers to deliver reliable plumbing services.
          </p>
        </header>

        <div className="prose prose-invert prose-lg max-w-none">
          <h2>The Problem: Plumbing Services in Chile Are Broken</h2>
          <p>
            If you've ever tried to find a reliable <em>gasfiter</em> (plumber) in Chile, you know the pain:
          </p>
          <ul>
            <li><strong>Unreliable availability</strong>: Most work informally, with no scheduling system</li>
            <li><strong>No pricing transparency</strong>: You never know what you'll pay until the job is done</li>
            <li><strong>Certification concerns</strong>: Not all &quot;plumbers&quot; are certified by SEC</li>
            <li><strong>Emergency response</strong>: When pipes burst or gas leaks, you need help NOW</li>
          </ul>
          <p>
            This is a perfect use case for <strong>Human-in-the-Loop (HITL)</strong> AI orchestration.
          </p>

          <h2>Our Approach: AI That Delegates to Humans</h2>
          <p>HumanLoop doesn't try to replace plumbers. Instead, our AI agents:</p>
          <ol>
            <li><strong>Classify the issue</strong> (emergency, urgent, or normal)</li>
            <li><strong>Gather context</strong> (photos, location, symptoms)</li>
            <li><strong>Route to the right operator</strong> (certified, nearby, available)</li>
            <li><strong>Facilitate the quote</strong> (transparency for both sides)</li>
            <li><strong>Verify the work</strong> (photos, customer sign-off)</li>
            <li><strong>Collect feedback</strong> (continuous improvement)</li>
          </ol>

          <h3>Service Flow</h3>
          <pre className="bg-slate-800 p-4 rounded-lg overflow-x-auto">
{`Customer Request → AI Classification → Operator Assignment → 
Diagnosis → Quote → Execution → Verification → Payment`}
          </pre>

          <h2>Service Types We Support</h2>
          <table>
            <thead>
              <tr>
                <th>Service Type</th>
                <th>Examples</th>
                <th>Price Range (CLP)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Minor Repair</td>
                <td>Leaky faucet, clogged filter</td>
                <td>$25,000 - $45,000</td>
              </tr>
              <tr>
                <td>Major Repair</td>
                <td>Broken pipe, significant leak</td>
                <td>$50,000 - $120,000</td>
              </tr>
              <tr>
                <td>Installation</td>
                <td>Water heater, thermoval, washer</td>
                <td>$80,000 - $200,000</td>
              </tr>
              <tr>
                <td>Emergency</td>
                <td>Gas leak, flooding</td>
                <td>$60,000 - $150,000</td>
              </tr>
              <tr>
                <td>Maintenance</td>
                <td>Annual gas system check</td>
                <td>$40,000 - $60,000</td>
              </tr>
            </tbody>
          </table>

          <h2>Why Certification Matters</h2>
          <p>
            In Chile, <strong>gas work MUST be done by SEC-certified installers</strong>. This isn't optional—it's the law. Our platform:
          </p>
          <ul>
            <li>Verifies operator certification before onboarding</li>
            <li>Only routes gas-related jobs to certified professionals</li>
            <li>Keeps records of all work for compliance</li>
          </ul>

          <h2>The Technology Stack</h2>
          <ul>
            <li><strong>AI Agents</strong>: Claude-powered task analysis</li>
            <li><strong>Skills System</strong>: PlumberSkill + PlumberOperator</li>
            <li><strong>Communication</strong>: WhatsApp/Telegram integration</li>
            <li><strong>Payments</strong>: Electronic transfer</li>
            <li><strong>Verification</strong>: Photo evidence before/after</li>
          </ul>

          <h2>What's Next</h2>
          <p>
            We're piloting this service in Santiago. If you're a certified gasfiter interested in joining our network,{" "}
            <a href="mailto:contacto@humanloop.cl" className="text-cyan-400 hover:underline">
              contact us
            </a>.
          </p>

          <hr className="my-8 border-slate-700" />

          <p className="text-sm text-slate-400">
            <em>HumanLoop: AI that orchestrates, humans that execute.</em>
          </p>
        </div>
      </article>
    </main>
  );
}