export default function AppDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        Bienvenido a LOCALIA
      </h1>
      <p className="mt-2 text-gray-600">
        Tu aplicación está lista. Empieza a construir desde aquí.
      </p>
      <div className="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
        <h2 className="font-semibold text-gray-900">Estado del sistema</h2>
        <p className="mt-2 text-sm text-gray-600">
          Backend: <span className="font-mono text-green-600">Conectado</span>
        </p>
      </div>
    </div>
  );
}
