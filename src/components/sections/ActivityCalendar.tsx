'use client';

import * as React from 'react';
import { Calendar } from '../ui/calendar';
import { Calendar as CalendarIcon, MapPin, Users } from 'lucide-react';
import { format, isSameDay } from 'date-fns';
import { es } from 'date-fns/locale';

interface Activity {
  id: number;
  title: string;
  date: Date;
  description: string;
  location?: string;
  participants?: string;
}

// Actividades de ejemplo que demuestran que el proyecto está activo
const activities: Activity[] = [
  {
    id: 1,
    title: "Recolección de Cabello en Peluquerías",
    date: new Date(2025, 10, 25), // 25 de noviembre de 2025
    description: "Visita programada a peluquerías asociadas para recoger cabello reciclado",
    location: "Diversas peluquerías de la ciudad",
    participants: "Equipo de recolección"
  },
  {
    id: 2,
    title: "Taller de Sostenibilidad",
    date: new Date(2025, 10, 28), // 28 de noviembre de 2025
    description: "Taller educativo sobre economía circular y reciclaje de cabello",
    location: "Centro Comunitario Local",
    participants: "Comunidad abierta"
  },
  {
    id: 3,
    title: "Entrega de Alfombras a Agricultores",
    date: new Date(2025, 11, 2), // 2 de diciembre de 2025
    description: "Distribución de alfombras de cabello reciclado a agricultores locales",
    location: "Zona agrícola",
    participants: "Agricultores asociados"
  },
  {
    id: 4,
    title: "Visita de Seguimiento a Cultivos",
    date: new Date(2025, 11, 10), // 10 de diciembre de 2025
    description: "Evaluación del impacto de las alfombras en los cultivos",
    location: "Campos de cultivo",
    participants: "Equipo técnico"
  },
  {
    id: 5,
    title: "Reunión Comunitaria",
    date: new Date(2025, 11, 15), // 15 de diciembre de 2025
    description: "Presentación de resultados y planificación de futuras acciones",
    location: "Sede del proyecto",
    participants: "Toda la comunidad"
  },
  {
    id: 6,
    title: "Campaña de Concientización",
    date: new Date(2025, 11, 20), // 20 de diciembre de 2025
    description: "Jornada de difusión sobre el impacto ambiental positivo del proyecto",
    location: "Plaza principal",
    participants: "Público general"
  },
  {
    id: 7,
    title: "Procesamiento de Material",
    date: new Date(2026, 0, 8), // 8 de enero de 2026
    description: "Día de fabricación de nuevas alfombras con el cabello recolectado",
    location: "Taller de producción",
    participants: "Equipo de producción"
  },
  {
    id: 8,
    title: "Capacitación a Nuevos Colaboradores",
    date: new Date(2026, 0, 15), // 15 de enero de 2026
    description: "Formación para nuevas peluquerías y agricultores interesados",
    location: "Sede del proyecto",
    participants: "Nuevos colaboradores"
  },
];

export default function ActivityCalendar() {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(new Date());
  const [currentMonth, setCurrentMonth] = React.useState<Date>(new Date());

  // Obtener las próximas 2 actividades desde hoy
  const today = new Date();
  const upcomingActivities = activities
    .filter(activity => activity.date >= today)
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 2);

  // Obtener actividades para la fecha seleccionada
  const selectedActivities = selectedDate
    ? activities.filter(activity => isSameDay(activity.date, selectedDate))
    : [];

  // Fechas que tienen actividades
  const activityDates = activities.map(a => a.date);

  // Modificador personalizado para días con actividades
  const modifiers = {
    hasActivity: activityDates,
  };

  const modifiersStyles = {
    hasActivity: {
      fontWeight: 'bold',
      textDecoration: 'underline',
      color: '#059669',
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-stretch">
        {/* Calendario */}
        <div className="h-full">
          <div 
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-emerald-100/50 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white via-emerald-50/30 to-white h-full"
          >
            {/* Decoración de fondo */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(5,150,105,0.08),transparent_50%)]" />
            
            <div className="relative p-4 sm:p-6 lg:p-8 flex flex-col h-full">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-400 rounded-xl sm:rounded-2xl blur-lg opacity-30 animate-pulse" />
                  <div className="relative h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                    <CalendarIcon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-500 bg-clip-text text-transparent">
                    Calendario de Actividades
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">Planifica y organiza tus eventos</p>
                </div>
              </div>
              
              <div className="flex justify-center flex-1 flex-col">
                <div className="w-full flex justify-center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    numberOfMonths={1}
                    locale={es}
                    weekStartsOn={1}
                    month={currentMonth}
                    onMonthChange={setCurrentMonth}
                    modifiers={modifiers}
                    modifiersStyles={modifiersStyles}
                    buttonVariant="ghost"
                    className="rounded-lg border border-emerald-100 shadow-sm p-3 sm:p-4 lg:p-6 bg-white/80 backdrop-blur-sm w-full"
                  />
                </div>
              
                <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600 bg-emerald-50/50 rounded-lg sm:rounded-xl p-2.5 sm:p-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                  <span className="text-center">Las fechas <span className="font-bold text-emerald-600 underline">subrayadas</span> tienen actividades</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lista de Actividades */}
        <div className="h-full">
          <div 
            className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-emerald-100/50 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-white via-teal-50/20 to-white h-full"
          >
            {/* Decoración de fondo */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.08),transparent_50%)]" />
            
            <div className="relative p-4 sm:p-6 lg:p-8 flex flex-col h-full">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-teal-700 to-emerald-600 bg-clip-text text-transparent mb-2">
                  {selectedActivities.length > 0
                    ? `📅 ${format(selectedDate!, 'd \'de\' MMMM', { locale: es })}`
                    : '🌟 Próximas Actividades'}
                </h3>
                <div className="h-1 w-16 sm:w-20 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
              </div>

              {(selectedActivities.length > 0 ? selectedActivities : upcomingActivities).length > 0 ? (
                <div className="space-y-3 sm:space-y-4 flex-1">
                  {(selectedActivities.length > 0 ? selectedActivities : upcomingActivities).map((activity, index) => (
                    <div
                      key={activity.id}
                      className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-white border border-emerald-100 hover:border-emerald-300 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      {/* Barra lateral de color */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-gradient-to-b from-emerald-500 to-teal-500 group-hover:w-1.5 sm:group-hover:w-2 transition-all duration-300" />
                      
                      {/* Badge de número */}
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 h-6 w-6 sm:h-8 sm:w-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-lg">
                        {index + 1}
                      </div>

                      <div className="p-3.5 sm:p-5 pl-4 sm:pl-6">
                        <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                          <div className="mt-0.5 sm:mt-1 h-8 w-8 sm:h-10 sm:w-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                            <CalendarIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0 pr-6 sm:pr-8">
                            <h4 className="font-bold text-gray-800 text-sm sm:text-base mb-1.5 sm:mb-2 leading-tight group-hover:text-emerald-700 transition-colors">
                              {activity.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-emerald-600 font-semibold bg-emerald-50 inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">
                              {format(activity.date, "d 'de' MMMM", { locale: es })}
                            </p>
                          </div>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed pl-10 sm:pl-13">
                          {activity.description}
                        </p>

                        <div className="space-y-1.5 sm:space-y-2 pl-10 sm:pl-13">
                          {activity.location && (
                            <div className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 bg-gray-50 rounded-lg p-1.5 sm:p-2">
                              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                              <span className="break-words">{activity.location}</span>
                            </div>
                          )}
                          {activity.participants && (
                            <div className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-600 bg-gray-50 rounded-lg p-1.5 sm:p-2">
                              <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-teal-600 flex-shrink-0 mt-0.5" />
                              <span className="break-words">{activity.participants}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-8 sm:py-12">
                  <div className="h-16 w-16 sm:h-20 sm:w-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                    <CalendarIcon className="h-8 w-8 sm:h-10 sm:w-10 text-gray-400" />
                  </div>
                  <p className="text-gray-500 font-medium text-sm sm:text-base">No hay actividades programadas</p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">Selecciona otra fecha en el calendario</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

