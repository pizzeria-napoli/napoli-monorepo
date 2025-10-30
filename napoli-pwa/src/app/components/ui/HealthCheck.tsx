// napoli-pwa/src/app/components/ui/HealthCheck.tsx

/**
 * @file HealthCheck.tsx
 * @description Aparato de diagnóstico soberano para verificar el despliegue.
 * @version 1.0.0
 * @author IA Asistente
 */
export function HealthCheck() {
  // Estilo en línea para asegurar visibilidad sin depender de CSS complejos.
  const style = {
    position: 'fixed' as const,
    bottom: '10px',
    right: '10px',
    padding: '8px 12px',
    backgroundColor: '#10B981', // Un verde brillante
    color: 'white',
    borderRadius: '8px',
    fontSize: '12px',
    fontWeight: 'bold',
    zIndex: 9999,
  };

  return (
    <div style={style}>
      Health Check OK - Build: {new Date().toLocaleTimeString()}
    </div>
  );
}
