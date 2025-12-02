import { DayPicker, type DayPickerProps } from "react-day-picker"
import { cn } from "@/lib/utils"
import "react-day-picker/dist/style.css"

export type CalendarProps = DayPickerProps & {
  buttonVariant?: "default" | "ghost"
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  buttonVariant = "default",
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("bg-white", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-3 sm:gap-4",
        month: "space-y-3 sm:space-y-4",
        caption: "flex justify-center pt-1 relative items-center mb-3 sm:mb-4",
        caption_label: "text-base sm:text-lg font-semibold text-gray-800",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          "h-8 w-8 sm:h-9 sm:w-9 bg-transparent p-0 opacity-60 hover:opacity-100 inline-flex items-center justify-center rounded-md hover:bg-emerald-100 transition-colors"
        ),
        nav_button_previous: "absolute left-0 sm:left-1",
        nav_button_next: "absolute right-0 sm:right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex justify-between",
        head_cell: "text-gray-600 rounded-md w-9 sm:w-10 md:w-12 font-medium text-xs sm:text-sm flex items-center justify-center",
        row: "flex w-full mt-1 justify-between",
        cell: "relative p-0 text-center text-xs sm:text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent",
        day: cn(
          buttonVariant === "ghost" 
            ? "h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 p-0 font-normal hover:bg-emerald-50 hover:text-emerald-900" 
            : "h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 p-0 font-normal hover:bg-emerald-100",
          "rounded-lg transition-colors inline-flex items-center justify-center cursor-pointer text-xs sm:text-sm"
        ),
        day_selected:
          "bg-emerald-600 text-white hover:bg-emerald-700 hover:text-white focus:bg-emerald-700 focus:text-white",
        day_today: "bg-emerald-50 text-emerald-900 font-semibold",
        day_outside:
          "text-gray-300 opacity-50",
        day_disabled: "text-gray-300 opacity-50 cursor-not-allowed hover:bg-transparent",
        day_hidden: "invisible",
        ...classNames,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }

