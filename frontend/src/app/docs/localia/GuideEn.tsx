import Link from "next/link";

export default function GuideEn({
  contactEmail,
  demoSubject,
}: {
  contactEmail: string;
  demoSubject: string;
}) {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
          <Link href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            ← Localia
          </Link>
          <p className="mt-2 text-xs font-medium uppercase tracking-wider text-gray-500">
            Guide in English
          </p>
          <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
            Localia — Private AI Guide
          </h1>
          <p className="mt-2 text-gray-600">
            A guide to leveraging AI in your organization&apos;s knowledge management with security and privacy.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <article className="prose prose-gray prose-lg max-w-none">
          <p className="lead text-gray-700">
            People who read this guide typically use AI as early adopters, think their organization could benefit from it, and are not sure where to start. If at least two of those three apply, this guide is for you. It&apos;s a living guide we build at Localia from our experience deploying private AI and from industry progress.
          </p>

          <h2>1. What is private AI?</h2>
          <p>
            <strong>Private AI</strong> is a language model developed and/or customized to be used within a specific organization, with that organization&apos;s information and knowledge, and exclusively for that organization&apos;s users.
          </p>
          <p>
            This contrasts with <strong>public AI</strong>: a general-purpose model, open to everyone and designed to cover as much knowledge as possible. In practice there are many nuances (e.g. public models run on private servers or proxy solutions that protect data). We&apos;ll go into more detail later.
          </p>

          <h2>2. What are the building blocks of private AI?</h2>
          <p>To align everyone, a basic glossary:</p>
          <ul>
            <li><strong>Large language model (LLM):</strong> AI tool that understands and generates human-like text. Used for queries, reports, translation, creative content. For sensitive data, an LLM hosted in the organization&apos;s environment ensures optimal privacy and security.</li>
            <li><strong>Organizational knowledge:</strong> All accumulated data (documents, emails, databases, etc.). The AI learns from it to provide useful answers and insights.</li>
            <li><strong>Servers:</strong> The infrastructure where private AI runs. On-premise vs cloud affects cost, performance, and data sovereignty.</li>
            <li><strong>Privacy:</strong> Ensuring sensitive data is not exposed and not accessed without authorization (training and queries).</li>
            <li><strong>Security:</strong> Protecting the system from unauthorized access, breaches, and cyberattacks: encryption, authentication, access control, audits.</li>
          </ul>

          <h2>3. What can you do with private AI?</h2>
          <p>Applications are both general and specific. Four categories:</p>
          <ul>
            <li><strong>Improved knowledge management:</strong> Sift and organize large amounts of unstructured data so employees get to insights faster and make better decisions.</li>
            <li><strong>Better customer experience:</strong> Handle queries and support in natural language with personalized, contextual answers.</li>
            <li><strong>Faster innovation:</strong> Generate ideas and spot opportunities to stay ahead in competitive markets.</li>
            <li><strong>Productivity boost:</strong> Integrate LLMs into workflows to increase delivery speed and reduce stress.</li>
          </ul>

          <h2>4. What privacy and security considerations matter?</h2>
          <ul>
            <li><strong>Data access control:</strong> Prevent unauthorized people from obtaining sensitive information when querying the LLM (semantic search, clear access policies).</li>
            <li><strong>Third-party APIs:</strong> Sending confidential data to an external provider carries risks. For highly sensitive or regulated data, open-source on-premise models are often the viable option.</li>
            <li><strong>Encryption:</strong> Encrypt data at rest and in transit.</li>
            <li><strong>Regular audits:</strong> Review vulnerabilities and improve security continuously.</li>
            <li><strong>Regulatory compliance:</strong> GDPR, CCPA, HIPAA, PCI-DSS or other applicable regulations.</li>
          </ul>

          <h2>5. How do I implement private AI in my organization?</h2>
          <p>The honest answer: <strong>it depends.</strong> It depends on the type of LLM you can use, knowledge bases, accessibility, and privacy and security needs.</p>
          <p>Three typical scenarios:</p>
          <ol>
            <li><strong>Off-the-shelf product</strong> that meets your needs: the market is still limited for cases that require multiple knowledge sources in a secure, tailored way.</li>
            <li><strong>Build in-house:</strong> there are open-source initiatives and vendor support, but you need a strong technical team specialized in AI.</li>
            <li><strong>Work with a development partner:</strong> the hybrid approach we follow at <strong>Localia</strong>. We treat private AI as a mix of service and product: tailored solutions that leverage proven knowledge and use cases. This shortens the path from definition to the first usable prototypes, and we then iterate in short cycles.</li>
          </ol>
          <p>
            At <strong>Localia</strong> we offer a private ChatGPT with your organization&apos;s full knowledge, on your own server, with the access rules you define, and without having to build or maintain the stack.
          </p>

          <hr className="my-10 border-gray-200" />

          <div className="rounded-xl bg-gray-50 border border-gray-200 p-6">
            <p className="font-semibold text-gray-900">Is private AI a fit for your organization?</p>
            <p className="mt-2 text-gray-600">
              At Localia we deploy private AI solutions in companies and institutions. To share your needs and ideas, contact Localia; we&apos;ll get in touch if we can help.
            </p>
            <p className="mt-4">
              <a href={`mailto:${contactEmail}?subject=${encodeURIComponent(demoSubject)}`} className="font-medium text-indigo-600 hover:text-indigo-700">
                Contact Localia →
              </a>
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
